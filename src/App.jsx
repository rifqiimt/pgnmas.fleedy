import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  FileText, 
  Car, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  User,
  Smartphone,
  Zap,
  BarChart3,
  Globe
} from 'lucide-react';

// ==========================================
// 1. DATA DEFINITIONS (Konfigurasi Konten)
// ==========================================

const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Clients', href: 'clients' },
  { label: 'Contact', href: 'contact' },
];

const SERVICES_DATA = [
  {
    title: "Sewa Kendaraan",
    description: "Layanan penyewaan unit kendaraan terbaru lepas kunci untuk kebutuhan operasional harian atau jangka panjang perusahaan Anda.",
    icon: <Car size={20} className="text-[#1f4374]" />,
  },
  {
    title: "Sewa dengan Supir",
    description: "Paket penyewaan lengkap dengan pengemudi profesional yang terlatih, bersertifikasi, dan berpengalaman.",
    icon: <User size={20} className="text-[#1f4374]" />,
  },
  {
    title: "Fleet Management",
    description: "Solusi lengkap mencakup administrasi handal, bengkel resmi, kartu BBM Pertamina nasional, driver bersertifikasi, serta opsi converter kit.",
    icon: <MapPin size={20} className="text-[#1f4374]" />,
  },
];

const FEATURES_DATA = [
  {
    title: "Asuransi All-Risk",
    description: "Perlindungan menyeluruh untuk setiap unit kendaraan.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Servis Berkala",
    description: "Jadwal servis rutin di bengkel resmi.",
    icon: <Wrench size={28} />,
  },
  {
    title: "Toolkit Lengkap",
    description: "Setiap unit dilengkapi peralatan darurat standar.",
    icon: <Car size={28} />,
  },
  {
    title: "Dokumen Lengkap",
    description: "Jaminan kelengkapan surat-surat kendaraan.",
    icon: <FileText size={28} />,
  },
];

const STATS_DATA = [
  { value: "964", label: "Total Unit Aset" },
  { value: "153 M", label: "Pendapatan (IDR)" },
  { value: "12+", label: "Lelang Diikuti" },
  { value: "5", label: "Kemenangan Tender" },
];

const CLIENTS_DATA = [
  { name: "SKK Migas", logo: "skk.png" },
  { name: "Pertamina", logo: "pertamina.png" },
  { name: "Pertagas", logo: "pertagas.png" },
  { name: "Perta Samtan", logo: "perta.jpg" },
  { name: "EP Cepu", logo: "ep cepu.png" },
  { name: "Patra Niaga", logo: "patra.png" },
  { name: "Hulu Rokan", logo: "rokan.png" },
  { name: "Nusantara Regas", logo: "nusantara.png" },
  { name: "Pertamina Power", logo: "power.png" },
  { name: "Hulu Energi", logo: "energi.png" },
  { name: "TGI", logo: "tgi.png" },
  { name: "Petrochina", logo: "petrochina.png" }
];

const CONTACT_INFO = [
  { icon: Phone, text: "+62 857-7540-7472 (WA)", href: "https://api.whatsapp.com/send/?phone=6285775407472&text&type=phone_number&app_absent=0" },
  { icon: Mail, text: "commercial@pgnmas.co.id", href: "mailto:commercial@pgnmas.co.id" },
  { icon: Instagram, text: "@fleedy.id", href: "https://www.instagram.com/fleedy.id/" },
  { icon: Facebook, text: "Fleedy", href: "https://www.facebook.com/p/Fleedy-100070852897394/?locale=id_ID" },
  { icon: MapPin, text: "Jakarta, Indonesia", href: null },
];

