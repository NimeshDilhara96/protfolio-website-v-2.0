import React from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaLinkedin, FaBehance, FaExternalLinkAlt } from "react-icons/fa";
import aboutPhoto from "../assets/about_n.webp";
import Education from "./Education";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "2+", label: "Years Exp." },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

const competencies = [
  "Full-Stack Web Development",
  "SaaS Architecture",
  "React & Next.js",
  "Node.js & Express",
  "UI/UX Design (Figma)",
  "MongoDB & MySQL",
  "AI & ML Integration",
  "REST API Design",
  "Cloud Deployment",
  "Multi-Tenant Systems",
];

const brings = [
  {
    emoji: "🏗️",
    title: "Production-Ready Systems",
    desc: "Secure authentication, multi-tenant SaaS architecture, and cloud-deployed applications built to scale.",
  },
  {
    emoji: "🎨",
    title: "Design + Code",
    desc: "I design in Figma and build it myself — one person, end-to-end, with zero compromise on quality.",
  },
  {
    emoji: "🤖",
    title: "AI-Powered Features",
    desc: "Real-world AI integration — AI-generated meal & training plans, smart search, and intelligent workflows.",
  },
  {
    emoji: "⚡",
    title: "Performance-First",
    desc: "Optimized for speed: lazy loading, code splitting, efficient queries, and clean architecture.",
  },
];

function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen bg-background relative overflow-hidden"
      >
        <Helmet>
          <title>
            About Nimesh Dilhara Kulasooriya | Full-Stack Developer Sri Lanka
          </title>
          <meta
            name="description"
            content="Learn about Nimesh Dilhara Kulasooriya — software engineering undergraduate, full-stack developer from Sri Lanka specializing in React, Node.js & AI integration."
          />
          <link rel="canonical" href="https://nimeshdilhara.vercel.app/about" />
        </Helmet>

        {/* Subtle background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/4 rounded-full blur-[140px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 md:py-28 relative z-10">

          {/* ── Page heading ── */}
          <div className="mb-16">
            <p className="text-text-primary/40 text-xs font-bold uppercase tracking-widest mb-2">
              Get to know me
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight leading-none">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-300">
                Me
              </span>
            </h1>
          </div>

          {/* ── Main layout: sticky card left + content right ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 xl:gap-16 items-start">

            {/* ── Left: Sticky profile card ── */}
            <div className="lg:sticky lg:top-24 flex flex-col gap-5">

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-border-subtle bg-surface/80">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10" />
                <img
                  src={aboutPhoto}
                  alt="Nimesh Dilhara Kulasooriya"
                  loading="lazy"
                  width="340"
                  height="340"
                  className="w-full h-72 object-cover object-top"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <h2 className="text-xl font-bold text-text-primary leading-tight">
                    Nimesh Dilhara
                  </h2>
                  <p className="text-accent text-sm font-medium">
                    Full-Stack Developer · Sri Lanka
                  </p>
                </div>
                {/* Available badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  Available for work
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2">
                {stats.map((s, i) => (
                  <div key={i} className="flex flex-col items-center bg-surface/70 rounded-xl py-3 px-1 border border-border-subtle">
                    <span className="text-lg font-extrabold text-accent">{s.value}</span>
                    <span className="text-[10px] text-text-primary/50 text-center leading-tight mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3">
                <a href="https://github.com/NimeshDilhara96" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface/80 border border-border-subtle text-text-primary/70 hover:text-text-primary hover:border-accent/50 transition-all text-sm font-medium">
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/nimeshdilhara" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface/80 border border-border-subtle text-text-primary/70 hover:text-text-primary hover:border-accent/50 transition-all text-sm font-medium">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://www.behance.net/nimeshdilhara" target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface/80 border border-border-subtle text-text-primary/70 hover:text-text-primary hover:border-accent/50 transition-all text-sm font-medium">
                  <FaBehance /> Behance
                </a>
              </div>

              {/* CTA */}
              <a
                href="/downloads"
                className="flex items-center justify-center gap-2 py-3 btn-primary border-transparent text-sm font-bold rounded-xl hover:bg-emerald-500 transition-all shadow-lg shadow-accent/20"
              >
                <FaExternalLinkAlt className="text-xs" />
                Download Resume
              </a>
            </div>

            {/* ── Right: Content ── */}
            <div className="flex flex-col gap-10">

              {/* Bio */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-accent inline-block rounded-full" />
                  Who I am
                </h3>
                <div className="space-y-4 text-text-primary/70 leading-relaxed text-base">
                  <p>
                    I&apos;m a{" "}
                    <span className="text-accent font-semibold">
                      Bachelor of Information Technology (Hons.) in Software Engineering
                    </span>{" "}
                    graduate, passionate about building scalable, secure, and production-ready digital
                    solutions that solve real-world problems. I combine strong engineering practices
                    with creative problem-solving to build reliable and meaningful software experiences.
                  </p>
                  <p>
                    I specialize in{" "}
                    <span className="text-accent font-semibold">full-stack web development</span>,{" "}
                    <span className="text-accent font-semibold">SaaS application development</span>,
                    backend engineering, and modern software architecture — with hands-on experience
                    building and deploying real-world applications focused on performance,
                    maintainability, security, and business value.
                  </p>
                  <p>
                    Beyond code, I design in Figma, integrate AI into products, and care deeply
                    about user experience. I&apos;m continuously expanding my expertise while exploring
                    emerging technologies that create practical value.
                  </p>
                </div>
              </div>

              {/* Competency pills */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-accent inline-block rounded-full" />
                  Core Competencies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {competencies.map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-surface/80 border border-border-subtle text-text-primary/80 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I bring */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-6 h-0.5 bg-accent inline-block rounded-full" />
                  What I bring
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brings.map((b, i) => (
                    <div
                      key={i}
                      className="group p-5 rounded-2xl bg-surface/80 border border-border-subtle hover:border-accent/40 hover:shadow-lg shadow-accent/20 transition-all duration-300"
                    >
                      <div className="text-2xl mb-3">{b.emoji}</div>
                      <h4 className="text-text-primary font-bold text-sm mb-1.5 group-hover:text-accent transition-colors">
                        {b.title}
                      </h4>
                      <p className="text-text-primary/55 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Education section — style unchanged */}
      <Education />
    </>
  );
}

export default About;
