let number = 2;

// state function
function square() {
    return number * number;
}

number = square();

// stateless function
const square = n => n * n;