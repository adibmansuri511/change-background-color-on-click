function changeColor() {

    let hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    // console.log(hexNumbers.length);

    let hexCode = '';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbers.length);
        console.log(randomIndex);
        hexCode = hexCode + hexNumbers[randomIndex];
        console.log(hexCode);
    }


    document.getElementById("hexCode").innerHTML = hexCode;
    document.body.style.backgroundColor = '#' + hexCode;
} 