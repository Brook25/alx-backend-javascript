export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return map.forEach((v, k) => { if (v === 1) { map.set(k, 100); } });
  }
  throw new Error('Cannot process');
}
