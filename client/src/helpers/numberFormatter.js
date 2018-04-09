export function NumberFormatter(number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "decimal"
  }).format(number);
}
