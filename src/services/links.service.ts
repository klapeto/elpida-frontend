import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  public readonly linuxLatestBeta = 'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.AppImage?job=build:linux';
  public readonly windowsLatestBeta = 'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.zip?job=build:windows';
  public readonly latestSource = 'https://gitlab.com/dev-hood/elpida/elpida/-/archive/develop/elpida-develop.tar.gz';
  public readonly sourceCodeRepo = 'https://gitlab.com/dev-hood/elpida/elpida';

  constructor() {

  }
}
