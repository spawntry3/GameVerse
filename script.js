let currentEra = 'retro';
let currentMood = 'retro';
let cart = [];
let currentUser = null;
let musicPlaying = false;
let musicAttempted = false;

const bgMusic = document.getElementById('bgMusic');
const musicControl = document.getElementById('musicControl');


bgMusic.volume = 0.3;


function tryPlayMusic() {
    if (!musicAttempted) {
        musicAttempted = true;
        bgMusic.play().then(() => {
            musicPlaying = true;
            musicControl.classList.remove('paused');
            const hint = document.getElementById('musicHint');
            if (hint) hint.remove();
        }).catch(e => {
            console.log('Музыка будет запущена при следующем взаимодействии');
            musicPlaying = false;
            musicControl.classList.add('paused');
        });
    }
}


const startEvents = ['click', 'touchstart', 'keydown', 'mousemove'];
startEvents.forEach(event => {
    document.addEventListener(event, function autoPlay() {
        tryPlayMusic();
        startEvents.forEach(e => {
            document.removeEventListener(e, autoPlay);
        });
    }, { once: true });
});


musicControl.addEventListener('click', function(e) {
    e.stopPropagation();
    
    if (musicPlaying) {
        bgMusic.pause();
        musicControl.classList.add('paused');
        musicPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicControl.classList.remove('paused');
            musicPlaying = true;
        }).catch(e => {
            alert('Не удалось воспроизвести музыку. Попробуйте обновить страницу.');
        });
    }
});

const eras = {
    retro: {
        bgPrimary: '#FFF5E6',
        bgSecondary: '#FFE0B2',
        textPrimary: '#2C1810',
        textSecondary: '#6B4423',
        accent: '#FF6B35',
        highlight: '#F7931E',
        shadow: 'rgba(255, 107, 53, 0.3)',
        icon: '🕹️',
        label: 'Ретро',
        name: 'Ретро Эра',
        gen: '8-16 бит'
    },
    classic: {
        bgPrimary: '#E3F2FD',
        bgSecondary: '#90CAF9',
        textPrimary: '#0D47A1',
        textSecondary: '#1565C0',
        accent: '#2196F3',
        highlight: '#03A9F4',
        shadow: 'rgba(33, 150, 243, 0.3)',
        icon: '🎮',
        label: 'Классика',
        name: 'Классическая Эра',
        gen: '32-64 бита'
    },
    modern: {
        bgPrimary: '#F3E5F5',
        bgSecondary: '#CE93D8',
        textPrimary: '#4A148C',
        textSecondary: '#6A1B9A',
        accent: '#9C27B0',
        highlight: '#BA68C8',
        shadow: 'rgba(156, 39, 176, 0.3)',
        icon: '🎮',
        label: 'Модерн',
        name: 'Современная Эра',
        gen: 'HD Gaming'
    },
    cyber: {
        bgPrimary: '#0F2027',
        bgSecondary: '#203A43',
        textPrimary: '#00D9FF',
        textSecondary: '#00B4D8',
        accent: '#FF006E',
        highlight: '#8338EC',
        shadow: 'rgba(255, 0, 110, 0.4)',
        icon: '🌐',
        label: 'Киберпанк',
        name: 'Киберпанк Эра',
        gen: 'Next-Gen'
    }
};

