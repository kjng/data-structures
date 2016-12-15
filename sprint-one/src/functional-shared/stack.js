var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    numberOfItems: 0,
    storage: {}
  };
  Object.assign(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.numberOfItems] = value;
    this.numberOfItems++;
  },
  pop: function() {
    var deletedValue = this.storage[this.numberOfItems - 1];
    delete this.storage[this.numberOfItems - 1];
    this.numberOfItems--;
    return deletedValue;
  },
  size: function() {
    if (this.numberOfItems < 0) {
      return 0;
    }
    return this.numberOfItems;
  }
};

// Object.defineProperty(target, newProperty, {value: somethinghere})
