const path = require('path')

describe('decorators readonly', () => {
    it('readonly', () => {
        function readonly(target: any) {
            target.describtor.writable = false;
            return target;
        }
        let r = 10;
        class AClass {
            readOnlyMethod() {
                return '10';
            }
        }
    });
});