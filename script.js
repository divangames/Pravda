// script.js
// Переменные для хранения состояния игры
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let attemptsLeft = 3;
let timerInterval;
let startTime;
let elapsedTime = 0;
let selectedCategory = '';

// Константы для награды и штрафа
const pointsForCorrectAnswer = 10;
const pointsForIncorrectAnswer = -5;

// Функция для загрузки рейтинга из localStorage
function loadRating() {
    const ratingData = localStorage.getItem('rating');
    const rating = ratingData ? JSON.parse(ratingData) : [];
    const ratingTableBody = document.querySelector('#rating-table tbody');
    ratingTableBody.innerHTML = '';
    rating.sort((a, b) => b.score - a.score || a.time - b.time).forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.name}</td>
            <td>${entry.category}</td>
            <td>${entry.score}</td>
            <td>${entry.time.toFixed(2)}</td>
        `;
        ratingTableBody.appendChild(row);
    });
}

// Функция для сохранения результата в localStorage
function saveResult() {
    const playerName = document.getElementById('player-name').value.trim();
    if (!playerName) {
        alert('Введите ваше имя!');
        return;
    }

    const result = {
        name: playerName,
        category: selectedCategory,
        score: score,
        time: elapsedTime
    };

    const ratingData = localStorage.getItem('rating');
    const rating = ratingData ? JSON.parse(ratingData) : [];
    rating.push(result);
    localStorage.setItem('rating', JSON.stringify(rating));

    alert('Результат сохранен!');
    loadRating();
    restartGame();
}

// Функция для сохранения результата победы
function saveVictoryResult() {
    const playerName = document.getElementById('victory-player-name').value.trim();
    if (!playerName) {
        alert('Введите ваше имя!');
        return;
    }

    const result = {
        name: playerName,
        category: selectedCategory,
        score: score,
        time: elapsedTime
    };

    const ratingData = localStorage.getItem('rating');
    const rating = ratingData ? JSON.parse(ratingData) : [];
    rating.push(result);
    localStorage.setItem('rating', JSON.stringify(rating));

    alert('Результат сохранен!');
    loadRating();
    hideVictoryModal();
    restartGame();
}

// Функция для запуска таймера
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
        elapsedTime = (Date.now() - startTime) / 1000;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = `Время: ${elapsedTime.toFixed(2)}с`;
    }, 100);
}

// Функция для остановки таймера
function stopTimer() {
    clearInterval(timerInterval);
}

// Функция для перемешивания массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Функция для начала игры
function startGame() {
    const categorySelect = document.getElementById('category');
    selectedCategory = categorySelect.value;

    if (selectedCategory) {
        selectedQuestions = categories[selectedCategory].slice(0, 10);
        shuffle(selectedQuestions);
        document.getElementById('category-selection').style.display = 'none';
        document.getElementById('game').style.display = 'block';
        document.getElementById('rating').style.display = 'none'; // Скрываем таблицу рекордов
        currentQuestionIndex = 0;
        score = 0;
        attemptsLeft = 3;
        displayQuestion();
        updateScore();
        updateAttempts();
        startTimer();
    } else {
        alert("Выберите категорию!");
    }
}

// Функция для отображения текущего вопроса
function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Вопрос: ${selectedQuestions[currentQuestionIndex].question}`;
}

// Функция для обновления отображения попыток
function updateAttempts() {
    const attemptsElement = document.getElementById('attempts');
    attemptsElement.textContent = `Попыток: ${attemptsLeft}`;
}

// Функция для обработки ответа пользователя
function answer(userAnswer) {
    const correctAnswer = selectedQuestions[currentQuestionIndex].answer;
    const resultElement = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        score += pointsForCorrectAnswer; // Добавление очков за правильный ответ
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion();
            resultElement.textContent = '';
        } else {
            resultElement.textContent = 'Вы выиграли!';
            stopTimer();
            playVictorySound();
            showVictoryModal();
        }
    } else {
        score += pointsForIncorrectAnswer; // Уменьшение очков за неправильный ответ
        attemptsLeft--;
        if (attemptsLeft > 0) {
            resultElement.textContent = 'Неправильно, попробуйте еще';
        } else {
            resultElement.textContent = 'Проиграл';
            stopTimer();
            document.getElementById('game').innerHTML += '<br><button class="button" onclick="showNameInput()">Сохранить результат</button>';
        }
    }
    updateScore(); // Обновление отображения очков
    updateAttempts(); // Обновление отображения попыток

    // Проверка на исчерпание попыток
    if (attemptsLeft <= 0 && currentQuestionIndex < selectedQuestions.length) {
        resultElement.textContent = 'Проиграл';
        stopTimer();
        document.getElementById('game').innerHTML += '<br><button class="button" onclick="showNameInput()">Сохранить результат</button>';
    }
}

// Функция для отображения поля ввода имени после проигрыша
function showNameInput() {
    document.getElementById('game').style.display = 'none';
    document.getElementById('name-input').style.display = 'block';
}

// Функция для отображения модального окна победы
function showVictoryModal() {
    document.getElementById('victory-modal').style.display = 'flex';
}

// Функция для скрытия модального окна победы
function hideVictoryModal() {
    document.getElementById('victory-modal').style.display = 'none';
}

// Функция для воспроизведения звука победы
function playVictorySound() {
    const victorySound = document.getElementById('victory-sound');
    victorySound.currentTime = 0;
    victorySound.play();
}

// Функция для обновления отображения очков
function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Очки: ${score}`;
}

// Функция для перезапуска игры
function restartGame() {
    document.getElementById('category-selection').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    document.getElementById('name-input').style.display = 'none';
    document.getElementById('victory-modal').style.display = 'none';
    document.getElementById('instruction-modal').style.display = 'none';
    document.getElementById('rating').style.display = 'block'; // Показываем таблицу рекордов
    document.getElementById('game').lastChild.remove();
    document.getElementById('player-name').value = '';
    document.getElementById('victory-player-name').value = '';
    document.getElementById('menu').style.display = 'none'; // Скрываем меню
}

// Функция для смены темы
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.checked = newTheme === 'dark';
}

// Функция для открытия/закрытия меню
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Функция для отображения модального окна руководства
function showInstructionModal() {
    document.getElementById('instruction-modal').style.display = 'flex';
}

// Функция для скрытия модального окна руководства
function hideInstructionModal() {
    document.getElementById('instruction-modal').style.display = 'none';
}

// Инициализация игры
loadRating();

// Загрузка сохраненной темы
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
    const themeSwitch = document.getElementById('theme-switch');
    themeSwitch.checked = savedTheme === 'dark';
}