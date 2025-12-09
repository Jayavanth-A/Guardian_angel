import { AlertTriangle, Navigation, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: AlertTriangle,
    title: 'Send Alerts',
    description: 'Quickly notify your trusted contacts in case of an emergency.',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Navigation,
    title: 'Share Location',
    description: 'Provide real-time location updates to your contacts.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: CheckCircle,
    title: 'Stay Safe',
    description: 'Access safety resources and tips to enhance your security.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group"
            >
              <div className={`${feature.bgColor} ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
