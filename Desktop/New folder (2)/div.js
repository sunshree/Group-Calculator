function divide(a, b) {
  if (b === 0) {
    return 'Error: divide by zero';
  }
  return a / b;
}

const divBtn = document.getElementById('divBtn');
divBtn.addEventListener('click', function () {
  const a = Number(document.getElementById('valueA').value);
  const b = Number(document.getElementById('valueB').value);
  document.getElementById('result').innerText = divide(a, b);
});