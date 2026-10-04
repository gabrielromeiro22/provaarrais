// ---- State ----
let mode = 'full';
let quizQuestions = [];
let currentIdx = 0;
let answered = [];   // null | index of chosen option
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

  // Header
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `${currentIdx + 1} / ${total}`;
  document.getElementById('score-chip').textContent = `✓ ${correctCount}  ✗ ${wrongCount}`;
  document.getElementById('nav-counter').textContent = `${currentIdx + 1} de ${total}`;

  // Q meta
  document.getElementById('q-meta').innerHTML =
    `<span class="badge badge-num">#${currentIdx + 1}</span>` +
    `<span class="badge badge-topic">${q.tema}</span>` +
    `<span class="badge badge-sim">${q.sim} • Q${q.num}</span>`;

  // Q text
  document.getElementById('q-text').textContent = q.q;

  // Options
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

  // Feedback
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
    fbText.textContent = isCorrect ? q.exp : `A resposta correta é: ${String.fromCharCode(65 + q.ans)}) ${q.opts[q.ans]}`;
    commentExtra.style.display = 'none';
    commentExtra.textContent = '';

    if (isCorrect) {
      btnComment.classList.add('visible');
      btnChat.classList.remove('visible');
    } else {
      btnComment.classList.remove('visible');
      btnChat.classList.add('visible');
    }
  } else {
    fb.style.display = 'none';
    fb.className = 'feedback-card';
    btnComment.classList.remove('visible');
    btnChat.classList.remove('visible');
  }

  // Close chat on question change
  closeChatSilent();

  // Nav buttons
  document.getElementById('btn-prev').disabled = currentIdx === 0;
  document.getElementById('btn-next').disabled = !done;
  document.getElementById('btn-next').textContent = currentIdx === total - 1 ? 'Ver resultado ↗' : 'Próxima →';

  // Scroll to top
  document.querySelector('.quiz-body').scrollTop = 0;
  window.scrollTo(0, 0);
}

// ---- Answer ----
function answer(idx) {
  if (answered[currentIdx] !== null) return;
  answered[currentIdx] = idx;
  renderQ();

  // Auto-inject context into chat
  const q = quizQuestions[currentIdx];
  chatHistory = [{
    role: 'user',
    content: `Contexto da questão de estudo:\nQuestão: ${q.q}\nAlternativas: ${q.opts.map((o, i) => String.fromCharCode(65+i)+') '+o).join(' | ')}\nGabarito: ${String.fromCharCode(65+q.ans)}) ${q.opts[q.ans]}\nExplicação do gabarito: ${q.exp}\nTema: ${q.tema} | Simulado: ${q.sim}\n\nO aluno está estudando para a prova de Arrais-Amador da Marinha do Brasil. Responda dúvidas sobre esta questão de forma clara e didática.`
  }];
}

// ---- Show comment (for correct) ----
function showComment() {
  const q = quizQuestions[currentIdx];
  const extra = document.getElementById('comment-extra');
  extra.textContent = q.exp;
  extra.style.display = 'block';
  document.getElementById('btn-show-comment').classList.remove('visible');
}

// ---- Chat ----
function openChat() {
  chatOpen = true;
  const section = document.getElementById('chat-section');
  section.classList.add('open');
  const msgs = document.getElementById('chat-messages');

  if (msgs.children.length === 0) {
    const q = quizQuestions[currentIdx];
    appendMsg('ai', `Olá! Posso te ajudar com qualquer dúvida sobre esta questão de ${q.tema}. O que você quer entender melhor?`);
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
  div.textContent = text;
  const msgs = document.getElementById('chat-messages');
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

async function sendChat() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  appendMsg('user', text);

  chatHistory.push({ role: 'user', content: text });

  const typing = appendMsg('ai', 'Digitando...');
  typing.classList.add('typing');

  try {
    const messages = chatHistory.length === 1
      ? chatHistory
      : chatHistory;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        system: 'Você é um professor de náutica especializado no exame de Arrais-Amador da Marinha do Brasil. Responda de forma clara, didática e objetiva. Use linguagem simples. Não escreva mais do que 150 palavras por resposta. Se precisar listar pontos, use texto corrido.',
        messages: messages
      })
    });

    const data = await res.json();
    const reply = data.content?.[0]?.text || 'Não consegui responder. Tente novamente.';

    typing.classList.remove('typing');
    typing.textContent = reply;

    chatHistory.push({ role: 'assistant', content: reply });

    // keep history lean
    if (chatHistory.length > 10) {
      chatHistory = [chatHistory[0], ...chatHistory.slice(-8)];
    }
  } catch (e) {
    typing.classList.remove('typing');
    typing.textContent = 'Erro ao conectar. Verifique sua conexão e tente novamente.';
  }
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

// ---- Restart ----
function restartSame() {
  answered = new Array(quizQuestions.length).fill(null);
  currentIdx = 0;
  chatHistory = [];

  // reshuffle same pool
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

// ---- Utils ----
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
