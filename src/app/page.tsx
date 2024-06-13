export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat p-4 sm:p-6" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://cdn.resonance.rest/bg.png')" }}>
      <img src="https://cdn.resonance.rest/logo.png" width="200" height="200" alt="Logo" />
      <h1 className="mt-4 text-zinc-50 text-2xl sm:text-3xl">resonance.rest</h1>
      <p className="mt-2 text-center text-zinc-400 max-w-xs sm:max-w-md">
        Discover a range of innovative tools designed to enhance your experience with Wuthering Waves. Our projects are open-source, fostering collaboration and community-driven development.
      </p>
      <ul className="mt-4 text-zinc-300 text-center text-lg">
        <li className="mt-2">
          <a href="https://t.me/wutheringwavesleaksnews" className="hover:text-zinc-400 transition-colors duration-300 inline-flex items-center" target="_blank">
            Wuthering Waves leaks/news Telegram channel
          </a>
        </li>
        <li className="mt-2">
          <a href="https://github.com/resonance-rest" className="hover:text-zinc-400 transition-colors duration-300 inline-flex items-center" target="_blank">
            GitHub organization with various tools
          </a>
        </li>
        <li className="mt-2">
          <a href="https://api.resonance.rest/" className="hover:text-zinc-400 transition-colors duration-300 inline-flex items-center" target="_blank">
            Rest API for Wuthering Waves
          </a>
        </li>
      </ul>
    </main>
  );
}
