import React, { useState, useMemo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
    FaCalendarAlt,
    FaClock,
    FaTag,
    FaSearch,
    FaArrowRight,
    FaRss,
    FaBookOpen,
    FaFire,
    FaCode,
    FaBrain,
    FaLaptopCode,
    FaPaintBrush,
} from "react-icons/fa";

/* ─────────────────────────────────────────────
   DEV.TO DATA CONFIG
───────────────────────────────────────────── */
const DEV_TO_USERNAME = "nimeshdilhara"; // ← change this if your dev.to username is different

/* ─────────────────────────────────────────────
   STRUCTURED DATA helpers
───────────────────────────────────────────── */
const SITE_URL = "https://nimeshdilhara.dev"; // ← change to your domain
const AUTHOR = "Nimesh Dilhara Kulasooriya";

function buildListSchema(posts) {
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${AUTHOR} — Blog`,
        description:
            "Articles on full-stack development, AI/ML, and UI/UX design by Nimesh Dilhara Kulasooriya.",
        url: `${SITE_URL}/blog`,
        author: {
            "@type": "Person",
            name: AUTHOR,
            url: SITE_URL,
        },
        blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.dateISO,
            url: p.url,
            author: { "@type": "Person", name: AUTHOR },
            keywords: p.tags.join(", "),
        })),
    };
}

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */
function CategoryPill({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            aria-pressed={active}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34B27B] ${active
                    ? "bg-[#34B27B] text-white shadow-lg shadow-[#34B27B]/20"
                    : "bg-[#11181C]/80 text-[#F8F9FA]/70 border border-[#F8F9FA]/10 hover:border-[#34B27B]/40 hover:text-[#F8F9FA]"
                }`}
        >
            {label}
        </button>
    );
}

