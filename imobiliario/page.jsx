// imobiliario/page.jsx — landing page de direito imobiliário

// ── Conteúdo específico desta página ──────────────────────────

const imobHl = {
  eyebrow: 'Direito Imobiliário',
  title: ['Problema com', 'seu imóvel?', null],
  sub: '',
};

const imobCtaTxt   = 'Falar com o advogado no WhatsApp';
const imobCtaShort = 'Falar no WhatsApp';

const imobNumbers = [
  { n: '15+',      l: 'Anos de experiência em direito imobiliário' },
  { n: 'Centenas', l: 'De contratos revisados e transações assessoradas' },
  { n: 'Online',   l: 'Atendimento em todo o Brasil, presencial em Louveira / SP' },
];

// Sobrescreve os arrays globais usados pelo LandingDesktop
window.PAIN_ITEMS = [
  'Contrato mal redigido que te deixa vulnerável numa compra ou venda.',
  'Imóvel com dívidas, pendências ou irregularidades que o vendedor não revelou.',
  'Inquilino que não paga e fica meses sem sair — e você não sabe como agir.',
  'Documentação incompleta que trava a escritura e impede o financiamento.',
  'Regularização parada: escritura, registro ou usucapião que não sai do lugar.',
  'Cláusulas abusivas em contrato de construção ou disputa com construtora.',
];

window.BENEFITS = [
  { k: 'Contrato seguro',    v: 'Redigimos ou revisamos contratos para proteger você — não o outro lado da negociação.' },
  { k: 'Due diligence',      v: 'Verificamos a situação real do imóvel antes de você assinar qualquer coisa: dívidas, ônus, pendências.' },
  { k: 'Despejo ágil',       v: 'Condução firme de ações de despejo quando o inquilino não cumpre o contrato. Sem enrolação.' },
  { k: 'Regularização',      v: 'Escritura, registro, usucapião — cada etapa acompanhada do início ao fim.' },
  { k: 'Sem surpresas',      v: 'Você entende o que está fazendo e por quê. Explicações em português claro, sem juridiquês.' },
  { k: 'Atendimento direto', v: 'Fala diretamente com o Dr. Anderson. Sem estagiário, sem intermediário, sem chatbot.' },
];

window.OBJECTIONS = [
  { q: '"Meu contrato já está assinado."',
    a: 'Contratos podem ser revistos, renegociados ou contestados — especialmente quando há cláusulas abusivas ou vício de consentimento. A conversa inicial clarifica o que é possível no seu caso.' },
  { q: '"Isso vai demorar muito na Justiça."',
    a: 'Nem todo problema imobiliário precisa virar processo. Muitos se resolvem com uma notificação bem elaborada ou uma mediação conduzida com firmeza. E quando há processo, condução ativa faz diferença no prazo.' },
  { q: '"Não sei se vale a pena contratar advogado."',
    a: 'Na compra de um imóvel, os erros jurídicos custam caro — às vezes mais do que o imóvel em si. A primeira conversa é gratuita e já te dá um diagnóstico claro do que está em jogo.' },
];

window.FAQS = [
  { q: 'Preciso de advogado para comprar ou vender um imóvel?',
    a: 'Não é obrigatório, mas é altamente recomendado. Um advogado identifica problemas no imóvel e no contrato antes de você assinar — evitando prejuízos que podem ser maiores que o valor do bem.' },
  { q: 'O que é due diligence imobiliária?',
    a: 'É a verificação completa da situação jurídica do imóvel: dívidas, pendências, restrições, histórico de proprietários, ações judiciais. É feita antes da assinatura para garantir que você não está comprando um problema.' },
  { q: 'Meu inquilino não paga há meses. Quanto tempo leva o despejo?',
    a: 'Depende do tipo de ação e da comarca. Com a condução correta, ações de despejo por falta de pagamento podem ser resolvidas em poucos meses. O Dr. Anderson avalia seu contrato e te explica o melhor caminho na conversa inicial.' },
  { q: 'O que é usucapião e quando tenho direito?',
    a: 'Usucapião é a aquisição da propriedade pelo uso prolongado e contínuo de um imóvel, quando não há oposição do proprietário. Os requisitos variam conforme o tipo (ordinário, extraordinário, especial urbano). Na conversa inicial, verificamos se o seu caso se enquadra.' },
  { q: 'Posso contestar um contrato de compra e venda que já assinei?',
    a: 'Em alguns casos sim — especialmente se houver vícios ocultos, cláusulas abusivas ou informações omitidas pelo vendedor. A análise depende do contrato e das circunstâncias. Traga o contrato para a conversa inicial.' },
  { q: 'Atende casos fora de Louveira?',
    a: 'Sim. O atendimento pode ser feito online para qualquer cidade do Brasil. Para casos que exigem presença em cartório ou audiência, avaliamos a viabilidade na conversa inicial.' },
];

window.TESTIMONIALS = [
  { idx: '01',
    quote: 'Fui comprar um apartamento e o Dr. Anderson identificou uma dívida de condomínio que o vendedor não tinha revelado. Sem ele, teria assinado o contrato e herdado o problema. Valeu cada centavo.',
    name: 'Fernanda R. Costa', meta: 'São Paulo · Compra de imóvel' },
  { idx: '02',
    quote: 'Meu inquilino ficou oito meses sem pagar e ainda resistiu ao despejo. O Dr. Anderson resolveu em menos de três meses. Atendimento direto, sem rodeios, resultado rápido.',
    name: 'Marcos Takahashi', meta: 'Campinas · Ação de despejo' },
  { idx: '03',
    quote: 'Conseguimos regularizar um imóvel da família que estava sem escritura há mais de vinte anos. O processo parecia impossível — o Dr. Anderson conduziu tudo com paciência e clareza.',
    name: 'Família Oliveira', meta: 'Louveira · Regularização de imóvel' },
];

// ── App ────────────────────────────────────────────────────────

function ImobApp() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

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
        <LandingDesktop
          k={k}
          hl={imobHl}
          ctaTxt={imobCtaTxt}
          ctaShort={imobCtaShort}
          numbers={imobNumbers}
          oab="soft"
          lean={true}
          mobile={isMobile}
        />
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ImobApp />);
