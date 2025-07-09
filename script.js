const entryInput = document.getElementById('current-entry');
const save = document.getElementById('saveButton');
const entriesContainer = document.getElementById('entriesContainer');

function getEntries() {
    return JSON.parse(localStorage.getItem('entries')) || [];
}

function saveEntry() {
  const text = entryInput.value.trim();
  if (text) {
    const entries = getEntries();
    entries.unshift({ text, date: new Date().toLocaleString() });
    localStorage.setItem('entries', JSON.stringify(entries));
    entryInput.value = '';
    displayEntries();
  }
}

function displayEntries() {
    const entries = getEntries();
    entriesContainer.innerHTML = ''; // Clear previous entries
    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'entry';
        entryDiv.innerHTML = `<p>${entry.text}</p><small>${new Date(entry.date).toLocaleString()}</small>`;
        entriesContainer.appendChild(entryDiv);
    });
}

save.addEventListener('click', saveEntry);
window.addEventListener('load', () => {
    displayEntries();
});