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
    name: "Madinah",
    place: "Masjid Nabawi",
    blurb:
      "Kota Rasulullah. Rombongan tinggal di hotel dekat pelataran, dengan program Raudhah dan ziarah kota.",
    image: "/img/nabawi.jpg",
  },
  {
    name: "Makkah",
    place: "Masjidil Haram",
    blurb:
      "Pusat kiblat umat Islam. Umroh dua kali dengan miqat Bir Ali dan At-Tan'im, ditambah city tour Makkah.",
    image: "/img/makkah.jpg",
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
    trip: "Umroh Mahabbah, 2025",
  },
  {
    quote:
      "Rincian biayanya jelas dari awal, tidak ada tambahan mendadak. Hotel di Makkah benar-benar dekat, tinggal jalan kaki ke Masjidil Haram.",
    name: "Retno Wulandari",
    role: "Guru, Serang",
    trip: "Umroh Mahabbah, 2024",
  },
  {
    quote:
      "Manasik tiga kali membuat kami tenang. Sampai di sana semua terasa sudah dikenal, tinggal fokus ibadah. Umroh yang kedua di At-Tan'im juga dipandu dengan sabar.",
    name: "Keluarga Nugroho",
    role: "Rombongan keluarga, Tangerang",
    trip: "Umroh Mahabbah, 2025",
  },
  {
    quote:
      "Kereta cepat ke Madinah bikin perjalanan tidak melelahkan untuk orang tua. Jadwal istirahat diatur, jadi badan tetap kuat sampai pulang.",
    name: "Ustadz Abdul Latif",
    role: "Jamaah asal Pandeglang",
    trip: "Umroh Mahabbah, 2025",
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
    title: "Pilih kamar & daftar",
    body: "Pilih jenis kamar (Double, Triple, atau Quad), isi formulir, serahkan salinan paspor, lalu bayar uang muka untuk mengunci kursi.",
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
      title: "Satu paket, satu fokus",
      body: "PGS hanya menjalankan satu paket dengan satu jadwal keberangkatan, supaya seluruh perhatian tertuju pada rombongan yang sama.",
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
      body: "Hotel Makkah Maysan Al Mashaer dan Madinah Astoneast Taiba, keduanya dalam jarak dekat dari masjid.",
    },
  ],
  // TODO(pgs): lengkapi dengan data resmi (tahun berdiri, jumlah jamaah).
  stats: [
    { value: "1", label: "Paket dengan satu jadwal keberangkatan" },
    { value: "9", label: "Hari program: Madinah dan Makkah" },
    { value: "3x", label: "Pelatihan manasik sebelum berangkat" },
  ],
};

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "Apakah PGS Tour sudah berizin resmi?",
    a: "Ya. PGS Tour beroperasi sebagai Penyelenggara Perjalanan Ibadah Umrah (PPIU) berizin dengan Izin PPIU No. 0910230162686860001, dan terdaftar di SISKOPATUH. Nomor izin dapat diverifikasi melalui kanal Kementerian Agama.",
  },
  {
    q: "Apa saja yang membedakan harga Double, Triple, dan Quad?",
    a: "Hanya jumlah orang per kamar hotel. Quad (berempat) Rp 35,5 juta, Triple (bertiga) Rp 38,5 juta, dan Double (berdua) Rp 41,5 juta. Program, hotel, dan fasilitas lainnya sama persis.",
  },
  {
    q: "Kapan jadwal keberangkatannya?",
    a: "PGS Tour menjalankan satu jadwal keberangkatan. Hubungi kami melalui WhatsApp untuk mengetahui tanggal keberangkatan terdekat dan sisa kuota.",
  },
  {
    q: "Apa saja yang belum termasuk dalam harga paket?",
    a: "Pembuatan paspor, vaksin meningitis dan polio, kelebihan bagasi, serta keperluan dan transportasi pribadi dari daerah masing-masing. Selebihnya sudah termasuk.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Pembayaran hanya melalui rekening resmi BCA 5411 42 2071 a.n. PT. Permana Group Sejahtera. Pendaftaran dikunci dengan uang muka, sisanya dilunasi sebelum keberangkatan.",
  },
  {
    q: "Apakah PGS juga melayani pengurusan visa umroh saja?",
    a: "Ya. Selain paket umroh, PGS Travel melayani pengurusan visa umroh untuk perorangan dan rombongan, termasuk visa longstay hingga 85 hari. Rinciannya ada di halaman Visa Umroh.",
  },
];
