"use client";

import { useState } from "react";
import { PaperPlaneTilt, WhatsappLogo, CheckCircle } from "@phosphor-icons/react";
import { site } from "@/lib/site";
import { packages } from "@/content/packages";

/*
  No backend: on submit we compose a WhatsApp message from the fields and open
  the chat. The form still validates and shows loading / success / error states.
  TODO(pgs): if you later want submissions by email or into a CRM, wire a
  Server Action or a form service here.
*/

type Status = "idle" | "sending" | "sent" | "error";

const fieldBase =
  "w-full rounded-xl border border-ink/25 bg-paper-2 px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-bright/40";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("nama") ?? "").trim();
    const phone = String(data.get("telepon") ?? "").trim();
    if (!name || !phone) {
      setStatus("error");
      setError("Nama dan nomor WhatsApp wajib diisi.");
      return;
    }

    setStatus("sending");

    const lines = [
      "Assalamu'alaikum PGS Tour, saya ingin berkonsultasi.",
      "",
      `Nama: ${name}`,
      `WhatsApp: ${phone}`,
      data.get("kota") ? `Kota: ${data.get("kota")}` : null,
      data.get("paket") ? `Paket diminati: ${data.get("paket")}` : null,
      data.get("jumlah") ? `Perkiraan jumlah jamaah: ${data.get("jumlah")}` : null,
      data.get("tanggal") ? `Perkiraan keberangkatan: ${data.get("tanggal")}` : null,
      data.get("pesan") ? `\nPesan:\n${data.get("pesan")}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${site.contact.phoneE164}?text=${encodeURIComponent(
      lines.join("\n"),
    )}`;

    // brief delay so the state change is visible, then hand off to WhatsApp
    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("sent");
      form.reset();
    }, 500);
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-line bg-paper-2 p-8 text-center">
        <CheckCircle size={40} weight="fill" className="mx-auto text-brand-bright" />
        <h3 className="mt-4 font-display text-2xl text-ink">Terhubung ke WhatsApp</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Kami membuka chat WhatsApp berisi ringkasan Anda. Jika tidak terbuka
          otomatis, hubungi kami langsung di {site.contact.phoneDisplay}.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-brand hover:text-brand-deep"
        >
          Kirim pesan lain
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-line bg-paper-2 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nama lengkap" htmlFor="nama" required>
          <input id="nama" name="nama" type="text" required className={fieldBase} placeholder="Nama Anda" />
        </Field>
        <Field label="Nomor WhatsApp" htmlFor="telepon" required>
          <input id="telepon" name="telepon" type="tel" required className={fieldBase} placeholder="08xx xxxx xxxx" />
        </Field>
        <Field label="Kota domisili" htmlFor="kota">
          <input id="kota" name="kota" type="text" className={fieldBase} placeholder="mis. Serang" />
        </Field>
        <Field label="Paket yang diminati" htmlFor="paket">
          <select id="paket" name="paket" className={fieldBase} defaultValue="">
            <option value="">Belum menentukan</option>
            {packages.map((p) => (
              <option key={p.slug} value={`${p.name} (${p.subtitle})`}>
                {p.name} - {p.subtitle}
              </option>
            ))}
            <option value="Rombongan khusus">Rombongan khusus / carter</option>
          </select>
        </Field>
        <Field label="Perkiraan jumlah jamaah" htmlFor="jumlah">
          <input id="jumlah" name="jumlah" type="text" className={fieldBase} placeholder="mis. 2 orang" />
        </Field>
        <Field label="Perkiraan keberangkatan" htmlFor="tanggal">
          <input id="tanggal" name="tanggal" type="text" className={fieldBase} placeholder="mis. Ramadhan 2026" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Pesan (opsional)" htmlFor="pesan">
          <textarea
            id="pesan"
            name="pesan"
            rows={4}
            className={fieldBase}
            placeholder="Ceritakan rencana atau pertanyaan Anda"
          />
        </Field>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-[#a4362c]">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-medium text-paper-2 transition-all duration-200 hover:bg-brand-deep active:translate-y-px disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          "Menyiapkan pesan..."
        ) : (
          <>
            <PaperPlaneTilt size={17} weight="fill" />
            Kirim lewat WhatsApp
          </>
        )}
      </button>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-faint">
        <WhatsappLogo size={14} weight="fill" />
        Formulir ini membuka WhatsApp berisi ringkasan jawaban Anda.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
