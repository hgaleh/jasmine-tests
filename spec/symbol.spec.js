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
});