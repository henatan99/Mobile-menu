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

document.body.appendChild(header);