const consoles = [
    {
        id: 1,
        name: 'Nintendo NES',
        image: './assets/Nintendo_NES.png',
        price: 45000,
        year: 1983,
        generation: '3-е поколение',
        maker: 'Nintendo',
        description: 'Легендарная 8-битная консоль, которая возродила индустрию видеоигр после краха 1983 года. Подарила миру такие франшизы как Super Mario Bros, The Legend of Zelda и Metroid.',
        era: 'retro'
    },
    {
        id: 2,
        name: 'Sega Genesis',
        image: './assets/Sega_Genesis.jpg',
        price: 52000,
        year: 1988,
        generation: '4-е поколение',
        maker: 'Sega',
        description: 'Мощная 16-битная консоль, известная своей библиотекой игр и культовым Sonic the Hedgehog. Главный конкурент Super Nintendo.',
        era: 'retro'
    },
    {
        id: 3,
        name: 'Super Nintendo',
        image: './assets/Super_Nintendo.jpg',
        price: 58000,
        year: 1990,
        generation: '4-е поколение',
        maker: 'Nintendo',
        description: '16-битный шедевр от Nintendo с революционной графикой и звуком. Подарил миру Super Mario World, Donkey Kong Country и Final Fantasy VI.',
        era: 'retro'
    },
    {
        id: 4,
        name: 'PlayStation 1',
        image: './assets/PlayStation_1.jpg',
        price: 65000,
        year: 1994,
        generation: '5-е поколение',
        maker: 'Sony',
        description: 'Революционная консоль от Sony, которая использовала CD-диски вместо картриджей. Представила миру 3D-игры и такие франшизы как Final Fantasy VII и Metal Gear Solid.',
        era: 'classic'
    },
    {
        id: 5,
        name: 'Nintendo 64',
        image: './assets/Nintendo_64.png',
        price: 68000,
        year: 1996,
        generation: '5-е поколение',
        maker: 'Nintendo',
        description: '64-битная консоль с революционным аналоговым стиком. Представила миру Super Mario 64 и The Legend of Zelda: Ocarina of Time.',
        era: 'classic'
    },
    {
        id: 6,
        name: 'Sega Dreamcast',
        image: './assets/Sega_Dreamcast.jpg',
        price: 62000,
        year: 1998,
        generation: '6-е поколение',
        maker: 'Sega',
        description: 'Последняя консоль от Sega, которая опередила своё время. Первая консоль со встроенным модемом для онлайн-игр.',
        era: 'classic'
    },
    {
        id: 7,
        name: 'PlayStation 2',
        image: './assets/PlayStation_2.jpg',
        price: 75000,
        year: 2000,
        generation: '6-е поколение',
        maker: 'Sony',
        description: 'Самая продаваемая консоль в истории с более чем 155 миллионами проданных единиц. Также работала как DVD-плеер.',
        era: 'classic'
    },
    {
        id: 8,
        name: 'Xbox 360',
        image: './assets/Xbox_360.jpg',
        price: 85000,
        year: 2005,
        generation: '7-е поколение',
        maker: 'Microsoft',
        description: 'Популярная консоль с мощной онлайн-системой Xbox Live. Принесла миру Halo 3 и Gears of War.',
        era: 'modern'
    },
    {
        id: 9,
        name: 'PlayStation 3',
        image: './assets/PlayStation_3.jpg',
        price: 82000,
        year: 2006,
        generation: '7-е поколение',
        maker: 'Sony',
        description: 'Мощная консоль с процессором Cell и встроенным Blu-ray плеером. Представила миру The Last of Us и Uncharted.',
        era: 'modern'
    },
    {
        id: 10,
        name: 'Nintendo Wii',
        image: './assets/Nintendo_Wii.jpg',
        price: 78000,
        year: 2006,
        generation: '7-е поколение',
        maker: 'Nintendo',
        description: 'Революционная консоль с контроллером движения, которая сделала игры доступными для всей семьи.',
        era: 'modern'
    },
    {
        id: 11,
        name: 'PlayStation 4',
        image: './assets/PlayStation_4.jpg',
        price: 125000,
        year: 2013,
        generation: '8-е поколение',
        maker: 'Sony',
        description: 'Мощная консоль с великолепными эксклюзивами: God of War, Spider-Man, Horizon Zero Dawn.',
        era: 'modern'
    },
    {
        id: 12,
        name: 'Xbox One',
        image: './assets/Xbox_One.jpg',
        price: 120000,
        year: 2013,
        generation: '8-е поколение',
        maker: 'Microsoft',
        description: 'Универсальный развлекательный центр с Xbox Game Pass и обратной совместимостью.',
        era: 'modern'
    },
    {
        id: 13,
        name: 'Nintendo Switch',
        image: './assets/Nintendo_Switch.jpg',
        price: 135000,
        year: 2017,
        generation: '8-е поколение',
        maker: 'Nintendo',
        description: 'Гибридная консоль, которую можно использовать как дома, так и в дороге. Принесла миру Zelda: Breath of the Wild.',
        era: 'modern'
    },
    {
        id: 14,
        name: 'PlayStation 5',
        image: './assets/play_station5.jpg',
        price: 245000,
        year: 2020,
        generation: '9-е поколение',
        maker: 'Sony',
        description: 'Консоль нового поколения с SSD, трассировкой лучей и поддержкой 4K 120fps. Революционный контроллер DualSense.',
        era: 'cyber'
    },
    {
        id: 15,
        name: 'Xbox Series X',
        image: './assets/Xbox_Serie_ X.jpg',
        price: 240000,
        year: 2020,
        generation: '9-е поколение',
        maker: 'Microsoft',
        description: 'Самая мощная консоль с 12 терафлопсами производительности. Quick Resume и Game Pass Ultimate.',
        era: 'cyber'
    }
];

