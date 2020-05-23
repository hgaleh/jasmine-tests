import * as request from 'request'

describe('ajax: ', () => {
    it('should behave...', () => {
        request.get('data.txt', {}, (err, res, body) => {
            if (err) { return console.log(err) }
            console.log(body.url);
            console.log(body.explanation)
        });
    });
});