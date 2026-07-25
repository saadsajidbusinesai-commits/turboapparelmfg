document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('nav.main-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var form = document.getElementById('quoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('q-name').value.trim();
      var product = document.getElementById('q-product').value;
      var qty = document.getElementById('q-qty').value.trim();
      var msg = document.getElementById('q-message').value.trim();

      var lines = [
        'Hi Turbo Apparel MFG, I would like a quote.',
        'Name: ' + (name || '-'),
        'Product type: ' + (product || '-'),
        'Quantity: ' + (qty || '-'),
      ];
      if (msg) lines.push('Details: ' + msg);

      var text = encodeURIComponent(lines.join('\n'));
      window.open('https://wa.me/923107834642?text=' + text, '_blank');
    });
  }
});
