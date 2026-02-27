import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#11181C] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#34B27B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#34B27B]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#34B27B]/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8F9FA] mb-4 tracking-tight">
            📬 Let's Connect
          </h2>
          <div className="w-20 h-1 bg-[#34B27B] mx-auto rounded-full"></div>
          <p className="text-[#F8F9FA]/80 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or have a question?<br />
            <span className="text-[#34B27B] font-semibold">Let's connect!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-[#11181C]/70 backdrop-blur-sm rounded-3xl shadow-xl shadow-[#34B27B]/10 p-8 border border-[#F8F9FA]/10">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#F8F9FA] mb-2">Send me a message</h3>
                <p className="text-[#F8F9FA]/70 text-sm">I'll get back to you as soon as possible!</p>
              </div>

              <form
                action="https://formsubmit.co/nimeshdilhara2001@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Form Row - Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-[#F8F9FA]/20 rounded-xl text-[#F8F9FA] placeholder-[#F8F9FA]/50 focus:outline-none focus:border-[#34B27B] focus:ring-2 focus:ring-[#34B27B]/20 transition-all duration-300 group-hover:border-[#34B27B]/50"
                    />
                  </div>
                  <div className="group">
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      required 
                     className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-[#F8F9FA]/20 rounded-xl text-[#F8F9FA] placeholder-[#F8F9FA]/50 focus:outline-none focus:border-[#34B27B] focus:ring-2 focus:ring-[#34B27B]/20 transition-all duration-300 group-hover:border-[#34B27B]/50"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder="Your Message" 
                    required
                    className="w-full px-4 py-3 bg-black/50 backdrop-blur-sm border border-[#F8F9FA]/20 rounded-xl text-[#F8F9FA] placeholder-[#F8F9FA]/50 focus:outline-none focus:border-[#34B27B] focus:ring-2 focus:ring-[#34B27B]/20 transition-all duration-300 group-hover:border-[#34B27B]/50"
                  ></textarea>
                </div>

                <input type="hidden" name="_captcha" value="false" />
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full px-8 py-4 bg-[#34B27B] text-white font-semibold rounded-xl shadow-lg shadow-[#34B27B]/25 hover:shadow-xl hover:shadow-[#34B27B]/35 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-[#11181C]/70 backdrop-blur-sm rounded-2xl p-6 border border-[#F8F9FA]/10 shadow-lg shadow-[#34B27B]/5 hover:shadow-xl hover:shadow-[#34B27B]/10 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#34B27B] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F8F9FA] text-lg">Email</h4>
                      <a href="mailto:nimeshdilhara2001@gmail.com" className="text-[#F8F9FA]/70 hover:text-[#34B27B] transition-colors duration-300">
                        nimeshdilhara2001@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#11181C]/70 backdrop-blur-sm rounded-2xl p-8 border border-[#F8F9FA]/10 shadow-lg shadow-[#34B27B]/5">
                <h3 className="text-xl font-bold text-[#F8F9FA] mb-6 text-center">Follow me on</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  
                  <a href="https://instagram.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group" 
                     title="Instagram">
                    <FaInstagram className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group" 
                     title="LinkedIn">
                    <FaLinkedin className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a href="https://github.com/nimeshdilhara96" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-[#11181C] rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group" 
                     title="GitHub">
                    <FaGithub className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a href="https://twitter.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group" 
                     title="Twitter">
                    <FaTwitter className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a href="https://facebook.com/nimesh.dilhara.96" target="_blank" rel="noopener noreferrer" 
                     className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group" 
                     title="Facebook">
                    <FaFacebook className="text-lg group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#34B27B] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#34B27B]/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-[#34B27B]/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;