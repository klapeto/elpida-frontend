import {PageRequest} from './page-request';

export class QueryRequest {
    constructor(public readonly pageRequest: PageRequest,
                public readonly orderBy?: string,
                public readonly descending?: boolean,
                public readonly filters?: object) {
    }
}
