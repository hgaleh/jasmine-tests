// The implementation. 
function Obj(name) {
  this.name = name;
  this.links = [];
};

Obj.prototype.linkTo = function(to) {
  if (this.links.indexOf(to) === -1) {
    this.links.push(to);
  }
};

Obj.prototype.isLinkedTo = function(to, visited = new Set()) {
  for (let i = 0; i < this.links.length; i++) {
    const link = this.links[i];
    if (!visited.has(link)) {
      if(link === to) {
        return true;
      } else {
        visited.add(link);
        return link.isLinkedTo(to, visited);
      }
    }
  }
  return false;
};

// The tests.
describe("Obj", function() {

  it("can link to itself", function() {
    var foo = new Obj('foo');
    foo.linkTo(foo);
    expect(foo.isLinkedTo(foo)).toBe(true);
  });

  it("does not link to itself", function() {
    var foo = new Obj('foo');
    expect(foo.isLinkedTo(foo)).toBe(false);
  });

  it("has unidirectional link to neighbour", function() {
    var foo = new Obj('foo');
    var bar = new Obj('bar');
    bar.linkTo(foo);
    expect(bar.isLinkedTo(foo)).toBe(true);
    expect(foo.isLinkedTo(bar)).toBe(false);
  });

  it("has neighbours with connections to themselves", function() {
    var foo = new Obj('foo');
    var bar = new Obj('bar');
    var baz = new Obj('baz');

    // Connect the Objs to themselves.
    foo.linkTo(foo);
    bar.linkTo(bar);
    baz.linkTo(baz);

    // Connect baz => bar => foo.
    baz.linkTo(bar);
    bar.linkTo(foo);

    expect(baz.isLinkedTo(foo)).toBe(true);
    expect(baz.isLinkedTo(bar)).toBe(true);
    expect(bar.isLinkedTo(foo)).toBe(true);
  });

  it("can be a cyclic graph", function() {
    var foo = new Obj('foo');
    var bar = new Obj('bar');
    var baz = new Obj('baz');

    // Connect the nodes baz => bar => foo => baz.
    baz.linkTo(bar);
    bar.linkTo(foo);
    foo.linkTo(baz);

    expect(baz.isLinkedTo(foo)).toBe(true);
    expect(baz.isLinkedTo(bar)).toBe(true);
    expect(baz.isLinkedTo(baz)).toBe(true);
  });

  it("can have neighbours in cyclic graph", function() {
    var foo = new Obj('foo');
    var bar = new Obj('bar');
    var baz = new Obj('baz');

    // Connect the nodes baz => bar <=> foo.
    baz.linkTo(bar);
    bar.linkTo(foo);
    foo.linkTo(bar);

    expect(baz.isLinkedTo(foo)).toBe(true);
    expect(baz.isLinkedTo(bar)).toBe(true);
    expect(baz.isLinkedTo(baz)).toBe(false);
  });


  it("can have a cycle of more than 2 Objs", function() {
    var foo = new Obj('foo');
    var bar = new Obj('bar');
    var baz = new Obj('baz');
    var qux = new Obj('qux');

    // Connect the nodes baz => bar => foo => qux => bar.
    baz.linkTo(bar);
    bar.linkTo(foo);
    foo.linkTo(qux);
    qux.linkTo(bar);

    expect(qux.isLinkedTo(baz)).toBe(false);
    expect(baz.isLinkedTo(foo)).toBe(true);
    expect(baz.isLinkedTo(bar)).toBe(true);
    expect(baz.isLinkedTo(qux)).toBe(true);
    expect(baz.isLinkedTo(baz)).toBe(false);
  });

});