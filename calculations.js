export function add(x, y) {return x + y;}

export function subtract(x, y) {return x - y;}

export function multiply(x, y) {return x * y;}

export function divide(x, y) {
    if (x === 0 || y === 0) {
        return 'ERROR: division by 0'; 
    } else {
        return x / y;
    }
}

export function modulo(x, y) {    
    if (x === 0 || y === 0) {
        return 'ERROR: division by 0'; 
    } else {
        return x % y;
    }
}

export function intDivide(x, y) {
    if (x === 0 || y === 0) {
        return 'ERROR: division by 0'; 
    } else {
        return Math.floor(Number(x / y).toFixed(0));
    }
}

export function exponent(x, y) {return x ** y;}

export function pythagFindH(x, y) {
    return (x * x) + (y * y);
}

export function pythagFindC(x, y) {
    return Number(Math.sqrt(pythagFindH(x, y)).toFixed(2));
}