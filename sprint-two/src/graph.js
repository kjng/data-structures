// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var obj = {
    edges: {}
  };
  this.storage[node] = obj;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.storage[node] !== undefined) ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // for every key in edges
  for (var key in this.storage[node].edges) {
    delete this.storage[key].edges[node];
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.storage[fromNode].edges[toNode]) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges[toNode] = this.storage[toNode];
  this.storage[toNode].edges[fromNode] = this.storage[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
contains: O(1)
removeNode: O(1) if node has no edges, O(n) if node has edges;
hasEdge: O(1)
addEdge: O(1)
removeEdge: O(1)
forEachNode: O(n)
*/
