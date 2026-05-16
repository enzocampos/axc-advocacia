// landing.jsx — AXC Advocacia · Landing page

// ─────────────────────────────────────────────────────────────
// Design tokens — fixos
// ─────────────────────────────────────────────────────────────
const k = {
  bg:         '#0E0B07',
  bg2:        '#14110C',
  surface:    '#1A1611',
  surfaceHi:  '#221D16',
  text:       '#F5EFE2',
  textDim:    'rgba(245,239,226,0.66)',
  textMute:   'rgba(245,239,226,0.40)',
  line:       'rgba(245,239,226,0.10)',
  lineHi:     'rgba(245,239,226,0.20)',
  accent:     '#C9A24A',
  accentSoft: 'rgba(201,162,74,0.18)',
  accentGlow: 'rgba(201,162,74,0.35)',
  fontDisplay: '"Cormorant Garamond", "EB Garamond", Georgia, serif',
  fontBody:    '"Inter", system-ui, sans-serif',
  fontMono:    '"JetBrains Mono", ui-monospace, "SF Mono", monospace',
  heroSerif:  true,
  sectionPy:  80,
  blockGap:   14,
  cardPad:    22,
  h2:         44,
  h2m:        32,
};

// ─────────────────────────────────────────────────────────────
// Conteúdo — fixo
// ─────────────────────────────────────────────────────────────
const hl = {
  eyebrow: 'Inventário travado',
  title:   ['Seu inventário', 'está parado há anos?', null],
  sub:     '',
};

const ctaTxt   = 'Falar com o advogado no WhatsApp';
const ctaShort = 'Falar no WhatsApp';
const waUrl    = 'https://wa.me/5519991949837?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20meu%20invent%C3%A1rio';

const numbers = [
  { n: '15+',       l: 'Anos de atuação em direito sucessório' },
  { n: 'Centenas',  l: 'De famílias atendidas em inventário e partilha' },
  { n: 'Consistente', l: 'Histórico de resultados favoráveis aos clientes' },
];

const PAIN_ITEMS = [
  'Aquela sensação de que o processo "está lá", mas nunca sai do lugar.',
  'Não poder vender ou alugar o imóvel porque ainda está no nome de quem faleceu.',
  'A papelada que se acumula e ninguém explica direito o que falta.',
  'O dinheiro parado, os impostos correndo, e a conta só crescendo.',
  'O clima pesado na família, com cada um cobrando uma resposta.',
  'A dúvida se você está sendo bem orientado — ou só empurrado com a barriga.',
];

const BENEFITS = [
  { k: 'Andamento real',     v: 'Seu inventário volta a andar — alguém puxando o processo, não esperando ele se resolver sozinho.' },
  { k: 'Sem juridiquês',     v: 'Você entende cada passo. Explicações em português claro, do início ao fim.' },
  { k: 'Imóvel liberado',    v: 'Pra vender, alugar ou transferir pro nome de quem é de direito.' },
  { k: 'Menos atrito',       v: 'Um profissional neutro conduzindo evita que a partilha vire briga de família.' },
  { k: 'Atendimento direto', v: 'Você fala com o Dr. Anderson. Não com um estagiário, não com um chatbot.' },
  { k: 'Condução ativa',     v: 'Etapa por etapa, com prazo monitorado. Não dá pra prometer rapidez — dá pra prometer que não vai ficar esquecido.' },
];

const OBJECTIONS = [
  { q: '"Advogado é caro."',
    a: 'A primeira conversa é gratuita — é nela que você entende os valores e as condições antes de decidir qualquer coisa. Inventário parado também custa: imposto correndo, imóvel parado, dinheiro travado. Sair do lugar costuma sair mais barato que ficar.' },
  { q: '"Isso vai demorar anos."',
    a: 'Inventário demora quando ninguém conduz. A AXC trabalha exatamente o contrário: condução ativa, etapa por etapa. Não dá pra prometer prazo sem ver seu caso — mas dá pra prometer que ele não vai ficar esquecido numa gaveta.' },
  { q: '"Não posso agora."',
    a: 'A conversa inicial não te compromete com nada nem com nenhum prazo. E quanto mais o inventário fica parado, mais a burocracia se acumula. Entender sua situação hoje não custa nada — e te dá clareza pra decidir o melhor momento.' },
];

