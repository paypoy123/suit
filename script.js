const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = 'Game Suit';
root.appendChild(h1);

const div1 = document.createElement('div');
div1.classList.add('container');
root.appendChild(div1);

const h2 = document.createElement('h2');
h2.classList.add('subtitle');
h2.textContent = 'Click tombol di bawah untuk suit';
div1.appendChild(h2);

const button1 = document.createElement('button');
button1.classList.add('choice');
button1.textContent = 'Click disini';
div1.appendChild(button1);

const h3 = document.createElement('h3');
h3.classList.add('result');
h3.textContent = '';
div1.appendChild(h3);

const div2 = document.createElement('div');
div2.classList.add('container-image');
div1.appendChild(div2);

const div3 = document.createElement('div');
div3.classList.add('wrapper-image');
div2.appendChild(div3);

const h3_2 = document.createElement('h3');
h3_2.classList.add('player');
h3_2.textContent = 'Kamu';
div3.appendChild(h3_2);

const img1 = document.createElement('img');
img1.src = '/assets/jempol.jpg';
div3.appendChild(img1);

const h3_3 = document.createElement('h3');
h3_3.classList.add('player-choice');
h3_3.textContent = '';
div3.appendChild(h3_3);

const h3_4 = document.createElement('h3');
h3_4.classList.add('vs');
h3_4.textContent = 'VS';
div2.appendChild(h3_4);

const div4 = document.createElement('div');
div4.classList.add('wrapper-image');
div2.appendChild(div4);

const h3_5 = document.createElement('h3');
h3_5.classList.add('computer');
h3_5.textContent = 'Komputer';
div4.appendChild(h3_5);

const img2 = document.createElement('img');
img2.src = '/assets/jempol.jpg';
div4.appendChild(img2);

const h3_6 = document.createElement('h3');
h3_6.classList.add('computer-choice');
h3_6.textContent = '';
div4.appendChild(h3_6);

// Elemen untuk hasil total
const div5 = document.createElement('div');
div5.classList.add('container-result');
root.appendChild(div5);

const h3Menang = document.createElement('h3');
h3Menang.classList.add('result-menang');
h3Menang.textContent = 'Menang: 0';
div5.appendChild(h3Menang);

const h3Seri = document.createElement('h3');
h3Seri.classList.add('result-seri');
h3Seri.textContent = 'Seri: 0';
div5.appendChild(h3Seri);

const h3Kalah = document.createElement('h3');
h3Kalah.classList.add('result-kalah');
h3Kalah.textContent = 'Kalah: 0';
div5.appendChild(h3Kalah);

const images = [
  '/assets/jempol.jpg',
  '/assets/telunjuk.jpg',
  '/assets/kelingking.jpg',
];

let totalMenang = 0;
let totalSeri = 0;
let totalKalah = 0;

button1.addEventListener('click', () => {
  const playerChoice = Math.floor(Math.random() * images.length);
  const computerChoice = Math.floor(Math.random() * images.length);

  const spinDuration = 1500; // Total spin duration in milliseconds
  const startTime = performance.now();

  function spin() {
    const elapsedTime = performance.now() - startTime;
    const progress = Math.min(elapsedTime / spinDuration, 1);

    const randomPlayerChoice = Math.floor(Math.random() * images.length);
    const randomComputerChoice = Math.floor(Math.random() * images.length);

    img1.src = images[randomPlayerChoice];
    img2.src = images[randomComputerChoice];

    if (progress < 1) {
      requestAnimationFrame(spin);
    } else {
      // Set the final choices
      img1.src = images[playerChoice];
      img2.src = images[computerChoice];

      let playerChoiceText = images[playerChoice].split('/')[2].split('.')[0];
      playerChoiceText =
        playerChoiceText.charAt(0).toUpperCase() + playerChoiceText.slice(1);
      h3_3.textContent = playerChoiceText;

      let computerChoiceText = images[computerChoice]
        .split('/')[2]
        .split('.')[0];
      computerChoiceText =
        computerChoiceText.charAt(0).toUpperCase() +
        computerChoiceText.slice(1);
      h3_6.textContent = computerChoiceText;

      if (playerChoice === computerChoice) {
        h3.textContent = 'Seri';
        totalSeri++;
      } else if (
        (playerChoice === 0 && computerChoice === 1) ||
        (playerChoice === 1 && computerChoice === 2) ||
        (playerChoice === 2 && computerChoice === 0)
      ) {
        h3.textContent = 'Kamu Menang';
        totalMenang++;
      } else {
        h3.textContent = 'Kamu Kalah';
        totalKalah++;
      }

      h3Menang.textContent = `Menang: ${totalMenang}`;
      h3Seri.textContent = `Seri: ${totalSeri}`;
      h3Kalah.textContent = `Kalah: ${totalKalah}`;
    }
  }

  requestAnimationFrame(spin);
});
