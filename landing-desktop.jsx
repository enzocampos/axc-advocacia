// landing-desktop.jsx — layout responsivo unificado (desktop + mobile)

function LandingDesktop({ k, hl, ctaTxt, ctaShort, numbers, oab, lean, mobile: m }) {
  const [navOpen, setNavOpen] = React.useState(false);
  const wrap    = m ? { padding: '0 22px' } : { maxWidth: 1280, margin: '0 auto', padding: '0 64px' };
  const py      = m ? 76 : k.sectionPy;
  const h2Size  = m ? k.h2m : k.h2;
  const waHref  = 'https://wa.me/5519991949837?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20meu%20invent%C3%A1rio';

  return (
    <>
      {/* ──────────── NAV ──────────── */}
      {m ? (
        <header style={{
          position: 'sticky', top: 0, zIndex: 30, padding: '14px 22px',
          background: 'rgba(14,11,7,0.92)', backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${k.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex' }}><Wordmark k={k} size="sm" /></a>
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
              background: k.bg2, borderBottom: `1px solid ${k.line}`,
              padding: '20px 22px 24px',
            }}>
              {[['A dor','#dor'],['Solução','#solucao'],['Resultados','#resultados'],['Perguntas','#faq']].map(([t,h]) => (
                <a key={t} href={h} onClick={() => setNavOpen(false)} style={{
                  display: 'block', padding: '14px 0', color: k.text,
                  fontFamily: k.fontDisplay, fontSize: 22, textDecoration: 'none',
                  borderBottom: `1px solid ${k.line}`,
                }}>{t}</a>
              ))}
            </div>
          )}
        </header>
      ) : (
        <header style={{
          position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, padding: '28px 0 48px',
          background: 'linear-gradient(to bottom, rgba(14,11,7,0.92) 0%, rgba(14,11,7,0.6) 60%, transparent 100%)',
        }}>
          <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ textDecoration: 'none', display: 'flex' }}><Wordmark k={k} size="md" /></a>
            <nav style={{ display: 'flex', gap: 36 }}>
              {[['A dor','#dor'],['Solução','#solucao'],['Resultados','#resultados'],['Perguntas','#faq']].map(([t,h]) => (
                <a key={t} href={h} style={{
                  color: k.textDim, textDecoration: 'none', fontSize: 13,
                  letterSpacing: '0.02em', fontFamily: k.fontBody, fontWeight: 500,
                }}>{t}</a>
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

      {/* ──────────── HERO ──────────── */}
      {m ? (
        <section style={{ padding: '36px 0 56px' }}>
          <div style={wrap}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <span style={{ width: 36, height: 1, background: k.accent }} />
              <MonoLabel color={k.accent} style={{ fontSize: 10 }}>{hl.eyebrow}</MonoLabel>
            </div>
            <h1 style={{
              fontFamily: k.fontDisplay, fontWeight: 500, fontSize: 50,
              lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0, color: k.text,
            }}>
              {hl.title.map((line, i) => line === null
                ? <br key={i} />
                : <span key={i} style={{ display: 'block', ...(i === hl.title.length - 1 ? { color: k.accent, fontStyle: 'italic' } : {}) }}>{line}</span>)}
            </h1>
            <div style={{ marginTop: 36, position: 'relative', width: '100%', aspectRatio: '4 / 5', overflow: 'hidden' }}>
              <img src="/uploads/anderson.jpeg" alt="Dr. Anderson Xavier de Campos"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
            <div style={{
              marginTop: 12, display: 'flex', justifyContent: 'space-between',
              fontFamily: k.fontMono, fontSize: 9, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: k.textMute,
            }}>
              <span>Dr. Anderson X. de Campos</span><span>OAB / SP</span>
            </div>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <GoldButton fullWidth size="lg">{ctaTxt}</GoldButton>
              <GoldButton fullWidth secondary href="#dor">Como funciona o atendimento</GoldButton>
            </div>
            <div style={{
              marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8,
              color: k.textDim, fontFamily: k.fontMono, fontSize: 9,
              letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>
              <span>· Conversa inicial sem compromisso</span>
              <span>· Atendimento direto com o advogado</span>
              <span>· Resposta rápida</span>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div style={{
              padding: '110px 64px 56px 64px', maxWidth: 640, width: '100%', marginLeft: 'auto',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 56, height: 1, background: k.accent }} />
                <MonoLabel color={k.accent}>{hl.eyebrow}</MonoLabel>
                <span style={{ color: k.textMute, fontFamily: k.fontMono, fontSize: 11, letterSpacing: '0.2em' }}>·  São Paulo  ·  Brasil</span>
              </div>
              <h1 style={{
                fontFamily: k.fontDisplay, fontWeight: 500, fontSize: 80,
                lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0, color: k.text, textWrap: 'pretty',
              }}>
                {hl.title.map((line, i) => line === null
                  ? <br key={i} />
                  : <span key={i} style={{ display: 'block', ...(i === hl.title.length - 1 ? { color: k.accent, fontStyle: 'italic' } : {}) }}>{line}</span>)}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                <GoldButton size="lg" secondary href="#dor">Como funciona</GoldButton>
                <GoldButton size="lg">{ctaTxt}</GoldButton>
              </div>
              <div style={{
                display: 'flex', gap: 24, color: k.textDim, flexWrap: 'wrap',
                fontFamily: k.fontMono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
              }}>
                <span>· Sem compromisso</span>
                <span>· Direto com o advogado</span>
                <span>· Resposta rápida</span>
              </div>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="/uploads/anderson.jpeg" alt="Dr. Anderson Xavier de Campos"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '48px 24px 20px',
                background: 'linear-gradient(transparent, rgba(14,11,7,0.8))',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                fontFamily: k.fontMono, fontSize: 10, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: k.textMute,
              }}>
                <span>Dr. Anderson X. de Campos</span><span>OAB / SP</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──────────── DOR ──────────── */}
      <section id="dor" style={{
        background: k.bg2, padding: `${py}px 0`,
        ...(m ? {} : { minHeight: '100vh', display: 'flex', alignItems: 'center' }),
        borderTop: `1px solid ${k.line}`,
      }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ textAlign: m ? 'left' : 'center', marginBottom: m ? 32 : 64 }}>
            <div style={{ display: 'flex', justifyContent: m ? 'flex-start' : 'center' }}>
              <SectionNumber x="01" total="06" k={k} />
            </div>
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: h2Size, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: m ? '24px 0 18px' : '28px auto 20px',
              color: k.text, textWrap: 'balance', maxWidth: m ? undefined : 760,
            }}>
              {SECTION_COPY.dorH2pre} <span style={{ color: k.accent, fontStyle: 'italic' }}>{SECTION_COPY.dorH2italic}</span>{SECTION_COPY.dorH2post}
            </h2>
            <p style={{ fontFamily: k.fontBody, fontSize: m ? 14 : 16, color: k.textDim, lineHeight: 1.7, margin: m ? 0 : '0 auto', maxWidth: m ? undefined : 520 }}>
              {SECTION_COPY.dorSub}
            </p>
          </div>
          {m ? (
            <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {PAIN_ITEMS.map((p, i) => (
                <li key={i} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: '18px 0', borderTop: `1px solid ${k.line}`,
                  ...(i === PAIN_ITEMS.length - 1 ? { borderBottom: `1px solid ${k.line}` } : {}),
                }}>
                  <span style={{ fontFamily: k.fontMono, fontSize: 10, color: k.accent, letterSpacing: '0.15em', paddingTop: 4, minWidth: 24 }}>{String(i+1).padStart(2,'0')}</span>
                  <span style={{ fontFamily: k.fontDisplay, fontSize: 18, lineHeight: 1.4, color: k.text }}>{p}</span>
                </li>
              ))}
            </ol>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: k.line }}>
              {PAIN_ITEMS.slice(0, 3).map((p, i) => (
                <div key={i} style={{ background: k.bg2, padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <span style={{ fontFamily: k.fontMono, fontSize: 11, color: k.accent, letterSpacing: '0.18em' }}>{String(i+1).padStart(2,'0')}</span>
                  <span style={{ fontFamily: k.fontDisplay, fontSize: 22, lineHeight: 1.45, color: k.text, textWrap: 'pretty' }}>{p}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ──────────── MID CTA 1 ──────────── */}
      {m ? (
        <MidCTAMobile
          k={k} eyebrow={SECTION_COPY.midCtaEyebrow}
          title={<>Se você se reconheceu em três ou mais itens, <span style={{ color: k.accent, fontStyle: 'italic' }}>está na hora.</span></>}
          ctaText={ctaTxt}
        />
      ) : (
        <MidCTA
          k={k} variant="band" eyebrow={SECTION_COPY.midCtaEyebrow}
          title={<>Se você se reconheceu em três ou mais itens dessa lista, <span style={{ color: k.accent, fontStyle: 'italic' }}>está na hora de conversar.</span></>}
          ctaText={ctaTxt}
        />
      )}

      {/* ──────────── SOLUÇÃO ──────────── */}
      <section id="solucao" style={{
        padding: `${py}px 0`,
        ...(m ? {} : { minHeight: '100vh', display: 'flex', alignItems: 'center' }),
      }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <SectionNumber x="02" total="06" k={k} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : '1.2fr 1fr',
            gap: m ? 28 : 96, marginTop: 32, alignItems: 'flex-start',
          }}>
            <div>
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: h2Size, fontWeight: 500,
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 28px', color: k.text, textWrap: 'balance',
              }}>
                {SECTION_COPY.solucaoH2pre} <span style={{ color: k.accent, fontStyle: 'italic' }}>{SECTION_COPY.solucaoH2italic}</span>{SECTION_COPY.solucaoH2post}
              </h2>
              <div style={{
                fontFamily: k.fontBody, fontSize: m ? 15 : 17, lineHeight: 1.65,
                color: k.textDim, display: 'flex', flexDirection: 'column', gap: m ? 14 : 18,
              }}>
                <p style={{ margin: 0 }}>{SECTION_COPY.solucaoP1}</p>
                <p style={{ margin: 0 }}>{SECTION_COPY.solucaoP2}</p>
                <p style={{ margin: 0, color: k.text }}>
                  {SECTION_COPY.solucaoP3pre}<span>o escritório mantém um <b style={{ color: k.accent }}>histórico consistente</b> de resultados favoráveis aos clientes.</span>
                </p>
              </div>
            </div>
            <div style={{
              border: `1px solid ${k.line}`, padding: m ? 22 : 36, background: k.surface,
              display: 'flex', flexDirection: 'column', gap: m ? 18 : 24,
            }}>
              <MonoLabel color={k.accent}>Como conduzimos</MonoLabel>
              {SECTION_COPY.solucaoComo.map(([n, t, d], i) => (
                <div key={n} style={{
                  display: 'grid', gridTemplateColumns: m ? '32px 1fr' : '40px 1fr', gap: m ? 14 : 18,
                  paddingBottom: i < 2 ? (m ? 16 : 24) : 0, borderBottom: i < 2 ? `1px solid ${k.line}` : 'none',
                }}>
                  <div style={{ fontFamily: k.fontDisplay, fontSize: m ? 22 : 28, color: k.accent, fontWeight: 500 }}>{n}</div>
                  <div>
                    <div style={{ fontFamily: k.fontDisplay, fontSize: m ? 18 : 22, color: k.text, fontWeight: 500, marginBottom: m ? 4 : 6 }}>{t}</div>
                    <div style={{ fontFamily: k.fontBody, fontSize: m ? 13 : 14, color: k.textDim, lineHeight: 1.6 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── BENEFÍCIOS ──────────── */}
      <section style={{
        padding: `${py}px 0`, background: k.bg2,
        ...(m ? {} : { minHeight: '100vh', display: 'flex', alignItems: 'center' }),
        borderTop: `1px solid ${k.line}`, borderBottom: `1px solid ${k.line}`,
      }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: m ? 28 : 56, gap: 32 }}>
            <div>
              <SectionNumber x="03" total="06" k={k} />
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: h2Size, fontWeight: 500,
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '24px 0 0', color: k.text,
              }}>
                O que muda <span style={{ color: k.accent, fontStyle: 'italic' }}>na prática</span> quando você decide destravar.
              </h2>
            </div>
            {!m && <MonoLabel color={k.textMute} style={{ flexShrink: 0 }}>06 benefícios diretos</MonoLabel>}
          </div>
          <div style={m
            ? { display: 'flex', flexDirection: 'column', gap: 1, background: k.line, border: `1px solid ${k.line}` }
            : { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: k.line }
          }>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{
                background: k.bg2, padding: m ? 22 : '36px 32px',
                ...(m ? {} : { minHeight: 220 }),
                display: 'flex', flexDirection: 'column', gap: m ? 8 : 14,
              }}>
                <span style={{ fontFamily: k.fontMono, fontSize: m ? 9 : 10, color: k.accent, letterSpacing: '0.2em', textTransform: 'uppercase' }}>0{i+1}</span>
                <div style={{ fontFamily: k.fontDisplay, fontSize: m ? 19 : 24, color: k.text, fontWeight: 500, lineHeight: 1.2 }}>{b.k}</div>
                <div style={{ fontFamily: k.fontBody, fontSize: m ? 13 : 14, color: k.textDim, lineHeight: 1.6 }}>{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── RESULTADOS ──────────── */}
      <section id="resultados" style={{
        padding: `${py}px 0`,
        ...(m ? {} : { minHeight: '100vh', display: 'flex', alignItems: 'center' }),
      }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <SectionNumber x="04" total="06" k={k} />
          <div style={{
            display: 'grid', gridTemplateColumns: m ? '1fr' : '1.3fr 1fr',
            gap: m ? 18 : 80, marginTop: m ? 24 : 32, alignItems: 'flex-start',
          }}>
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: h2Size, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: k.text,
            }}>
              Mais de uma década dedicada exclusivamente a famílias <span style={{ color: k.accent, fontStyle: 'italic' }}>como a sua.</span>
            </h2>
            <p style={{ fontFamily: k.fontBody, fontSize: m ? 14 : 15, color: k.textDim, lineHeight: 1.65, margin: 0, paddingTop: m ? 0 : 12 }}>
              {SECTION_COPY.resultadosSub}
            </p>
          </div>
          <div style={{
            marginTop: m ? 32 : 64,
            ...(m ? { border: `1px solid ${k.line}`, background: k.surface } : { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: `1px solid ${k.line}`, background: k.surface }),
          }}>
            {numbers.map((n, i) => (
              <div key={i} style={{
                padding: m ? '22px' : '40px 36px',
                borderTop: (m && i) ? `1px solid ${k.line}` : 'none',
                borderLeft: (!m && i) ? `1px solid ${k.line}` : 'none',
                display: m ? 'flex' : 'block', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
              }}>
                {m
                  ? <>
                      <div style={{ fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.5, maxWidth: 220 }}>{n.l}</div>
                      <div style={{ fontFamily: k.fontDisplay, fontSize: 42, color: k.accent, fontWeight: 500, lineHeight: 1 }}>{n.n}</div>
                    </>
                  : <>
                      <div style={{ fontFamily: k.fontDisplay, fontSize: 68, lineHeight: 1, color: k.accent, fontWeight: 500, letterSpacing: '-0.02em' }}>{n.n}</div>
                      <div style={{ marginTop: 16, fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.5 }}>{n.l}</div>
                    </>
                }
              </div>
            ))}
          </div>
          <div style={{ marginTop: m ? 32 : 64, display: 'flex', flexDirection: 'column', gap: m ? 16 : 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                padding: m ? 22 : 32, border: `1px solid ${k.line}`, background: k.bg,
                display: 'flex', flexDirection: 'column', gap: m ? 16 : 28,
                ...(m ? {} : { minHeight: 320 }),
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: k.fontDisplay, fontSize: m ? 40 : 56, lineHeight: 0.8, color: k.accent, fontStyle: 'italic' }}>"</span>
                  <span style={{ fontFamily: k.fontMono, fontSize: m ? 9 : 10, color: k.textMute, letterSpacing: '0.2em' }}>{t.idx}</span>
                </div>
                <p style={{ flex: 1, margin: 0, fontFamily: k.fontDisplay, fontSize: m ? 16 : 19, lineHeight: 1.5, color: k.text }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: m ? 10 : 12 }}>
                  <div style={{
                    width: m ? 34 : 40, height: m ? 34 : 40, borderRadius: 20,
                    background: k.surfaceHi, border: `1px solid ${k.accentSoft}`,
                    flexShrink: 0, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(135deg, transparent 0 4px, ${k.line} 4px 5px)` }} />
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: k.fontMono, fontSize: 6, color: k.accent, textTransform: 'uppercase' }}>foto</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: k.fontBody, fontSize: m ? 12 : 13, color: k.text, fontWeight: 500 }}>{t.name}</div>
                    <div style={{ fontFamily: k.fontMono, fontSize: m ? 9 : 10, color: k.textMute, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!m && (
            <div style={{ marginTop: 20, fontFamily: k.fontMono, fontSize: 10, color: k.textMute, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              ⚠ Depoimentos a serem capturados antes da publicação — nome, foto e autorização por escrito.
            </div>
          )}
        </div>
      </section>

      {/* ──────────── FAQ ──────────── */}
      <section id="faq" style={{
        padding: `${py}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}`,
        ...(m ? {} : { minHeight: '100vh', display: 'flex', alignItems: 'center' }),
      }}>
        <div style={{
          ...wrap, width: '100%', boxSizing: 'border-box',
          ...(m ? {} : { display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 96, alignItems: 'flex-start' }),
        }}>
          <div style={m ? {} : { position: 'sticky', top: 80 }}>
            <SectionNumber x="06" total="06" k={k} />
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: h2Size, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: '24px 0 12px', color: k.text,
            }}>
              Perguntas <span style={{ color: k.accent, fontStyle: 'italic' }}>antes da conversa.</span>
            </h2>
            <p style={{ margin: m ? '0 0 24px' : 0, fontFamily: k.fontBody, fontSize: m ? 14 : 15, color: k.textDim, lineHeight: 1.7, maxWidth: m ? undefined : 320 }}>
              Se a sua dúvida não estiver aqui, traga ela na primeira conversa. É exatamente para isso que ela serve.
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => m
              ? <FAQItemMobile key={i} idx={i} q={f.q} a={f.a} k={k} />
              : <FAQItem key={i} idx={i} q={f.q} a={f.a} k={k} />
            )}
            <div style={{ borderTop: `1px solid ${k.line}` }} />
          </div>
        </div>
      </section>

      {/* ──────────── CTA FINAL ──────────── */}
      <section style={{
        padding: `${py}px 0`, position: 'relative',
        ...(m ? {} : { minHeight: '100vh', display: 'flex', alignItems: 'center' }),
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none', backgroundImage: `radial-gradient(ellipse at 50% 50%, ${k.accentSoft}, transparent 60%)` }} />
        <div style={{ ...wrap, position: 'relative', textAlign: 'center' }}>
          <MonoLabel color={k.accent}>O primeiro passo</MonoLabel>
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: m ? 46 : 80, fontWeight: 500, lineHeight: 1.0,
            letterSpacing: '-0.025em', margin: m ? '20px 0' : '32px auto 28px',
            maxWidth: 920, color: k.text, textWrap: 'balance',
          }}>
            {SECTION_COPY.ctaH2pre} <span style={{ color: k.accent, fontStyle: 'italic' }}>{SECTION_COPY.ctaH2italic}</span>
            {!m && <><br />Mas pode parar de ser um peso.</>}
          </h2>
          <p style={{
            margin: m ? '0 0 32px' : '0 auto 48px', maxWidth: 580,
            fontFamily: k.fontBody, fontSize: m ? 16 : 18, color: k.textDim, lineHeight: 1.6,
          }}>
            {SECTION_COPY.ctaP}
          </p>
          {m
            ? <GoldButton fullWidth size="lg">{ctaTxt}</GoldButton>
            : <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}><GoldButton size="lg">{ctaTxt}</GoldButton></div>
          }
          <div style={{
            marginTop: m ? 20 : 0, display: 'flex', flexDirection: m ? 'column' : 'row',
            justifyContent: 'center', gap: m ? 8 : 32, color: k.textMute,
            fontFamily: k.fontMono, fontSize: m ? 9 : 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <span>· Sem compromisso</span>
            <span>· Resposta rápida</span>
            <span>· Atendimento direto com o advogado</span>
          </div>
        </div>
      </section>

      {/* ──────────── INSTAGRAM ──────────── */}
      <section style={{
        padding: `${k.sectionPy}px 0 ${k.sectionPy - 16}px`,
        background: k.bg2, borderTop: `1px solid ${k.line}`, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none', backgroundImage: `radial-gradient(ellipse at 20% 0%, ${k.accentSoft}, transparent 55%)` }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{
            display: 'flex', flexDirection: m ? 'column' : 'row',
            alignItems: m ? 'flex-start' : 'flex-end',
            justifyContent: 'space-between', gap: m ? 20 : 48, marginBottom: m ? 24 : 56,
          }}>
            <div style={{ maxWidth: 720 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: m ? 12 : 14, marginBottom: 20 }}>
                <svg width={m ? 22 : 28} height={m ? 22 : 28} viewBox="0 0 24 24" fill="none" stroke={k.accent} strokeWidth="1.5" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill={k.accent} stroke="none" />
                </svg>
                <span style={{ fontFamily: k.fontMono, fontSize: m ? 10 : 11, color: k.accent, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  @andersoncampos.advogado · Instagram
                </span>
              </div>
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: h2Size, fontWeight: 500, lineHeight: 1.05,
                letterSpacing: '-0.02em', margin: 0, color: k.text, textWrap: 'balance',
              }}>
                {SECTION_COPY.igH2pre} <span style={{ color: k.accent, fontStyle: 'italic' }}>{SECTION_COPY.igH2italic}</span>{SECTION_COPY.igH2post}
              </h2>
            </div>
            <a href="https://www.instagram.com/andersoncampos.advogado/" target="_blank" rel="noopener noreferrer" style={{
              flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              padding: m ? '16px 22px' : '14px 22px', border: `1px solid ${k.lineHi}`, color: k.text,
              textDecoration: 'none', fontFamily: k.fontBody, fontSize: m ? 14 : 13, fontWeight: 500,
              width: m ? '100%' : 'auto',
            }}>
              <span>Seguir no Instagram</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9L9 3M5 3h4v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ ...wrap }}>
          <behold-widget feed-id="vmHOHlWaJVbHeQqydX7g" style={{ display: 'block', marginBottom: 32 }} />
        </div>

        {!m && (
          <div style={{ ...wrap }}>
            <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px solid ${k.line}` }}>
              <MonoLabel color={k.textMute}>Conteúdo institucional · sem captação de clientela · em conformidade com a OAB</MonoLabel>
            </div>
          </div>
        )}
      </section>

      {/* ──────────── FOOTER ──────────── */}
      {m ? (
        <footer style={{ padding: '36px 0 28px', borderTop: `1px solid ${k.line}`, background: k.bg }}>
          <div style={wrap}>
            <Wordmark k={k} size="md" />
            <p style={{ marginTop: 14, fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.6 }}>
              {SECTION_COPY.footerTagline}
            </p>
            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: k.fontBody, fontSize: 13, color: k.text }}>
              <span>WhatsApp · direto com o advogado</span>
              <span>Atendimento online · Brasil</span>
              <span>Presencial · Louveira / SP</span>
            </div>
            <div style={{
              marginTop: 28, paddingTop: 20, borderTop: `1px solid ${k.line}`,
              fontFamily: k.fontMono, fontSize: 9, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: k.textMute, display: 'flex', flexDirection: 'column', gap: 8,
            }}>
              <div>© AXC Advocacia · Dr. Anderson X. de Campos · OAB / SP</div>
              <div>Conteúdo institucional · em conformidade com o Provimento 205/2021 da OAB</div>
            </div>
          </div>
        </footer>
      ) : (
        <footer style={{ padding: '64px 0 36px', borderTop: `1px solid ${k.line}`, background: k.bg }}>
          <div style={wrap}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 56, marginBottom: 56 }}>
              <div>
                <Wordmark k={k} size="lg" />
                <p style={{ marginTop: 20, fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.6, maxWidth: 320 }}>
                  {SECTION_COPY.footerTaglineD}
                </p>
              </div>
              <div>
                <MonoLabel color={k.textMute}>Contato</MonoLabel>
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: k.fontBody, fontSize: 14, color: k.text }}>
                  <li>WhatsApp · direto com o advogado</li>
                  <li>Atendimento online em todo Brasil</li>
                  <li>Presencial · Louveira / SP</li>
                </ul>
              </div>
              <div>
                <MonoLabel color={k.textMute}>Atuação</MonoLabel>
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: k.fontBody, fontSize: 14, color: k.textDim }}>
                  {SECTION_COPY.footerAtuacao.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <MonoLabel color={k.textMute}>Institucional</MonoLabel>
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: k.fontBody, fontSize: 14, color: k.textDim }}>
                  <li>Política de Privacidade</li>
                  <li>Termos de uso</li>
                  <li>LGPD</li>
                </ul>
              </div>
            </div>
            <div style={{
              borderTop: `1px solid ${k.line}`, paddingTop: 28,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
              fontFamily: k.fontMono, fontSize: 10, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: k.textMute,
            }}>
              <div>© AXC Advocacia · Todos os direitos reservados</div>
              <div style={{ textAlign: 'center', maxWidth: 620 }}>Conteúdo institucional · sem captação de clientela · em conformidade com o Provimento 205/2021 da OAB</div>
              <div>Dr. Anderson X. de Campos · OAB / SP</div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

function FAQItemMobile({ q, a, idx, k }) {
  const [open, setOpen] = React.useState(idx === 0);
  return (
    <div style={{ borderTop: `1px solid ${k.line}` }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', padding: '18px 0', background: 'transparent', border: 'none', cursor: 'pointer',
        color: k.text, textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 14, fontFamily: k.fontDisplay,
      }}>
        <span style={{ fontFamily: k.fontMono, fontSize: 9, color: k.accent, letterSpacing: '0.15em', paddingTop: 6, minWidth: 20 }}>{String(idx+1).padStart(2,'0')}</span>
        <span style={{ flex: 1, fontSize: 16, lineHeight: 1.35, fontWeight: 500 }}>{q}</span>
        <span style={{
          width: 24, height: 24, flexShrink: 0, border: `1px solid ${k.lineHi}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: k.accent, transform: open ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .3s',
        }}>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && <div style={{ paddingLeft: 34, paddingRight: 32, paddingBottom: 18, color: k.textDim, fontFamily: k.fontBody, fontSize: 13, lineHeight: 1.65 }}>{a}</div>}
    </div>
  );
}

window.LandingDesktop = LandingDesktop;
