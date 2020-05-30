describe('test this: ', function()  {
    it('constructor function', function()  {
        function Person() {
            this.name = 'Brad';
        }
        const ss = new Person();
        expect(ss.name).toBe('Brad');
        expect(typeof ss).toBe('object');
    });

    it('constructor function without new', function()  {
        function Person() {
            this.name = 'Brad';
        }
        const ss = Person();
        expect(ss).toBeUndefined();
    });

    it('date object', function()  {
        const ss = new Date('10-3-1999');
        expect(typeof ss).toBe('object');
        expect(ss.getYear()).toBe(99);
        expect(ss.getMonth()).toBe(9);
        expect(ss.getDate()).toBe(3)
    });

    it('typeof new number', function()  {
        const a = 10;
        const b = new Number(12);
        expect(typeof a).toBe('number')
        expect(typeof b).toBe('object')
    });

    
    it('typeof new boolean', function()  {
        const a = true;
        const b = new Boolean(false);
        expect(typeof a).toBe('boolean')
        expect(typeof b).toBe('object')
    });

    it('typeof function', function()  {
        const a = (() => {return 10})();
        const b = () => {return 0}
        expect(a).toBe(10)
        expect(typeof b).toBe('function')
    });

    it('array type and object', function()  {
        const a = [1, 2, 3];
        const b = new Array(2, 9, 3, 6);
        expect(typeof a).toBe('object')
        expect(typeof b).toBe('object')
    });
});