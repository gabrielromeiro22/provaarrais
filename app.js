// ---- State ----
let mode = 'full';
let quizQuestions = [];
let currentIdx = 0;
let answered = [];
let chatHistory = [];
let chatOpen = false;

// ---- Populate tema dropdown ----
const dd = document.getElementById('tema-dropdown');
TEMAS.forEach(t => {
  const o = document.createElement('option');
  o.value = t;
  o.textContent = t;
  dd.appendChild(o);
});

// ---- Mode selection ----
function selectMode(el) {
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  mode = el.dataset.mode;
  document.getElementById('tema-select').style.display = mode === 'tema' ? 'block' : 'none';
}

// ---- Start quiz ----
function startQuiz() {
  let pool = [...TODAS_QUESTOES];

  if (mode === 'full') {
    quizQuestions = shuffleArray(pool).slice(0, 40);
  } else if (mode === 'quick') {
    quizQuestions = shuffleArray(pool).slice(0, 20);
  } else if (mode === 'tema') {
    const tema = dd.value;
    if (!tema) { alert('Escolha um tema para continuar.'); return; }
    quizQuestions = shuffleArray(pool.filter(q => q.tema === tema));
    if (quizQuestions.length === 0) { alert('Nenhuma questão encontrada para esse tema.'); return; }
  }

  answered = new Array(quizQuestions.length).fill(null);
  currentIdx = 0;
  chatHistory = [];
  chatOpen = false;

  document.getElementById('splash').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('result-screen').style.display = 'none';

  const label = mode === 'full' ? 'Simulado Completo (40 q.)' :
                mode === 'quick' ? 'Treino Rápido (20 q.)' :
                `Tema: ${dd.value}`;
  document.getElementById('quiz-title-label').textContent = label;

  renderQ();
}

// ---- Render current question ----
function renderQ() {
  const q = quizQuestions[currentIdx];
  const total = quizQuestions.length;
  const doneCount = answered.filter(a => a !== null).length;
  const correctCount = answered.reduce((acc, a, i) => a !== null && a === quizQuestions[i].ans ? acc + 1 : acc, 0);
  const wrongCount = doneCount - correctCount;
  const pct = Math.round((currentIdx / total) * 100);

  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `${currentIdx + 1} / ${total}`;
  document.getElementById('score-chip').textContent = `✓ ${correctCount}  ✗ ${wrongCount}`;
  document.getElementById('nav-counter').textContent = `${currentIdx + 1} de ${total}`;

  document.getElementById('q-meta').innerHTML =
    `<span class="badge badge-num">#${currentIdx + 1}</span>` +
    `<span class="badge badge-topic">${q.tema}</span>` +
    `<span class="badge badge-sim">${q.sim} • Q${q.num}</span>`;

  document.getElementById('q-text').textContent = q.q;

  const done = answered[currentIdx] !== null;
  const chosen = answered[currentIdx];
  const optContainer = document.getElementById('options');
  optContainer.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    if (done) {
      if (i === q.ans) btn.classList.add('correct');
      else if (i === chosen && i !== q.ans) btn.classList.add('wrong');
      btn.disabled = true;
    }
    btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => answer(i));
    optContainer.appendChild(btn);
  });

  const fb = document.getElementById('feedback-card');
  const fbIcon = document.getElementById('fb-icon');
  const fbVerdict = document.getElementById('fb-verdict');
  const fbText = document.getElementById('fb-text');
  const btnComment = document.getElementById('btn-show-comment');
  const commentExtra = document.getElementById('comment-extra');
  const btnChat = document.getElementById('btn-open-chat');

  if (done) {
    const isCorrect = chosen === q.ans;
    fb.style.display = 'block';
    fb.className = 'feedback-card show ' + (isCorrect ? 'correct' : 'wrong');
    fbIcon.textContent = isCorrect ? '✓' : '✗';
    fbVerdict.textContent = isCorrect ? 'Correto!' : 'Incorreto.';

    if (isCorrect) {
      fbText.textContent = q.exp;
      commentExtra.style.display = 'none';
      commentExtra.textContent = '';
      btnComment.classList.remove('visible');
      btnChat.classList.remove('visible');
    } else {
      const corrLetter = String.fromCharCode(65 + q.ans);
      const corrText = q.opts[q.ans];
      fbText.innerHTML =
        `<strong>A resposta correta é ${corrLetter}) ${corrText}</strong><br><br>${q.exp}`;
      commentExtra.style.display = 'none';
      commentExtra.textContent = '';
      btnComment.classList.remove('visible');
      btnChat.classList.add('visible');
    }
  } else {
    fb.style.display = 'none';
    fb.className = 'feedback-card';
    btnComment.classList.remove('visible');
    btnChat.classList.remove('visible');
  }

  closeChatSilent();

  document.getElementById('btn-prev').disabled = currentIdx === 0;
  document.getElementById('btn-next').disabled = !done;
  document.getElementById('btn-next').textContent = currentIdx === total - 1 ? 'Ver resultado ↗' : 'Próxima →';

  window.scrollTo(0, 0);
}

