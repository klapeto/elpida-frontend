import {Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, Type, ViewContainerRef} from '@angular/core';
import {FilterModel} from '../../../../models/filter.model';
import {DateFilterModel} from '../../../../models/filters/date-filter.model';
import {NumberFilterModel} from '../../../../models/filters/number-filter.model';
import {OptionFilterModel} from '../../../../models/filters/option-filter.model';
import {RangeFilterModel} from '../../../../models/filters/range-filter.model';
import {StringFilterModel} from '../../../../models/filters/string-filter.model';
import {NumberFilterComponent} from '../../filters/number-filter/number-filter.component';
import {DateFilterComponent} from '../../filters/date-filter/date-filter.component';
import {FilterComponent} from '../../filters/filter-component';
import {ValueFilterModel} from '../../../../models/value-filter.model';
import {OptionFilterComponent} from '../../filters/option-filter/option-filter.component';
import {RangeFilterComponent} from '../../filters/range-filter/range-filter.component';
import {StringFilterComponent} from '../../filters/string-filter/string-filter.component';

@Component({
    selector: 'app-filter-container',
    templateUrl: './filter-container.component.html',
    styleUrls: ['./filter-container.component.css']
})
export class FilterContainerComponent implements OnInit {

    @Input() filter: FilterModel;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
    }

    private createComponent<TFilter extends ValueFilterModel<any>,
        TComponent extends FilterComponent<any>>(componentType: Type<TComponent>): ComponentRef<TComponent> {
        const component = this.viewContainerRef.createComponent<TComponent>(
            this.componentFactoryResolver.resolveComponentFactory<TComponent>(componentType)
        );
        component.instance.filter = this.filter as TFilter;

        return component;
    }

    ngOnInit(): void {
        if (this.filter instanceof DateFilterModel) {
            this.createComponent<DateFilterModel, DateFilterComponent>(DateFilterComponent);
        } else if (this.filter instanceof OptionFilterModel) {
            const component = this.createComponent<OptionFilterModel, OptionFilterComponent>(OptionFilterComponent);
            component.instance.filter = this.filter;
        } else if (this.filter instanceof RangeFilterModel) {
            const component = this.createComponent<RangeFilterModel, RangeFilterComponent>(RangeFilterComponent);
            component.instance.max = this.filter.max;
            component.instance.min = this.filter.min;
            component.instance.step = this.filter.step;
            component.instance.suffix = this.filter.suffix;
        } else if (this.filter instanceof StringFilterModel) {
            this.createComponent<StringFilterModel, StringFilterComponent>(StringFilterComponent);
        } else if (this.filter instanceof NumberFilterModel) {
            this.createComponent<NumberFilterModel, NumberFilterComponent>(NumberFilterComponent);
        }
    }
}
