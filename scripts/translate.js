const flag = document.getElementById('languageBtn');

function translateToPolish() {
    document.getElementById('aboutBtn').textContent = 'O mnie';
    document.getElementById('musicBtn').textContent = 'Muzyka';
    document.getElementById('hobbyBtn').textContent = 'Pasje';
    document.getElementById('contactBtn').textContent = 'Kontakt';
    document.getElementById('languageBtn').innerHTML = '<img src="pictures/gbr.png" class="flag flag--english">';
    document.getElementById('languageBtn').classList.value = 'english';

    document.querySelector('.about__me--body p').innerHTML = 'Muzyka i IT. Czy to się da połączyć?<br>Od ponad 30 lat gram na skrzypcach. Ukończyłem wszystkie stopnie edukacji muzycznej. Szkoły podstawową i średnią, studia, potem doktorat i habilitację. Komputer też zawsze był mi bliski. Próbowałem wielu technologii, całkiem dobrze opanowałem Photoshop\'a, tworzyłem zaawansowane arkusze w Excel\'u, nawet sam złożyłem i wydałem swoją książkę, używając Adobe InDesign\'a.<br>Teraz zdecydowałem, że chciałbym profesjonalnie zająć się pisaniem stron i aplikacji internetowych. Zawsze miałem mnóstwo pomysłów na to jak miałyby wyglądać, działać, jakie mieć funcjonalności. Brakowało mi tylko wiedzy jak tego dokonać za pomocą kodu. Od jakiegoś czasu bardzo intensywnie uczę się, poznając język HTML, style CSS i przede wszystkim JavaScript. I coraz bardziej zafascynowany jestem ich możliwościami, wydającymi się nie mieć granic.<br>Poza pracą jestem miłośnikiem stolarstwa, czasem zajmuję się wymyślaniem i organizacją gier miejskich. Lubię podróżować, a ostatnio zafascynowałem się off-road\'em.';
    document.querySelector('.about__front--body p').innerHTML = 'Jestem początkującym Front-end developerem. Jak pewnie większość zaczynających swoją drogę w kodowaniu stron posiadam, całkiem niezłą moim zdaniem, znajomość HTML i CSS. W swoich projektach chętnie korzystam z rozwiązań HTML5 i CSS3. Aktualnie najbardziej zafascynowany jestem możliwościami języka JavaScript. Cieszą mnie nowe rozwiązania wprowadzone w ES6, które pozwalają mi łatwiej realizować moje założenia.<br>W celu usprawnienia pracy korzystam z automatyzatora Gulp oraz preprocesorów CSS. Moim ulubionym jest SASS i w zasadzie to jego używam najczęściej. Potrafię również korzystać z bibliotek CSS i JS, m.in. Twitter Bootstrap, jQuery, AngularJS.<br>Ciągle się uczę i codziennie odkrywam nowe możliwości i rozwiązania problemów z którymi się zmagam. Chciałbym wykorzystać moje dotychczasowe umiejętności i realizować projekty w profesjonalnym zespole programistów. Taka praca pozwoliłaby mi korzystać z doświadczenia i wiedzy współpracowników w celu dalszego rozwoju w tej dziedzinie. Myślę, że moje doświadczenia w pracy artystycznej mogą w nieoczekiwany sposób pomóc w zupełnie odmiennym spojrzeniu na problemy i zagadnienia, nad jakimi będziemy pracować.<br>Ponieważ jestem muzykiem, chciałbym zająć się tworzeniem stron i aplikacji służących do nauki i poznawania tej dziedziny sztuki. Widzę ogromne braki na rynku aplikacji edukacyjnych, służących do nauki i poznawania muzyki.<br>Jestem osobą kreatywną i zorientowaną na cel. Granie na instrumencie uczy cierpliwości i wytrwałości. Występy sceniczne sprawiają, że praca pod presją czasu i stresu jest normalnością. Łatwo podejmuję decyzje i nieustępliwie dążę do ich realizacji.';
    document.querySelector('.works__describe').textContent = "Moje przykładowe realizacje:";

    document.querySelector('#atiart h3').textContent = "Strona domowa szkoły muzycznej";
    document.querySelector('#notes h3').textContent = "Gra edukacyjna Poznaj Nuty";
    document.querySelector('#clock h3').textContent = "Zegar JavaScript";
    document.querySelector('#myear h3').innerHTML = "Strona Festiwalu Wyobraźni Muzycznej<br>-- w przygotowaniu --";
    document.querySelector('#map h3').textContent = "Aktywna mapa Polski";
    document.querySelector('#sailing h3').textContent = "Szablon strony wg layout\'u";


    document.querySelector('.about__front--git').innerHTML = 'Konto z moimi projektami na GitHub:<br><a class="about__front--gitIcon" href="https://github.com/ladom?tab=repositories" target="_blank"><i class="fa fa-github"></i><br>github.com/ladom</a>';
    document.querySelector('.about__music--header h2').textContent = "Muzyka klasyczna";
    document.querySelector('.about__music--body p').innerHTML = 'Jestem profesjonalnym skrzypkiem. Od blisko dwudziestu lat występowałem na wielu scenach w Polsce i na świecie. Przez wiele lat pracowałem też jako pedagog we wrocławskiej Akademii Muzycznej. Na swoim koncie mam nagranie kilkunastu płyt CD i DVD, setki koncertów jako solista, kameralista, czy muzyk orkiestrowy.<br>Z graniem jest jak z jazdą na rowerze - nie zapomina się tego. Dlatego też zawsze będę muzykiem i zawsze będę z radością sięgał po skrzypce.';
    document.querySelector('.about__hobby--header h2').textContent = "Pasje";
    document.querySelector('.about__hobby--body p').innerHTML = 'Zawsze kochałem drewno. Już jako dziecko uwielbiałem spędzać godziny strugając łódki z kory, czy klejąc konstrukcje z drewnianych patyków. Z czasem zacząłem podchodzić do tego bardziej praktycznie. Cały czas amatorsko, ale z całkiem dużym powodzeniem udaje mi się tworzyć zarówno małe, drewniane drobiazgi, jak też duże konstrukcje takie jak schody, taras, czy wiata z drewna. Nieodmiennie daje mi to bardzo dużo radości i pozwala zrelaksować się i odpocząć.<br>Od kiedy pamiętam lubiłem też podróże. Jako dziecko zwiedzałem różne zakątki świata z rodzicami. Później, z racji zawodu muzyka, udało mi się odwiedzić dużą liczbę niesamowitych miejsc. Często bardzo egzotycznych i rzadko odwiedzanych przez turystów. Od jakiegoś czasu zafascynowało mnie jeżdżenie samochodem terenowym po bezdrożach. Off-road pozwala w krótkim czasie odwiedzić miejsca kiedyś dla mnie niedostępne i daje niesamowite poczucie niezależności i całkowitego oderwania od przyziemnych spraw.<br>Poza tym i wieloma innymi hobby mam to szczęście, że uwielbiam zarówno grę na skrzypcach, jak i programowanie, tak więc praca również jest dla mnie źródłem satysfakcji i radości.';
    document.querySelector('.footer__contact').textContent = "Kontakt:";
    document.querySelector('.footer__contact--cv').href = "cv/andrzej_ladomirski_front_cv_polish.pdf";


}

