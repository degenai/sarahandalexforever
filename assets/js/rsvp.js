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

    // UX/a11y: shake the toggle container and return focus to the first button
    var toggleContainer = document.querySelector('.yn-toggle');
    if (toggleContainer) {
      animate(toggleContainer, {
        translateX: [-5, 5, -5, 5, 0],
        duration: 400,
        easing: 'easeInOutQuad'
      });
      var firstBtn = toggleContainer.querySelector('.yn-btn');
      if (firstBtn) firstBtn.focus();
    }
    return;
  }

  submit.disabled = true;
  submit.setAttribute('aria-busy', 'true');
  submit.textContent = 'SENDING...';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function (res) {
    if (res.ok) {
      submit.removeAttribute('aria-busy');
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
  }).catch(function () {
    submit.disabled = false;
    submit.removeAttribute('aria-busy');
    submit.textContent = 'SEND RSVP';
    errorEl.querySelector('.msg').textContent = 'Something went wrong. Please try again, or email us directly.';
    errorEl.style.display = 'block';
  });
});
