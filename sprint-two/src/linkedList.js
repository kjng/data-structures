var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

  list.addToTail = function(value) {
    // create new instance of node under var new node
    var newNode = Node(value);

    // if head is null, set head to node in list
    if (!list.head) {
      list.head = newNode;
    }

    if (list.tail) {
      newNode.prev = list.tail;
      list.tail.next = newNode;
    }

    // assign node to list
    list[list.counter] = newNode;
    list.counter ++;

    // assign tail to node in list
    list.tail = newNode;
  };

  list.removeHead = function() {
    var removedValue = list.head.value;
    if (list.head.next) {
      // assign next to head
      list.head = list.head.next;
      list.head.prev = null;
    } else {
      list.head = null;
    }
    return removedValue;
  };

  list.contains = function(target) {
    var found = list.search(target);
    return found ? true : false;
  };

  list.addToHead = function(value) {
    var newNode = Node(value);
    var oldHead = list.head;
    newNode.next = oldHead;
    list.head = newNode;
    oldHead.prev = newNode;
  };

  list.removeTail = function() {
    var deletedNodeValue = list.tail.value;
    var previousNode = list.tail.prev;
    previousNode.next = null;
    list.tail = previousNode;
    return deletedNodeValue;
  };

  list.search = function(target, node) {
    node = node || list.head;
    if (node.value === target) {
      return node;
    } else if (node.next) {
      return list.search(target, node.next);
    }
    return null;
  };

  list.insert = function(targetNodeValue, newValue) {
    var newNode = Node(newValue);
    var nextNode;
    var foundNode = list.search(targetNodeValue);
    if (foundNode) {
      if (foundNode.next) {
        nextNode = foundNode.next;
      }
      foundNode.next = newNode;
      newNode.next = nextNode;
      newNode.prev = foundNode;
      nextNode.prev = newNode;
    } else {
      return 'Target node not found';
    }
  };
  // insert takes a targetNodeValue and newValue
    // create newNode with value
    // look through list to find targetNodeValue
      // search takes target, node
        // set node to be node or list.head
        // if nodeValue is target
          // save node
          // break
        // else if nodeNext
          // return listSearch(target, node.next)
        // save node's next node
    // set targetNode's next value to newNode
    // set newNode's next value to be targetNode's next old value
    // set newNode's prev to be targetNode
    // set targetNode's old next's prev to be newNode

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addToTail: O(n)
// removeHead: O(1)
// contains: O(n)

// traverse = node, cb {
//   cb(node);
//   if (!cb(node) && node.next) {
//     traverse(node.next, cb);
//   }
// }
/*
add to tail:

function(node) {
  if (node.next === null) {
  node.next = newNode;
  return true;
  }
}
*/
// function(node) {if node.value === target return true, else traverse next}

