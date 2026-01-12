// year
document.getElementById('year').textContent = new Date().getFullYear();

// theme toggle (icon button) and accessibility
const THEME_KEY = 'wth_theme';
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme){
  if(theme === 'dark') root.setAttribute('data-theme','dark');
  else root.removeAttribute('data-theme');
  if(toggle) toggle.setAttribute('aria-pressed', theme==='dark');
}

function getStoredTheme(){
  try { return localStorage.getItem(THEME_KEY); } catch(e){ return null; }
}
let theme = getStoredTheme() || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(theme);

if(toggle){
  toggle.addEventListener('click', ()=>{
    theme = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(THEME_KEY, theme); } catch(e){}
    applyTheme(theme);
  });
}
