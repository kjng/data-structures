var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.amount = 0;
  obj.storage = {};
  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.amount;
};

queueMethods.enqueue = function(value) {
  this.storage[this.amount] = value;
  this.amount ++;
};

queueMethods.dequeue = function() {
  if (this.amount > 0) {
    var deletedValue = this.storage['0'];
    delete this.storage['0'];

    var counter = 0;
    for (var key in this.storage) {
      this.storage[counter] = this.storage[key];
      counter ++;
    }

    this.amount --;
    return deletedValue;
  }
};