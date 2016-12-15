var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.amount = 0;
  obj.createCounter = 0;
  obj.deleteCounter = 0;
  obj.firstElement = null;
  obj.storage = {};
  return obj;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.amount;
};

queueMethods.enqueue = function(value) {
  //if first element is empty, assign enqueue value to variable on obj
  if (this.firstElement === null) {
    this.firstElement = this.createCounter.toString();
  }
  this.storage[this.createCounter] = value;
  this.createCounter ++;
  this.amount ++;
};

queueMethods.dequeue = function() {
  if (this.amount > 0) {
    var deletedValue = this.storage[this.firstElement];
    delete this.storage[this.firstElement];
    this.firstElement = (this.deleteCounter + 1).toString();
    this.deleteCounter ++;
    this.amount --;
    return deletedValue;
  }
};