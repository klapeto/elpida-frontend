import {PageRequest} from './page-request';

export class PagedResult<T> {
    constructor(
        public readonly count: number,
        public readonly items: T[],
        public readonly totalCount: number,
        public readonly nextPage: PageRequest) {
    }
}
