const inputs = document.querySelectorAll('.controls input');

function handleInput() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleInput));
// debounce in more serious app
inputs.forEach(input => input.addEventListener('mousemove', handleInput));
