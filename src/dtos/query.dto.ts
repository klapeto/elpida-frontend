import {PageDto} from './page.dto';
import {FilterDto} from '../services/filter-dto';

export class QueryDto {

    public constructor(public readonly pageRequest: PageDto,
                public readonly orderBy?: string,
                public readonly descending?: boolean,
                public readonly filters?: FilterDto[]) {
    }
}
