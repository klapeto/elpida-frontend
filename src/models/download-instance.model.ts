import {LinkModel} from './link.model';

export class DownloadInstanceModel {
    public constructor(public readonly name: string,
                public readonly mainLinks: LinkModel[],
                public readonly secondaryLinks?: LinkModel[]) {
    }
}
