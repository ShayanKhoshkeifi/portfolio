export default function About() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 py-20 text-white">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold sm:text-4xl">About</h2>

        <div className="mt-6 flex flex-col gap-6 text-lg leading-relaxed text-zinc-400">
          <p>
            I recently graduated from the University of California, Davis with a Bachelor of Science in Computer Science and a minor in Electrical Engineering. I&apos;m now continuing at UC Davis to pursue a Master of Science in Electrical &amp; Computer Engineering, beginning Fall 2026.
          </p>
          <p>
            My academic and professional background spans both hardware and software — from digital circuit design and embedded systems to machine learning and full-stack development. I&apos;m drawn to work that requires understanding a system from the ground up, whether that means the underlying hardware or the software running on top of it.
          </p>
          <p>
            I&apos;m currently exploring opportunities across embedded systems, hardware engineering, and software/ML engineering, and I&apos;m always open to connecting about roles where that combination of skills is valuable.
          </p>
        </div>
      </div>
    </section>
  );
}