function init() {
    renderCatalog();
    updateCartBadge();
    applyEra(currentEra);
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'cart') {
        renderCart();
    }
    

    document.getElementById('navLinks').classList.remove('active');
}

function renderCatalog() {
    const grid = document.getElementById('consolesGrid');
    grid.innerHTML = consoles.map(console => `
        <div class="console-card" onclick="showConsoleDetail(${console.id})">
            <img src="${console.image}" alt="${console.name}" class="console-card-image" loading="lazy">
            <h3>${console.name}</h3>
            <p style="color: var(--text-secondary); margin: 1rem 0; font-family: var(--font-main);">${console.maker}</p>
            <p style="color: var(--text-secondary); font-family: var(--font-main);">${console.generation}</p>
            <div class="price">${console.price.toLocaleString()}₸</div>
        </div>
    `).join('');
}

function showConsoleDetail(id) {
    const console = consoles.find(c => c.id === id);
    if (!console) return;

    document.getElementById('detailImage').src = console.image;
    document.getElementById('detailImage').alt = console.name;
    document.getElementById('detailName').textContent = console.name;
    document.getElementById('detailDesc').textContent = console.description;
    document.getElementById('detailYear').textContent = console.year;
    document.getElementById('detailGen').textContent = console.generation;
    document.getElementById('detailMaker').textContent = console.maker;
    document.getElementById('detailPrice').textContent = `${console.price.toLocaleString()}₸`;

    const addBtn = document.getElementById('addToCartBtn');
    addBtn.onclick = () => addToCart(console.id);

    showPage('console-page');
}

