import {Injectable} from '@angular/core';
import {DownloadInstance} from '../models/download-instance';
import {Link} from '../models/link';

@Injectable({
    providedIn: 'root'
})
export class LinksService {

    public readonly binariesLinks = [
        new DownloadInstance('Windows',
            [
                new Link(
                    'Beta x86-64 (.zip)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.zip?job=build:windows'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/SHA256SUMS?job=build:windows'
                )
            ]
        ),
        new DownloadInstance('Linux',
            [
                new Link(
                    'Beta x86-64 (.AppImage)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.AppImage?job=build:linux'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/SHA256SUMS?job=build:linux'
                )
            ]
        )
    ];

    public readonly sourcesLinks = [
        new DownloadInstance('Elpida source code',
            [
                new Link(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/archive/develop/elpida-develop.tar.gz'
                )
            ],
            [
                new Link(
                    'Git repository',
                    'https://gitlab.com/dev-hood/elpida/elpida'
                )
            ]
        ),
        new DownloadInstance('Website Source code',
            [
                new Link(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/frontend/-/archive/develop/frontend-develop.tar.gz'
                )
            ],
            [
                new Link(
                    'Git repository',
                    'https://gitlab.com/dev-hood/elpida/frontend'
                )
            ]
        ),
        new DownloadInstance('HTTP Rest Api source code',
            [
                new Link(
                    'Beta source code (.tar.gz)',
                    'https://gitlab.com/dev-hood/elpida/backend/-/archive/develop/backend-develop.tar.gz'
                )
            ],
            [
                new Link(
                    'Git repository',
                    'https://gitlab.com/dev-hood/elpida/backend'
                )
            ]
        ),];

    constructor() {

    }
}
