describe('test array functions', () => {
    it('create array', () => {
        expect(new Array(2, 5, 8)).toEqual([2, 5, 8]);
        expect(Array(2, 5, 8)).toEqual([2, 5, 8]);
    });

    it('check being array', () => {
        expect(Array.isArray([1, 2])).toBeTruthy();
        expect(Array.isArray([])).toBeTruthy();
        expect(Array.isArray('hell')).toBeFalsy();
    });

    it('get index of element', () => {
        expect([23, 45, 37].indexOf(37)).toBe(2);
        expect([23, 45, 37].indexOf(25)).toBe(-1);
    });

    it('add number to the back of array', () => {
        const arr = [34, 54, 23, 90];
        arr.push(12);
        expect(arr.length).toBe(5);
        expect(arr.indexOf(12)).toBe(4);
    });

    it('add value to the beginning of array', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        arr.unshift('dariush');
        expect(arr.indexOf('dariush')).toBe(0);
        expect(arr.indexOf('dari')).toBe(-1);
        expect(arr.length).toBe(4);
    });

    it('take from the end of the array', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        const lst = arr.pop();
        expect(lst).toBe('hasan');
        expect(arr.length).toBe(2);
    });

    it('take value from the front of an array', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        const fst = arr.shift();
        expect(fst).toBe('hojjat');
        expect(arr.length).toBe(2);
    });

    it('take value from an index and remove that', () => {
        const arr = ['hojjat', 'ali', 'hasan', 'mehdi', 'jalal'];
        const selected = arr.splice(1, 2);
        expect(selected).toEqual(['ali', 'hasan']);
        expect(arr.length).toBe(3);
    });

    it('reverse array', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        const secArray = arr.reverse();
        expect(arr.length).toBe(3);
        expect(arr).toEqual(secArray);
        expect(arr).toEqual(['hasan', 'ali', 'hojjat']);
    });

    it('concat array', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        const secArray = arr.concat(['mehdi']);
        expect(arr.length).toBe(3);
        expect(secArray.length).toBe(4);
        expect(secArray).toEqual(['hojjat', 'ali', 'hasan', 'mehdi']);
    });

    it('sort array', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        const secArray = arr.sort();
        expect(arr.length).toBe(3);
        expect(arr).toEqual(secArray);
        expect(arr).toEqual(['ali', 'hasan', 'hojjat']);
    });

    it('find strings containing "h"', () => {
        const arr = ['hojjat', 'ali', 'hasan'];
        const found = arr.find((str) => str.includes('h'));
        expect(typeof found).toBe('string');
        expect(found).toBe('hojjat');
    });
});