import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitState('idle');

    if (!CONTACT_ENDPOINT) {
      setIsSubmitting(false);
      setSubmitState('error');
      setErrorMessage('Contact form endpoint is not configured. Please set VITE_CONTACT_ENDPOINT.');
      return;
    }

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitState('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
        trackEvent('contact_submit_success');
      } else {
        setSubmitState('error');
        setErrorMessage('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setSubmitState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 70% 70%, rgba(47, 107, 255, 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-6">
              Get in Touch
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Let's
              <br />
              <span className="text-gradient">build.</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From prototype to production—fast, compliant, and built to last.
              Tell us what you're building and we'll get back within 2 business days.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Office</div>
                  <div className="text-foreground">
                    Plot 75 Bukoto Street, Kamwokya, Kampala, Uganda
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:info@locusanalytics.co.ug"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    info@locusanalytics.co.ug
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone / WhatsApp</div>
                  <a
                    href="tel:+256700000000"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +256 700 000 000
                  </a>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Or email us directly at{' '}
              <a
                href="mailto:hello@locusanalytics.io"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                hello@locusanalytics.io
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Right content - Contact form */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-3xl" />

              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 lg:p-8 shadow-card">
                {submitState === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Message sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      We'll get back to you within 2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitState('idle')}
                      className="text-sm text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="text-xl font-semibold mb-1">
                        Start a project
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Tell us what you're building. We'll reply within 2 business days.
                      </div>
                    </div>

                    {submitState === 'error' && (
                      <div className="flex items-start gap-3 p-4 mb-4 rounded-xl bg-destructive/10 border border-destructive/20">
                        <AlertCircle size={18} className="text-destructive mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-destructive">{errorMessage}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      {/* Honeypot — hidden from real users */}
                      <div className="absolute -left-[9999px]" aria-hidden="true">
                        <input
                          type="text"
                          name="_gotcha"
                          tabIndex={-1}
                          autoComplete="off"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className={`w-full ${errors.name ? 'ring-2 ring-destructive/50' : ''}`}
                          />
                          {errors.name && (
                            <p className="text-xs text-destructive mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Email <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                            className={`w-full ${errors.email ? 'ring-2 ring-destructive/50' : ''}`}
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Organization
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Company or organization"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={4}
                          required
                          className={`w-full resize-none ${errors.message ? 'ring-2 ring-destructive/50' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-xs text-destructive mt-1">{errors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send message
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
