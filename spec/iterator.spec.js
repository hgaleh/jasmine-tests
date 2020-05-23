describe('iterator: ', () => {
    it('iterator how works', () => {
        const obj = {
            array: [1, 2, 3, 4, 5],
            nextIndex: 0,
            next: function() {
                return this.nextIndex < this.array.length ?
                {value: this.array[this.nextIndex++], done: false}:
                {done: true}
            }
        };

        expect(obj.next().value).toBe(1);
        expect(obj.next().value).toBe(2);
        expect(obj.next().value).toBe(3);
        expect(obj.next().value).toBe(4);
        expect(obj.next().value).toBe(5);
        expect(obj.next().done).toBe(true);
    });

    it('how to implement iterable', () => {
        const obj = {
            array: [1, 2, 3, 4, 5],
            nextIndex: 0,
            [Symbol.iterator]: function() {
                return {
                    array: this.array,
                    nextIndex: this.nextIndex,
                    next: function() {
                        return this.nextIndex < this.array.length ?
                        {value: this.array[this.nextIndex++], done: false}:
                        {done: true};
                    }
                }
            }
        }
    });

    it('function apply', () => {
        function b() {
            return this.a;
        }

        const obj1 = {
            a: 15
        };

        const obj2 = {
            a: 11
        };
        
        expect(b.apply(obj1)).toBe(15);
        expect(b.apply(obj2)).toBe(11);
    });

    it('function reflect apply', () => {
        function b() {
            return this.a;
        }

        const obj1 = {
            a: 15
        };

        const obj2 = {
            a: 11
        };
        
        expect(Reflect.apply(b, obj1, [])).toBe(15);
        expect(Reflect.apply(b, obj2, [])).toBe(11);
    });
});