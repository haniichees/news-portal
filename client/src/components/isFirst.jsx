export default function isFirst() {
  if (localStorage.getItem('firstTime') === 'false') {
  } else {
    localStorage.setItem('firstTime', 'false');
    localStorage.setItem('rememberMode', 'dark');
  }
}
