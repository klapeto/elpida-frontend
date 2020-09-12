import {Filter} from './filter';

export class Query {
    constructor(public filters: Filter[], public orderBy: Filter, public descending: boolean) {
    }
}
