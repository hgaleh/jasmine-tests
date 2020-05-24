describe('regexpt test: ', () => {
    it('one char', () => {
        const reg = /[a]/;
        expect(reg.test('a')).toBeTrue();       
        expect(reg.test('c')).toBeFalse();       
    });

    it('not char', () => {
        const reg = /[^a]/;
        expect(reg.test('a')).toBeFalse();
        expect(reg.test('ahmad')).toBeTrue();
        expect(reg.test('b')).toBeTrue();
        expect(reg.test('mmoj')).toBeTrue();
    });

    it('from0-9', () => {
        reg = /[0-9]/;
        expect(reg.test('as')).toBeFalse();
        expect(reg.test('0')).toBeTrue();
    });

    it('az', () => {
        reg = /[a-z]/;
        expect(reg.test('ALIa')).toBeTrue();
        expect(reg.test('ALI')).toBeFalse();
        expect(reg.test('19999999222e')).toBeTrue();
    });

    it('aZ', () => {
        reg = /[a-zA-Z]/;
        expect(reg.test('ALIa')).toBeTrue();
        expect(reg.test('ALI')).toBeTrue();
        expect(reg.test('19999999222e')).toBeTrue();
        expect(reg.test('11111')).toBeFalse();
    });

    it('start', () => {
        reg = /[*#.]/
        expect(reg.test('...ddddd')).toBeTrue();
        expect(reg.test('##ddddd')).toBeTrue();
        expect(reg.test('...**dddd')).toBeTrue();
        expect(reg.test('ddddd')).toBeFalse();
    });

    it('+', () => {
        reg = /[*+]/
        expect(reg.test('...ddddd')).toBeFalse();
        expect(reg.test('##ddddd')).toBeFalse();
        expect(reg.test('...**dddd')).toBeTrue();
        expect(reg.test('ddddd')).toBeFalse();
    });
});