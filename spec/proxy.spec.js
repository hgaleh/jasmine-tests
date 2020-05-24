describe('proxy: ', () => {
    it('proxy wraps object', () => {
        const obj = {
            name: 'Hojjat'
        };
        const handler = {};
        const proxy = new Proxy(obj, handler);
        expect(proxy.name).toBe('Hojjat');
        expect(obj.lastName).toBeUndefined();
        proxy.lastName = 'BKH';
        expect(obj.lastName).toBe('BKH');
    });

    it('proxy handler', () => {
        const proxy = new Proxy(
            {
                age: 12
            },
            {
                get: function(target, property, receiver) {
                    if (property in target) {
                        return target[property];
                    } else {
                        return "Not found";
                    }
                }
            }
        );

        expect(proxy.age).toBe(12)
        expect(proxy.name).toBe('Not found');
    });
});