let counterVar = 0;
function tickUp() {
    counterVar++;
    document.getElementById("counter").textContent = counterVar;
}

function tickDown () {
    counterVar--;
    document.getElementById("counter").textContent = counterVar;
}

function runForLoop() {
    let forLoop = document.getElementById("forLoopResult");
    for (let i = 0; i < counterVar; i++) {
        forLoop.textContent += i + " ";
    }
}

function showOddNumbers() {
    let oddNums = document.getElementById("oddNumberResult");
    for (let i = 1; i <= counterVar; i=i+2) {
        oddNums.textContent += i + " ";
    }
}

function addMultiplesToArray() {
    let addMultiArray = [];
    let index = 0;
    let start = counterVar - (counterVar % 5);

    for (let i = start; i >= 5; i=i-5) {
        addMultiArray[index] = i;
        index++;
    }

    console.log(addMultiArray);
}

function printCarObject() {
    const carObject = {
        carType: document.getElementById("carType").value,
        carMpg: document.getElementById("carMPG").value,
        carColor: document.getElementById("carColor").value
    };

    console.log(carObject);
}

function loadCar(carNum) {
    let selectedCar = {};

    if (carNum == 1) {
        selectedCar = carObject1;
    }
    else if (carNum == 2) {
        selectedCar = carObject2;
    }
    else if (carNum == 3) {
        selectedCar = carObject3;
    }

    if (selectedCar) {
        document.getElementById("carType").value = selectedCar.cType;
        document.getElementById("carMPG").value = selectedCar.cMPG;
        document.getElementById("carColor").value = selectedCar.cColor;
    }

}

function changeColor(colorNum) {
    let colorParagraph = document.getElementById("styleParagraph");
    if (colorNum == 1) colorParagraph.style.color = "red";
    else if (colorNum == 2) colorParagraph.style.color = "green";
    else if (colorNum == 3) colorParagraph.style.color = "blue";
}