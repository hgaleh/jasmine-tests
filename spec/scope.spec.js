describe('Scopes test', () => {
    it('local variables with same name as global variables are preferred', () => {
        let a = 10;
        function localCaller() {
            let a = 3;
            expect(a).toBe(3);
        }
    });

    it('local variable can\'t be called from outside', () => {
        let a;
        function localCaller() {
            let a = 3;
        }
        expect(a).toBeUndefined();
    });

    it('var can be called from outside', () => {
        var a;
        (() => {
            var a = 3;
            expect(a).toBe(3);
        })();
        expect(a).toBeUndefined();
    });

    it('global var, local let', () => {
        var a;
        function localCaller() {
            let a = 3;
            expect(a).toBe(3);
        }
        expect(a).toBeUndefined();
    });

    it('if block, var is defined outside and inside', () => {
        var a;
        if (true) {
            var a = 10;
        }
        expect(a).toBe(10);
    });

    it('if block, var is defined outside, let inside', () => {
        var a;
        if (true) {
            let a = 10;
        }
        expect(a).toBeUndefined();
    });

    it('call before declaration', () => {
        expect(callMe()).toBe(10);
        function callMe() {
            return 10;
        }
    });

    it('const in for', () => {
        for (let i=0; i< 3; i++) {
            const f = i;
            expect(f).toBe(i);
        }
    });

    it('function in loop', () => {
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