const FAQS = [
  { q: 'Meu inventário já começou com outro advogado e travou. Dá pra assumir?',
    a: 'Sim. O escritório pode assumir casos já iniciados, avaliar o que falta e retomar a condução.' },
  { q: 'Preciso ir até Louveira?',
    a: 'Não necessariamente. O atendimento pode ser presencial em Louveira/SP ou online, o que for melhor pra você.' },
  { q: 'Quanto custa?',
    a: 'A primeira conversa é gratuita. Os valores e condições do caso são apresentados com clareza nessa conversa, antes de qualquer decisão.' },
  { q: 'Quanto tempo demora um inventário?',
    a: 'Depende da situação de cada caso — número de herdeiros, bens envolvidos, documentação. Na conversa inicial, o Dr. Anderson te dá uma noção realista do seu cenário.' },
  { q: 'A família toda precisa concordar pra começar?',
    a: 'Nem sempre, e isso é parte da orientação. Mesmo em casos com desacordo entre herdeiros, há caminhos — e o advogado te explica quais.' },
  { q: 'E se eu só quiser tirar dúvidas e não seguir agora?',
    a: 'Tudo bem. A conversa inicial é sem compromisso. Você sai dela com clareza, e decide o momento que fizer sentido.' },
  { q: 'Como funciona o atendimento depois?',
    a: 'Direto com o Dr. Anderson. Você não é repassado pra estagiário — quem conduz seu caso é o advogado.' },
];

const TESTIMONIALS = [
  { idx: '01',
    quote: '[ Depoimento real a inserir: herdeiro com inventário que estava travado há anos e foi resolvido. ]',
    name: '[ Nome do cliente ]', meta: '[ Cidade · Caso de inventário ]' },
  { idx: '02',
    quote: '[ Depoimento real a inserir: cliente que destaca o atendimento direto com o advogado e a clareza das explicações. ]',
    name: '[ Nome do cliente ]', meta: '[ Cidade · Atendimento online ]' },
  { idx: '03',
    quote: '[ Depoimento real a inserir: família que conseguiu liberar e vender o imóvel após a partilha. ]',
    name: '[ Nome do cliente ]', meta: '[ Cidade · Imóvel liberado ]' },
];

// ─────────────────────────────────────────────────────────────
// Primitivos
// ─────────────────────────────────────────────────────────────
function MonoLabel({ children, color, style }) {
  return (
    <span style={{
      fontFamily: '"JetBrains Mono", ui-monospace, monospace',
      fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: color || 'currentColor',
      ...style,
    }}>{children}</span>
  );
}

