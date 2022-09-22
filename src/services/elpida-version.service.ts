import {Injectable} from '@angular/core';
import {CollectionService} from './collection-service';
import {ElpidaVersionModel} from '../models/elpida/elpida-version.model';
import {HttpClient} from '@angular/common/http';
import {StringFilterModel} from '../models/filters/string-filter.model';
import {NumberFilterModel} from '../models/filters/number-filter.model';
import {OptionFilterModel} from '../models/filters/option-filter.model';
import {QueryModel} from '../models/query.model';
import {DtoService} from './dto.service';
import {OptionModel} from '../models/option.model';

@Injectable({
    providedIn: 'root'
})
export class ElpidaVersionService extends CollectionService<ElpidaVersionModel, ElpidaVersionModel> {

    protected readonly baseRoute: string = 'ElpidaVersion';

    private compilers: OptionModel[] = [
        new OptionModel('GNU')
    ];

    public constructor(http: HttpClient) {
        super(http);
    }

    public createSearchFilter(): StringFilterModel {
        return undefined;
    }

    public createAdvancedQuery(): QueryModel {
        return new QueryModel([
            new NumberFilterModel('Major version', 'majorVersion'),
            new NumberFilterModel('Minor version', 'minorVersion'),
            new NumberFilterModel('Revision version', 'revisionVersion'),
            new NumberFilterModel('Build version', 'buildVersion'),
            new StringFilterModel('Compiler name', 'compilerName'),
            new StringFilterModel('Compiler version', 'compilerVersion'),
        ]);
    }

    public createSimpleQuery(): QueryModel {
        return new QueryModel([
            new OptionFilterModel('Compiler', 'compilerName', this.compilers),
            new NumberFilterModel('Major version', 'majorVersion'),
            new NumberFilterModel('Minor version', 'minorVersion'),
            new NumberFilterModel('Revision version', 'revisionVersion'),
            new NumberFilterModel('Build version', 'buildVersion'),
        ]);
    }
}
