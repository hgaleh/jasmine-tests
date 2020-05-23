function getLastName(name) {
    switch(name) {
        case 'hojjat':
            return 'Bakhtiyari';
        case 'ali':
            return 'Mostafavi';
        default:
            return 'None';
    }
}



describe('expressions test', () => {
    it('select case', () => {
        expect(getLastName('hojjat')).toBe('Bakhtiyari');
        expect(getLastName('ali')).toBe('Mostafavi');
        expect(getLastName('ali2')).toBe('None');
    });

    it('immediately callable function', () => {
        expect((() => 'Hojjat')()).toBe('Hojjat');
    });

    it('immediately callable with parameter', () => {
        expect((() => getLastName('hojjat'))()).toBe('Bakhtiyari');
    });

    it('functions in object', () => {
        const objectExample = {
            callable: getLastName
        }
        expect(objectExample.callable('hojjat')).toBe('Bakhtiyari');
    });

    it('extract ids from object', () => {
        const users = [
            {id: 3, name: 'John'},
            {id: 2, name: 'Sara'},
            {id: 5, name: 'Karen'}
        ];
        
        const mapped = users.map((x) => x.id);
        expect(users.length).toBe(3);
        expect(mapped.length).toBe(3);
        expect(users[0].name).toBe('John');
        expect(mapped).toEqual([
            3, 2, 5
        ])
    });

    it('sum of values in object', () => {
        const obj = {
            fst: 2,
            scd: 1,
            thrd: 8
        }

        let sum = 0;
        for (key in obj) {
            sum += obj[key];
        }
        expect(sum).toBe(11);
    });
});