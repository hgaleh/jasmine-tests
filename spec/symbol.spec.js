describe('symbol', () => {
    it('getOwnPropertySymbols', () => {
        const sym1 = Symbol();
        const sym2 = Symbol();
        const s = {
            [sym1]: 10,
            [sym2]: 12,
            propname: 13
        }
        const symbols = Object.getOwnPropertySymbols(s);
        expect(symbols.includes(sym1));
        expect(symbols.includes(sym2));
        expect(symbols.length).toBe(2);
    });

    it('create symbol with description', () => {
        const sym1 = Symbol.for('sym1');
        const s = {
            [sym1]: 10,
            propname: 13
        }

        expect(s[Symbol.for('sym1')]).toBe(10);
    });

    it('toString', () => {
        class Person {}
        const m = new Person();
        expect(m.toString()).toBe('[object Object]')
        Person.prototype[Symbol.toStringTag] = 'Person';
        expect(m.toString()).toBe('[object Person]')
    });
    
    it('defie symbol', () => {
        const d = Symbol();
        expect(typeof d).toBe('symbol');
    });

    it('cant coerce into strings', () => {
        const s = Symbol();
        const d = () => s + '';
        expect(d).toThrow();
    });

    it('cant coerce into integer', () => {
        const s = Symbol();
        const d = () => s + 0;
        expect(d).toThrow();
    });

    it('Object.keys return all enumerable properties', () => {
        const s = Symbol();
        const d = {
            __proto__: {c: 13},
            a: 10,
            b: 11,
            [s]: 14
        };
        Object.defineProperty(d, 'a', { enumerable: false });
        expect(Object.keys(d)).toEqual(['b']);
    });

    it('Object.getOwnPropertyNames return all own properties', () => {
        const s = Symbol();
        const d = {
            __proto__: {c: 13},
            a: 10,
            b: 11,
            [s]: 14
        };
        Object.defineProperty(d, 'a', { enumerable: false });
        expect(Object.getOwnPropertyNames(d)).toEqual(['a', 'b']);
    });

    it('Object.getOwnPropertySymbols return all own symbols', () => {
        const s = Symbol();
        const d = {
            __proto__: {c: 13},
            a: 10,
            b: 11,
            [s]: 14
        };
        Object.defineProperty(d, 'a', { enumerable: false });
        Object.defineProperty(d, s, { enumerable: false });
        expect(Object.getOwnPropertySymbols(d)).toEqual([s]);
    });

    it('instanceof override', () => {
        function F(name) {
            this.name = name;
        }
        const d = new F('Ali');
        expect(d).toBeInstanceOf(F);
        Object.defineProperty(F, Symbol.hasInstance, {
            value: function() {
                return false;
            }
        });
        expect(d).not.toBeInstanceOf(F);
    });

    it('non-object can call instance of', () => {
        function F(name) {
            this.name = name;
        }
        const d = true;
        Object.defineProperty(F, Symbol.hasInstance, {
            value: function(v) {
                return true;
            }
        });
        expect(d).toBeInstanceOf(F);
    });

    it('inConcatSpreadable', () => {
        const collection = {
            0: 'Hello',
            1: 'world',
            length: 2,
            [Symbol.isConcatSpreadable]: true
        };
        const msg = ['Hi'].concat(collection);
        expect(msg).toEqual(['Hi', 'Hello', 'world']);
    });

    it('inConcatSpreadable without length', () => {
        const collection = {
            0: 'Hello',
            1: 'world',
            [Symbol.isConcatSpreadable]: true
        };
        const msg = ['Hi'].concat(collection);
        expect(msg).toEqual(['Hi']);
    });

    it('inConcatSpreadable with length 1', () => {
        const collection = {
            0: 'Hello',
            1: 'world',
            length: 1,
            [Symbol.isConcatSpreadable]: true
        };
        const msg = ['Hi'].concat(collection);
        expect(msg).toEqual(['Hi', 'Hello']);
    });

    it('inConcatSpreadable with undefined properties', () => {
        const collection = {
            2: 'Hello',
            1: 'world',
            length: 2,
            [Symbol.isConcatSpreadable]: true
        };
        expect(collection[0]).toBeUndefined();
        const msg = ['Hi'].concat(collection);
        expect(msg).toEqual(['Hi', undefined, 'world']);
    });

    it('object with same name property', () => {
        const t = {
            0: 'Ali',
            0: 'Hojjat',
            0: 'Mehdi'
        };
        expect(t[0]).toBe('Mehdi')
    });

    it('match', () => {
        const hasLengthOf10 = {
            [Symbol.match]: function(value) {
                return value.length === 10 ? [value.substring(0, 10)] : null;
            }
        }
        expect('H1H2H3H4H5H6H7H8'.match(hasLengthOf10)).toBeNull();
        expect('H1H2H3H4H5'.match(hasLengthOf10)).toEqual(['H1H2H3H4H5']);
    });

    it('replace', () => {
        const hasLengthOf10 = {
            [Symbol.replace]: function(value, replacement) {
                return value.length >= 10 ? replacement + value.substring(10): value;
            }
        }
        expect('H1H2H3H4H5H6H7H8'.replace(hasLengthOf10, '_')).toBe('_H6H7H8');
    });

    it('search', () => {
        const hasLengthOf10 = {
            [Symbol.search]: function(value) {
                return value.length >= 10 ? 0 : -1;
            }
        }
        expect('H1H2H3H4H5H6H7H8'.search(hasLengthOf10)).toBe(0);
    });

    it('split', () => {
        const hasLengthOf10 = {
            [Symbol.split]: function(value) {
                return value.length >= 10 ? [value.substring(0, 10), value.substring(10)] : [value];
            }
        }
        expect('H1H2H3H4H5H6H7H8'.split(hasLengthOf10)).toEqual(['H1H2H3H4H5', 'H6H7H8']);
    });
});