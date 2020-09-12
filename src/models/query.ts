import {Filter} from './filter';

export class Query {
    constructor(public readonly filters: Filter[],
                public orderBy: Filter,
                public descending: boolean) {
    }
}
