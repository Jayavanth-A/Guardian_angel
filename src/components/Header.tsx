import { Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-blue-500" />
          <span className="text-xl font-bold text-white tracking-wide">SAFETY ALERT</span>
        </div>
      </div>
    </header>
  );
}
