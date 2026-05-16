// landing-mobile.jsx — mobile (390-width) layout

function LandingMobile({ k, hl, ctaTxt, ctaShort, numbers, oab, lean }) {
  const [navOpen, setNavOpen] = React.useState(false);
  const sectionPy = k.density === 'compact' ? 56 : 76;
  const wrap = { padding: '0 22px' };

  return (
    <>
      {/* status bar (faux) */}
      <div style={{
        height: 44, display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 28px',
        fontFamily: '-apple-system, system-ui', fontSize: 15, fontWeight: 600,
        color: k.text, background: k.bg,
      }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <svg width="17" height="11" viewBox="0 0 17 11"><rect x="0" y="6.5" width="3" height="4.5" rx=".5" fill={k.text}/><rect x="4.5" y="4" width="3" height="7" rx=".5" fill={k.text}/><rect x="9" y="1.5" width="3" height="9.5" rx=".5" fill={k.text}/><rect x="13.5" y="-0.5" width="3" height="11.5" rx=".5" fill={k.text}/></svg>
          <svg width="24" height="11" viewBox="0 0 24 11"><rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke={k.text} strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="17" height="7" rx="1.5" fill={k.text}/></svg>
        </span>
      </div>

      {/* nav */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 30, padding: '14px 22px',
        background: 'rgba(14,11,7,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${k.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Wordmark k={k} size="sm" />
        <button onClick={() => setNavOpen(o => !o)} style={{
          background: 'transparent', border: `1px solid ${k.lineHi}`,
          width: 40, height: 40, color: k.text, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: 0,
        }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            {navOpen
              ? <path d="M2 2l12 8M14 2L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              : <><path d="M0 2h16M0 6h16M0 10h16" stroke="currentColor" strokeWidth="1.4" /></>}
          </svg>
        </button>
      </header>

      {navOpen && (
        <div style={{
          position: 'fixed', top: 100, left: 0, right: 0, zIndex: 25,
          background: k.bg2, borderBottom: `1px solid ${k.line}`,
          padding: '20px 22px 24px',
        }}>
          {[['A dor', '#dor'], ['Solução', '#solucao'], ['Resultados', '#resultados'], ['Perguntas', '#faq']].map(([t, h]) => (
            <a key={t} href={h} onClick={() => setNavOpen(false)} style={{
              display: 'block', padding: '14px 0', color: k.text,
              fontFamily: k.fontDisplay, fontSize: 22, textDecoration: 'none',
              borderBottom: `1px solid ${k.line}`,
            }}>{t}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ padding: `36px 0 56px` }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <span style={{ width: 36, height: 1, background: k.accent }} />
            <MonoLabel color={k.accent} style={{ fontSize: 10 }}>{hl.eyebrow}</MonoLabel>
          </div>
          <h1 style={{
            fontFamily: k.heroSerif ? k.fontDisplay : k.fontBody,
            fontWeight: k.heroSerif ? 500 : 700,
            fontSize: k.heroSerif ? 50 : 42,
            lineHeight: k.heroSerif ? 1.02 : 1.05,
            letterSpacing: k.heroSerif ? '-0.02em' : '-0.03em',
            margin: 0, color: k.text,
          }}>
            {hl.title.map((line, i) => line === null
              ? <br key={i} />
              : <span key={i} style={{ display: 'block', ...(i === hl.title.length - 1 ? { color: k.accent, fontStyle: k.heroSerif ? 'italic' : 'normal' } : {}) }}>{line}</span>)}
          </h1>
          <p style={{
            marginTop: 28, fontFamily: k.fontBody, fontSize: 16,
            color: k.textDim, lineHeight: 1.6,
          }}>{hl.sub}</p>

          {/* photo */}
          <div style={{ marginTop: 36 }}>
            <PhotoPlaceholder
              k={k}
              ratio="4 / 5"
              label={<>
                [ FOTO · DR. ANDERSON ]<br />
                retrato 4:5 · escritório<br />
                inserir antes da publicação
              </>}
            />
            <div style={{
              marginTop: 12, display: 'flex', justifyContent: 'space-between',
              fontFamily: k.fontMono, fontSize: 9, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: k.textMute,
            }}>
              <span>Dr. Anderson X. de Campos</span>
              <span>OAB / SP</span>
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <GoldButton k={k} fullWidth size="lg">{ctaTxt}</GoldButton>
            <GoldButton k={k} fullWidth secondary>Como funciona o atendimento</GoldButton>
          </div>
          <div style={{
            marginTop: 18, display: 'flex', flexDirection: 'column', gap: 8,
            color: k.textDim, fontFamily: k.fontMono, fontSize: 9,
            letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            <span>· Conversa inicial sem compromisso</span>
            <span>· Atendimento direto com o advogado</span>
            <span>· {oab === 'literal' ? 'Resposta no mesmo dia' : 'Resposta rápida'}</span>
          </div>

          {/* mini-stats strip */}
          <div style={{
            marginTop: 40, paddingTop: 24, borderTop: `1px solid ${k.line}`,
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            {numbers.map((n, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16 }}>
                <span style={{
                  fontFamily: k.fontMono, fontSize: 10, color: k.textMute,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  maxWidth: 220, textAlign: 'left',
                }}>{n.l}</span>
                <span style={{ fontFamily: k.fontDisplay, fontSize: 22, color: k.accent, fontWeight: 500 }}>{n.n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOR */}
      <section id="dor" style={{ padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}` }}>
        <div style={wrap}>
          <SectionNumber x="01" total="06" k={k} />
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '24px 0 18px', color: k.text,
          }}>
            Se você é herdeiro de um inventário <span style={{ color: k.accent, fontStyle: 'italic' }}>que não anda</span>, provavelmente já passou por isso.
          </h2>
          <p style={{
            fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.7, margin: 0,
          }}>
            Perder alguém da família já é difícil. Lidar com a partilha dos bens não devia ser ainda pior.
          </p>
          <ol style={{ margin: '32px 0 0', padding: 0, listStyle: 'none' }}>
            {PAIN_ITEMS.map((p, i) => (
              <li key={i} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                padding: '18px 0', borderTop: `1px solid ${k.line}`,
                ...(i === PAIN_ITEMS.length - 1 ? { borderBottom: `1px solid ${k.line}` } : {}),
              }}>
                <span style={{
                  fontFamily: k.fontMono, fontSize: 10, color: k.accent,
                  letterSpacing: '0.15em', paddingTop: 4, minWidth: 24,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{
                  fontFamily: k.fontDisplay, fontSize: 18, lineHeight: 1.4,
                  color: k.text, fontWeight: 400,
                }}>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* MID CTA 1 — após a dor */}
      <MidCTAMobile
        k={k}
        eyebrow="Pare de remoer"
        title={<>Se você se reconheceu em três ou mais itens, <span style={{ color: k.accent, fontStyle: 'italic' }}>está na hora.</span></>}
        ctaText={ctaTxt}
      />

      {/* SOLUÇÃO */}
      <section id="solucao" style={{ padding: `${sectionPy}px 0` }}>
        <div style={wrap}>
          <SectionNumber x="02" total="06" k={k} />
          {/* escritório photo */}
          <div style={{ marginTop: 20, marginBottom: 32 }}>
            <PhotoPlaceholder
              k={k}
              ratio="16 / 10"
              label={<>
                [ FOTO · ESCRITÓRIO AXC ]<br />
                wide 16:10 · Louveira / SP<br />
                inserir antes da publicação
              </>}
            />
          </div>
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '24px 0 28px', color: k.text,
          }}>
            Inventário travado <span style={{ color: k.accent, fontStyle: 'italic' }}>quase sempre</span> tem o mesmo motivo: falta de condução firme.
          </h2>
          <div style={{
            fontFamily: k.fontBody, fontSize: 15, lineHeight: 1.65,
            color: k.textDim, display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <p style={{ margin: 0 }}>
              Documento que não foi pedido na hora certa. Prazo perdido. Etapa que ficou esperando alguém tomar a frente.
            </p>
            <p style={{ margin: 0 }}>
              O jeito da AXC é o contrário disso. O Dr. Anderson assume a condução do caso do começo ao fim.
            </p>
            <p style={{ margin: 0, color: k.text }}>
              {oab === 'literal'
                ? <span><b style={{ color: k.accent }}>93%</b> dos casos conduzidos pelo escritório terminam com resultado favorável.</span>
                : <span>Um <b style={{ color: k.accent }}>histórico consistente</b> de resultados favoráveis aos clientes.</span>}
            </p>
          </div>

          <div style={{
            marginTop: 36, border: `1px solid ${k.line}`, background: k.surface,
            padding: 22, display: 'flex', flexDirection: 'column', gap: 18,
          }}>
            <MonoLabel color={k.accent}>Como conduzimos</MonoLabel>
            {[
              ['01', 'Diagnóstico', 'Conversa inicial sem compromisso. O Dr. Anderson entende seu caso e te explica os próximos passos.'],
              ['02', 'Levantamento', 'Documentação revisada, certidões pedidas, ITCMD apurado. Nada fica esperando.'],
              ['03', 'Condução ativa', 'Cada etapa conduzida pessoalmente, com prazos monitorados. Sem juridiquês.'],
            ].map(([n, t, d], i) => (
              <div key={n} style={{
                display: 'grid', gridTemplateColumns: '32px 1fr', gap: 14,
                paddingBottom: i < 2 ? 16 : 0, borderBottom: i < 2 ? `1px solid ${k.line}` : 'none',
              }}>
                <div style={{ fontFamily: k.fontDisplay, fontSize: 22, color: k.accent, fontWeight: 500, lineHeight: 1 }}>{n}</div>
                <div>
                  <div style={{ fontFamily: k.fontDisplay, fontSize: 18, color: k.text, fontWeight: 500, marginBottom: 4 }}>{t}</div>
                  <div style={{ fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.55 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section style={{ padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}`, borderBottom: `1px solid ${k.line}` }}>
        <div style={wrap}>
          <SectionNumber x="03" total="06" k={k} />
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '24px 0 36px', color: k.text,
          }}>
            O que muda <span style={{ color: k.accent, fontStyle: 'italic' }}>na prática</span> quando você decide destravar.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: k.line, border: `1px solid ${k.line}` }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ background: k.bg2, padding: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{
                  fontFamily: k.fontMono, fontSize: 9, color: k.accent,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                }}>0{i + 1}</span>
                <div style={{ fontFamily: k.fontDisplay, fontSize: 19, color: k.text, fontWeight: 500, lineHeight: 1.25 }}>{b.k}</div>
                <div style={{ fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.6 }}>{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA 2 — após benefícios (oculto em lean) */}
      {!lean && (
        <MidCTAMobile
          k={k}
          eyebrow="Pronto pra dar o primeiro passo?"
          title={<>A primeira conversa é <span style={{ color: k.accent, fontStyle: 'italic' }}>sem custo e sem compromisso.</span></>}
          ctaText={ctaTxt}
          secondary="· Direto com o advogado"
        />
      )}

      {/* RESULTADOS */}
      <section id="resultados" style={{ padding: `${sectionPy}px 0` }}>
        <div style={wrap}>
          <SectionNumber x="04" total="06" k={k} />
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '24px 0 18px', color: k.text,
          }}>
            {oab === 'literal'
              ? <>Mais de uma década, milhares de atendimentos, <span style={{ color: k.accent, fontStyle: 'italic' }}>resultados que falam.</span></>
              : <>Mais de uma década dedicada a famílias <span style={{ color: k.accent, fontStyle: 'italic' }}>como a sua.</span></>}
          </h2>
          <p style={{
            fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.65, margin: 0,
          }}>
            Cada inventário tem suas particularidades. O que se repete é o método: condução firme, comunicação clara, disposição pra resolver.
          </p>

          {/* numbers stacked */}
          <div style={{ marginTop: 32, border: `1px solid ${k.line}`, background: k.surface }}>
            {numbers.map((n, i) => (
              <div key={i} style={{
                padding: '22px 22px', borderTop: i ? `1px solid ${k.line}` : 'none',
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16,
              }}>
                <div style={{ fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.5, maxWidth: 220 }}>{n.l}</div>
                <div style={{ fontFamily: k.fontDisplay, fontSize: 42, color: k.accent, fontWeight: 500, lineHeight: 1 }}>{n.n}</div>
              </div>
            ))}
          </div>

          {/* doc/handshake photos (oculto em lean) */}
          {!lean && (
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <PhotoPlaceholder
                k={k}
                ratio="16 / 9"
                label={<>
                  [ FOTO · DOCUMENTOS / ASSINATURA ]<br />
                  close-up · caneta-tinteiro
                </>}
              />
              <PhotoPlaceholder
                k={k}
                ratio="16 / 9"
                label={<>
                  [ FOTO · ATENDIMENTO ]<br />
                  Dr. Anderson com cliente
                </>}
              />
            </div>
          )}

          {/* testimonials stacked */}
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                padding: 22, border: `1px solid ${k.line}`, background: k.bg,
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: k.fontDisplay, fontSize: 40, lineHeight: 0.7,
                    color: k.accent, fontStyle: 'italic',
                  }}>“</span>
                  <span style={{ fontFamily: k.fontMono, fontSize: 9, color: k.textMute, letterSpacing: '0.2em' }}>{t.idx}</span>
                </div>
                <p style={{
                  margin: 0, fontFamily: k.fontDisplay, fontSize: 16,
                  lineHeight: 1.5, color: k.text,
                }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 17,
                    background: k.surfaceHi, border: `1px solid ${k.accentSoft}`,
                    position: 'relative', overflow: 'hidden', flexShrink: 0,
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `repeating-linear-gradient(135deg, transparent 0 4px, ${k.line} 4px 5px)`,
                    }} />
                    <div style={{
                      position: 'absolute', inset: 0, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontFamily: k.fontMono, fontSize: 6, letterSpacing: '0.15em',
                      color: k.accent, textTransform: 'uppercase',
                    }}>foto</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: k.fontBody, fontSize: 12, color: k.text, fontWeight: 500 }}>{t.name}</div>
                    <div style={{ fontFamily: k.fontMono, fontSize: 9, color: k.textMute, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>{t.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 16, fontFamily: k.fontMono, fontSize: 9,
            color: k.textMute, letterSpacing: '0.16em', textTransform: 'uppercase', lineHeight: 1.7,
          }}>
            ⚠ Depoimentos a serem capturados antes da publicação — nome, foto e autorização por escrito.
          </div>
        </div>
      </section>

      {/* OBJEÇÕES (oculto em lean) */}
      {!lean && (<>
      <section style={{ padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}` }}>
        <div style={wrap}>
          <SectionNumber x="05" total="06" k={k} />
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '24px 0 32px', color: k.text,
          }}>
            "Mas e se...?" <span style={{ color: k.accent, fontStyle: 'italic' }}>Três dúvidas honestas.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {OBJECTIONS.map((o, i) => (
              <div key={i} style={{
                background: k.bg, padding: 22, border: `1px solid ${k.line}`,
                display: 'flex', flexDirection: 'column', gap: 14,
              }}>
                <MonoLabel color={k.accent} style={{ fontSize: 9 }}>Objeção 0{i + 1}</MonoLabel>
                <div style={{
                  fontFamily: k.fontDisplay, fontSize: 22, color: k.text,
                  fontWeight: 500, lineHeight: 1.25, fontStyle: 'italic',
                }}>{o.q}</div>
                <div style={{ width: 28, height: 1, background: k.accent }} />
                <p style={{
                  margin: 0, fontFamily: k.fontBody, fontSize: 13,
                  color: k.textDim, lineHeight: 1.65,
                }}>{o.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA 3 — após objeções */}
      <MidCTAMobile
        k={k}
        eyebrow="Resolveu a dúvida?"
        title={<>Vamos conversar. <span style={{ color: k.accent, fontStyle: 'italic' }}>Você explica seu caso</span>, eu te digo o que dá pra fazer.</>}
        ctaText={ctaTxt}
      />
      </>)}

      {/* GARANTIA + URGÊNCIA */}
      <section style={{ padding: `${sectionPy}px 0` }}>
        <div style={{ ...wrap, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: k.bg, padding: 28, border: `1px solid ${k.line}`, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 36, height: 36, border: `1.5px solid ${k.accent}`, borderRadius: 18,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 1L2 4v6c0 4.5 3 7.5 8 9 5-1.5 8-4.5 8-9V4l-8-3z" stroke={k.accent} strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M6.5 10l2.5 2.5 4.5-5" stroke={k.accent} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <MonoLabel color={k.accent}>Garantia — risco zero</MonoLabel>
            </div>
            <h3 style={{
              fontFamily: k.fontDisplay, fontSize: 26, fontWeight: 500,
              lineHeight: 1.2, margin: 0, color: k.text,
            }}>
              A primeira conversa é <span style={{ color: k.accent, fontStyle: 'italic' }}>100% sem compromisso.</span>
            </h3>
            <p style={{ margin: 0, fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.65 }}>
              Você explica seu caso, ouve a orientação do Dr. Anderson sobre os próximos passos e decide com calma — sem nenhuma obrigação de seguir com o escritório.
            </p>
          </div>

          <div style={{ background: k.surface, padding: 28, border: `1px solid ${k.line}`, display: 'flex', flexDirection: 'column', gap: 14 }}>
            <MonoLabel color={k.accent}>O custo de esperar</MonoLabel>
            <h3 style={{
              fontFamily: k.fontDisplay, fontSize: 22, fontWeight: 500,
              lineHeight: 1.25, margin: 0, color: k.text,
            }}>
              Cada mês com o inventário parado é <span style={{ color: k.accent, fontStyle: 'italic' }}>mais imposto acumulado</span>, mais documento vencendo e mais tempo sem poder usar o que é seu.
            </h3>
            <p style={{ margin: 0, fontFamily: k.fontBody, fontSize: 13, color: k.textDim, lineHeight: 1.65 }}>
              A burocracia não espera. Quanto antes o processo for conduzido, menos ela pesa.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: `${sectionPy}px 0`, background: k.bg2, borderTop: `1px solid ${k.line}` }}>
        <div style={wrap}>
          <SectionNumber x="06" total="06" k={k} />
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500,
            lineHeight: 1.08, letterSpacing: '-0.02em', margin: '24px 0 12px', color: k.text,
          }}>
            Perguntas <span style={{ color: k.accent, fontStyle: 'italic' }}>antes da conversa.</span>
          </h2>
          <p style={{
            fontFamily: k.fontBody, fontSize: 14, color: k.textDim, lineHeight: 1.65, margin: '0 0 24px',
          }}>
            Se a sua dúvida não estiver aqui, traga ela na primeira conversa.
          </p>
          <div>
            {FAQS.map((f, i) => <FAQItemMobile key={i} idx={i} q={f.q} a={f.a} k={k} />)}
            <div style={{ borderTop: `1px solid ${k.line}` }} />
          </div>
        </div>
      </section>

      {/* CTA FINAL + P.S. */}
      <section style={{ padding: `${sectionPy}px 0`, position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse at 50% 40%, ${k.accentSoft}, transparent 60%)`,
        }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <MonoLabel color={k.accent}>O primeiro passo</MonoLabel>
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: 46, fontWeight: 500, lineHeight: 1.0,
            letterSpacing: '-0.025em', margin: '20px 0 20px', color: k.text,
          }}>
            Seu inventário não vai <span style={{ color: k.accent, fontStyle: 'italic' }}>se resolver sozinho.</span>
          </h2>
          <p style={{
            margin: '0 0 32px', fontFamily: k.fontBody, fontSize: 16,
            color: k.textDim, lineHeight: 1.6,
          }}>
            Uma conversa. Sem custo, sem compromisso. Só você, o Dr. Anderson e um plano claro pros próximos passos.
          </p>
          <GoldButton k={k} fullWidth size="lg">{ctaTxt}</GoldButton>
          <div style={{
            marginTop: 20, display: 'flex', flexDirection: 'column', gap: 8,
            color: k.textMute, fontFamily: k.fontMono, fontSize: 9,
            letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>
            <span>· Sem compromisso  ·  {oab === 'literal' ? 'Resposta no mesmo dia' : 'Resposta rápida'}</span>
            <span>· Atendimento direto com o advogado</span>
          </div>

          {!lean && (
          <div style={{
            marginTop: 48, padding: 24, border: `1px solid ${k.line}`, background: k.surface,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 14 }}>
              <span style={{
                fontFamily: k.fontDisplay, fontStyle: 'italic',
                fontSize: 22, color: k.accent, fontWeight: 500,
              }}>P.S.</span>
              <MonoLabel color={k.textMute} style={{ fontSize: 9 }}>Uma última nota</MonoLabel>
            </div>
            <p style={{
              margin: 0, fontFamily: k.fontDisplay, fontStyle: 'italic',
              fontSize: 16, color: k.text, lineHeight: 1.55,
            }}>
              Se o inventário da sua família está parado há meses — ou anos — o problema provavelmente não é o seu caso. É a falta de alguém conduzindo. A primeira conversa é de graça. O único jeito de continuar parado é não dar o primeiro passo.
            </p>
          </div>
          )}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section style={{
        padding: `${sectionPy}px 0`, background: k.bg2,
        borderTop: `1px solid ${k.line}`, position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none',
          backgroundImage: `radial-gradient(ellipse at 0% 0%, ${k.accentSoft}, transparent 55%)`,
        }} />
        <div style={{ ...wrap, position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={k.accent} strokeWidth="1.5" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1" fill={k.accent} stroke="none" />
            </svg>
            <span style={{
              fontFamily: k.fontMono, fontSize: 10, color: k.accent,
              letterSpacing: '0.2em', textTransform: 'uppercase',
            }}>@axc.advocacia</span>
          </div>
          <h2 style={{
            fontFamily: k.fontDisplay, fontSize: k.h2m, fontWeight: 500, lineHeight: 1.08,
            letterSpacing: '-0.02em', margin: '0 0 28px', color: k.text,
          }}>
            Conteúdo sobre <span style={{ color: k.accent, fontStyle: 'italic' }}>inventário e sucessões</span>, em linguagem clara.
          </h2>
        </div>

        {/* auto-scrolling marquee (mobile) */}
        <IGMarquee k={k} cardWidth={200} gap={12} speed={40} />

        <div style={{ ...wrap, marginTop: 24 }}>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            padding: '16px 22px', border: `1px solid ${k.lineHi}`, color: k.text,
            textDecoration: 'none', fontFamily: k.fontBody, fontSize: 14, fontWeight: 500,
          }}>
            <span>Seguir no Instagram</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 9L9 3M5 3h4v4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '36px 0 28px', borderTop: `1px solid ${k.line}`, background: k.bg }}>
        <div style={wrap}>
          <Wordmark k={k} size="md" />
          <p style={{
            marginTop: 14, fontFamily: k.fontBody, fontSize: 13,
            color: k.textDim, lineHeight: 1.6,
          }}>
            Inventário, partilha de bens e direito sucessório.
          </p>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8, fontFamily: k.fontBody, fontSize: 13, color: k.text }}>
            <span>WhatsApp · direto com o advogado</span>
            <span>Atendimento online · Brasil</span>
            <span>Presencial · Louveira / SP</span>
          </div>
          <div style={{
            marginTop: 28, paddingTop: 20, borderTop: `1px solid ${k.line}`,
            display: 'flex', flexDirection: 'column', gap: 8,
            fontFamily: k.fontMono, fontSize: 9, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: k.textMute,
          }}>
            <div>© AXC Advocacia · Dr. Anderson X. de Campos · OAB / SP</div>
            <div>Conteúdo institucional · em conformidade com o Provimento 205/2021 da OAB</div>
            <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
              <a href="#" style={{ color: 'inherit' }}>Privacidade</a>
              <a href="#" style={{ color: 'inherit' }}>LGPD</a>
              <a href="#" style={{ color: 'inherit' }}>Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function FAQItemMobile({ q, a, idx, k }) {
  const [open, setOpen] = React.useState(idx === 0);
  return (
    <div style={{ borderTop: `1px solid ${k.line}` }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '18px 0',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: k.text, textAlign: 'left',
          display: 'flex', alignItems: 'flex-start', gap: 14,
          fontFamily: k.fontDisplay,
        }}
      >
        <span style={{
          fontFamily: k.fontMono, fontSize: 9, color: k.accent,
          letterSpacing: '0.15em', paddingTop: 6, minWidth: 20,
        }}>{String(idx + 1).padStart(2, '0')}</span>
        <span style={{ flex: 1, fontSize: 16, lineHeight: 1.35, fontWeight: 500 }}>{q}</span>
        <span style={{
          width: 24, height: 24, flexShrink: 0,
          border: `1px solid ${k.lineHi}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: k.accent, transition: 'transform .3s',
          transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>
          <svg width="10" height="10" viewBox="0 0 12 12"><path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </span>
      </button>
      {open && (
        <div style={{
          paddingLeft: 34, paddingRight: 32, paddingBottom: 18,
          color: k.textDim, fontFamily: k.fontBody, fontSize: 13, lineHeight: 1.65,
        }}>{a}</div>
      )}
    </div>
  );
}

window.LandingMobile = LandingMobile;
