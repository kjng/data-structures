var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
  } else {
    var found = false;
    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        found = true;
        break;
      }
    }
    if (!found) {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i ++) {
    var tuple = bucket[i];
    if (tuple && tuple[0] === k) {
      return tuple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i ++) {
    var tuple = bucket[i];
    if (tuple !== undefined && tuple[0] === k) {
      delete bucket[i];
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
