describe('generator function', () => {
    it('make generator function', () => {
        function* generator_function() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        }
        const gf = generator_function();
        expect(gf.next().value).toBe(1);
        expect(gf.next().value).toBe(2);
        expect(gf.next().value).toBe(3);
        expect(gf.next().value).toBe(4);
        expect(gf.next().value).toBe(5);
        expect(gf.next().done).toBeTrue();
    });

    it('for-of loop', () => {
        function* generator_function() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        }
        const arr = [1, 2, 3, 4, 5];
        const s = generator_function();
        for (let v of s) {
            
        }
    });
});