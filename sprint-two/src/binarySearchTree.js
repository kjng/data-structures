var BinarySearchTree = function(value) {
  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;
  _.extend(obj, binarySearchTreeMethods);
  return obj;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value, node) {
  node = node || BinarySearchTree(value);

  if (value < this.value) {
    if (this.left === null) {
      this.left = node;
    } else {
      this.left.insert(value, node);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = node;
    } else {
      this.right.insert(value, node);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

binarySearchTreeMethods.depthFirstLog = function(cb, node) {
  node = node || this;

  cb(node.value);

  if (node.left) {
    node.left.depthFirstLog(cb, node.left);
  }
  if (node.right) {
    node.right.depthFirstLog(cb, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
insert: O(log n)
contains: O(log n)
depthFirstLog: O(n)
*/