function translateSite() {
    document.getElementById('aboutBtn').textContent = 'About';
    document.getElementById('musicBtn').textContent = 'Music';
    document.getElementById('hobbyBtn').textContent = 'Passions';
    document.getElementById('contactBtn').textContent = 'Contact';
    document.getElementById('languageBtn').innerHTML = '<img src="pictures/pol.png" class="flag flag--polish">';
    document.getElementById('languageBtn').classList.value = 'polish';

    document.querySelector('.about__me--body p').innerHTML = 'Music and IT. Is it possible to connect?<br>For over 30 years I play the violin. I have completed all degrees in music education. Elementary and secondary schools, studies, then doctorate and habilitation degrees. The computer has always been close to me. I have tried many technologies, pretty well mastered Photoshop, created advanced Excel worksheets, even folded and published my own book using Adobe InDesign.<br>Now I decided that I would like to professionally deal with creating websites and web applications. I\'ve always had plenty of ideas on how should it look, act, have funcionalities. I just lacked the knowledge of how to do this with code. For some time I have been very diligent learning HTML, CSS styles and above all JavaScript. And I\'m more and more fascinated by their possibilities, which seem to have no limits.<br>Apart from work I\'m a woodworking lover, sometimes I\'m organizing urban games. I like to travel, and recently I was fascinated with off-road.';
    document.querySelector('.about__front--body p').innerHTML = 'I\'m starting my career as a Front-end developer. As many of beginers I have good, in my opinion, knowledge of HTML and CSS. I use HTML5 and CSS3 for my projects. Currently I\'m most fascinated by the capabilities of JavaScript. I am delighted with the new ES6 solutions that make it easier for me to implement my ideas.<br>In order to streamline my work, I use the Gulp toolkit and CSS preprocessors. My favorite is SASS and in fact I use it most often. I\'m also using CSS and JS libraries e.g. Twitter Bootstrap, jQuery, AngularJS.<br>I am constantly learning and discovering new opportunities to solve my problems every day. I would like to use my existing skills and join to projects in a professional development team. Such kind of work would allow me to use the experience and knowledge of my colleagues to further develop in this field. I think my artistic experience can help in an completely unexpected way, to solve the problems and issues we will be working on.<br>Because I\'m a musician, I\'d like to work on creating websites and applications for learning this art. I see huge capabilities in the educational applications market for learning music.<br>I am a creative and subbornly striving for purpose person. Playing on instrument teaches patience and perseverance. Stage performances make working under the pressure of time and stress normal. I make decisions easily and relentlessly pursue them.';

    document.querySelector('.works__describe').textContent = "My choosen works:";

    document.querySelector('#atiart h3').textContent = "Home site of music school";
    document.querySelector('#notes h3').textContent = "Education game Explore the Notes";
    document.querySelector('#clock h3').textContent = "JavaScript clock";
    document.querySelector('#myear h3').innerHTML = "Music Imagination Festival\'s site<br>-- in preparation --";
    document.querySelector('#map h3').textContent = "Active map of Poland";
    document.querySelector('#sailing h3').textContent = "Site template according to layout";

    document.querySelector('.about__front--git').innerHTML = 'My projects on GitHub:<br><a class="about__front--gitIcon" href="https://github.com/ladom?tab=repositories" target="_blank"><i class="fa fa-github"></i><br>github.com/ladom</a>';
    document.querySelector('.about__music--header h2').textContent = "Classical music";
    document.querySelector('.about__music--body p').innerHTML = 'I\'m a professional violinist. For nearly twenty years I have performed on many stages in Poland and abroad. For many years I worked also as a teacher at the Academy of Music in Wrocław. I have recorded a dozen CDs and DVDs, played hundreds of concerts as a soloist, chamber and orchestra musician.<br>Playing is like riding a bike - it is not forgotten. That is why I\'ll always be a musician and I\'ll always enjoy playing the violin.';
    document.querySelector('.about__hobby--header h2').textContent = "Passions";
    document.querySelector('.about__hobby--body p').innerHTML = 'How long I remember, I loved wood. When I was a child, I was spending hours hulling bark boats or sticking wooden constructions. Over time, I began to approach this more practically. Amateur, but with great success I manage to create small wooden trinkets, as well as large structures such as stairs in my home, terraces or terrace roof from wood. It invariably gives me a lot of fun and allows me to relax and rest.<br>Since I remember I also liked traveling. As a child I visited various parts of the world with my parents. Later, due to the music profession, I was able to visit a large number of amazing places. Often very exotic and rarely visited by tourists. For the few years, I\'m fascinated by driving off-road car. Off-road allows me to visit places that were once inaccessible and give me an incredible sense of independence and complete separation from daily affairs.<br>Besides this I\'m fortunate that I love both the violin and the programming, so the work is also a source of satisfaction and joy for me.';
    document.querySelector('.footer__contact').textContent = "Contact:";
    document.querySelector('.footer__contact--cv').href = "cv/andrzej_ladomirski_front_cv_english.pdf";

}

flag.addEventListener('click', translateCheck);

function translateCheck() {
    if (flag.classList.value === "english") {
        translateSite();
    } else if (flag.classList.value === "polish") {
        translateToPolish();
    }
}