function mult(a, b) {
  return a * b;
}

const multBtn = document.getElementById('multBtn');
multBtn.addEventListener('click', function () {
  const a = Number(document.getElementById('valueA').value);
  const b = Number(document.getElementById('valueB').value);
  document.getElementById('result').innerText = mult(a, b);
});