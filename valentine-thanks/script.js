// Minimal interactive script — edit the `friends` array below to change content
const friends = [
  {name: 'Alex', msg: "Thanks for the laughs."},
  {name: 'Taylor', msg: "So grateful for you."},
  {name: 'Jordan', msg: "You make life brighter."},
  {name: 'Casey', msg: "Big hugs!"},
  {name: 'Riley', msg: "You're awesome."},
  {name: 'Sam', msg: "Thanks for being you."},
  {name: 'Avery', msg: "Love your energy."},
  {name: 'Morgan', msg: "Couldn't ask for better."},
  {name: 'Jamie', msg: "You're the best."},
  {name: 'Dakota', msg: "Grateful today and always."},
  {name: 'Quinn', msg: "Smiles because of you."},
  {name: 'Blake', msg: "Heart you lots."},
];

const cardsEl = document.getElementById('cards');
const confettiBtn = document.getElementById('confettiBtn');

function makeCard(f){
  const el = document.createElement('article');
  el.className = 'card';
  el.innerHTML = `<div>
      <h3 class="name">${escapeHtml(f.name)}</h3>
      <p class="msg">${escapeHtml(f.msg)}</p>
    </div>
    <div class="heart">❤️</div>`;
  el.addEventListener('click', ()=>{
    popCard(el);
    fireSimpleConfetti(12);
  });
  return el;
}

function render(){
  cardsEl.innerHTML = '';
  friends.forEach(f=>cardsEl.appendChild(makeCard(f)));
}

// tiny visual pop
function popCard(el){
  el.animate([{transform:'scale(1)'},{transform:'scale(1.03)'},{transform:'scale(1)'}],{duration:320,easing:'cubic-bezier(.2,.8,.2,1)'});
}

// --- simple confetti (canvas) ---
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let confettiParticles = [];

function resizeCanvas(){
  canvas.width = innerWidth; canvas.height = innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function rand(min,max){return Math.random()*(max-min)+min}

function spawnConfetti(n){
  for(let i=0;i<n;i++){
    confettiParticles.push({
      x: rand(0,canvas.width),
      y: -10 - rand(0,300),
      vx: rand(-1.5,1.5),
      vy: rand(2,6),
      r: rand(6,10),
      color: `hsl(${~~rand(330,360)},80%,60%)`
    });
  }
}

function step(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettiParticles.forEach((p,i)=>{
    p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.vx *= 0.99;
    ctx.beginPath(); ctx.fillStyle = p.color; ctx.ellipse(p.x,p.y,p.r,p.r*0.6,0,0,Math.PI*2); ctx.fill();
    if(p.y - p.r > canvas.height) confettiParticles.splice(i,1);
  });
  requestAnimationFrame(step);
}
requestAnimationFrame(step);

function fireSimpleConfetti(n=25){ spawnConfetti(n); }

// UI hook
confettiBtn.addEventListener('click', ()=>{ fireSimpleConfetti(60); confettiBtn.animate([{transform:'translateY(0)'},{transform:'translateY(-4px)'},{transform:'translateY(0)'}],{duration:320}); });

// small autoplay pulse on load
window.addEventListener('load', ()=>{ render(); fireSimpleConfetti(30); });

// helper to escape user-editable strings (keeps placeholders safe)
function escapeHtml(s){ return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); }

// Public tiny helper: call updateFriends([...]) in console to change content quickly
window.updateFriends = function(arr){ if(Array.isArray(arr)){ friends.length = 0; friends.push(...arr); render(); }};
