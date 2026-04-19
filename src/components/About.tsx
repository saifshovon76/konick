export default function About() {
  return (
    <section className="bg-bg-secondary">
      <div className="max-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="content-wrapper order-2 md:order-1">
          <h2 className="font-bold mb-6 text-white leading-tight">
            Refining the <br /> 
            <span className="text-accent italic-serif">Neural Dialogue</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            As a specialized architect of linguistic intent, I serve as a bridge between human creativity and algorithmic precision. 
            My methodology revolves around the optimization of latent space interactions, ensuring that every token deployed 
            unlocks maximum utility from advanced neural architectures.
          </p>
          <div className="flex gap-4">
            <div className="px-8 py-3 bg-accent/10 border border-accent/20 rounded-full text-xs font-mono tracking-widest text-accent uppercase hover:bg-accent hover:text-white transition-all duration-500">
              Technical Manifesto
            </div>
          </div>
        </div>

        <div className="content-wrapper order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-all duration-500" />
            <img 
              src="/assets/images/img2.webp" 
              alt="About Konick" 
              className="relative w-full max-w-[300px] md:max-w-[400px] aspect-[3/4] object-cover rounded-[40px] shadow-2xl transition-all duration-700 -rotate-2 opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
