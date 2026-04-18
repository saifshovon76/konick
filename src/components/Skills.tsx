const expertise = [
  { 
    name: 'LLM Optimization', 
    level: '95%', 
    icon: 'fa-brain',
    desc: 'Advanced prompt engineering & hyperparameter tuning for specialized agentic workflows.',
    tags: ['GPT-4o', 'Claude 3.5', 'Gemini 1.5'],
    size: 'large'
  },
  {
    type: 'image',
    src: 'https://picsum.photos/seed/konick-skill-visual/800/800',
    size: 'medium'
  },
  { 
    name: 'Context Architecture', 
    level: '92%', 
    icon: 'fa-layer-group',
    desc: 'Designing semantic boundaries and multi-layered RAG systems.',
    tags: ['Vector DBs', 'Embeddings'],
    size: 'medium'
  },
  { 
    name: 'Natural Language Processing', 
    level: '90%', 
    icon: 'fa-microchip',
    desc: 'Deep linguistic analysis for token efficiency.',
    tags: ['Tokenization', 'Syntax'],
    size: 'small'
  },
  { 
    name: 'Semantic Engineering', 
    level: '85%', 
    icon: 'fa-code',
    desc: 'Hardening prompt logic against injection and semantic drift.',
    tags: ['Security', 'Validation'],
    size: 'small'
  },
  { 
    name: 'Recursive Prompting', 
    level: '88%', 
    icon: 'fa-rotate-right',
    desc: 'Building self-correcting AI loops for complex task orchestration.',
    tags: ['Logic', 'State'],
    size: 'medium'
  },
  { 
    name: 'AI Safety & Alignment', 
    level: '80%', 
    icon: 'fa-shield-halved',
    desc: 'Ensuring model outputs remain within ethical and brand parameters.',
    tags: ['Ethics', 'Bias'],
    size: 'small'
  },
];

export default function Skills() {
  return (
    <section className="bg-bg-primary overflow-hidden min-h-screen flex items-center py-32">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://picsum.photos/seed/konick-skills/1200/800" 
          alt="Skills Background" 
          className="w-full h-full object-cover blur-3xl scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-container relative z-10 w-full">
        <div className="content-wrapper mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-accent text-xs uppercase tracking-[0.3em] mb-4 block">Capabilities Matrix</span>
              <h2 className="font-bold mb-6">Core <span className="italic-serif text-accent">Expertise</span></h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Interfacing with neural architectures through high-precision linguistic manipulation. 
                Optimizing for context density and logical coherence.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="font-mono text-[10px] text-white/20 uppercase leading-loose border-l border-white/5 pl-6">
                Status: Operational<br/>
                Latency: 24ms<br/>
                Efficiency: 0.982
              </div>
            </div>
          </div>
        </div>

        <div className="content-wrapper grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[260px]">
          {expertise.map((skill: any, index) => (
            <div 
              key={index} 
              className={`
                bg-white/[0.03] backdrop-blur-xl rounded-[32px] border border-white/10 
                hover:border-accent/50 hover:bg-white/[0.05] transition-all duration-500 
                group relative overflow-hidden flex flex-col justify-between
                ${skill.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${skill.size === 'medium' ? 'md:col-span-2 md:row-span-1' : ''}
                ${skill.type === 'image' ? 'p-0' : 'p-6 md:p-8'}
              `}
            >
              {skill.type === 'image' ? (
                <img 
                  src={skill.src} 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  alt="Skill Visualization"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <i className={`fa-solid ${skill.icon} text-xl`}></i>
                      </div>
                      <span className="font-mono text-[11px] text-accent/60 uppercase tracking-widest font-bold">{skill.level}</span>
                    </div>
                    
                    <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-accent transition-colors leading-tight">{skill.name}</h3>
                    {skill.desc && (
                      <p className="text-text-secondary text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-all">
                        {skill.desc}
                      </p>
                    )}

                    <div className="mt-auto flex flex-wrap gap-2">
                      {skill.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] font-mono uppercase tracking-wider bg-accent/5 px-3 py-1.5 rounded-lg text-accent/80 border border-accent/10 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Background Element */}
                  <div className="absolute -right-8 -bottom-8 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-1000 pointer-events-none">
                    <i className={`fa-solid ${skill.icon} text-[180px]`}></i>
                  </div>
                </>
              )}
              
              {/* Technical Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
