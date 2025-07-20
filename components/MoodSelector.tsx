'use client';
import { useDispatch } from 'react-redux';
import { setMood } from '@/store/moodSlice';

export default function MoodSelector() {
  const dispatch = useDispatch();

  const moods = [
    { label: '😊 Senang', color: 'bg-yellow-400' },
    { label: '😞 Sedih', color: 'bg-blue-400' },
    { label: '😡 Marah', color: 'bg-red-400' },
    { label: '😌 Santai', color: 'bg-green-400' },
  ];

  return (
    <div className="p-6 bg-[#98D2C0] rounded-xl shadow-lg">
      <h2 className="font-bold text-lg text-[#205781] mb-4">Pilih Mood Kamu Hari Ini:</h2>
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => dispatch(setMood(mood.label))}
            className={`text-[#F6F8D5] font-semibold py-2 rounded-lg shadow-md hover:scale-105 transition-transform ${mood.color}`}
          >
            {mood.label}
          </button>
        ))}
      </div>
    </div>
  );
}
