// Инициализация Telegram Mini App
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.expand(); // Растянуть на весь экран
    tg.ready();  // Сообщить Telegram, что приложение готово
}
// Данные для всех 10 карт
const cardsData = {
    1: {
        title: "Карта дня: НОВОЕ НАЧАЛО",
        description: "Сегодня идеальный день, чтобы начать что-то важное. Вселенная на вашей стороне. Доверьтесь своей интуиции и сделайте первый шаг к мечте.",
        smallImage: "images/card-1.jpg",
        bigImage: "images/card-1-big.jpg"
    },
    2: {
        title: "Карта дня: ГАРМОНИЯ",
        description: "День принесет внутренний покой и равновесие. Найдите время для медитации или прогулки на природе. Прислушайтесь к своему сердцу.",
        smallImage: "images/card-2.jpg",
        bigImage: "images/card-2-big.jpg"
    },
    3: {
        title: "Карта дня: УДАЧА",
        description: "Звезды благоволят вам! Удача будет следовать за вами по пятам. Не упустите шанс, который преподнесет судьба.",
        smallImage: "images/card-3.jpg",
        bigImage: "images/card-3-big.jpg"
    },
    4: {
        title: "Карта дня: ИСПЫТАНИЯ",
        description: "Сегодня могут возникнуть трудности, но они временны. Проявите терпение и мудрость. Препятствия сделают вас сильнее.",
        smallImage: "images/card-4.jpg",
        bigImage: "images/card-4-big.jpg"
    },
    5: {
        title: "Карта дня: ЛЮБОВЬ",
        description: "День наполнен любовью и романтикой. Откройте свое сердце для новых чувств или укрепите существующие отношения.",
        smallImage: "images/card-5.jpg",
        bigImage: "images/card-5-big.jpg"
    },
    6: {
        title: "Карта дня: ТВОРЧЕСТВО",
        description: "Ваша креативность сегодня на пике. Займитесь любимым делом, рисуйте, пишите, творите. Идеи будут литься рекой.",
        smallImage: "images/card-6.jpg",
        bigImage: "images/card-6-big.jpg"
    },
    7: {
        title: "Карта дня: ДЕНЬГИ",
        description: "Финансовый успех не за горами. Обратите внимание на новые возможности заработка. Будьте щедры, и деньги вернутся к вам сторицей.",
        smallImage: "images/card-7.jpg",
        bigImage: "images/card-7-big.jpg"
    },
    8: {
        title: "Карта дня: ПУТЕШЕСТВИЕ",
        description: "Возможно спонтанное путешествие или приятная поездка. Новые места подарят вдохновение и яркие впечатления.",
        smallImage: "images/card-8.jpg",
        bigImage: "images/card-8-big.jpg"
    },
    9: {
        title: "Карта дня: ЗДОРОВЬЕ",
        description: "Обратите внимание на свое самочувствие. Займитесь спортом, правильно питайтесь. Ваше тело скажет вам спасибо.",
        smallImage: "images/card-9.jpg",
        bigImage: "images/card-9-big.jpg"
    },
    10: {
        title: "Карта дня: МУДРОСТЬ",
        description: "Сегодня вы получите важный урок или совет. Будьте внимательны к знакам судьбы и советам старших.",
        smallImage: "images/card-10.jpg",
        bigImage: "images/card-10-big.jpg"
    }
};

// Создание карточек на странице
function createCards() {
    const container = document.getElementById('cardsContainer');
    
    for (let i = 1; i <= 10; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('onclick', 'showCardInfo(' + i + ')');
        
        const img = document.createElement('img');
        img.src = cardsData[i].smallImage;
        img.alt = cardsData[i].title;
        
        // Если картинка не загрузится, покажем заглушку
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/200x300?text=Карта+' + i;
        };
        
        card.appendChild(img);
        container.appendChild(card);
    }
}

// Функция открытия модального окна
function showCardInfo(cardNumber) {
    console.log('Кликнули по карте:', cardNumber); // Проверка в консоли
    
    const modal = document.getElementById('cardModal');
    const card = cardsData[cardNumber];
    
    if (card) {
        const modalImage = document.getElementById('modalImage');
        modalImage.src = card.bigImage;
        modalImage.alt = card.title;
        
        // Если большая картинка не загрузится
        modalImage.onerror = function() {
            this.src = 'https://via.placeholder.com/400x600?text=' + card.title;
        };
        
        document.getElementById('modalTitle').textContent = card.title;
        document.getElementById('modalDescription').textContent = card.description;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        console.error('Карта с номером ' + cardNumber + ' не найдена');
        alert('Ошибка: карта не найдена');
    }
}

// Функция закрытия модального окна
function closeModal() {
    document.getElementById('cardModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Закрытие по клику вне модального окна
window.onclick = function(event) {
    const modal = document.getElementById('cardModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Закрытие по клавише Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Запускаем создание карточек после загрузки страницы
window.onload = function() {
    createCards();
    console.log('Страница загружена, карточки созданы');
};