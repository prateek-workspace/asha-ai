import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, Heart, Shield, Users, 
  ArrowRight, Sun, Moon,
  Activity, Smartphone, Stethoscope, MessageCircle,
  Award, ChevronDown, BarChart3, Zap, Lock, CheckCircle2,
  Globe, BookOpen
} from 'lucide-react';
import { useSettings } from '../context/SettingsContext';
import { motion } from 'framer-motion';

export const Landing = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme, t } = useSettings();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/new pink logo.png" 
              alt="ASHA AI Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ASHA AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#story" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">The Story</a>
            <a href="#solution" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Solution</a>
            <a href="#impact" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">Impact</a>
            <a href="#invest" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">For Partners</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500/20"
              aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => navigate('/asha/dashboard')}
              className="hidden md:block text-sm font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
            >
              {t('workerPortal')}
            </button>
            <button 
              onClick={() => navigate('/user/home')}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2.5 rounded-full font-bold hover:opacity-90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              {t('speakToAsha')}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/40 via-transparent to-transparent dark:from-pink-900/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent dark:from-teal-900/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Live Pilot in 5 Villages
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-gray-900 dark:text-white mb-8 max-w-5xl mx-auto tracking-tight"
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
            >
              {t('heroSubtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => document.getElementById('invest')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 hover:shadow-pink-600/40 hover:-translate-y-1 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                {t('partnerWithUs')} <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/user/home')}
                className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                <Mic size={20} /> {t('speakToAsha')}
              </button>
            </motion.div>

            {/* Trusted By */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Supported By Health Innovators</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Placeholders for logos */}
                 <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><Activity /> HealthPlus</div>
                 <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><Globe /> GlobalCare</div>
                 <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><Heart /> RuralMed</div>
                 <div className="flex items-center gap-2 text-xl font-bold text-gray-400"><Shield /> SafeMother</div>
              </div>
            </motion.div>
        </div>
      </section>

      {/* The Story (Problem) */}
      <section id="story" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <motion.div 
                  className="md:w-1/2 md:-ml-8 lg:-ml-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-pink-200 dark:bg-pink-900/20 rounded-[2rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <img 
                            src="/indian gurls image.png" 
                            alt="Rural Indian Woman" 
                            className="relative rounded-[2rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 border-8 border-white dark:border-gray-800 object-cover h-[600px] w-full"
                        />
                        <div className="absolute bottom-8 -right-4 md:-right-8 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs transform group-hover:scale-105 transition-transform duration-300">
                            <div className="flex gap-1 text-pink-500 mb-2">
                              {[1,2,3,4,5].map(i => <Heart key={i} size={12} fill="currentColor" />)}
                            </div>
                            <p className="font-serif italic text-lg text-gray-700 dark:text-gray-300 leading-relaxed">"I have questions, but I don't know who to ask..."</p>
                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                              <div className="h-8 w-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-xs">R</div>
                              <p className="text-sm font-bold text-gray-900 dark:text-white">Radha, 19</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                  className="md:w-1/2 space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                    <div>
                        <h2 className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider text-sm mb-3 flex items-center gap-2">
                          <span className="w-8 h-px bg-pink-600 dark:bg-pink-400"></span>
                          {t('storyTitle')}
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{t('storySubtitle')}</h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('radhaStory')}
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                          { icon: BookOpen, color: 'red', title: t('painPoint1'), desc: t('painPoint1Desc') },
                          { icon: Lock, color: 'orange', title: t('painPoint2'), desc: t('painPoint2Desc') },
                          { icon: Users, color: 'blue', title: t('painPoint3'), desc: t('painPoint3Desc') }
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-5 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                              <div className={`mt-1 bg-${item.color}-100 dark:bg-${item.color}-900/30 p-3 rounded-xl h-fit text-${item.color}-600 dark:text-${item.color}-400 shrink-0`}>
                                  <item.icon size={24} />
                              </div>
                              <div>
                                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                              </div>
                          </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="py-24 bg-white dark:bg-gray-950 transition-colors relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <motion.div {...fadeInUp}>
                  <h2 className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider text-sm mb-3">{t('solutionTitle')}</h2>
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('solutionSubtitle')}</h3>
                </motion.div>
            </div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
                {[
                  { icon: Mic, color: 'pink', title: t('voiceFirst'), desc: t('voiceFirstDesc') },
                  { icon: Shield, color: 'purple', title: t('privacyCore'), desc: t('privacyCoreDesc') },
                  { icon: Stethoscope, color: 'teal', title: t('ashaEmpowerment'), desc: t('ashaEmpowermentDesc') }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-none transition-all duration-300 group hover:-translate-y-1"
                  >
                      <div className={`w-16 h-16 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-2xl flex items-center justify-center text-${item.color}-600 dark:text-${item.color}-400 mb-8 group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon size={32} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* How It Works (System View) */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600 rounded-full blur-[120px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('howItWorks')}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A seamless loop connecting patients, AI, and healthcare workers.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 z-0 border-t border-dashed border-gray-600" />

                {[
                  { icon: Smartphone, color: 'text-pink-400', title: t('step1Title'), desc: t('step1Desc') },
                  { icon: Activity, color: 'text-purple-400', title: t('step2Title'), desc: t('step2Desc') },
                  { icon: Stethoscope, color: 'text-teal-400', title: t('step3Title'), desc: t('step3Desc') }
                ].map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="relative z-10 flex flex-col items-center text-center group"
                  >
                      <div className="w-24 h-24 bg-gray-800 rounded-full border-4 border-gray-700 flex items-center justify-center mb-8 shadow-2xl group-hover:border-white transition-colors duration-300">
                          <step.icon className={step.color} size={40} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed max-w-xs">{step.desc}</p>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Why Invest (For NGOs) */}
      <section id="invest" className="py-24 bg-white dark:bg-gray-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
                <div className="lg:w-1/3 sticky top-24">
                    <h2 className="text-pink-600 dark:text-pink-400 font-bold uppercase tracking-wider text-sm mb-3">{t('investTitle')}</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{t('investSubtitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
                        We are looking for strategic partners to help us scale from 5 pilot villages to 500. Join us in revolutionizing rural healthcare delivery.
                    </p>
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-3 shadow-xl">
                        Download Pitch Deck <ArrowRight size={18} />
                    </button>
                </div>
                <div className="lg:w-2/3 grid gap-8 w-full">
                    {[
                      { icon: Zap, color: 'blue', title: t('scaleTitle'), desc: t('scaleDesc') },
                      { icon: BarChart3, color: 'purple', title: t('dataTitle'), desc: t('dataDesc') },
                      { icon: Award, color: 'green', title: t('costTitle'), desc: t('costDesc') }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 items-start"
                      >
                          <div className={`p-4 bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-600 dark:text-${item.color}-400 rounded-2xl shrink-0`}>
                              <item.icon size={32} strokeWidth={1.5} />
                          </div>
                          <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                              <div className="mt-4 flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider">
                                <CheckCircle2 size={16} className={`text-${item.color}-500`} /> Verified
                              </div>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('testimonials')}</h2>
                <p className="text-gray-500 dark:text-gray-400">Real stories from women who use ASHA AI.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {[
                  { text: t('story1'), name: t('story1Name'), loc: t('story1Loc'), color: 'pink' },
                  { text: t('story2'), name: t('story2Name'), loc: t('story2Loc'), color: 'purple' }
                ].map((story, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className={`bg-white dark:bg-gray-800 p-10 rounded-[2rem] border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden`}
                  >
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-${story.color}-50 dark:bg-${story.color}-900/10 rounded-bl-[100px] -mr-4 -mt-4 z-0`} />
                      <div className={`text-${story.color}-400 dark:text-${story.color}-500 mb-6 relative z-10`}>
                          <MessageCircle size={40} fill="currentColor" />
                      </div>
                      <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-8 relative z-10 font-serif leading-relaxed">"{story.text}"</p>
                      <div className="flex items-center gap-4 relative z-10">
                          <div className={`h-12 w-12 bg-${story.color}-100 dark:bg-${story.color}-900/40 rounded-full flex items-center justify-center font-bold text-${story.color}-700 dark:text-${story.color}-300`}>
                            {story.name.charAt(0)}
                          </div>
                          <div>
                              <h4 className="font-bold text-gray-900 dark:text-white">{story.name}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{story.loc}</p>
                          </div>
                      </div>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('faq')}</h2>
            </div>
            
            <div className="space-y-4">
                <FaqItem question={t('faq1Q')} answer={t('faq1A')} />
                <FaqItem question={t('faq2Q')} answer={t('faq2A')} />
                <FaqItem question={t('faq3Q')} answer={t('faq3A')} />
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
               <div className="bg-pink-600 text-white p-2 rounded-xl">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">ASHA AI</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
              <a href="#" className="hover:text-pink-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Contact</a>
            </div>
            <p className="text-gray-400 text-sm">© 2025 ASHA AI Project. Built for Social Good.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <motion.div 
          initial={false}
          className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                {question}
                <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {answer}
                </div>
            </motion.div>
        </motion.div>
    )
}
