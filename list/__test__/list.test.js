'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List(0,{});
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List(0,{});
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });
  it('pop works', ()=> {
    let stuff = new List(3, '');
    stuff.pop();
    expect(stuff.length).toEqual(2);
  });
  it('shift works', ()=> {
    let stuff = new List(3, '');
    stuff.shift();
    expect(stuff.length).toEqual(2);
  });
  it('unshift works', ()=> {
    let stuff = new List(0,{});
    stuff.unshift('a');
    stuff.unshift('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual('b');
  });
  it('splice works', ()=> {
    let stuff = new List(0,{});
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.splice(1,1);
    expect(stuff.length).toEqual(3);
    expect(Object.values(stuff.data)[1]).toEqual('c');
  });
  it('slice works', ()=> {
    let stuff = new List(0,{});
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.slice(1,3);
    expect(stuff.length).toEqual(2);
    expect(stuff.slice(1,3)).toEqual(['b','c']);
  });

});
