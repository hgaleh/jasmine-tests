describe('test array functions', function()  {
    it('create object', function()  {
        const obj = {
            firstName: 'Hojjat'
        };
        expect(obj.firstName).toEqual('Hojjat');
        expect(obj['firstName']).toBe('Hojjat')
    });

    it('date object', function()  {
        const dt = new Date('9-10-1981 11:25:29');
        expect(dt.getYear()).toBe(81);
        expect(dt.getHours()).toBe(11);
        expect(dt.getMinutes()).toBe(25);
        expect(dt.getSeconds()).toBe(29);
    });

    it('date object', function()  {
        expect().toBe();
    });
});