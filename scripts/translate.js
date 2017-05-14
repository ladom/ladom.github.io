function translateSite() {
    document.getElementById('aboutBtn').textContent = 'About';
    document.getElementById('musicBtn').textContent = 'Music';
    document.getElementById('hobbyBtn').textContent = 'Passions';
    document.getElementById('contactBtn').textContent = 'Contact';
    document.querySelector('.jumbotron__slogan--text').textContent = 'Life is only one';
    document.querySelector('.about__me--body p').innerHTML = 'Music & IT. Is the connection possible?<br>I play violin more then 30 years. I graduated all steps of music education. Etc...';
    document.querySelector('.about__front--body p').innerHTML = 'I\'m starting my career as a front-end developer. As many of beginers I have good skill in HTML and CSS.';
    document.querySelector('.about__front--works').textContent = "My choosen works:";
    document.querySelector('.about__front--list').innerHTML = '<li><a href="http://www.atiart.pl" target="_blank"><i class="fa fa-arrow-right"></i> Muzyczni Odkrywcy - home site</a></li><li><a href="http://www.muzyczniodkrywcy.pl/nuty" target="_blank"><i class="fa fa-arrow-right"></i> Poznaj Nuty - education game for children</a></li><li><a href="http://www.muzyczniodkrywcy.pl/clock" target="_blank"><i class="fa fa-arrow-right"></i> JavaScript clock</a></li>';
    document.querySelector('.about__front--git').innerHTML = 'My projects on GitHub: <a href="https://github.com/ladom"><i class="fa fa-github"></i> github.com/ladom</a>';
    document.querySelector('.about__music--header h2').textContent = "Classical music";
    document.querySelector('.about__music--body p').innerHTML = 'I\'m professional violinist. During last twenty years I performed on stages in Poland and abroad. For many years I worked also as a teacher in Music Academy in Wrocław.';
    document.querySelector('.about__hobby--header h2').textContent = "Passions";
    document.querySelector('.about__hobby--body p').innerHTML = 'How long I remember, I loved wood. When I was a child, spent hours on making boats from tree bark, or bonding wood constructions.';
    document.querySelector('.footer__contact').textContent = "Contact:";

}