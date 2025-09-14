function funFact() {
    const funtext = document.getElementById('funText')
    const wayToCreeperpig = document.getElementById('creeperpig')
    if (funtext.style.display === 'none') {
        funtext.style.display = 'block'
        wayToCreeperpig.style.display = 'block';
    } else {
        funtext.style.display ='none'
        wayToCreeperpig.style.display = 'none';
    }
}

const langs = {
    en: {
        "parentHader": "Welcome to Minecraft",
        "Hader": "Your adventure awaits in a blocky, pixelated world!",
        "1": "About Minecraft",
        "textMinekraft1": "Minecraft is a sandbox video game developed by Mojang Studios, first released in 2011. Players explore a blocky, procedurally generated 3D world, gathering resources, building structures, and surviving against monsters." +'',
        "2": "Key Features",
        "textMinekraft2": "<strong>Creative Mode:</strong> Build anything with unlimited resources.",
        "textMinekraft3": "<strong>Survival Mode:</strong> Gather resources, craft items, and fend off enemies.",
        "textMinekraft4": "<strong>Multiplayer:</strong> Play with friends on servers or local networks.",
        "textMinekraft5": "<strong>Modding:</strong> Customize the game with community-created mods.",
        '3': "Fun Fact",
        'Show': "Show Fun Fact",
        "funText": "Did you know? The Creeper was created by accident due to a coding error when trying to design a pig!"
    },
    rus: {
        "parentHader": 'Добро пожаловать в Minecraft!',
        "Hader": "Вас ждет приключение в блочном, пиксельном мире! О Minecraft",
        "1": "О Minecraft",
        "textMinekraft1": "Minecraft - это видеоигра-песочница, разработанная Mojang Studios и впервые выпущенная в 2011 году. Игроки исследуют блочный процедурно сгенерированный 3D-мир, собирая ресурсы, возводя сооружения и выживая в борьбе с монстрами.",
        "2": "ключевые функции",
        "textMinekraft2": "<strong>Творческий режим:</strong>Создавайте что угодно, используя неограниченные ресурсы.",
        "textMinekraft3": "<strong>Режим выживания:</strong>собирайте ресурсы, создавайте предметы и отбивайтесь от врагов.",
        "textMinekraft4": "<strong>Мультиплеер:</strong> Играйте с друзьями на серверах или в локальных сетях.",
        "textMinekraft5": "<strong>Моддинг:</strong> Настраивайте игру с помощью модов, созданных сообществом.",
        '3': "Интересный факт",
        'Show': " показать интересный факт",
        "funText": "Вы знали? Крипер был создан случайно из-за ошибки в кодировании при попытке создать свинью!"
    },
    pl: {
        "parentHader": 'Witamy w Minecraft',
        "Hader": "Twoja przygoda czeka w blokowym, pikselowym świecie!O Minecraft",
        "1": "О Minecraft",
        "textMinekraft1": "Minecraft to sandboxowa gra wideo stworzona przez Mojang Studios, wydana po raz pierwszy w 2011 roku. Gracze eksplorują kanciasty, proceduralnie generowany świat 3D, zbierając zasoby, wznosząc konstrukcje i walcząc z potworami.",
        "2": "Najważniejsze cechy",
        "textMinekraft2": "<strong>Tryb kreatywny: </strong>Buduj, co chcesz, mając nieograniczone zasoby.",
        "textMinekraft3": "<strong>Tryb przetrwania: </strong>Zbieraj zasoby, wytwarzaj przedmioty i odpieraj wrogów.",
        "textMinekraft4": "<strong>Tryb wieloosobowy: </strong>Graj ze znajomymi na serwerach lub w sieciach lokalnych.",
        "textMinekraft5": "<strong>Modyfikacje: </strong>Dostosuj grę za pomocą modów tworzonych przez społeczność.",
        '3': "Ciekawostka",
        'Show': " pokazacz ciekawostka",
        "funText": "Czy wiesz, że Creeper powstał przez przypadek z powodu błędu w kodzie podczas projektowania świni!"
    }
}

function reLange() {
    const lang = document.getElementById('languageSelect').value;
document.getElementById('parentHader').textContent = langs[lang]['parentHader'];
document.getElementById('Hader').textContent = langs[lang]['Hader'];
document.getElementById('1').textContent = langs[lang]['1'];
document.getElementById('textMinekraft1').textContent = langs[lang]['textMinekraft1'];
document.getElementById('2').textContent = langs[lang]['2'];
document.getElementById('textMinekraft2').innerHTML = langs[lang]['textMinekraft2'];
document.getElementById('textMinekraft3').innerHTML = langs[lang]['textMinekraft3'];
document.getElementById('textMinekraft4').innerHTML = langs[lang]['textMinekraft4'];
document.getElementById('textMinekraft5').innerHTML = langs[lang]['textMinekraft5'];
document.getElementById('3').textContent = langs[lang]['3'];
document.getElementById('Show').textContent = langs[lang]['Show'];
document.getElementById('funText').textContent = langs[lang]['funText'];
document.documentElement.lang = lang;
}