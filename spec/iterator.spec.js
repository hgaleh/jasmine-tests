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

    it('construct reflect', () => {
        function con1(a) {
            this.a = a;
        }

        function con2() {
        }
        con2.prototype.b = () => 10;

        const a = Reflect.construct(con1, [], con2);
        expect(a.b()).toBe(10)
    });

    it('define property', () => {
        a = {};
        Reflect.defineProperty(a, "name", {
            value: "Eden",
            writable: true,
            configurable: true,
            enumerable: true
        });
        expect(a.name).toBe('Eden');
    });

    it('define setter and getter', () => {
        a = {};
        Reflect.defineProperty(a, '_name', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        });
        Reflect.defineProperty(a, "name", {
            set: function(val) {
                this._name = val
            },
            get: function() {
                return this._name;
            },
            configurable: true,
            enumerable: true
        });
        a._name = 'ali';
        expect(a.name).toBe('ali');
    });

    it('delete property with reflector', () => {
        a = {};
        Reflect.defineProperty(a, '_name', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: true
        });
        const res = Reflect.deleteProperty(a, '_name');
        expect(res).toBeTrue();
    });

    it('delete property with reflector cant delete config false', () => {
        a = {};
        Reflect.defineProperty(a, '_name', {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        });
        const res = Reflect.deleteProperty(a, '_name');
        expect(res).toBeFalse();
    });

    // it('return enumerable of properties', () => {
    //     a = {};
    //     Reflect.defineProperty(a, '_name', {
    //         value: undefined,
    //         writable: true,
    //         enumerable: true,
    //         configurable: false
    //     });
    //     const enums = Reflect.enumerate(a);
    //     expect(enums.next().value).toBe('_name');
    // });

    it('get property of Reflect', () => {
        const obj = {
            __name__: 'Eden'
        };
        Reflect.defineProperty(obj, 'name', {
            get: function() {
                return this.__name__;
            }
        });
        expect(obj.name).toBe('Eden');
        const name = Reflect.get(obj, 'name', {__name__: 'Ali'});
        expect(name).toBe('Ali');
    });

    it('set property of Reflect', () => {
        const obj = {
            __name__: 'Eden'
        };
        Reflect.defineProperty(obj, 'name', {
            set: function(newName){
                this.__name__ = newName;
            },
            get: function(){
                return this.__name__;
            }
        });

        const obj2 = {
            __name__: "John"
        };
        Reflect.set(obj, "name", "Eden", obj2);
        expect(obj.name).toBe('Eden');
        const name = Reflect.get(obj, 'name', {__name__: 'Ali'});
        expect(name).toBe('Ali');
    });

    it('generator function', () => {
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

    it('generator with specified length', () => {
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

    // it('syntax error yield wrong place', () => {
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

    it('generator in func expressions', () => {
        const f = function *(len) {
            yield 1;
            yield 2;
        }
        const y = f(2);
        expect(y.next().value).toBe(1);
        expect(y.next().value).toBe(2);
    });
});