const GRUPY_OPTIONS = ['1','2','3','4','5','6','7','8','9','10','11'];

const KLASY_OPTIONS = [
  'B','Ba','Bi','Bp','Bz','dr','E','K','L','Ls','Lz',
  'M','N','Ps','R','S','T','Ti','Tk','Tp','W','wp','ws','wt','wz','\u0141'
];

const selectedPowiats = new Set();
const selectedGrupy   = new Set();
const selectedKlasy   = new Set();

function buildMultiSelect(listId, searchId, tagsId, options, selectedSet, onChangeCallback) {
  const listEl   = document.getElementById(listId);
  const searchEl = document.getElementById(searchId);
  const tagsEl   = document.getElementById(tagsId);

  function render(filter) {
    const q = (filter || '').toLowerCase();
    listEl.innerHTML = '';
    const visible = options.filter(o => o.toLowerCase().includes(q));
    if (visible.length === 0) {
      listEl.innerHTML = '<div class="no-options">Brak wynik\u00f3w</div>';
      return;
    }
    visible.forEach(opt => {
      const div = document.createElement('div');
      div.className = 'option-item' + (selectedSet.has(opt) ? ' selected' : '');
      div.innerHTML = '<input type="checkbox" ' + (selectedSet.has(opt) ? 'checked' : '') + ' /><span>' + opt + '</span>';
      div.addEventListener('click', () => {
        if (selectedSet.has(opt)) {
          selectedSet.delete(opt);
          div.classList.remove('selected');
          div.querySelector('input').checked = false;
        } else {
          selectedSet.add(opt);
          div.classList.add('selected');
          div.querySelector('input').checked = true;
        }
        renderTags();
        if (onChangeCallback) onChangeCallback();
      });
      listEl.appendChild(div);
    });
  }

  function renderTags() {
    tagsEl.innerHTML = '';
    selectedSet.forEach(val => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.innerHTML = val + '<button title="Usu\u0144" onclick="event.stopPropagation()">x</button>';
      tag.querySelector('button').addEventListener('click', () => {
        selectedSet.delete(val);
        render(searchEl.value);
        renderTags();
        if (onChangeCallback) onChangeCallback();
      });
      tagsEl.appendChild(tag);
    });
  }

  searchEl.addEventListener('input', () => render(searchEl.value));
  render('');
  return { render, renderTags };
}

function showMapMsg(title, body, type) {
  const el = document.getElementById('map-msg');
  el.className = type || 'info';
  document.getElementById('map-msg-title').textContent = title;
  document.getElementById('map-msg-body').textContent  = body || '';
  el.style.display = 'block';
}
function hideMapMsg() { document.getElementById('map-msg').style.display = 'none'; }
function showSpinner() { document.getElementById('spinner').style.display = 'block'; }
function hideSpinner() { document.getElementById('spinner').style.display = 'none'; }

const powiatOptions = [...new Set(POWIATY.map(p => p.powiat))].sort((a, b) => a.localeCompare(b, 'pl'));
const powiatCtrl = buildMultiSelect('list-powiat', 'search-powiat', 'tags-powiat', powiatOptions, selectedPowiats);
const grupaCtrl  = buildMultiSelect('list-grupa',  'search-grupa',  'tags-grupa',  GRUPY_OPTIONS, selectedGrupy);
const klasaCtrl  = buildMultiSelect('list-klasa',  'search-klasa',  'tags-klasa',  KLASY_OPTIONS, selectedKlasy);
