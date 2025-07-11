import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-inter bg-white">
      {/* Skip to Main Content for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-deep-blue text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo - Clickable Home Link */}
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded-lg"
              aria-label="Tabrah TelePsychiatry - Return to top of page"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/1Y2QtGqd/TTPLogo-png.png" 
                  alt="Tabrah TelePsychiatry Logo" 
                  className="w-12 h-12 object-contain"
                  width="48"
                  height="48"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-deep-blue">Tabrah TelePsychiatry</h1>
                <p className="text-sm text-dark-grey font-medium">Reach out for help</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              <a href="#about" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">About Dr. Tabrah</a>
              <a href="#services" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">Services</a>
              <a href="#how-it-works" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">How it works</a>
              <a href="#faqs" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">FAQs</a>
              <a href="#contact" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">Contact</a>
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3OcEIOqt1Dqc4XduNreshvgjy-tCdrsxL9SBc=?gv=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-deep-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                aria-label="Book appointment - opens in new window"
              >
                Book Appointment
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-full h-0.5 bg-dark-grey"></span>
                <span className="block w-full h-0.5 bg-dark-grey"></span>
                <span className="block w-full h-0.5 bg-dark-grey"></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">About Dr. Tabrah</a>
                <a href="#services" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">Services</a>
                <a href="#how-it-works" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">How it works</a>
                <a href="#faqs" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">FAQs</a>
                <a href="#contact" className="text-dark-grey hover:text-deep-blue transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded">Contact</a>
                <a 
                  href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3OcEIOqt1Dqc4XduNreshvgjy-tCdrsxL9SBc=?gv=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-deep-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium text-center focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                  aria-label="Book appointment - opens in new window"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Crisis Support Banner with Active Links */}
      <section id="crisis-support" className="bg-red-600 text-white py-3" role="alert" aria-live="polite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm md:text-base font-medium">
              <strong>🚨 Crisis Support:</strong> If you need immediate help, call or text{' '}
              <a 
                href="tel:988" 
                className="underline hover:text-red-200 transition-colors font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded"
                aria-label="Call 988 Suicide and Crisis Lifeline"
              >
                988 (Suicide & Crisis Lifeline)
              </a>
              {' '}or dial{' '}
              <a 
                href="tel:911" 
                className="underline hover:text-red-200 transition-colors font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded"
                aria-label="Call 911 for emergency services"
              >
                911
              </a>
            </p>
            <p className="text-xs md:text-sm mt-1 text-red-100">
              For additional resources, visit{' '}
              <a 
                href="https://988lifeline.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded"
                aria-label="Visit 988 Lifeline website - opens in new window"
              >
                988lifeline.org
              </a>
              {' '}or{' '}
              <a 
                href="https://www.911.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded"
                aria-label="Visit 911.gov website - opens in new window"
              >
                911.gov
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-lavender to-periwinkle py-20" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-deep-blue mb-6 leading-tight">
              Experience Compassionate Telepsychiatry with Dr. Tabrah
            </h1>
            <p className="text-xl md:text-2xl text-dark-grey mb-8 max-w-4xl mx-auto">
              Over 30 Years of Board-Certified Psychiatric Expertise, Right to Your Home
            </p>
            <p className="text-lg text-dark-grey mb-10 max-w-3xl mx-auto">
              Access convenient online therapy and telemedicine for depression, anxiety, and women's mental health across Ohio (OH), Missouri (MO), Kansas (KS), and Florida (FL). Benefit from personalized medication management with expert support.
            </p>
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3OcEIOqt1Dqc4XduNreshvgjy-tCdrsxL9SBc=?gv=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-deep-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              aria-label="Schedule your virtual appointment - opens in new window"
            >
              Schedule Your Virtual Appointment
            </a>
          </div>
        </section>

        {/* About Dr. Tabrah Section */}
        <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src=/src/my_image.png" alt="Dr Tabrah Image"" 
                  alt="Dr. Tabrah - Board-Certified Psychiatrist with over 30 years of experience" 
                  className="rounded-lg shadow-lg w-full"
                  width="500"
                  height="600"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                  Your Journey to Wellness Begins Here: Meet Board-Certified Psychiatrist Dr. Tabrah
                </h2>
                <div className="space-y-4 text-dark-grey text-lg">
                  <p>
                    With over 30 years of distinguished experience in psychiatry, Dr. Tabrah brings unparalleled expertise to your mental health journey. As a <strong>Diplomate of the American Board of Psychiatry and Neurology</strong>, she has dedicated her career to providing compassionate, personalized care.
                  </p>
                  <p>
                    Since 2021, Dr. Tabrah has been at the forefront of <strong>telepsychiatry</strong>, working with industry leaders like Teladoc and Iris Telehealth. She maintains active medical licenses across multiple states, ensuring comprehensive access to quality mental health care.
                  </p>
                  <blockquote className="font-semibold text-deep-blue border-l-4 border-periwinkle pl-4">
                    "My core belief is that understanding your unique journey is paramount. I utilize thoughtful medication management and brief psychotherapeutic interventions to create a safe, affirming space where you can openly explore your concerns, and we can collaboratively work towards your mental wellness goals."
                  </blockquote>
                  <p>
                    As a <strong>women-owned solo practice</strong>, Dr. Tabrah provides personalized, consistent care with a deep understanding of diverse mental health needs, particularly women's mental health concerns.
                  </p>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3OcEIOqt1Dqc4XduNreshvgjy-tCdrsxL9SBc=?gv=true" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-deep-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                    aria-label="Schedule appointment with Dr. Tabrah - opens in new window"
                  >
                    Schedule Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Disclaimers Section */}
        <section className="py-12 bg-gray-100" aria-labelledby="disclaimers-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="disclaimers-heading" className="sr-only">Practice information and disclaimers</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {/* Non-Discrimination */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-periwinkle rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-bold text-deep-blue mb-3">Inclusive care</h3>
                <p className="text-dark-grey text-sm">
                  We provide a safe, respectful environment for all, without discrimination based on race, gender, sexual orientation, age, religion, disability, or any protected status.
                </p>
              </div>

              {/* Emergency Notice */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-red-600 text-2xl">🚨</span>
                </div>
                <h3 className="text-lg font-bold text-red-600 mb-3">Emergency notice</h3>
                <p className="text-dark-grey text-sm">
                  This practice is not equipped for emergencies. For crisis support, call or text 988 (Suicide & Crisis Lifeline) or dial 911.
                </p>
              </div>

              {/* Adult Practice */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-periwinkle rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-bold text-deep-blue mb-3">Adult-only practice</h3>
                <p className="text-dark-grey text-sm">
                  This practice exclusively serves adult patients aged 18 years and older. We specialize in adult psychiatric care only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Comprehensive Telepsychiatry Services Tailored for You
              </h2>
              <p className="text-xl text-dark-grey max-w-3xl mx-auto">
                Areas of focus & conditions supported - online depression therapy, virtual anxiety treatment, women's mental health, medication management
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mood Disorders */}
              <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-periwinkle rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Mood disorders</h3>
                <ul className="text-dark-grey space-y-2">
                  <li>• Depressive disorders</li>
                  <li>• Bipolar disorders (depressive, mixed, hypomanic states)</li>
                  <li>• <strong>Online depression therapy</strong></li>
                  <li>• Virtual mood stabilization</li>
                </ul>
              </article>

              {/* Anxiety Disorders */}
              <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-periwinkle rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">💭</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Anxiety disorders</h3>
                <ul className="text-dark-grey space-y-2">
                  <li>• Generalized anxiety disorder</li>
                  <li>• Panic disorder & agoraphobia</li>
                  <li>• PTSD & OCD</li>
                  <li>• <strong>Online anxiety treatment</strong></li>
                  <li>• <strong>Telemedicine for panic attacks</strong></li>
                </ul>
              </article>

              {/* Women's Mental Health */}
              <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-periwinkle rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">👩</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Women's mental health</h3>
                <ul className="text-dark-grey space-y-2">
                  <li>• Infertility support</li>
                  <li>• Maternal mental health (pre/postpartum)</li>
                  <li>• Perimenopausal concerns</li>
                  <li>• <strong>Online psychiatrist for postpartum depression</strong></li>
                </ul>
              </article>

              {/* Specialized Care */}
              <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-periwinkle rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Specialized care</h3>
                <ul className="text-dark-grey space-y-2">
                  <li>• Sleep disorders</li>
                  <li>• Anger management/impulse control</li>
                  <li>• LGBTQIA+ mental health</li>
                  <li>• <strong>Virtual medication management for adults</strong></li>
                </ul>
              </article>

              {/* Trauma & Grief */}
              <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-periwinkle rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Trauma & grief</h3>
                <ul className="text-dark-grey space-y-2">
                  <li>• Grief & bereavement</li>
                  <li>• <strong>Online PTSD therapy for veterans</strong></li>
                  <li>• Cultural/ethnic issues</li>
                  <li>• Pain & somatoform disorders</li>
                </ul>
              </article>

              {/* Substance Use */}
              <article className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-periwinkle rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-deep-blue text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Substance use & eating disorders</h3>
                <ul className="text-dark-grey space-y-2">
                  <li>• Alcohol/nicotine use disorders</li>
                  <li>• Other substance use disorders</li>
                  <li>• Eating disorders</li>
                  <li>• <strong>Online medication management</strong></li>
                </ul>
              </article>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Advanced treatment expertise</h3>
              <p className="text-dark-grey text-lg mb-4">
                Dr. Tabrah brings extensive experience in psychopharmacology and various treatment modalities including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-dark-grey">
                <ul className="space-y-2">
                  <li>• Outpatient & inpatient care</li>
                  <li>• <strong>Telehealth psychiatry</strong></li>
                  <li>• Detox/rehabilitation</li>
                  <li>• Consultation-Liaison Psychiatry</li>
                </ul>
                <ul className="space-y-2">
                  <li>• ECT (Electroconvulsive Therapy)</li>
                  <li>• Ketamine therapy</li>
                  <li>• Transcranial Magnetic Stimulation (TMS)</li>
                  <li>• <strong>Telemedicine diagnostic assessments</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Telepsychiatry Works Section */}
        <section id="how-it-works" className="py-20 bg-white" aria-labelledby="how-it-works-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="how-it-works-heading" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Your Path to Healing: Simple Steps for Telepsychiatry
              </h2>
              <p className="text-xl text-dark-grey max-w-3xl mx-auto">
                A seamless process from initial inquiry to ongoing support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-periwinkle rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <span className="text-deep-blue text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Initial appointment</h3>
                <p className="text-dark-grey">
                  Schedule your confidential virtual appointment through our secure booking system. We'll discuss your concerns and mental health goals in a safe, private environment.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-periwinkle rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <span className="text-deep-blue text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Treatment planning</h3>
                <p className="text-dark-grey">
                  Together, we'll develop a personalized treatment plan that may include medication management, brief psychotherapeutic interventions, and ongoing support strategies.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-periwinkle rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <span className="text-deep-blue text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-4">Ongoing support</h3>
                <p className="text-dark-grey">
                  Regular follow-up appointments through our secure telehealth platform ensure continuous care and treatment adjustments as needed for your wellness journey.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-deep-blue mb-4">What to expect from your first telepsychiatry appointment</h3>
              <div className="grid md:grid-cols-2 gap-6 text-dark-grey">
                <div>
                  <h4 className="font-semibold mb-2">Technical requirements:</h4>
                  <ul className="space-y-1">
                    <li>• Stable internet connection</li>
                    <li>• Computer, tablet, or smartphone with camera</li>
                    <li>• Private, quiet space for your appointment</li>
                    <li>• HIPAA-compliant secure platform access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">During your session:</h4>
                  <ul className="space-y-1">
                    <li>• Comprehensive mental health assessment</li>
                    <li>• Discussion of symptoms and concerns</li>
                    <li>• Review of medical and psychiatric history</li>
                    <li>• Collaborative treatment planning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3OcEIOqt1Dqc4XduNreshvgjy-tCdrsxL9SBc=?gv=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-deep-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                aria-label="Start your journey today - schedule appointment - opens in new window"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-20 bg-gray-50" aria-labelledby="faqs-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="faqs-heading" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Common Questions About Online Mental Healthcare
              </h2>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-deep-blue mb-3">What is telepsychiatry and how does it work?</h3>
                <p className="text-dark-grey">
                  <strong>Telepsychiatry</strong> is the practice of providing psychiatric care through secure video conferencing technology. It allows you to receive professional mental health treatment from the comfort and privacy of your own home, while maintaining the same quality of care as in-person visits.
                </p>
              </article>

              {/* FAQ 2 */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-deep-blue mb-3">Is online therapy effective for depression?</h3>
                <p className="text-dark-grey">
                  Yes, numerous studies have shown that <strong>telepsychiatry is as effective as in-person treatment for depression</strong> and many other mental health conditions. The key is working with a qualified, board-certified psychiatrist who can provide personalized care and medication management when needed.
                </p>
              </article>

              {/* FAQ 3 */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-deep-blue mb-3">How do I get prescribed medication online for anxiety?</h3>
                <p className="text-dark-grey">
                  During your telepsychiatry appointment, Dr. Tabrah will conduct a comprehensive assessment of your symptoms and medical history. If medication is appropriate for your <strong>anxiety treatment</strong>, she can prescribe and manage medications through secure telehealth platforms, with prescriptions sent directly to your pharmacy.
                </p>
              </article>

              {/* FAQ 4 */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-deep-blue mb-3">What's the difference between a psychiatrist and a psychologist in teletherapy?</h3>
                <p className="text-dark-grey">
                  A <strong>psychiatrist is a medical doctor</strong> who can prescribe medications and provide both therapy and medication management. A psychologist typically provides therapy and counseling but cannot prescribe medications. Dr. Tabrah, as a board-certified psychiatrist, can provide comprehensive care including medication management and brief psychotherapeutic interventions.
                </p>
              </article>

              {/* FAQ 5 */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-deep-blue mb-3">Is my information HIPAA compliant?</h3>
                <p className="text-dark-grey">
                  Absolutely. All telepsychiatry sessions are conducted through <strong>HIPAA-compliant, secure platforms</strong> that protect your privacy and confidentiality. Your personal health information is encrypted and stored securely, meeting all federal privacy requirements for healthcare.
                </p>
              </article>

              {/* FAQ 6 */}
              <article className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-deep-blue mb-3">What insurance do you accept for telepsychiatry?</h3>
                <p className="text-dark-grey">
                  Insurance coverage varies by provider and plan. We recommend contacting your insurance provider to verify coverage for <strong>telepsychiatry services</strong>. During your initial appointment, we can discuss payment options and help you understand your benefits for online mental health care.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
                Voices of Healing: Patient Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Testimonial 1 */}
              <article className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="text-periwinkle text-4xl mb-4" aria-hidden="true">"</div>
                <blockquote className="text-dark-grey mb-6">
                  "Dr. Tabrah's compassionate approach and expertise in telepsychiatry transformed my mental health journey. The convenience of online sessions made it possible for me to get the help I needed."
                </blockquote>
                <cite className="text-deep-blue font-semibold">— Sarah M., Ohio</cite>
              </article>

              {/* Testimonial 2 */}
              <article className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="text-periwinkle text-4xl mb-4" aria-hidden="true">"</div>
                <blockquote className="text-dark-grey mb-6">
                  "As a new mother struggling with postpartum depression, Dr. Tabrah's understanding of women's mental health needs was exactly what I needed. Her virtual care made treatment accessible during a difficult time."
                </blockquote>
                <cite className="text-deep-blue font-semibold">— Jennifer L., Florida</cite>
              </article>

              {/* Testimonial 3 */}
              <article className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="text-periwinkle text-4xl mb-4" aria-hidden="true">"</div>
                <blockquote className="text-dark-grey mb-6">
                  "The personalized medication management and ongoing support through telepsychiatry helped me manage my anxiety effectively. Dr. Tabrah truly listens and cares about her patients."
                </blockquote>
                <cite className="text-deep-blue font-semibold">— Michael R., Kansas</cite>
              </article>
            </div>

            <div className="text-center bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-deep-blue mb-4">Share your experience</h3>
              <p className="text-dark-grey mb-6">
                Your feedback helps others find the mental health support they need. Consider leaving a review on:
              </p>
              {/* 
                ========================================
                REVIEW PLATFORM LINKS - UPDATE THESE URLs
                ========================================
                
                To update review platform links, simply replace the href="#" 
                with your actual review page URLs:
                
                Google Business Profile: Replace href="#" with href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
                Psychology Today: Replace href="#" with href="https://www.psychologytoday.com/profile/YOUR_PROFILE_ID"
                HealthGrades: Replace href="#" with href="https://www.healthgrades.com/physician/dr-YOUR_NAME"
                
                You can also add more review platforms by copying 
                the <a> tag structure below and changing the platform name.
              */}
              <div className="flex justify-center flex-wrap gap-6 text-deep-blue">
                {/* Google Business Profile Link - Replace href="#" with your Google Business review URL */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded"
                  aria-label="Leave a review on Google Business Profile - opens in new window"
                >
                  Google Business Profile
                </a>
                
                <span className="text-gray-400">•</span>
                
                {/* Psychology Today Link - Replace href="#" with your Psychology Today profile URL */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded"
                  aria-label="Leave a review on Psychology Today - opens in new window"
                >
                  Psychology Today
                </a>
                
                <span className="text-gray-400">•</span>
                
                {/* HealthGrades Link - Replace href="#" with your HealthGrades profile URL */}
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded"
                  aria-label="Leave a review on HealthGrades - opens in new window"
                >
                  HealthGrades
                </a>
              </div>
              {/* End of Review Platform Links Section */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-lavender to-periwinkle" aria-labelledby="contact-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-deep-blue mb-6">
              Ready to Reach Out for Help? Connect with Us.
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-deep-blue mb-6">Contact information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-dark-grey mb-2">Phone or text</h4>
                      <a 
                        href="tel:707-582-2724" 
                        className="text-deep-blue hover:text-blue-800 transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded"
                        aria-label="Call or text 707-582-2724"
                      >
                        707-582-2724
                      </a>
                      <p className="text-dark-grey text-sm">7075-TABRAH</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-grey mb-2">Email</h4>
                      <a 
                        href="mailto:info@tabrahtelepsych.com" 
                        className="text-deep-blue hover:text-blue-800 transition-colors text-lg font-medium focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded"
                        aria-label="Email info@tabrahtelepsych.com"
                      >
                        info@tabrahtelepsych.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-deep-blue mb-6">Hours</h3>
                  
                  <div className="space-y-2 text-dark-grey">
                    <div className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span>8 AM - 8 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span>10 AM - 1 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10 AM - 1 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10 AM - 1 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas with License Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold text-deep-blue mb-4">Licensed to serve</h3>
              <p className="text-dark-grey mb-6">
                Dr. Tabrah is licensed to provide <strong>telepsychiatry services</strong> across multiple states:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-deep-blue">Ohio (OH)</div>
                    <div className="text-sm text-dark-grey">License #35-07-9156-T</div>
                  </div>
                  <div>
                    <div className="font-semibold text-deep-blue">Missouri (MO)</div>
                    <div className="text-sm text-dark-grey">License #2022014769</div>
                    <div className="text-sm text-dark-grey">DEA #BT6480064</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-deep-blue">Kansas (KS)</div>
                    <div className="text-sm text-dark-grey">License #04-46121</div>
                  </div>
                  <div>
                    <div className="font-semibold text-deep-blue">Florida (FL)</div>
                    <div className="text-sm text-dark-grey">License #ME-76909</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-dark-grey">
                  <strong>Board Certification:</strong> Diplomate of the American Board of Psychiatry and Neurology
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/AcZssZ3OcEIOqt1Dqc4XduNreshvgjy-tCdrsxL9SBc=?gv=true" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-deep-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              aria-label="Schedule your confidential appointment - opens in new window"
            >
              Schedule Your Confidential Appointment
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-deep-blue text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and Tagline - Clickable Home Link */}
            <div>
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded"
                aria-label="Tabrah TelePsychiatry - Return to top of page"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg">
                  <img 
                    src="https://i.ibb.co/1Y2QtGqd/TTPLogo-png.png" 
                    alt="Tabrah TelePsychiatry Logo" 
                    className="w-8 h-8 object-contain"
                    width="32"
                    height="32"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Tabrah TelePsychiatry</h3>
                  <p className="text-sm text-gray-300">Reach out for help</p>
                </div>
              </button>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick links</h4>
              <nav className="space-y-2" role="navigation" aria-label="Footer navigation">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded">About Dr. Tabrah</a>
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded">Services</a>
                <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded">How it works</a>
                <a href="#faqs" className="block text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded">FAQs</a>
              </nav>
            </div>

            {/* Social Media Links Section - EASY TO UPDATE */}
            <div>
              <h4 className="font-semibold mb-4">Connect with us</h4>
              {/* 
                ========================================
                SOCIAL MEDIA LINKS - UPDATE THESE URLs
                ========================================
                
                To update social media links, simply replace the href="#" 
                with your actual social media URLs:
                
                Facebook: Replace href="#" with href="https://facebook.com/yourpage"
                Instagram: Replace href="#" with href="https://instagram.com/youraccount"  
                LinkedIn: Replace href="#" with href="https://linkedin.com/in/yourprofile"
                Pinterest: Replace href="#" with href="https://pinterest.com/youraccount"
                
                You can also add more social media platforms by copying 
                the <a> tag structure below and changing the platform name.
              */}
              <div className="flex space-x-4">
                {/* Facebook Link - Replace href="#" with your Facebook URL */}
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded" 
                  aria-label="Facebook"
                >
                  Facebook
                </a>
                
                {/* Instagram Link - Replace href="#" with your Instagram URL */}
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded" 
                  aria-label="Instagram"
                >
                  Instagram
                </a>
                
                {/* LinkedIn Link - Replace href="#" with your LinkedIn URL */}
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded" 
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                
                {/* Pinterest Link - Replace href="#" with your Pinterest URL */}
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded" 
                  aria-label="Pinterest"
                >
                  Pinterest
                </a>
              </div>
              {/* End of Social Media Links Section */}
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-300">
                © 2025 Tabrah TelePsychiatry. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-300">
                <a 
                  href="https://policies.google.com/privacy?hl=en-US" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded"
                >
                  Privacy Policy
                </a>
                <a 
                  href="https://policies.google.com/terms?hl=en-US" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;