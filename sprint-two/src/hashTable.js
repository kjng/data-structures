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
    for (var i = 0; i < this._storage.get(index).length; i ++) {
      var pair = this._storage.get(index)[i];
      if (pair[0] === k) {
        pair[1] = v;
        found = true;
        break;
      }
    }
    if (!found) {
      this._storage.get(index).push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var value;
  for (var i = 0; i < this._storage.get(index).length; i ++) {
    var pair = this._storage.get(index)[i];
    if (pair !== undefined && pair[0] === k) {
      value = pair[1];
      break;
    }
  }
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i ++) {
    var pair = this._storage.get(index)[i];
    if (pair !== undefined && pair[0] === k) {
      delete this._storage.get(index)[i];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
insert: O(1)
retrieve: O(1)
remove: O(1)
*/
