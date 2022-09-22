import {TestBed} from '@angular/core/testing';

import {ParserService} from './parser.service';

describe('ParserService', () => {
    let service: ParserService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ParserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('parseFilterParameter should throw on invalid string', () => {
        expect(() => service.parseFilterParameter('')).toThrow();
        expect(() => service.parseFilterParameter(' ')).toThrow();
        expect(() => service.parseFilterParameter(' \t\n\r')).toThrow();
        expect(() => service.parseFilterParameter(null)).toThrow();
        expect(() => service.parseFilterParameter(undefined)).toThrow();
        expect(() => service.parseFilterParameter('.')).toThrow();
        expect(() => service.parseFilterParameter('lol.')).toThrow();
        expect(() => service.parseFilterParameter('.lol.')).toThrow();
        expect(() => service.parseFilterParameter('.lol')).toThrow();
        expect(() => service.parseFilterParameter('..')).toThrow();
        expect(() => service.parseFilterParameter('..  ')).toThrow();
        expect(() => service.parseFilterParameter('.  .  ')).toThrow();
        expect(() => service.parseFilterParameter('lol.haha.wtf')).toThrow();
        // expect(() => service.parseFilterParameter('lol.ha-ha')).toThrow();
        // expect(() => service.parseFilterParameter('l=ol.ha-ha')).toThrow();
        // expect(() => service.parseFilterParameter('l=ol.ha-ha-')).toThrow();
    });

  it('parseFilterParameter parameter with dot should parse correctly', () => {
    const result = service.parseFilterParameter('lol.contains');
    expect(result.filterName).toEqual('lol');
    expect(result.filterOperation).toEqual('contains');
  });

  it('parseFilterParameter parameter without dot should parse correctly and operation should be "equals"', () => {
    const result = service.parseFilterParameter('lol');
    expect(result.filterName).toEqual('lol');
    expect(result.filterOperation).toEqual('equals');
  });
});
