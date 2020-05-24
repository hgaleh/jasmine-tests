describe('test strings', () => {
    it('len of a string', () => {
        expect("hello".length).toBe(5)
    });

    it('concat strigs', () => {
        expect("Hojjat".concat(" ", "is ", "the ", "UI.")).toBe("Hojjat is the UI.")
    });

    it('uppercase and lowercase', () => {
        expect("hojjat".toUpperCase()).toBe("HOJJAT");
        expect("hOjjaT".toLowerCase()).toBe("hojjat");
    });

    it('index of sub string', () => {
        expect('hell'.indexOf('l')).toBe(2);
        expect('hell'.indexOf('m')).toBe(-1);
    });

    it('last index of', () => {
        expect('hell'.lastIndexOf('l')).toBe(3);
        expect('hell'.lastIndexOf('m')).toBe(-1);
    });
    
    it('char at', () => {
        expect("ali".charAt(1)).toBe('l')
    });

    it('substring', () => {
        expect("I am Hojjat".substring(5, 11)).toBe('Hojjat')
    });

    it('slice', () => {
        expect("I am Hojjat".slice(5, 11)).toBe("Hojjat");
        expect("I am Hojjat".slice(-6, -1)).toBe("Hojja");
        expect("I am Hojjat".slice(-6)).toBe("Hojjat");
    });

    it('split string', () => {
        expect("Hojjat is Programmer".split(' ')).toEqual(['Hojjat', 'is', 'Programmer']);
    });

    it('replace', () => {
        expect("Hojjat is Programmer".replace("Programmer", "Developer")).toBe("Hojjat is Developer")
    });

    it('include', () => {
        expect("Hojjat is Programmer".includes("is")).toBeTruthy();
    });

    it('persian string length', () => {
        const s = 'سلام';
        expect(s.length).toBe(4);
    });

    it('charat persian', () => {
        const s = 'سلام';
        expect(s.charAt(1)).toBe('ل');
    });
});