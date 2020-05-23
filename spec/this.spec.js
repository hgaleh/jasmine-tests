describe('test this: ', () => {
    it('this in arrow function refers to context', function() {
        function all() {
            const a = 10;
            this.a = 11;
            expect(this.a).toBe(11);
        }
        all();
    });

    it('this.a is different from a', function() {
        function all() {
            const b = 10;
            expect(this.b).toBeUndefined();
        }
        all();
    });

    it('this.a is different from a in functions', function() {
        const c = 10;
        function all() {
            expect(this.c).toBeUndefined();
        }
        all();
    });

    it('this.a is different from a in lambdas too', function() {
        const d = 10;
        const all =  () => {
            expect(this.d).toBeUndefined();
        }
        all();
    });

    it('this.e refers to where lambda originated', function() {
        this.e = 10;
        const all =  () => {
            expect(this.e).toBe(10);
        }
        all();
    });

    it('this cant refer to prototype. It will not change when you change context', function() {
        this.f = 11;
        const s = {
            f: 10,
            all: () => {
                expect(this.f).toBe(11);
            }
        }
        
        function m(a) {
            this.f = 12;
            a.all();
        }

        m(s);
    });

    it('this in lambda in argument list refers to the context of function call', () => {
        this.g = 11;
        function lambdaCaller(l) {
            this.g = 10;
            l();
        }

        lambdaCaller(() => {
            expect(this.g).toBe(11);
        });
    });

    it('function in prototype', () => {
        const s = {
            h: 10,
            all: function() {
                expect(this.h).toBe(10);
            }
        }
        s.all();
    });
})