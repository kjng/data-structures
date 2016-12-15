var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //create property with size as key, value as value
    storage[size] = value;
    size ++;
  };

  someInstance.dequeue = function() {
    // remove property from storage
    if (size > 0) {
      var deletedValue = storage['0'];
      delete storage['0'];

      var counter = 0;
      for (var key in storage) {
        storage[counter] = storage[key];
        counter ++;
      }

      size --;
      return deletedValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
