// Animation is optional. The import is dynamic so a blocked or slow CDN never
// takes the form logic down with it: anim() is a no-op until anime.js lands.
var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var animate = null, stagger = null, createSpring = null;
function anim(target, opts) { if (motionOK && animate) return animate(target, opts); }

var loadStart = Date.now();
import('https://cdn.jsdelivr.net/npm/animejs@4.5.0/+esm').then(function (m) {
  animate = m.animate; stagger = m.stagger; createSpring = m.createSpring;
  // Entrance stagger only if the library arrived fast enough to not blink already-visible fields
  if (Date.now() - loadStart < 400) {
    anim('#rsvp-form .pixel-field, #rsvp-form .pixel-submit', {
      opacity: [0, 1],
      y: [-10, 0],
      delay: stagger(45, { start: 120 }),
      duration: 500,
      ease: 'outQuad'
    });
  }
}).catch(function () { /* form works without it */ });

var form     = document.getElementById('rsvp-form');
var submit   = document.getElementById('rsvp-submit');
var errorEl  = document.getElementById('rsvp-error');
var success  = document.getElementById('rsvp-success');
var attendEl = document.getElementById('rsvp-attending');
var sidEl    = document.getElementById('rsvp-sid');
var subjEl   = document.getElementById('rsvp-subject');
var partyEl  = document.getElementById('rsvp-party');
var guestsEl = document.getElementById('rsvp-guests');
var successMsg = document.getElementById('rsvp-success-msg');
var successSub = document.getElementById('rsvp-success-sub');

// One id per submission attempt so a retried send is recognizable as a duplicate in the sheet
function newSubmissionId() {
  if (sidEl) sidEl.value = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}
newSubmissionId();

// Declining hides the attending-only fields outright. They stay enabled so every
// submission carries the same set of keys (a sheet pipe wants stable columns);
// `required` moves with the choice so a hidden field can never block a send.
function setAttending(val) {
  var yes = val === 'yes';
  document.querySelectorAll('.attending-only').forEach(function (field) { field.hidden = !yes; });
  if (partyEl)  partyEl.required  = yes;
  if (guestsEl) guestsEl.required = yes;
}

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
      setAttending(val);
      errorEl.style.display = 'none';
      anim(btn, { scale: [1, 1.12, 1], duration: 340, ease: 'outQuad' });
    });
  });
});

function showSuccess(attending) {
  form.style.display = 'none';
  success.style.display = 'block';
  if (attending === 'no') {
    if (successMsg) successMsg.textContent = 'THANK YOU';
    if (successSub) successSub.innerHTML = "We'll miss you. Thank you for letting us know.<br>We'll send you the video.";
  } else {
    if (successMsg) successMsg.textContent = 'RSVP SENT';
    if (successSub) successSub.innerHTML = "Thank you. We can't wait to see you.<br>See you March 6, 2027.";
  }
  success.focus();
}

// Back from Formspree's own captcha page with ?sent=1: record it like an in-page success
try {
  if (/[?&]sent=1/.test(location.search)) {
    var pending = localStorage.getItem('rsvp-pending') || 'yes';
    localStorage.setItem('rsvp-sent', pending + ':' + Date.now());
    localStorage.removeItem('rsvp-pending');
    history.replaceState(null, '', location.pathname);
  }
} catch (_) {}

// A reload after a successful send shows the thank-you card again, not a blank form
try {
  var sent = localStorage.getItem('rsvp-sent');
  if (sent) showSuccess(sent.indexOf('no') === 0 ? 'no' : 'yes');
} catch (_) {}

