export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/labubu-hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
      className="flex items-center justify-center"
    >
      <a
        href="https://jup.ag/swap?input=SOL&output=2ygXYFRC82ZjoEEWt5rfEHPVfEdKxWb747GjQSHgVzxi"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white px-6 py-3 rounded-full text-xl font-bold shadow-lg hover:bg-pink-400 transition-all animate-bounce"
        style={{ position: 'absolute', top: '160px', left: '60px' }}
      >
        🚀 Buy on Jupiter
      </a>
    </div>
  );
}
