describe('generator function', function()  {
    it('make generator function', function()  {
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

    it('for-of loop', function()  {
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

    it('generator function', function()  {
        function *generator() {
            yield 1;
            yield 2;
            yield 3;
        }
        const f = generator();
        expect(f.next().value).toBe(1)
        expect(f.next().value).toBe(2)
        expect(f.next().value).toBe(3)
    });

    it('generator with specified length', function()  {
        function *withLen(len) {
            for (let i = 0; i < len; i++) {
                yield i;
            }
        }
        const gen = withLen(10);
        const arr = Array.from(gen);
        expect(arr.length).toBe(10);
        expect(arr[5]).toBe(5);
    });

    // it('syntax error yield wrong place', function()  {
    //     const y = () => {
    //         function *createIterator(items) {
    //             items.forEach(function(item) {
    //                 // syntax error
    //                 yield item + 1;
    //             });
    //         }
    //     }
    //     expect(y).toThrow();
    // });

    it('generator in func expressions', function()  {
        const f = function *(len) {
            yield 1;
            yield 2;
        }
        const y = f(2);
        expect(y.next().value).toBe(1);
        expect(y.next().value).toBe(2);
    });

    it('generator method in ec6', function()  {
        class MyClass {
            *gener() {
                yield 1;
                yield 2;
            }
        }
        const y = new MyClass().gener();
        expect(y.next().value).toBe(1);
        expect(y.next().value).toBe(2);
    });

    it('array iterator', function()  {
        const arr = [10, 20, 30];
        const iter = arr[Symbol.iterator]();
        expect(iter.next().value).toBe(10);
        expect(iter.next().value).toBe(20);
        expect(iter.next().value).toBe(30);
    });

    it('create iterables', function()  {
        class MyIterable {
            arr = [];
            add(el) {
                this.arr.push(el);
            }
            *[Symbol.iterator](params) {
                for (const el of this.arr) {
                    yield el;
                }
            }
        }
        const myIt = new MyIterable();
        myIt.add('hojjat');
        for(let g of myIt) {
            expect(g).toBe('hojjat');
        }
    });

    it('entries array', function()  {
        const arr = [10, 20, 30];
        for (const e of arr.entries()) {
            if(e[0] === 0) {
                expect(e[1]).toBe(10)
            } else if(e[0] === 1) {
                expect(e[1]).toBe(20)
            } else if(e[0] === 2) {
                expect(e[1]).toBe(30)
            }
        }
    });

    it('entries sets', function()  {
        const st = new Set([10, 20, 30]);
        for (const e of st.entries()) {
            if(e[0] === 10) {
                expect(e[1]).toBe(10)
            } else if(e[0] === 20) {
                expect(e[1]).toBe(20)
            } else if(e[0] === 30) {
                expect(e[1]).toBe(30)
            }
        }
    });

    it('entries maps', function()  {
        const mp = new Map([
            ['name', 'ali'],
            ['lastName', 'bakhtiyari'],
            ['tel', 125],
        ]);
        for (const e of mp.entries()) {
            if(e[0] === 'name') {
                expect(e[1]).toBe('ali')
            } else if(e[0] === 'lastName') {
                expect(e[1]).toBe('bakhtiyari')
            } else if(e[0] === 'tel') {
                expect(e[1]).toBe(125)
            }
        }
    });

    it('generator with argument in next', function()  {
        function *gen() {
            let first = yield 1;
            yield first + 2;
        }
        const f = gen();
        expect(f.next().value).toBe(1);
        expect(f.next(2).value).toBe(4);
    });

    it('generator with argument in next with error', function()  {
        function *gen() {
            let first;
            try {
                first = yield 1;
            } catch(err) {
                first = 12;
            }
            yield first + 2;
        }
        const f = gen();
        expect(f.next().value).toBe(1);
        expect(f.throw(new Error()).value).toBe(14);
    });

    it('done before last yield', function()  {
        function *gen() {
            yield 1;
            return 'oka';
            yield 2;
        }
        const f = gen();
        expect(f.next().value).toBe(1);
        expect(f.next().value).toBe('oka');
        expect(f.next().done).toBeTrue();
        expect(f.next().done).toBeTrue();
        expect(f.next().value).toBeUndefined();
    });

    it('calling generators inside generators', function()  {
        function *gen1() {
            yield 1;
            yield 2;
        }

        function *gen2() {
            yield *gen1();
            yield 'ali';
        }
        const y = gen2();
        expect(y.next().value).toBe(1);
        expect(y.next().value).toBe(2);
        expect(y.next().value).toBe('ali');
    });

    it('return value of a generator', function()  {
        function *gen1() {
            yield 1;
            yield 2;
            return 4;
        }
        function *gen2(val) {
            let g = yield val;
            yield 2 + g;
        }

        function *gen3() {
            let res = yield *gen1();
            yield *gen2(res);
        }
        const y = gen3();
        expect(y.next().value).toBe(1);
        expect(y.next().value).toBe(2); // returns 4
        expect(y.next().value).toBe(4);
        expect(y.next(12).value).toBe(14);
    });
});