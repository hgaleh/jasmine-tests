
describe('ES6+ classes: ', function()  {
    it('class in es6', function()  {
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        const p = new Person('Hojjat', 'Bkh');
        expect(p.hasOwnProperty('firstName')).toBeTrue();
    });

    it('class with method', function()  {
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            
            greet() {
                return `Welcome ${this.firstName} ${this.lastName}`;
            }
        }
        const p = new Person('John', 'Doe');
        expect(p.greet()).toBe('Welcome John Doe');
        expect(p.hasOwnProperty('greet')).toBeFalse(); // It is in prototype
        expect(Person.prototype.hasOwnProperty('greet')).toBeTrue();
    });

    it('static method in class', function()  {
        class Person {
            static plus(a, b) {
                return a + b;
            }
        }
        expect(Person.plus(1, 5)).toBe(6);
    });

    it('customer inherits from person', function()  {
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }

            greet() {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        class Customer extends Person {
            id;
            constructor(firstName, lastName) {
                super(firstName, lastName);
            }
        }

        const c = new Customer('Jogn', 'Doe', 10);
        
        expect(c.hasOwnProperty('firstName')).toBeTrue();
        expect(c.hasOwnProperty('lastName')).toBeTrue();
        expect(c.hasOwnProperty('id')).toBeTrue();
        expect(c.hasOwnProperty('greet')).toBeFalse();
    });

    it('use labda for methods in class', function() {
        this.name = 'Hojjat';
        const obj = new function() {
            this.name = 'Ali';
        };
        obj.__proto__.print = () => {
            return this.name;
        };
        expect(obj.print()).toBe('Hojjat');
    });

    it('primitive types object', function()  {
        const obj = new String('Ali');
        const str = String('Ali');
        expect(obj == str).toBeTrue();
        expect(obj === str).toBeFalse();
        expect(obj).not.toBe(str);
        expect(obj).toEqual(str);
    });

    // xit('cant new Symbol', function()  {
    //     expect(new Symbol()).toThrow();
    // });

    // xit('cant new Null', function()  {
    //     expect(new Null).toThrow();
    // });

    // xit('cant new undefined', function()  {
    //     expect(new undefined).toThrow();
    // });

    it('class methods are values', function()  {
        class MyClass {
            constructor() {
                this.a = 1;
                this.b = 2;
            }
            sum() {
                return this.a + this.b;
            }
        }
        const descriptor = Reflect.getOwnPropertyDescriptor(MyClass.prototype, 'sum');
        expect(descriptor.writable).toBeTrue();
        expect(descriptor.enumerable).toBeFalse();
    });

    // it('class is hoisted', function()  {
    //     expect(new MyClass()).toThrow();
    //     class MyClass {
    //         constructor() {
    //             this.a = 1;
    //             this.b = 2;
    //         }
    //         sum() {
    //             return this.a + this.b;
    //         }
    //     }
    // });

    it('species', function()  {
        class myCustomArray1 extends Array {
            static get [Symbol.species]() {
                return Array;
            }
        }

        class myCustomArray2 extends Array {}

        let arr1 = new myCustomArray1(1, 2, 3, 4, 5);
        let arr2 = new myCustomArray2(1, 2, 3, 4, 5);

        expect(arr1).toBeInstanceOf(myCustomArray1);
        expect(arr2).toBeInstanceOf(myCustomArray2);

        arr1 = arr1.map(function(x) {return x + 1});
        arr2 = arr2.map(function(x) {return x + 1});

        expect(arr1).not.toBeInstanceOf(myCustomArray1);
        expect(arr2).toBeInstanceOf(myCustomArray2);

        expect(arr1).toBeInstanceOf(Array);
        expect(arr2).toBeInstanceOf(Array);
    });

    it('new.target', function()  {
        class Parent {
            constructor() {
                expect(new.target.name).toBe('Child');
            }
        }

        class Child extends Parent{
            constructor() {
                super()
            }
        }
        
        const c = new Child();
    });

    it('use super', function()  {
        const obj1 = {
            name() { return 'obj1'; }
        }

        const obj2 = {
            name() { return super.name(); }
        }

        Object.setPrototypeOf(obj2, obj1);
        expect(obj1.name()).toBe('obj1');
        expect(obj2.name()).toBe('obj1');
    });

    it('class prototype is readonly', function()  {
        class Me {}
        class You {}
        expect(Me.prototype).not.toBe(You.prototype);
        Object.setPrototypeOf(Me, Object.getPrototypeOf(You));
        expect(Me.prototype).not.toBe(You.prototype);
    });

    it('add new method to class prototype', function()  {
        class Me {}
        Me.prototype.show = function() {
            return 'shows';
        }
        expect(new Me().show()).toBe('shows');
    });

    it('methods of class are not enumerable', function()  {
        class Me {
            prop = '';
        }
        const hasProp = Object.getOwnPropertyNames(new Me()).includes('prop');
        expect(hasProp).toBeTrue();
    });

    it('to create own property use this. in constructor', function()  {
        class Me {
            constructor() {
                this.prop = '';
            }
        }
        const hasProp = Object.getOwnPropertyNames(new Me()).includes('prop');
        expect(hasProp).toBeTrue();
    });

    it('defineProperty creates own properties', function()  {
        class Me {}
        const c = new Me();
        Object.defineProperty(c, 'show', {
            value: true,
            writable: false,
            enumerable: true,
            configurable: true
        });
        const hasOwnShow = Object.getOwnPropertyNames(c).includes('show');
        expect(hasOwnShow).toBeTrue();
    });

    it('classes should be called with new', function()  {
        class Me {}
        const y = () => Me();
        expect(y).toThrow();
    });

    it('private property in class', function()  {
        const ClassA = (function () {
            privParam = 'ss';
            function ClassA() {}
            Object.defineProperty(ClassA.prototype, 'param', {
                set: function(val) {
                    privParam = val;
                },
                get: function() {
                    return privParam;
                },
                enumerable: false,
                configurable: false
            });
            return ClassA;
        })();
        const cl = new ClassA();
        expect(cl.param).toBe('ss');
    });

    it('class name is constant from inside', function()  {
        class M {
            constructor() {
                M = 10;
            }
        }
        const R = () => new M();
        expect(R).toThrow();
    });

    it('class name can be changed from outside', function()  {
        class M {
            constructor() {
            }
        }
        M = 10;
        expect(M).toBe(10);
    });

    it('static members in es5', function()  {
        function M() {}
        M.stat = function() {
            return 'stat';
        }
        expect(M.stat()).toBe('stat');
    });
});