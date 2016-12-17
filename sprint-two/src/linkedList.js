var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.counter = 0;

  list.addToTail = function(value) {
    // create new instance of node under var new node
    var newNode = Node(value);

    // if head is null, set head to node in list
    if (list.head === null) {
      list.head = newNode;
    }

    if (list.tail) {
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
    // if head has next
    if (list.head.next) {
      // assign next to head
      list.head = list.head.next;
    } else {
      list.head = null;
    }
    return removedValue;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else if (node.next) {
      return list.contains(target, node.next);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
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

