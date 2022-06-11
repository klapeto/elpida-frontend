import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {DownloadComponent} from './download/download.component';
import {BenchmarkResultComponent} from './latest-benchmark-results/benchmark-result/benchmark-result.component';
import {TaskResultsComponent} from './latest-benchmark-results/benchmark-result/task-results/task-results.component';
import {GroupBoxComponent} from '../components/group-box/group-box.component';
import {TopologyViewComponent} from '../components/views/topology-view/topology-view.component';
import {ValueConverter} from '../services/value-converter';
import {LatestBenchmarkResultsComponent} from './latest-benchmark-results/latest-benchmark-results.component';
import {PagingComponent} from '../components/collection/paging/paging.component';
import {BenchmarkResultsService} from '../services/benchmark-results.service';
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
import {StatisticsComponent} from './statistics/statistics.component';
import {PagedCollectionComponent} from '../components/collection/paged-collection/paged-collection.component';
import {CpuService} from '../services/cpu.service';
import {CpuDetailsComponent} from './database/cpus/cpu-details/cpu-details.component';
import {BenchmarkStatisticsService} from '../services/benchmark-statistics.service';
import {StatisticDetailsComponent} from './statistics/statistic-details/statistic-details.component';
import {LoadingIndicatorComponent} from '../components/loading-indicator/loading-indicator.component';
import {DatabaseComponent} from './database/database.component';
import {CpusComponent} from './database/cpus/cpus.component';
import {TopologiesComponent} from './database/topologies/topologies.component';
import {TopologyDetailsComponent} from './database/topologies/topology-details/topology-details.component';
import {BenchmarksComponent} from './database/benchmarks/benchmarks.component';
import {BenchmarkDetailsComponent} from './database/benchmarks/benchmark-details/benchmark-details.component';
import {OperatingSystemsComponent} from './database/operating-systems/operating-systems.component';
import {OperatingSystemDetailsComponent} from './database/operating-systems/operating-system-details/operating-system-details.component';
import {ElpidaVersionsComponent} from './database/elpida-versions/elpida-versions.component';
import {ElpidaVersionDetailsComponent} from './database/elpida-versions/elpida-version-details/elpida-version-details.component';
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
import {IconComponent} from '../components/icon/icon.component';
import {IconTemplateDirective} from '../directives/icon-template.directive';
import {IconTemplateCollectionComponent} from './icon-template-collection/icon-template-collection.component';
import { BenchmarkResultSummaryComponent } from './latest-benchmark-results/benchmark-result/benchmark-result-summary/benchmark-result-summary.component';
import {CpuViewComponent} from '../components/views/cpu-view/cpu-view.component';
import {BenchmarkViewComponent} from '../components/views/benchmark-view/benchmark-view.component';
import {ElpidaViewComponent} from '../components/views/elpida-view/elpida-view.component';
import {OperatingSystemViewComponent} from '../components/views/operating-system-view/operating-system-view.component';
import {CarouselComponent} from '../components/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        DownloadComponent,
        BenchmarkResultComponent,
        TaskResultsComponent,
        GroupBoxComponent,
        TopologyViewComponent,
        LatestBenchmarkResultsComponent,
        PagingComponent,
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
        StatisticsComponent,
        PagedCollectionComponent,
        CpuDetailsComponent,
        StatisticDetailsComponent,
        LoadingIndicatorComponent,
        DatabaseComponent,
        CpusComponent,
        TopologiesComponent,
        TopologyDetailsComponent,
        BenchmarksComponent,
        BenchmarkDetailsComponent,
        OperatingSystemsComponent,
        OperatingSystemDetailsComponent,
        ElpidaVersionsComponent,
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
        TabControlComponent,
        IconComponent,
        IconTemplateDirective,
        IconTemplateCollectionComponent,
        BenchmarkResultSummaryComponent,
        CpuViewComponent,
        BenchmarkViewComponent,
        ElpidaViewComponent,
        OperatingSystemViewComponent,
        CarouselComponent
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
            {path: 'Database/Result', component: LatestBenchmarkResultsComponent, },
            {path: 'Database/Result/:id', component: BenchmarkResultComponent},
            {path: 'Database/Cpu', component: CpusComponent},
            {path: 'Database/Cpu/:id', component: CpuDetailsComponent},
            {path: 'Database/Topology', component: TopologiesComponent},
            {path: 'Database/Topology/:id', component: TopologyDetailsComponent},
            {path: 'Database/Benchmark', component: BenchmarksComponent},
            {path: 'Database/Benchmark/:id', component: BenchmarkDetailsComponent},
            {path: 'Database/Operating-System', component: OperatingSystemsComponent},
            {path: 'Database/Operating-System/:id', component: OperatingSystemDetailsComponent},
            {path: 'Database/Elpida-Version', component: ElpidaVersionsComponent},
            {path: 'Database/Elpida-Version/:id', component: ElpidaVersionDetailsComponent},
            {path: 'Statistics/Top-Cpus-By-Benchmark/:id', component: TopCpusByBenchmarkComponent},
            {path: 'About', component: AboutComponent},
            {path: 'Internal-Error', component: ErrorComponent},
            {path: '**', component: NotFoundComponent}
        ], {useHash: true}),
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    providers: [ValueConverter, BenchmarkResultsService, LinksService, CpuService, BenchmarkStatisticsService, DtoService, {
        provide: HTTP_INTERCEPTORS,
        useClass: GlobalHttpErrorInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
