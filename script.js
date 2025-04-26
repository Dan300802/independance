// Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Scroll active menu
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
});

// Sticky navigation
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Countdown Timer
function updateCountdown() {
    const independenceDay = new Date('April 27, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = independenceDay - now;
    
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    
    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinutes = Math.floor((gap % hours) / minutes);
    const textSeconds = Math.floor((gap % minutes) / seconds);
    
    document.getElementById('days').innerText = textDays < 10 ? `0${textDays}` : textDays;
    document.getElementById('hours').innerText = textHours < 10 ? `0${textHours}` : textHours;
    document.getElementById('minutes').innerText = textMinutes < 10 ? `0${textMinutes}` : textMinutes;
    document.getElementById('seconds').innerText = textSeconds < 10 ? `0${textSeconds}` : textSeconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Flag info button
document.getElementById('flag-button').addEventListener('click', function() {
    alert('Le drapeau togolais a été adopté le 27 avril 1960, lors de l\'indépendance. Les cinq bandes horizontales représentent les cinq régions du Togo. L\'étoile blanche symbolise l\'espoir d\'un avenir meilleur pour le peuple togolais.');
});

// Culture cards interaction
const cultureCards = document.querySelectorAll('.culture-card');
const cultureDetail = document.getElementById('culture-detail');
const detailImage = document.querySelector('.detail-image');
const detailText = document.querySelector('.detail-text');

const cultureInfo = {
    'card-traditions': {
        title: 'Traditions togolaises',
        text: `
            <p>Les traditions togolaises sont remarquablement diverses, reflétant la richesse ethnique du pays avec plus de 40 groupes ethniques différents. Chaque groupe conserve ses propres coutumes, rituels et cérémonies.</p>
            <p>Les cérémonies traditionnelles togolaises sont souvent accompagnées de danses spectaculaires comme l'Agbadja chez les Ewés, le Kamou chez les Kabiyés, ou encore les danses des échassiers à Sokodé. Ces danses sont exécutées lors des cérémonies importantes comme les mariages, les funérailles ou les célébrations saisonnières.</p>
            <p>Le Togo est également réputé pour ses cérémonies vaudou, particulièrement dans le sud du pays. Ces rituels comprennent des offrandes, des chants, des danses et parfois des transes, permettant une communication avec les esprits et les ancêtres.</p>
        `,
        image: 'img/culture.jpg'
    },
    'card-cuisine': {
        title: 'Cuisine togolaise',
        text: `
            <p>La cuisine togolaise est savoureuse et variée, reflétant la diversité culturelle du pays. Elle est basée principalement sur les tubercules comme l'igname, le manioc et la patate douce, ainsi que sur les céréales comme le maïs et le mil.</p>
            <p>Parmi les plats emblématiques, on trouve:</p>
            <ul>
                <li><strong>Fufu</strong> - Une pâte épaisse à base d'igname pilée, servie avec diverses sauces</li>
                <li><strong>Akumé</strong> - Pâte de maïs fermentée semblable au fufu</li>
                <li><strong>Sauce d'arachide</strong> - Une sauce crémeuse à base de pâte d'arachide, souvent servie avec du poulet ou du poisson</li>
                <li><strong>Gboma dessi</strong> - Un ragoût d'épinards avec de la viande et des fruits de mer</li>
            </ul>
            <p>La cuisine togolaise est généralement épicée et aromatisée avec des ingrédients comme le gingembre, le piment, l'ail et diverses herbes locales.</p>
        `,
        image: 'img/recette.jpg'
    },
    'card-artisanat': {
        title: 'Artisanat togolais',
        text: `
            <p>L'artisanat togolais est réputé pour sa qualité et sa diversité. Les artisans togolais excellent dans plusieurs domaines:</p>
            <ul>
                <li><strong>Textile</strong> - Le Togo est célèbre pour ses tissus colorés, notamment le "kente" et le "batik". Les tissus sont souvent teints à la main avec des motifs symboliques.</li>
                <li><strong>Sculpture sur bois</strong> - Les sculptures représentent souvent des figures ancestrales, des animaux ou des scènes de la vie quotidienne.</li>
                <li><strong>Poterie</strong> - Tradition ancestrale transmise de génération en génération, la poterie togolaise est caractérisée par ses formes harmonieuses et ses décorations géométriques.</li>
                <li><strong>Bijouterie</strong> - Les artisans togolais créent des bijoux magnifiques en utilisant des perles, des métaux et des matériaux naturels.</li>
            </ul>
            <p>L'artisanat est non seulement une expression culturelle importante, mais aussi une source de revenus significative pour de nombreuses communautés togolaises.</p>
        `,
        image: 'img/artisant.jpg'
    },
    'card-musique': {
        title: 'Musique togolaise',
        text: `
            <p>La musique togolaise est riche et diversifiée, mêlant traditions ancestrales et influences contemporaines. Les instruments traditionnels incluent:</p>
            <ul>
                <li><strong>Tambours</strong> - De différentes tailles et formes, ils sont au cœur de la musique traditionnelle</li>
                <li><strong>Balafon</strong> - Un xylophone en bois avec des calebasses comme résonateurs</li>
                <li><strong>Kora</strong> - Une harpe-luth à 21 cordes</li>
                <li><strong>Flûtes</strong> - Fabriquées à partir de bambou ou d'autres matériaux naturels</li>
            </ul>
            <p>Les genres musicaux populaires au Togo incluent l'Agbadja, le Kamou, et plus récemment le highlife, l'afrobeat et le gospel. Des artistes comme King Mensah, Bella Bellow et Toofan ont porté la musique togolaise sur la scène internationale.</p>
            <p>La musique joue un rôle essentiel dans les cérémonies traditionnelles, les célébrations et comme moyen d'expression culturelle et sociale.</p>
        `,
        image: 'img/king.jpg'
    }
};

cultureCards.forEach(card => {
    card.addEventListener('click', function() {
        const cardId = this.id;
        const info = cultureInfo[cardId];
        
        cultureDetail.querySelector('h3').textContent = info.title;
        detailImage.src = info.image;
        detailText.innerHTML = info.text;
        
        // Smooth scroll to detail section
        cultureDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight selected card
        cultureCards.forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Gallery filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 100);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Gallery modal
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close-modal');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImg.src = this.querySelector('img').src;
        modalCaption.innerHTML = this.querySelector('.overlay-content').innerHTML;
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Message form
const wishesForm = document.getElementById('wishes-form');
const wishesContainer = document.getElementById('wishes-container');

wishesForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const wish = document.getElementById('wish').value;
    
    if (name && wish) {
        // Create new wish card
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card animate__animated animate__fadeIn';
        
        const wishAuthor = document.createElement('div');
        wishAuthor.className = 'wish-author';
        wishAuthor.textContent = name;
        
        const wishText = document.createElement('p');
        wishText.className = 'wish-text';
        wishText.textContent = wish;
        
        wishCard.appendChild(wishAuthor);
        wishCard.appendChild(wishText);
        
        // Add new wish to the container at the top
        wishesContainer.prepend(wishCard);
        
        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('wish').value = '';
    }
});

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});