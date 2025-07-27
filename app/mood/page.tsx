import MoodSelector from '@/components/MoodSelector';
import MoodDisplay from '@/components/MoodDisplay';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#205781] to-[#4F959D] p-6 gap-8">
      <h1 className="text-3xl font-extrabold text-[#F6F8D5] shadow-lg mb-6 tracking-wide">🎭 Mood Tracker</h1>

      <section className="bg-[#F6F8D5] shadow-xl rounded-2xl p-6 w-full max-w-lg border border-[#98D2C0]">
        <h2 className="text-xl font-bold text-[#205781] mb-4 text-center">Pilih Mood Anda</h2>
        <div className="bg-[#98D2C0] rounded-xl p-4 text-[#205781] space-y-3">
          <MoodSelector />
        </div>
      </section>

      <section className="bg-[#F6F8D5] shadow-xl rounded-2xl p-6 w-full max-w-lg border border-[#98D2C0]">
        <h2 className="text-xl font-bold text-[#205781] mb-4 text-center">Mood Saat Ini</h2>
        <div className="bg-[#98D2C0] rounded-xl p-4 text-[#205781] text-base">
          <MoodDisplay />
        </div>
      </section>
    </main>
  );
}
