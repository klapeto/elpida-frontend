import {PageRequest} from './page-request';

export class QueryRequest {
    constructor(public pageRequest: PageRequest, public orderBy?: string, public descending?: boolean, public filters?: object) {
    }
}
