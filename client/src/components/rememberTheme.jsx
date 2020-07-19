export default function remember(state) {
  const rememberMode = state;
  localStorage.setItem('rememberMode', rememberMode);
}
