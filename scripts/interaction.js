// Define a data structure for the nodes in the net
class Node {
    constructor(type, data = {}) {
      this.type = type;
      this.data = data;
      this.outputs = [];
    }
  }
  
  // Define a function to create links between nodes
  function link(a, b) {
    a.outputs.push(b);
    b.outputs.push(a);
  }
  
  // Define the reduction rules for the net
  function reduce(node) {
    switch (node.type) {
      case "S":
        // If a node has three outputs of type K, replace with a new node of type K
        if (node.outputs.filter((n) => n.type === "K").length === 3) {
          const k = new Node("K");
          node.outputs.forEach((n) => link(k, n));
          return k;
        }
        break;
      case "K":
        // If a node has only one output, follow the output
        if (node.outputs.length === 1) {
          return reduce(node.outputs[0]);
        }
        break;
      case "I":
        // If a node has only one output of type K, replace with a new node of type K
        if (
          node.outputs.length === 1 &&
          node.outputs[0].type === "K"
        ) {
          const k = new Node("K");
          link(k, node.outputs[0].outputs[0]);
          return k;
        }
        break;
    }
    return node;
  }
  
  // Define a function to run the reduction algorithm
  function reduceNet(node) {
    let changed = false;
    // Iterate over all nodes in the net and reduce them
    node.outputs.forEach((n, i) => {
      const result = reduce(n);
      if (result !== n) {
        node.outputs[i] = result;
        changed = true;
      }
    });
    // Recursively reduce all output nodes
    node.outputs.forEach((n) => reduceNet(n));
    // If any nodes were changed, run the algorithm again on the current node
    if (changed) {
      reduceNet(node);
    }
  }
  
  // Example usage
  const i1 = new Node("I");
  const i2 = new Node("I");
  const s1 = new Node("S");
  const s2 = new Node("S");
  const s3 = new Node("S");
  const k1 = new Node("K");
  const k2 = new Node("K");
  
  link(i1, s1);
  link(i2, s1);
  link(s1, s2);
  link(s2, s3);
  link(s3, k1);
  link(k1, k2);
  
  reduceNet(s1);
  
  console.log(k2);
  