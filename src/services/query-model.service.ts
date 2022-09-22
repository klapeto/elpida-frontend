import {Injectable} from '@angular/core';
import {QueryModel} from '../models/query.model';
import {ValueFilterModel} from '../models/value-filter.model';
import {FilterModel} from '../models/filter.model';
import {ComparisonModel} from '../models/comparison.model';
import {ParserService} from './parser.service';

@Injectable({
    providedIn: 'root'
})
export class QueryModelService {

    public constructor(private readonly parserService: ParserService) {
    }

    public createModelFromParams(params: object, availableFilters: FilterModel[]): { query: QueryModel, page: number } {
        let page = Number.parseInt(params['page'], null);
        if (isNaN(page) || page < 0) {
            page = 0;
        }

        const filtersMap: IFiltersMap = {};
        availableFilters
            .filter(f => f instanceof ValueFilterModel)
            .forEach(f => filtersMap[f.internalName] = f as ValueFilterModel<any>);

        const comparisons = ComparisonModel.mapToInternalNames;

        const assignedFilters: FilterModel[] = [];

        Object.keys(params).forEach(k => {
            const tokens = this.parserService.parseFilterParameter(k);
            const filter = filtersMap[tokens.filterName];
            if (filter === undefined) {
                return;
            }
            const operation = comparisons[tokens.filterOperation];
            filter.comparison = operation !== undefined ? operation() : ComparisonModel.equals();
            filter.trySetValue(params[k]);
            if (filter.isSet()) {
                assignedFilters.push(filter);
            }
        });

        let orderBy = params['orderBy'];
        if (orderBy === undefined || filtersMap[orderBy] === undefined) {
            orderBy = null;
        }

        let descendingString = params['descending'];
        let descending: boolean = false;
        if (descendingString !== undefined) {
            descendingString = descendingString.toLowerCase();
            descending = descendingString === 'true' || descendingString === '1';
        }

        return {
            query: new QueryModel(assignedFilters, orderBy, descending),
            page: page
        };
    }


    public createHttpQueryObjectFromModel(query: QueryModel, page: number): object {
        const obj = {};

        if (page > 0) {
            obj['page'] = page;
        }

        if (query.descending) {
            obj['descending'] = true;
        }

        if (query.orderBy !== null
            && query.orderBy !== '') {
            obj['orderBy'] = query.orderBy;
        }

        query.filters.filter(f => f instanceof ValueFilterModel && f.isSet())
            .forEach(f => {
                const filter = f as ValueFilterModel<any>;
                obj[`${filter.internalName}.${filter.comparison.internalName}`] = filter.value;
            });

        return obj;
    }
}

interface IFiltersMap {
    [name: string]: ValueFilterModel<any>;
}
