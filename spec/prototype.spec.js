describe('prototype test: ', () => {
    it('define in __proto__', () => {
        const a = {a: 12, __proto__: {b: 13}};
        expect(a.a).toBe(12);
        expect(a.b).toBe(13);
    });

    it('set prototype of object', () => {
        x = {a: 10};
        y = {b: 15};
        Object.setPrototypeOf(x, y);
        expect(x.a).toBe(10);
        expect(x.b).toBe(15);
    });

    it('object assign', () => {
        x = {c: 11, __proto__:  {a: 10}};
        y = {b: 15};
        Object.assign(y, x);
        expect(y.b).toBe(15);
        expect(y.a).toBeUndefined();
        expect(y.c).toBe(11);
    });

    it('object assign 2', () => {
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
});