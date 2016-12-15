var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.amount = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.amount;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.amount] = value;
  this.amount++;
};

Queue.prototype.dequeue = function() {
  if (this.amount > 0) {
    var deletedValue = this.storage['0'];
    delete this.storage['0'];

    var counter = 0;
    for (var key in this.storage) {
      this.storage[counter] = this.storage[key];
      counter++;
    }

    this.amount--;
    return deletedValue;
  }
};
