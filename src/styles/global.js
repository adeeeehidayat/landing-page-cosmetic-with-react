const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream:   #f5f0e8;
    --sand:    #e8ddd0;
    --bark:    #c4a882;
    --earth:   #8b6e52;
    --deep:    #3d2b1f;
    --ink:     #1a1210;
    --white:   #fdfaf6;
    --accent:  #c17f5a;
    --green:   #6b7c5a;
    --font-disp: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'DM Sans', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--white);
    color: var(--ink);
    font-family: var(--font-body);
    font-weight: 300;
    overflow-x: hidden;
  }

  ::selection { background: var(--bark); color: var(--white); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  .animate-fade-up  { animation: fadeUp 0.8s ease forwards; }
  .animate-fade-in  { animation: fadeIn 0.6s ease forwards; }
  .animate-float    { animation: float 4s ease-in-out infinite; }

  .delay-1 { animation-delay: 0.15s; }
  .delay-2 { animation-delay: 0.30s; }
  .delay-3 { animation-delay: 0.45s; }
  .delay-4 { animation-delay: 0.60s; }

  .invisible { opacity: 0; }
`;

export default globalStyles;
