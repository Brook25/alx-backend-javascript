export default function cleanSet(set, startString) {
  // there's a bug in one of the main files
  let str = '';
  if (set instanceof Set && typeof startString === 'string' && startString !== '') {
    const x = startString.length;
    set.forEach((elem) => { if (elem.startsWith(startString) && elem.substr(x) !== '') { str += `-${elem.substr(x)}`; } });
    str = str.slice(1);
  }
  return str;
}
