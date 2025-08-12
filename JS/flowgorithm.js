function main() {
    var x, y;

    window.alert("Enter first number: ");
    x = Number(window.prompt('Enter a value for x'));
    window.alert("Enter second number: ");
    y = Number(window.prompt('Enter a value for y'));
    if (x > y) {
        window.alert("N1 is bigger");
    } else {
        window.alert("N1 is smaller");
    }
}


- - -
/* Its the same... */

function main() {
    var a, b, c;

    window.alert("Number 1: ");
    a = Number(window.prompt('Enter a value for a'));
    window.alert("Number 2: ");
    b = Number(window.prompt('Enter a value for b'));
    if (a > b) {
        window.alert(a);
    } else {
        window.alert(b);
    }
    while (a == 0) {
    }
}

- - -
/* Output 10 numbers */
function main() {
    var n;

    for (n = 1; n <= 10; n++) {
        window.alert(n);
    }
}

- - -
function main() {
    let a, b;
    
    window.alert