function addToCart(consoleId) {
    const console = consoles.find(c => c.id === consoleId);
    const existing = cart.find(item => item.id === consoleId);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...console, quantity: 1 });
    }

    updateCartBadge();
    
    const btn = document.getElementById('addToCartBtn');
    btn.textContent = '✓ Добавлено!';
    btn.style.background = 'linear-gradient(135deg, #4CAF50, #81C784)';
    
    setTimeout(() => {
        btn.textContent = 'Добавить в корзину';
        btn.style.background = '';
    }, 1500);
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (total > 0) {
        badge.innerHTML = `<span class="cart-count">${total}</span>`;
    } else {
        badge.innerHTML = '';
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div style="text-align: center; padding: 4rem; background: var(--card-bg); border-radius: var(--card-shape); backdrop-filter: blur(10px);">
                <div style="font-size: 5rem; margin-bottom: 1rem;">🛒</div>
                <h3 style="font-size: 2rem; margin-bottom: 1rem; font-family: var(--font-heading);">Корзина пуста</h3>
                <p style="color: var(--text-secondary); margin-bottom: 2rem; font-family: var(--font-main);">Добавьте консоли из каталога</p>
                <button class="cta-button" onclick="showPage('catalog')">В каталог</button>
            </div>
        `;
        cartTotal.innerHTML = '';
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartItems.innerHTML = cart.map(item => `
        <div class="console-card" style="display: grid; grid-template-columns: auto auto 1fr auto auto; gap: 2rem; align-items: center;">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div>
                <h3 style="margin-bottom: 0.5rem;">${item.name}</h3>
                <p style="color: var(--text-secondary); font-family: var(--font-main);">${item.maker}</p>
            </div>
            <div></div>
            <div style="display: flex; gap: 1rem; align-items: center;">
                <button class="control-btn" onclick="changeQuantity(${item.id}, -1)" style="padding: 0.5rem 1rem;">-</button>
                <span style="font-size: 1.5rem; font-weight: 700; min-width: 3rem; text-align: center; font-family: var(--font-heading);">${item.quantity}</span>
                <button class="control-btn" onclick="changeQuantity(${item.id}, 1)" style="padding: 0.5rem 1rem;">+</button>
            </div>
            <div style="text-align: right;">
                <div class="price">${(item.price * item.quantity).toLocaleString()}₸</div>
                <button class="control-btn" onclick="removeFromCart(${item.id})" style="margin-top: 0.5rem; background: #f44336;">Удалить</button>
            </div>
        </div>
    `).join('');

    cartTotal.innerHTML = `
        <div class="buy-section" style="display: inline-block;">
            <h3 style="margin-bottom: 1rem; text-transform: var(--text-transform); font-family: var(--font-heading);">Итого</h3>
            <div class="price-tag">${total.toLocaleString()}₸</div>
        </div>
    `;
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            renderCart();
            updateCartBadge();
        }
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
    updateCartBadge();
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function changeEra() {
    const eraKeys = Object.keys(eras);
    const currentIndex = eraKeys.indexOf(currentEra);
    const nextIndex = (currentIndex + 1) % eraKeys.length;
    currentEra = eraKeys[nextIndex];
    applyEra(currentEra);
}

function applyEra(era) {
    const theme = eras[era];
    const root = document.documentElement;

    root.style.setProperty('--bg-primary', theme.bgPrimary);
    root.style.setProperty('--bg-secondary', theme.bgSecondary);
    root.style.setProperty('--text-primary', theme.textPrimary);
    root.style.setProperty('--text-secondary', theme.textSecondary);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--highlight', theme.highlight);
    root.style.setProperty('--shadow', theme.shadow);

    document.getElementById('heroIcon').textContent = theme.icon;
    document.getElementById('heroName').textContent = theme.name;
    document.getElementById('heroGen').textContent = theme.gen;
    document.getElementById('eraIndicator').textContent = `${theme.icon} ${theme.label}`;


    document.querySelectorAll('.bg-animation').forEach(bg => {
        bg.classList.remove('active');
    });


    if (era === 'retro') {
        document.getElementById('bgRetro').classList.add('active');
    } else if (era === 'classic') {
        document.getElementById('bgClassic').classList.add('active');
    } else if (era === 'modern') {
        document.getElementById('bgModern').classList.add('active');
    } else if (era === 'cyber') {
        document.getElementById('bgCyber').classList.add('active');
    }
}

function applyMood(mood) {
    const root = document.documentElement;
    currentMood = mood;

    if (mood === 'retro') {

        root.style.setProperty('--mood-shadow', '0 4px 20px var(--shadow)');
        root.style.setProperty('--mood-border-radius', '0px');
        root.style.setProperty('--button-shape', '0px');
        root.style.setProperty('--card-shape', '0px');
        root.style.setProperty('--mood-filter', 'brightness(1) saturate(1.2) contrast(1.1)');
        root.style.setProperty('--mood-glow', 'drop-shadow(2px 2px 0px var(--accent))');
        root.style.setProperty('--mood-transform', 'scale(1.05)');
        root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.8)');
        root.style.setProperty('--card-border', '4px solid var(--accent)');
        root.style.setProperty('--font-main', '"Press Start 2P", cursive');
        root.style.setProperty('--font-heading', '"Press Start 2P", cursive');
        root.style.setProperty('--text-transform', 'uppercase');
        root.style.setProperty('--letter-spacing', '2px');
    } else if (mood === 'modern') {

        root.style.setProperty('--mood-shadow', '0 10px 40px var(--shadow)');
        root.style.setProperty('--mood-border-radius', '25px');
        root.style.setProperty('--button-shape', '25px');
        root.style.setProperty('--card-shape', '25px');
        root.style.setProperty('--mood-filter', 'brightness(1.1) saturate(1.2)');
        root.style.setProperty('--mood-glow', 'drop-shadow(0 0 20px var(--accent))');
        root.style.setProperty('--mood-transform', 'scale(1.1)');
        root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.9)');
        root.style.setProperty('--card-border', '1px solid rgba(255, 255, 255, 0.5)');
        root.style.setProperty('--font-main', '"Roboto", sans-serif');
        root.style.setProperty('--font-heading', '"Roboto", sans-serif');
        root.style.setProperty('--text-transform', 'none');
        root.style.setProperty('--letter-spacing', 'normal');
    } else if (mood === 'cyber') {

        root.style.setProperty('--mood-shadow', '0 0 30px var(--shadow), 0 0 60px var(--shadow)');
        root.style.setProperty('--mood-border-radius', '5px');
        root.style.setProperty('--button-shape', '0px');
        root.style.setProperty('--card-shape', '5px');
        root.style.setProperty('--mood-filter', 'brightness(1.2) saturate(1.5) contrast(1.2)');
        root.style.setProperty('--mood-glow', 'drop-shadow(0 0 10px var(--accent)) drop-shadow(0 0 20px var(--highlight))');
        root.style.setProperty('--mood-transform', 'scale(1.15)');
        root.style.setProperty('--card-bg', 'rgba(15, 32, 39, 0.95)');
        root.style.setProperty('--card-border', '2px solid var(--accent)');
        root.style.setProperty('--font-main', '"Orbitron", sans-serif');
        root.style.setProperty('--font-heading', '"Orbitron", sans-serif');
        root.style.setProperty('--text-transform', 'uppercase');
        root.style.setProperty('--letter-spacing', '3px');
    }

    closeModal('moodModal');
}

function showLoginModal() {
    closeModal('registerModal');
    openModal('loginModal');
}

function showRegisterModal() {
    closeModal('loginModal');
    openModal('registerModal');
}

document.getElementById('moodBtn').addEventListener('click', () => openModal('moodModal'));
document.getElementById('eraBtn').addEventListener('click', changeEra);
document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
document.getElementById('eraIndicator').addEventListener('click', changeEra);

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

document.querySelectorAll('.mood-option').forEach(option => {
    option.addEventListener('click', function() {
        applyMood(this.dataset.mood);
    });
});

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    currentUser = { email };
    document.getElementById('loginBtn').textContent = email.split('@')[0];
    closeModal('loginModal');
    
    alert('Добро пожаловать!');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelectorAll('input')[0].value;
    const email = this.querySelectorAll('input')[1].value;
    
    currentUser = { name, email };
    document.getElementById('loginBtn').textContent = name;
    closeModal('registerModal');
    
    alert('Регистрация успешна!');
});

document.getElementById('checkoutBtn').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    if (!currentUser) {
        alert('Пожалуйста, войдите в аккаунт');
        openModal('loginModal');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('paymentTotal').textContent = `${total.toLocaleString()}₸`;
    openModal('paymentModal');
});

document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    closeModal('paymentModal');
    
    setTimeout(() => {
        alert(`✓ Оплата прошла успешно!\n\nСпасибо за покупку, ${currentUser.name || currentUser.email}!\nВаш заказ будет доставлен в течение 3-5 дней.`);
        cart = [];
        updateCartBadge();
        showPage('home');
    }, 300);
});

document.querySelector('#paymentForm input[type="text"]').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
});

init();