const path = require('path');

describe('decorators readonly', () => {
    it('readonly', () => {
        function readonly() {
            return function (target: Object,
                            propertyKey: string,
                            descriptor: TypedPropertyDescriptor<any>): any {
                descriptor.writable = false;
                return descriptor;
            }
        }

        class AClass {
            @readonly()
            readOnlyMethod() {
                return '10';
            }
        }
    });
});