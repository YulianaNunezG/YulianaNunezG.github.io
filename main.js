let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style = "color: #902e68;">Soy estudiante de Ing. Mecatrónica, comparto el proceso de desarrollo de mis proyectos</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
