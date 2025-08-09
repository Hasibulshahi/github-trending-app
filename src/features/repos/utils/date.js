export function tenDaysAgoDate() {
  const d = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);
  return d.toISOString().split('T')[0];
}
