function detectCycleWithPath(deps) {
  const idToName = new Map();
  const graph = new Map();

  // Step 1: Build graph and id-to-name map
  for (const [name, node] of Object.entries(deps)) {
    idToName.set(node.id, name);
    graph.set(node.id, node.dependsOn.map(dep => dep.id));
  }

  const visited = new Set();
  const stack = new Set();
  const path = [];

  function dfs(nodeId) {
    if (stack.has(nodeId)) {
      // Cycle found - build cycle path
      const cycleStartIndex = path.indexOf(nodeId);
      const cyclePath = path.slice(cycleStartIndex).map(id => idToName.get(id));
      cyclePath.push(idToName.get(nodeId)); 
      return cyclePath;
    }

    if (visited.has(nodeId)) return null;

    visited.add(nodeId);
    stack.add(nodeId);
    path.push(nodeId);

    for (const neighbor of graph.get(nodeId) || []) {
      const result = dfs(neighbor);
      if (result) return result; 
    }

    stack.delete(nodeId);
    path.pop();

    return null; 
  }

  // Try DFS from each node
  for (const nodeId of graph.keys()) {
    const cycle = dfs(nodeId);
    if (cycle) {
      return {
        hasCycle: true,
        cyclePath: cycle
      };
    }
  }

  return { hasCycle: false, cyclePath: [] };
}


const deps = {
  A: { id: 1, dependsOn: [ { id: 2 } ] },
  B: { id: 2, dependsOn: [ { id: 3 } ] },
  C: { id: 3, dependsOn: [ { id: 1 } ] }
};

const result = detectCycleWithPath(deps);
console.log(result.hasCycle);      
console.log(result.cyclePath);     