function SectionNumber({ x, total = '06' }) {
  return (
    <div style={{
      fontFamily: '"JetBrains Mono", ui-monospace, monospace', fontSize: 11,
      letterSpacing: '0.2em', color: k.textMute,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <span style={{ color: k.accent }}>{String(x).padStart(2, '0')}</span>
      <span style={{ width: 28, height: 1, background: k.line }} />
      <span>de {total}</span>
    </div>
  );
}

function GoldButton({ children, size = 'md', secondary = false, fullWidth = false, style, href }) {
  const padY = size === 'lg' ? 22 : 18;
  const padX = size === 'lg' ? 36 : 30;
  const fs   = size === 'lg' ? 16 : 14;
  if (secondary) {
    return (
      <a href={href || '#'} style={{
        display: 'inline-flex', alignItems: 'center', gap: 12,
        padding: `${padY}px ${padX}px`,
        background: 'transparent', border: `1px solid ${k.lineHi}`,
        color: k.text, textDecoration: 'none',
        fontFamily: k.fontBody, fontSize: fs, fontWeight: 500,
        letterSpacing: '0.02em',
        width: fullWidth ? '100%' : 'auto', justifyContent: 'center',
        ...style,
      }}>{children}</a>
    );
  }
  return (
    <a href={href || waUrl} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 14,
      padding: `${padY}px ${padX}px`,
      background: k.accent, color: '#13100B',
      textDecoration: 'none',
      fontFamily: k.fontBody, fontSize: fs, fontWeight: 600,
      letterSpacing: '0.01em',
      boxShadow: `0 1px 0 rgba(255,255,255,0.25) inset, 0 -1px 0 rgba(0,0,0,0.15) inset, 0 8px 32px ${k.accentGlow}`,
      width: fullWidth ? '100%' : 'auto', justifyContent: 'center',
      ...style,
    }}>
      <span>{children}</span>
      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
        <path d="M1 7h15M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function PhotoPlaceholder({ label, width, height, ratio, style }) {
  return (
    <div style={{
      width: width || '100%', height: height || undefined, aspectRatio: ratio,
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, ${k.surfaceHi} 0%, ${k.surface} 100%)`,
      border: `1px solid ${k.line}`, ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 22px, ${k.line} 22px 23px)`,
        opacity: 0.6,
      }} />
      {['tl','tr','bl','br'].map(c => {
        const v = c.startsWith('t') ? { top: 12 } : { bottom: 12 };
        const h = c.endsWith('l')   ? { left: 12 } : { right: 12 };
        return (
          <React.Fragment key={c}>
            <div style={{ position:'absolute', width: 14, height: 1, background: k.accent, ...v, ...h }} />
            <div style={{ position:'absolute', width: 1, height: 14, background: k.accent, ...v, ...h }} />
          </React.Fragment>
        );
      })}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: 24,
      }}>
        <div style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: k.textMute, textAlign: 'center', lineHeight: 1.7,
        }}>{label}</div>
      </div>
    </div>
  );
}

function Wordmark({ size = 'md' }) {
  const h = size === 'lg' ? 56 : size === 'md' ? 44 : 34;
  return (
    <img
      src="uploads/Logo_AXCAdvocacia.png"
      alt="AXC Advocacia"
      style={{ height: h, width: 'auto', display: 'block' }}
    />
  );
}

