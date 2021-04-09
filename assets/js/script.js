var app = document.getElementById('typeIt');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('واجهات مستخدم سريعة ومتجاوبة')
    .pauseFor(2500)
    .deleteAll()
    .typeString('تصاميم واجهات جذابة')
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('<strong>رائعة تناسب احتياجاتك</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>تواصل معي الآن</strong>')
    .pauseFor(2500)
    .start();