
// Sticky navbar effect
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backToTop').style.display = window.scrollY > 400 ? 'block' : 'none';
});

// Smooth scroll to top
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated counters
const counters = document.querySelectorAll('.counter');
let triggered = false;

function runCounters() {
  if (triggered) return;
  const section = document.getElementById('stats');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight) {
    triggered = true;
    counters.forEach(counter => {
      let value = +counter.getAttribute('data-target');
      let count = 0;
      const increment = value / 100;
      const updateCount = () => {
        if (count < value) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = value;
        }
      };
      updateCount();
    });
  }
}
window.addEventListener('scroll', runCounters);

// Simple form validation
document.querySelector("form").addEventListener("submit", function(e) {
  const name = this.querySelector("input[placeholder='Your Name']");
  const email = this.querySelector("input[placeholder='Your Email']");
  const message = this.querySelector("textarea");

  if (!name.value || !email.value || !message.value) {
    alert("Please fill out all required fields.");
    e.preventDefault();
  }
});

// Dark mode toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
