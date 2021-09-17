import {Injectable} from '@angular/core';
import {DownloadInstance} from '../models/download-instance';
import {Link} from '../models/link';

@Injectable({
    providedIn: 'root'
})
export class LinksService {

    public nativeRepoLink = 'https://gitlab.com/dev-hood/elpida/elpida';
    public backendRepoLink = 'https://gitlab.com/dev-hood/elpida/backend';
    public frontendRepoLink = 'https://gitlab.com/dev-hood/elpida/frontend';

    public readonly binariesLinks = [
        new DownloadInstance('Windows',
            [
                new Link(
                    'Beta x86-64 (.zip)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.zip?job=deploy:windows'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.zip.SHA256SUMS?job=deploy:windows'
                )
            ]
        ),
        new DownloadInstance('Linux',
            [
                new Link(
                    'Beta x86-64 (.AppImage)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.AppImage?job=deploy:linux'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/master/raw/Elpida-latest-x86_64.AppImage.SHA256SUMS?job=deploy:linux'
                )
            ]
        )
    ];

    public readonly sourcesLinks = [
        new DownloadInstance('Elpida source code',
            [
                new Link(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/archive/master/elpida-master.tar.gz'
                )
            ],
            [
                new Link(
                    'Git repository',
                    this.nativeRepoLink
                )
            ]
        ),
        new DownloadInstance('Website source code',
            [
                new Link(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/frontend/-/archive/master/frontend-master.tar.gz'
                )
            ],
            [
                new Link(
                    'Git repository',
                    this.frontendRepoLink
                )
            ]
        ),
        new DownloadInstance('HTTP Rest Api source code',
            [
                new Link(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/backend/-/archive/master/backend-master.tar.gz'
                )
            ],
            [
                new Link(
                    'Git repository',
                    this.backendRepoLink
                )
            ]
        )];

    constructor() {

    }
}
