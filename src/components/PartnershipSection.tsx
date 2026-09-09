"use client";

import { useState } from "react";
import {
  GraduationCap,
  Megaphone,
  UsersThree,
  Coins,
  Handshake,
  DownloadSimple,
  CheckCircle,
  WhatsappLogo,
  ArrowRight,
  FilePdf,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site, waLink } from "@/lib/site";

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
      setError("Mohon lengkapi semua data di bawah agar dokumen S&K dapat diunduh.");
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
    `Assalamu'alaikum PGS Travel, saya ${name || "Calon Mitra"} dari ${domicile || "Indonesia"} (Email: ${email}, WA: ${phone}). Saya telah membaca S&K Kemitraan dan berminat bergabung menjadi mitra PGS Travel.`
  );

  return (
    <div className="py-10 sm:py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Pembuka Narasi */}
          <Reveal className="rounded-2xl border border-line bg-paper-2 p-6 shadow-xs sm:p-10">
            <div className="border-b border-line pb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-bright">
                Jalin Kemitraan Bersama PGS TRAVEL
              </span>
              <h2 className="headline mt-2 text-2xl font-bold text-ink sm:text-3xl lg:text-[2.2rem]">
                Tumbuh Bersama, Mengantar Langkah, Memaknai Ibadah
              </h2>
            </div>

            <div className="mt-6 space-y-4 text-xs leading-relaxed text-ink-soft sm:text-[14px]">
              <p>
                Setiap perjalanan menuju Baitullah adalah sebuah amanah. Di balik
                setiap jamaah yang berangkat, ada keluarga yang mempercayakan
                perjalanan ibadahnya kepada kita. Karena itu, di PGS TRAVEL kami
                tidak ingin berjalan sendiri.
              </p>
              <p>
                Kami membuka kesempatan bagi Anda untuk tumbuh bersama PGS sebagai
                mitra dalam mengantar, mendampingi dan melayani tamu-tamu Allah
                SWT. Menjadi mitra PGS bukan sekadar membantu memperkenalkan
                program perjalanan. Lebih dari itu, Anda menjadi bagian dari
                sebuah ikhtiar untuk menghadirkan perjalanan ibadah yang aman,
                nyaman, hangat, dan penuh makna.
              </p>
              <p>
                Kami percaya bahwa pelayanan yang baik lahir dari orang-orang yang
                memiliki kepedulian. Karena itu, PGS ingin membangun kemitraan
                yang saling menguatkan — bukan hanya meminta mitra untuk tumbuh
                bersama kami, tetapi juga membantu mitra untuk berkembang bersama
                PGS.
              </p>
            </div>
          </Reveal>

          {/* Apa yang Akan Anda Dapatkan? */}
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-bright">
                    Dukungan Nyata
                  </span>
                  <h3 className="headline mt-1.5 text-xl font-bold text-ink sm:text-2xl lg:text-3xl">
                    Apa yang Akan Anda Dapatkan?
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-paper-2 transition-transform duration-200 hover:-translate-y-px hover:bg-brand-deep"
                >
                  <DownloadSimple size={15} weight="bold" />
                  Download S&amp;K di Sini
                </button>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                Sebagai mitra PGS, Anda akan mendapatkan dukungan yang kami siapkan
                untuk membantu Anda menjalankan peran dengan lebih percaya diri,
                antara lain:
              </p>
            </Reveal>

            {/* 5 Poin Manfaat */}
            <div className="mt-8 grid gap-4">
              {/* 1. Pendampingan & Pelatihan */}
              <Reveal className="rounded-xl border border-line bg-paper-2 p-5 transition-all duration-200 hover:border-line-strong hover:shadow-xs sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-brand-bright">
                    <GraduationCap size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                      Pendampingan &amp; Pelatihan
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                      Kami membekali mitra dengan pengetahuan mengenai produk,
                      pelayanan jamaah, komunikasi, dan cara membangun kepercayaan
                      calon jamaah.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 2. Support Marketing */}
              <Reveal className="rounded-xl border border-line bg-paper-2 p-5 transition-all duration-200 hover:border-line-strong hover:shadow-xs sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-brand-bright">
                    <Megaphone size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                      Support Marketing
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                      PGS menyediakan materi dan dukungan pemasaran yang dapat
                      membantu Anda memperkenalkan program PGS kepada keluarga,
                      komunitas, majelis, maupun lingkungan sekitar.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 3. Pendampingan Berkelanjutan */}
              <Reveal className="rounded-xl border border-line bg-paper-2 p-5 transition-all duration-200 hover:border-line-strong hover:shadow-xs sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-brand-bright">
                    <UsersThree size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                      Pendampingan Berkelanjutan
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                      <strong className="text-ink">Anda tidak berjalan sendiri. Tim PGS siap mendampingi proses komunikasi dan pelayanan kepada</strong> calon jamaah hingga mereka siap melakukan perjalanan.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* 4. Insentif & Penghasilan Tambahan (With CTA Trigger) */}
              <Reveal className="rounded-xl border-2 border-brand-bright/40 bg-paper-2 p-5 transition-all duration-200 hover:border-brand-bright hover:shadow-xs sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-bright/10 text-brand-bright">
                    <Coins size={22} weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                        Insentif &amp; Penghasilan Tambahan
                      </h4>
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
                        Ada Skema Komisi
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                      Setiap kontribusi yang berhasil menghadirkan jamaah melalui
                      kemitraan akan mendapatkan apresiasi sesuai dengan skema
                      kemitraan PGS.
                    </p>
                    <div className="mt-3.5 pt-3 border-t border-line">
                      <button
                        type="button"
                        onClick={scrollToForm}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-deep hover:underline sm:text-sm"
                      >
                        <FilePdf size={16} weight="duotone" className="text-brand-bright" />
                        Pelajari ketentuan dan skema kemitraan di sini (Download S&amp;K PDF) &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 5. Mari Tumbuh Bersama */}
              <Reveal className="rounded-xl border border-line bg-paper-2 p-5 transition-all duration-200 hover:border-line-strong hover:shadow-xs sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-paper text-brand-bright">
                    <Handshake size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                      Mari Tumbuh Bersama
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:text-sm">
                      Kami percaya bahwa keberhasilan PGS bukan hanya tentang berapa
                      banyak jamaah yang dapat kami berangkatkan. Keberhasilan kami
                      adalah ketika semakin banyak orang dapat merasakan perjalanan
                      ibadah yang lebih baik, dan semakin banyak orang yang
                      mendapatkan kesempatan untuk mengambil bagian dalam kebaikan
                      tersebut. Karena itu, kami mengundang Anda untuk menjadi
                      bagian dari perjalanan ini.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Penutup Inspiratif */}
          <Reveal className="my-10 rounded-2xl bg-ink-2 p-6 text-paper-2 sm:my-14 sm:p-8">
            <p className="font-display text-base leading-relaxed text-paper-2/95 sm:text-lg">
              &ldquo;Mari bertumbuh bersama, Mari saling menguatkan, Mari
              mengantar langkah para tamu Allah Dan bersama-sama kita memaknai
              setiap perjalanan sebagai bagian dari ibadah.&rdquo;
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-paper-2/15 pt-3 text-xs sm:text-sm">
              <span className="font-semibold text-accent-soft">
                Mengantar Langkah, Memaknai Ibadah
              </span>
              <span className="text-paper-2/60">{site.name}</span>
            </div>
          </Reveal>

          {/* Form Download S&K Kemitraan */}
          <div id="form-sk-kemitraan" className="scroll-mt-24">
            <Reveal className="rounded-2xl border-2 border-brand-bright/30 bg-paper-2 p-6 shadow-sm sm:p-10">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-bright/10 px-3 py-1 text-xs font-bold text-brand-bright">
                  <FilePdf size={16} weight="fill" />
                  Dokumen Resmi S&amp;K Kemitraan
                </span>
                <h3 className="headline mt-3 text-2xl font-bold text-ink sm:text-3xl">
                  Download S&amp;K Kemitraan PGS Travel
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  Silakan lengkapi formulir singkat di bawah ini. Setelah seluruh data
                  terisi lengkap, dokumen PDF Syarat &amp; Ketentuan Kemitraan resmi
                  akan otomatis terunduh ke perangkat Anda.
                </p>
              </div>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/70 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={26} weight="fill" className="mt-0.5 shrink-0 text-emerald-600" />
                    <div>
                      <h4 className="font-display text-base font-bold text-emerald-950">
                        Formulir Berhasil Terverifikasi!
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-emerald-800 sm:text-sm">
                        Terima kasih, <strong>{name}</strong> ({domicile}). Dokumen{" "}
                        <span className="font-semibold">Syarat_dan_Ketentuan_Kemitraan_PGS_Travel.pdf</span> sedang
                        atau telah diunduh ke perangkat Anda.
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <a
                          href="/docs/sk-kemitraan-pgs-travel.pdf"
                          download="Syarat_dan_Ketentuan_Kemitraan_PGS_Travel.pdf"
                          className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-800"
                        >
                          <DownloadSimple size={15} weight="bold" />
                          Download Ulang PDF
                        </a>
                        <a
                          href={waLeadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-deep"
                        >
                          <WhatsappLogo size={16} weight="fill" />
                          Hubungi Tim Kemitraan via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="mt-8 space-y-4">
                  {error ? (
                    <div className="rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-700 border border-rose-200">
                      {error}
                    </div>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
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
                        className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink placeholder:text-ink-faint focus:border-brand-bright focus:outline-hidden focus:ring-2 focus:ring-brand-bright/20 sm:text-sm"
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
                        className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink placeholder:text-ink-faint focus:border-brand-bright focus:outline-hidden focus:ring-2 focus:ring-brand-bright/20 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
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
                        className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink placeholder:text-ink-faint focus:border-brand-bright focus:outline-hidden focus:ring-2 focus:ring-brand-bright/20 sm:text-sm"
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
                        className="mt-1.5 w-full rounded-xl border border-line bg-paper px-3.5 py-2.5 text-xs text-ink placeholder:text-ink-faint focus:border-brand-bright focus:outline-hidden focus:ring-2 focus:ring-brand-bright/20 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-xs font-semibold text-paper-2 transition-all duration-200 hover:bg-brand-deep hover:shadow-md sm:w-auto sm:px-8 sm:text-sm"
                    >
                      <DownloadSimple size={16} weight="bold" />
                      Download Full Dokumen S&amp;K (PDF)
                      <ArrowRight size={14} weight="bold" />
                    </button>
                    <p className="mt-2 text-[11px] text-ink-faint">
                      Dengan melengkapi formulir ini, Anda dapat langsung mengunduh dokumen S&amp;K Kemitraan resmi PGS Travel.
                    </p>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
