// ============================================================
//  DATA.JS  –  Edit file ini untuk mengubah materi dan soal
// ============================================================

// -------- MATERI PEMBELAJARAN --------
const materiBelajar = {
  judul: "Geosfer — Lapisan Penyusun Bumi",
  deskripsi: "Pelajari lapisan-lapisan utama yang membentuk bumi (Geosfer), mulai dari litosfer, atmosfer, hidrosfer, biosfer, hingga antroposfer beserta fungsi dan perannya.",
  sections: [

    // ── PENGANTAR ──────────────────────────────────────────────
    {
      tipe: "paragraf",
      teks: "Geosfer berasal dari kata geo (bumi) dan sphere (lapisan). Secara harfiah, geosfer adalah seluruh lapisan yang menyusun bumi, baik yang berada di permukaan, di bawah permukaan, maupun yang menyelimuti permukaan bumi."
    },
    {
      tipe: "paragraf",
      teks: "Geosfer merupakan objek material utama yang dipelajari dalam ilmu geografi. Lapisan-lapisan ini tidak berdiri sendiri, melainkan saling berinteraksi, memengaruhi, dan membentuk lingkungan hidup bagi makhluk hidup."
    },
    {
      tipe: "tips",
      judul: "📌 Ringkasan 5 Lapisan Geosfer",
      teks: "Geosfer terdiri dari: Litosfer (batuan), Atmosfer (udara), Hidrosfer (air), Biosfer (kehidupan), dan Antroposfer (manusia)."
    },

    // ── 1. LITOSFER ────────────────────────────────────────────
    {
      tipe: "sub",
      teks: "1. Litosfer (Lapisan Batuan / Kulit Bumi)"
    },
    {
      tipe: "paragraf",
      teks: "Litosfer adalah lapisan terluar bumi yang berupa batuan padat dan keras. Lapisan ini mencakup kerak bumi (crust) dan bagian atas mantel bumi (upper mantle). Litosfer terfragmentasi menjadi beberapa lempeng tektonik yang terus bergerak."
    },
    {
      tipe: "tips",
      judul: "🪨 Struktur Litosfer",
      teks: "Kerak Benua: Lapisan granitis, tebal ±30–70 km, massa jenis rendah, kaya Silisium & Alumunium (Sial). | Kerak Samudra: Lapisan basaltis, tipis ±5–10 km, sangat padat, kaya Silisium & Magnesium (Sima)."
    },
    {
      tipe: "list",
      items: [
        "Tempat tinggal bagi manusia, hewan, dan tumbuhan.",
        "Sumber daya tambang dan mineral (emas, besi, batu bara, dll.).",
        "Mengalami proses tektonisme (patahan/lipatan) dan vulkanisme yang membentuk relief permukaan bumi."
      ]
    },

    // ── 2. ATMOSFER ───────────────────────────────────────────
    {
      tipe: "sub",
      teks: "2. Atmosfer (Lapisan Udara)"
    },
    {
      tipe: "paragraf",
      teks: "Atmosfer adalah selubung gas yang menyelimuti bumi dari permukaan hingga ketinggian sekitar 10.000 km di luar angkasa. Gas penyusun utamanya adalah Nitrogen (78%), Oksigen (21%), Argon (0,9%), dan Karbon Dioksida (0,03%)."
    },
    {
      tipe: "tips",
      judul: "🌍 Lapisan-Lapisan Atmosfer",
      teks: "Troposfer (0–12 km) → Stratosfer (12–50 km) → Mesosfer (50–85 km) → Termosfer/Ionosfer (85–500 km) → Eksosfer (>500 km)"
    },
    {
      tipe: "list",
      items: [
        "Troposfer (0–12 km): Tempat semua fenomena cuaca terjadi (hujan, angin, awan, petir). Suhu menurun seiring ketinggian.",
        "Stratosfer (12–50 km): Tempat lapisan ozon (O₃) yang menyerap radiasi ultraviolet. Ideal untuk penerbangan jet.",
        "Mesosfer (50–85 km): Pelindung bumi dari meteor — benda langit terbakar habis karena gesekan udara di lapisan ini.",
        "Termosfer/Ionosfer (85–500 km): Suhu sangat tinggi. Terjadi ionisasi partikel, pemantul gelombang radio, dan Aurora.",
        "Eksosfer (>500 km): Lapisan terluar, berbatasan langsung dengan luar angkasa. Gravitasi sangat lemah."
      ]
    },

    // ── 3. HIDROSFER ──────────────────────────────────────────
    {
      tipe: "sub",
      teks: "3. Hidrosfer (Lapisan Air)"
    },
    {
      tipe: "paragraf",
      teks: "Hidrosfer mencakup seluruh wujud air yang ada di bumi, meliputi air permukaan (laut, sungai, danau), air bawah tanah (akuifer), uap air di atmosfer, serta air padat (gletser dan es). Sekitar 71% permukaan bumi tertutup hidrosfer, di mana 97%-nya adalah air asin."
    },
    {
      tipe: "tips",
      judul: "💧 Siklus Hidrologi",
      teks: "Air di bumi terus berputar melalui 4 proses: Evaporasi (penguapan) → Kondensasi (pembentukan awan) → Presipitasi (hujan/salju) → Infiltrasi (penyerapan ke tanah). Total air di bumi tidak pernah berkurang atau bertambah."
    },
    {
      tipe: "list",
      items: [
        "Menjaga stabilitas suhu bumi (regulator iklim global).",
        "Sumber kehidupan utama bagi seluruh makhluk hidup.",
        "Sarana transportasi, sumber energi (PLTA), dan penopang ekosistem perairan."
      ]
    },

    // ── 4. BIOSFER ────────────────────────────────────────────
    {
      tipe: "sub",
      teks: "4. Biosfer (Lapisan Kehidupan)"
    },
    {
      tipe: "paragraf",
      teks: "Biosfer adalah sistem ekologis global yang menyatukan seluruh makhluk hidup di bumi beserta interaksinya. Biosfer terbentuk dari irisan tiga lapisan lainnya — litosfer, atmosfer, dan hidrosfer — yang kondisinya memungkinkan kehidupan berkembang."
    },
    {
      tipe: "tips",
      judul: "🌿 Faktor yang Memengaruhi Biosfer",
      teks: "Klimatik (suhu, curah hujan, angin) | Edafik (tekstur & kesuburan tanah, pH) | Fisiografi (ketinggian & kemiringan lereng) | Biotik (aktivitas manusia, hewan, tumbuhan)"
    },
    {
      tipe: "list",
      items: [
        "Hutan Hujan Tropis — Kelembapan tinggi, keanekaragaman hayati sangat tinggi.",
        "Sabana — Padang rumput tropis dengan pohon-pohon yang tersebar.",
        "Stepa — Padang rumput kering di iklim sedang.",
        "Gurun — Curah hujan sangat rendah, suhu ekstrem siang dan malam.",
        "Tundra — Wilayah kutub tanpa pohon, beku sebagian besar tahun.",
        "Taiga — Hutan konifer di belahan bumi utara, musim dingin panjang."
      ]
    },

    // ── 5. ANTROPOSFER ────────────────────────────────────────
    {
      tipe: "sub",
      teks: "5. Antroposfer (Lapisan Manusia)"
    },
    {
      tipe: "paragraf",
      teks: "Antroposfer adalah bagian dari geosfer yang secara khusus mengkaji kehidupan manusia, meliputi aktivitas, budaya, sebaran spasial, dan interaksinya dengan lingkungan fisik bumi. Manusia berbeda dari komponen biosfer lainnya karena memiliki akal budi untuk merekayasa, mengubah, dan beradaptasi secara dinamis terhadap lapisan geosfer lainnya."
    },
    {
      tipe: "list",
      items: [
        "Demografi: Jumlah, pertumbuhan, kepadatan, dan mobilitas (migrasi) penduduk.",
        "Sosio-ekonomi: Pola pemukiman, pemanfaatan lahan (contoh: konversi lahan pertanian → kawasan industri), dan ekonomi wilayah.",
        "Dampak Lingkungan: Penambangan (litosfer), polusi udara (atmosfer), pencemaran air (hidrosfer) akibat aktivitas manusia."
      ]
    },
    {
      tipe: "tips",
      judul: "⚠️ Interaksi Manusia & Geosfer",
      teks: "Aktivitas manusia (antroposfer) memberikan dampak terbesar terhadap perubahan kondisi litosfer, atmosfer, dan hidrosfer — mulai dari perubahan iklim, degradasi lahan, hingga krisis air bersih."
    }

  ]
};

