import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import Button from "./common/Button";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-surface to-background relative overflow-hidden"
    >
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with Nimesh Dilhara Kulasooriya. Available for freelance React, Node.js & MERN stack projects worldwide. Let's build something great together."
        />
        <link rel="canonical" href="https://nimeshdilhara.vercel.app/contact" />
      </Helmet>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            📬 Let's Connect
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-text-primary/80 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or have a question?
            <br />
            <span className="text-accent font-semibold">Let's connect!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-surface/90 rounded-3xl shadow-xl shadow-accent/10 p-8 border border-border-subtle md:bg-surface/70 md:backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Send me a message
                </h3>
                <p className="text-text-primary/70 text-sm">
                  I'll get back to you as soon as possible!
                </p>
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
                      className="w-full px-4 py-3 bg-background/70 border border-border-subtle rounded-xl text-text-primary placeholder-text-primary/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 group-hover:border-accent/50 md:bg-background/50 md:backdrop-blur-sm"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border-subtle rounded-xl text-text-primary placeholder-text-primary/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 group-hover:border-accent/50"
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
                    className="w-full px-4 py-3 bg-background/50 backdrop-blur-sm border border-border-subtle rounded-xl text-text-primary placeholder-text-primary/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 group-hover:border-accent/50"
                  ></textarea>
                </div>

                <input type="hidden" name="_captcha" value="false" />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<FaPaperPlane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="bg-surface/90 rounded-2xl p-6 border border-border-subtle shadow-lg shadow-accent/5 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 group md:bg-surface/70 md:backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-text-primary text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-lg">
                        Email
                      </h4>
                      <a
                        href="mailto:nimeshdilhara2001@gmail.com"
                        className="text-text-primary/70 hover:text-accent transition-colors duration-300"
                      >
                        nimeshdilhara2001@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-surface/90 rounded-2xl p-8 border border-border-subtle shadow-lg shadow-accent/5 md:bg-surface/70 md:backdrop-blur-sm">
                <h3 className="text-xl font-bold text-text-primary mb-6 text-center">
                  Follow me on
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://instagram.com/nimeshdilhara_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-text-primary shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                    title="Instagram"
                  >
                    <FaInstagram className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nimeshdilhara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-text-primary shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a
                    href="https://github.com/nimeshdilhara96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-text-primary shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                    title="GitHub"
                  >
                    <FaGithub className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a
                    href="https://twitter.com/nimeshdilhara8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl flex items-center justify-center text-text-primary shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                    title="Twitter"
                  >
                    <FaTwitter className="text-lg group-hover:animate-pulse" />
                  </a>
                  <a
                    href="https://facebook.com/nimesh.dilhara.96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-text-primary shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
                    title="Facebook"
                  >
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
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-accent/70 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-accent/50 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
