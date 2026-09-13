import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/madrasaData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Compute redirect URL for FormSubmit _next
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('submitted', 'true');
      url.hash = '#contact';
      setRedirectUrl(url.toString());

      // Check if redirected back with submitted=true
      const params = new URLSearchParams(window.location.search);
      if (params.get('submitted') === 'true') {
        setSubmitStatus('success');
        setStatusMessage('ধন্যবাদ! আপনার বার্তাটি FormSubmit.co এর মাধ্যমে সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // FormSubmit submission handler
    // We attempt AJAX submission first for seamless in-page feedback;
    // if any issue occurs, we allow natural native form post submission.
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + CONTACT_INFO.email, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        // Fallback to standard native POST submission
        form.submit();
      }
    } catch {
      // If fetch fails or CORS restricts, fallback to standard form submit
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            <span>বার্তা ও পরামর্শ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-bn text-[#064e3b] mb-4">
            যোগাযোগ করুন
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            মাদরাসার শিক্ষা কার্যক্রম, ভর্তি প্রক্রিয়া বা যেকোনো তথ্যের জন্য সরাসরি আমাদের বার্তা পাঠান।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="bg-gradient-to-br from-[#064e3b] to-[#043c2d] text-white rounded-2xl p-7 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 border border-amber-400/30">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif-bn text-white">অফিসিয়াল ইমেইল</h3>
                  <p className="text-xs text-emerald-200">প্রশাসনিক ও সাধারণ অনুসন্ধান</p>
                </div>
              </div>

              <div className="bg-black/25 rounded-xl p-3.5 flex items-center justify-between gap-2 border border-white/15 mb-4">
                <span className="font-mono text-sm sm:text-base text-amber-200 truncate select-all">
                  {CONTACT_INFO.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 cursor-pointer"
                  title="ইমেইল কপি করুন"
                  aria-label="ইমেইল কপি করুন"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-gray-950 px-4 py-2 rounded-lg transition-colors"
                >
                  <span>মেইল অ্যাপ খুলুন</span>
                  <Send className="w-3 h-3" />
                </a>
                {copiedEmail && (
                  <span className="text-xs text-emerald-300 animate-in fade-in font-medium">
                    কপি করা হয়েছে!
                  </span>
                )}
              </div>
            </div>

            {/* Timings & Service Card */}
            <div className="bg-[#f9fbf9] rounded-2xl p-6 border border-emerald-100 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#064e3b] text-base font-serif-bn">অফিস সময়সূচি</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    শনিবার হতে বৃহস্পতিবার: সকাল ৮:০০ টা হতে আসর পর্যন্ত
                  </p>
                  <p className="text-xs text-amber-700 font-semibold mt-1">
                    (শুক্রবার সাপ্তাহিক ছুটি)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-200/80">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#064e3b] text-base font-serif-bn">ভর্তি ও পরামর্শ সেবা</h4>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    অভিভাবকগণের সুবিধার্থে সার্বক্ষণিক অনলাইন বার্তা ও পরামর্শের সুব্যবস্থা রয়েছে।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete FormSubmit.co Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-md">
              <div className="border-b border-gray-100 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-serif-bn text-[#064e3b]">
                  আমাদের কাছে বার্তা পাঠান
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  নিচের ফরমটি পূরণ করে আপনার বার্তা সরাসরি মাদরাসা কর্তব্যের কাছে পৌঁছে দিন।
                </p>
              </div>

              {/* Status Alert Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="block font-bold">বার্তা সফলভাবে পাঠানো হয়েছে!</strong>
                    {statusMessage || 'আপনার বার্তাটি FormSubmit এর মাধ্যমে সফলভাবে গৃহীত হয়েছে।'}
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-900 flex items-start gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="block font-bold">দুঃখিত, কোনো সমস্যা হয়েছে!</strong>
                    {statusMessage || 'অনুগ্রহ করে পুনরায় চেষ্টা করুন অথবা সরাসরি ইমেইলে যোগাযোগ করুন।'}
                  </div>
                </div>
              )}

              {/* FormSubmit.co Real Contact Form */}
              <form
                action={CONTACT_INFO.formAction}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
                id="madrasa-contact-form"
              >
                {/* FormSubmit.co Required Hidden Fields */}
                <input type="hidden" name="_subject" value={CONTACT_INFO.subject} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                {redirectUrl && <input type="hidden" name="_next" value={redirectUrl} />}
                
                {/* Honeypot for spam protection */}
                <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="আপনার সম্পূর্ণ নাম"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      মোবাইল নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="০১XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email & Subject Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      ইমেইল <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@mail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-subject" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      বিষয় <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="যেমন: ভর্তি অনুসন্ধান / মতামত"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="form-message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    বার্তা <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all resize-y bg-gray-50/50 focus:bg-white"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    id="submit-message-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#064e3b] hover:bg-[#043c2d] text-white font-bold py-3.5 px-6 rounded-xl shadow hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-base border border-amber-500/30"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>বার্তা পাঠানো হচ্ছে...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-amber-300" />
                        <span>বার্তা পাঠান</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-gray-400">
                    * আপনার প্রেরিত তথ্য FormSubmit.co এর মাধ্যমে নিরাপদে সংরক্ষিত হবে।
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
