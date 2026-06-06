// Custom cursor
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Keyboard 3D mouse parallax
  const keyboard = document.getElementById('mainKeyboard');
  document.addEventListener('mousemove', e => {
    const rx = (e.clientY / window.innerHeight - 0.5) * 20;
    const ry = (e.clientX / window.innerWidth - 0.5) * -20;
    if (keyboard) {
      keyboard.style.transform = `rotateX(${28 + rx * 0.3}deg) rotateY(${-8 + ry * 0.3}deg) rotateZ(2deg)`;
    }
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const bars = document.querySelectorAll('.stat-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // Bar animation
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        setTimeout(() => {
          bar.style.width = bar.dataset.width;
        }, 200);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => barObserver.observe(bar));

  // RGB mode selector
  document.querySelectorAll('.rgb-mode').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.rgb-mode').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Key press effect
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      key.style.transform = 'translateY(2px)';
      setTimeout(() => { key.style.transform = ''; }, 120);
    });
  });