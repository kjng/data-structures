var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, [[k, v]]);
    this._counter++;
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
      this._counter++;
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
      this._counter--;
    }
  }
};

HashTable.prototype.doubleSize = function(newLimit) {
  var newTable = LimitedArray(newLimit);
  var oldTable = this._storage;
  this._storage = newTable;
  oldTable.each(function(bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i ++) {
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  });
  this._limit = newLimit;
};
// doubleSize takes a new limit
  // create new limited array with new limit
  // save reference to limited array
  // iterate old limited array
    // insert key value pairs into new hash table
  // set limit to new limit
  // set storage to new limited array
//

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
insert: O(1)
retrieve: O(1)
remove: O(1)
*/
