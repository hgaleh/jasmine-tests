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
});