import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    Type,
    ViewContainerRef
} from '@angular/core';
import {FilterModel} from '../../../models/filter.model';
import {DateFilterModel} from '../../../models/filters/date-filter.model';
import {NumberFilterModel} from '../../../models/filters/number-filter.model';
import {OptionFilterModel} from '../../../models/filters/option-filter.model';
import {RangeFilterModel} from '../../../models/filters/range-filter.model';
import {StringFilterModel} from '../../../models/filters/string-filter.model';
import {NumberFilterComponent} from '../filters/number-filter/number-filter.component';
import {DateFilterComponent} from '../filters/date-filter/date-filter.component';
import {FilterComponent} from '../filters/filter-component';
import {ValueFilterModel} from '../../../models/value-filter.model';
import {OptionFilterComponent} from '../filters/option-filter/option-filter.component';
import {RangeFilterComponent} from '../filters/range-filter/range-filter.component';
import {StringFilterComponent} from '../filters/string-filter/string-filter.component';

@Component({
    selector: 'app-filter-container',
    templateUrl: './filter-container.component.html',
    styleUrls: ['./filter-container.component.css'],
})
export class FilterContainerComponent {

    @Input() set filter(f: FilterModel) {
        this.onChange(f);
    }

    @Input() set allowComparisons(v: boolean) {
        if (this.component !== undefined) {
            this.component.instance.allowComparison = v;
        }
        this._allowComparisons = v;
    }

    get allowComparisons(): boolean {
        return this._allowComparisons;
    }

    private _allowComparisons: boolean;
    private component: ComponentRef<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {

    }

    private createComponent<TFilter extends ValueFilterModel<any>,
        TComponent extends FilterComponent<any>>(componentType: Type<TComponent>, filter: TFilter): ComponentRef<TComponent> {
        this.viewContainerRef.clear();
        const component = this.viewContainerRef.createComponent<TComponent>(
            this.componentFactoryResolver.resolveComponentFactory<TComponent>(componentType)
        );

        component.instance.filter = filter;
        return component;
    }

    onChange(filter: FilterModel) {
        if (filter instanceof DateFilterModel) {
            const component = this.createComponent<DateFilterModel, DateFilterComponent>(DateFilterComponent, filter);
            component.instance.allowComparison = this.allowComparisons;
            this.component = component;
        } else if (filter instanceof OptionFilterModel) {
            const component = this.createComponent<OptionFilterModel, OptionFilterComponent>(OptionFilterComponent, filter);
            component.instance.filter = filter;
            component.instance.allowComparison = this.allowComparisons;
            this.component = component;
        } else if (filter instanceof RangeFilterModel) {
            const component = this.createComponent<RangeFilterModel, RangeFilterComponent>(RangeFilterComponent, filter);
            component.instance.max = filter.max;
            component.instance.min = filter.min;
            component.instance.step = filter.step;
            component.instance.suffix = filter.suffix;
            component.instance.allowComparison = this.allowComparisons;
            this.component = component;
        } else if (filter instanceof StringFilterModel) {
            const component = this.createComponent<StringFilterModel, StringFilterComponent>(StringFilterComponent, filter);
            component.instance.allowComparison = this.allowComparisons;
            this.component = component;
        } else if (filter instanceof NumberFilterModel) {
            const component = this.createComponent<NumberFilterModel, NumberFilterComponent>(NumberFilterComponent, filter);
            component.instance.allowComparison = this.allowComparisons;
            this.component = component;
        }
    }
}
