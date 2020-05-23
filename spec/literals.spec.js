describe('test litterals', () => {
    it('test template strings', () => {
        const name = 'Hojjat';
        expect(`hello ${name}`).toBe("hello Hojjat");
    });
});