# Pravda
Игра правда или нет. Кастомная полностью. Написанная только на html, js, css

# Комментарии для кастомизации: <br>
1. Добавление новых категорий и вопросов: <br>
  • Чтобы добавить новую категорию, добавьте новый ключ в объект categories в файле questions.js. <br>
<br>
Например:<br>
  javascript<br>
  "Новая Категория": [<br>
      { question: "Новый вопрос 1?", answer: true },<br>
      { question: "Новый вопрос 2?", answer: false },<br>
      // Добавьте еще вопросы...<br>
  ]<br>
<br>
  • Чтобы добавить новые вопросы в существующую категорию, просто добавьте их в соответствующий массив.<br>
<br>
2. Количество попыток:<br>
• Измените значение переменной attemptsLeft в файле script.js для изменения общего количества попыток на всю партию.<br>
<br>
3. Количество вопросов:<br>
• Измените количество вопросов, выбираемых для игры, изменив значение в методе slice в функции startGame в файле script.js. Например, selectedQuestions = categories[selectedCategory].slice(0, 5) выберет 5 случайных вопросов.<br>
<br>
4. Очки за правильный/неправильный ответ:<br>
• Измените значения переменных pointsForCorrectAnswer и pointsForIncorrectAnswer в файле script.js для изменения количества очков, получаемых за правильный и неправильный ответ соответственно.<br>
<br>
5. Стилизация:<br>
• Измените CSS в файле styles.css для изменения внешнего вида игры.<br>
• Вы можете изменить цветовые переменные в :root и [data-theme="dark"] для настройки светлой и темной темы.<br>
<br>
6. Функциональность кнопок:<br>
• Вы можете изменить поведение кнопок, добавив дополнительные действия в функциях answer и restartGame в файле script.js.<br>
<br>
7. Аудиофайл фанфары:<br>
• Замените fanfare.mp3 на ваш собственный аудиофайл фанфары, если хотите использовать другой звук.<br>
<br>
8. Подвал:<br>
• Подвал с информацией о разработчике добавлен внизу страницы. Вы можете изменить текст и ссылку по необходимости.<br>
<br>
9. Шапка и меню бургер:<br>
• Добавлена шапка с названием сайта и меню бургером.<br>
• В меню бургер добавлена функция для смены темы с использованием свитча.<br>
<br>
Этот код теперь включает шапку с названием сайта и меню бургером, где можно сменить тему с использованием свитча. Когда игрок выигрывает, появляется модальное окно с анимацией и звуком фанфары, где игрок может ввести свое имя для сохранения результата. Кнопка "Сменить тему" с главного экрана удалена.
