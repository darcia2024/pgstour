import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-6xl text-brand">404</p>
      <h1 className="mt-4 font-display text-2xl text-ink">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
        Tautan yang Anda buka mungkin sudah berpindah. Kembali ke beranda atau
        lihat program umrah kami.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Kembali ke beranda</Button>
        <Button href="/perjalanan" variant="outline">
          Lihat program umrah
        </Button>
      </div>
    </Container>
  );
}
