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
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-beta-x86_64.zip?job=deploy:beta:windows'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-beta-x86_64.zip.SHA256SUMS?job=deploy:beta:windows'
                )
            ]
        ),
        new DownloadInstance('Linux',
            [
                new Link(
                    'Beta x86-64 (.AppImage)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-beta-x86_64.AppImage?job=deploy:beta:linux'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-beta-x86_64.AppImage.SHA256SUMS?job=deploy:beta:linux'
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
        new DownloadInstance('Website source code',
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
        )];

    constructor() {

    }
}
