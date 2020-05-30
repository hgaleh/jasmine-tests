function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    return `welcome ${this.name} ${this.lastName}!`;
};

describe('ES5 classes: ', function()  {
    it('inherited object should have father properties', function()  {
        function Customer(firstName, lastName, customerId) {
            Person.call(this, firstName, lastName);
            this.customerId = customerId;
        }

        Customer.prototype = Object.create(Person.prototype);
        Customer.prototype.constructor = Customer;

        const cus = new Customer('Hojjat', 'Bakhtiyari', 12);

        expect(cus.hasOwnProperty('name')).toBeTrue();
        expect(cus.hasOwnProperty('lastName')).toBeTrue();
        expect(cus.hasOwnProperty('greet')).toBeFalse();
        expect(cus.hasOwnProperty('customerId')).toBeTrue();
        expect(cus.greet()).toBe('welcome Hojjat Bakhtiyari!');
    });

    it('create new object from current object only prototype', function()  {
        const newObject = Object.create({
            greeting: () => {
                return `Hello ${this.firstName} ${this.lastName}!`
            }
        });
        newObject.firstName = 'John';
        newObject.lastName = 'Doe';
        expect(newObject.hasOwnProperty('firstName')).toBeTrue();
        expect(newObject.hasOwnProperty('lastName')).toBeTrue();
        expect(newObject.hasOwnProperty('greeting')).toBeFalse();
    });

    it('another use of Object.create body and prototype', function()  {
        const newObject = Object.create(
            {
                greeting: () => {
                    return `Hello ${this.firstName} ${this.lastName}!`;
                }
            },
            {
                firstName: {key: 'John'},
                lastName: {key: 'Doe'}
            }
        );
        expect(newObject.hasOwnProperty('firstName')).toBeTrue();
        expect(newObject.firstName).toBeUndefined();
        expect(newObject.hasOwnProperty('lastName')).toBeTrue();
        expect(newObject.hasOwnProperty('greeting')).toBeFalse();
    });
});