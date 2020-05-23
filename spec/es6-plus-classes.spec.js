describe('ES6+ classes: ', () => {
    it('class in es6', () => {
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
        }
        const p = new Person('Hojjat', 'Bkh');
        expect(p.hasOwnProperty('firstName')).toBeTrue();
    });

    it('class with method', () => {
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            
            greet() {
                return `Welcome ${this.firstName} ${this.lastName}`;
            }
        }
        const p = new Person('John', 'Doe');
        expect(p.greet()).toBe('Welcome John Doe');
        expect(p.hasOwnProperty('greet')).toBeFalse(); // It is in prototype
        expect(Person.prototype.hasOwnProperty('greet')).toBeTrue();
    });

    it('static method in class', () => {
        class Person {
            static plus(a, b) {
                return a + b;
            }
        }
        expect(Person.plus(1, 5)).toBe(6);
    });

    it('customer inherits from person', () => {
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }

            greet() {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        class Customer extends Person {
            id;
            constructor(firstName, lastName) {
                super(firstName, lastName);
            }
        }

        const c = new Customer('Jogn', 'Doe', 10);
        
        expect(c.hasOwnProperty('firstName')).toBeTrue();
        expect(c.hasOwnProperty('lastName')).toBeTrue();
        expect(c.hasOwnProperty('id')).toBeTrue();
        expect(c.hasOwnProperty('greet')).toBeFalse();
    });
});