// Получаем ссылки на input1 и input2
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

// Получаем ссылки на кнопки сложения, вычитания, умножения, деления и кнопку для получения результата
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const umnojBtn = document.getElementById('umnoj');
const drobBtn = document.getElementById('drob');
const resultBtn = document.getElementById('submit');

// Получаем ссылку на элемент, в который будет выводиться результат
const resultElement = document.getElementById('result');

// Объявляем переменную для хранения выбранной математической операции
let action = '';

// Устанавливаем обработчики событий для кнопок, чтобы при клике на кнопку операция сохранялась в переменной action
plusBtn.onclick = () => action = '+';
minusBtn.onclick = () => action = '-';
umnojBtn.onclick = () => action = '*';
drobBtn.onclick = () => action = '/';


let NumWithAction = (inp1, inp2, actionSmbol) =>{
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    // Создаем функцию для выполнения выбранной математической операции над двумя числами

    if (actionSmbol == '+'){
        return num1 + num2;
    } else if (actionSmbol == '-') {
        return num1 - num2;
    } else if (actionSmbol == '*') {
        return num1 * num2;
    } else if (actionSmbol == '/') {
        return num1 / num2;
    }
}

// Возвращаем результат в зависимости от выбранной операции
let printResult = (res) => {
    if (res < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = res;
}

// Создаем функцию для вывода результата в заданный элемент с учетом его значения
// Устанавливаем обработчик события для кнопки "submit", который вызывает функцию для расчета и вывода результата
resultBtn.onclick = () => {
    const result = NumWithAction(input1, input2, action)
    printResult(result)
}

