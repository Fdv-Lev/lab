//const buttons = document.querySelectorAll('.btn');

//buttons.forEach(button => {
    //button.addEventListener('click', () => {
        // Генерируем случайный цвет в формате HEX
        //const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        //button.style.backgroundColor = randomColor;
   // });
//});
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Генерируем случайный цвет в формате HEX
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

        // Изменяем цвет и форму кнопки
        button.style.backgroundColor = randomColor;
        button.style.transform = 'scale(0.9)'; // Уменьшаем размер кнопки при клике
        button.style.transform = 'scale(0.9) rotate(360deg)';
        button.style.transition = 'all 0.3s ease-in-out';
    });
});