export class PageRequest {
    constructor(
        public readonly next: number,
        public readonly count: number,
        public readonly totalCount: number
    ) {
    }
}
