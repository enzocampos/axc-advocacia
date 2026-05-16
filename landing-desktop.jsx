// landing-desktop.jsx — desktop layout for the landing page

function LandingDesktop({ k, hl, ctaTxt, ctaShort, numbers, oab, lean }) {
  const max = 1280;
  const wrap = { maxWidth: max, margin: '0 auto', padding: '0 64px' };
  const sectionPy = k.sectionPy;

  return (
    <>
      {/* ──────────── NAV ──────────── */}
      <header style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
        padding: '28px 0',
        background: `linear-gradient(to bottom, rgba(14,11,7,0.92) 0%, rgba(14,11,7,0.6) 60%, transparent 100%)`,
        paddingBottom: 48,
      }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Wordmark k={k} size="md" />
          <nav style={{ display: 'flex', gap: 36 }}>
            {[['A dor', '#dor'], ['Solução', '#solucao'], ['Resultados', '#resultados'], ['Perguntas', '#faq']].map(([t, h]) => (
              <a key={t} href={h} style={{
                color: k.textDim, textDecoration: 'none', fontSize: 13,
                letterSpacing: '0.02em', fontFamily: k.fontBody, fontWeight: 500,
              }}>{t}</a>
            ))}
          </nav>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 18px', border: `1px solid ${k.lineHi}`,
            color: k.text, textDecoration: 'none', fontSize: 13, fontWeight: 500,
            letterSpacing: '0.01em',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: k.accent, boxShadow: `0 0 8px ${k.accent}` }} />
            Conversa inicial · grátis
          </a>
        </div>
      </header>

      {/* ──────────── HERO ──────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* two-column hero */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>

          {/* LEFT — content */}
          <div style={{
            padding: '110px 64px 56px 64px',
            maxWidth: 640, width: '100%', marginLeft: 'auto',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32,
          }}>
            {/* eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 56, height: 1, background: k.accent }} />
              <MonoLabel color={k.accent}>{hl.eyebrow}</MonoLabel>
              <span style={{ color: k.textMute, fontFamily: k.fontMono, fontSize: 11, letterSpacing: '0.2em' }}>·  São Paulo  ·  Brasil</span>
            </div>

            {/* headline */}
            <h1 style={{
              fontFamily: k.heroSerif ? k.fontDisplay : k.fontBody,
              fontWeight: k.heroSerif ? 500 : 700,
              fontSize: k.heroSerif ? 80 : 68,
              lineHeight: k.heroSerif ? 1.02 : 1.05,
              letterSpacing: k.heroSerif ? '-0.02em' : '-0.03em',
              margin: 0, color: k.text, textWrap: 'pretty',
            }}>
              {hl.title.map((line, i) => line === null
                ? <br key={i} />
                : <span key={i} style={{ display: 'block', ...(i === hl.title.length - 1 ? { color: k.accent, fontStyle: k.heroSerif ? 'italic' : 'normal' } : {}) }}>{line}</span>)}
            </h1>

            {/* description */}
            {hl.sub && <p style={{
              fontFamily: k.fontBody, fontSize: 17, lineHeight: 1.65, color: k.textDim,
              margin: 0, maxWidth: 440, textWrap: 'pretty',
            }}>{hl.sub}</p>}

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <GoldButton k={k} size="lg" secondary>Como funciona</GoldButton>
              <GoldButton k={k} size="lg">{ctaTxt}</GoldButton>
            </div>

            {/* micro trust */}
            <div style={{
              display: 'flex', gap: 24, color: k.textDim, flexWrap: 'wrap',
              fontFamily: k.fontMono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
            }}>
              <span>· Sem compromisso</span>
              <span>· Direto com o advogado</span>
              <span>· {oab === 'literal' ? 'Resposta no mesmo dia' : 'Resposta rápida'}</span>
            </div>
          </div>

          {/* RIGHT — foto full-height */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src="uploads/anderson.jpeg"
              alt="Dr. Anderson Xavier de Campos"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            {/* caption no rodapé */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '48px 24px 20px',
              background: `linear-gradient(transparent, rgba(14,11,7,0.8))`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              fontFamily: k.fontMono, fontSize: 10, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: k.textMute,
            }}>
              <span>Dr. Anderson X. de Campos</span>
              <span>OAB / SP</span>
            </div>
          </div>
        </div>


      </section>

      {/* ──────────── DOR ──────────── */}
      <section id="dor" style={{ background: k.bg2, minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0`, borderTop: `1px solid ${k.line}` }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          {/* cabeçalho centralizado */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <SectionNumber x="01" total="06" k={k} />
            </div>
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: '28px auto 20px',
              color: k.text, textWrap: 'balance', maxWidth: 760,
            }}>
              Se você é herdeiro de um inventário <span style={{ color: k.accent, fontStyle: 'italic' }}>que não anda</span>, provavelmente já passou por isso.
            </h2>
            <p style={{
              fontFamily: k.fontBody, fontSize: 16, color: k.textDim, lineHeight: 1.7,
              margin: '0 auto', maxWidth: 520,
            }}>
              Perder alguém da família já é difícil. Lidar com a partilha dos bens não devia ser ainda pior.
            </p>
          </div>

          {/* 3 itens em colunas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: k.line }}>
            {PAIN_ITEMS.slice(0, 3).map((p, i) => (
              <div key={i} style={{
                background: k.bg2, padding: '40px 36px',
                display: 'flex', flexDirection: 'column', gap: 20,
              }}>
                <span style={{
                  fontFamily: k.fontMono, fontSize: 11, color: k.accent,
                  letterSpacing: '0.18em',
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{
                  fontFamily: k.fontDisplay, fontSize: 22, lineHeight: 1.45,
                  color: k.text, fontWeight: 400, textWrap: 'pretty',
                }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── MID CTA 1 — após a dor ──────────── */}
      <MidCTA
        k={k}
        variant="band"
        eyebrow="Pare de remoer"
        title={<>Se você se reconheceu em três ou mais itens dessa lista, <span style={{ color: k.accent, fontStyle: 'italic' }}>está na hora de conversar.</span></>}
        ctaText={ctaTxt}
      />

      {/* ──────────── SOLUÇÃO ──────────── */}
      <section id="solucao" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0` }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <SectionNumber x="02" total="06" k={k} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 96, marginTop: 32, alignItems: 'flex-start' }}>
            <div>
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500,
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '0 0 36px',
                color: k.text, textWrap: 'balance',
              }}>
                Inventário travado <span style={{ color: k.accent, fontStyle: 'italic' }}>quase sempre</span> tem o mesmo motivo: falta de condução firme.
              </h2>
              <div style={{
                fontFamily: k.fontBody, fontSize: 17, lineHeight: 1.65,
                color: k.textDim, maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 18,
              }}>
                <p style={{ margin: 0 }}>
                  Documento que não foi pedido na hora certa. Prazo perdido. Etapa que ficou esperando alguém tomar a frente.
                </p>
                <p style={{ margin: 0 }}>
                  O jeito da AXC é o contrário disso. O Dr. Anderson assume a condução do caso do começo ao fim: levanta o que falta, organiza a documentação, conduz cada etapa e mantém você informado em linguagem que dá pra entender.
                </p>
                <p style={{ margin: 0, color: k.text }}>
                  É essa condução ativa que faz o inventário voltar a andar — e {oab === 'literal'
                    ? <span>é por isso que <b style={{ color: k.accent }}>93% dos casos</b> conduzidos pelo escritório terminam com resultado favorável.</span>
                    : <span>é por isso que o escritório mantém um <b style={{ color: k.accent }}>histórico consistente</b> de resultados favoráveis aos clientes.</span>}
                </p>
              </div>
            </div>
            <div>
              {/* 3-step diagram */}
              <div style={{
                border: `1px solid ${k.line}`, padding: 36, background: k.surface,
                display: 'flex', flexDirection: 'column', gap: 24,
              }}>
                <MonoLabel color={k.accent}>Como conduzimos</MonoLabel>
                {[
                  ['01', 'Diagnóstico', 'Conversa inicial sem compromisso. O Dr. Anderson entende seu caso, identifica o que está travando e te explica os próximos passos.'],
                  ['02', 'Levantamento', 'Documentação revisada, certidões pedidas na hora certa, ITCMD apurado. Nada fica esperando alguém puxar.'],
                  ['03', 'Condução ativa', 'Cada etapa conduzida pessoalmente, com prazos monitorados. Você é informado em linguagem clara, sem juridiquês.'],
                ].map(([n, t, d], i) => (
                  <div key={n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 18, paddingBottom: i < 2 ? 24 : 0, borderBottom: i < 2 ? `1px solid ${k.line}` : 'none' }}>
                    <div style={{ fontFamily: k.fontDisplay, fontSize: 28, color: k.accent, fontWeight: 500 }}>{n}</div>
                    <div>
                      <div style={{ fontFamily: k.fontDisplay, fontSize: 22, color: k.text, fontWeight: 500, marginBottom: 6 }}>{t}</div>
                      <div style={{ fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.6 }}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── BENEFÍCIOS ──────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}`, borderBottom: `1px solid ${k.line}` }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 56, gap: 32 }}>
            <div>
              <SectionNumber x="03" total="06" k={k} />
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500,
                lineHeight: 1.05, letterSpacing: '-0.02em', margin: '32px 0 0',
                color: k.text, maxWidth: 720,
              }}>
                O que muda <span style={{ color: k.accent, fontStyle: 'italic' }}>na prática</span> quando você decide destravar.
              </h2>
            </div>
            <MonoLabel color={k.textMute} style={{ flexShrink: 0 }}>06 benefícios diretos</MonoLabel>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: k.line }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{
                background: k.bg2, padding: '36px 32px', minHeight: 220,
                display: 'flex', flexDirection: 'column', gap: 14, position: 'relative',
              }}>
                <span style={{
                  fontFamily: k.fontMono, fontSize: 10, color: k.accent,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>0{i + 1}</span>
                <div style={{ fontFamily: k.fontDisplay, fontSize: 24, color: k.text, fontWeight: 500, lineHeight: 1.2 }}>
                  {b.k}
                </div>
                <div style={{ fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.6 }}>
                  {b.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── MID CTA 2 — após benefícios (oculto em lean) ──────────── */}
      {!lean && (
        <MidCTA
          k={k}
          variant="minimal"
          eyebrow="Pronto pra dar o primeiro passo?"
          title={<>A primeira conversa é <span style={{ color: k.accent, fontStyle: 'italic' }}>sem custo e sem compromisso.</span> Você sai dela com clareza.</>}
          ctaText={ctaTxt}
          secondary="· Direto com o advogado  ·  Resposta rápida"
        />
      )}

      {/* ──────────── PROVA SOCIAL ──────────── */}
      <section id="resultados" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0` }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <SectionNumber x="04" total="06" k={k} />
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, marginTop: 32, alignItems: 'flex-start' }}>
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
              color: k.text,
            }}>
              {oab === 'literal'
                ? <span>Mais de uma década, mais de mil e quinhentos atendimentos, <span style={{ color: k.accent, fontStyle: 'italic' }}>resultados que falam.</span></span>
                : <span>Mais de uma década dedicada exclusivamente a famílias <span style={{ color: k.accent, fontStyle: 'italic' }}>como a sua.</span></span>}
            </h2>
            <p style={{
              fontFamily: k.fontBody, fontSize: 15, color: k.textDim, lineHeight: 1.65, margin: 0, paddingTop: 12,
            }}>
              Cada inventário tem suas particularidades. O que se repete é o método: condução firme, comunicação clara e disposição pra resolver — não pra empurrar com a barriga.
            </p>
          </div>

          {/* numbers strip */}
          <div style={{
            marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            border: `1px solid ${k.line}`, background: k.surface,
          }}>
            {numbers.map((n, i) => (
              <div key={i} style={{
                padding: '40px 36px', borderLeft: i ? `1px solid ${k.line}` : 'none',
              }}>
                <div style={{
                  fontFamily: k.fontDisplay, fontSize: 68, lineHeight: 1, color: k.accent,
                  fontWeight: 500, letterSpacing: '-0.02em',
                }}>{n.n}</div>
                <div style={{
                  marginTop: 16, fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.5,
                }}>{n.l}</div>
              </div>
            ))}
          </div>

          {/* documents / handshake strip (oculto em lean) */}
          {!lean && (
            <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <PhotoPlaceholder
                k={k}
                ratio="16 / 10"
                label={<>
                  [ FOTO · DOCUMENTOS / ASSINATURA ]<br />
                  close-up · escrivaninha · caneta-tinteiro<br />
                  inserir antes da publicação
                </>}
              />
              <PhotoPlaceholder
                k={k}
                ratio="16 / 10"
                label={<>
                  [ FOTO · ATENDIMENTO ]<br />
                  Dr. Anderson conversando com cliente<br />
                  inserir antes da publicação
                </>}
              />
            </div>
          )}

          {/* testimonials */}
          <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                padding: 32, border: `1px solid ${k.line}`,
                display: 'flex', flexDirection: 'column', gap: 28, minHeight: 320,
                background: k.bg,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: k.fontDisplay, fontSize: 56, lineHeight: 0.8,
                    color: k.accent, fontStyle: 'italic',
                  }}>“</span>
                  <span style={{ fontFamily: k.fontMono, fontSize: 10, color: k.textMute, letterSpacing: '0.2em' }}>{t.idx}</span>
                </div>
                <p style={{
                  flex: 1, margin: 0,
                  fontFamily: k.fontDisplay, fontSize: 19, lineHeight: 1.5,
                  color: k.text, fontWeight: 400,
                }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 20,
                    background: k.surfaceHi, border: `1px solid ${k.accentSoft}`,
                    flexShrink: 0, position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 4px, ${k.line} 4px 5px)`,
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontFamily: k.fontMono, fontSize: 7, letterSpacing: '0.15em',
                      color: k.accent, textTransform: 'uppercase',
                    }}>foto</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: k.fontBody, fontSize: 13, color: k.text, fontWeight: 500 }}>{t.name}</div>
                    <div style={{ fontFamily: k.fontMono, fontSize: 10, color: k.textMute, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 20, fontFamily: k.fontMono, fontSize: 10,
            color: k.textMute, letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            ⚠ Depoimentos a serem capturados antes da publicação — nome, foto e autorização por escrito.
          </div>
        </div>
      </section>

      {/* ──────────── OBJEÇÕES (oculto em lean — FAQ + Garantia já cobrem) ──────────── */}
      {!lean && (<>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}` }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box' }}>
          <SectionNumber x="05" total="06" k={k} />
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500,
            lineHeight: 1.05, letterSpacing: '-0.02em', margin: '32px 0 56px',
            color: k.text, maxWidth: 760,
          }}>
            "Mas e se...?" <span style={{ color: k.accent, fontStyle: 'italic' }}>Três dúvidas honestas, três respostas honestas.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: k.line }}>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{ background: k.bg2, padding: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <MonoLabel color={k.accent}>Objeção 0{i + 1}</MonoLabel>
                <div style={{
                  fontFamily: k.fontDisplay, fontSize: 30, color: k.text,
                  fontWeight: 500, lineHeight: 1.2, fontStyle: 'italic',
                }}>{o.q}</div>
                <div style={{ width: 32, height: 1, background: k.accent }} />
                <p style={{
                  margin: 0, fontFamily: k.fontBody, fontSize: 15,
                  color: k.textDim, lineHeight: 1.65,
                }}>{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── MID CTA 3 — após objeções ──────────── */}
      <MidCTA
        k={k}
        variant="band"
        eyebrow="Resolveu a dúvida?"
        title={<>Vamos conversar. <span style={{ color: k.accent, fontStyle: 'italic' }}>Você explica seu caso</span>, eu te digo o que dá pra fazer.</>}
        ctaText={ctaTxt}
      />
      </>)}


      {/* ──────────── FAQ ──────────── */}
      <section id="faq" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}` }}>
        <div style={{ ...wrap, width: '100%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 96, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 80 }}>
            <SectionNumber x="06" total="06" k={k} />
            <h2 style={{
              fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500,
              lineHeight: 1.05, letterSpacing: '-0.02em', margin: '32px 0 24px',
              color: k.text,
            }}>
              Perguntas <span style={{ color: k.accent, fontStyle: 'italic' }}>antes da conversa.</span>
            </h2>
            <p style={{
              margin: 0, fontFamily: k.fontBody, fontSize: 15, color: k.textDim, lineHeight: 1.7, maxWidth: 320,
            }}>
              Se a sua dúvida não estiver aqui, traga ela na primeira conversa. É exatamente pra isso que ela serve.
            </p>
          </div>
          <div>
            {FAQS.map((f, i) => <FAQItem key={i} idx={i} q={f.q} a={f.a} k={k} />)}
            <div style={{ borderTop: `1px solid ${k.line}` }} />
          </div>
        </div>
      </section>

      {/* ──────────── CTA FINAL + P.S. ──────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: `${sectionPy}px 0`, position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse at 50% 50%, ${k.accentSoft}, transparent 60%)`,
        }} />
        <div style={{ ...wrap, position: 'relative', textAlign: 'center' }}>
          <MonoLabel color={k.accent}>O primeiro passo</MonoLabel>
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: 80, fontWeight: 500, lineHeight: 1.0,
            letterSpacing: '-0.025em', margin: '32px auto 28px', maxWidth: 920,
            color: k.text, textWrap: 'balance',
          }}>
            Seu inventário não vai <span style={{ color: k.accent, fontStyle: 'italic' }}>se resolver sozinho.</span>
            <br />
            Mas pode parar de ser um peso.
          </h2>
          <p style={{
            margin: '0 auto 48px', maxWidth: 580, fontFamily: k.fontBody, fontSize: 18,
            color: k.textDim, lineHeight: 1.6,
          }}>
            Uma conversa. Sem custo, sem compromisso. Só você, o Dr. Anderson e um plano claro pros próximos passos.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <GoldButton k={k} size="lg">{ctaTxt}</GoldButton>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'center', gap: 32, color: k.textMute,
            fontFamily: k.fontMono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <span>· Sem compromisso</span>
            <span>· {oab === 'literal' ? 'Resposta no mesmo dia' : 'Resposta rápida'}</span>
            <span>· Atendimento direto com o advogado</span>
          </div>

          {/* P.S. (oculto em lean) */}
          {!lean && (
          <div style={{
            maxWidth: 760, margin: '96px auto 0', padding: '40px 48px',
            border: `1px solid ${k.line}`, textAlign: 'left',
            background: k.surface,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 18 }}>
              <span style={{
                fontFamily: k.fontDisplay, fontStyle: 'italic',
                fontSize: 28, color: k.accent, fontWeight: 500,
              }}>P.S.</span>
              <MonoLabel color={k.textMute}>Uma última nota</MonoLabel>
            </div>
            <p style={{
              margin: 0, fontFamily: k.fontDisplay, fontStyle: 'italic',
              fontSize: 21, color: k.text, lineHeight: 1.5, fontWeight: 400,
            }}>
              Se o inventário da sua família está parado há meses — ou anos — o problema provavelmente não é o seu caso. É a falta de alguém conduzindo. {oab === 'literal'
                ? <>São 15 anos, mais de 1.500 atendimentos e 93% de resultados favoráveis dizendo que dá pra destravar.</>
                : <>São anos de experiência e um histórico consistente dizendo que dá pra destravar.</>} A primeira conversa é de graça e não te compromete com nada. O único jeito de continuar parado é não dar o primeiro passo.
            </p>
          </div>
          )}
        </div>
      </section>

      {/* ──────────── INSTAGRAM ──────────── */}
      <section style={{
        padding: `${k.sectionPy}px 0 ${k.sectionPy - 16}px`,
        background: k.bg2, borderTop: `1px solid ${k.line}`, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse at 20% 0%, ${k.accentSoft}, transparent 55%)`,
        }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48, marginBottom: 56 }}>
            <div style={{ maxWidth: 720 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                {/* IG glyph (monochrome, accent) */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={k.accent} strokeWidth="1.5" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill={k.accent} stroke="none" />
                </svg>
                <span style={{
                  fontFamily: k.fontMono, fontSize: 11, color: k.accent,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>@axc.advocacia · Instagram</span>
              </div>
              <h2 style={{
                fontFamily: k.fontDisplay, fontSize: k.h2, fontWeight: 500, lineHeight: 1.05,
                letterSpacing: '-0.02em', margin: 0, color: k.text, textWrap: 'balance',
              }}>
                Conteúdo sobre <span style={{ color: k.accent, fontStyle: 'italic' }}>inventário e sucessões</span>, em linguagem que dá pra entender.
              </h2>
            </div>
            <a href="https://www.instagram.com/axc.advocacia/" target="_blank" rel="noopener noreferrer" style={{
              flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '14px 22px', border: `1px solid ${k.lineHi}`, color: k.text,
              textDecoration: 'none', fontFamily: k.fontBody, fontSize: 13, fontWeight: 500,
              letterSpacing: '0.02em',
            }}>
              <span>Seguir no Instagram</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9L9 3M5 3h4v4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Feed real via Behold.so — substituir BEHOLD_FEED_ID pelo ID gerado no painel */}
          <behold-widget feed-id="BEHOLD_FEED_ID" style={{ display: 'block', marginBottom: 32 }} />

          <div style={{
            marginTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingTop: 24, borderTop: `1px solid ${k.line}`,
          }}>
            <MonoLabel color={k.textMute}>
              Conteúdo institucional · sem captação de clientela · em conformidade com a OAB
            </MonoLabel>
          </div>
        </div>
      </section>

      {/* ──────────── FOOTER ──────────── */}
      <footer style={{ padding: '64px 0 36px', borderTop: `1px solid ${k.line}`, background: k.bg }}>
        <div style={{ ...wrap }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 56, marginBottom: 56 }}>
            <div>
              <Wordmark k={k} size="lg" />
              <p style={{
                marginTop: 20, fontFamily: k.fontBody, fontSize: 14,
                color: k.textDim, lineHeight: 1.6, maxWidth: 320,
              }}>
                Advocacia especializada em inventário, partilha de bens e direito sucessório. Atendimento direto com o Dr. Anderson Xavier de Campos.
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
                <li>Inventário judicial</li>
                <li>Inventário extrajudicial</li>
                <li>Partilha de bens</li>
                <li>Sucessões</li>
              </ul>
            </div>
            <div>
              <MonoLabel color={k.textMute}>Institucional</MonoLabel>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 10, fontFamily: k.fontBody, fontSize: 14, color: k.textDim }}>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidade</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Termos de uso</a></li>
                <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LGPD</a></li>
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
            <div style={{ textWrap: 'balance', textAlign: 'center', maxWidth: 620 }}>
              Conteúdo institucional · sem captação de clientela · em conformidade com o Provimento 205/2021 da OAB
            </div>
            <div>Dr. Anderson X. de Campos · OAB / SP</div>
          </div>
        </div>
      </footer>
    </>
  );
}

window.LandingDesktop = LandingDesktop;
