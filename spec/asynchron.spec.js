describe('async programming: ', function()  {
    it('timeout', (done) => {
        let g;
        setTimeout(() => {
            g = 10;
            expect(g).toBe(10);
            done();
        }, 100);
    });

    it('timout as promise', async () => {
        const timePromise = new Promise((res) => {
            setTimeout(() => {
                res(true);
            }, 100);
        });
        const val = await timePromise;
        expect(val).toBeTrue();
    });

    // it('await only valid in async', function()  {
    //     const y = () => {
    //         const timePromise = new Promise((res) => {
    //             setTimeout(() => {
    //                 res(true);
    //             }, 1000);
    //         });
    //         const val = await timePromise;
    //     }
    //     expect(y).toThrow();
    // });

    it('promise resolve', async () => {
        const res = Promise.resolve(110);
        const ans = await res;
        expect(ans).toBe(110);
    });

    it('promise reject', (ans) => {
        const rej = Promise.reject(42);
        rej.catch((res) => {
            expect(res).toBe(42);
            ans();
        });
    });

    it('convert thenable to promise', async () => {
        const thenable = {
            then: function (res, rej) {
                res(42)
            }
        };
        const prom = Promise.resolve(thenable);
        const resp = await prom;
        expect(resp).toBe(42);
    });

    it('in case of throw, catch will be called', async () => {
        const promise = new Promise((resolve, reject) => {
            throw new Error('error happened');
        });
        try {
            const t = await promise;
        } catch(e) {
            expect(e.message).toBe('error happened');
        }
    });

    it('in case of throw, catch with callback', async () => {
        const promise = new Promise((resolve, reject) => {
            throw new Error('error happened');
        });

        const t = promise.catch(function(x) {
            expect(x.message).toEqual('error happened');
        });
    });

    it('chain promises', function()  {
        const promise = Promise.resolve(425);
        promise.then((val) => {
            expect(val).toBe(425);
        }).then(y => {
            expect(y).toBeUndefined();
        });

        promise.then((val) => {
            expect(val).toBe(425);
        });
    });


    it('cache and then separated', (ou) => {
        const promise = new Promise((executor, reject) => {
            reject(125);
        });
        promise.then(null, (err) => {
            expect(err).toBe(125);
            ou();
        });
    });

    it('cache and then separated', (ou) => {
        const promise = new Promise((executor, reject) => {
            reject(125);
        });
        promise.then((val) => {})
        .catch(val => {
            expect(val).toBe(125);
            ou();
        });
    });

    it('chain of promise', (out) => {
        const promise = new Promise((executor, reject) => {
            executor(125);
        });

        promise.then(exec => {
            promise.then(exec2 => {
                expect(exec2).toBe(125);
                out();
            });
        });
    });

    // it('unhandled rejection', (called) => {
    //     process.on('unhandledRejection', (reason, promise) => {
    //         expect(reason).toEqual('cant handle');
    //         called();
    //     });
    //     const prom = Promise.reject('cant handle');
    //     prom.then(() => {}, null);
    // });

    it('chaining promises', (out) => {
        const promise = new Promise((executor, reject) => {
            executor(125);
        });
        promise.then(() => {})
        .then(() => {
            out();
        })
    });

    it('handle error in next chaining then', (out) => {
        const promise = new Promise((executor, reject) => {
            executor(125);
        });
        promise.then(() => {
            throw new Error('boom');
        })
        .catch(err => {
            expect(err.message).toBe('boom');
            out();
        });
    });

    it('two successive errors', (out) => {
        const promise = new Promise((executor, reject) => {
            throw new Error('error1');
        });
        promise.catch((err) => {
            expect(err.message).toBe('error1');
            throw new Error('error2');
        })
        .catch(err => {
            expect(err.message).toBe('error2');
            out();
        });
    });

    it('return values in promise chains', (out) => {
        const promise = new Promise((exec, reason) => {
            exec(10);
        });

        promise.then(reason => {
            expect(reason).toBe(10);
            return reason + 20;
        })
        .then(reason => {
            expect(reason).toBe(30);
            throw new Error('boom');
        }).catch(err => {
            expect(err.message).toBe('boom');
            out();
        });
    });

    it('two promises after each other', (out) => {
        const p1 = new Promise(function(resolve, reject) {
            resolve(42);
        });

        const p2 = new Promise(function(resolve, reject) {
            resolve(43);
        });
        p1.then(function(value) {
            expect(value).toBe(42);
            return p2;
        }).then(value => {
            expect(value).toBe(43);
            out()
        })
    });

    it('two promises after each other p2 rejects', (out) => {
        const p1 = new Promise(function(resolve, reject) {
            resolve(42);
        });

        const p2 = new Promise(function(resolve, reject) {
            reject('errr');
        });
        p1.then(function(value) {
            expect(value).toBe(42);
            return p2;
        }).then(value => {
        }).catch(reason => {
            expect(reason).toBe('errr');
            out();
        })
    });

    it('promise all', (out) => {
        const p1 = new Promise(function(resolve, reject) {
            resolve(42);
        });
        const p2 = new Promise(function(resolve, reject) {
            resolve(43);
        });
        const p3 = new Promise(function(resolve, reject) {
            resolve(44);
        });
        const p4 = new Promise(function(resolve, reject) {
            resolve(45);
        });
        
        const p5 = Promise.all([p1, p2, p3, p4]);
        p5.then(value => {
            expect(value).toEqual([42, 43, 44, 45]);
            out();
        })
    });

    it('promise race', (out) => {
        const p1 = new Promise(function(resolve, reject) {
            resolve(42);
        });
        const p2 = new Promise(function(resolve, reject) {
            resolve(43);
        });
        const p3 = new Promise(function(resolve, reject) {
            resolve(44);
        });
        const p4 = new Promise(function(resolve, reject) {
            reject(45);
        });
        const p5 = Promise.race([p1, p2, p3, p4]);
        p5.then(success => {
            expect(success).toBe(42);
            out();
        });
    });
});