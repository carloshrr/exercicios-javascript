window.addEventListener('load', iniciar);

function iniciar() {
  var inputExercicio01 = document.querySelector('#inputExercicio01');
  inputExercicio01.addEventListener('keyup', monitorarInput);
}

function monitorarInput() {
  var spanExercicio01 = document.querySelector('#ex01');
  spanExercicio01.textContent = this.value.length;
}
