export function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
export const convertStringToEnum = function <T>(enumObj: any, value: string): T {
    return enumObj[Object.keys(enumObj).filter(k => enumObj[k] === value)[0]];
}