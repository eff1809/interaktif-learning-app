// ============================================================
//  APP.JS  –  Logic utama website pembelajaran
// ============================================================

let currentSoal = 0;
let jawabanPG = [];   // { index, benar }
let jawabanEssay = []; // { teks }
let semuaSoal = [];   // gabungan PG + Essay dalam urutan

// ---- INISIALISASI ----
window.onload = function () {
  renderMateri();
  buildSoalList();
};

// ---- RENDER MATERI ----
function renderMateri() {
  document.getElementById("materi-judul").textContent = materiBelajar.judul;
  document.getElementById("materi-deskripsi").textContent = materiBelajar.deskripsi;

  const container = document.getElementById("materi-konten");
  container.innerHTML = "";

  materiBelajar.sections.forEach(sec => {
    if (sec.tipe === "sub") {
      const el = document.createElement("h2");
      el.className = "materi-sub";
      el.textContent = sec.teks;
      container.appendChild(el);

    } else if (sec.tipe === "paragraf") {
      const el = document.createElement("p");
      el.className = "materi-p";
      el.textContent = sec.teks;
      container.appendChild(el);

    } else if (sec.tipe === "tips") {
      const el = document.createElement("div");
      el.className = "tips-box";
      el.innerHTML = `<strong>${sec.judul}</strong><p>${sec.teks}</p>`;
      container.appendChild(el);

    } else if (sec.tipe === "list") {
      const ul = document.createElement("ul");
      ul.className = "materi-list";
      sec.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    }
  });
}

// ---- BUILD DAFTAR SOAL ----
function buildSoalList() {
  semuaSoal = [];
  kuisPilihanGanda.forEach((s, i) => semuaSoal.push({ tipe: "pg", data: s, index: i }));
  kuisEssay.forEach((s, i) => semuaSoal.push({ tipe: "essay", data: s, index: i }));
  jawabanPG = new Array(kuisPilihanGanda.length).fill(null);
  jawabanEssay = new Array(kuisEssay.length).fill("");
}

// ---- MULAI KUIS ----
function mulaiKuis() {
  currentSoal = 0;
  buildSoalList();
  showPage("page-kuis");
  updateStep(2);
  renderSoal();
}

// ---- RENDER SOAL SAAT INI ----
function renderSoal() {
  const soal = semuaSoal[currentSoal];
  const total = semuaSoal.length;
  const num = currentSoal + 1;

  // Progress
  document.getElementById("progress-label").textContent = `Soal ${num} dari ${total}`;
  document.getElementById("progress-bar").style.width = `${(num / total) * 100}%`;

  // Tombol navigasi
  document.getElementById("btn-prev").style.visibility = currentSoal === 0 ? "hidden" : "visible";
  const isLast = currentSoal === total - 1;
  document.getElementById("btn-next").textContent = isLast ? "Lihat Hasil 🏁" : "Berikutnya →";

  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  if (soal.tipe === "pg") {
    renderPG(soal, container);
  } else {
    renderEssay(soal, container);
  }
}

