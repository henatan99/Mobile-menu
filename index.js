const header = document.createElement('header');

const header_h1 = document.createElement('h1');
header_h1.setAttribute('id', 'logo');
header_h1.innerText = 'Techno Mobile';

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.innerHTML = '<i class="fas fa-bars"></i>';

const header_nav = document.createElement('nav');
header_nav.setAttribute('id', 'desktop-nav');
const list_elems = '<li><a class="nav-link" href="#projects">Featured</a></li>'
+ '<li><a class="nav-link" href="#about-me">About Us</a></li>'
+ '<li><a class="nav-link" href="#contact">Contact <i class="far fa-envelope"></i></a></li>';

header_nav.innerHTML = '<ul>' + `${list_elems}` + '</ul>';

[header_h1, button, header_nav].forEach((item) => header.appendChild(item));

const featured_div = document.createElement('div');
featured_div.classList.add('intro-icon');
featured_div.innerHTML = '<img class="mobile-icon" src="./media/svg/icon.svg" alt="Icon for the side"/>'
+ '<img class="desktop-icon" src="./media/svg/desktop-icon.svg" alt="Icon for the side"/>';

const featured_h2a = document.createElement('h2');
featured_h2a.classList.add('intro-greet');
featured_h2a.innerText = 'Hi End Tech. <br /> Techno274';

const featured_h2b = document.createElement('h2');
featured_h2b.classList.add('intro-greet');
featured_h2b.innerText = 'Fine tuch features.';

const featured_p = document.createElement('p');
featured_p.classList.add('intro-text');
featured_p.innerText = 'It is a high end tech mobile. Andriod OS. One of best selling items of our products';

const images_src = ['./media/svg/github.svg', './media/svg/linkedin.svg',
  './media/svg/angel.svg', './media/svg/twitter.svg', './media/svg/medium.svg'];

const a_href = ['https://github.com/SpaYco', 'https://www.linkedin.com/in/spayco',
  'https://angel.co/spayco', 'https://twitter.com/iSpaYco', 'https://spayco.medium.com/'];

let featured_a = '';
for (let i = 0; i < a_href.length; i += 1) {
  featured_a += `<a class="social-link" href=${a_href[i]}`
    + 'target="_blank" rel="noreferrer noopener" >'
    + `<img class="social-icon" src=${images_src[i]} alt="Icon"/></a>`;
}

const featured_social = document.createElement('div');
featured_social.classList.add('social');
featured_social.classList.add('top-social');
featured_social.innerHTML = featured_a;

const featured = document.createElement('div');
featured.setAttribute('id', 'intro');

[featured_div, featured_h2a, featured_h2a,
  featured_p, featured_social].forEach((item) => featured.appendChild(item));

function card(classes = [], details) {
  const div1 = document.createElement('div');
  if (classes.length) {
    classes.forEach((item) => div1.classList.add(item));
  }

  const div2 = document.createElement('div');
  div2.classList.add('background-div');

  const div3 = document.createElement('div');
  div3.classList.add('card-description');

  div3.innerHTML = `${details}`;

  [div2, div3].forEach((item) => div1.appendChild(item));
  return div1;
}

function details(p_class) {
  const innerElem = '<h2>Weather App</h2>'
+ `<p class="${p_class}"`
  + 'This is a responsive weather app made with JavaScript that'
  + 'displays the temperature, humidity and timezone for cities'
  + 'around the world.'
+ '</p>'
+ '<ul class="project-stacks card-stacks">'
  + '<li>HTML</li>'
  + '<li>SASS/CSS</li>'
  + '<li>JavaScript</li>'
  + '<li>WebPack</li>'
  + '<li>Babel</li>'
+ '</ul>';
};

const card_elem1 = card(['card', 'weather'], details('white-description'));
const card_elem2 = card(['card', 'gtime'], details('white-description'));
const card_elem3 = card(['card', 'conference'], details('white-description'));
const card_elem4 = card(['card', 'katchy'], details('white-description'));

const card_lists = document.createElement('div');
card_lists.classList.add('cards-list');

[card_elem1, card_elem2, card_elem3, card_elem4].forEach(item => item.appendChild(card_lists));

const about_us_section = document.createElement('section');
about_us_section.setAttribute('id', 'about-me-section');
about_us_section.innerHTML = 
'<h2>About me</h2> <p class="about-me-text">' +
  'I am a skilled Full-Stack Web Developer who loves making pages with' +
  'beautiful UI. I have studied at Microverse, and I am experienced in remote work. <br />' + 
  'I\'ve also been a good helping hand to a lot of developers in different communities!' +
  '<br /> if you\'d like to get in contact about potential job opportunities, please reach out! </p>' +
'<a href="https://docs.google.com/document/d/1lYq0Kb50TujzJzDWGobIchRI17JMnAiZMF9OBQgNU68/edit?usp=sharing"' +
  'class="link" target="_blank" rel="noreferrer noopener"> Get my resume </a> <img' +
  'class="about-me-icon mobile-icon" src="./media/svg/icon-2.svg" alt="Icon" />' +
'<img class="about-me-icon desktop-icon" src="./media/svg/desktop-icon-2.svg" alt="Icon"/>';

const about_us = document.createElement('div');
about_us.setAttribute('id', 'about-me');
about_us.appendChild(about_us_section);

const cards_h2 = document.createElement('h2');
cards_h2.innerText = 'My Recent Work';
const first_card = document.createElement('div');
first_card.classList.add('first-card');
first_card.innerHTML = 
'<img src="./media/png/ubrunning.png" alt="UB-Running Screenshot" class="first-card-img"/>' +  
'<div class="first-card-description">' +
    '<h2>UB Running</h2><p class="description blue-color">' + 
      'A Platform game made with JavaScript using the Phaser framework</p>'
      '<ul class="project-stacks blue-color"> <li>HTML</li> <li>SASS/CSS</li> <li>JavaScript</li>' + 
      '<li>WebPack</li> <li>Babel</li> <li>Phaser</li> </ul>' +
    '<a href="https://github.com/Spayco/UB-Running/" class="link" target="_blank" '+
    'rel="noreferrer noopener" >See project</a> </div>';

const project = document.createElement('div');
project.setAttribute('id', 'projects');
[cards_h2, first_card, card_elem1, card_elem2, card_elem3, card_elem4].forEach(item => project.appendChild(item));

const main = document.createElement('main');
[featured, project, about_us].forEach((item) => main.appendChild(item));

// changes made 


[header, main].forEach((item) => document.body.appendChild(item));



