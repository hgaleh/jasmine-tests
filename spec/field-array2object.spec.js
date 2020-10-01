class Field {
    constructor(name, val) {
        this.value = val;
        this.name = name;
    }

    deserialize(input) {
        this.width = 25;

        this.input = input;
        Object.assign(this, input);

        // if (this.validations) {
        //     this.validations = this.validations.map(v => new Validation(<string>this.label).deserialize(v));
        // }

        // this.preparePlaceholder();
        // this.getOptions();

        if (this.fields) {
            this.fields = this.fields.map(f => new Field(this.apiService).deserialize(f));
        }

        return this;
    }

    value;
    name;
    input;
    fields;
}

function field2Array(fieldsArray) {
    out = [];
    fieldsArray.reduce((acc, currentValue) => {
        const outputObject = {};
        currentValue.forEach(eachColumn => {
            outputObject[eachColumn.name] = eachColumn.value;
        });
        acc.push(outputObject);
        return acc;
    }, out);
    return out;
}



describe('field array to object', () => {
    it('normal', () => {
        obj = [
            [new Field('col1', '100'), new Field('col2', '200')],
            [new Field('col1', 4785), new Field('col2', 125)],
            [new Field('col1', 'sss'), new Field('col2', 'asde')],
            [new Field('col1', 'jhhh'), new Field('col2', '8555')],
        ];
        out = field2Array(obj);
        expect(out[0]).toEqual({
            col1: '100',
            col2: '200'
        });
    });

    it('test deserialize', () => {
        let originalField = new Field('originalFieldName', '100');
        originalField.fields = [
            Object.assign(new Field('col1', 15)),
            Object.assign(new Field('col2', 15)),
            Object.assign(new Field('col3', 15)),
        ];
        let clon1 = new Field().deserialize(originalField);
        clon1.value = 105;
        let clon2 = new Field().deserialize(originalField);
        clon2.value = 125;
        let clon3 = new Field().deserialize(originalField);
        clon3.value = 41;
        expect(originalField.name).toBe('originalFieldName');
        expect(originalField.value).toBe('100');
    });
});