function FeaturedCard({ post }) {
    return (
        <article
            aria-label={`Featured: ${post.title}`}
            itemScope
            itemType="https://schema.org/BlogPosting"
            onClick={() => window.open(post.url, "_blank")}
            className="group relative bg-[#11181C]/80 md:bg-[#11181C]/60 md:backdrop-blur-sm rounded-2xl border border-[#F8F9FA]/10 hover:border-[#34B27B]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#34B27B]/5 overflow-hidden cursor-pointer"
        >
            {/* Hidden SEO metadata */}
            <meta itemProp="datePublished" content={post.dateISO} />
            <meta itemProp="author" content={AUTHOR} />
            <meta itemProp="description" content={post.excerpt} />
            <link itemProp="url" href={post.url} />

            {/* Green accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#34B27B] to-[#34B27B]/30" />

            <div className="p-7">
                {/* Badge row */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 bg-[#34B27B]/15 text-[#34B27B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        <FaFire className="text-[10px]" /> Featured
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-[#F8F9FA]/5 text-[#F8F9FA]/60 text-xs px-3 py-1 rounded-full border border-[#F8F9FA]/10">
                        <FaTag className="text-[10px]" />
                        <span itemProp="articleSection">{post.category}</span>
                    </span>
                </div>

                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#34B27B]/20 rounded-xl flex items-center justify-center text-[#34B27B] text-xl group-hover:scale-110 transition-transform duration-300">
                        {post.icon}
                    </div>
                    <h3
                        itemProp="headline"
                        className="text-xl md:text-2xl font-bold text-[#F8F9FA] leading-tight group-hover:text-[#34B27B] transition-colors duration-300"
                    >
                        {post.title}
                    </h3>
                </div>

                <p className="text-[#F8F9FA]/70 leading-relaxed mb-5">{post.excerpt}</p>

                {/* Meta row */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-4 text-sm text-[#F8F9FA]/50">
                        <span className="flex items-center gap-1.5">
                            <FaCalendarAlt className="text-[#34B27B]/70" />
                            <time itemProp="datePublished" dateTime={post.dateISO}>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                })}
                            </time>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <FaClock className="text-[#34B27B]/70" />
                            {post.readTime} min read
                        </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-[#34B27B] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Read article <FaArrowRight className="text-xs" />
                    </span>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                        <span
                            key={t}
                            className="text-xs bg-[#F8F9FA]/5 text-[#F8F9FA]/50 border border-[#F8F9FA]/10 px-2.5 py-1 rounded-full"
                        >
                            #{t}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

function PostCard({ post }) {
    return (
        <article
            aria-label={post.title}
            itemScope
            itemType="https://schema.org/BlogPosting"
            onClick={() => window.open(post.url, "_blank")}
            className="group bg-[#11181C]/80 md:bg-[#11181C]/60 md:backdrop-blur-sm p-6 rounded-xl border border-[#F8F9FA]/10 hover:border-[#34B27B]/40 hover:shadow-lg hover:shadow-[#34B27B]/5 transition-all duration-300 cursor-pointer flex flex-col"
        >
            <meta itemProp="datePublished" content={post.dateISO} />
            <meta itemProp="author" content={AUTHOR} />
            <meta itemProp="description" content={post.excerpt} />
            <link itemProp="url" href={post.url} />

            {/* Category */}
            <span className="inline-flex items-center self-start gap-1.5 bg-[#F8F9FA]/5 text-[#34B27B] text-xs font-semibold px-3 py-1 rounded-full border border-[#34B27B]/20 mb-4">
                <FaTag className="text-[10px]" />
                <span itemProp="articleSection">{post.category}</span>
            </span>

            {/* Icon + title */}
            <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#34B27B]/20 rounded-lg flex items-center justify-center text-[#34B27B] text-base group-hover:scale-110 transition-transform duration-300">
                    {post.icon}
                </div>
                <h3
                    itemProp="headline"
                    className="font-bold text-[#F8F9FA] leading-snug group-hover:text-[#34B27B] transition-colors duration-300"
                >
                    {post.title}
                </h3>
            </div>

            <p className="text-sm text-[#F8F9FA]/65 leading-relaxed flex-1 mb-4">
                {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
                {post.tags.map((t) => (
                    <span
                        key={t}
                        className="text-xs bg-[#F8F9FA]/5 text-[#F8F9FA]/40 border border-[#F8F9FA]/10 px-2 py-0.5 rounded-full"
                    >
                        #{t}
                    </span>
                ))}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-[#F8F9FA]/45 pt-4 border-t border-[#F8F9FA]/10">
                <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#34B27B]/60" />
                    <time dateTime={post.dateISO}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </time>
                </span>
                <span className="flex items-center gap-1.5">
                    <FaClock className="text-[#34B27B]/60" />
                    {post.readTime} min
                </span>
            </div>
        </article>
    );
}

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
function Blog() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(`https://dev.to/api/articles?username=${DEV_TO_USERNAME}`);
                if (!res.ok) throw new Error("Failed to fetch posts from dev.to");
                const data = await res.json();
                
                const formattedPosts = data.map((post) => {
                    const primaryTag = post.tag_list && post.tag_list.length > 0 ? post.tag_list[0] : "General";
                    return {
                        id: post.id,
                        slug: post.slug,
                        title: post.title,
                        excerpt: post.description || "",
                        url: post.url,
                        category: primaryTag.charAt(0).toUpperCase() + primaryTag.slice(1),
                        tags: post.tag_list || [],
                        readTime: post.reading_time_minutes,
                        date: post.published_at,
                        dateISO: post.published_at,
                        featured: post.positive_reactions_count > 10,
                        icon: <FaLaptopCode />, 
                    };
                });

                setPosts(formattedPosts);
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, []);

    const categories = useMemo(() => {
        const cats = new Set(posts.map((p) => p.category));
        return ["All", ...Array.from(cats)].slice(0, 6);
    }, [posts]);

    const filtered = useMemo(() => {
        return posts.filter((p) => {
            const matchCat =
                activeCategory === "All" || p.category === activeCategory;
            const q = query.toLowerCase();
            const matchQuery =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q));
            return matchCat && matchQuery;
        });
    }, [posts, activeCategory, query]);

    const featured = filtered.filter((p) => p.featured);
    const rest = filtered.filter((p) => !p.featured);

    const listSchema = buildListSchema(posts);

    return (
        <>
            {/* ── SEO HEAD ───────────────────────────────── */}
            <Helmet>
                <title>Blog — Nimesh Dilhara | Software Engineering & AI Insights</title>
                <meta
                    name="description"
                    content="Articles on full-stack development, AI/ML, React, Next.js, .NET, and UI/UX design by Nimesh Dilhara Kulasooriya — BSc Software Engineering undergraduate."
                />
                <meta
                    name="keywords"
                    content="software engineering blog, React blog, Next.js tutorial, AI development, full stack developer Sri Lanka, .NET performance, UX design tips"
                />
                <meta name="author" content={AUTHOR} />
                <link rel="canonical" href={`${SITE_URL}/blog`} />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}/blog`} />
                <meta
                    property="og:title"
                    content="Blog — Nimesh Dilhara | Software Engineering & AI"
                />
                <meta
                    property="og:description"
                    content="Articles on full-stack development, AI/ML, React, Next.js, and UI/UX by Nimesh Dilhara."
                />
                <meta property="og:site_name" content="Nimesh Dilhara" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Blog — Nimesh Dilhara | Software Engineering & AI"
                />
                <meta
                    name="twitter:description"
                    content="Articles on full-stack development, AI/ML, React, Next.js, and UI/UX by Nimesh Dilhara."
                />



                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(listSchema)}
                </script>
            </Helmet>

            {/* ── PAGE BODY ──────────────────────────────── */}
            <section
                id="blog"
                aria-label="Blog"
                className="py-20 md:py-28 bg-gradient-to-br from-[#11181C] via-[#11181C] to-black relative overflow-hidden"
            >
                {/* Background blobs — same pattern as About */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#11181C] via-black to-[#11181C] opacity-80" />
                    <div className="hidden lg:block absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-bl from-[#34B27B]/10 to-transparent blur-[100px]" />
                    <div className="hidden lg:block absolute bottom-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#34B27B]/10 to-transparent blur-[120px]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#11181C]/40 to-[#11181C] z-10" />
                </div>

                <div className="container mx-auto px-4 relative z-20">



                    <div className="max-w-7xl mx-auto">

                        {/* ── SEARCH + FILTERS ───────────────────── */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10 flex-wrap">
                            {/* Category pills */}
                            <nav aria-label="Filter by category" className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <CategoryPill
                                        key={cat}
                                        label={cat}
                                        active={activeCategory === cat}
                                        onClick={() => setActiveCategory(cat)}
                                    />
                                ))}
                            </nav>

                            {/* Search */}
                            <div className="relative w-full sm:w-64">
                                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#F8F9FA]/30 text-sm pointer-events-none" />
                                <input
                                    type="search"
                                    placeholder="Search articles…"
                                    aria-label="Search blog articles"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-[#11181C]/80 border border-[#F8F9FA]/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#F8F9FA] placeholder-[#F8F9FA]/30 focus:outline-none focus:border-[#34B27B]/60 focus:ring-1 focus:ring-[#34B27B]/30 transition-all duration-200"
                                />
                            </div>
                        </div>

                        {/* ── EMPTY STATE / LOADING ─────────────────────────── */}
                        {isLoading ? (
                            <div className="text-center py-20 flex flex-col items-center">
                                <div className="w-10 h-10 border-4 border-[#34B27B]/20 border-t-[#34B27B] rounded-full animate-spin mb-6" />
                                <p className="text-[#F8F9FA]/60 text-lg">Fetching articles from dev.to...</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-20">
                                <p className="text-red-400 text-lg mb-4">Error: {error}</p>
                                <button
                                    onClick={() => window.location.reload()}
                                    className="text-[#34B27B] text-sm underline hover:text-[#34B27B]/80 transition-colors"
                                >
                                    Try again
                                </button>
                            </div>
                        ) : filtered.length === 0 && (
                            <div className="text-center py-20">
                                <div className="text-5xl mb-4">🔍</div>
                                <p className="text-[#F8F9FA]/60 text-lg">
                                    No articles match <strong className="text-[#F8F9FA]">"{query}"</strong>.
                                </p>
                                <button
                                    onClick={() => { setQuery(""); setActiveCategory("All"); }}
                                    className="mt-4 text-[#34B27B] text-sm underline underline-offset-4 hover:text-[#34B27B]/80 transition-colors"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}

                        {/* ── FEATURED POSTS ──────────────────────── */}
                        {featured.length > 0 && (
                            <div className="mb-14">
                                <h2 className="text-sm font-bold text-[#34B27B] uppercase tracking-widest mb-5 flex items-center gap-2">
                                    <FaFire /> Featured
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {featured.map((p) => (
                                        <FeaturedCard key={p.id} post={p} />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── ALL / FILTERED POSTS ────────────────── */}
                        {rest.length > 0 && (
                            <div>
                                <h2 className="text-sm font-bold text-[#F8F9FA]/50 uppercase tracking-widest mb-5">
                                    {activeCategory === "All" ? "All Articles" : activeCategory}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {rest.map((p) => (
                                        <PostCard key={p.id} post={p} />
                                    ))}
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;