// -------- SOAL PILIHAN GANDA --------
// jawabanBenar = indeks dari array pilihan (mulai dari 0)
const kuisPilihanGanda = [
  {
    pertanyaan: "Lapisan batuan penyusun kerak samudra dicirikan oleh kandungan mineral yang kaya akan Silisium dan Magnesium. Lapisan ini sering disebut dengan istilah...",
    pilihan: [
      "Sial",
      "Sima",
      "Barisfer",
      "Astenosfer"
    ],
    jawabanBenar: 1,
    penjelasan: "Sima (Silisium-Magnesium) adalah sebutan untuk kerak samudra yang tipis (±5–10 km) namun sangat padat, kaya akan mineral Silisium dan Magnesium. Sedangkan Sial (Silisium-Alumunium) merujuk pada kerak benua."
  },
  {
    pertanyaan: "Sebuah meteor jatuh menuju bumi namun terbakar habis sebelum mencapai permukaan. Fenomena perlindungan ini terjadi pada lapisan atmosfer...",
    pilihan: [
      "Troposfer",
      "Stratosfer",
      "Mesosfer",
      "Termosfer"
    ],
    jawabanBenar: 2,
    penjelasan: "Mesosfer (50–85 km) adalah lapisan pelindung bumi dari benda langit. Gesekan udara yang kuat di lapisan ini menyebabkan meteor terbakar habis sebelum sempat mencapai permukaan bumi."
  },
  {
    pertanyaan: "Lapisan ozon (O₃) yang berfungsi melindungi bumi dari paparan radiasi ultraviolet matahari terletak pada lapisan...",
    pilihan: [
      "Troposfer",
      "Stratosfer",
      "Mesosfer",
      "Eksosfer"
    ],
    jawabanBenar: 1,
    penjelasan: "Lapisan ozon berada di Stratosfer (12–50 km). Ozon (O₃) menyerap sebagian besar radiasi UV-B dan UV-C dari matahari sehingga melindungi makhluk hidup di permukaan bumi. Stratosfer juga merupakan jalur penerbangan pesawat jet."
  },
  {
    pertanyaan: "Siklus hidrologi memastikan volume air di bumi relatif tetap melalui berbagai proses. Proses penyerapan air hujan ke dalam pori-pori tanah secara vertikal disebut...",
    pilihan: [
      "Evaporasi",
      "Kondensasi",
      "Presipitasi",
      "Infiltrasi"
    ],
    jawabanBenar: 3,
    penjelasan: "Infiltrasi adalah proses masuknya air ke dalam tanah melalui pori-pori tanah secara vertikal. Evaporasi = penguapan air, Kondensasi = pembentukan awan dari uap air, Presipitasi = jatuhnya air dari atmosfer ke permukaan bumi (hujan/salju)."
  },
  {
    pertanyaan: "Biosfer merupakan zona interaksi tempat berlangsungnya kehidupan. Faktor edafik yang memengaruhi persebaran flora dan fauna di permukaan bumi meliputi...",
    pilihan: [
      "Suhu udara, curah hujan, dan angin",
      "Ketinggian tempat dan kemiringan lereng",
      "Tekstur, kelembapan, dan tingkat kesuburan tanah",
      "Aktivitas manusia dan hewan dalam ekosistem"
    ],
    jawabanBenar: 2,
    penjelasan: "Faktor edafik berkaitan dengan kondisi tanah, meliputi tekstur, kelembapan, pH (kesamaan), dan tingkat kesuburan tanah. Pilihan A adalah faktor klimatik, pilihan B adalah faktor fisiografi, dan pilihan D adalah faktor biotik."
  },
  {
    pertanyaan: "Aktivitas manusia yang mengubah kawasan hutan lindung menjadi area perkebunan kelapa sawit atau daerah pemukiman merupakan objek kajian geosfer pada lapisan...",
    pilihan: [
      "Litosfer",
      "Atmosfer",
      "Biosfer",
      "Antroposfer"
    ],
    jawabanBenar: 3,
    penjelasan: "Antroposfer secara khusus mengkaji aktivitas dan dampak manusia terhadap lingkungan bumi, termasuk alih fungsi lahan seperti konversi hutan menjadi perkebunan atau pemukiman. Kajian ini mencakup aspek demografi, sosio-ekonomi, dan dampak lingkungan."
  },
  {
    pertanyaan: "Fenomena cuaca seperti awan, hujan, petir, kabut, dan angin terjadi secara intensif pada lapisan atmosfer terbawah, yaitu...",
    pilihan: [
      "Troposfer",
      "Stratosfer",
      "Mesosfer",
      "Termosfer"
    ],
    jawabanBenar: 0,
    penjelasan: "Troposfer (0–12 km) adalah lapisan atmosfer paling bawah tempat seluruh fenomena cuaca terjadi. Di lapisan ini suhu udara menurun seiring bertambahnya ketinggian (sekitar 0,6°C per 100 meter). Troposfer mengandung sekitar 75% massa atmosfer bumi."
  },
  {
    pertanyaan: "Gelombang radio dapat dipantulkan kembali ke bumi sehingga mempermudah komunikasi jarak jauh karena adanya proses ionisasi partikel di lapisan...",
    pilihan: [
      "Stratosfer",
      "Mesosfer",
      "Termosfer",
      "Eksosfer"
    ],
    jawabanBenar: 2,
    penjelasan: "Termosfer (atau Ionosfer, 85–500 km) mengandung partikel bermuatan listrik (ion) akibat penyerapan radiasi matahari. Lapisan ion ini berfungsi memantulkan gelombang radio kembali ke bumi, memungkinkan komunikasi jarak jauh. Di lapisan ini pula fenomena Aurora terjadi."
  },
  {
    pertanyaan: "Perubahan penggunaan lahan di daerah hulu akibat aktivitas manusia dapat memicu terjadinya bencana banjir di daerah hilir. Fenomena tersebut menunjukkan keterkaitan erat antar-lapisan...",
    pilihan: [
      "Litosfer dan Atmosfer",
      "Biosfer dan Litosfer",
      "Antroposfer dan Hidrosfer",
      "Atmosfer dan Hidrosfer"
    ],
    jawabanBenar: 2,
    penjelasan: "Alih fungsi lahan adalah aktivitas manusia (Antroposfer), sedangkan banjir adalah gangguan pada sistem air (Hidrosfer). Berkurangnya vegetasi di hulu akibat aktivitas manusia menyebabkan daya serap tanah menurun, sehingga air hujan langsung mengalir ke sungai dan memicu banjir di hilir."
  },
  {
    pertanyaan: "Bioma seperti hutan hujan tropis, sabana, stepa, dan tundra merupakan bentuk pengelompokan ekosistem skala besar yang dipelajari dalam...",
    pilihan: [
      "Litosfer",
      "Hidrosfer",
      "Biosfer",
      "Antroposfer"
    ],
    jawabanBenar: 2,
    penjelasan: "Biosfer adalah lapisan kehidupan yang mencakup semua makhluk hidup dan interaksinya. Bioma adalah pengelompokan ekosistem berskala besar berdasarkan zona iklim, seperti hutan hujan tropis, sabana, stepa, gurun, tundra, dan taiga — semuanya merupakan komponen dari biosfer."
  }
];

