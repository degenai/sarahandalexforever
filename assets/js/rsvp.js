import { animate, stagger, createSpring } from 'https://cdn.jsdelivr.net/npm/animejs@4/+esm';

// Respect OS reduced-motion: every tween below goes through anim(), which becomes a no-op
var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function anim(target, opts) { if (motionOK) return animate(target, opts); }

// Entrance: stagger form fields and submit button in
anim('#rsvp-form .pixel-field, #rsvp-form .pixel-submit', {
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
      var val = btn.getAttribute('data-val');
      if (hidden) hidden.value = val;

      var attendingFields = document.querySelectorAll('.attending-only');
      if (val === 'no') {
        attendingFields.forEach(function(field) {
          field.style.opacity = '0.4';
          field.style.transition = 'opacity 0.3s';
          field.style.pointerEvents = 'none';
          field.querySelectorAll('input, select, textarea').forEach(function(input) {
            input.disabled = true;
          });
        });
      } else {
        attendingFields.forEach(function(field) {
          field.style.opacity = '1';
          field.style.pointerEvents = 'auto';
          field.querySelectorAll('input, select, textarea').forEach(function(input) {
            input.disabled = false;
          });
        });
      }

      anim(btn, {
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

// One id per page load so a retried send can be recognized as a duplicate in the sheet
var sidEl = document.getElementById('rsvp-sid');
if (sidEl) sidEl.value = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);

// A reload after a successful send shows the thank-you card again, not a blank form
try {
  if (localStorage.getItem('rsvp-sent')) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
} catch (_) {}
var again = document.getElementById('rsvp-again');
if (again) again.addEventListener('click', function (e) {
  e.preventDefault();
  try { localStorage.removeItem('rsvp-sent'); } catch (_) {}
  success.style.display = 'none';
  form.style.display = '';
  submit.disabled = false;
  submit.textContent = 'SEND RSVP';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorEl.style.display = 'none';

  if (!document.getElementById('rsvp-attending').value) {
    errorEl.querySelector('.msg').textContent = 'Please choose Attending or Declining.';
    errorEl.style.display = 'block';

    // UX/a11y: shake the toggle container and return focus to the first button
    var toggleContainer = document.querySelector('.yn-toggle');
    if (toggleContainer) {
      anim(toggleContainer, {
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

  // Security enhancement: Add timeout to prevent hanging connections
  var controller = new AbortController();
  var timeoutId = setTimeout(function () { controller.abort(); }, 30000);

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' },
    signal: controller.signal
  }).then(function (res) {
    clearTimeout(timeoutId);
    if (res.ok) {
      submit.removeAttribute('aria-busy');
      form.style.display = 'none';
      success.style.display = 'block';
      anim('#rsvp-success', {
        scale: [0.85, 1],
        opacity: [0, 1],
        ease: createSpring({ mass: 1, stiffness: 110, damping: 13 }),
        duration: 700
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      try { localStorage.setItem('rsvp-sent', String(Date.now())); } catch (_) {}
    } else {
      // Surface Formspree's own reason (422 validation, plan limits) instead of a generic line
      return res.json().catch(function () { return {}; }).then(function (body) {
        var detail = '';
        if (body && Array.isArray(body.errors) && body.errors.length && body.errors[0].message) {
          detail = ' (' + body.errors[0].message + ')';
        } else if (body && body.error) {
          detail = ' (' + body.error + ')';
        }
        var e = new Error('Submit failed'); e.detail = detail; throw e;
      });
    }
  }).catch(function (err) {
    clearTimeout(timeoutId);
    submit.disabled = false;
    submit.removeAttribute('aria-busy');
    submit.textContent = 'SEND RSVP';
    if (err.name === 'AbortError') {
      errorEl.querySelector('.msg').textContent = 'That took too long. It may still have gone through, so wait a minute before trying again, or email hello@sarahandalexforever.com.';
    } else {
      errorEl.querySelector('.msg').textContent = 'Something went wrong' + (err.detail || '') + '. Please try again, or email hello@sarahandalexforever.com.';
    }
    errorEl.style.display = 'block';
  });
});
