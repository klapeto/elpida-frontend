import {Injectable} from '@angular/core';
import {FilterModel} from '../models/filter.model';
import {FilterDto} from './filter-dto';
import {DateFilterModel} from '../models/filters/date-filter.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {OptionFilterModel} from '../models/filters/option-filter.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {ComparisonModel} from '../models/comparison.model';

@Injectable({
    providedIn: 'root'
})
export class DtoService {

    constructor() {
    }

    private static createDateFilterDto(filter: DateFilterModel): FilterDto {

        const comparison = filter.comparison ?? ComparisonModel.greaterEqual();

        const value = (filter.value as Date) === undefined ?
            filter.value.toISOString() :
            new Date(filter.value).toISOString();

        return new FilterDto(filter.internalName, value, comparison.internalName);
    }

    private static createOptionFilterDto(filter: OptionFilterModel): FilterDto {
        return new FilterDto(filter.internalName, filter.value, ComparisonModel.contains().internalName);
    }

    private static createNumberFilterDto(filter: NumberFilterModel): FilterDto {

        const comparison = filter.comparison ?? ComparisonModel.greaterEqual();

        return new FilterDto(
            filter.internalName,
            filter.value,
            comparison.internalName
        );
    }

    private static createStringFilterDto(filter: StringFilterModel): FilterDto {

        const comparison = filter.comparison ?? ComparisonModel.greaterEqual();

        return new FilterDto(
            filter.internalName,
            filter.value,
            comparison.internalName
        );
    }

    public createFromFilter(filter: FilterModel): FilterDto {
        if (filter instanceof DateFilterModel) {
            return DtoService.createDateFilterDto(filter);
        } else if (filter instanceof OptionFilterModel) {
            return DtoService.createOptionFilterDto(filter);
        } else if (filter instanceof StringFilterModel) {
            return DtoService.createStringFilterDto(filter);
        } else if (filter instanceof NumberFilterModel) {
            return DtoService.createNumberFilterDto(filter);
        }
        return null;
    }
}
