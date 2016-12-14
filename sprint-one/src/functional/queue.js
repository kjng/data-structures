var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //create property with size as key, value as value
    storage[key] = value;
    key++;
    size++;
  };

  someInstance.dequeue = function() {
    // remove property from storage
    if (size > 0) {
      var deletedValue = storage[Object.keys(storage)[0]];
      //if (deletedValue === 'b') {
      //  debugger;
      //}
      delete storage[Object.keys(storage)[0]];
      size--;
      return deletedValue;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
