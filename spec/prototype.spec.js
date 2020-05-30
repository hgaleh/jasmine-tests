describe('prototype test: ', function()  {
    it('define in __proto__', function()  {
        const a = {a: 12, __proto__: {b: 13}};
        expect(a.a).toBe(12);
        expect(a.b).toBe(13);
    });

    it('set prototype of object', function()  {
        x = {a: 10};
        y = {b: 15};
        Object.setPrototypeOf(x, y);
        expect(x.a).toBe(10);
        expect(x.b).toBe(15);
    });

    it('object assign', function()  {
        x = {c: 11, __proto__:  {a: 10}};
        y = {b: 15};
        Object.assign(y, x);
        expect(y.b).toBe(15);
        expect(y.a).toBeUndefined();
        expect(y.c).toBe(11);
    });

    it('object assign 2', function()  {
        let x = {x: 12};
        let y = {y: 13, __proto__: x};
        let z = {z: 14, get b() {return 2;}, q: {}};
        Object.defineProperty(z, "z", {enumerable: false});
        let m = {}

        Object.assign(m, x, y, z);

        expect(m.x).toBe(12);
        expect(m.y).toBe(13);
        expect(m.z).toBeUndefined();
        expect(m.b).toBe(2);
        expect(m.q).toEqual({});
    });
    
    it('setPrototypeOf an object', function()  {
        const a = {x: 12};
        const b = {y: 10};
        Object.setPrototypeOf(b, a);
        expect(b.x).toBe(12);
        expect(b.y).toBe(10);
    });

    it('assign test', function()  {
        const a = {x: 12};
        const b = {x: 10};
        const c = Object.assign(a, b);
        expect(a.x).toBe(10);
        expect(b.x).toBe(10);
        expect(c.x).toBe(10);
    });

    it('make symbol', function()  {
        s = Symbol();
        expect(typeof s).toBe('symbol');
    });

    it('cant use new with symbol', function()  {
        const f = () => {
            const d = new Symbol();
        }
        expect(f).toThrow()
    });

    it('dual property in prototype and body', function()  {
        const a = {
            __proto__: {
                name: 'Hojjat'
            },
            name: 'Ali'
        };

        expect(a.name).toBe('Ali');
    });

    it('add method to object', function() {
        const a = {
            name: 'ali'
        };
        const b = {
            getName: function() {
                return this.name;
            }
        };
        const c = {
            ...a, 
            ...b
        };
        expect(c.getName()).toBe('ali');
    });
});
