/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    function findMinDepth(node) {
      // BASE CASES
      if (!node) return 0; // no node, no length :(

      if (!node.left && !node.right) return 1; // Only one node? We are 1 deep!

      // We already know left OR right exists
      if (!node.left) return 1 + findMinDepth(node.right);
      if (!node.right) return 1 + findMinDepth(node.left);

      // NORMAL CASE
      return 1 + Math.min(findMinDepth(node.left), findMinDepth(node.right)); // Both left and right exist, we need to find the min of the two
    }

    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function findMaxDepth(node) {
      // copied this from findMin, but changed what I needed to! Super easy lol
      if (!node) return 0; // no node, no length :(

      if (!node.left && !node.right) return 1; // Only one node? We are 1 deep!

      // We already know left OR right exists
      if (!node.left) return 1 + findMaxDepth(node.right);
      if (!node.right) return 1 + findMaxDepth(node.left);

      return 1 + Math.max(findMaxDepth(node.left), findMaxDepth(node.right)); // Both left and right exist, we need to find the max of the two
    }

    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // I spent a good while on this one but could not figure it out! I used GPT on it but will review it with my mentor for further studying purposes.

    // Helper function to find the maximum sum along a path starting from a given node.
    function findMaxSumPath(node) {
      if (!node) return 0;

      // Calculate the maximum sum along the left and right paths.
      const leftMax = findMaxSumPath(node.left);
      const rightMax = findMaxSumPath(node.right);

      // Calculate the maximum sum for the path that includes the current node.
      const maxSumIncludingNode = Math.max(
        node.val,
        node.val + leftMax,
        node.val + rightMax
      );

      // Update the global maximum sum.
      maxSum = Math.max(
        maxSum,
        maxSumIncludingNode,
        node.val + leftMax + rightMax
      );

      // Return the maximum sum for the path starting at this node.
      return maxSumIncludingNode;
    }

    // Initialize a variable to keep track of the maximum sum.
    let maxSum = 0;

    // Call the helper function to calculate the maximum sum.
    findMaxSumPath(this.root);

    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    function findNextLarger(node) {
      if (!node) return;

      if (node.val > lowerBound) {
        if (!result || node.val < result) {
          result = node.val;
        }
      }

      if (node.val > lowerBound || node.right) {
        findNextLarger(node.left);
      }
      if (node.val <= lowerBound || node.left) {
        findNextLarger(node.right);
      }
    }

    findNextLarger(this.root);

    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
