var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    var found = false;
    this._storage.get(index).forEach(function(pair) {
      if (pair[0] === k) {
        pair[1] = v;
        found = true;
      }
    });
    if (!found) {
      this._storage.get(index).push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value;
  this._storage.get(index).forEach(function(pair) {
    if (pair[0] === k) {
      value = pair[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).forEach(function(pair, i, collection) {
    if (pair[0] === k) {
      delete collection[i];
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


