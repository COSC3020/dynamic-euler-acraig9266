function e(n) {
    if (n === 1) { return 1; }
    else if (n === 2) { return 2; }
    else {
        return e2(n, 1, factorial(2));
    }
}

function e2(n, count, total, fact = 1) {
    if (count == n) { return total; }
    else {
        fact = fact * (count + 1);
        return e2(n, count + 1, total + (1.0 / fact), fact);
    }
}

function factorial(n) {
    return factorialAccume(n, 1);
}

function factorialAccume(a, acc) {
    if (a == 0) {
        return acc;
    }
    else {
        return factorialAccume(a - 1, a * acc);
    }
}
