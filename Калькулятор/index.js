// inputs
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

// buttons
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const umnojBtn = document.getElementById("umnoj");
const drobBtn = document.getElementById("drob");

const resultBtn = document.getElementById("submit");

// result place
const printResult = document.getElementById("result");

let action = "";

plusBtn.onclick = () => {
    (action = "+");
} 
minusBtn.onclick = () => {
    (action = "-");
}
umnojBtn.onclick = () => {
    (action = "*");
}
drobBtn.onclick = () => {
    (action = "/");
}

resultBtn.onclick = () => {
  if (action == "+") {
    let sum = Number(input1.value) + Number(input2.value);
    printResult.textContent = sum;

    if (sum > 0) {
      printResult.style.color = "green";
    } else {
      printResult.style.color = "red";
    }
  } else if (action == "-") {
    let sum = Number(input1.value) - Number(input2.value);
    printResult.textContent = sum;

    if (sum > 0) {
      printResult.style.color = "green";
    } else {
      printResult.style.color = "red";
    }
  } else if (action == "*") {
    let sum = Number(input1.value) * Number(input2.value);
    printResult.textContent = sum;

    if (sum > 0) {
      printResult.style.color = "green";
    } else {
      printResult.style.color = "red";
    }
  } else if (action == "/") {
    let sum = Number(input1.value) / Number(input2.value);
    printResult.textContent = sum;

    if (sum > 0) {
      printResult.style.color = "green";
    } else {
      printResult.style.color = "red";
    }
  }
};
