describe('Name of the group', () => {
    it('object flaws', () => {
        const key1 = {};
        const key2 = {};
        const v = {
            [key1]: 'ali',
            [key2]: 'mobi'
        }
        expect(Array.from(Object.keys(v)).length).toBe(1);
        expect(v[key1]).toBe('mobi');
    });

    it('objects update key values', () => {
        const key1 = {};
        const v = {};
        v[key1] = 1;
        v[key1] = 2;
        expect(v[key1]).toBe(2);
    });

    it('set with multiple unique keys', () => {
        const key1 = {};
        const key2 = {};
        let v = new Set();
        v.add(key1);
        v.add(key2);
        expect(v.size).toBe(2);
    });

    it('set add same key twice', () => {
        const key1 = {};
        let v = new Set();
        v.add(key1);
        v.add(key1);
        expect(v.size).toBe(1);
    });

    it('check existance of key', () => {
        const key1 = {};
        const key2 = {};
        let v = new Set();
        v.add(key1);
        expect(v.has(key1)).toBeTrue();
        expect(v.has(key2)).toBeFalse();
    });

    it('remove key from set', () => {
        const key1 = {};
        let v = new Set();
        v.add(key1);
        expect(v.has(key1)).toBeTrue();
        v.delete(key1);
        expect(v.has(key1)).toBeFalse();
    });

    it('convert set to array', () => {
        const key1 = {};
        const key2 = {};
        let v = new Set();
        v.add(key1);
        v.add(key2);
        const arr = [...v];
        expect(arr[0]).toBe(key1);
        expect(arr[1]).toBe(key2);
    });

    it('convert array to set', () => {
        const arr = [1, 2, 3, 3];
        const v = new Set(arr);
        expect(v.size).toBe(3);
    });

    it('strong sets will keep the reference', () => {
        const set = new Set();
        let key = {};
        set.add(key);
        expect(set.size).toBe(1);
        key = null;
        expect(set.size).toBe(1);
        // retrieve value
        key = [...set][0];
        expect(key).toEqual({});
    });

    it('map', () => {
        const m = new Map();
        const key1 = {};
        const key2 = {};
        m.set(key1, 'ali');
        m.set(key2, 'Gholi');
        m.set(key1, 'bagher');
        expect(m.size).toBe(2);
        expect(m.get(key1)).toBe('bagher');
        expect(m.get(key2)).toBe('Gholi');
    });

    it('map clear', () => {
        const m = new Map();
        const key1 = {};
        const key2 = {};
        m.set(key1, 'ali');
        m.set(key2, 'Gholi');
        expect(m.size).toBe(2);
        m.clear();
        expect(m.size).toBe(0);
    });

    it('map foreach', () => {
        const m = new Map();
        const key1 = {};
        m.set(key1, 'ali');
        m.forEach((x, k, th) => {
            expect(x).toBe('ali');
            expect(k).toBe(key1);
            expect(th).toBe(m);
        });
    });

    it('weak maps', () => {
        const wm = new WeakMap();
        const f = () => {
            wm.set('nam', 'ali');
        };
        expect(f).toThrow();
    });

    it('weak maps', () => {
        const wm = new WeakMap();
        const key1 = {};
        wm.set(key1, 'ali');
        expect(wm.get(key1)).toBe('ali');
    });

    it('weak maps init with array', () => {
        const key1 = {};
        const key2 = {};
        const wm = new WeakMap([
            [key1, 'ali'],
            [key2, 'mohammad'],
        ]);
        expect(wm.get(key1)).toBe('ali');
        expect(wm.get(key2)).toBe('mohammad');
    });

    it('private variable', () => {
        function getNewObject() {
            let i = 0;
            return {
                next() {
                    return i++;
                }
            }
        }
        const d = getNewObject();
        expect(d.next()).toBe(0);
        expect(d.next()).toBe(1);
        expect(d.next()).toBe(2);
        expect(d.next()).toBe(3);
    });

    it('private var by class', () => {
        class NewObject {
            i = 0;
            next() {
                return this.i++;
            }
        }
        const d = new NewObject();
        expect(d.next()).toBe(0);
        expect(d.next()).toBe(1);
        expect(d.next()).toBe(2);
        expect(d.i).toBeDefined();
    });
});