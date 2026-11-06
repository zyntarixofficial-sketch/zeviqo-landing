"use client";

import React from "react";
import { 
  Download, 
  Sparkles, 
  BookOpen, 
  Brain, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HelpCircle, 
  FileText 
} from "lucide-react";

export default function LandingPage() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=in.zeviqo.app";
  const webAppUrl = "https://zeviqo-app.vercel.app";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* 1. Header */}
      <header className="w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/20 text-white">
              Z
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Zeviqo</span>
          </div>

          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-indigo-600/30 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Install App</span>
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 pt-16 pb-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-700/40 text-indigo-300 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI Flashcards, Quiz Maker & Study Notes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.15] text-white">
            Smartest AI App for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-200">
              Flashcards, Quizzes & Exam Revision
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Upload notes or PDFs. Zeviqo AI automatically builds active recall flashcards, generates test-ready quizzes, and solves academic doubts in seconds.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-slate-100 font-bold px-7 py-3.5 rounded-2xl transition duration-200 shadow-xl shadow-white/10 active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.913V2.727c.15-.36.368-.677.61-.913zm11.305 11.308l2.25 2.25-11.44 6.604 9.19-8.854zm0-2.244L5.724 2.024l11.44 6.604-2.25 2.25zm1.59 1.59l3.398 1.963c1.077.622 1.077 1.634 0 2.256l-3.398 1.963-2.122-2.122 2.122-2.06z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-semibold text-slate-600 leading-none">Download on</div>
                <div className="text-base font-extrabold leading-tight">Google Play</div>
              </div>
            </a>

            <a
              href={webAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium px-6 py-3.5 rounded-2xl transition duration-200 active:scale-95"
            >
              <span>Open in Web</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Lightweight 1.28 MB • Fast Native Performance • Free Study Access</span>
          </div>
        </section>

        {/* 3. Core Services & Features Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16 border-t border-slate-900">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">What You Can Do in Zeviqo</h2>
            <p className="text-slate-400 text-sm mt-2">Everything you need to master your syllabus in one place</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Smart Flashcards</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Automatically convert complex chapters and formulas into bite-sized revision cards with spaced repetition.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Interactive Quizzes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Test your knowledge with auto-generated multiple-choice questions (MCQs) and instant score evaluations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PDF & Notes Extraction</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Upload college slides, textbook chapters, or handwritten notes to get concise bullet-point summaries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Doubt Solver</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Stuck on a tricky math problem or theory? Chat directly with the AI study assistant 24/7 for clear solutions.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Founder Section */}
        <section className="max-w-4xl mx-auto px-4 py-16 border-t border-slate-900">
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-indigo-300 p-[2px] shadow-xl shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/founder.jpg"
                    alt="Mahabul Alam Molla"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.parentElement) {
                        e.currentTarget.parentElement.innerText = "MAM";
                        e.currentTarget.parentElement.className =
                          "w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center font-black text-2xl text-indigo-400";
                      }
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-indigo-400/30 whitespace-nowrap">
                Founder
              </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 mb-3 tracking-wide">
                “Learn Smarter. Revise Faster. Ace Every Exam.”
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Mahabul Alam Molla
              </h3>
              <p className="text-sm text-indigo-400 font-medium mb-4">
                Founder & Creator, Zeviqo
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                "Zeviqo was created with a single vision: to ensure that no student struggles with lengthy revision or difficult concepts. By combining artificial intelligence with active recall flashcards and automated quizzes, our mission is to empower every learner to prepare smarter and excel in exams."
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950 py-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 Zeviqo Education. Built & Owned by Mahabul Alam Molla.</div>

          <div className="flex items-center gap-6">
            <a
              href="https://zeviqo-app.vercel.app/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://zeviqo-app.vercel.app/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
