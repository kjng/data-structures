var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    numberOfItems: 0,
    storage: {}
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.numberOfItems;
};

queueMethods.enqueue = function(value) {
  this.storage[this.numberOfItems] = value;
  this.numberOfItems ++;
};

queueMethods.dequeue = function() {
  if (this.numberOfItems > 0) {
    var deletedItem = this.storage['0'];
    delete this.storage['0'];

    var counter = 0;
    for (var key in this.storage) {
      this.storage[counter] = this.storage[key];
      counter ++;
    }

    this.numberOfItems --;
    return deletedItem;
  }
};
