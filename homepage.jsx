// homepage.jsx — página geral AXC Advocacia

function Homepage({ mobile: m }) {
  const [navOpen, setNavOpen] = React.useState(false);
  const wrap = m ? { padding: '0 22px' } : { maxWidth: 1280, margin: '0 auto', padding: '0 80px' };
  const waHref = 'https://wa.me/5519991949837?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os';

  const areas = [
    {
      slug: '/inventario',
      label: 'Inventário e Partilha',
      desc: 'Inventário travado? O Dr. Anderson conduz o processo do começo ao fim, com comunicação clara e condução ativa.',
      tags: ['Inventário judicial', 'Inventário extrajudicial', 'Partilha de bens', 'Sucessões'],
    },
    {
      slug: '/imobiliario',
      label: 'Direito Imobiliário',
      desc: 'Compra, venda, locação e regularização de imóveis. Assessoria jurídica completa em transações imobiliárias.',
      tags: ['Compra e venda', 'Contratos de locação', 'Regularização', 'Usucapião'],
    },
  ];

  return (
    <div style={{ background: k.bg, color: k.text, fontFamily: k.fontBody, minHeight: '100vh' }}>

      {/* NAV */}
      {m ? (
        <header style={{
          position: 'sticky', top: 0, zIndex: 30, padding: '14px 22px',
          background: 'rgba(14,11,7,0.95)', backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${k.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Wordmark size="sm" />
          <button onClick={() => setNavOpen(o => !o)} style={{
            background: 'transparent', border: `1px solid ${k.lineHi}`,
            width: 40, height: 40, color: k.text, display: 'flex',
            alignItems: 'center', justifyContent: 'center', padding: 0, cursor: 'pointer',
          }}>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              {navOpen
                ? <path d="M2 2l12 8M14 2L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                : <path d="M0 2h16M0 6h16M0 10h16" stroke="currentColor" strokeWidth="1.4" />}
            </svg>
          </button>
          {navOpen && (
            <div style={{
              position: 'fixed', top: 69, left: 0, right: 0, zIndex: 25,
              background: k.bg2, borderBottom: `1px solid ${k.line}`, padding: '20px 22px 24px',
            }}>
              {areas.map(a => (
                <a key={a.slug} href={a.slug} style={{
                  display: 'block', padding: '14px 0', color: k.text,
                  fontFamily: k.fontDisplay, fontSize: 22, textDecoration: 'none',
                  borderBottom: `1px solid ${k.line}`,
                }}>{a.label}</a>
              ))}
              <a href={waHref} target="_blank" rel="noopener noreferrer" style={{
                display: 'block', padding: '14px 0', color: k.accent,
                fontFamily: k.fontBody, fontSize: 14, fontWeight: 500, textDecoration: 'none',
                marginTop: 8,
              }}>Falar no WhatsApp →</a>
            </div>
          )}
        </header>
      ) : (
        <header style={{
          padding: '28px 0', borderBottom: `1px solid ${k.line}`,
          background: k.bg, position: 'sticky', top: 0, zIndex: 30,
        }}>
          <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Wordmark size="md" />
            <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
              {areas.map(a => (
                <a key={a.slug} href={a.slug} style={{
                  color: k.textDim, textDecoration: 'none', fontSize: 13,
                  letterSpacing: '0.02em', fontFamily: k.fontBody, fontWeight: 500,
                }}>{a.label}</a>
              ))}
            </nav>
            <a href={waHref} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 18px', border: `1px solid ${k.lineHi}`,
              color: k.text, textDecoration: 'none', fontSize: 13, fontWeight: 500,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: k.accent, boxShadow: `0 0 8px ${k.accent}` }} />
              Conversa inicial · grátis
            </a>
          </div>
        </header>
      )}

      {/* HERO */}
      <section style={{
        padding: m ? '56px 0 48px' : '96px 0 80px',
        borderBottom: `1px solid ${k.line}`,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse at 70% 50%, rgba(201,162,74,0.10), transparent 55%)`,
        }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 40 : 80, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: m ? 24 : 32 }}>
                <span style={{ width: 36, height: 1, background: k.accent }} />
                <span style={{ fontFamily: k.fontMono, fontSize: 10, color: k.accent, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Advocacia · Louveira / SP
                </span>
              </div>
              <h1 style={{
                fontFamily: k.fontDisplay, fontWeight: 500,
                fontSize: m ? 44 : 72, lineHeight: 1.02,
                letterSpacing: '-0.02em', margin: '0 0 24px', color: k.text,
              }}>
                Dr. Anderson Xavier <span style={{ color: k.accent, fontStyle: 'italic' }}>de Campos</span>
              </h1>
              <p style={{
                fontFamily: k.fontBody, fontSize: m ? 15 : 17, color: k.textDim,
                lineHeight: 1.65, margin: '0 0 36px', maxWidth: 480,
              }}>
                Advogado com mais de 15 anos de experiência em direito sucessório e imobiliário. Atendimento direto, sem intermediários.
              </p>
              <a href={waHref} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 14,
                padding: m ? '18px 28px' : '22px 36px',
                background: k.accent, color: '#13100B', textDecoration: 'none',
                fontFamily: k.fontBody, fontSize: m ? 14 : 16, fontWeight: 600,
                letterSpacing: '0.01em',
                boxShadow: `0 8px 32px rgba(201,162,74,0.35)`,
                width: m ? '100%' : 'auto', justifyContent: 'center',
              }}>
                <span>Falar com o advogado no WhatsApp</span>
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                  <path d="M1 7h15M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', aspectRatio: m ? '4/3' : '3/4' }}>
              <img src="/uploads/anderson.jpeg" alt="Dr. Anderson Xavier de Campos"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                padding: '40px 20px 16px',
                background: 'linear-gradient(transparent, rgba(14,11,7,0.85))',
                fontFamily: k.fontMono, fontSize: 9, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: k.textMute,
                display: 'flex', justifyContent: 'space-between',
              }}>
                <span>Dr. Anderson X. de Campos</span><span>OAB / SP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section style={{ padding: m ? '56px 0' : '96px 0', background: k.bg }}>
        <div style={wrap}>
          <div style={{ marginBottom: m ? 36 : 64 }}>
            <span style={{ fontFamily: k.fontMono, fontSize: 10, color: k.accent, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Áreas de atuação
            </span>
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: m ? 32 : 48, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 0', color: k.text,
            }}>
              Como posso <span style={{ color: k.accent, fontStyle: 'italic' }}>ajudar você</span>
            </h2>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr',
            gap: m ? 16 : 24,
          }}>
            {areas.map((a, i) => (
              <a key={i} href={a.slug} style={{
                display: 'block', textDecoration: 'none',
                padding: m ? 28 : 40, border: `1px solid ${k.line}`,
                background: k.surface, position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0, bottom: 0, width: 3,
                  background: k.accent, opacity: 0,
                }} />
                <span style={{
                  fontFamily: k.fontMono, fontSize: 10, color: k.accent,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>0{i + 1}</span>
                <h3 style={{
                  fontFamily: k.fontDisplay, fontSize: m ? 26 : 32, fontWeight: 500,
                  lineHeight: 1.1, margin: '16px 0 16px', color: k.text,
                }}>{a.label}</h3>
                <p style={{
                  fontFamily: k.fontBody, fontSize: m ? 13 : 15, color: k.textDim,
                  lineHeight: 1.65, margin: '0 0 24px',
                }}>{a.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {a.tags.map(t => (
                    <span key={t} style={{
                      fontFamily: k.fontMono, fontSize: 9, color: k.textMute,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      padding: '5px 10px', border: `1px solid ${k.line}`,
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  fontFamily: k.fontBody, fontSize: 13, fontWeight: 500, color: k.accent,
                }}>
                  <span>Saiba mais</span>
                  <svg width="12" height="10" viewBox="0 0 18 14" fill="none">
                    <path d="M1 7h15M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section style={{ padding: m ? '56px 0' : '96px 0', background: k.bg2, borderTop: `1px solid ${k.line}` }}>
        <div style={{ ...wrap }}>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 32 : 80, alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontFamily: k.fontMono, fontSize: 10, color: k.accent, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                O advogado
              </span>
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: m ? 32 : 44, fontWeight: 500,
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '20px 0 24px', color: k.text,
              }}>
                Atendimento direto, <span style={{ color: k.accent, fontStyle: 'italic' }}>sem intermediários</span>
              </h2>
              <div style={{ fontFamily: k.fontBody, fontSize: m ? 14 : 16, color: k.textDim, lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ margin: 0 }}>
                  Com mais de 15 anos dedicados ao direito sucessório e imobiliário, o Dr. Anderson Xavier de Campos conduz pessoalmente cada caso — do diagnóstico à conclusão.
                </p>
                <p style={{ margin: 0 }}>
                  Quando você fala com o escritório AXC, fala diretamente com o advogado. Sem estagiários, sem chatbots, sem enrolação.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: k.line }}>
              {[
                { n: '15+', l: 'Anos de experiência' },
                { n: 'Centenas', l: 'De famílias atendidas' },
                { n: 'SP', l: 'Louveira · atendimento online em todo Brasil' },
                { n: 'OAB', l: 'Ordem dos Advogados do Brasil' },
              ].map((s, i) => (
                <div key={i} style={{ background: k.bg2, padding: m ? '22px 18px' : '32px 28px' }}>
                  <div style={{ fontFamily: k.fontDisplay, fontSize: m ? 28 : 36, color: k.accent, fontWeight: 500, lineHeight: 1 }}>{s.n}</div>
                  <div style={{ marginTop: 10, fontFamily: k.fontBody, fontSize: m ? 12 : 13, color: k.textDim, lineHeight: 1.5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: m ? '56px 0' : '96px 0', borderTop: `1px solid ${k.line}`, textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(201,162,74,0.08), transparent 60%)`, pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: m ? 36 : 60, fontWeight: 500,
            lineHeight: 1.02, letterSpacing: '-0.02em', margin: '0 auto 24px',
            color: k.text, maxWidth: 760, textWrap: 'balance',
          }}>
            A primeira conversa é <span style={{ color: k.accent, fontStyle: 'italic' }}>gratuita e sem compromisso.</span>
          </h2>
          <p style={{ fontFamily: k.fontBody, fontSize: m ? 15 : 17, color: k.textDim, lineHeight: 1.6, margin: '0 auto 40px', maxWidth: 480 }}>
            Explique seu caso, entenda as opções e decida com calma — sem pressão, sem custo.
          </p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 14,
            padding: '22px 40px', background: k.accent, color: '#13100B',
            textDecoration: 'none', fontFamily: k.fontBody, fontSize: 16, fontWeight: 600,
            boxShadow: `0 8px 32px rgba(201,162,74,0.35)`,
            width: m ? '100%' : 'auto', justifyContent: 'center',
          }}>
            <span>Falar com o Dr. Anderson no WhatsApp</span>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
              <path d="M1 7h15M11 1l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: m ? '32px 0 24px' : '48px 0 32px', borderTop: `1px solid ${k.line}`, background: k.bg }}>
        <div style={{ ...wrap, display: 'flex', flexDirection: m ? 'column' : 'row', justifyContent: 'space-between', alignItems: m ? 'flex-start' : 'center', gap: 20 }}>
          <Wordmark size={m ? 'sm' : 'md'} />
          <div style={{ fontFamily: k.fontMono, fontSize: 9, color: k.textMute, letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1.8 }}>
            <div>© AXC Advocacia · Dr. Anderson X. de Campos · OAB / SP</div>
            <div>Conteúdo institucional · em conformidade com o Provimento 205/2021 da OAB</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomepageApp() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return <Homepage mobile={isMobile} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<HomepageApp />);
