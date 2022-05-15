import {PageDto} from './page.dto';

export class PagedResultDto<T> {
    constructor(
        public readonly count: number,
        public readonly items: T[],
        public readonly totalCount: number,
        public readonly nextPage: PageDto) {
    }
}