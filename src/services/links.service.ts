import {Injectable} from '@angular/core';
import {DownloadInstanceModel} from '../models/download-instance.model';
import {LinkModel} from '../models/link.model';

@Injectable({
    providedIn: 'root'
})
export class LinksService {

    public nativeRepoLink: string = 'https://gitlab.com/dev-hood/elpida/elpida';
    public backendRepoLink: string = 'https://gitlab.com/dev-hood/elpida/backend';
    public frontendRepoLink: string = 'https://gitlab.com/dev-hood/elpida/frontend';

    public readonly binariesLinks: DownloadInstanceModel[] = [
        new DownloadInstanceModel('Windows',
            [
                new LinkModel(
                    'Beta x86-64 (.zip)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.zip?job=deploy:windows'
                )
            ],
            [
                new LinkModel(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.zip.SHA256SUMS?job=deploy:windows'
                )
            ]
        ),
        new DownloadInstanceModel('Linux',
            [
                new LinkModel(
                    'Beta x86-64 (.AppImage)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.AppImage?job=deploy:linux'
                )
            ],
            [
                new LinkModel(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.AppImage.SHA256SUMS?job=deploy:linux'
                )
            ]
        )
    ];

    public readonly sourcesLinks: DownloadInstanceModel[] = [
        new DownloadInstanceModel('Elpida source code',
            [
                new LinkModel(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/archive/master/elpida-master.tar.gz'
                )
            ],
            [
                new LinkModel(
                    'Git repository',
                    this.nativeRepoLink
                )
            ]
        ),
        new DownloadInstanceModel('Website source code',
            [
                new LinkModel(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/frontend/-/archive/master/frontend-master.tar.gz'
                )
            ],
            [
                new LinkModel(
                    'Git repository',
                    this.frontendRepoLink
                )
            ]
        ),
        new DownloadInstanceModel('HTTP Rest Api source code',
            [
                new LinkModel(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/backend/-/archive/master/backend-master.tar.gz'
                )
            ],
            [
                new LinkModel(
                    'Git repository',
                    this.backendRepoLink
                )
            ]
        )];

    public constructor() {

    }
}
