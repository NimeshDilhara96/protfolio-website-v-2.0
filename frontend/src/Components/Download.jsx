import React from 'react';
import { FaFilePdf, FaFileArchive, FaDownload, FaAndroid } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const downloads = [
    {
        icon: <FaFilePdf className="text-4xl text-red-600" />,
        title: 'Resume (PDF)',
        desc: 'Download my latest resume in PDF format.',
        url: 'none',
        btn: 'Download',
    },
    {
        icon: <FaAndroid className="text-4xl text-green-500" />,
        title: 'Note App',
        desc: 'My new Project.',
        url: 'https://drive.google.com/uc?export=download&id=1-PRy0NVmhiec0-Xdzx5tYsKxxoorTgoB',
        btn: 'Download',
    },
];

function Download() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-[var(--light)] to-[var(--light-dark)] relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--accent-pink)]/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>

                <main className="relative z-10 container mx-auto px-4 pt-24 pb-16">
                    {/* Page Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--dark)] mb-4 tracking-tight flex items-center justify-center gap-4">
                            <FaDownload className="text-[var(--primary)]" />
                            Downloads
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-pink)] mx-auto rounded-full"></div>
                        <p className="text-[var(--gray)] text-lg mt-6 max-w-2xl mx-auto">
                            Download my resume and check out my latest projects
                        </p>
                    </div>

                    {/* Download Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {downloads.map((item, idx) => (
                            <div 
                                key={idx}
                                className="group bg-dark/70 backdrop-blur-sm rounded-2xl shadow-lg shadow-[var(--primary)]/5 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--primary)]/10 hover:scale-105 hover:-translate-y-2 border border-white/20"
                                style={{
                                    animationDelay: `${idx * 150}ms`
                                }}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-[var(--dark)] mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--gray)] text-sm mb-6 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    {/* Download Button */}
                                    <a
                                        href={item.url}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white text-sm font-semibold rounded-xl shadow-lg shadow-[var(--primary)]/20 hover:shadow-xl hover:shadow-[var(--primary)]/30 hover:scale-105 transition-all duration-300 group/btn"
                                        download
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaDownload className="text-sm transition-transform duration-300 group-hover/btn:animate-bounce" />
                                        <span>{item.btn}</span>
                                    </a>
                                </div>

                                {/* Bottom glow effect */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Add more downloads message */}
                    <div className="text-center mt-16">
                        <div className="inline-flex items-center px-6 py-3 bg-indigo-800 backdrop-blur-sm rounded-full border border-white/20 text-[var(--gray)] text-sm">
                            <div className="w-2 h-2 bg-[var(--accent)] rounded-full mr-3 animate-pulse"></div>
                            More downloads coming soon!
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default Download;