export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
      <h1 className="text-4xl font-bold sm:text-6xl">
        Shayan Khosh Keifi
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-400 sm:text-xl">
        Computer Science &amp; Electrical Engineering — building ML systems and embedded hardware.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        
        <a  href="https://github.com/ShayanKhoshkeifi"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-black transition hover:bg-cyan-400"
        >
          GitHub
        </a>

        
        <a  href="https://www.linkedin.com/in/shayan-khosh-keifi-ba1317231/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
        >
          LinkedIn
        </a>

        
        <a  href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
        >
          Resume
        </a>

        
        <a  href="mailto:shayan.khoshkeifi@gmail.com"
          className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
        >
          Email
        </a>
      </div>
    </section>
  );
}