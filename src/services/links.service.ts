import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  public linuxLatestBeta = 'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.AppImage?job=build:linux';
  public windowsLatestBeta = 'https://gitlab.com/dev-hood/elpida/elpida/-/jobs/artifacts/develop/raw/Elpida-latest-x86_64.zip?job=build:windows';
  public latestSource = 'https://gitlab.com/dev-hood/elpida/elpida/-/archive/develop/elpida-develop.tar.gz';
  public sourceCodeRepo = 'https://gitlab.com/dev-hood/elpida/elpida';

  constructor() {

  }
}
