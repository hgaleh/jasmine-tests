class RealClass {
    isClass() {}
}

describe('mock instance of', () => {
    xit('instance of mock', () => {
        let fakeCalss = jasmine.createSpyObj('RealClass', ['isClass']);
        expect(fakeCalss instanceof RealClass).toBeTrue();
    });
});