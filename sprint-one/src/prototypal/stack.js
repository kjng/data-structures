var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.amount = 0;
  return obj;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.amount;
};

stackMethods.push = function(value) {
  this.storage[this.amount] = value;
  this.amount++;
};

stackMethods.pop = function() {
  if (this.amount > 0) {
    this.amount--;
    var deletedValue = this.storage[this.amount];
    delete this.storage[this.amount];
    return deletedValue;
  }
};
