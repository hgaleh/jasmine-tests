describe('proxy: ', function()  {
    it('proxy wraps object', function () {
        const obj = {
            name: 'Hojjat'
        };
        const handler = {};
        const proxy = new Proxy(obj, handler);
        expect(proxy.name).toBe('Hojjat');
        expect(obj.lastName).toBeUndefined();
        proxy.lastName = 'BKH';
        expect(obj.lastName).toBe('BKH');
    });

    it('proxy handler', function () {
        const proxy = new Proxy(
            {
                age: 12
            },
            {
                get: function(target, property, receiver) {
                    if (property in target) {
                        return target[property];
                    } else {
                        return "Not found";
                    }
                }
            }
        );

        expect(proxy.age).toBe(12)
        expect(proxy.name).toBe('Not found');
    });

    it('proxy set trap', function()  {
        const target = {
            age: 12
        };
        spyOn(target, "age")
        const proxy = new Proxy(
            target,
            {
                set: function(target, property, value, receiver){
                    target[property] = value;
                    return true;
                }
            }
        );
        
    });

    it('array length', function()  {
        const arr = [10, 20, 30, 40];
        expect(arr.length).toBe(4);
        arr.length = 2;
        expect(arr).toEqual([10, 20]);
    });

    it('simple proxy', function()  {
        const target = {
            name: 'Ali'
        };
        let proxy = new Proxy(target, {});
        expect(proxy).not.toBe(target);
        expect(proxy).toEqual(target);
        expect(proxy.__proto__).toBe(target.__proto__);
        target.name = 'Mohammad';
        expect(proxy.name).toBe('Mohammad');
    });

    it('set trap', function()  {
        const target = {
            phoneNumber: 0
        };
        let proxy = new Proxy(target, {
            set: (trapTarget, key, value, receiver) => {
                if (Number.isInteger(value)) {
                    Reflect.set(trapTarget, key, value);
                } else {
                    throw TypeError('only numbers');
                }
            }
        });
        proxy.phoneNumber = 5266;
        expect(proxy.phoneNumber).toBe(5266);
        const wrongOperation = () => {
            proxy.phoneNumber = 'aaaa';
        }
        expect(wrongOperation).toThrow(new TypeError('only numbers'));
    });

    it('dont add new properties to own properties', function()  {
        class PropertyError extends Error {}
        const target = {
            phoneNumber: undefined,
            name: undefined,
            address: undefined
        };
        let proxy = new Proxy(target, {
            set: (trapTarget, key, value, receiver) => {
                if (trapTarget.hasOwnProperty(key)) {
                    Reflect.set(trapTarget, key, value);
                } else {
                    throw new PropertyError('Invalid property name');
                }
            }
        });
        proxy.phoneNumber = 10;
        const wrongExpression = () => {
            proxy['ssss'] = 12;
        }
        expect(wrongExpression).toThrow(new PropertyError('Invalid property name'));
    });

    it('in object', function()  {
        const obj = {};
        const sym = Symbol();
        Object.defineProperty(obj, 'name', {
            value: 'Ali',
            writable: true,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(obj, 'lastName', {
            value: 'Bakhtiyari',
            writable: false,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(obj, 'phoneNumber', {
            value: 125544,
            writable: false,
            enumerable: false,
            configurable: true
        });

        Object.defineProperty(obj, 'address', {
            value: 'Somewhere',
            writable: false,
            enumerable: false,
            configurable: false
        });

        Object.defineProperty(obj, sym, {
            value: 'something',
            writable: false,
            enumerable: false,
            configurable: false
        });

        expect('name' in obj).toBeTrue();
        expect('lastName' in obj).toBeTrue();
        expect('phoneNumber' in obj).toBeTrue();
        expect('address' in obj).toBeTrue();
        expect(sym in obj).toBeTrue();
        expect(obj.hasOwnProperty('phoneNumber')).toBeTrue();
        expect(Object.keys(obj)).toEqual(['name', 'lastName'])
    });

    it('all of enumerable and inherited properties are "in" object', function()  {
        const obj = {};
        Object.defineProperty(obj.__proto__, 'name', {
            value: 'Ali',
            writable: true,
            enumerable: true,
            configurable: true
        });
        expect('name' in obj).toBeTrue()
    });

    it('hide property existance by "has"', function()  {
        const target = {
            value: 12,
            name: 10
        }
        expect('value' in target).toBeTrue();
        const proxy = new Proxy(target, {
            has(trapTarget, key) {
                if (key === 'value') {
                    return false;
                } else {
                    return Reflect.has(trapTarget, key);
                }
            }
        });
        expect('value' in proxy).toBeFalse();
        expect('name' in proxy).toBeTrue();
        expect(proxy.value).toBe(12);
    });
});