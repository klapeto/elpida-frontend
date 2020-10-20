import {PageRequest} from './page-request';
import {Filter} from './filter';

export class QueryRequest {

    public filters: object;

    constructor(public readonly pageRequest: PageRequest,
                public readonly orderBy?: string,
                public readonly descending?: boolean,
                filters?: Filter[]) {

        if (filters !== undefined) {
            this.filters = {};
            filters.forEach(f => {
                if (f.isSet()) {
                    this.filters[f.internalName] = f.createDto();
                }
            });
        }
    }
}
