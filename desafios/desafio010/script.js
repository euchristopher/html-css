// Seleciona o elemento com o id "nav"
const nav = document.getElementById('nav');

// Adiciona um evento de click ao elemento "nav"
nav.addEventListener('click', () => {
  // Seleciona o elemento com o id "aside"
  const aside = document.getElementById('aside');

  // Verifica se o elemento "aside" está visível
  if (aside.style.display === 'block') {
    // Se estiver visível, esconde o elemento
    aside.style.display = 'none';
  } else {
    // Se não estiver visível, mostra o elemento
    aside.style.display = 'block';
  }
});

// Seleciona o elemento com o id "versoes-list"
const versoesList = document.getElementById('versoes-list');

// Cria um array com as versões do Android
const versoes = [
  'Android 1.0',
  'Android 1.1',
  'Android 1.5',
  'Android 1.6',
  'Android 2.0',
  'Android 2.1',
  'Android 2.2',
  'Android 2.3',
  'Android 3.0',
  'Android 3.1',
  'Android 3.2',
  'Android 4.0',
  'Android 4.1',
  'Android 4.2',
  'Android 4.3',
  'Android 4.4',
  'Android 5.0',
  'Android 5.1',
  'Android 6.0',
  'Android 7.0',
  'Android 7.1',
  'Android 8.0',
  'Android 8.1',
  'Android 9.0',
  'Android 10.0',
  'Android 11.0',
  'Android 12.0',
];