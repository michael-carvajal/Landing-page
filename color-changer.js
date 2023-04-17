window.onload = init;
function init() {
    const body = document.querySelector('body')
    const main = document.querySelector('main')
    const reset = document.querySelector('.reset')
    const hex = document.querySelector('.hex_val')
    const user_save = document.querySelector('.user_save')
    const saved_display = document.querySelector('.saved_display')
    reset.onclick = function () {
        console.log('clickeddd')
    };

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    let randomColor = getRandomColor()
    body.style.backgroundColor = randomColor;
    hex.innerHTML = randomColor;

    let saved = [];
    saved.push(randomColor)
    // Set the random color as the background-color of the div when the reset is clicked
    reset.addEventListener("click", function () {
        let randomColor = getRandomColor()
        body.style.backgroundColor = randomColor;
        hex.innerHTML = randomColor;
        // Save random color
        saved.push(randomColor);
    });

    user_save.addEventListener("click", function () {
        let saved_array = [];
        saved_array.push(saved[saved.length - 1])
        console.log(saved_array);

        function addSquare() {
            var newDiv = document.createElement("div");
            newDiv.style.height = "50px";
            newDiv.style.width = "50px";
            newDiv.style.backgroundColor = saved_array[0];
            newDiv.style.border = "2px solid black"
            // newDiv.style.margin = "10px"
            newDiv.dataset.color =saved_array[0]
            // Append the new div to the container element
            saved_display.appendChild(newDiv);
        }
        addSquare();

    })




}
