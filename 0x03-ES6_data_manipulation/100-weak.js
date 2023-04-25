const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else { const x = weakMap.get(endpoint); weakMap.set(endpoint, x + 1); }

  if (weakMap.get(endpoint) === 5) { throw new Error('Endpoint load is high'); }
}

export { weakMap, queryAPI };
