describe('destructuring test: ', () => {
    it('assign object to variables', () => {
        const node = {
            type: 'Identifier',
            name: 'foo'
        };
        const {type, name} = node;
        expect(type).toBe('Identifier');
        expect(name).toBe('foo');
    });

    it('destructure with default value', () => {
        const node = {
            type: 'Identifier',
            name: 'foo'
        };
        const {type, name, val = true} = node;
        expect(val).toBeTrue();
    });

    it('nested object destructuring', () => {
        const node = {
            type: 'identifier',
            name: 'foo',
            loc: {
                start: {
                    line: 1,
                    column: 1
                },
                end: {
                    line: 1,
                    column: 4
                }
            }
        };
        const {loc:{start}} = node;
        expect(start.line).toBe(1);
        expect(start.column).toBe(1);
    });

    it('different destination var name', () => {
        const node = {
            type: 'identifier',
            name: 'foo',
            loc: {
                start: {
                    line: 1,
                    column: 1
                },
                end: {
                    line: 1,
                    column: 4
                }
            }
        };
        const {loc: {start:{line: localStartLine}}} = node;
        expect(localStartLine).toBe(1);
    });

    it('swap vars by array destructuring', () => {
        let a = 1, b = 2;
        expect(a).toBe(1);
        expect(b).toBe(2);
        [a, b] = [b, a];
        expect(a).toBe(2);
        expect(b).toBe(1);
    });

    it('assign first element to variable and the rest to an array', () => {
        const colors = ['red', 'green', 'blue'];
        const [fst, ...rest] = colors;
        expect(fst).toBe('red');
        expect(rest).toEqual(['green', 'blue']);
    });

    it('clone array', () => {
        const colors = ['red', 'green', 'blue'];
        const clonnedColors = colors.concat();
        expect(colors).not.toBe(clonnedColors);
        expect(colors).toEqual(clonnedColors);
    });

    it('concating to arrays', () => {
        const colors = ['red', 'green', 'blue'];
        const additionalColors = ['purpole', 'brown'];
        const allColors = colors.concat(additionalColors);
        expect(allColors).toEqual( ['red', 'green', 'blue', 'purpole', 'brown']);
    });

    it('use destructuring to clone array', () => {
        const colors = ['red', 'green', 'blue'];
        const [...clonnedColors] = colors;
        expect(colors).not.toBe(clonnedColors);
        expect(colors).toEqual(clonnedColors);
    });

    it('destructured parameter', () => {
        function setCookie(name, value, {secure, path, domain, expires}) {
            expect(secure).toBeTrue();
            expect(expires).toBe(60000)
        }
        setCookie('type', 'js', {
            secure: true,
            expires: 60000
        });
    });

    it('destructured parameter is required', () => {
        function setCookie(name, value, {secure, path, domain, expires}) {}
        const j = () => setCookie('type', 'js');
        expect(j).toThrow();
    });

    it('default value for destructured params', () => {
        function setCookie(name, value, {secure=true, path, domain, expires}={}) {
            return secure;
        }
        expect(() => setCookie('', '')).not.toThrow();
        expect(setCookie('', '')).toBeTrue();
        expect(setCookie('', '', {secure: false})).toBeFalse();
    });
});