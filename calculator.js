window.onload = function () {
    const nine = document.querySelector('.nine');
    const eight = document.querySelector('.eight');
    const seven = document.querySelector('.seven');
    const six = document.querySelector('.six');
    const five = document.querySelector('.five');
    const four = document.querySelector('.four');
    const three = document.querySelector('.three');
    const two = document.querySelector('.two');
    const one = document.querySelector('.one');
    const zero = document.querySelector('.zero');
    const screen = document.querySelector('.screen');
    const plus = document.querySelector('.plus')
    const minus = document.querySelector('.minus')
    const divide = document.querySelector('.divide')
    const mult = document.querySelector('.mult')
    const equal = document.querySelector('.equal')
    const clear = document.querySelector('.clear')

    const numbers = [zero, one, two, three, four, five, six, seven, eight, nine]
    const operators = [plus, minus, equal, mult, divide]
    let expression = [];

    numbers.forEach(element => {
        element.onclick = function () {
            screen.innerHTML += element.innerHTML;
            expression.push(element.innerHTML)
        }

    });
    operators.forEach(element => {
        element.onclick = function () {
            screen.innerHTML += element.innerHTML;
            expression.push(element.innerHTML)

        }
    });

    equal.onclick = function () {
        let value = eval(screen.innerHTML);
        screen.innerHTML = value;
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "1") {
            one.click();
        } else if (event.key === "2") {
            two.click();
        }
        else if (event.key === "3") {
            three.click();
        }
        else if (event.key === "4") {
            four.click();
        }
        else if (event.key === "5") {
            five.click();
        }
        else if (event.key === "6") {
            six.click();
        }
        else if (event.key === "7") {
            seven.click();
        }
        else if (event.key === "8") {
            eight.click();
        }
        else if (event.key === "9") {
            nine.click();
        }
        else if (event.key === "+") {
            plus.click();
        }
        else if (event.key === "-") {
            minus.click();
        }
        else if (event.key === "/") {
            divide.click();
        }
        else if (event.key === "*") {
            mult.click();
        }
        else if (event.key === "=" || event.key === "Enter") {
            equal.click();
        }
        else if (event.key === "0") {
            zero.click();
        }
        else if (event.key === "c") {
            clear.click();
        }
        else if (event.key === "Backspace") {
            screen.innerHTML = screen.innerHTML.slice(0, -1);
        }
        // ...and so on for the other number keys
    });


    clear.onclick = function () {
        screen.innerHTML = '';
    }





}
