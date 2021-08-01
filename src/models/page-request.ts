import {HttpParams} from '@angular/common/http';

export class PageRequest {
    constructor(
        public readonly next: number,
        public readonly count: number,
        public readonly totalCount: number
    ) {
    }

    public asParameters(): HttpParams {
        const returnParams = new HttpParams();
        returnParams.set('next', this.next.toString());
        returnParams.set('count', this.count.toString());
        returnParams.set('totalCount', this.totalCount.toString());
        return returnParams;
    }
}
