const header = document.createElement('header');

const headerh1 = document.createElement('h1');
headerh1.setAttribute('id', 'logo');
headerh1.innerText = 'Techno Mobile';

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.innerHTML = '<i class="fas fa-bars"></i>';

const headernav = document.createElement('nav');
headernav.setAttribute('id', 'desktop-nav');
const listelems = '<li><a class="nav-link" href="#projects">Featured</a></li>'
+ '<li><a class="nav-link" href="#about-me">About Us</a></li>'
+ '<li><a class="naheaderh1v-link" href="#contact">Contact <i class="far fa-envelope"></i></a></li>';

headernav.innerHTML = `<ul>${listelems}</ul>`;

[headerh1, button, headernav].forEach((item) => header.appendChild(item));

const featureddiv = document.createElement('div');
featureddiv.classList.add('intro-icon');
featureddiv.innerHTML = '<img class="mobile-icon" src="./media/svg/icon.svg" alt="Icon for the side"/>'
+ '<img class="desktop-icon" src="./media/svg/desktop-icon.svg" alt="Icon for the side"/>';

const featuredh2a = document.createElement('h2');
featuredh2a.classList.add('intro-greet');
featuredh2a.innerText = 'Hi End Tech. <br /> Techno274';

const featuredh2b = document.createElement('h2');
featuredh2b.classList.add('intro-greet');
featuredh2b.innerText = 'Fine tuch features.';

const featuredp = document.createElement('p');
featuredp.classList.add('intro-text');
featuredp.innerText = 'It is a high end tech mobile. Andriod OS. One of best selling items of our products';

const imagessrc = ['./media/svg/github.svg', './media/svg/linkedin.svg',
  './media/svg/angel.svg', './media/svg/twitter.svg', './media/svg/medium.svg'];

const ahref = ['https://github.com/SpaYco', 'https://www.linkedin.com/in/spayco',
  'https://angel.co/spayco', 'https://twitter.com/iSpaYco', 'https://spayco.medium.com/'];

let featureda = '';
for (let i = 0; i < ahref.length; i += 1) {
  featureda += `<a class="social-link" href=${ahref[i]}`
    + 'target="_blank" rel="noreferrer noopener" >'
    + `<img class="social-icon" src=${imagessrc[i]} alt="Icon"/></a>`;
}

const featuredsocial = document.createElement('div');
featuredsocial.classList.add('social');
featuredsocial.classList.add('top-social');
featuredsocial.innerHTML = featureda;

const featured = document.createElement('div');
featured.setAttribute('id', 'intro');

[featureddiv, featuredh2a, featuredh2a,
  featuredp, featuredsocial].forEach((item) => featured.appendChild(item));

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

function details(pclass) {
  const innerElem = '<h2>Weather App</h2>'
+ `<p class="${pclass}"`
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
  return innerElem;
}

const cardelem1 = card(['card', 'weather'], details('white-description'));
const cardelem2 = card(['card', 'gtime'], details('white-description'));
const cardelem3 = card(['card', 'conference'], details('white-description'));
const cardelem4 = card(['card', 'katchy'], details('white-description'));

const cardlists = document.createElement('div');
cardlists.classList.add('cards-list');

[cardelem1, cardelem2, cardelem3, cardelem4].forEach((item) => item.appendChild(cardlists));

const aboutussection = document.createElement('section');
aboutussection.setAttribute('id', 'about-me-section');
aboutussection.innerHTML = '<h2>About me</h2> <p class="about-me-text">'
  + 'I am a skilled Full-Stack Web Developer who loves making pages with'
  + 'beautiful UI. I have studied at Microverse, and I am experienced in remote work. <br />'
  + 'I\'ve also been a good helping hand to a lot of developers in different communities!'
  + '<br /> if you\'d like to get in contact about potential job opportunities, please reach out! </p>'
+ '<a href="https://docs.google.com/document/d/1lYq0Kb50TujzJzDWGobIchRI17JMnAiZMF9OBQgNU68/edit?usp=sharing"'
  + 'class="link" target="_blank" rel="noreferrer noopener"> Get my resume </a> <img'
  + 'class="about-me-icon mobile-icon" src="./media/svg/icon-2.svg" alt="Icon" />'
+ '<img class="about-me-icon desktop-icon" src="./media/svg/desktop-icon-2.svg" alt="Icon"/>';

const aboutus = document.createElement('div');
aboutus.setAttribute('id', 'about-me');
aboutus.appendChild(aboutussection);

const cardsh2 = document.createElement('h2');
cardsh2.innerText = 'My Recent Work';
const firstcard = document.createElement('div');
firstcard.classList.add('first-card');
firstcard.innerHTML = '<img src="./media/png/ubrunning.png" alt="UB-Running Screenshot" class="first-card-img"/>'
+ '<div class="first-card-description">'
    + '<h2>UB Running</h2><p class="description blue-color">'
      + 'A Platform game made with JavaScript using the Phaser framework</p>'
+ '<ul class="project-stacks blue-color"> <li>HTML</li> <li>SASS/CSS</li> <li>JavaScript</li>'
      + '<li>WebPack</li> <li>Babel</li> <li>Phaser</li> </ul>'
    + '<a href="https://github.com/Spayco/UB-Running/" class="link" target="_blank" '
    + 'rel="noreferrer noopener" >See project</a> </div>';

const project = document.createElement('div');
project.setAttribute('id', 'projects');
[cardsh2, firstcard, cardelem1, cardelem2, cardelem3,
  cardelem4].forEach((item) => project.appendChild(item));

const main = document.createElement('main');
[featured, project, aboutus].forEach((item) => main.appendChild(item));

[header, main].forEach((item) => document.body.appendChild(item));
