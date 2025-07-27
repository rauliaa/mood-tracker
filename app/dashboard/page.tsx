import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#205781] to-[#4F959D] p-6">
      <div className="bg-[#F6F8D5] rounded-2xl shadow-xl p-8 w-full max-w-lg border border-[#98D2C0] text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-[#205781] tracking-wide">🎉 Selamat Datang</h1>
        <p className="text-[#205781]">Halo, <span className="font-bold">{session?.user?.name}</span></p>
        <p className="text-[#205781]">Email: <span className="italic">{session?.user?.email}</span></p>
        <Link href="/api/auth/signout" className="inline-block bg-[#205781] text-[#F6F8D5] py-2 px-4 rounded-xl mt-4 hover:bg-[#184663] transition">
          Logout
        </Link>
      </div>
    </main>
  );
}
