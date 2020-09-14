import {Injectable} from '@angular/core';
import {DownloadInstance} from '../models/download-instance';
import {Link} from '../models/link';

@Injectable({
    providedIn: 'root'
})
export class LinksService {

    public readonly downloadLinks = [
        new DownloadInstance('Windows',
            [
                new Link(
                    'Beta Zip (x86-64)',
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
                    'Beta AppImage (x86-64)',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.AppImage?job=build:linux'
                )
            ],
            [
                new Link(
                    'sha256sum',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/SHA256SUMS?job=build:linux'
                )
            ]
        ),
        new DownloadInstance('Source code',
            [
                new Link(
                    'Beta Source code',
                    'https://gitlab.com/dev-hood/elpida/elpida/-/archive/develop/elpida-develop.tar.gz'
                )
            ],
            [
                new Link(
                    'Git Repository',
                    'https://gitlab.com/dev-hood/elpida/elpida'
                )
            ]
        ),
    ];
    constructor() {

    }
}
