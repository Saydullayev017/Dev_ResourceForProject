// Получаем доступ к элементам DOM
const inputElement = document.getElementById("title"); // Получаем доступ к элементу ввода заголовка заметки
const createBtn = document.getElementById("create"); // Получаем доступ к кнопке создания заметки
const listElement = document.getElementById("list"); // Получаем доступ к элементу списка заметок

// Инициализируем список заметок
const notes = [
    {
        title: "первая пара матиматика", // Заголовок первой заметки
        completed: false, // Флаг, обозначающий завершена ли заметка (в данном случае - не завершена)
    },
    {
        title: "вторая пара программирования", // Заголовок второй заметки
        completed: true, // Флаг, обозначающий завершена ли заметка (в данном случае - завершена)
    }
]

// Функция для отрисовки списка заметок
function render() {
    listElement.innerHTML = ''; // Очищаем содержимое списка заметок
    if(notes.length === 0) {
        listElement.innerHTML = '<p>Нет заметки : (</p>'; // Если список заметок пуст, выводим сообщение об отсутствии заметок
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i)); // Добавляем разметку для каждой заметки в список
    }
}
render(); // Вызываем функцию отрисовки списка заметок

// Обработчик события для кнопки "Создать"
createBtn.onclick = () => {
    if (inputElement.value.length === 0) {
        return; // Если поле ввода пустое, завершаем обработку события
    }

    const newNote = {
        title: inputElement.value, // Используем значение из поля ввода в качестве заголовка новой заметки
        completed: false, // Новая заметка по умолчанию не завершена
    }

    notes.push(newNote); // Добавляем новую заметку в список заметок
    render(); // Обновляем отображение списка заметок

    inputElement.value = ''; // Очищаем поле ввода
}

// Обработчик события для элементов списка заметок
listElement.onclick = (event) => {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index); // Получаем индекс заметки из пользовательского интерфейса
        const type = event.target.dataset.type; // Получаем тип события (нажатие на кнопку "toggle" или "remove")

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed; // Меняем состояние завершенности заметки
        } else if (type === 'remove') {
            notes.splice(index, 1); // Удаляем заметку из списка
        }
        render(); // Обновляем отображение списка заметок
    }
}

// Функция для получения шаблона заметки
// span - underline ->  Отображаем заголовок заметки с возможным стилем (подчеркнутый, если заметка завершена)
// span Кнопка для отметки заметки как завершенной
// span Кнопка для удаления заметки
function getNoteTemplate(note, index) {
    return `
        <li>
            <span class="${note.completed ? 'underline' : ''}">${note.title}</span> 
            <span>
                <button data-index="${index}" data-type="toggle">&check;</button>
                <button data-index="${index}" data-type="remove">&times;</button> 
            </span>
        </li>
    `;
}
