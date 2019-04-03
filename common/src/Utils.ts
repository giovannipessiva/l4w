export function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}