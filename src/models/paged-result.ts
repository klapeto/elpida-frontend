import {PageRequest} from './page-request';

export class PagedResult<T> {
  constructor(
    public count: number,
    public list: T[],
    public totalCount: number,
    public nextPage: PageRequest) {
  }
}
