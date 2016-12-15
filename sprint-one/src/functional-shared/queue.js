var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    numberOfItems: 0,
    counter: 0,
    keys: [],
    storage: {}
  };
  Object.assign(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.numberOfItems;
};

queueMethods.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.keys.push('' + this.counter);
  this.numberOfItems ++;
  this.counter ++;
};

queueMethods.dequeue = function() {
  if (this.numberOfItems !== 0) {
    var deletedKey = this.keys.shift();
    var deletedItem = this.storage[deletedKey];
    delete this.storage[deletedKey];
    this.numberOfItems --;
    return deletedItem;
  }
};