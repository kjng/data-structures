var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.amount = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.amount;
};

Stack.prototype.push = function(value) {
  this.storage[this.amount] = value;
  this.amount ++;
};

Stack.prototype.pop = function() {
  if (this.amount > 0) {
    var deletedValue = this.storage[this.amount - 1];
    delete this.storage[this.amount - 1];
    this.amount --;
    return deletedValue;
  }
};