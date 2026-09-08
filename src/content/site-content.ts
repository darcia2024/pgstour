/**
 * Konten naratif situs: nilai, destinasi, testimoni, FAQ, langkah pendaftaran.
 * Dipisah dari komponen supaya klien mudah menyunting teks tanpa menyentuh layout.
 */

export const belief = {
  label: "Keyakinan Kami",
  quote:
    "Perjalanan umrah bukan sekadar perpindahan dari satu negara ke negara lain, tapi perjalanan hati yang dapat mengubah cara seseorang memandang hidup, ibadah, dan cintanya kepada Allah dan Rasul-Nya. Karena itu kami hadir mendampingi setiap tamu Allah agar dapat menjalani ibadah dengan tenang, nyaman, khusyuk, dan penuh makna.",
};

export type Value = {
  title: string;
  body: string;
  icon: "compass" | "hands" | "shield" | "users" | "book" | "heart";
};

export const values: Value[] = [
  {
    title: "Pembimbing yang menemani, bukan sekadar memandu",
    body: "Setiap rombongan didampingi pembimbing ibadah yang siap menjawab pertanyaan sekecil apa pun, dari tata cara tawaf sampai keraguan di hati.",
    icon: "compass",
  },
  {
    title: "Kelompok kecil, perhatian yang cukup",
    body: "Kuota tiap keberangkatan dijaga tetap kecil supaya jamaah lansia, keluarga dengan anak, dan yang baru pertama kali tetap terpantau.",
    icon: "users",
  },
  {
    title: "Perizinan resmi dan biaya yang jelas",
    body: "Berizin sebagai Penyelenggara Perjalanan Ibadah Umrah. Rincian biaya dibuka sejak awal, tanpa komponen yang disembunyikan.",
    icon: "shield",
  },
  {
    title: "Bekal ilmu sebelum berangkat",
    body: "Manasik tidak hanya sekali. Ada kelas persiapan, materi bacaan, dan grup diskusi supaya jamaah paham makna setiap rukun.",
    icon: "book",
  },
  {
    title: "Hotel dekat, logistik rapi",
    body: "Kami memilih hotel sedekat mungkin dengan masjid dan mengatur bus, katering, serta koper agar jamaah bisa fokus beribadah.",
    icon: "hands",
  },
  {
    title: "Hubungan yang berlanjut setelah pulang",
    body: "Selesai perjalanan bukan akhir. Alumni PGS terhubung dalam kegiatan kajian dan reuni rombongan.",
    icon: "heart",
  },
];

export type Destination = {
  name: string;
  place: string;
  blurb: string;
  /** Placeholder label until a real photo lands in /public. */
  image: string;
};

export const destinations: Destination[] = [
  {
    name: "Makkah",
    place: "Masjidil Haram",
    blurb:
      "Pusat kiblat umat Islam. Di sinilah tawaf, sai, dan doa-doa panjang dipanjatkan menghadap Ka'bah.",
    image: "Ka'bah, Masjidil Haram",
  },
  {
    name: "Madinah",
    place: "Masjid Nabawi",
    blurb:
      "Kota Rasulullah. Ketenangannya terasa sejak memasuki gerbang, dengan Raudhah sebagai salah satu taman surga.",
    image: "Kubah Hijau, Masjid Nabawi",
  },
  {
    name: "Al-Quds",
    place: "Masjidil Aqsa",
    blurb:
      "Masjid ketiga yang dimuliakan dan tempat awal perjalanan Isra Mikraj. Tersedia dalam paket Umrah Plus Aqsa.",
    image: "Kota tua Al-Quds",
  },
  {
    name: "Istanbul",
    place: "Warisan Utsmani",
    blurb:
      "Jejak kekhalifahan yang terbentang dari Hagia Sophia sampai Masjid Sultan Ahmed, menyusuri dua benua.",
    image: "Blue Mosque, Istanbul",
  },
  {
    name: "Cairo",
    place: "Mesir & Al-Azhar",
    blurb:
      "Negeri para nabi dan rumah bagi Universitas Al-Azhar, salah satu pusat keilmuan Islam tertua.",
    image: "Masjid Al-Azhar, Cairo",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  trip: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Saya berangkat bersama ibu yang sudah 70 tahun. Pembimbingnya sabar sekali, kursi roda selalu disiapkan, dan kami tidak pernah merasa ditinggal rombongan.",
    name: "Hamdan Firmansyah",
    role: "Jamaah asal Cilegon",
    trip: "Umrah Barokah, 2025",
  },
  {
    quote:
      "Rincian biayanya jelas dari awal, tidak ada tambahan mendadak. Hotel di Makkah benar-benar dekat, tinggal jalan kaki ke Masjidil Haram.",
    name: "Retno Wulandari",
    role: "Guru, Serang",
    trip: "Umrah Barokah, 2024",
  },
  {
    quote:
      "Bagian Istanbulnya bikin paham kenapa peradaban Islam pernah begitu besar. Pemandunya bisa bahasa Indonesia, jadi anak-anak ikut mengerti.",
    name: "Keluarga Nugroho",
    role: "Rombongan keluarga, Tangerang",
    trip: "Umrah Plus Turki, 2025",
  },
  {
    quote:
      "Sepuluh malam terakhir Ramadhan di Makkah adalah hal yang tidak bisa saya jelaskan dengan kata-kata. Jadwal istirahatnya diatur, jadi badan tetap kuat sampai pulang.",
    name: "Ustadz Abdul Latif",
    role: "Jamaah asal Pandeglang",
    trip: "Umrah Ramadhan, 2025",
  },
];

