const header = document.createElement('header');

const header_h1 = document.createElement('h1');
header_h1.setAttribute('id', 'logo');

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.innerHTML = '<i class="fas fa-bars"></i>';

const header_nav = document.createElement('nav');
header_nav.setAttribute('id', 'desktop-nav');
const list_elems = '<li><a class="nav-link" href="#projects">Portoflio</a></li>' + 
'<li><a class="nav-link" href="#about-me">About</a></li>' + 
'<li><a class="nav-link" href="#contact">Contact <i class="far fa-envelope"></i></a></li>';

header_nav.innerHTML = '<ul>' + `${list_elems}` + '</ul>';

[header_h1, button, header_nav].forEach(item => header.appendChild(item));

const featured_div = document.createElement('div');
featured_div.classList.add('intro-icon');
featured_div.innerHTML = '<img class="mobile-icon" src="./media/svg/icon.svg" alt="Icon for the side"/>' +
'<img class="desktop-icon" src="./media/svg/desktop-icon.svg" alt="Icon for the side"/>'

const featured_h2a = document.createElement('h2');
featured_h2a.classList.add('intro-greet');
featured_h2a.innerText = 'Hey There. <br /> I\'m Aziz';

const featured_h2b = document.createElement('h2');
featured_h2b.classList.add('intro-greet');
featured_h2b.innerText = 'I’am a Software Developer';

const featured_p = document.createElement('p');
featured_p.classList.add('intro-text');
featured_p.innerText = 'I can help you build a product, feature or website <br />' +
'Look through some of my work and experience! <br />' +
'If you like what you see and have a project you need coded, don’t' + 
'hestiate to contact me.';

const images_src = ['./media/svg/github.svg', './media/svg/linkedin.svg', 
'./media/svg/angel.svg', './media/svg/twitter.svg', './media/svg/medium.svg'];

const a_href = ['https://github.com/SpaYco', 'https://www.linkedin.com/in/spayco',
'https://angel.co/spayco', 'https://twitter.com/iSpaYco', 'https://spayco.medium.com/'];

var featured_a = '';
for(var i=0; i<a_href.length; i+=1) {
    featured_a +=  `<a class="social-link" href=${a_href[i]}` + 
    `target="_blank" rel="noreferrer noopener" >` + 
    `<img class="social-icon" src=${images_src[i]} alt="Icon"/></a>`;
}

const featured_social = document.createElement('div');
featured_social.classList.add('social');
featured_social.classList.add('top-social');
featured_social.innerHTML = featured_a;

const featured = document.createElement('div');
featured.setAttribute('id', 'intro');

[featured_div, featured_h2a, featured_h2a, 
    featured_p, featured_social].forEach(item => featured.appendChild(item));

[header, featured].forEach(item => document.body.appendChild(item));