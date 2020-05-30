describe('regexpt test: ', function()  {
    it('one char', function()  {
        const reg = /[a]/;
        expect(reg.test('a')).toBeTrue();       
        expect(reg.test('c')).toBeFalse();       
    });

    it('not char', function()  {
        const reg = /[^a]/;
        expect(reg.test('a')).toBeFalse();
        expect(reg.test('ahmad')).toBeTrue();
        expect(reg.test('b')).toBeTrue();
        expect(reg.test('mmoj')).toBeTrue();
    });

    it('from0-9', function()  {
        reg = /[0-9]/;
        expect(reg.test('as')).toBeFalse();
        expect(reg.test('0')).toBeTrue();
    });

    it('az', function()  {
        reg = /[a-z]/;
        expect(reg.test('ALIa')).toBeTrue();
        expect(reg.test('ALI')).toBeFalse();
        expect(reg.test('19999999222e')).toBeTrue();
    });

    it('aZ', function()  {
        reg = /[a-zA-Z]/;
        expect(reg.test('ALIa')).toBeTrue();
        expect(reg.test('ALI')).toBeTrue();
        expect(reg.test('19999999222e')).toBeTrue();
        expect(reg.test('11111')).toBeFalse();
    });

    it('start', function()  {
        reg = /[*#.]/
        expect(reg.test('...ddddd')).toBeTrue();
        expect(reg.test('##ddddd')).toBeTrue();
        expect(reg.test('...**dddd')).toBeTrue();
        expect(reg.test('ddddd')).toBeFalse();
    });

    it('*', function()  {
        reg = /\*[q]/
        expect(reg.test('...ddddd')).toBeFalse();
        expect(reg.test('##ddddd')).toBeFalse();
        expect(reg.test('...**dddd')).toBeFalse();
        expect(reg.test('ddddd')).toBeFalse();
    });
});