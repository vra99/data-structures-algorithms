/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    const map = {};
    const queue = [node];
    while (queue.length) {
        const curr = queue.shift();
        if (!map[curr.val]) {
            map[curr.val] = new Node(curr.val);
        }
        for (let i = 0; i < curr.neighbors.length; i++) {
            if (!map[curr.neighbors[i].val]) {
                map[curr.neighbors[i].val] = new Node(curr.neighbors[i].val);
                queue.push(curr.neighbors[i]);
            }
            map[curr.val].neighbors.push(map[curr.neighbors[i].val]);
        }
    }
    return map[node.val];
};