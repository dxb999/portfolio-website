const portfolioValue = 6562.81;
const portfolioChange = 0.032;
document.getElementById('portfolio-value').textContent = `${portfolioValue.toLocaleString()} درهم`;
document.getElementById('portfolio-change').textContent = `${(portfolioChange * 100).toFixed(3)}% اليوم`;

function updateMarketStatus() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const uaeTime = new Date(utc + (4 * 60 * 60 * 1000)); // توقيت الإمارات UTC+4

  const hours = uaeTime.getHours();
  const minutes = uaeTime.getMinutes().toString().padStart(2, '0');
  const day = uaeTime.getDate().toString().padStart(2, '0');
  const month = (uaeTime.getMonth() + 1).toString().padStart(2, '0');
  const year = uaeTime.getFullYear();

  const marketOpen = (hours >= 10 && hours < 14);

  const statusText = document.getElementById("market-status-text");
  const statusDot = document.getElementById("status-dot");
  const marketTime = document.getElementById("market-time");

  if (marketOpen) {
    statusText.textContent = "السوق مفتوح";
    statusDot.style.backgroundColor = "#00e676";
  } else {
    statusText.textContent = "السوق مغلق";
    statusDot.style.backgroundColor = "#ff1744";
  }

  marketTime.textContent = `سعر السوق اعتبارًا من ${hours}:${minutes} UAE ${day}/${month}/${year}`;
}

updateMarketStatus();
setInterval(updateMarketStatus, 1000);

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const nav = document.getElementById('bottom-nav');
  if (window.scrollY > lastScrollY) {
    nav.classList.add('hide');
  } else {
    nav.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});
