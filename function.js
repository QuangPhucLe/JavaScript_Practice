// export function createArrayFromArgs(, value2, value3)    {
//     return  [, value2, value3];
// }

export function isString(value1){
    return typeof value1 === "string";
}
export function isNumber(value2){
    return typeof value2 === "number" && !isNaN(value2);
}
export function isBigInt(value3){
    return typeof value1 === "bigint";
}
export function isBoolean(value4){
    return typeof value1 === "boolean";
}
export function isNull(value5){
    return value5 === null;
}
export function isUndefined(value6){
    return typeof value6 === "undefined";
}
export function isSymbol(value7){
    return typeof value7 === "symbol";
}
export function isObject(value8){
    return typeof value8 === "object" &&
    value8 !== null &&
    !Array.isArray(value8);
    // !value8 instanceof Array
}
export function isArray(value9){
    return Array.isArray(value9)
}
export function isFunction(value10){
    return typeof value10 === "function"
}