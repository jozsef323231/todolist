const teendoBevitel = document.getElementById('teendoBevitel');
const hozzaadGomb = document.getElementById('hozzaadGomb');
const teendoLista = document.getElementById('teendoLista');

function teendoHozzaadas() {
    const szoveg = teendoBevitel.value.trim();
    if (!szoveg) return;

    const teendo = document.createElement('div');
    teendo.className = 'teendo';
    
    teendo.innerHTML = `
        <span>${szoveg}</span>
        <button class="torles-gomb">🗑️</button>
    `;
    
    teendo.querySelector('.torles-gomb').onclick = () => {
        teendo.classList.add('torles');
        setTimeout(() => {
            teendo.remove();
            uresEllenorzes();
        }, 500);
    };
    
    const uresUzenet = teendoLista.querySelector('.ures');
    if (uresUzenet) uresUzenet.remove();
    
    teendoLista.appendChild(teendo);
    teendoBevitel.value = '';
}

function uresEllenorzes() {
    if (teendoLista.children.length === 0) {
        const uresUzenet = document.createElement('div');
        uresUzenet.className = 'ures';
        uresUzenet.textContent = 'Még nincsenek feladatok. Adj hozzá egyet!';
        teendoLista.appendChild(uresUzenet);
    }
}

hozzaadGomb.onclick = teendoHozzaadas;
teendoBevitel.onkeypress = (esemeny) => {
    if (esemeny.key === 'Enter') teendoHozzaadas();
};