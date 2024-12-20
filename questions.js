// questions.js
const categories = {
    "Фильмы": [
        { question: "Фильм 'Параситы' был назван лучшим фильмом на Канне в 2019 году?", answer: true },
        { question: "Актёр Леонардо ДиКаприо выиграл Оскар за лучшего актера за фильм 'Зеленую книгу'?", answer: true },
        { question: "Фильм 'Терминатор 2: Судный день' был снят Диркем Буллем?", answer: false },
        { question: "Актриса Марлон Брандо выиграла Оскар за лучшую актрису?", answer: false },
        { question: "Фильм 'Пираты Карибского моря: Проклятие Черной Жемчужины' был снят Джеймсом Кэмероном?", answer: false },
        { question: "Актёр Том Хэнкс выиграл Оскар за лучшего актера за фильм 'Форрест Гамп'?", answer: true },
        { question: "Фильм 'Шоу Трумана' был снят Стивеном Спилбергом?", answer: true },
        { question: "Актриса Марго Робби выиграла Оскар за лучшую актрису за фильм 'Марсианин'?", answer: false },
        { question: "Фильм 'Начало' был снят Джеймсом Кэмероном?", answer: false },
        { question: "Актёр Роберт Дауни мложший выиграл Оскар за лучшего актера за фильм 'Хоббит: Братство кольян'?", answer: false },
        { question: "Фильм 'Побег из Шоушенка' был снят Стивеном Спилбергом?", answer: false },
        { question: "Актриса Кэтрин Зета-琼с выиграла Оскар за лучшую актрису за фильм 'Ночь, в которой меня не было'?", answer: true },
        { question: "Фильм 'Интерстеллар' был снят Кристофром Ноланом?", answer: true },
        { question: "Актёр Джонни Депп выиграл Оскар за лучшего актера за фильм 'Пираты Карибского моря: Проклятие Черной Жемчужины'?", answer: false },
        { question: "Фильм 'Тёмный рыцарь' был снят Стивеном Спилбергом?", answer: false },
        { question: "Актриса Голливудская Академия выдала Оскар за лучшую актрису актрисе Скарлетт Йоханссон за фильм 'Персонала'?", answer: false },
        { question: "Фильм 'Зеленая книга' был снят Диркем Буллем?", answer: false },
        { question: "Актёр Чарли Чаплин выиграл Оскар за лучшего актера?", answer: false },
        { question: "Фильм 'Иван Васильевич меняет профессию' был снят Сергеем Есениным?", answer: true },
        { question: "Актриса Марлон Брандо выиграла Оскар за лучшую актрису за фильм 'Наивный и Безобидный'? ", answer: false }
    ],
    "Музыка": [
        { question: "Майкл Джексон написал песню 'Bohemian Rhapsody'?", answer: false },
        { question: "Альбом 'Abbey Road' был выпущен группой Queen?", answer: true },
        { question: "Песня 'Imagine' была написана Джоном Ленноном?", answer: true },
        { question: "Группа The Beatles вышла из Лондона?", answer: false },
        { question: "Песня 'Billie Jean' была написана Майклом Джексоном?", answer: true },
        { question: "Альбом 'Thriller' был выпущен группой Queen?", answer: false },
        { question: "Песня 'Hotel California' была написана группой The Eagles?", answer: true },
        { question: "Группа Pink Floyd вышла из Нью-Йорка?", answer: false },
        { question: "Песня 'Stairway to Heaven' была написана группой The Doors?", answer: false },
        { question: "Альбом 'Back in Black' был выпущен группой Queen?", answer: false },
        { question: "Песня 'Like a Prayer' была написана Мадонной?", answer: true },
        { question: "Группа The Rolling Stones вышла из Лондона?", answer: true },
        { question: "Песня 'Sweet Child O' Mine' была написана группой Guns N' Roses?", answer: true },
        { question: "Альбом 'Nevermind' был выпущен группой Nirvana?", answer: true },
        { question: "Песня 'Smells Like Teen Spirit' была написана группой The Beatles?", answer: false },
        { question: "Группа The Who вышла из Нью-Йорка?", answer: false },
        { question: "Песня 'Bohemian Rhapsody' была написана группой Queen?", answer: true },
        { question: "Альбом 'The Dark Side of the Moon' был выпущен группой Pink Floyd?", answer: true },
        { question: "Песня 'Hey Jude' была написана Джоном Ленноном?", answer: false },
        { question: "Группа AC/DC вышла из Лондона?", answer: false }
    ],
    "Видеоигры": [
        { question: "Игра 'The Legend of Zelda: Breath of the Wild' была разработана Square Enix?", answer: false },
        { question: "Игра 'Super Mario Bros.' была разработана Nintendo?", answer: true },
        { question: "Игра 'Call of Duty: Modern Warfare' была разработана Ubisoft?", answer: false },
        { question: "Игра 'Red Dead Redemption 2' была разработана Rockstar Games?", answer: true },
        { question: "Игра 'Grand Theft Auto V' была разработана Ubisoft?", answer: false },
        { question: "Игра 'Minecraft' была разработана Mojang Studios?", answer: true },
        { question: "Игра 'The Witcher 3: Wild Hunt' была разработана Bethesda Game Studios?", answer: false },
        { question: "Игра 'Fortnite' была разработана Epic Games?", answer: true },
        { question: "Игра 'Cyberpunk 2077' была разработана CD Projekt Red?", answer: true },
        { question: "Игра 'Resident Evil 7: Biohazard' была разработана Capcom?", answer: true },
        { question: "Игра 'Horizon Zero Dawn' была разработана Guerrilla Games?", answer: true },
        { question: "Игра 'Fallout 4' была разработана Bethesda Game Studios?", answer: true },
        { question: "Игра 'Detroit: Become Human' была разработана Quantic Dream?", answer: true },
        { question: "Игра 'Overwatch' была разработана Blizzard Entertainment?", answer: true },
        { question: "Игра 'Uncharted 4: A Thief's End' была разработана Naughty Dog?", answer: true },
        { question: "Игра 'BioShock Infinite' была разработана Irrational Games?", answer: true },
        { question: "Игра 'God of War (2018)' была разработана Sony Interactive Entertainment?", answer: false },
        { question: "Игра 'The Last of Us Part II' была разработана Naughty Dog?", answer: true },
        { question: "Игра 'Spider-Man' была разработана Insomniac Games?", answer: true },
        { question: "Игра 'Mass Effect 3' была разработана Bioware?", answer: true }
    ]
};