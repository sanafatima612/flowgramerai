"use client";
import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "AI Strategy",
    title: "Building a production-ready AI roadmap for 2026",
    excerpt:
      "A practical framework to evaluate opportunities, align stakeholders, and ship AI that delivers measurable business value.",
    date: "Jan 12, 2026",
    author: "FG",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    category: "Automation",
    title: "Automate workflows without breaking compliance",
    excerpt:
      "Design patterns to integrate AI automation while maintaining governance, auditability, and enterprise-grade reliability.",
    date: "Jan 08, 2026",
    author: "FG",
    gradient: "from-pink-400 to-red-500",
  },
  {
    id: 3,
    category: "Data",
    title: "Turn siloed data into intelligent copilots",
    excerpt:
      "Combine robust data engineering with modern AI to build assistants that understand your processes and KPIs.",
    date: "Jan 02, 2026",
    author: "FG",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    id: 4,
    category: "ML Ops",
    title: "Shipping AI faster with pragmatic ML Ops",
    excerpt:
      "From experiments to production: environments, observability, and iteration loops that keep your models improving.",
    date: "Dec 28, 2025",
    author: "FG",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    id: 5,
    category: "Product",
    title: "Designing AI experiences users trust",
    excerpt:
      "UX patterns for AI products: transparency, controllability, and graceful fallbacks when models are uncertain.",
    date: "Dec 20, 2025",
    author: "FG",
    gradient: "from-rose-400 to-amber-300",
  },
  {
    id: 6,
    category: "Cloud",
    title: "Cost-aware AI in the cloud",
    excerpt:
      "Architect AI workloads that balance performance and spend, with caching, batching, and tiered inference.",
    date: "Dec 15, 2025",
    author: "FG",
    gradient: "from-teal-400 to-indigo-900",
  },
];

export default function BlogPage() {
  return (
    <section className="relative min-h-screen py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/tkxel-hero-animation-cropped.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-down">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">
            Insights & Updates
          </h1>
          <p className="text-white/90 text-lg">
            Practical guides and ideas from our team on AI, automation, and product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition will-change-transform opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` as unknown as string }}
            >
              <div
                className={`h-48 bg-gradient-to-r ${post.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 -left-full bg-white/20 transition-all duration-500" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-500 to-purple-600">
                  {post.category}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-800 hover:text-indigo-600 transition">
                  {post.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold">
                      {post.author}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-700">
                        {post.author}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-indigo-600 font-semibold text-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
