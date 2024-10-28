function e(n) {
    if (n === 1) { return 1; }
    else if (n === 2) { return 2; }
    else {
        return e2(n, 1, 2);
    }
}

function eHelp(n, count, total, fact = 1) {
    if (count == n) { return total; }
    else {
        fact = fact * (count + 1);
        return eHelp(n, count + 1, total + (1.0 / fact), fact);
    }
}
