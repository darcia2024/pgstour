"use client";

import { useState } from "react";
import {
  DownloadSimple,
  CheckCircle,
  WhatsappLogo,
  ArrowRight,
  FilePdf,
  ArrowDown,
  LockKey,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/Reveal";
import { site, waLink } from "@/lib/site";

const benefits = [
  {
    num: "01",
    title: "Pendampingan & Pelatihan",
    desc: "Kami membekali mitra dengan pengetahuan mengenai produk, pelayanan jamaah, komunikasi, dan cara membangun kepercayaan calon jamaah.",
  },
  {
    num: "02",
    title: "Support Marketing",
    desc: "PGS menyediakan materi dan dukungan pemasaran yang dapat membantu Anda memperkenalkan program PGS kepada keluarga, komunitas, majelis, maupun lingkungan sekitar.",
  },
  {
    num: "03",
    title: "Pendampingan Berkelanjutan",
    desc: "Anda tidak berjalan sendiri. Tim PGS siap mendampingi proses komunikasi dan pelayanan kepada calon jamaah hingga mereka siap melakukan perjalanan.",
  },
  {
    num: "04",
    title: "Insentif & Penghasilan Tambahan",
    desc: "Setiap kontribusi yang berhasil menghadirkan jamaah melalui kemitraan akan mendapatkan apresiasi sesuai dengan skema kemitraan PGS yang transparan.",
    hasCta: true,
  },
  {
    num: "05",
    title: "Mari Tumbuh Bersama",
    desc: "Kami percaya bahwa keberhasilan PGS bukan hanya tentang berapa banyak jamaah yang dapat kami berangkatkan. Keberhasilan kami adalah ketika semakin banyak orang dapat merasakan perjalanan ibadah yang lebih baik, dan semakin banyak orang yang mendapatkan kesempatan untuk mengambil bagian dalam kebaikan tersebut. Karena itu, kami mengundang Anda untuk menjadi bagian dari perjalanan ini.",
  },
];

export function PartnershipSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [domicile, setDomicile] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const scrollToForm = () => {
    const el = document.getElementById("form-sk-kemitraan");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const input = document.getElementById("input-nama");
      if (input) input.focus();
    }
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !domicile.trim() || !phone.trim()) {
      setError("Mohon lengkapi seluruh data di bawah agar dokumen S&K dapat diunduh.");
      return;
    }
    setError("");

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = "/docs/sk-kemitraan-pgs-travel.pdf";
    link.download = "Syarat_dan_Ketentuan_Kemitraan_PGS_Travel.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
  };

  const waLeadLink = waLink(
    `Assalamu'alaikum PGS Travel, saya ${name || "Calon Mitra"} dari ${domicile || "Indonesia"} (Email: ${email}, WA: ${phone}). Saya telah membaca S&K Kemitraan dan berminat bergabung menjadi mitra syiar PGS Travel.`
  );

  return (
    <div className="py-12 sm:py-16 bg-paper">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        {/* ======================================================== */}
        {/* 1. PEMBUKA NARASI & AMANAH (CLEAN EDITORIAL, ZERO BOXES) */}
        {/* ======================================================== */}
        <Reveal>
          <div className="border-l-2 border-brand-bright pl-5 sm:pl-6 my-2">
            <p className="font-display text-base italic leading-relaxed text-brand-deep sm:text-lg">
              &ldquo;Setiap perjalanan menuju Baitullah adalah sebuah amanah. Di balik setiap jamaah yang berangkat, ada keluarga yang mempercayakan perjalanan ibadahnya kepada kita. Karena itu, di PGS TRAVEL kami tidak ingin berjalan sendiri.&rdquo;
            </p>
          </div>

          <div className="mt-6 space-y-4 text-xs leading-relaxed text-ink-soft sm:text-[15px]">
            <p>
              Kami membuka kesempatan bagi Anda untuk tumbuh bersama PGS sebagai mitra dalam mengantar, mendampingi dan melayani tamu-tamu Allah SWT. Menjadi mitra PGS bukan sekadar membantu memperkenalkan program perjalanan. Lebih dari itu, Anda menjadi bagian dari sebuah ikhtiar untuk menghadirkan perjalanan ibadah yang aman, nyaman, hangat, dan penuh makna.
            </p>

            <p>
              Kami percaya bahwa pelayanan yang baik lahir dari orang-orang yang memiliki kepedulian. Karena itu, PGS ingin membangun kemitraan yang saling menguatkan. Kami tidak hanya meminta mitra untuk tumbuh bersama kami, tetapi juga membantu mitra berkembang bersama PGS.
            </p>
          </div>

            <div className="mt-7 flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-semibold text-paper-2 shadow-xs transition-all duration-200 hover:-translate-y-px hover:bg-brand-deep hover:shadow-md sm:text-sm cursor-pointer"
              >
                <DownloadSimple size={16} weight="bold" />
                <span>Unduh S&amp;K Kemitraan (PDF)</span>
                <ArrowDown size={14} weight="bold" />
              </button>
            </div>
          </Reveal>

          {/* ======================================================== */}
          {/* 2. DUKUNGAN & MANFAAT (CLEAN NUMBERED ROWS, NO BOXES) */}
          {/* ======================================================== */}
          <div className="mt-16 sm:mt-24 border-t border-line pt-12 sm:pt-16">
            <Reveal className="mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-bright block">
                Dukungan Nyata
              </span>
              <h2 className="headline mt-1.5 text-xl font-bold text-ink sm:text-2xl lg:text-3xl">
                Apa yang Akan Anda Dapatkan?
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                Sebagai mitra PGS, Anda akan mendapatkan dukungan yang kami siapkan untuk membantu Anda menjalankan peran dengan lebih percaya diri, antara lain:
              </p>
            </Reveal>

            {/* Clean Numbered Rows */}
            <div className="divide-y divide-line border-y border-line">
              {benefits.map((b) => (
                <Reveal key={b.num} className="py-7 sm:py-8 grid gap-3 sm:grid-cols-[60px_1fr] sm:gap-6 items-baseline">
                  <span className="font-mono text-xl font-bold text-accent sm:text-2xl">
                    {b.num}
                  </span>

                  <div>
                    <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                      {b.desc}
                    </p>

                    {b.hasCta ? (
                      <div className="mt-3">
                        <button
                          type="button"
                          onClick={scrollToForm}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-deep hover:underline cursor-pointer"
                        >
                          <FilePdf size={16} weight="duotone" className="text-brand-bright" />
                          <span>Pelajari ketentuan &amp; skema insentif lengkap di formulir bawah ↓</span>
                        </button>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ======================================================== */}
          {/* 3. KUTIPAN PENUTUP KHIDMAT (AIRY PULL-QUOTE, ZERO BOX) */}
          {/* ======================================================== */}
          <Reveal className="my-16 sm:my-24 border-l-2 border-brand-bright pl-6 sm:pl-8 py-2">
            <p className="font-display text-lg italic leading-relaxed text-ink sm:text-xl lg:text-2xl">
              &ldquo;Mari bertumbuh bersama, Mari saling menguatkan, Mari mengantar langkah para tamu Allah, Dan bersama-sama kita memaknai setiap perjalanan sebagai bagian dari ibadah.&rdquo;
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent-soft">
              — {site.name} • Mengantar Langkah, Memaknai Ibadah
            </p>
          </Reveal>

          {/* ======================================================== */}
          {/* 4. FORMULIR DOWNLOAD S&K (CLEAN, ARCHITECTURAL, NO BOX)  */}
          {/* ======================================================== */}
          <div id="form-sk-kemitraan" className="scroll-mt-20 border-t border-line pt-12 sm:pt-16">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-bright">
                  <FilePdf size={15} weight="fill" />
                  Dokumen Resmi S&amp;K Kemitraan
                </span>
                <h2 className="headline mt-2 text-2xl font-bold text-ink sm:text-3xl">
                  Unduh Dokumen S&amp;K Kemitraan PGS Travel
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm max-w-xl">
                  Silakan lengkapi formulir di bawah ini. Dokumen PDF resmi Syarat &amp; Ketentuan Kemitraan akan langsung terunduh otomatis ke perangkat Anda.
                </p>
              </div>

              {submitted ? (
                <div className="mt-8 border-l-2 border-emerald-500 pl-6 py-3">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm sm:text-base">
                    <CheckCircle size={20} weight="fill" />
                    <span>Formulir Berhasil Diverifikasi!</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                    Terima kasih, <strong className="text-ink">{name}</strong> ({domicile}). Dokumen{" "}
                    <span className="font-semibold text-brand">Syarat_dan_Ketentuan_Kemitraan_PGS_Travel.pdf</span> sedang
                    atau telah diunduh ke perangkat Anda.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <a
                      href="/docs/sk-kemitraan-pgs-travel.pdf"
                      download="Syarat_dan_Ketentuan_Kemitraan_PGS_Travel.pdf"
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-paper-2 hover:bg-brand transition-colors"
                    >
                      <DownloadSimple size={15} weight="bold" />
                      Unduh Ulang PDF
                    </a>
                    <a
                      href={waLeadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-paper-2 hover:bg-brand-deep transition-colors"
                    >
                      <WhatsappLogo size={16} weight="fill" />
                      Hubungi Tim Kemitraan via WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="mt-8 space-y-5 max-w-2xl">
                  {error ? (
                    <div className="text-xs font-medium text-rose-600 border-l-2 border-rose-500 pl-3 py-1">
                      {error}
                    </div>
                  ) : null}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="input-nama" className="block text-xs font-semibold text-ink">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="input-nama"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: H. Ahmad Fauzi"
                        className="mt-1.5 w-full border-b border-line bg-transparent py-2 text-xs text-ink placeholder:text-ink-faint focus:border-brand focus:outline-hidden transition-colors sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="input-email" className="block text-xs font-semibold text-ink">
                        Alamat Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="input-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Contoh: ahmad@gmail.com"
                        className="mt-1.5 w-full border-b border-line bg-transparent py-2 text-xs text-ink placeholder:text-ink-faint focus:border-brand focus:outline-hidden transition-colors sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 pt-1">
                    <div>
                      <label htmlFor="input-domisili" className="block text-xs font-semibold text-ink">
                        Domisili / Kota Asal <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="input-domisili"
                        required
                        value={domicile}
                        onChange={(e) => setDomicile(e.target.value)}
                        placeholder="Contoh: Kota Serang, Banten"
                        className="mt-1.5 w-full border-b border-line bg-transparent py-2 text-xs text-ink placeholder:text-ink-faint focus:border-brand focus:outline-hidden transition-colors sm:text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-semibold text-ink">
                        Nomor WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="input-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 081234567890"
                        className="mt-1.5 w-full border-b border-line bg-transparent py-2 text-xs text-ink placeholder:text-ink-faint focus:border-brand focus:outline-hidden transition-colors sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-xs font-semibold text-paper-2 shadow-xs transition-all duration-200 hover:-translate-y-px hover:bg-brand-deep hover:shadow-md sm:text-sm cursor-pointer"
                    >
                      <DownloadSimple size={16} weight="bold" />
                      <span>Unduh Dokumen Lengkap S&amp;K (PDF)</span>
                      <ArrowRight size={14} weight="bold" />
                    </button>
                    <p className="mt-2 text-[11px] text-ink-faint">
                      Setelah melengkapi formulir, file PDF resmi akan otomatis terunduh ke perangkat Anda.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
      </div>
    </div>
  );
}
