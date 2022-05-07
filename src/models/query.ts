import {Filter} from './filter';

export class Query {
    constructor(public filters: Filter[],
                public orderBy: string | null = null,
                public descending: boolean = false) {
    }
}
