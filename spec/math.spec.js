describe('test math functions', function()  {
    it('pi function', function()  {
        expect(parseInt(Math.PI)).toBe(3)
    });

    it('E to be 2', function()  {
        expect(parseInt(Math.E)).toBe(2)
    });

    it('round 2.8 is 3', function()  {
        expect(Math.round(2.8)).toBe(3)
    });

    it('round 2.5 is 3', function()  {
        expect(Math.round(2.5)).toBe(3)
    });

    it('round 2.3 is 2', function()  {
        expect(Math.round(2.3)).toBe(2)
    });

    it('ceil of 2.1 is 3', function()  {
        expect(Math.ceil(2.1)).toBe(3)
    });

    it('ceil of 2.6 is 3', function()  {
        expect(Math.ceil(2.6)).toBe(3)
    });

    it('floor of 2.1 is 2', function()  {
        expect(Math.floor(2.1)).toBe(2)
    });

    it('floor of 2.9 is 2', function()  {
        expect(Math.floor(2.9)).toBe(2)
    });

    it('radical 64 is 8', function()  {
        expect(Math.sqrt(64)).toBe(8)
    });

    it('radical -64 is NaN', function()  {
        expect(Math.sqrt(-64)).toBeNaN();
    });

    it('abs -1 is 1', function()  {
        expect(Math.abs(-1)).toBe(1);
    });

    it('8 ^ 2 is 64', function()  {
        expect(Math.pow(8, 2)).toBe(64)
    });

    it('return minimum value', function()  {
        expect(Math.min(2, 4, -1, 5)).toBe(-1)
    });

    it('return maximum value', function()  {
        expect(Math.max(2, 4, -1, 5)).toBe(5)
    });

    it('random > 0 and < 1', function()  {
        expect(Math.random()).toBeLessThan(1);
    });
});