// ---- Answer ----
function answer(idx) {
  if (answered[currentIdx] !== null) return;
  answered[currentIdx] = idx;

  // Prepare chat context for this question
  const q = quizQuestions[currentIdx];
  chatHistory = [];
  addSystemContext(q);

  renderQ();
}

// ---- Show comment ----
function showComment() {
  const q = quizQuestions[currentIdx];
  const extra = document.getElementById('comment-extra');
  extra.textContent = q.exp;
  extra.style.display = 'block';
  document.getElementById('btn-show-comment').classList.remove('visible');
}

// ---- Chat ----
function addSystemContext(q) {
  // This is used internally to prime the chat responses
  chatHistory = [{
    role: 'system',
    q: q.q,
    opts: q.opts,
    ans: q.ans,
    exp: q.exp,
    tema: q.tema,
    sim: q.sim
  }];
}

function openChat() {
  chatOpen = true;
  const section = document.getElementById('chat-section');
  section.classList.add('open');
  const msgs = document.getElementById('chat-messages');

  if (msgs.children.length === 0) {
    const q = quizQuestions[currentIdx];
    appendMsg('ai',
      `Posso te ajudar com esta questão de ${q.tema}.\n\n` +
      `A resposta correta é ${String.fromCharCode(65 + q.ans)}) ${q.opts[q.ans]}.\n\n` +
      `${q.exp}\n\nTem alguma dúvida específica sobre o conteúdo?`
    );
  }

  document.getElementById('chat-input').focus();
  section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeChat() {
  chatOpen = false;
  document.getElementById('chat-section').classList.remove('open');
}

function closeChatSilent() {
  chatOpen = false;
  document.getElementById('chat-section').classList.remove('open');
  document.getElementById('chat-messages').innerHTML = '';
}

function appendMsg(role, text) {
  const div = document.createElement('div');
  div.className = 'msg ' + role;
  // Support newlines
  div.style.whiteSpace = 'pre-wrap';
  div.textContent = text;
  const msgs = document.getElementById('chat-messages');
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

// ---- Smart local chat engine ----
function buildSmartReply(userMsg, q) {
  const msg = userMsg.toLowerCase();

  // Helpers
  const corrLetter = String.fromCharCode(65 + q.ans);
  const corrText = q.opts[q.ans];

  // --- Pattern matching ---

  // Why is this the answer?
  if (/(por que|porque|motivo|razão|explica|como assim|entender|não entendi|sentido)/i.test(msg)) {
    return `${q.exp}\n\nEm resumo: a resposta ${corrLetter}) "${corrText}" é a correta porque ${q.exp.split('.')[0].toLowerCase()}.`;
  }

  // About a specific wrong option
  const optMatch = msg.match(/\b(letra|opção|alternativa|item)?\s*([a-e])\b/i);
  if (optMatch) {
    const letter = optMatch[2].toUpperCase();
    const optIdx = letter.charCodeAt(0) - 65;
    if (optIdx >= 0 && optIdx < q.opts.length) {
      if (optIdx === q.ans) {
        return `Isso mesmo! A alternativa ${letter}) "${q.opts[optIdx]}" é a CORRETA.\n\n${q.exp}`;
      } else {
        return `A alternativa ${letter}) "${q.opts[optIdx]}" está INCORRETA.\n\n${q.exp}\n\nA correta é ${corrLetter}) "${corrText}".`;
      }
    }
  }

  // RIPEAM questions
  if (/(ripeam|abalroamento|colisão|rumo|manobra|ultrapassagem|alcançando|alcançada)/i.test(msg)) {
    return `${q.exp}\n\nDica extra sobre o RIPEAM: em rumos cruzados, quem vê a luz VERDE da outra tem preferência (avistou pelo bombordo). Quem vê a luz VERMELHA deve manobrar. Na situação roda a roda, ambas guinam para boreste.`;
  }

  // Balizamento questions
  if (/(balizamento|boia|sinal|iala|cardinal|lateral|tope|cor|encarnada|verde|amarela)/i.test(msg)) {
    return `${q.exp}\n\nDica de balizamento IALA-B: ao ENTRAR no porto, encarnado à direita (boreste) e verde à esquerda (bombordo). À noite, reconhece-se pelo ritmo e cor das luzes. De dia, pela forma, cor e marca de tope.`;
  }

  // Fire/extinguisher questions
  if (/(incêndio|extintor|fogo|combustível|comburente|classe|pó|co2|espuma|halon)/i.test(msg)) {
    return `${q.exp}\n\nDica extra: Classe A = sólidos (madeira, papel) → extintor de água ou pó ABC. Classe B = líquidos (gasolina, óleo) → CO₂, pó ou espuma. Classe C = elétrico → CO₂ ou pó seco. Classe D = metais → pó específico.`;
  }

  // Stability questions
  if (/(estabilidade|borda livre|calado|pontal|peso|banda|alquebramento|embarcar|desembarcar)/i.test(msg)) {
    return `${q.exp}\n\nDica: Pontal = borda livre + calado (não muda). Ao embarcar peso: borda livre diminui, calado aumenta. Ao desembarcar: borda livre aumenta, calado diminui. Peso alto = instabilidade.`;
  }

  // Safety/life jacket
  if (/(colete|salva-vidas|flutuação|balsa|abandono|naufrágio)/i.test(msg)) {
    return `${q.exp}\n\nDica: coletes devem corresponder à lotação da embarcação (consta no TIE). Na moto aquática, condutor E passageiro devem usar o colete classe V vestido durante toda a navegação.`;
  }

  // Anchoring questions
  if (/(fundeio|âncora|amarra|tença|arinque|garrando)/i.test(msg)) {
    return `${q.exp}\n\nDica de fundeio: regra do 1/3 da amarra — permanência curta = 3x a profundidade; permanência longa ou amarra mista = 5x; mau tempo = 8x. Melhores fundos: areia e lama.`;
  }

  // First aid
  if (/(primeiros socorros|fratura|hemorragia|queimadura|torniquete|rcp|afogado|choque elétrico)/i.test(msg)) {
    return `${q.exp}\n\nDica: fratura de BRAÇO → imobilizar dobrado. Fratura de PERNA → imobilizar esticada. Torniquete → só após esgotar a compressão; aliviar 1 min a cada 15 min (exceto amputações). Queimadura → água do mar é excelente.`;
  }

  // Meteorology
  if (/(meteorologia|frente|vento|barômetro|pressão|brisa|terral|ressaca|tempestade)/i.test(msg)) {
    return `${q.exp}\n\nDica: queda rápida do barômetro = mau tempo se aproximando. Frente fria = tempo piora com ventos fortes. Brisa marinha = do mar para a terra (dia). Terral = da terra para o mar (noite). Vento nordeste VEM do nordeste.`;
  }

  // Legal/LESTA
  if (/(lesta|multa|infração|habilitação|suspensão|cassação|punição|penalidade|grupo)/i.test(msg)) {
    return `${q.exp}\n\nTabela de multas: Grupo A (doc. vencido) → R$40–200. Grupo B (não portar) → R$40–400. Grupo D (área de banhistas) → até R$1.600 ou suspensão 60 dias. Grupo E (sem habilitação) → até R$2.200. Grupo G (não comunicar acidente) → até R$3.200 ou suspensão 12 meses.`;
  }

  // Signals / whistles
  if (/(apito|sinal sonoro|longo|curto|buzina|visibilidade restrita)/i.test(msg)) {
    return `${q.exp}\n\nResumo de apitos: 1 curto = guino a boreste. 2 curtos = guino a bombordo. 3 curtos = máquinas atrás. 5+ curtos = perigo/não entendi. 2 longos + 1 curto = ultrapasso por seu boreste. 2 longos + 2 curtos = ultrapasso por seu bombordo. 1 longo / 2 min = em movimento em nevoeiro.`;
  }

  // Navigation lights
  if (/(luz|lanterna|encarnada|verde|branca|amarela|setor|alcançado|reboque|mastro)/i.test(msg)) {
    return `${q.exp}\n\nResumo de luzes: Boreste = verde (112,5°). Bombordo = encarnada (112,5°). Alcançado/popa = branca (135°). Reboque = amarela sobre a de alcançado (135°). Mastro = branca (225°). Fundeado = branca circular 360°.`;
  }

  // Mooring/lines
  if (/(espia|través|lançante|espringue|aduchar|atracar|defensas)/i.test(msg)) {
    return `${q.exp}\n\nEspias: Través = perpendicular ao cais, impede se afastar. Lançante de proa = impede cair a ré. Lançante de popa = impede cair a vante. Espringue de proa = impede cair a vante. Espringue de popa = impede cair a ré. Aduchar = enrolar em voltas grandes.`;
  }

  // Survival
  if (/(sobrevivência|náufrago|balsa|água do mar|desidratação|hipotermia|help|deriva)/i.test(msg)) {
    return `${q.exp}\n\nDicas de sobrevivência: NUNCA beber água do mar. Permanecer no local após comunicar posição. Posição HELP = joelhos ao peito, braços cruzados. Economizar energia. Cobrir da exposição solar. Ração moderna = carboidratos de rápida assimilação.`;
  }

  // Difference between options
  if (/(diferença|diferente|confundo|similar|parecida|mesma coisa)/i.test(msg)) {
    const optsText = q.opts.map((o, i) => `${String.fromCharCode(65+i)}) ${o}`).join('\n');
    return `Veja as diferenças entre as alternativas:\n\n${optsText}\n\nA correta é ${corrLetter}) porque: ${q.exp}`;
  }

  // Generic help
  if (/(ajuda|não sei|tô confuso|difícil|pode explicar|resumo|dica|macete)/i.test(msg)) {
    return `Claro! Esta questão é sobre ${q.tema}.\n\n${q.exp}\n\nA resposta é ${corrLetter}) "${corrText}".\n\nQuer que eu explique alguma parte específica?`;
  }

  // Default fallback
  return `${q.exp}\n\nA resposta correta desta questão é ${corrLetter}) "${corrText}".\n\nSe quiser, pergunte sobre algum ponto específico: por que as outras alternativas estão erradas, macetes para memorizar, ou como esse tema cai na prova.`;
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  appendMsg('user', text);

  const q = quizQuestions[currentIdx];

  // Show typing indicator
  const typing = appendMsg('ai', '...');
  typing.classList.add('typing');

  // Small delay to feel natural
  await new Promise(r => setTimeout(r, 400 + Math.random() * 300));

  const reply = buildSmartReply(text, q);

  typing.classList.remove('typing');
  typing.textContent = reply;
  typing.style.whiteSpace = 'pre-wrap';

  document.getElementById('chat-messages').scrollTop = 9999;
}

// ---- Navigation ----
function navQ(dir) {
  const total = quizQuestions.length;
  if (dir === 1 && currentIdx === total - 1) {
    showResult();
    return;
  }
  currentIdx = Math.max(0, Math.min(total - 1, currentIdx + dir));
  renderQ();
}

// ---- Result ----
function showResult() {
  document.getElementById('quiz-screen').style.display = 'none';
  const rs = document.getElementById('result-screen');
  rs.style.display = 'flex';

  const total = quizQuestions.length;
  const correct = answered.reduce((acc, a, i) => a !== null && a === quizQuestions[i].ans ? acc + 1 : acc, 0);
  const wrong = total - correct;
  const pct = Math.round((correct / total) * 100);
  const minPass = Math.ceil(total * 0.5);
  const pass = correct >= minPass;

  document.getElementById('result-circle').className = 'result-circle ' + (pass ? 'pass' : 'fail');
  document.getElementById('result-pct').textContent = pct + '%';
  document.getElementById('result-label-small').textContent = pass ? 'aprovado' : 'reprovado';
  document.getElementById('result-title').textContent = pass ? '✓ Aprovado!' : '✗ Continue treinando!';
  document.getElementById('result-sub').textContent = `Mínimo: ${minPass} acertos — você fez ${correct} de ${total}`;
  document.getElementById('r-correct').textContent = correct;
  document.getElementById('r-total').textContent = total;
  document.getElementById('r-wrong').textContent = wrong;

  const tbody = document.getElementById('result-review-body');
  tbody.innerHTML = '';
  quizQuestions.forEach((q, i) => {
    const ok = answered[i] === q.ans;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="color:${ok ? '#1A7A4A' : '#A82020'};font-weight:700">${ok ? '✓' : '✗'}</td>
      <td style="color:rgba(255,255,255,0.6);font-size:0.8rem">${q.tema}</td>
      <td style="font-size:0.8rem">${q.q.substring(0, 52)}…</td>
    `;
    tbody.appendChild(tr);
  });
}

function restartSame() {
  answered = new Array(quizQuestions.length).fill(null);
  currentIdx = 0;
  chatHistory = [];
  quizQuestions = shuffleArray(quizQuestions);
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  renderQ();
}

function backToSplash() {
  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('splash').style.display = 'flex';
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
