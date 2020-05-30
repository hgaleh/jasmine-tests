describe('Scopes test', function()  {
    it('local variables with same name as global variables are preferred', function()  {
        let a = 10;
        function localCaller() {
            let a = 3;
            expect(a).toBe(3);
        }
    });

    it('local variable can\'t be called from outside', function()  {
        let a;
        function localCaller() {
            let a = 3;
        }
        expect(a).toBeUndefined();
    });

    it('var can be called from outside', function()  {
        var a;
        (() => {
            var a = 3;
            expect(a).toBe(3);
        })();
        expect(a).toBeUndefined();
    });

    it('global var, local let', function()  {
        var a;
        function localCaller() {
            let a = 3;
            expect(a).toBe(3);
        }
        expect(a).toBeUndefined();
    });

    it('if block, var is defined outside and inside', function()  {
        var a;
        if (true) {
            var a = 10;
        }
        expect(a).toBe(10);
    });

    it('if block, var is defined outside, let inside', function()  {
        var a;
        if (true) {
            let a = 10;
        }
        expect(a).toBeUndefined();
    });

    it('call before declaration', function()  {
        expect(callMe()).toBe(10);
        function callMe() {
            return 10;
        }
    });

    it('const in for', function()  {
        for (let i=0; i< 3; i++) {
            const f = i;
            expect(f).toBe(i);
        }
    });

    it('function in loop', function()  {
        let fs = [];
        let res = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for(let i=0; i<10; i++) {
            fs.push(() => {
                return i;
            });
        }
        fs.forEach((x, i) => {
            expect(x()).toBe(res[i]);
        });
    });
});