describe('reflect test: ', function() {
    it('reflect get', function() {
        const a = {_name: 'Ali'};
        Reflect.defineProperty(a, '_name', {
            writable: false,
            configurable: false
        });
        Reflect.defineProperty(a, 'name', {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: false
        });
        const name = Reflect.get(a, 'name');
        expect(name).toBe('Ali');
    });

    it('reflect get with third argument', function() {
        const a = {_name: 'Ali'};
        Reflect.defineProperty(a, '_name', {
            writable: false,
            configurable: false
        });
        Reflect.defineProperty(a, 'name', {
            get: function () {
                return this._name
            },
            enumerable: false,
            configurable: false
        });
        const name = Reflect.get(a, 'name', {_name: 'Hojjat'});
        expect(name).toBe('Hojjat');
    });

    it('reflect set', () => {
        var obj1 = {
            __name__: "Alll"
        };
        Reflect.defineProperty(
            obj1,
            "name", 
            {
                set: function(newName){
                    this.__name__ = newName;
                },
                get: function(){
                    return this.__name__;
                }
            }
        );
        var obj2 = {
        __name__: "John"
        };
        Reflect.set(obj1, "name", "Eden", obj2);
        expect(obj2.__name__).toBe('Eden');
        expect(obj1.name).toBe('Alll');
    });

    it('reflect get with third argument', function() {
        const a = {_name: 'Ali'};
        const propertyDescriptor = Reflect.getOwnPropertyDescriptor(a, '_name');
        expect(propertyDescriptor.configurable).toBeTrue();
        expect(propertyDescriptor.enumerable).toBeTrue();
        expect(propertyDescriptor.value).toBe('Ali');
        expect(propertyDescriptor.writable).toBeTrue();
    });

    it('cant change unconfigurable properties', () => {
        const a = {_name: 'Ali'};
        Reflect.defineProperty(a, '_name', {
            configurable: false
        });

        Reflect.defineProperty(a, '_name', {
            writable: false
        });

        const isWritable = Reflect.getOwnPropertyDescriptor(a, '_name').writable;
        expect(isWritable).toBeFalse();
    });

    it('cant change unwritable values', () => {
        const a = {_name: 'Ali'};
        Reflect.defineProperty(a, '_name', {
            writable: false
        });
        a._name = 'MM';
        expect(a._name).toBe('Ali');
    });

    it('set prototype', () => {
        var obj = {};
        Reflect.setPrototypeOf(obj, {
            name: "Eden"
        });
        expect(obj.name).toBe('Eden');
    });
    
    it('check exist property', () => {
        var obj = {
            __proto__: {
                married: false
            },
            name: 'ali'
        };
        expect(Reflect.has(obj, 'name')).toBeTrue();
        expect(Reflect.has(obj, 'last_name')).toBeFalse();
        expect(Reflect.has(obj, 'married')).toBeTrue();
    });

    it('is extensible', () => {
        var obj = {
            __proto__: {
                married: false
            },
            name: 'ali'
        };
        expect(Reflect.isExtensible(obj)).toBeTrue();
    });

    it('if inextensible, cant add property', () => {
        var obj = {
            __proto__: {
                married: false
            },
            name: 'ali'
        };
        Reflect.preventExtensions(obj);
        expect(Reflect.isExtensible(obj)).toBeFalse();
        obj.sss = true;
        expect(obj.sss).toBeUndefined();
    });

    it('if sealed, cant add property', () => {
        var hhh = {
            __proto__: {
                married: false
            },
            name: 'ali'
        };
        Object.seal(hhh);
        expect(Reflect.isExtensible(hhh)).toBeFalse();
        hhh.sss = true;
        expect(hhh.sss).toBeUndefined();
    });

    it('if frozen, cant add property', () => {
        var hhh = {
            __proto__: {
                married: false
            },
            name: 'ali'
        };
        Object.freeze(hhh);
        expect(Reflect.isExtensible(hhh)).toBeFalse();
        hhh.sss = true;
        expect(hhh.sss).toBeUndefined();
    });

    it('own keys', () => {
        var hhh = {
            __proto__: {
                married: false
            },
            name: 'ali'
        };
        const keys = Reflect.ownKeys(hhh);
        expect(keys.length).toBe(1);
    });

    it('own keys with symbols', () => {
        const sym = Symbol();
        var hhh = {
            __proto__: {
                married: false
            },
            name: 'ali',
            [sym]: true
        };
        const keys = Reflect.ownKeys(hhh);
        expect(keys.length).toBe(2);
    });
});