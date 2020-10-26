import {PageRequest} from './page-request';
import {Filter} from './filter';
import {FilterDto} from '../services/filter-dto';

export class QueryRequest {

    public filters: FilterDto[];

    constructor(public readonly pageRequest: PageRequest,
                public readonly orderBy?: string,
                public readonly descending?: boolean,
                filters?: Filter[]) {

        if (filters !== undefined) {
            this.filters = [];
            filters.forEach(f => {
                if (f.isSet()) {
                    this.filters.push(f.createDto());
                }
            });
        }
    }
}
