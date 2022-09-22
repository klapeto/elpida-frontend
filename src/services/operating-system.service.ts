import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {HttpClient} from '@angular/common/http';
import {OperatingSystemModel} from '../models/operating-system.model';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {OptionFilterModel} from '../models/filters/option-filter.model';
import {QueryModel} from '../models/query.model';
import {OptionModel} from '../models/option.model';

@Injectable({
    providedIn: 'root'
})
export class OperatingSystemService extends CollectionService<OperatingSystemModel, OperatingSystemModel> {

    protected readonly baseRoute: string = 'operatingsystem';

    private oses: OptionModel[] = [
        new OptionModel('Windows'),
        new OptionModel('Linux'),
    ];

    public constructor(http: HttpClient) {
        super(http);
    }


    public createSearchFilter(): StringFilterModel {
        return new StringFilterModel('Os name', 'osName');
    }

    public createAdvancedQuery(): QueryModel {
        return new QueryModel([
            new StringFilterModel('Os category', 'osCategory'),
            new StringFilterModel('Os name', 'osName'),
            new StringFilterModel('Os version', 'osVersion')
        ]);
    }

    public createSimpleQuery(): QueryModel {
        return new QueryModel([
            new OptionFilterModel('Os', 'osCategory', this.oses)
        ]);
    }
}
