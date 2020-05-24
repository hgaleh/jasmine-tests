describe('reflect test: ', () => {
    it('reflect get', () => {
        const a = {_name: 'Ali'};
        Reflect.defineProperty(a, '_name', {
            writable: false,
            configurable: false
        });
        Reflect.defineProperty(a, 'name', {
            get: () => this._name,
            enumerable: false,
            configurable: false
        });
        const name = Reflect.get(a, 'name');
    });
});