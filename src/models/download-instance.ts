import {Link} from './link';

export class DownloadInstance {
    constructor(public readonly name: string,
                public readonly mainLinks: Link[],
                public readonly secondaryLinks?: Link[]) {
    }
}
