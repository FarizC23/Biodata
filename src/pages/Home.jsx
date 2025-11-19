import React, { useEffect, useState } from 'react';
import { cvData } from '../mockData';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { 
  Coffee, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram,
  Briefcase,
  Award,
  TrendingUp,
  ShoppingBag,
  Calendar,
  CheckCircle2,
  GraduationCap,
  User
} from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    skills: 0,
    orders: 0
  });

  useEffect(() => {
    // Animate counters on mount
    const timer = setTimeout(() => {
      setCounters({
        experience: 2.5,
        skills: 5,
        orders: 100
      });
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="cv-container">
      {/* Header Navigation */}
      <header className="header-nav">
        <div className="nav-content">
          <div className="logo">
            <Coffee className="logo-icon" />
            <span>Fariz Fabian</span>
          </div>
          <nav className="nav-links">
            <button onClick={() => scrollToSection('about')}>Tentang</button>
            <button onClick={() => scrollToSection('experience')}>Pengalaman</button>
            <button onClick={() => scrollToSection('skills')}>Keahlian</button>
            <button onClick={() => scrollToSection('contact')}>Kontak</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Badge variant="outline" className="status-badge">
                <CheckCircle2 className="w-3 h-3 mr-1" />
                Tersedia untuk Bekerja
              </Badge>
            </div>
            <h1 className="hero-title">
              {cvData.personal.name}
            </h1>
            <p className="hero-subtitle">{cvData.personal.title}</p>
            <p className="hero-location">
              <MapPin className="w-4 h-4" />
              {cvData.personal.location}
            </p>
            <div className="hero-buttons">
              <Button 
                size="lg" 
                className="cta-primary"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Hubungi Saya
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="cta-secondary"
                onClick={() => scrollToSection('experience')}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Lihat Pengalaman
              </Button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-wrapper">
              <img 
                src={cvData.personal.profileImage} 
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Stats */}
      <section className="dashboard-section">
        <div className="dashboard-grid">
          <Card className="stat-card">
            <CardHeader>
              <div className="stat-icon experience-icon">
                <Briefcase />
              </div>
            </CardHeader>
            <CardContent>
              <div className="stat-value">{counters.experience.toFixed(1)}+</div>
              <div className="stat-label">Tahun Pengalaman</div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardHeader>
              <div className="stat-icon skills-icon">
                <TrendingUp />
              </div>
            </CardHeader>
            <CardContent>
              <div className="stat-value">{counters.skills}</div>
              <div className="stat-label">Keahlian Utama</div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardHeader>
              <div className="stat-icon cert-icon">
                <Award />
              </div>
            </CardHeader>
            <CardContent>
              <div className="stat-value">{cvData.dashboard.certifications}</div>
              <div className="stat-label">Sertifikasi</div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardHeader>
              <div className="stat-icon orders-icon">
                <ShoppingBag />
              </div>
            </CardHeader>
            <CardContent>
              <div className="stat-value">{counters.orders}+</div>
              <div className="stat-label">Pesanan per Shift</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">Tentang Saya</h2>
          <Separator className="title-separator" />
        </div>
        <Card className="about-card">
          <CardContent className="about-content">
            <p className="about-text">{cvData.summary}</p>
          </CardContent>
        </Card>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-header">
          <h2 className="section-title">Pengalaman Kerja</h2>
          <Separator className="title-separator" />
        </div>
        <div className="timeline">
          {cvData.experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                {exp.current && <div className="pulse-dot"></div>}
              </div>
              <Card className="experience-card">
                <CardHeader>
                  <div className="experience-header">
                    <div>
                      <CardTitle className="experience-role">{exp.role}</CardTitle>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <Badge className="current-badge">Sekarang</Badge>
                    )}
                  </div>
                  <div className="experience-meta">
                    <span className="meta-item">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-header">
          <h2 className="section-title">Keahlian</h2>
          <Separator className="title-separator" />
        </div>
        <div className="skills-grid">
          {cvData.skills.map((skill, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="skill-content">
                <CheckCircle2 className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <div className="section-header">
          <h2 className="section-title">Pendidikan & Sertifikasi</h2>
          <Separator className="title-separator" />
        </div>
        <div className="education-grid">
          {cvData.education.map((edu, index) => (
            <Card key={index} className="education-card">
              <CardHeader>
                <div className="education-icon-wrapper">
                  <GraduationCap className="education-icon" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="education-level">{edu.level}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Hubungi Saya</h2>
          <Separator className="title-separator" />
        </div>
        <Card className="contact-card">
          <CardContent className="contact-content">
            <div className="contact-grid">
              <a href={`mailto:${cvData.personal.email}`} className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">{cvData.personal.email}</p>
                </div>
              </a>
              <a href={`tel:${cvData.personal.phone}`} className="contact-item">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">Telepon</p>
                  <p className="contact-value">{cvData.personal.phone}</p>
                </div>
              </a>
              <a 
                href={`https://instagram.com/${cvData.personal.instagram}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-item"
              >
                <div className="contact-icon-wrapper">
                  <Instagram className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">Instagram</p>
                  <p className="contact-value">@{cvData.personal.instagram}</p>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <p className="contact-label">Lokasi</p>
                  <p className="contact-value">{cvData.personal.location}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2025 {cvData.personal.name}. Semua hak cipta dilindungi.</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${cvData.personal.email}`}>Email</a>
            <a href={`https://instagram.com/${cvData.personal.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;