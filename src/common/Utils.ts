export function isNumeric(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export const convertStringToEnum = function <T>(enumObj: any, value: string): T {
    return enumObj[Object.keys(enumObj).filter(k => enumObj[k] === value)[0]];
}

const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789";
export function getRandomString(length?: number): string {
    if(length === undefined) {
        length = 8;
    }
    return [...Array(length)].map(_ => CHARS[~~(Math.random()*CHARS.length)]).join("");
}
