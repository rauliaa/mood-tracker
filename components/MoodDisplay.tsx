'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function MoodDisplay() {
  const currentMood = useSelector((state: RootState) => state.mood.mood);

  return (
    <div className="p-6 bg-[#98D2C0] rounded-xl shadow-lg text-center">
      <h2 className="font-bold text-lg text-[#205781] mb-4">Mood Kamu Hari Ini:</h2>
      <p className="text-2xl font-semibold text-[#205781]">
        {currentMood ? currentMood : 'Belum ada mood yang dipilih'}
      </p>
    </div>
  );
}