export type Step = {
  n: string;
  title: string;
  body: string;
};

export const registrationSteps: Step[] = [
  {
    n: "01",
    title: "Konsultasi",
    body: "Hubungi kami lewat WhatsApp atau datang ke kantor. Ceritakan rencana, jumlah rombongan, dan tanggal yang diinginkan.",
  },
  {
    n: "02",
    title: "Pilih paket & daftar",
    body: "Isi formulir pendaftaran, serahkan salinan paspor dan dokumen, lalu bayar uang muka untuk mengunci kursi.",
  },
  {
    n: "03",
    title: "Persiapan & manasik",
    body: "Ikuti kelas manasik, lengkapi pelunasan dan vaksin, terima perlengkapan, dan bergabung ke grup rombongan.",
  },
  {
    n: "04",
    title: "Berangkat",
    body: "Berkumpul di bandara bersama pembimbing. Sejak titik ini, seluruh logistik menjadi urusan kami.",
  },
];

export const about = {
  story: [
    "PGS Tour & Travel lahir di Serang, Banten, dari keresahan sederhana: terlalu banyak jamaah yang pulang dari umrah tanpa benar-benar memahami apa yang mereka kerjakan di sana. Perjalanan terasa seperti paket wisata yang ditempeli ibadah, bukan sebaliknya.",
    "Nama Pesona Global Syiarbaitullah kami pilih sebagai pengingat: tugas kami adalah menyampaikan syiar rumah Allah, bukan sekadar menjual kursi pesawat. Karena itu kami menjaga rombongan tetap kecil, menempatkan pembimbing yang benar-benar menemani, dan membuka rincian biaya sejak percakapan pertama.",
    "Sampai hari ini kami tetap perusahaan keluarga yang mengenal jamaahnya satu per satu. Banyak yang kembali berangkat bersama kami, kali ini mengajak orang tua, anak, atau tetangga.",
  ],
  principles: [
    {
      title: "Rombongan kecil",
      body: "Maksimal 40 jamaah untuk umrah reguler, lebih sedikit untuk paket plus. Pembimbing selalu bisa menghitung kepala.",
    },
    {
      title: "Biaya terbuka",
      body: "Rincian komponen biaya diberikan sebelum Anda mendaftar. Tidak ada biaya kejutan menjelang keberangkatan.",
    },
    {
      title: "Pembimbing menetap",
      body: "Satu pembimbing mendampingi rombongan dari manasik di tanah air sampai kembali mendarat, bukan berganti-ganti.",
    },
    {
      title: "Hotel yang jujur",
      body: "Jarak hotel ke masjid kami sebutkan apa adanya dalam meter, bukan istilah samar seperti dekat.",
    },
  ],
  // TODO(pgs): ganti angka berikut dengan data resmi (tahun berdiri, jumlah
  // jamaah yang sudah diberangkatkan, dsb). Untuk saat ini dibuat kualitatif.
  stats: [
    { value: "40", label: "Jamaah maksimal per rombongan umrah reguler" },
    { value: "1", label: "Pembimbing menetap dari manasik sampai kepulangan" },
    { value: "4", label: "Negara tujuan: Arab Saudi, Palestina, Turki, Mesir" },
  ],
};

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Apakah PGS Tour sudah berizin resmi?",
    a: "Ya. PGS Tour & Travel beroperasi sebagai Penyelenggara Perjalanan Ibadah Umrah (PPIU) berizin. Nomor SK resmi dicantumkan di halaman Tentang Kami dan dapat diverifikasi melalui kanal Kementerian Agama.",
  },
  {
    q: "Berapa lama sebaiknya mendaftar sebelum keberangkatan?",
    a: "Untuk umrah reguler, idealnya 1 sampai 2 bulan sebelumnya agar visa dan akomodasi terjamin. Untuk Umrah Ramadhan dan Umrah Plus Aqsa, disarankan 3 sampai 6 bulan sebelumnya karena kuota sangat terbatas.",
  },
  {
    q: "Apakah harga yang tertera sudah final?",
    a: "Harga di situs ini bersifat estimasi mulai dari. Harga final dikunci saat pendaftaran dan bergantung pada kurs, harga tiket, pilihan kamar, serta tanggal keberangkatan. Semua rincian akan dijelaskan tanpa biaya tersembunyi.",
  },
  {
    q: "Apa saja yang perlu saya siapkan sendiri?",
    a: "Paspor dengan masa berlaku minimal 8 bulan, vaksin meningitis, pas foto sesuai ketentuan, dan pengeluaran pribadi. Selebihnya termasuk dalam paket.",
  },
  {
    q: "Apakah bisa berangkat rombongan keluarga atau kantor?",
    a: "Bisa. Untuk rombongan minimal 20 orang, kami dapat mengatur keberangkatan khusus dengan jadwal, hotel, dan pembimbing tersendiri. Silakan mulai dari halaman Konsultasi.",
  },
  {
    q: "Bagaimana dengan jamaah lansia atau yang butuh pendampingan khusus?",
    a: "Kuota rombongan sengaja dijaga kecil. Kami menyiapkan kursi roda, mengatur ritme perjalanan, dan menempatkan pembimbing tambahan bila diperlukan. Sampaikan kondisi kesehatan sejak konsultasi awal.",
  },
];
