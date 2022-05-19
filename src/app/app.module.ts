import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {TopologyComponent} from '../components/topology/topology.component';
import {MemoryComponent} from './result/system/memory/memory.component';
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
import {OptionFilterComponent} from '../components/collection/filters/option-filter/option-filter.component';
import {RangeFilterComponent} from '../components/collection/filters/range-filter/range-filter.component';
import {FilterContainerComponent} from '../components/collection/filter-container/filter-container.component';
import {NumberFilterComponent} from '../components/collection/filters/number-filter/number-filter.component';
import {StringFilterComponent} from '../components/collection/filters/string-filter/string-filter.component';
import {DateFilterComponent} from '../components/collection/filters/date-filter/date-filter.component';
import {ModalComponent} from '../components/modal/modal.component';
import {ChildContainerDirective} from '../directives/child-container.directive';
import {ResultDetailsComponent} from './result/result-details/result-details.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {PagedCollectionComponent} from '../components/collection/paged-collection/paged-collection.component';
import {CpuService} from '../services/cpu.service';
import {CpuItemComponent} from '../components/collection/items/cpu-item/cpu-item.component';
import {CpuDetailsComponent} from './cpu-details/cpu-details.component';
import {BenchmarkStatisticItemComponent} from '../components/collection/items/benchmark-statistic-item/benchmark-statistic-item.component';
import {BenchmarkStatisticsService} from '../services/benchmark-statistics.service';
import {StatisticDetailsComponent} from './statistics/statistic-details/statistic-details.component';
import {LoadingIndicatorComponent} from '../components/loading-indicator/loading-indicator.component';
import {DatabaseComponent} from './database/database.component';
import {CpusComponent} from './database/cpus/cpus.component';
import {TopologyItemComponent} from '../components/collection/items/topology-item/topology-item.component';
import {TopologiesComponent} from './database/topologies/topologies.component';
import {TopologyDetailsComponent} from './topology-details/topology-details.component';
import {BenchmarksComponent} from './database/benchmarks/benchmarks.component';
import {BenchmarkItemComponent} from '../components/collection/items/benchmark-item/benchmark-item.component';
import {BenchmarkDetailsComponent} from './benchmark-details/benchmark-details.component';
import {OsesComponent} from './database/oses/oses.component';
import {OsItemComponent} from '../components/collection/items/os-item/os-item.component';
import {OsDetailsComponent} from './os-details/os-details.component';
import {ElpidaVersionsComponent} from './database/elpida-versions/elpida-versions.component';
import {ElpidaItemComponent} from '../components/collection/items/elpida-item/elpida-item.component';
import {ElpidaVersionDetailsComponent} from './elpida-details/elpida-version-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TopCpusByBenchmarkComponent} from './statistics/top-cpus-by-benchmark/top-cpus-by-benchmark.component';
import {ErrorComponent} from './internal-error/error.component';
import {GlobalHttpErrorInterceptor} from '../services/global-http-error.interceptor';
import {IconWithTextComponent} from '../components/icon-with-text/icon-with-text.component';
import {DtoService} from '../services/dto.service';
import {OptionComponent} from '../components/option/option.component';
import {FilterPoolComponent} from '../components/collection/filter-pool/filter-pool.component';
import {NewFilterComponent} from '../components/collection/filter-pool/new-filter/new-filter.component';
import {ComparisonSelectComponent} from '../components/collection/filters/comparison-select/comparison-select.component';
import {JumpToPageComponent} from '../components/collection/paging/jump-to-page/jump-to-page.component';
import {TabControlComponent} from '../components/tab-control/tab-control.component';

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
        LatestResultsComponent,
        PagingComponent,
        OsComponent,
        CollectionFiltersComponent,
        AboutComponent,
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
        CpuItemComponent,
        CpuDetailsComponent,
        BenchmarkStatisticItemComponent,
        StatisticDetailsComponent,
        LoadingIndicatorComponent,
        DatabaseComponent,
        CpusComponent,
        TopologyItemComponent,
        TopologiesComponent,
        TopologyDetailsComponent,
        BenchmarksComponent,
        BenchmarkItemComponent,
        BenchmarkDetailsComponent,
        OsItemComponent,
        OsesComponent,
        OsDetailsComponent,
        ElpidaVersionsComponent,
        ElpidaItemComponent,
        ElpidaVersionDetailsComponent,
        NotFoundComponent,
        TopCpusByBenchmarkComponent,
        ErrorComponent,
        IconWithTextComponent,
        OptionComponent,
        FilterPoolComponent,
        NewFilterComponent,
        ComparisonSelectComponent,
        JumpToPageComponent,
        TabControlComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
        HttpClientModule,
        FormsModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'Download', component: DownloadComponent},
            {path: 'Statistics', component: StatisticsComponent},
            {path: 'Statistics/:id', component: StatisticDetailsComponent},
            {path: 'Database', component: DatabaseComponent},
            {path: 'Database/Results', component: LatestResultsComponent, },
            {path: 'Database/Result/:id', component: ResultComponent},
            {path: 'Database/Cpu', component: CpusComponent},
            {path: 'Database/Cpu/:id', component: CpuDetailsComponent},
            {path: 'Database/Topology', component: TopologiesComponent},
            {path: 'Database/Topology/:id', component: TopologyDetailsComponent},
            {path: 'Database/Benchmark', component: BenchmarksComponent},
            {path: 'Database/Benchmark/:id', component: BenchmarkDetailsComponent},
            {path: 'Database/Operating-System', component: OsesComponent},
            {path: 'Database/Operating-System/:id', component: OsDetailsComponent},
            {path: 'Database/Elpida-Version', component: ElpidaVersionsComponent},
            {path: 'Database/Elpida-Version/:id', component: ElpidaVersionDetailsComponent},
            {path: 'Top-Cpus-By-Benchmark/:id', component: TopCpusByBenchmarkComponent},
            {path: 'About', component: AboutComponent},
            {path: 'Internal-Error', component: ErrorComponent},
            {path: '**', component: NotFoundComponent}
        ], {useHash: true}),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [ValueConverter, ResultsService, LinksService, CpuService, BenchmarkStatisticsService, DtoService, {
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalHttpErrorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
