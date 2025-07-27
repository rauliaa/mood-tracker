import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg-[#F6F8D5] p-8">
      <h1 className="text-4xl font-bold text-[#205781]">Selamat Datang di Mood Journal</h1>
      <p className="mt-4 text-[#205781] max-w-md">
        Aplikasi ini membantu kamu mencatat dan memahami perasaanmu setiap hari.
      </p>
      <Link
        href="/login"
        className="mt-6 px-6 py-2 bg-[#205781] text-white rounded-xl hover:bg-[#17435e] transition"
      >
        Masuk untuk Mulai Tracking
      </Link>
    </main>
  );
}
