export function error(message, status) {
  return JSON.stringify({ status, message });
}

export function parseError(err) {
  return JSON.parse(err);
}