function FAQItem({ q, a, idx }) {
  const [open, setOpen] = React.useState(idx === 0);
  return (
    <div style={{ borderTop: `1px solid ${k.line}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '24px 0',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: k.text, textAlign: 'left',
          display: 'flex', alignItems: 'flex-start', gap: 24,
          fontFamily: k.fontDisplay,
        }}
      >
        <span style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontSize: 11, color: k.accent, letterSpacing: '0.15em', paddingTop: 8, minWidth: 24,
        }}>{String(idx + 1).padStart(2, '0')}</span>
        <span style={{ flex: 1, fontSize: 22, lineHeight: 1.35, fontWeight: 500 }}>{q}</span>
        <span style={{
          width: 32, height: 32, flexShrink: 0,
          border: `1px solid ${k.lineHi}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: k.accent, transition: 'transform .3s',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && (
        <div style={{
          paddingLeft: 48, paddingRight: 56, paddingBottom: 28,
          color: k.textDim, fontFamily: k.fontBody, fontSize: 16, lineHeight: 1.7,
        }}>{a}</div>
      )}
    </div>
  );
}

function MidCTA({ eyebrow, title, ctaText, secondary, variant = 'split' }) {
  if (variant === 'band') {
    return (
      <section style={{
        padding: '80px 0', position: 'relative', overflow: 'hidden',
        background: k.surface, borderTop: `1px solid ${k.line}`, borderBottom: `1px solid ${k.line}`,
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse at 80% 50%, ${k.accentSoft}, transparent 55%)`,
        }} />
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 64px', position: 'relative',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'center',
        }}>
          <div>
            {eyebrow && <MonoLabel color={k.accent}>{eyebrow}</MonoLabel>}
            <h3 style={{
              fontFamily: k.fontDisplay, fontSize: 42, fontWeight: 500, lineHeight: 1.08,
              letterSpacing: '-0.015em', margin: '20px 0 0', color: k.text, textWrap: 'balance',
            }}>{title}</h3>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <GoldButton size="lg">{ctaText}</GoldButton>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section style={{ padding: '72px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        {eyebrow && <MonoLabel color={k.accent}>{eyebrow}</MonoLabel>}
        <h3 style={{
          fontFamily: k.fontDisplay, fontSize: 38, fontWeight: 500, lineHeight: 1.1,
          letterSpacing: '-0.01em', margin: '20px 0 28px', color: k.text, textWrap: 'balance',
        }}>{title}</h3>
        <GoldButton size="lg">{ctaText}</GoldButton>
        {secondary && (
          <div style={{
            marginTop: 18, fontFamily: k.fontMono, fontSize: 11,
            color: k.textMute, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>{secondary}</div>
        )}
      </div>
    </section>
  );
}

function MidCTAMobile({ eyebrow, title, ctaText, secondary }) {
  return (
    <section style={{ padding: '48px 0', textAlign: 'center', background: k.surface, borderTop: `1px solid ${k.line}`, borderBottom: `1px solid ${k.line}` }}>
      <div style={{ padding: '0 22px' }}>
        {eyebrow && <MonoLabel color={k.accent} style={{ fontSize: 10 }}>{eyebrow}</MonoLabel>}
        <h3 style={{
          fontFamily: k.fontDisplay, fontSize: 26, fontWeight: 500, lineHeight: 1.15,
          letterSpacing: '-0.01em', margin: '16px 0 24px', color: k.text,
        }}>{title}</h3>
        <GoldButton fullWidth size="lg">{ctaText}</GoldButton>
        {secondary && (
          <div style={{
            marginTop: 14, fontFamily: k.fontMono, fontSize: 9,
            color: k.textMute, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>{secondary}</div>
        )}
      </div>
    </section>
  );
}

function IGPostPlaceholder({ idx, caption, kind = 'carousel' }) {
  return (
    <div style={{
      position: 'relative', aspectRatio: '1 / 1', overflow: 'hidden',
      background: `linear-gradient(135deg, ${k.surfaceHi} 0%, ${k.surface} 100%)`,
      border: `1px solid ${k.line}`,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 22px, ${k.line} 22px 23px)`,
        opacity: 0.6,
      }} />
      {['tl','tr','bl','br'].map(c => {
        const v = c.startsWith('t') ? { top: 10 } : { bottom: 10 };
        const h = c.endsWith('l')   ? { left: 10 } : { right: 10 };
        return (
          <React.Fragment key={c}>
            <div style={{ position:'absolute', width: 12, height: 1, background: k.accent, ...v, ...h }} />
            <div style={{ position:'absolute', width: 1, height: 12, background: k.accent, ...v, ...h }} />
          </React.Fragment>
        );
      })}
      <div style={{ position: 'absolute', top: 12, right: 12, color: k.text, opacity: 0.85 }}>
        {kind === 'carousel' && (
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="6" y="2" width="14" height="14" rx="2" />
            <rect x="2" y="6" width="14" height="14" rx="2" fill={k.bg} />
          </svg>
        )}
        {kind === 'reel' && (
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="2" width="18" height="18" rx="4" />
            <path d="M9 7l6 4-6 4V7z" fill="currentColor" />
          </svg>
        )}
        {kind === 'post' && (
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="2" width="18" height="18" rx="4" />
            <circle cx="11" cy="11" r="4" />
          </svg>
        )}
      </div>
      <div style={{
        position: 'absolute', inset: 0, padding: 20,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: k.fontMono, fontSize: 10, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: k.accent,
        }}>{idx}</span>
        <div style={{
          fontFamily: k.fontDisplay, fontSize: 17, lineHeight: 1.3,
          color: k.text, fontWeight: 500, textWrap: 'pretty',
        }}>{caption}</div>
      </div>
    </div>
  );
}

const IG_POSTS = [
  { idx: '01', kind: 'carousel', caption: 'O que é inventário e quando ele é obrigatório',   meta: '· 1.2k curtidas · 84 comentários' },
  { idx: '02', kind: 'reel',     caption: 'Quanto custa não fazer o inventário a tempo?',     meta: '· 4.7k visualizações' },
  { idx: '03', kind: 'post',     caption: 'Inventário judicial × extrajudicial',              meta: '· 980 curtidas · 32 comentários' },
  { idx: '04', kind: 'carousel', caption: 'O que é o ITCMD e por que ele corre contra você', meta: '· 1.5k curtidas · 56 comentários' },
  { idx: '05', kind: 'reel',     caption: '3 motivos pelos quais um inventário trava',        meta: '· 6.2k visualizações' },
  { idx: '06', kind: 'carousel', caption: 'Posso vender o imóvel antes da partilha?',         meta: '· 870 curtidas · 41 comentários' },
];

function IGMarquee({ cardWidth = 280, gap = 16, speed = 60, showMeta = true }) {
  const animName = 'ig-marquee-' + Math.round(cardWidth + gap);
  const trackPx  = IG_POSTS.length * (cardWidth + gap);
  const duration  = trackPx / speed;
  const renderSet = (keyPrefix) => IG_POSTS.map((p) => (
    <a key={keyPrefix + p.idx} href="#" aria-label={p.caption} style={{ flex: `0 0 ${cardWidth}px`, textDecoration: 'none' }}>
      <IGPostPlaceholder idx={p.idx} caption={p.caption} kind={p.kind} />
      {showMeta && (
        <div style={{
          marginTop: 10, fontFamily: k.fontMono, fontSize: 9,
          letterSpacing: '0.16em', color: k.textMute, textTransform: 'uppercase',
        }}>{p.meta}</div>
      )}
    </a>
  ));
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes ${animName} { 0% { transform: translateX(0); } 100% { transform: translateX(-${trackPx}px); } }
        .${animName}-track { display: flex; gap: ${gap}px; width: max-content; animation: ${animName} ${duration}s linear infinite; will-change: transform; }
        .${animName}:hover .${animName}-track { animation-play-state: paused; }
      `}</style>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 80, zIndex: 2, background: `linear-gradient(90deg, ${k.bg2} 0%, transparent 100%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 80, zIndex: 2, background: `linear-gradient(270deg, ${k.bg2} 0%, transparent 100%)`, pointerEvents: 'none' }} />
      <div className={animName}>
        <div className={animName + '-track'} style={{ paddingRight: gap }}>
          {renderSet('a-')}
          {renderSet('b-')}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// LandingPage
// ─────────────────────────────────────────────────────────────
function LandingPage({ mobile }) {
  return (
    <div style={{
      background: k.bg, color: k.text, fontFamily: k.fontBody,
      width: '100%', overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.5,
        backgroundImage: `radial-gradient(ellipse at 80% -10%, ${k.accentSoft}, transparent 50%), radial-gradient(ellipse at 0% 110%, rgba(120,80,40,0.10), transparent 40%)`,
      }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <LandingDesktop k={k} hl={hl} ctaTxt={ctaTxt} ctaShort={ctaShort} numbers={numbers} oab="soft" lean={true} mobile={mobile} />
      </div>
    </div>
  );
}

// exports para landing-desktop.jsx e landing-mobile.jsx
window.k            = k;
window.hl           = hl;
window.ctaTxt       = ctaTxt;
window.ctaShort     = ctaShort;
window.numbers      = numbers;
window.PAIN_ITEMS   = PAIN_ITEMS;
window.BENEFITS     = BENEFITS;
window.OBJECTIONS   = OBJECTIONS;
window.FAQS         = FAQS;
window.TESTIMONIALS = TESTIMONIALS;
window.IG_POSTS     = IG_POSTS;
window.MonoLabel        = MonoLabel;
window.SectionNumber    = SectionNumber;
window.GoldButton       = GoldButton;
window.PhotoPlaceholder = PhotoPlaceholder;
window.Wordmark         = Wordmark;
window.FAQItem          = FAQItem;
window.MidCTA           = MidCTA;
window.MidCTAMobile     = MidCTAMobile;
window.IGPostPlaceholder = IGPostPlaceholder;
window.IGMarquee        = IGMarquee;
window.LandingPage      = LandingPage;
