describe('functions test: ', () => {
    it('default argument = undefined', () => {
        function f(a = 1) {
            expect(a).toBe(1);
        }
        f(undefined);
    });

    it('default argument = null', () => {
        function f(a = 1) {
            expect(a).toBe(null);
        }
        f(null);
    });

    it('default argument = 0', () => {
        function f(a = 1) {
            expect(a).toBe(0);
        }
        f(0);
    });

    it('arguments object', () => {
        function f(a = 1) {
            expect(arguments[0]).toBe(0);
        }
        f(0);
    });

    it('arguments object extra parameter', () => {
        function f(a = 1) {
            expect(arguments[1]).toBeUndefined();
        }
        f(0);
    });

    it('arguments object real extra parameter', () => {
        function f(a = 1) {
            expect(arguments[1]).toBe(2);
        }
        f(0, 2);
    });

    it('change argument variables in function', () => {
        function f(a = 1) {
            a = 2;
            expect(arguments[0]).toBe(0);
            expect(a).toBe(2);
        }
        f(0);
    });

    it('default argument is expression', () => {
        let c = 0;
        function f(a = c++) {
            return a;
        }
        expect(f()).toBe(0);
        expect(f()).toBe(1);
        expect(f()).toBe(2);
        expect(f()).toBe(3);
    });

    it('previous parameter as default argument', () => {
        function f(a, b=a) {
            expect(a).toBe(10);
            expect(b).toBe(10);
        }

        f(10);
    });

    it('previous parameter as default argument and exist local variable', () => {
        const a = 1;
        function f(a, b=a) {
            expect(a).toBe(10);
            expect(b).toBe(10);
        }

        f(10);
    });

    it('first parameter default can\'t depend on second', () => {
        function f(a = b, b) {
        }

        expect(() => f(undefined, 1)).toThrow();
    });

    it('function create', () => {
        const add = new Function("a", "b", "return a+b");
        expect(add(1, 2)).toBe(3);
    });

    it('math apply max', () => {
        const arr = [1, 2, 3, 4, 5];
        expect(Math.max.apply(null, arr)).toBe(5);
    });

    it('func name', () => {
        function ssss() {

        }
        const d = ssss;
        const r = () => {}
        expect(ssss.name).toBe('ssss');
        expect(d.name).toBe('ssss');
        expect(r.name).toBe('r');
    });

    it('anonymous func name', () => {
        const nam = (new Function()).name;
        expect(nam).toBe('anonymous');
    });

    it('should use new with function', () => {
        function f(n) {
            if(this instanceof f) {
                this.n = n;
            } else {
                throw Error('use new');
            }
        }
        expect(new f('Hojjat')).toBeInstanceOf(f);
        expect(f).toThrowError('use new');
        expect(() => f.call(new f(''), 'Hojjat')).not.toThrow();
    });

    it('use new.target to distinguish new or call', () => {
        function f(n) {
            if(typeof new.target !== 'undefined') {
                this.n = n;
            } else {
                throw Error('use new');
            }
        }

        expect(new f('Hojjat')).toBeInstanceOf(f);
        expect(f).toThrowError('use new');
        expect(() => f.call(new f(''), 'Hojjat')).toThrow();
    });

    it('functions in block', () => {
        const d = () => {
            {
                function f() {}
            }
            expect(f).toBeUnDefined();
        };
        expect(d).toThrow();
    });

    it('let functions aren\'t hoisted', () => {
        {
            let f;
            expect(f).toBeUndefined();
            f = function() {};
            expect(f).toBeDefined();
        }
    });

    it('arrow func cant be called new', () => {
        const g = () => {};
        const f = () => new g();
        expect(f).toThrow();
    });

    it('no prototype for arrow func', () => {
        const g = () => {};
        expect(g.prototype).toBeUndefined();
    });

    it('Object is is more accrurate', function () {
        const f = function () {};
        const obj1 = new f();
        const obj2 = new f();
        expect(Object.is(obj1, obj2)).toBeFalse();
        expect(Object.is(-1, -1)).toBeTrue();
        expect(Object.is(NaN, NaN)).toBeTrue();
        expect(obj1 === obj2).toBeFalse();
        expect(obj1 == obj2).toBeFalse();
        expect(obj1 == obj1).toBeTrue();
        expect(obj1 === obj1).toBeTrue();
        expect(Object.is(obj1, obj1)).toBeTrue();
    });

    it('object assign', () => {
        const src = {
            get name() {
                return 'Hojjat';
            }
        }

        const target = {};
        const res = Object.assign(target, src);
        const descriptor = Reflect.getOwnPropertyDescriptor(res, 'name');
        expect(descriptor.value).toBe('Hojjat');
        expect(descriptor.get).toBeUndefined();
        expect(descriptor.writable).toBeTrue();
        expect(descriptor.set).toBeUndefined();
        expect(descriptor.enumerable).toBeTrue();
        expect(descriptor.configurable).toBeTrue();
    });
});