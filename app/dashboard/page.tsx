// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Akses ditolak</p>;

  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <p>Selamat datang, {session.user?.name} ({session.user?.email})</p>
    </div>
  );
}
