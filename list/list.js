'use strict';

class List {

  constructor(length, data) {
    this.length = length;
    this.data = data;
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    delete this.data[this.length];
    this.length--;
  }
  
  shift(){
    delete this.data[0];
    this.length--;
  }

  unshift(item){
    this.data[0] = item;
    this.length++;
  }

  splice(idx, rm){
    let value = this.data;
    for(let i=0; i<Object.keys(value).length; i++){
      if(i === idx){
        for(let j=0; j<rm;j++){
          delete value[i];
          this.length --;
        }
      }
    }
    return Object.values(value);
  }

  slice(idx, rm){
    let value = this.data;
    var newValue = [];
    for(let i=0; i<Object.keys(value).length; i++){
      if(i === idx){
        for(let j=0; j<rm-1;j++){
          this.length --;
          newValue[j] = Object.values(value)[j+i];
        }
      }
    }
    value=newValue;
    return value;
  }




}

module.exports = List;