// ==========================================
// 2. SUB-COMPONENTS
// ==========================================

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek shadow saat scroll (User Experience touch)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white border-b border-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex-shrink-0 cursor-pointer">
            <img src="fleedy.png" alt="PGN MAS Logo" className="h-7 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={`#${link.href}`} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-600 hover:text-[#1f4374] text-xs lg:text-sm font-medium transition relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1f4374] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-[#1f4374] p-2">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={`#${link.href}`} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1f4374] rounded-lg font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-20 relative pt-20 pb-10 lg:pt-28 lg:pb-16 overflow-hidden bg-[#fefefe]">
      {/* Abstract Background Blob */}
      <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#67c7ef] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/4"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-6 animate-fade-up text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-[#1f4374] font-semibold text-[10px] uppercase tracking-wider mx-auto border border-blue-100">
            <span className="w-1.5 h-1.5 bg-[#1f4374] rounded-full animate-pulse"></span>
            Manajemen Transportasi Terintegrasi
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[#1f4374] leading-tight font-mark-pro max-w-3xl mx-auto">
            Your Business Partner on <span className="text-[#67c7ef]">The Road</span>
          </h1>
          
          <div className="space-y-2 max-w-xl mx-auto">
            <p className="text-sm text-gray-600 leading-relaxed">
              Layanan pengelolaan kendaraan operasional komprehensif. Terintegrasi dengan <b>Aplikasi Fleedy</b> untuk monitoring real-time dan efisiensi biaya.
            </p>
            <p className="text-xs font-bold text-gray-500">
              Powered by <span className="text-[#1f4374]">PERMATA (PGN MAS)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-[#1f4374] text-white rounded-lg text-sm font-bold hover:bg-blue-900 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10 group cursor-pointer"
            >
              Hubungi Kami
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="px-6 py-2.5 bg-white text-[#1f4374] border border-[#1f4374]/20 rounded-lg text-sm font-bold hover:bg-gray-50 transition cursor-pointer flex items-center justify-center"
            >
              Tentang Fleedy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-14 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left: Illustration */}
          <div className="lg:w-1/2 relative w-full">
             <div className="aspect-video bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] rounded-2xl border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-[url('ui.png')] bg-cover bg-center opacity-30 mix-blend-multiply"></div>
                <div className="text-center z-10 p-6 bg-white/40 backdrop-blur-sm rounded-xl">
                  <Smartphone size={48} className="text-[#1f4374] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#1f4374]">Fleedy App Integration</h3>
                  <p className="text-xs text-gray-600 font-medium">GPS • Google Maps • Real Time Monitoring</p>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 space-y-5">
            <h2 className="text-[#1f4374] text-2xl font-bold font-mark-pro leading-tight">
              Solusi Kendaraan Operasional <br/> Yang Efisien & Terukur
            </h2>
            
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                <b>Fleedy</b> adalah produk unggulan dari PERMATA untuk pengelolaan kendaraan operasional secara komprehensif. Layanan kami mencakup sewa kendaraan, penyediaan pengemudi tersertifikasi, hingga manajemen BBM dan perawatan.
              </p>
              <p>
                Semua layanan terintegrasi dengan <b>Aplikasi Fleedy</b> yang dilengkapi GPS dan Google Maps, membantu Anda mengelola mobilitas secara <i>real-time</i> dan <i>on-time</i>.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-2">
              {STATS_DATA.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-blue-100 transition-colors">
                  <div className="text-xl font-bold text-[#1f4374]">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-14 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-[#1f4374] text-2xl font-bold mb-2 font-mark-pro">Layanan Kami</h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Solusi komprehensif untuk kebutuhan mobilitas perusahaan BUMN, Swasta, dan Kementerian.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="bg-[#1f4374] p-6 rounded-xl shadow-md border border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2 font-mark-pro leading-tight">
                {service.title}
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUsSection = () => {
  return (
    <section id="why-us" className="scroll-mt-14 py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          <div className="lg:w-1/3 sticky top-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-[#1f4374] font-semibold text-[10px] uppercase tracking-wider mb-4 border border-blue-100">
              <span className="w-1.5 h-1.5 bg-[#1f4374] rounded-full animate-pulse"></span>
              Why Choose Us
            </div>
            <h2 className="text-[#1f4374] text-2xl md:text-3xl font-bold mb-4 font-mark-pro leading-tight">
              Keunggulan <br/> <span className="text-[#67c7ef]">Fleedy</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Kami beradaptasi menuju era transisi energi dengan armada kendaraan listrik (EV) dan Hybrid, serta sistem manajemen berbasis teknologi terkini untuk efisiensi maksimal.
            </p>
            {/* Visual indicator lines */}
            <div className="flex gap-1">
                <div className="h-1 w-12 bg-[#1f4374] rounded-full"></div>
                <div className="h-1 w-4 bg-[#67c7ef] rounded-full"></div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
            {FEATURES_DATA.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-[#67c7ef] hover:shadow-lg transition-all duration-300 group h-full flex flex-col relative overflow-hidden"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-[50px] -mr-10 -mt-10 transition-all group-hover:bg-[#67c7ef]/10"></div>

                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1f4374] transition-colors duration-300 relative z-10">
                  {React.cloneElement(feature.icon, { className: "text-[#1f4374] group-hover:text-white transition-colors duration-300", size: 20 })}
                </div>
                
                <h3 className="text-base font-bold text-[#1f4374] mb-2 font-mark-pro relative z-10">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed flex-grow relative z-10">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  return (
    <section id="clients" className="scroll-mt-14 py-10 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#1f4374] text-lg font-bold mb-8 font-mark-pro">Dipercaya Oleh Mitra Korporasi</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
          {CLIENTS_DATA.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-[#1f4374]/30 transition-all duration-300 group h-16 cursor-default">
              <img 
                src={client.logo} 
                alt={`${client.name} Logo`} 
                className="max-h-full max-w-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FOOTER COMPONENT ---
const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-14 relative pt-16 pb-6 overflow-hidden bg-white">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="bg.png" 
          alt="Fleedy Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* CTA Title */}
        <div className="text-center mb-10 px-6 animate-fade-up">
          <h2 className="text-xl md:text-3xl font-bold text-white leading-tight font-mark-pro drop-shadow-md">
            Ready for experience <br/> a service of fleedy?
          </h2>
        </div>

        {/* Footer Content Card */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-gray-900 rounded-[2rem] p-6 lg:p-10 shadow-2xl relative backdrop-blur-sm bg-opacity-95">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              
              {/* Brand Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                   <div className="inline-block">
                     <img src="fleedy.png" alt="PGN MAS Logo" className="h-7 w-auto object-contain" />
                   </div>
                </div>
                <p className="text-gray-600 text-xs max-w-sm leading-relaxed mb-6">
                  Memberikan solusi transportasi terbaik dengan standar keselamatan dan kenyamanan tertinggi untuk mitra bisnis kami.
                </p>

                {/* App Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://apps.apple.com/us/app/fleedy/id1605578677" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity w-fit">
                    <img src="ios.png" alt="Download on the App Store" className="h-9 w-auto" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.pgnmas.fleedy&hl=id" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity w-fit">
                     <img src="android.png" alt="Get it on Google Play" className="h-9 w-auto" />
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-[#1f4374] text-sm mb-4 font-mark-pro uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-3 text-gray-600 text-xs">
                  {NAV_LINKS.filter(l => l.href !== 'clients').map((link) => (
                    <li key={link.href}>
                      <a href={`#${link.href}`} className="hover:text-[#1f4374] hover:underline transition-all decoration-[#1f4374] underline-offset-2">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-[#1f4374] text-sm mb-4 font-mark-pro uppercase tracking-wider">Contact</h4>
                <ul className="space-y-3 text-gray-600 text-xs">
                  {CONTACT_INFO.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <item.icon size={16} className="text-[#1f4374] mt-0.5 flex-shrink-0" />
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#1f4374] transition-colors">
                          {item.text}
                        </a>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] text-gray-400 font-medium">
              <p>© 2024 PERMATA (PGN MAS). All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[#1f4374] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#1f4374] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#67c7ef] selection:text-white">
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        html { scroll-behavior: smooth; }
        body { font-family: 'Mark Pro', 'Plus Jakarta Sans', sans-serif; }
        .font-mark-pro { font-family: 'Mark Pro', 'Plus Jakarta Sans', sans-serif; }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.8s ease-out forwards; }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}