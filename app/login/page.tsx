'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      alert('Login gagal. Cek email dan password.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#205781] to-[#4F959D] p-6">
      <div className="bg-[#F6F8D5] rounded-2xl shadow-xl p-8 w-full max-w-md border border-[#98D2C0]">
        <h1 className="text-2xl font-bold text-[#205781] text-center mb-4">🔐 Login ke Mood Tracker</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-[#98D2C0] rounded-xl text-[#205781]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-[#98D2C0] rounded-xl text-[#205781]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-[#205781] text-[#F6F8D5] font-bold py-2 rounded-xl hover:bg-[#184663] transition">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
