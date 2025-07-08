import React from "react";

export default function InfinityMathLanding() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white font-sans">
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span className="text-teal-400">∞</span>
          <span>InfinityMath Academy</span>
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#services" className="hover:text-teal-400">Services</a>
          <a href="#about" className="hover:text-teal-400">About</a>
          <a href="#contact" className="hover:text-teal-400">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Boost Your Grades & Conquer Math
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          1-on-1, group classes & Olympiad prep with top-tier tutors — online or in-person. Serving Grades 7 to 12.
        </p>
        <div className="space-x-4">
          <a href="https://calendly.com/your-link" className="bg-teal-400 hover:bg-teal-300 text-black font-semibold py-2 px-4 rounded-lg">
            Book Free Trial
          </a>
          <a href="#packages" className="bg-white text-[#0F172A] hover:bg-gray-200 font-semibold py-2 px-4 rounded-lg">
            Explore Packages
          </a>
        </div>
      </main>

      <section id="services" className="px-6 py-10 bg-[#0F1E3C]">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Our Services</h2>
        <ul className="space-y-4 text-lg">
          <li>• Grade 7–12 Math Tutoring</li>
          <li>• Group Classes</li>
          <li>• Olympiad & Advanced Prep</li>
          <li>• Monthly Progress Reports</li>
        </ul>
      </section>

      <section id="about" className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">About Us</h2>
        <p className="max-w-3xl text-lg">
          InfinityMath Academy was founded to make math simple, powerful, and exciting. Our tutors are skilled in helping students master math from Grade 7 to 12 — whether you're catching up, boosting grades, or preparing for competitions.
        </p>
      </section>

      <section id="contact" className="px-6 py-10 bg-[#0F1E3C]">
        <h2 className="text-3xl font-bold mb-4 text-teal-400">Contact</h2>
        <p className="text-lg">Email: support@infinitymath.co.za</p>
        <p className="text-lg">WhatsApp: +27 61 234 5678</p>
        <p className="text-lg mt-2">
          Payments secured via <span className="font-semibold">PayFast</span>
        </p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-400">
        © 2025 InfinityMath Academy. All rights reserved.
      </footer>
    </div>
  );
}
