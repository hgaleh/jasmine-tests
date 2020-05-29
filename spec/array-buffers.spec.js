describe('array buffers: ', () => {
    it('array buffer length', () => {
        const buff = new ArrayBuffer(10);
        const dv = new DataView(buff);
        expect(dv.buffer.byteLength).toBe(10)
    });

    it('view only a portion of buffer', () => {
        const buff = new ArrayBuffer(10);
        const dv = new DataView(buff, 5, 2);
        expect(dv.byteLength).toBe(2)
        expect(dv.buffer.byteLength).toBe(10)
    });

    it('set and retrieve data from arraybuffer', () => {
        const buff = new ArrayBuffer(10);
        const dv = new DataView(buff);
        dv.setInt8(1, 120);
        dv.setInt8(2, 25);
        expect(dv.getInt8(1)).toBe(120);
        expect(dv.getInt8(2)).toBe(25);
    });

    it('set and retrieve data from arraybuffer overlap', () => {
        const buff = new ArrayBuffer(10);
        const dv = new DataView(buff);
        dv.setInt8(2, 25);
        dv.setInt16(1, 256);
        expect(dv.getInt16(1)).toBe(256);
        expect(dv.getInt8(2)).toBe(0);
    });

    it('typed array', () => {
        const buff = new ArrayBuffer(10);
        const dv = new Int16Array(buff);
        dv[0] = 123;
        dv[1] = 124;
        expect(dv[0]).toBe(123);
        expect(dv[1]).toBe(124);
    });

    it('init typed array', () => {
        const arr = new Int16Array([100, 120]);
        expect(arr[0]).toBe(100);
        expect(arr[1]).toBe(120);
    });
});