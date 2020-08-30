const math = require('../app').math;

describe('module math test: ', function()  {
    it('sum', function()  {
        expect(math.sum(1, 2)).toBe(3);
    });

    it('sub', function()  {
        expect(math.sub(1, 2)).toBe(-1);
    });
});