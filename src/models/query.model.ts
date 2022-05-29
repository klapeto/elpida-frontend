import {FilterModel} from './filter.model';

export class QueryModel {
    public constructor(public filters: FilterModel[],
                public orderBy: string | null = null,
                public descending: boolean = false) {
    }
}
