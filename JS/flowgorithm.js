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
