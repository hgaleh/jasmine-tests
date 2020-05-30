describe('test strings', function()  {
    it('len of a string', function()  {
        expect("hello".length).toBe(5)
    });

    it('concat strigs', function()  {
        expect("Hojjat".concat(" ", "is ", "the ", "UI.")).toBe("Hojjat is the UI.")
    });

    it('uppercase and lowercase', function()  {
        expect("hojjat".toUpperCase()).toBe("HOJJAT");
        expect("hOjjaT".toLowerCase()).toBe("hojjat");
    });

    it('index of sub string', function()  {
        expect('hell'.indexOf('l')).toBe(2);
        expect('hell'.indexOf('m')).toBe(-1);
    });

    it('last index of', function()  {
        expect('hell'.lastIndexOf('l')).toBe(3);
        expect('hell'.lastIndexOf('m')).toBe(-1);
    });
    
    it('char at', function()  {
        expect("ali".charAt(1)).toBe('l')
    });

    it('substring', function()  {
        expect("I am Hojjat".substring(5, 11)).toBe('Hojjat')
    });

    it('slice', function()  {
        expect("I am Hojjat".slice(5, 11)).toBe("Hojjat");
        expect("I am Hojjat".slice(-6, -1)).toBe("Hojja");
        expect("I am Hojjat".slice(-6)).toBe("Hojjat");
    });

    it('split string', function()  {
        expect("Hojjat is Programmer".split(' ')).toEqual(['Hojjat', 'is', 'Programmer']);
    });

    it('replace', function()  {
        expect("Hojjat is Programmer".replace("Programmer", "Developer")).toBe("Hojjat is Developer")
    });

    it('include', function()  {
        expect("Hojjat is Programmer".includes("is")).toBeTruthy();
    });

    it('persian string length', function()  {
        const s = 'سلام';
        expect(s.length).toBe(4);
    });

    it('charat persian', function()  {
        const s = 'سلام';
        expect(s.charAt(1)).toBe('ل');
    });

    it('chinese char', function()  {
        let text = '𠮷';
        expect(text.length).toBe(2);
    });
});