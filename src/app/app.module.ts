import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {DownloadComponent} from './download/download.component';
import {ResultComponent} from './result/result.component';
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
import {ResultsService} from '../services/results.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LinksService} from '../services/links.service';
import {FilterResultsComponent} from './latest-results/filter-results/filter-results.component';
import {FiltersService} from '../services/filters.service';
import {AboutComponent} from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SimpleFiltersComponent} from './latest-results/filter-results/simple-filters/simple-filters.component';
import {AdvancedFiltersComponent} from './latest-results/filter-results/advanced-filters/advanced-filters.component';
import {OptionFilterComponent} from '../components/option-filter/option-filter.component';
import {RangeFilterComponent} from '../components/range-filter/range-filter.component';
import { FilterContainerComponent } from './latest-results/filter-results/filter-container/filter-container.component';
import {NumberFilterComponent} from '../components/number-filter/number-filter.component';
import {StringFilterComponent} from '../components/string-filter/string-filter.component';
import {DateFilterComponent} from '../components/date-filter/date-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DownloadComponent,
        ResultComponent,
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
        OsComponent,
        FilterResultsComponent,
        AboutComponent,
        SimpleFiltersComponent,
        AdvancedFiltersComponent,
        OptionFilterComponent,
        NumberFilterComponent,
        StringFilterComponent,
        DateFilterComponent,
        RangeFilterComponent,
        FilterContainerComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'download', component: DownloadComponent},
            {path: 'latest-results', component: LatestResultsComponent},
            {path: 'result/:id', component: ResultComponent},
            {path: 'about', component: AboutComponent},
        ], { useHash: true }),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [ValueConverter, ResultsService, LinksService, FiltersService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
