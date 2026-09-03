// Range Journal reminder: keep copy concrete, directional, and field-note-like; keep all copy and URLs centralized here.

export const siteContent = {
  brand: {
    name: "Gendewo Archery",
    shortName: "Gendewo",
    descriptor: "Komunitas Panahan Wonosobo",
    tagline: "Bidik tepat. Tumbuh bersama.",
    location: "Wonosobo, Jawa Tengah",
  },
  externalUrl: "https://alwgen.com",
  nav: [
    { label: "Beranda", href: "/" },
    { label: "Latihan", href: "/latihan" },
    { label: "Program", href: "/program" },
    { label: "Pelatih", href: "/pelatih" },
    { label: "Kompetisi", href: "/kompetisi" },
    { label: "Keanggotaan", href: "/keanggotaan" },
  ],
  ctas: {
    primary: "Mulai dari sini",
    booking: "Booking latihan",
    schedule: "Lihat jadwal latihan",
    membership: "Tanya keanggotaan",
    programs: "Jelajahi program",
    coaches: "Lihat semua pelatih",
  },
  assets: {
    hero: "https://images.pexels.com/photos/14646634/pexels-photo-14646634.jpeg?auto=compress&cs=tinysrgb&w=1600",
    community: "https://images.pexels.com/photos/32162985/pexels-photo-32162985.jpeg?auto=compress&cs=tinysrgb&w=1600",
    detail: "https://images.pexels.com/photos/545006/pexels-photo-545006.jpeg?auto=compress&cs=tinysrgb&w=1600",
    coach: "https://images.pexels.com/photos/6655530/pexels-photo-6655530.jpeg?auto=compress&cs=tinysrgb&w=1600",
    action: "https://images.pexels.com/photos/6669394/pexels-photo-6669394.jpeg?auto=compress&cs=tinysrgb&w=1200",
    advanced: "https://images.pexels.com/photos/15163683/pexels-photo-15163683.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  home: {
    hero: {
      title: "Bidik Tepat.",
      caption: {
        tag: "— Sejak 2015",
        text: "Melahirkan Pemanah Berprestasi dari Wonosobo",
      },
      notes: {
        left: [
          "Ruang latihan untuk pemanah yang ingin hadir dengan fokus dan pulang membawa progres.",
          "Sejak 2015, Gendewo tumbuh bersama komunitas panahan Wonosobo.",
        ],
        right: [
          "150+ pemanah aktif berlatih bersama di range Gendewo setiap pekan.",
          "12+ pelatih bersertifikat mendampingi setiap kelompok latihan.",
          "Dari pemanasan hingga scoring, setiap sesi dirancang agar progres terasa nyata.",
        ],
      },
    },
    intro: {
      label: "Tentang Kami",
      title: "Melahirkan Pemanah Berprestasi dari Wonosobo",
      paragraphs: [
        "Gendewo Archery adalah komunitas panahan berbasis di Wonosobo yang menyediakan program latihan berkualitas untuk pemanah segala usia dan level. Dari pemula yang baru mengenal busur hingga atlet yang bersaing di kejuaraan nasional, pelatih kami fokus pada teknik, postur, dan mental bertanding. Setiap sesi dirancang agar progres terasa nyata, bukan sekadar rutinitas menembak target.",
        "Kami memadukan metode latihan modern, evaluasi performa, dan pendampingan pelatih bersertifikat agar setiap anggota bisa mencapai potensi terbaiknya di lapangan panahan. Program disusun bertahap, dari pengenalan dasar hingga simulasi kompetisi, sehingga setiap pemanah tahu persis di titik mana mereka berada. Kami juga menjaga rasio pelatih dan peserta tetap kecil agar koreksi teknik bisa diberikan secara personal. Evaluasi dilakukan rutin lewat catatan latihan sederhana yang mudah dipahami.",
        "Lebih dari sekadar tempat latihan, Gendewo adalah komunitas yang saling menjaga semangat berlatih. Anggota dari berbagai usia dan latar belakang berlatih bersama setiap akhir pekan, berbagi catatan, dan merayakan progres sekecil apa pun. Kami percaya panahan bukan hanya soal ketepatan bidikan, tapi juga tentang membangun ketenangan dan kepercayaan diri yang terbawa ke luar garis tembak.",
      ],
    },
    proof: [
      { value: "150+", label: "Anggota Aktif" },
      { value: "12+", label: "Pelatih Bersertifikat" },
    ],
    years: {
      number: "10",
      label: "Tahun Berprestasi",
      bullets: ["Pelatih bersertifikasi nasional", "Lapangan panahan standar nasional", "Program latihan sesuai level"],
    },
    practice: {
      label: "Program Latihan",
      title: "Setiap anak panah punya catatan.",
      description: "Dari pemanasan sampai evaluasi, kami merancang latihan agar progres terasa, terukur, dan tetap menyenangkan.",
      cards: [
        { assetKey: "detail", title: "Peralatan & Pemanasan" },
        { assetKey: "coach", title: "Latihan Pemula", credit: "Budi Santoso" },
        { assetKey: "advanced", title: "Latihan Lanjutan", credit: "Rian Pratama" },
      ],
    },
    manifesto: {
      label: "Cara kami berlatih",
      title: "Fokus di garis. Berani di luar garis.",
      description: "Program kami dirancang untuk membentuk teknik, fokus, dan keberanian mengambil ruang di kompetisi maupun kehidupan sehari-hari.",
    },
    callout: {
      title: "Temukan jarak yang pas untuk langkah berikutnya.",
      description: "Datang sebagai pemula. Pulang sebagai bagian dari tim.",
    },
  },
  programs: [
    {
      number: "01",
      name: "Kelas Pemula",
      audience: "Pemula · 6–14 tahun",
      description: "Latihan dasar yang menyenangkan untuk usia 6–14 tahun, membangun teknik dan kecintaan pada panahan.",
      schedule: "Sabtu · 08.00",
      price: "Mulai Rp150rb / bulan",
    },
    {
      number: "02",
      name: "Kelas Umum",
      audience: "Dewasa",
      description: "Sesi kelompok kecil untuk dewasa, fokus pada teknik, postur, dan latihan bertanding.",
      schedule: "Selasa & Kamis · 16.00",
      price: "Mulai Rp120rb / bulan",
    },
    {
      number: "03",
      name: "Latihan Privat",
      audience: "Sesi personal",
      description: "Sesi satu-lawan-satu yang disesuaikan dengan target dan kebutuhan bersama pelatih bersertifikat.",
      schedule: "By appointment",
      price: "Mulai Rp75rb / sesi",
    },
    {
      number: "04",
      name: "Kelas Prestasi",
      audience: "Atlet kompetisi",
      description: "Latihan kompetitif untuk atlet yang menuju kejuaraan — fisik, strategi, dan analisis performa.",
      schedule: "Senin, Rabu, Jumat · 16.30",
      price: "Mulai Rp400rb / bulan",
    },
  ],
  coaches: [
    { name: "Agus Wirawan", role: "Teknik Recurve · 12 thn", note: "Head coach", badge: "Pelatih Kepala" },
    { name: "Dewi Kusuma", role: "Pembinaan Yunior · 9 thn", note: "Fundamental & fun", badge: null },
    { name: "Yoga Prasetyo", role: "Fisik & Postur · 7 thn", note: "Kondisi & kekuatan", badge: null },
    { name: "Sri Rahayu", role: "Persiapan Kompetisi · 11 thn", note: "Mental & strategi", badge: "Elite" },
  ],
  competitions: [
    { month: "MAR", title: "Gendewo Local Round", detail: "Friendly scoring · 18 m", status: "Selesai" },
    { month: "JUN", title: "Wonosobo Open", detail: "Recurve & compound · 30 m", status: "Pendaftaran dibuka" },
    { month: "SEP", title: "Highland Championship", detail: "Open class · 50 m", status: "Segera hadir" },
  ],
  membership: {
    label: "Keanggotaan",
    title: "Masuk ke garis tembak dengan versi terbaikmu.",
    description: "Keanggotaan memberi akses ke jadwal latihan rutin, peminjaman perlengkapan dasar, dan komunitas yang saling menjaga progres.",
    benefits: ["Jadwal latihan mingguan", "Pendampingan teknik dasar", "Akses community round", "Ruang evaluasi progres"],
  },
  footer: {
    description: "Komunitas panahan berbasis di Wonosobo sejak 2015 — pelatih bersertifikat, lapangan standar nasional, dan program latihan untuk semua level.",
    links: [
      { label: "Beranda", href: "/" },
      { label: "Latihan", href: "/latihan" },
      { label: "Program", href: "/program" },
      { label: "Pelatih", href: "/pelatih" },
    ],
    community: [
      { label: "Kompetisi", href: "/kompetisi" },
      { label: "Keanggotaan", href: "/keanggotaan" },
    ],
    contact: {
      email: "halo@gendewoarchery.id",
      phone: "+62 812-3456-7890",
      address: "Lapangan Panahan Kalibeber, Wonosobo",
    },
  },
} as const;

export type Program = (typeof siteContent.programs)[number];
export type Coach = (typeof siteContent.coaches)[number];
export type Competition = (typeof siteContent.competitions)[number];