// "Send another" starts clean: new id, empty fields, no lingering yes/no
var again = document.getElementById('rsvp-again');
if (again) again.addEventListener('click', function (e) {
  e.preventDefault();
  try { localStorage.removeItem('rsvp-sent'); } catch (_) {}
  form.reset();
  document.querySelectorAll('.yn-btn').forEach(function (b) {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  if (attendEl) attendEl.value = '';
  document.querySelectorAll('.attending-only').forEach(function (field) { field.hidden = false; });
  if (partyEl)  partyEl.required  = false;
  if (guestsEl) guestsEl.required = false;
  newSubmissionId();
  errorEl.style.display = 'none';
  success.style.display = 'none';
  form.style.display = '';
  submit.disabled = false;
  submit.removeAttribute('aria-busy');
  submit.textContent = 'SEND RSVP';
  var first = document.getElementById('rsvp-name');
  if (first) first.focus();
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorEl.style.display = 'none';

  var attending = attendEl ? attendEl.value : '';
  if (!attending) {
    // Show the box first so the alert is in the accessibility tree when its text lands
    errorEl.style.display = 'block';
    errorEl.querySelector('.msg').textContent = 'Please choose Attending or Declining.';
    errorEl.scrollIntoView({ block: 'nearest', behavior: motionOK ? 'smooth' : 'auto' });

    // UX/a11y: shake the toggle container and return focus to the first button
    var toggleContainer = document.querySelector('.yn-toggle');
    if (toggleContainer) {
      anim(toggleContainer, {
        translateX: [-5, 5, -5, 5, 0],
        duration: 400,
        ease: 'inOutQuad'
      });
    }
    return;
  }

  // One email per guest, not one hundred replies in a single Gmail thread
  if (subjEl) {
    var who = (document.getElementById('rsvp-name') || {}).value || 'a guest';
    subjEl.value = 'RSVP: ' + who.trim() + (attending === 'yes' ? ' (attending)' : ' (declining)');
  }

  submit.disabled = true;
  submit.setAttribute('aria-busy', 'true');
  submit.textContent = 'SENDING...';

  // Timeout so a hung connection never leaves the button dead
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
      showSuccess(attending);
      anim('#rsvp-success', {
        scale: [0.85, 1],
        opacity: [0, 1],
        ease: createSpring ? createSpring({ mass: 1, stiffness: 110, damping: 13 }) : 'outQuad',
        duration: 700
      });
      window.scrollTo({ top: 0, behavior: motionOK ? 'smooth' : 'auto' });
      try { localStorage.setItem('rsvp-sent', attending + ':' + Date.now()); } catch (_) {}
    } else {
      // Surface Formspree's own reason (422 validation, plan limits) instead of a generic line
      return res.json().catch(function () { return {}; }).then(function (body) {
        var detail = '';
        if (body && Array.isArray(body.errors) && body.errors.length && body.errors[0].message) {
          detail = ' (' + body.errors[0].message + ')';
        } else if (body && body.error) {
          detail = ' (' + body.error + ')';
        }
        if (/reCAPTCHA|AJAX/i.test(detail)) {
          var e2 = new Error('captcha'); e2.captcha = true; throw e2;
        }
        var err = new Error('Submit failed'); err.detail = detail; throw err;
      });
    }
  }).catch(function (err) {
    clearTimeout(timeoutId);
    if (err.captcha) {
      // Formspree wants its captcha page: let the browser post the same fields the normal way.
      try { localStorage.setItem('rsvp-pending', attending); } catch (_) {}
      submit.textContent = 'ONE MORE STEP...';
      form.submit();
      return;
    }
    submit.disabled = false;
    submit.removeAttribute('aria-busy');
    submit.textContent = 'SEND RSVP';
    errorEl.style.display = 'block';
    if (err.name === 'AbortError') {
      errorEl.querySelector('.msg').textContent = 'That took too long. It may still have gone through, so wait a minute before trying again, or email hello@sarahandalexforever.com.';
    } else {
      errorEl.querySelector('.msg').textContent = 'Something went wrong' + (err.detail || '') + '. Please try again, or email hello@sarahandalexforever.com.';
    }
    errorEl.style.display = 'block';
  });
});
