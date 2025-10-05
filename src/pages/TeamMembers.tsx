import React from "react";
import { useNavigate } from "react-router-dom";

const members = [
  { name: "Lê Hoàng Minh Thư"},
  { name: "Lê Kim Ngân"},
  { name: "Võ Lương Phương Nam"},
  { name: "Lê Tô Nho Tín"},
  { name: "Mai Phúc Hồng Ngân"},
];

const TeamMembers: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="bg-white/90 rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center max-w-md w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-8">Thành viên nhóm 4</h2>
        <div className="flex flex-col gap-6 w-full mb-8">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl shadow p-6 flex flex-col items-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.4 + 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-lg md:text-xl font-semibold text-gray-800 mb-1">{m.name}</div>
            {/* Role removed */}</div>
          ))}
        </div>
        <button
          className="mt-4 px-8 py-3 rounded-full bg-pink-600 text-white font-semibold text-lg shadow hover:bg-pink-700 transition"
          onClick={() => navigate("/home")}
        >
          Tiếp tục
        </button>
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease both;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TeamMembers;
