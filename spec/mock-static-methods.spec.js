function RealClass() {
    this.mname = 'Ali';
}
RealClass.staticMethod = function() {
    return 'Name is Ali';
}

class UserClass {
    getStaticMethod() {
        return RealClass.staticMethod();
    }

    getName() {
        return RealClass.mname;
    }

    getNameOk() {
        return new RealClass().mname;
    }
}

describe('mock static class', () => {
    it('mock static class methods', () => {
        const u = new UserClass();
        expect(u.getName()).toBeUndefined();
        expect(u.getStaticMethod()).toBe('Name is Ali');
    });

    it('mock static class methods', () => {
        const u = new UserClass();
        expect(u.getNameOk()).toBe('Ali');
    });

    it('mock static', () => {
        const RealClass = function() {
            this.mname = 'Hojjat';
        }
        RealClass.staticMethod = function() {
            return 'Hojjat is real';
        }
        {
            const userClass = new UserClass();
            expect(userClass.getStaticMethod()).toBe('Name is Ali');
            expect(RealClass.staticMethod()).toBe('Hojjat is real');
        }
    });

    it('mock static method', () => {
        spyOn(RealClass, 'staticMethod').and.returnValue('Name is SS');
        const userClass = new UserClass();
        expect(userClass.getStaticMethod()).toBe('Name is SS');
        expect(RealClass.staticMethod).toHaveBeenCalled();
    });
});