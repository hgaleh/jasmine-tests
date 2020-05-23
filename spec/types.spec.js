describe('Types Test', () => {
    it('reassign different types to each other', () => {
        let t = 10
        const first = t;
        t = 'dd'
        expect(first).not.toBe(t);
        expect(t).toBe('dd')
    });

    it('can start var name by _?', () => {
        let _t = 10;
        expect(_t).toBeDefined();
    });

    it('type of "ali" is string', () => {
        expect(typeof "ali").toBe('string')
    });

    it('type of zero should be number', () => {
        expect(typeof 0).toBe('number')
    });

    it('sym is Symbol', () => {
        const sym = Symbol();
        expect(typeof sym).toBe('symbol')
    })

    it('make objects', () => {
        const dd = [];
        const ee = {name: ''};
        const tt = new Date();
        expect(typeof dd).toBe('object');
        expect(typeof ee).toBe('object');
        expect(typeof tt).toBe('object');
    })

    it('convert number to string', () => {
        const t = 10;
        const str = String(t);
        expect(typeof str).toBe('string')
    });

    it('convert current date to string', () => {
        const dt = new Date();
        expect(typeof String(dt)).toBe('string');
    });

    it('convert undefined to "undefined"', () => {
        expect(String(undefined)).toBe('undefined');
    });

    it('convert type to string', () => {
        expect(typeof String(undefined)).toBe('string')
        expect(typeof String(NaN)).toBe('string')
        expect(typeof String(null)).toBe('string')
    });

    it('change string to number', () => {
        expect(Number('12')).toBe(12);
        expect(Number('12')).not.toBe('12')
        expect(typeof Number('aaa')).toBe('number')
        expect(typeof NaN).toBe('number')
        expect(typeof Number(undefined)).toBe('number')
        expect(typeof +'12').toBe('number');
        expect(typeof +null).toBe('number');
        expect(typeof +undefined).toBe('number');
        expect(typeof Number(undefined)).toBe('number');
        expect(typeof Number(null)).toBe('number');
        expect(+false).toBe(0);
        expect(+true).toBe(1);
        expect(typeof Number([1, 2, 4])).toBe('number');
    });

    it('convert to integer', () => {
        expect(parseInt(100.1)).toBe(100)
    });

    it('convert to decimal', () => {
        expect(parseFloat('12.252')).toBe(12.252)
        expect(12.00).toBe(12)
    });

    it('sum of number and string', () => {
        expect('5' + 6).toBe('56');
        expect(6 + '5').toBe('65');
    });
});