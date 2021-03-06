describe('numeric binary representation', function()  {
    it('binary representation', function()  {
        const a = 0b110;
        expect(a).toBe(6)
    });

    it('octal numbers representation', function()  {
        const a = 0o10;
        expect(a).toBe(8);
    });

    it('check integer type', function()  {
        const a = 10;
        const b = 10.2;
        const c = '10';
        const d = NaN;
        expect(Number.isInteger(a)).toBeTrue();
        expect(Number.isInteger(b)).toBeFalse();
        expect(Number.isInteger(c)).toBeFalse();
        expect(Number.isInteger(d)).toBeFalse();
    });

    it('NaN check', function()  {
        const a = 10;
        const b = NaN;
        expect(Number.isNaN(a)).toBeFalse();
        expect(Number.isNaN(b)).toBeTrue();
    });

    it('check array type', function()  {
        const a = [];
        const b = new Array();
        const c = {};
        expect(Array.isArray(a)).toBeTrue();
        expect(Array.isArray(b)).toBeTrue();
        expect(Array.isArray(c)).toBeFalse();
    });

    it('isNan check', function()  {
        const a = "NaN";
        const b = NaN;
        const c = "hello";
        const d = 12;

        expect(Number.isNaN(a)).toBeFalse();
        expect(Number.isNaN(b)).toBeTrue();
        expect(Number.isNaN(c)).toBeFalse();
        expect(Number.isNaN(d)).toBeFalse();
    });

    it('global isNaN function', function()  {
        const a = "NaN";
        const b = NaN;
        const c = "hello";
        const d = 12;

        expect(isNaN(a)).toBeTrue();
        expect(isNaN(b)).toBeTrue();
        expect(isNaN(c)).toBeTrue();
        expect(isNaN(d)).toBeFalse();
    });

    it('isFinit global function test', function()  {
        expect(isFinite(10)).toBeTrue();
        expect(isFinite(NaN)).toBeFalse();
        expect(isFinite(null)).toBeTrue();
        expect(isFinite([])).toBeTrue();
    });

    it('Number.isFinite() test', function()  {
        expect(Number.isFinite(10)).toBeTrue();
        expect(Number.isFinite(NaN)).toBeFalse();
        expect(Number.isFinite(null)).toBeFalse();
        expect(Number.isFinite([])).toBeFalse();
    });

    it('test equality of floating numbers', function()  {
        expect(0.1 + 0.2 === 0.3).toBeFalse;
    });

    it('string includes method', function()  {
        const str = 'Hello Hojjat';
        expect(str.includes('Hojjat')).toBeTrue();
    });

    it('string starts with method', function()  {
        const str = 'Hello Hojjat';
        expect(str.startsWith('Hojjat')).toBeFalse();
        expect(str.startsWith('Hel')).toBeTrue();
    });

    it('string ends with method', function()  {
        const str = 'Hello Hojjat';
        expect(str.startsWith('Hojjat')).toBeFalse();
        expect(str.startsWith('Hel')).toBeTrue();
    });
});