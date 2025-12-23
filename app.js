 // Data for the website
        const coursesData = [
            {
                id: 1,
                title: "Python для начинающих",
                description: "Основы программирования на Python с нуля. Создание первых проектов и подготовка к работе.",
                category: "programming",
                duration: "3 месяца",
                level: "Начальный",
                price: 8000,
                originalPrice: 10000,
                badge: "popular",
                icon: "fab fa-python"
            },
            {
                id: 2,
                title: "Веб-разработка (Frontend)",
                description: "HTML, CSS, JavaScript и React. Создание современных адаптивных веб-сайтов.",
                category: "programming",
                duration: "4 месяца",
                level: "Начальный",
                price: 12000,
                originalPrice: 15000,
                badge: "popular",
                icon: "fas fa-code"
            },
            {
                id: 3,
                title: "Кибербезопасность",
                description: "Основы защиты информации, ethical hacking и безопасность сетей.",
                category: "programming",
                duration: "5 месяцев",
                level: "Продвинутый",
                price: 15000,
                originalPrice: null,
                badge: "new",
                icon: "fas fa-shield-alt"
            },
            {
                id: 4,
                title: "3D-моделирование в Blender",
                description: "Создание 3D-моделей, анимация и рендеринг для игр и кино.",
                category: "design",
                duration: "3 месяца",
                level: "Начальный",
                price: 10000,
                originalPrice: 12000,
                badge: null,
                icon: "fas fa-cube"
            },
            {
                id: 5,
                title: "Английский для IT-специалистов",
                description: "Технический английский, подготовка к собеседованиям и работа в международных компаниях.",
                category: "language",
                duration: "2 месяца",
                level: "Любой",
                price: 6000,
                originalPrice: 8000,
                badge: null,
                icon: "fas fa-language"
            },
            {
                id: 6,
                title: "Основы программирования",
                description: "Бесплатный курс для победителей турниров. Введение в программирование и алгоритмы.",
                category: "free",
                duration: "1 месяц",
                level: "Начальный",
                price: 0,
                originalPrice: 5000,
                badge: "free",
                icon: "fas fa-laptop"
            }
        ];

        const tournamentsData = [
            {
                id: 1,
                title: "Кибертурнир по CS2",
                game: "Counter-Strike 2",
                date: "15 октября 2025",
                time: "18:00",
                prize: "50,000 сом",
                participants: 16,
                duration: "5 часов",
                icon: "fas fa-crosshairs"
            },
            {
                id: 2,
                title: "Dota 2 Championship",
                game: "Dota 2",
                date: "22 октября 2025",
                time: "17:00",
                prize: "75,000 сом",
                participants: 8,
                duration: "6 часов",
                icon: "fab fa-d-and-d"
            },
            {
                id: 3,
                title: "Valorant Showdown",
                game: "Valorant",
                date: "29 октября 2025",
                time: "19:00",
                prize: "40,000 сом",
                participants: 12,
                duration: "4 часа",
                icon: "fas fa-bullseye"
            }
        ];

        const menuData = [
            {
                id: 1,
                name: "Эспрессо",
                description: "Классический крепкий кофе из свежемолотых зерен арабики",
                price: 80,
                category: "coffee",
                tags: ["кофе", "классика"]
            },
            {
                id: 2,
                name: "Латте",
                description: "Кофе с молоком и нежной молочной пенкой",
                price: 120,
                category: "coffee",
                tags: ["кофе", "молоко"]
            },
            {
                id: 3,
                name: "Капучино",
                description: "Идеальный баланс кофе, молока и воздушной пенки",
                price: 110,
                category: "coffee",
                tags: ["кофе", "пенка"]
            },
            {
                id: 4,
                name: "Матча латте",
                description: "Традиционный японский чай матча с молоком",
                price: 130,
                category: "tea",
                tags: ["чай", "матча"]
            },
            {
                id: 5,
                name: "Чизкейк Нью-Йорк",
                description: "Классический чизкейк с ягодным соусом",
                price: 150,
                category: "desserts",
                tags: ["десерт", "чизкейк"]
            },
            {
                id: 6,
                name: "Студенческое комбо",
                description: "Любой кофе + чизкейк/брауни на выбор",
                price: 200,
                originalPrice: 230,
                category: "combos",
                tags: ["комбо", "студент"]
            },
            {
                id: 7,
                name: "Игровое комбо",
                description: "Энергетик + сэндвич + чипсы",
                price: 180,
                category: "combos",
                tags: ["комбо", "геймер"]
            },
            {
                id: 8,
                name: "Брауни",
                description: "Шоколадный брауни с грецкими орехами",
                price: 100,
                category: "desserts",
                tags: ["десерт", "шоколад"]
            }
        ];

        // Cart state
        let cart = [];
        let cartCount = 0;
        let cartTotal = 0;

        // DOM Elements
        const cartToggle = document.getElementById('cartToggle');
        const cartModal = document.getElementById('cartModal');
        const cartClose = document.getElementById('cartClose');
        const cartItems = document.getElementById('cartItems');
        const cartFooter = document.getElementById('cartFooter');
        const emptyCart = document.getElementById('emptyCart');
        const cartCountElement = document.querySelector('.cart-count');
        const cartTotalElement = document.querySelector('.cart-total-amount');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const paymentModal = document.getElementById('paymentModal');
        const paymentTotal = document.getElementById('paymentTotal');
        const confirmPayment = document.getElementById('confirmPayment');
        const cancelPayment = document.getElementById('cancelPayment');
        const paymentMethods = document.querySelectorAll('.payment-method');
        const cardForm = document.getElementById('cardForm');
        const cashForm = document.getElementById('cashForm');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.querySelector('.nav-links');
        const coursesContainer = document.getElementById('coursesContainer');
        const tournamentsContainer = document.getElementById('tournamentsContainer');
        const menuContainer = document.getElementById('menuContainer');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const categoryButtons = document.querySelectorAll('.menu-categories .filter-btn');
        const successToast = document.getElementById('successToast');

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize animated counters
            initCounters();
            
            // Load courses
            renderCourses();
            
            // Load tournaments
            renderTournaments();
            
            // Load menu items
            renderMenuItems();
            
            // Initialize scroll animations
            initScrollAnimations();
            
            // Initialize event listeners
            initEventListeners();
            
            // Update cart from localStorage if available
            loadCartFromStorage();
            
            // Initialize navbar scroll effect
            initNavbarScroll();
        });

        // Initialize animated counters
        function initCounters() {
            const studentsCount = document.getElementById('studentsCount');
            const tournamentsCount = document.getElementById('tournamentsCount');
            const coursesCount = document.getElementById('coursesCount');
            const winnersCount = document.getElementById('winnersCount');
            
            animateCounter(studentsCount, 0, 1250, 1500);
            animateCounter(tournamentsCount, 0, 48, 1500);
            animateCounter(coursesCount, 0, 15, 1500);
            animateCounter(winnersCount, 0, 320, 1500);
        }

        function animateCounter(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Render courses to the page
        function renderCourses(filter = 'all') {
            coursesContainer.innerHTML = '';
            
            let filteredCourses = coursesData;
            if (filter !== 'all') {
                filteredCourses = coursesData.filter(course => course.category === filter);
            }
            
            filteredCourses.forEach((course, index) => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course-card fade-in';
                courseElement.style.transitionDelay = `${index * 0.1}s`;
                
                const badgeHTML = course.badge ? `<div class="course-badge ${course.badge}">${course.badge === 'free' ? 'Бесплатно' : course.badge === 'popular' ? 'Популярный' : 'Новый'}</div>` : '';
                const originalPriceHTML = course.originalPrice ? `<span class="price discounted">${course.originalPrice} сом</span>` : '';
                const priceClass = course.price === 0 ? 'free' : 'original';
                
                courseElement.innerHTML = `
                    ${badgeHTML}
                    <div class="course-image">
                        <i class="${course.icon}"></i>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-description">${course.description}</p>
                        <div class="course-meta">
                            <span><i class="far fa-clock"></i> ${course.duration}</span>
                            <span><i class="fas fa-signal"></i> ${course.level}</span>
                        </div>
                        <div class="course-price">
                            <div>
                                ${originalPriceHTML}
                                <span class="price ${priceClass}">${course.price === 0 ? 'Бесплатно' : course.price + ' сом'}</span>
                            </div>
                            <button class="btn btn-primary add-to-cart" data-type="course" data-id="${course.id}">
                                <i class="fas fa-cart-plus"></i> Добавить
                            </button>
                        </div>
                    </div>
                `;
                
                coursesContainer.appendChild(courseElement);
            });
            
            // Reinitialize scroll animations for new elements
            initScrollAnimations();
        }

        // Render tournaments to the page
        function renderTournaments() {
            tournamentsContainer.innerHTML = '';
            
            tournamentsData.forEach((tournament, index) => {
                const tournamentElement = document.createElement('div');
                tournamentElement.className = 'tournament-card fade-in';
                tournamentElement.style.transitionDelay = `${index * 0.1}s`;
                
                // Calculate countdown (for demo purposes, using fixed future dates)
                const eventDate = new Date();
                eventDate.setDate(eventDate.getDate() + (index + 1) * 7); // 7, 14, 21 days from now
                
                tournamentElement.innerHTML = `
                    <div class="tournament-header">
                        <div class="tournament-game">
                            <i class="${tournament.icon} game-icon"></i>
                            <div>
                                <h3 class="tournament-title">${tournament.title}</h3>
                                <p style="color: var(--text-secondary);">${tournament.game}</p>
                            </div>
                        </div>
                        <div class="tournament-prize">
                            <i class="fas fa-trophy"></i> Приз: ${tournament.prize}
                        </div>
                        <p style="color: var(--accent-green); font-size: 0.9rem;"><i class="fas fa-gift"></i> Победитель получает бесплатный IT-курс!</p>
                    </div>
                    <div class="tournament-body">
                        <div class="tournament-info">
                            <div class="info-item">
                                <div class="info-label">Дата</div>
                                <div class="info-value">${tournament.date}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Время</div>
                                <div class="info-value">${tournament.time}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">Участники</div>
                                <div class="info-value">${tournament.participants}/16</div>
                            </div>
                        </div>
                        <div class="countdown" data-date="${eventDate.toISOString()}">
                            <div class="countdown-title">До начала турнира:</div>
                            <div class="countdown-timer">
                                <div class="countdown-item">
                                    <div class="countdown-number days">00</div>
                                    <div class="countdown-label">дней</div>
                                </div>
                                <div class="countdown-item">
                                    <div class="countdown-number hours">00</div>
                                    <div class="countdown-label">часов</div>
                                </div>
                                <div class="countdown-item">
                                    <div class="countdown-number minutes">00</div>
                                    <div class="countdown-label">минут</div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-accent add-to-cart" style="width: 100%; margin-top: 20px;" data-type="tournament" data-id="${tournament.id}">
                            <i class="fas fa-user-plus"></i> Зарегистрироваться (500 сом)
                        </button>
                    </div>
                `;
                
                tournamentsContainer.appendChild(tournamentElement);
            });
            
            // Initialize countdown timers
            initCountdownTimers();
            // Reinitialize scroll animations
            initScrollAnimations();
        }

        // Render menu items to the page
        function renderMenuItems(category = 'all') {
            menuContainer.innerHTML = '';
            
            let filteredMenu = menuData;
            if (category !== 'all') {
                filteredMenu = menuData.filter(item => item.category === category);
            }
            
            filteredMenu.forEach((item, index) => {
                const menuElement = document.createElement('div');
                menuElement.className = 'menu-item stagger-item';
                menuElement.style.transitionDelay = `${index * 0.05}s`;
                
                const originalPriceHTML = item.originalPrice ? `<span style="color: var(--text-secondary); text-decoration: line-through; font-size: 0.9rem; margin-right: 5px;">${item.originalPrice} сом</span>` : '';
                const tagsHTML = item.tags.map(tag => `<span class="menu-tag ${tag === 'студент' || tag === 'геймер' ? tag : ''}">${tag}</span>`).join('');
                
                menuElement.innerHTML = `
                    <div class="menu-item-header">
                        <h4 class="menu-item-name">${item.name}</h4>
                        <div class="menu-item-price">
                            ${originalPriceHTML}
                            ${item.price} сом
                        </div>
                    </div>
                    <div class="menu-item-body">
                        <p class="menu-item-description">${item.description}</p>
                        <div class="menu-item-tags">
                            ${tagsHTML}
                        </div>
                        <button class="btn btn-primary add-to-cart" style="width: 100%; margin-top: 15px;" data-type="menu" data-id="${item.id}">
                            <i class="fas fa-cart-plus"></i> Добавить в корзину
                        </button>
                    </div>
                `;
                
                menuContainer.appendChild(menuElement);
            });
            
            // Reinitialize scroll animations
            initScrollAnimations();
        }

        // Initialize countdown timers for tournaments
        function initCountdownTimers() {
            const countdowns = document.querySelectorAll('.countdown');
            
            countdowns.forEach(countdown => {
                const targetDate = new Date(countdown.dataset.date);
                updateCountdown(countdown, targetDate);
                
                // Update every second
                setInterval(() => {
                    updateCountdown(countdown, targetDate);
                }, 1000);
            });
        }

        function updateCountdown(element, targetDate) {
            const now = new Date();
            const timeDiff = targetDate - now;
            
            if (timeDiff <= 0) {
                element.innerHTML = '<div class="countdown-title">Турнир начался!</div>';
                return;
            }
            
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            
            element.querySelector('.days').textContent = days.toString().padStart(2, '0');
            element.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            element.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        }

        // Initialize scroll animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        
                        // For stagger items
                        if (entry.target.classList.contains('stagger-item')) {
                            const children = entry.target.querySelectorAll('.stagger-item');
                            children.forEach((child, index) => {
                                child.style.transitionDelay = `${index * 0.1}s`;
                                child.classList.add('visible');
                            });
                        }
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.fade-in, .stagger-item').forEach(el => {
                observer.observe(el);
            });
        }

        // Initialize navbar scroll effect
        function initNavbarScroll() {
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                
                // Update active nav link based on scroll position
                updateActiveNavLink();
            });
        }

        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        // Initialize event listeners
        function initEventListeners() {
            // Cart toggle
            cartToggle.addEventListener('click', () => {
                cartModal.classList.add('active');
            });
            
            cartClose.addEventListener('click', () => {
                cartModal.classList.remove('active');
            });
            
            // Close cart when clicking outside
            document.addEventListener('click', (e) => {
                if (!cartModal.contains(e.target) && !cartToggle.contains(e.target) && cartModal.classList.contains('active')) {
                    cartModal.classList.remove('active');
                }
            });
            
            // Mobile menu toggle
            mobileMenuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
            
            // Course filter buttons
            filterButtons.forEach(button => {
                if (button.closest('.courses-filter')) {
                    button.addEventListener('click', () => {
                        // Remove active class from all buttons
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        // Add active class to clicked button
                        button.classList.add('active');
                        // Filter courses
                        renderCourses(button.dataset.filter);
                    });
                }
            });
            
            // Menu category buttons
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    // Filter menu items
                    renderMenuItems(button.dataset.category);
                });
            });
            
            // Add to cart buttons (delegated event listener)
            document.addEventListener('click', (e) => {
                if (e.target.closest('.add-to-cart')) {
                    const button = e.target.closest('.add-to-cart');
                    const type = button.dataset.type;
                    const id = parseInt(button.dataset.id);
                    
                    addToCart(type, id);
                    showSuccessToast();
                }
            });
            
            // Checkout button
            checkoutBtn.addEventListener('click', () => {
                if (cart.length > 0) {
                    cartModal.classList.remove('active');
                    paymentModal.classList.add('active');
                    paymentTotal.textContent = `${cartTotal} сом`;
                }
            });
            
            // Payment method selection
            paymentMethods.forEach(method => {
                method.addEventListener('click', () => {
                    paymentMethods.forEach(m => m.classList.remove('active'));
                    method.classList.add('active');
                    
                    if (method.dataset.method === 'card') {
                        cardForm.style.display = 'flex';
                        cashForm.style.display = 'none';
                    } else {
                        cardForm.style.display = 'none';
                        cashForm.style.display = 'block';
                    }
                });
            });
            
            // Confirm payment
            confirmPayment.addEventListener('click', () => {
                // In a real app, you would process payment here
                alert('Спасибо за заказ! Ваш заказ №' + Math.floor(Math.random() * 10000) + ' успешно оформлен. Мы свяжемся с вами в ближайшее время для подтверждения.');
                
                // Clear cart
                cart = [];
                cartCount = 0;
                cartTotal = 0;
                updateCartUI();
                saveCartToStorage();
                
                // Close payment modal
                paymentModal.classList.remove('active');
            });
            
            // Cancel payment
            cancelPayment.addEventListener('click', () => {
                paymentModal.classList.remove('active');
            });
            
            // Form input formatting
            document.getElementById('cardNumber')?.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
                let formatted = '';
                for (let i = 0; i < value.length; i++) {
                    if (i > 0 && i % 4 === 0) formatted += ' ';
                    formatted += value[i];
                }
                e.target.value = formatted.substring(0, 19);
            });
            
            document.getElementById('cardExpiry')?.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value.substring(0, 5);
            });
            
            document.getElementById('cardCvc')?.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/[^0-9]/gi, '').substring(0, 3);
            });
            
            // Close payment modal when clicking outside
            document.addEventListener('click', (e) => {
                if (e.target === paymentModal) {
                    paymentModal.classList.remove('active');
                }
            });
            
            // Footer link clicks
            document.querySelectorAll('.footer-links a[data-filter]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const filter = link.dataset.filter;
                    
                    // Update courses filter
                    filterButtons.forEach(btn => {
                        if (btn.dataset.filter === filter) {
                            btn.click();
                        }
                    });
                    
                    // Scroll to courses section
                    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                });
            });
        }

        // Cart functions
        function addToCart(type, id) {
            let item;
            let price = 0;
            
            switch(type) {
                case 'course':
                    item = coursesData.find(course => course.id === id);
                    price = item.price;
                    break;
                case 'tournament':
                    item = tournamentsData.find(tournament => tournament.id === id);
                    price = 500; // Registration fee
                    break;
                case 'menu':
                    item = menuData.find(menuItem => menuItem.id === id);
                    price = item.price;
                    break;
            }
            
            if (!item) return;
            
            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(cartItem => cartItem.type === type && cartItem.id === id);
            
            if (existingItemIndex !== -1) {
                // Increase quantity
                cart[existingItemIndex].quantity += 1;
            } else {
                // Add new item
                cart.push({
                    type,
                    id,
                    name: item.title || item.name,
                    price,
                    quantity: 1,
                    description: type === 'course' ? `${item.duration}, ${item.level}` : 
                                 type === 'tournament' ? `${item.date}, ${item.time}` : 
                                 item.description
                });
            }
            
            // Update cart counts
            cartCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            
            // Update UI
            updateCartUI();
            
            // Save to localStorage
            saveCartToStorage();
        }

        function removeFromCart(type, id) {
            const itemIndex = cart.findIndex(item => item.type === type && item.id === id);
            
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
                
                // Update cart counts
                cartCount = cart.reduce((total, item) => total + item.quantity, 0);
                cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                
                // Update UI
                updateCartUI();
                
                // Save to localStorage
                saveCartToStorage();
            }
        }

        function updateCartUI() {
            // Update cart count in navbar
            cartCountElement.textContent = cartCount;
            
            // Update cart modal
            if (cart.length === 0) {
                emptyCart.style.display = 'block';
                cartFooter.style.display = 'none';
                cartItems.innerHTML = '';
                cartItems.appendChild(emptyCart);
            } else {
                emptyCart.style.display = 'none';
                cartFooter.style.display = 'block';
                
                // Clear and rebuild cart items
                cartItems.innerHTML = '';
                
                cart.forEach(item => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item';
                    cartItemElement.innerHTML = `
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                        </div>
                        <div class="cart-item-actions">
                            <div class="cart-item-quantity">
                                <span>${item.quantity} × ${item.price} сом</span>
                            </div>
                            <button class="cart-item-remove" data-type="${item.type}" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                    cartItems.appendChild(cartItemElement);
                });
                
                // Add event listeners to remove buttons
                document.querySelectorAll('.cart-item-remove').forEach(button => {
                    button.addEventListener('click', () => {
                        const type = button.dataset.type;
                        const id = parseInt(button.dataset.id);
                        removeFromCart(type, id);
                    });
                });
            }
            
            // Update cart total
            cartTotalElement.textContent = `${cartTotal} сом`;
        }

        function saveCartToStorage() {
            localStorage.setItem('cybertechhub_cart', JSON.stringify(cart));
        }

        function loadCartFromStorage() {
            const savedCart = localStorage.getItem('cybertechhub_cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
                cartCount = cart.reduce((total, item) => total + item.quantity, 0);
                cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                updateCartUI();
            }
        }

        function showSuccessToast() {
            successToast.style.transform = 'translateY(0)';
            successToast.style.opacity = '1';
            
            setTimeout(() => {
                successToast.style.transform = 'translateY(100px)';
                successToast.style.opacity = '0';
            }, 3000);
        }