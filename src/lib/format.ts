const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0
});

export function formatCurrency(value: number): string {
  return formatter.format(value);
}
