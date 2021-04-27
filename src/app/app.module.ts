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
import {GroupBoxComponent} from '../components/group-box/group-box.component';
import {CpuComponent} from './result/system/cpu/cpu.component';
import {TopologyComponent} from './result/system/topology/topology.component';
import {MemoryComponent} from './result/system/memory/memory.component';
import {CpuCacheComponent} from './result/system/cpu/cpu-cache/cpu-cache.component';
import {CpuNodeComponent} from './result/system/topology/cpu-node/cpu-node.component';
import {ValueConverter} from '../services/value-converter';
import {LatestResultsComponent} from './latest-results/latest-results.component';
import {PagingComponent} from '../components/collection/paging/paging.component';
import {OsComponent} from './result/system/os/os.component';
import {ResultsService} from '../services/results.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LinksService} from '../services/links.service';
import {CollectionFiltersComponent} from '../components/collection/collection-filters/collection-filters.component';
import {AboutComponent} from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {SimpleFiltersComponent} from '../components/collection/collection-filters/simple-filters/simple-filters.component';
import {AdvancedFiltersComponent} from '../components/collection/collection-filters/advanced-filters/advanced-filters.component';
import {OptionFilterComponent} from '../components/collection/filters/option-filter/option-filter.component';
import {RangeFilterComponent} from '../components/collection/filters/range-filter/range-filter.component';
import {FilterContainerComponent} from '../components/collection/collection-filters/filter-container/filter-container.component';
import {NumberFilterComponent} from '../components/collection/filters/number-filter/number-filter.component';
import {StringFilterComponent} from '../components/collection/filters/string-filter/string-filter.component';
import {DateFilterComponent} from '../components/collection/filters/date-filter/date-filter.component';
import {ModalComponent} from '../components/modal/modal.component';
import {ChildContainerDirective} from '../directives/child-container.directive';
import {ResultDetailsComponent} from './result/result-details/result-details.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {PagedCollectionComponent} from '../components/collection/paged-collection/paged-collection.component';
import {CpuService} from '../services/cpu.service';
import {ResultItemComponent} from '../components/collection/items/result-item/result-item.component';
import {CpuItemComponent} from '../components/collection/items/cpu-item/cpu-item.component';
import {CpuDetailsComponent} from './cpu-details/cpu-details.component';
import {TaskStatisticItemComponent} from '../components/collection/items/task-statistic-item/task-statistic-item.component';
import {TaskStatisticsService} from '../services/task-statistics.service';

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
        CollectionFiltersComponent,
        AboutComponent,
        SimpleFiltersComponent,
        AdvancedFiltersComponent,
        OptionFilterComponent,
        NumberFilterComponent,
        StringFilterComponent,
        DateFilterComponent,
        RangeFilterComponent,
        FilterContainerComponent,
        ModalComponent,
        ChildContainerDirective,
        ResultDetailsComponent,
        StatisticsComponent,
        PagedCollectionComponent,
        ResultItemComponent,
        CpuItemComponent,
        CpuDetailsComponent,
        TaskStatisticItemComponent
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
            {path: 'statistics', component: StatisticsComponent},
            {path: 'result/:id', component: ResultComponent},
            {path: 'cpu/:id', component: CpuDetailsComponent},
            {path: 'about', component: AboutComponent},
        ], {useHash: true}),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [ValueConverter, ResultsService, LinksService, CpuService, TaskStatisticsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
