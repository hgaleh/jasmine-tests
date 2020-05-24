describe('spread function: ', () => {
    it('spread into variables', () => {
        const s = {
            name: 10,
            lname: 11,
            ss: 12
        };
        const {name: a, lname: b, ss: c} = s;
        expect(a).toBe(10);
        expect(b).toBe(11);
        expect(c).toBe(12);
    });

    it('merge arrays', () => {
        const a = [1, 3, 5];
        const b = [2, 4, 6];
        const c = [...a, ...b];
        expect(c.length).toBe(6);
        expect(c[2]).toBe(5);
    });

    it('push an array elements to another', () => {
        const a = [1, 3, 5];
        const b = [2, 4, 6];
        b.push(...a);
        expect(b.length).toBe(6);
        expect(b[2]).toBe(6);
    });

    it('rest parameter', () => {
        function testRest(a, b, ...restOfParams) {
            return restOfParams[0];
        }

        const a = testRest(1, 2, 4, 5);
        expect(a).toBe(4);
    });

    it('get array elements in one line', () => {
        const arr = [2, 5, 3, 1, 9];
        [a, b, c] = arr;
        expect(a).toBe(2);
        expect(b).toBe(5);
        expect(c).toBe(3);
    });

    it('get first and third array elements in one line', () => {
        const arr = [2, 5, 3, 1, 9];
        [a, , c] = arr;
        expect(a).toBe(2);
        expect(c).toBe(3);
    });

    it('get first element in a variable and rest in an array', () => {
        const arr = [2, 5, 3, 1, 9];
        [a, , ...c] = arr;
        expect(a).toBe(2);
        expect(c.length).toBe(3);
        expect(c).toEqual([3, 1, 9])
    });

    it('default value for spread operation', () => {
        const arr = [2, 5];
        [, a, c = 24] = arr;
        expect(a).toBe(5);
        expect(c).toEqual(24)
    });

    it('not default value for spread operation', () => {
        const arr = [2, 5];
        [a, c = 24] = arr;
        expect(a).toBe(2);
        expect(c).toEqual(5)
    });

    it('destructing object', () => {
        const ali = {name: 'ali', lastName: 'Daneshvar'};
        const {name, lasName} = ali; //varnames should correspond to object keys
        expect(name).toBe('ali');
        expect(lasName).toBeUndefined();
    });

    it('default value in object destruction', () => {
        let {a, b, c = 3} = {a: "1", b: "2"};
        expect(a).toBe('1');
        expect(b).toBe('2');
        expect(c).toBe(3);
    });

    it('computer key in object destruction', () => {
        const ali = {name: 'ali', lastName: 'Daneshvar'};
        const {name, ["last" + "Name"]: lasName} = ali; //varnames should correspond to object keys
        expect(name).toBe('ali');
        expect(lasName).toBe("Daneshvar");
    });

    it('property name same as variable name', () => {
        const a = 10;
        const b = 20;
        const c = {a, b};
        expect(c.a).toBe(10);
        expect(c.b).toBe(20);
    });

    it('this in function', () => {
        const obj = {
            fn: function () {
                objMem = 11;
                expect(this.objMem).toBe()
            },
            objMem: 10,
        }
    });
});