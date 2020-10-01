
describe('object ref test', () => {
    it('same field should be refrenced same in different objects', () => {
        const objParent = {
            value: 'defaultValue'
        }
        const child1 = {
            val: objParent.value
        }

        const child2 = {
            value: objParent.value
        }
        expect(child1.val).toBe('defaultValue');
        expect(child2.value).toBe('defaultValue');
        child1.val = 'changedValue';
        expect(child2.value).toBe('defaultValue');
        objParent.value = 'ssss';
        expect(child2.value).toBe('defaultValue');
    });

    it('if value is object they should change simultanously', () => {
        const objParent = {
            value: {
                val: 'defaultValue'
            }
        }
        const child1 = {
            val: objParent.value
        }

        const child2 = {
            value: objParent.value
        }

        child1.val.val = 'newVal';
        expect(child2.value.val).toBe('newVal');
    });
});