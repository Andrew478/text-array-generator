// 23.07.26

// Генератор массива из текста и цифр
// На основе блок-схемы в Unidraw
// Берёт данные из data.js



function generateText(textString) {
    let textArray = makeArrayOutOfString(textString);
    textArray = shuffleArray(textArray);
    textArray = takeRandomPartOfArray(textArray);
    
}



function makeArrayOutOfString(textString) {
    console.log(`Изначальный текст: ${textString}`);

    // убираем верхний регистр
    textString = textString.toLowerCase();
    console.log(`\nТекст без верхнего регистра: ${textString}`);

    // убираем ненужные символы
    textString = textString.replaceAll('.',''); // убрали точки
    textString = textString.replaceAll(',','');
    textString = textString.replaceAll('[','');
    textString = textString.replaceAll(']','');
    textString = textString.replaceAll('—','');
    console.log(`\nПосле убирания всех лишних символов получаем результат: ${textString}`);

    // ToDo: Нужно убрать двойные пробелы!

    // Убираем двойные пробелы: мой простой метод в лоб: строка из двух пробелов заменяется на 1.
    textString = textString.replaceAll('  ', ' ');
    console.log(`\nУбрали двойные пробелы, результат: ${textString}`);


    // обрезаем пробелы по краям текста (на всякий случай всегда надо делать)
    textString = textString.trim();

    // Разбиваем строку на массив, используя разделителем пробел
    let textArray = textString.split(' ');
    console.log(`Результат разбиения строки на массив. Длина массива: ${textArray.length}, состав: ${textArray}`);
    return textArray;
}

function shuffleArray(arr) {
    // Теперь перемешаем массив
    // Я нашёл статью на тему. Оказалось встроенного метода нет. В найденном я пока не всё понимаю
    // поэтому просто копипастнул пока его сюда.
    // https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let shuffledArray = arr; // При каждом обновлении консоли оно перемешивается по новой, кек
    
    console.log(`\nРезультат перемешивания массива слов: ${shuffledArray}`);
    return shuffledArray;
}

function takeRandomPartOfArray(arr) {
    arr = arr.filter(value => {
        return Math.random() < 0.75;
    });
    console.log(`Взяли только часть из массива с вероятностью 75%. Получившийся объём: ${arr.length} слов. Результат: ${arr}`);
    return arr;
}


