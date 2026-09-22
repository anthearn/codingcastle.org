(() => {
  // London is on GMT at midnight on 1 March 2027.
  const launch = Date.parse('2027-03-01T00:00:00Z');
  const elements = ['days', 'hours', 'minutes', 'seconds'].map(id => document.getElementById(id));
  let interval;
  function update() {
    const remaining = Math.max(0, Math.ceil((launch - Date.now()) / 1000));
    const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
    elements.forEach((element, index) => { element.textContent = String(values[index]).padStart(index === 0 ? 3 : 2, '0'); });
    if (remaining === 0) {
      document.getElementById('launch-heading').textContent = 'THE ADVENTURE BEGINS';
      if (interval) clearInterval(interval);
    }
  }
  update();
  if (Date.now() < launch) interval = setInterval(update, 1000);
  document.addEventListener('visibilitychange', update);
})();
