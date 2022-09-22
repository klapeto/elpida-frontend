import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ParserService {

    public constructor() {
    }

    public parseFilterParameter(parameterName: string): { filterName: string, filterOperation: string } {

        if (parameterName === undefined
            || parameterName === null) {
            throw new Error('Filter parameter name must not be empty');
        }

        parameterName = parameterName.trim();

        if (parameterName.length === 0) {
            throw new Error('Filter parameter name must not be empty');
        }

        let dot = false;
        let name = '';
        let dotIndex = 0;

        for (let i = 0; i < parameterName.length; ++i) {
            const c = parameterName[i];

            if (c === '.') {

                if (dot) {
                    throw new Error('Filter parameter cannot have more than 1 dot');
                }

                if (i === parameterName.length - 1) {
                    throw new Error('Filter parameter cannot end with dot');
                }

                if (i > 0) {
                    name = parameterName.slice(0, i);
                } else {
                    throw new Error('Filter parameter cannot start with dot');
                }

                dotIndex = i + 1;
                dot = true;
            }
            // if (c < '0' || c > 'z' || c !== '-') {
            //     throw new Error('Filter parameter cannot have a non letter or digit character but was ' + c);
            // }
        }

        if (!dot) {
            name = parameterName;
            return {filterName: name, filterOperation: 'equals'};
        }

        return {filterName: name, filterOperation: parameterName.slice(dotIndex)};
    }
}
