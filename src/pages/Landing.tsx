import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, Heart, Calendar, Shield, BookOpen, Users, 
  ArrowRight, CheckCircle, PlayCircle 
} from 'lucide-react';

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-pink-600 text-white p-2 rounded-lg">
              <Heart size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">ASHA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-pink-600 transition-colors">Features</a>
            <a href="#impact" className="hover:text-pink-600 transition-colors">Impact</a>
            <a href="#how-it-works" className="hover:text-pink-600 transition-colors">How it Works</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/asha/dashboard')}
              className="hidden md:block text-sm font-medium text-teal-700 hover:text-teal-800"
            >
              ASHA Login
            </button>
            <button 
              onClick={() => navigate('/user/home')}
              className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition-colors shadow-lg shadow-pink-200"
            >
              Try Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-orange-50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse" />
              Voice-First Health Companion
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Healthcare that <br />
              <span className="text-pink-600">Speaks Your Language</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Empowering rural women with AI-driven menstrual, reproductive, and maternal health guidance in local dialects like Hindi, Bhojpuri, and Awadhi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/user/home')}
                className="flex items-center justify-center gap-2 bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-200 hover:-translate-y-1"
              >
                <Mic size={24} />
                Speak to ASHA
              </button>
              <button 
                onClick={() => navigate('/asha/dashboard')}
                className="flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
              >
                <Users size={24} />
                Worker Portal
              </button>
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> No typing needed
              <span className="mx-2">•</span>
              <CheckCircle size={16} className="text-green-500" /> 100% Private
            </p>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 max-w-md mx-auto rotate-2 hover:rotate-0 transition-transform duration-500">
               {/* Mock UI Preview */}
               <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
                    <Mic size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">User says (Bhojpuri)</p>
                    <p className="font-medium text-gray-800">"Pet mein bahut tez dard ho raha hai..."</p>
                  </div>
               </div>
               <div className="bg-pink-50 rounded-xl p-4 border border-pink-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-6 w-6 bg-pink-600 rounded-full flex items-center justify-center text-white">
                      <Heart size={12} fill="currentColor" />
                    </div>
                    <span className="text-xs font-bold text-pink-700">ASHA AI Responds</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "Main samajh sakti hoon. Agar dard pet ke nichle hisse mein hai aur bukhar bhi hai, toh kripya turant doctor ko dikhayein."
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-pink-600 font-medium cursor-pointer">
                    <PlayCircle size={16} /> Listen in Hindi
                  </div>
               </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-200/50 to-orange-200/50 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Designed for Rural India</h2>
            <p className="text-xl text-gray-500">Bridging the gap between technology and traditional healthcare with culturally sensitive features.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Mic className="text-pink-600" size={32} />}
              title="Voice-First Interface"
              desc="No literacy required. Users simply speak their symptoms in local dialects like Hindi, Bhojpuri, or Awadhi."
            />
            <FeatureCard 
              icon={<Calendar className="text-purple-600" size={32} />}
              title="Smart Period Tracker"
              desc="Predicts cycles and fertile windows based on voice inputs like 'Meri date 10 ko thi'."
            />
            <FeatureCard 
              icon={<Shield className="text-teal-600" size={32} />}
              title="Whisper Privacy"
              desc="Anonymous usage mode with auto-delete for shared phones. Sensitive data stays local."
            />
            <FeatureCard 
              icon={<BookOpen className="text-orange-600" size={32} />}
              title="Audio Health Capsules"
              desc="Short, engaging audio lessons on hygiene, nutrition, and pregnancy care."
            />
            <FeatureCard 
              icon={<Users className="text-blue-600" size={32} />}
              title="ASHA Worker Mode"
              desc="Digital assistant for health workers to log visits, track high-risk pregnancies, and generate reports."
            />
            <FeatureCard 
              icon={<Heart className="text-red-600" size={32} />}
              title="Anemia & Nutrition"
              desc="Personalized diet plans using low-cost local foods (Jaggery, Spinach) to fight anemia."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-[128px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full blur-[128px] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to transform rural healthcare?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join us in building a healthier future for millions of women across India.
          </p>
          <button 
            onClick={() => navigate('/user/home')}
            className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Launch Prototype <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="bg-pink-600 text-white p-1.5 rounded-lg">
              <Heart size={16} fill="currentColor" />
            </div>
            <span className="font-bold text-gray-900">ASHA AI</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 ASHA AI Project. Built for Social Good.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);
