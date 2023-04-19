export default function guardrail(mathfunction) {
  const queue = [];
  try {
    queue.push(mathfunction());
  } catch (err) {
    queue.push(String(err));
  }
  queue.push('Guardrail was processed');
  return queue;
}
