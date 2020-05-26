function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.show = () => {
        return `${name} ${lastName}`;
    }
}

describe('prototypes: ', () => {
    it('show show name', () => {
        const u = new User('Hojjat', 'Bakhtiyari')
        expect(u.show()).toBe('Hojjat Bakhtiyari')
    });

    it('add function to it before creating', () => {
        User.prototype.getHojjat = () => 'Hojjat';
        const u = new User('Hojjat', 'Bakhtiyari')
        expect(u.getHojjat()).toBe('Hojjat')
    });

    it('add function to it after creating', () => {
        const u = new User('Hojjat', 'Bakhtiyari')
        User.prototype.getHojjat = () => 'Hojjat';
        expect(u.getHojjat()).toBe('Hojjat')
    });

    it('hasOwnProperty', () => {
        expect(User.hasOwnProperty('name')).toBeTruthy();
        const u = new User('Hojjat', 'Bakhtiyari')
        expect(u.hasOwnProperty('name')).toBeTruthy();
    });

    it('hasOwnProperty of prototype not for object', () => {
        expect(User.hasOwnProperty('getHojjat')).toBeFalsy();
        User.prototype.getHojjat = () => 'Hojjat';
        const u = new User();
        expect(u.hasOwnProperty('getHojjat')).toBeFalsy();
    });

    it('change prototype', () => {
        const person = {
            getGreeting() {
                return 'hello';
            }
        };

        const dog = {
            getGreeting() {
                return 'Woof';
            }
        }
        const friend = Object.create(person);
        expect(friend.getGreeting()).toBe('hello');
        expect(Object.getPrototypeOf(friend)).toBe(person);
        Object.setPrototypeOf(friend, dog);
        expect(friend.getGreeting()).toBe('Woof');
        expect(Object.getPrototypeOf(friend)).toBe(dog);
    });

    it('use super and override it', () => {
        const person = {
            getGreeting() {
                return 'hello';
            }
        };

        const dog = {
            getGreeting() {
                return 'Woof';
            }
        }

        const friend = {
            getGreeting() {
                return super.getGreeting() + ' Hi!';
            }
        }

        Object.setPrototypeOf(friend, person);
        expect(friend.getGreeting()).toBe('hello Hi!');
        Object.setPrototypeOf(friend, dog);
        expect(friend.getGreeting()).toBe('Woof Hi!');
    });
});