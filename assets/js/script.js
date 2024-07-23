const innImg = document.getElementById('inn-img');
const movingImg = document.getElementById('moving-img');
const shakeIntensity = 10; // Intensitas getaran (dalam piksel)

innImg.addEventListener('mousemove', function(e) {
    const containerRect = innImg.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    const imgWidth = movingImg.offsetWidth;
    const imgHeight = movingImg.offsetHeight;
    const halfWidth = containerRect.width / 2;
    const halfHeight = containerRect.height / 2;

    // Perhitungan posisi relatif terhadap tengah container
    const relativeX = (mouseX - halfWidth) / halfWidth;
    const relativeY = (mouseY - halfHeight) / halfHeight;

    // Transformasi berdasarkan posisi relatif
    const moveX = relativeX *-20;
    const moveY = relativeY *-20;

    // Transformasi gambar berdasarkan perubahan posisi
    movingImg.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Jika mencapai batas area, tambahkan animasi getaran balik ke tengah
    if (Math.abs(relativeX) >= 1 || Math.abs(relativeY) >= 1) {
        innImg.classList.add('shake');
    } else {
        innImg.classList.remove('shake');
    }
});

innImg.addEventListener('mouseleave', function() {
    // Mengembalikan gambar ke posisi awal saat mouse meninggalkan area
    movingImg.style.transform = 'translate(0, 0)';
    innImg.classList.remove('shake');
});

//TYPING TEXT\\

const elements = [
  { element: document.querySelector('.typed-text'), words: ["selalu melayani pelanggan dengan sangat baik dan cepat merespon.", "kenyamanan pelanggan sangat di utamakan dalam bertransaksi"] },
  { element: document.querySelector('.typed-text2'), words: ["proses transaksi cepat...", "terpercaya sejak 2020...", "kenyamanan di utamakan...", "selalu fast respon..."] },
  { element: document.querySelector('.typed-'), words: ["Materi Up-to Date", "Terfokus Pada Materi Praktek", "Instruktur Berpengalaman", "Sertifikat Kelulusan", "Konsultasi Sepuasnya", "Komunitas Eksklusif"] }
];

let wordIndices = [0, 0, 0];
let charIndices = [0, 0, 0];
let isDeletings = [false, false, false];
let delays = [0, 0, 0];
const deleteDelay = 2000; // 2 seconds delay before deleting

function type(elementIndex) {
  const currentWord = elements[elementIndex].words[wordIndices[elementIndex]];
  const typedTextElement = elements[elementIndex].element;

  if (isDeletings[elementIndex]) {
    typedTextElement.textContent = currentWord.substring(0, charIndices[elementIndex]--);
    if (charIndices[elementIndex] < 0) {
      isDeletings[elementIndex] = false;
      wordIndices[elementIndex] = (wordIndices[elementIndex] + 1) % elements[elementIndex].words.length;
      delays[elementIndex] = 50;
    } else {
      delays[elementIndex] = 50;
    }
  } else {
    typedTextElement.textContent = currentWord.substring(0, charIndices[elementIndex]++);
    if (charIndices[elementIndex] > currentWord.length) {
      isDeletings[elementIndex] = true;
      delays[elementIndex] = deleteDelay; // Delay before starting to delete
    } else {
      delays[elementIndex] = 50;
    }
  }

  setTimeout(() => type(elementIndex), delays[elementIndex]);
}

// Initialize typing for all elements
for (let i = 0; i < elements.length; i++) {
  type(i);
}
document.getElementById('toggleLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  const content = document.getElementById('content-show');
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    this.textContent = 'Hide List';
  } else {
    content.style.display = 'none';
    this.textContent = 'Pelajari lebih lanjut >>';
  }
});
const charts = document.querySelectorAll('.getar');
const resetDelay = 300;
charts.forEach(chart => {
  chart.addEventListener('mousemove', function(e) {
    const containerRect = chart.getBoundingClientRect();
    const mouseX1 = e.clientX - containerRect.left;
    const mouseY1 = e.clientY - containerRect.top;
    const halfWidth = containerRect.width / 2;
    const halfHeight = containerRect.height / 2;

    // Perhitungan posisi relatif terhadap tengah container
    const relativeX = (mouseX1 - halfWidth) / halfWidth;
    const relativeY = (mouseY1 - halfHeight) / halfHeight;

    // Transformasi berdasarkan posisi relatif
    const moveX = relativeX * -10;
    const moveY = relativeY * -10;

    // Transformasi gambar berdasarkan perubahan posisi
    chart.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Jika mencapai batas area, tambahkan animasi getaran balik ke tengah

  });

  chart.addEventListener('mouseleave', function() {
    setTimeout(() => {
      chart.style.transform = 'translate(0, 0)';
    }, resetDelay);
  });
});
function scrollToChart() {
  var element = document.getElementById('chart');
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToChart() {
  var element = document.getElementById('chart');
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}
function gotowhatsapp() {
  window.open('https://wa.me/6282274241198', '_blank');
  }
  function tele() {
  window.open('https://t.me/saluran2024', '_blank');
  }
function garapan() {
  window.open('https://chat.whatsapp.com/KWzES32zUCn3Zy8JPCExIM', '_blank');
}
  function reput() {
  window.open('https://www.facebook.com/100001374587807/posts/5027837120605391/', '_blank');
  }
  function gotofb() {
  window.open('https://facebook.com/aldii.xf', '_blank');
}


