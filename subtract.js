function sub(a, b) {
  return a - b;
}

const subBtn = document.getElementById('subBtn');
subBtn.addEventListener('click', function () {
  const a = Number(document.getElementById('valueA').value);
  const b = Number(document.getElementById('valueB').value);
  document.getElementById('result').innerText = sub(a, b);
});