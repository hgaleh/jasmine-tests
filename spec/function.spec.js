describe('functions test: ', function()  {
    it('default argument = undefined', function()  {
        function f(a = 1) {
            expect(a).toBe(1);
        }
        f(undefined);
    });

    it('default argument = null', function()  {
        function f(a = 1) {
            expect(a).toBe(null);
        }
        f(null);
    });

    it('default argument = 0', function()  {
        function f(a = 1) {
            expect(a).toBe(0);
        }
        f(0);
    });

    it('arguments object', function()  {
        function f(a = 1) {
            expect(arguments[0]).toBe(0);
        }
        f(0);
    });

    it('arguments object extra parameter', function()  {
        function f(a = 1) {
            expect(arguments[1]).toBeUndefined();
        }
        f(0);
    });

    it('arguments object real extra parameter', function()  {
        function f(a = 1) {
            expect(arguments[1]).toBe(2);
        }
        f(0, 2);
    });

    it('change argument variables in function', function()  {
        function f(a = 1) {
            a = 2;
            expect(arguments[0]).toBe(0);
            expect(a).toBe(2);
        }
        f(0);
    });

    it('default argument is expression', function()  {
        let c = 0;
        function f(a = c++) {
            return a;
        }
        expect(f()).toBe(0);
        expect(f()).toBe(1);
        expect(f()).toBe(2);
        expect(f()).toBe(3);
    });

    it('previous parameter as default argument', function()  {
        function f(a, b=a) {
            expect(a).toBe(10);
            expect(b).toBe(10);
        }

        f(10);
    });

    it('previous parameter as default argument and exist local variable', function()  {
        const a = 1;
        function f(a, b=a) {
            expect(a).toBe(10);
            expect(b).toBe(10);
        }

        f(10);
    });

    it('first parameter default can\'t depend on second', function()  {
        function f(a = b, b) {
        }

        expect(() => f(undefined, 1)).toThrow();
    });

    it('function create', function()  {
        const add = new Function("a", "b", "return a+b");
        expect(add(1, 2)).toBe(3);
    });

    it('math apply max', function()  {
        const arr = [1, 2, 3, 4, 5];
        expect(Math.max.apply(null, arr)).toBe(5);
    });

    it('func name', function()  {
        function ssss() {

        }
        const d = ssss;
        const r = () => {}
        expect(ssss.name).toBe('ssss');
        expect(d.name).toBe('ssss');
        expect(r.name).toBe('r');
    });

    it('anonymous func name', function()  {
        const nam = (new Function()).name;
        expect(nam).toBe('anonymous');
    });

    it('should use new with function', function()  {
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

    it('use new.target to distinguish new or call', function()  {
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

    it('functions in block', function()  {
        const d = () => {
            {
                function f() {}
            }
            expect(f).toBeUnDefined();
        };
        expect(d).toThrow();
    });

    it('let functions aren\'t hoisted', function()  {
        {
            let f;
            expect(f).toBeUndefined();
            f = function() {};
            expect(f).toBeDefined();
        }
    });

    it('arrow func cant be called new', function()  {
        const g = () => {};
        const f = () => new g();
        expect(f).toThrow();
    });

    it('no prototype for arrow func', function()  {
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

    it('object assign', function()  {
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

    it('inheritance object', () => {
        function Parent() {
            this.val = '';
        }

        class Child extends Parent { }
        const child = new Child();
        const descriptor = Reflect.getOwnPropertyDescriptor(child, 'val');
        expect(descriptor.get).toBeUndefined();
        expect(descriptor.set).toBeUndefined();
        expect(descriptor.configurable).toBeTrue();
        expect(descriptor.value).toBe('');
        expect(descriptor.writable).toBeTruthy();
    });

    it('inheritance object function', () => {
        function Parent() {
            this.func = function() {}
        }

        class Child extends Parent { }
        const child = new Child();
        const descriptor = Reflect.getOwnPropertyDescriptor(child, 'func');
        expect(descriptor.get).toBeUndefined();
        expect(descriptor.set).toBeUndefined();
        expect(descriptor.configurable).toBeTrue();
        expect(descriptor.value).toBeDefined();
    });

    it('inheritance object function', () => {
        function Parent() {
            this.func = function() {}
        }

        class Child extends Parent { }
        const child = new Child();
        const copy = Object.assign({}, child);
        const descriptor = Reflect.getOwnPropertyDescriptor(copy, 'func');
        expect(descriptor.enumerable).toBeTrue();
        expect(descriptor.value).toBeDefined();
        expect(descriptor.writable).toBeTrue();
        expect(descriptor.set).toBeUndefined();
        expect(descriptor.get).toBeUndefined();
        expect(descriptor.configurable).toBeTrue();
    });

    it('when not enumerable not assignable', () => {
        class AClass {
            method() { return '10'; }
            get nam1e() {
                return 'Hojjat';
            }
            lname = '12w';
        }
        const inst = new AClass();
        const copy = Object.assign({}, inst);
        const descName = Reflect.getOwnPropertyDescriptor(AClass.prototype, 'nam1e');
        const descMethod = Reflect.getOwnPropertyDescriptor(AClass.prototype, 'method');
        expect(descName.enumerable).toBeFalse();
        expect(descMethod.enumerable).toBeFalse();
        expect(inst.method()).toBe('10');
        expect(inst.nam1e).toBe('Hojjat');
        expect(inst.lname).toBe('12w');
        expect(copy.method).toBeUndefined();
        expect(copy.nam1e).toBeUndefined();
        expect(copy.lname).toBe('12w');
    });

    it('when not enumerable not ...', () => {
        class AClass {
            method() { return '10'; }
            get nam1e() {
                return 'Hojjat';
            }
            lname = '12w';
        }
        const inst = new AClass();
        const copy = {...inst};
        expect(inst.method()).toBe('10');
        expect(inst.nam1e).toBe('Hojjat');
        expect(inst.lname).toBe('12w');
        expect(copy.method).toBeUndefined();
        expect(copy.nam1e).toBeUndefined();
        expect(copy.lname).toBe('12w');
    });

    it('when not enumerable not stringify', () => {
        class AClass {
            method() { return '10'; }
            get nam1e() {
                return 'Hojjat';
            }
            lname = '12w';
        }
        const inst = new AClass();
        const copy = JSON.parse(JSON.stringify(inst));
        expect(inst.method()).toBe('10');
        expect(inst.nam1e).toBe('Hojjat');
        expect(inst.lname).toBe('12w');
        expect(copy.method).toBeUndefined();
        expect(copy.nam1e).toBeUndefined();
        expect(copy.lname).toBe('12w');
    });

    it('when set prototype', () => {
        class AClass {
            method() { return '10'; }
            get nam1e() {
                return 'Hojjat';
            }
            lname = '12w';
        }
        const inst = new AClass();
        const copy = {};
        Object.setPrototypeOf(copy, inst);
        expect(inst.method()).toBe('10');
        expect(inst.nam1e).toBe('Hojjat');
        expect(inst.lname).toBe('12w');
        expect(copy.method).toBeDefined();
        expect(copy.nam1e).toBeDefined();
        expect(copy.lname).toBe('12w');
    });

    it('function props', () => {
        function AClass(name) {
            lname = '12w';
            return lname;
        }
        expect(AClass.name).toBe('AClass');
        expect(AClass.apply({})).toBe('12w');
        expect(AClass.arguments).toBeNull();
        expect(AClass.call({}, 10)).toBe('12w');
    });

    it('change methods to enumerable', () => {
        class AClass {
            method1() {
                return '1025';
            }
        }
        const descMethod1 = Reflect.getOwnPropertyDescriptor(AClass.prototype, 'method1');
        expect(descMethod1.writable).toBeTrue();
        expect(descMethod1.enumerable).toBeFalse();
        expect(descMethod1.set).toBeUndefined();
        expect(descMethod1.get).toBeUndefined();
        expect(descMethod1.configurable).toBeTrue();
        const mainObject = new AClass();
        const clonedObject = Object.assign({}, mainObject);
        expect(clonedObject.method1).toBeUndefined();
        descMethod1.enumerable = true;
        const afterEnumerable = Object.assign({}, mainObject);
        expect(afterEnumerable.method1).toBeUndefined();
        Reflect.defineProperty(AClass.prototype, 'method1', {
            configurable: true,
            enumerable: true,
            writable: true
        });
        const afterEnumerable2 = Object.assign({}, mainObject);
        // expect(afterEnumerable2.method1).toBeDefined();
    });
});