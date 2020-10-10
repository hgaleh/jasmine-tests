// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    for(let i = 0; i < A.length; i++) {
        const searchFor = i + 1;
        if (A.indexOf(searchFor) === -1) {
            return searchFor;
        }
    }
    return  A.length + 1;
}

describe('problems', () => {
    it('test1', () => {
        expect(solution([2, 3, 1, 5])).toBe(4);
        expect(solution([4, 2, 3, 1])).toBe(5);
        expect(solution([5, 2, 3, 4])).toBe(1);
        expect(solution([3, 4, 1, 2, 10, 6, 9, 8, 7])).toBe(5);
        expect(solution([3, 4, 1, 10, 6, 9, 8, 7, 5])).toBe(2);
    });
});