// ---- RENDER PILIHAN GANDA ----
function renderPG(soal, container) {
  const saved = jawabanPG[soal.index];
  const answered = saved !== null;

  const card = document.createElement("div");
  card.className = "quiz-card";

  const badge = document.createElement("div");
  badge.className = "quiz-badge pg-badge";
  badge.textContent = "🔘 Pilihan Ganda";
  card.appendChild(badge);

  const q = document.createElement("h3");
  q.className = "quiz-question";
  q.textContent = soal.data.pertanyaan;
  card.appendChild(q);

  const opts = document.createElement("div");
  opts.className = "options-grid";

  soal.data.pilihan.forEach((pilihan, i) => {
    const opt = document.createElement("button");
    opt.className = "option-btn";
    opt.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${pilihan}</span>`;

    if (answered) {
      opt.disabled = true;
      if (i === soal.data.jawabanBenar) opt.classList.add("correct");
      if (i === saved && saved !== soal.data.jawabanBenar) opt.classList.add("wrong");
      if (i === saved && saved === soal.data.jawabanBenar) opt.classList.add("correct");
    }

    if (!answered) {
      opt.onclick = () => {
        jawabanPG[soal.index] = i;
        renderSoal();
      };
    }

    opts.appendChild(opt);
  });
  card.appendChild(opts);

  if (answered) {
    const feedback = document.createElement("div");
    const benar = saved === soal.data.jawabanBenar;
    feedback.className = `feedback-box ${benar ? "feedback-correct" : "feedback-wrong"}`;
    feedback.innerHTML = `<strong>${benar ? "✅ Benar!" : "❌ Salah!"}</strong><p>${soal.data.penjelasan}</p>`;
    card.appendChild(feedback);
  }

  container.appendChild(card);
}

// ---- RENDER ESSAY ----
function renderEssay(soal, container) {
  const saved = jawabanEssay[soal.index];
  const submitted = saved && saved.trim() !== "" && saved.startsWith("__submitted__");
  const teks = submitted ? saved.replace("__submitted__", "") : saved;

  const card = document.createElement("div");
  card.className = "quiz-card";

  const badge = document.createElement("div");
  badge.className = "quiz-badge essay-badge";
  badge.textContent = "✍️ Essay";
  card.appendChild(badge);

  const q = document.createElement("h3");
  q.className = "quiz-question";
  q.textContent = soal.data.pertanyaan;
  card.appendChild(q);

  const ta = document.createElement("textarea");
  ta.className = "essay-input";
  ta.placeholder = "Tuliskan jawabanmu di sini...";
  ta.value = teks || "";
  ta.id = `essay-ta-${soal.index}`;
  if (submitted) ta.disabled = true;
  card.appendChild(ta);

  if (!submitted) {
    const submitBtn = document.createElement("button");
    submitBtn.className = "btn btn-submit";
    submitBtn.textContent = "Simpan Jawaban ✓";
    submitBtn.onclick = () => {
      const val = document.getElementById(`essay-ta-${soal.index}`).value;
      jawabanEssay[soal.index] = "__submitted__" + val;
      renderSoal();
    };
    card.appendChild(submitBtn);
  }

  if (submitted) {
    const kunci = document.createElement("div");
    kunci.className = "feedback-box feedback-info";
    kunci.innerHTML = `<strong>📌 Kunci Jawaban / Jawaban Model:</strong><p>${soal.data.kunciJawaban}</p>`;
    card.appendChild(kunci);
  }

  container.appendChild(card);
}

// ---- NAVIGASI SOAL ----
function soalBerikutnya() {
  if (currentSoal < semuaSoal.length - 1) {
    currentSoal++;
    renderSoal();
  } else {
    tampilkanHasil();
  }
}

function soalSebelumnya() {
  if (currentSoal > 0) {
    currentSoal--;
    renderSoal();
  }
}

// ---- HASIL ----
function tampilkanHasil() {
  showPage("page-hasil");
  updateStep(3);

  // Hitung skor PG
  let benar = 0;
  jawabanPG.forEach((jawaban, i) => {
    if (jawaban === kuisPilihanGanda[i].jawabanBenar) benar++;
  });
  const total = kuisPilihanGanda.length;
  const persen = Math.round((benar / total) * 100);

  document.getElementById("score-pg").textContent = `${benar}/${total} (${persen}%)`;
  document.getElementById("result-icon").textContent = persen >= 75 ? "🏆" : persen >= 50 ? "😊" : "📚";
  document.getElementById("result-title").textContent = persen >= 75 ? "Luar Biasa!" : persen >= 50 ? "Cukup Baik!" : "Terus Semangat Belajar!";
  document.getElementById("result-subtitle").textContent = `Kamu menjawab benar ${benar} dari ${total} soal pilihan ganda.`;

  // Essay review
  const essayList = document.getElementById("result-essay-list");
  essayList.innerHTML = "";
  kuisEssay.forEach((soal, i) => {
    const userAns = (jawabanEssay[i] || "").replace("__submitted__", "") || "(Tidak dijawab)";
    const div = document.createElement("div");
    div.className = "essay-review-card";
    div.innerHTML = `
      <p class="essay-review-q"><strong>Soal ${i + 1}:</strong> ${soal.pertanyaan}</p>
      <div class="review-cols">
        <div class="review-col user-col">
          <div class="col-label">✍️ Jawaban Kamu</div>
          <p>${userAns}</p>
        </div>
        <div class="review-col key-col">
          <div class="col-label">📌 Kunci Jawaban</div>
          <p>${soal.kunciJawaban}</p>
        </div>
      </div>`;
    essayList.appendChild(div);
  });
}

// ---- UTILITIES ----
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateStep(num) {
  document.querySelectorAll(".step").forEach((s, i) => {
    s.classList.toggle("active", i + 1 <= num);
    s.classList.toggle("done", i + 1 < num);
  });
}

function kembaliMateri() {
  buildSoalList();
  showPage("page-materi");
  updateStep(1);
}

function ulangiKuis() {
  mulaiKuis();
}
