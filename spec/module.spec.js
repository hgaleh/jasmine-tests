const math = require('../app').math;

describe('module math test: ', () => {
    it('sum', () => {
        expect(math.sum(1, 2)).toBe(3);
    });

    it('sub', () => {
        expect(math.sub(1, 2)).toBe(-1);
    });
});