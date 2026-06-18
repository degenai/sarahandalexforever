import { animate, stagger, createSpring } from 'https://cdn.jsdelivr.net/npm/animejs@4/+esm';

// Entrance: stagger form fields and submit button in
animate('#rsvp-form .pixel-field, #rsvp-form .pixel-submit', {
  opacity: [0, 1],
  y: [-10, 0],
  delay: stagger(45, { start: 120 }),
  duration: 500,
  ease: 'outQuad'
});

// Yes/No toggle with bounce on click
document.querySelectorAll('.yn-toggle').forEach(function (toggle) {
  var hidden = document.getElementById(toggle.getAttribute('data-toggle'));
  toggle.querySelectorAll('.yn-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggle.querySelectorAll('.yn-btn').forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      if (hidden) hidden.value = btn.getAttribute('data-val');
      animate(btn, {
        scale: [1, 1.12, 1],
        duration: 340,
        ease: 'outQuad'
      });
    });
  });
});

// AJAX submit, keeps guests on the page, shows pixel-art success state
var form    = document.getElementById('rsvp-form');
var submit  = document.getElementById('rsvp-submit');
var errorEl = document.getElementById('rsvp-error');
var success = document.getElementById('rsvp-success');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorEl.style.display = 'none';

  if (!document.getElementById('rsvp-attending').value) {
    errorEl.querySelector('.msg').textContent = 'Please choose Attending or Declining.';
    errorEl.style.display = 'block';
    return;
  }

  submit.disabled = true;
  submit.textContent = 'SENDING...';

  // Security enhancement: Add timeout to prevent hanging connections
  var controller = new AbortController();
  var timeoutId = setTimeout(function () { controller.abort(); }, 15000);

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' },
    signal: controller.signal
  }).then(function (res) {
    clearTimeout(timeoutId);
    if (res.ok) {
      form.style.display = 'none';
      success.style.display = 'block';
      animate('#rsvp-success', {
        scale: [0.85, 1],
        opacity: [0, 1],
        ease: createSpring({ mass: 1, stiffness: 110, damping: 13 }),
        duration: 700
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      throw new Error('Submit failed');
    }
  }).catch(function (err) {
    clearTimeout(timeoutId);
    submit.disabled = false;
    submit.textContent = 'SEND RSVP';
    if (err.name === 'AbortError') {
      errorEl.querySelector('.msg').textContent = 'The request timed out. Please try again later.';
    } else {
      errorEl.querySelector('.msg').textContent = 'Something went wrong. Please try again, or email us directly.';
    }
    errorEl.style.display = 'block';
  });
});
