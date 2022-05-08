import {LinkModel} from './link.model';

export class DownloadInstanceModel {
    constructor(public readonly name: string,
                public readonly mainLinks: LinkModel[],
                public readonly secondaryLinks?: LinkModel[]) {
    }
}
