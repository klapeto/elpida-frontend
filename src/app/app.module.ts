import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {DownloadComponent} from './download/download.component';
import {ResultComponent} from './result/result.component';
import {ElpidaComponent} from './result/elpida/elpida.component';
import {SystemComponent} from './result/system/system.component';
import {BenchmarkResultComponent} from './result/benchmark-result/benchmark-result.component';
import {GroupBoxComponent} from './group-box/group-box.component';
import {CpuComponent} from './result/system/cpu/cpu.component';
import {TopologyComponent} from './result/system/topology/topology.component';
import {MemoryComponent} from './result/system/memory/memory.component';
import {CpuCacheComponent} from './result/system/cpu/cpu-cache/cpu-cache.component';
import {CpuNodeComponent} from './result/system/topology/cpu-node/cpu-node.component';
import {ValueConverter} from '../services/value-converter';
import {LatestResultsComponent} from './latest-results/latest-results.component';
import {PagingComponent} from './paging/paging.component';
import {OsComponent} from './result/system/os/os.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DownloadComponent,
    ResultComponent,
    ElpidaComponent,
    SystemComponent,
    BenchmarkResultComponent,
    GroupBoxComponent,
    CpuComponent,
    TopologyComponent,
    MemoryComponent,
    CpuCacheComponent,
    CpuNodeComponent,
    LatestResultsComponent,
    PagingComponent,
    OsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'download', component: DownloadComponent},
      {path: 'latest-results', component: LatestResultsComponent},
      {path: 'result/:id', component: ResultComponent},
    ])
  ],
  providers: [ValueConverter],
  bootstrap: [AppComponent]
})
export class AppModule {
}
