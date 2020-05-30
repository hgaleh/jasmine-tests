function User(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.show = () => {
        return `${name} ${lastName}`;
    }
}

describe('prototypes: ', function()  {
    it('show show name', function()  {
        const u = new User('Hojjat', 'Bakhtiyari')
        expect(u.show()).toBe('Hojjat Bakhtiyari')
    });

    it('add function to it before creating', function()  {
        User.prototype.getHojjat = () => 'Hojjat';
        const u = new User('Hojjat', 'Bakhtiyari')
        expect(u.getHojjat()).toBe('Hojjat')
    });

    it('add function to it after creating', function()  {
        const u = new User('Hojjat', 'Bakhtiyari')
        User.prototype.getHojjat = () => 'Hojjat';
        expect(u.getHojjat()).toBe('Hojjat')
    });

    it('hasOwnProperty', function()  {
        expect(User.hasOwnProperty('name')).toBeTruthy();
        const u = new User('Hojjat', 'Bakhtiyari')
        expect(u.hasOwnProperty('name')).toBeTruthy();
    });

    it('hasOwnProperty of prototype not for object', function()  {
        expect(User.hasOwnProperty('getHojjat')).toBeFalsy();
        User.prototype.getHojjat = () => 'Hojjat';
        const u = new User();
        expect(u.hasOwnProperty('getHojjat')).toBeFalsy();
    });

    it('change prototype', function()  {
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

    it('use super and override it', function()  {
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