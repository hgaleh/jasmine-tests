describe('test litterals', function()  {
    it('test template strings', function()  {
        const name = 'Hojjat';
        expect(`hello ${name}`).toBe("hello Hojjat");
    });
});