// -------- SOAL ESSAY --------
const kuisEssay = [
  {
    pertanyaan: "Jelaskan perbedaan karakteristik struktural dan kimiawi antara kerak benua dan kerak samudra pada lapisan litosfer!",
    kunciJawaban: "Kerak benua lebih tebal (30–70 km), tersusun dari batuan granitis yang kaya Silisium dan Alumunium (Sial), serta memiliki massa jenis lebih ringan. Sebaliknya, kerak samudra lebih tipis (5–10 km), tersusun dari batuan basaltis yang kaya Silisium dan Magnesium (Sima), serta memiliki massa jenis yang lebih padat/berat."
  },
  {
    pertanyaan: "Mengapa fenomena cuaca seperti hujan, badai, dan awan hanya terjadi di lapisan troposfer, tidak di lapisan stratosfer atau lapisan di atasnya? Jelaskan alasan fisisnya!",
    kunciJawaban: "Karena hampir seluruh massa uap air dan aerosol atmosfer terkonsentrasi di lapisan troposfer akibat gaya gravitasi bumi. Tanpa adanya komponen uap air yang cukup, proses kondensasi dan pembentukan cuaca tidak dapat berlangsung di lapisan stratosfer ke atas."
  },
  {
    pertanyaan: "Siklus hidrologi adalah proses perputaran air yang terus-menerus di bumi. Analisis apa yang akan terjadi pada siklus hidrologi di suatu wilayah jika tutupan vegetasi (hutan) di wilayah tersebut habis akibat penebangan liar!",
    kunciJawaban: "Hilangnya vegetasi akan menurunkan tingkat infiltrasi (penyerapan air ke dalam tanah) dan menurunkan evapotranspirasi. Dampaknya, limpasan permukaan (surface runoff) akan meningkat tajam sehingga memicu erosi, tanah longsor, kekeringan air tanah saat kemarau, dan banjir saat musim hujan."
  },
  {
    pertanyaan: "Biosfer tidak dapat berdiri sendiri melainkan terbentuk dari irisan lapisan litosfer, hidrosfer, dan atmosfer. Berikan argumen dan contoh konkret bagaimana ketiga lapisan fisik tersebut mendukung kehidupan di dalam biosfer!",
    kunciJawaban: "Litosfer menyediakan media tanah sebagai tempat berpijak dan sumber unsur hara bagi tumbuhan. Hidrosfer menyediakan pasokan air untuk metabolisme makhluk hidup. Atmosfer menyediakan oksigen untuk respirasi dan karbon dioksida untuk fotosintesis. Contohnya: Hutan hujan tropis tumbuh subur karena tanahnya subur (litosfer), curah hujannya tinggi (hidrosfer), dan mendapat pasokan udara serta sinar matahari yang cukup (atmosfer)."
  },
  {
    pertanyaan: "Manusia di lapisan antroposfer memiliki akal budi yang mampu merekayasa lingkungan sekitar. Jelaskan dampak positif dan negatif dari rekayasa antroposfer terhadap kelestarian lapisan geosfer lainnya!",
    kunciJawaban: "Dampak positif: Pembuatan terasering (rekayasa litosfer) mencegah longsor, dan pengolahan limbah cair menjaga kualitas hidrosfer. Dampak negatif: Pembakaran bahan bakar fosil menghasilkan emisi karbon yang merusak atmosfer (pemanasan global), serta pembukaan lahan masif yang merusak habitat flora-fauna di biosfer."
  }
];
