// Cria uma linha do tempo (sequência de animações) com GSAP
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two', // O elemento que dispara a animação (Seção 2)
        start: '0% 80%', // Começa quando o topo da seção 2 atinge 80% da tela
        end: '40% 50%',  // Termina quando 40% da seção 2 atinge 50% da tela
        scrub: 3,        // Suaviza a animação (demora 3s para "alcançar" o scroll)
        markers: false,  // Remove as linhas de marcação da tela
    }
});

// Animação da Lata descendo da seção 1 para a 2
tl.to('#lata-fanta', {
    y: '110vh',
    x: '-30vw', /* Move 30% para a esquerda (de 30% para 0%) */
}, 'laranja')
.to('#laranja-cortada', {
    y: '150vh', /* Ajustado para considerar a posição inicial */
    x: '-9vw', /* De 32% para 23% = -9% */
}, 'laranja');
// Animação das outras laranjas e folhas girando e se movendo
tl.to('#varias-laranjas', {
    scale: 0.75, /* Substitui width para melhor performance */
    y: '125vh',
    x: '20vw', /* De 30% right para 10% right = moveu 20% para a direita */
    rotation: '360deg',
}, 'laranja')
tl.to('#folha', {
    y: '85vh',
    rotation: '530deg',
    x: '80vw', /* De 0% para 80% */
}, 'laranja')
tl.to('#folha2', {
    y: '23vh',
    rotation: '530deg',
    x: '-5vw', /* De 80% para 75% */
}, 'laranja')

// Segunda linha do tempo para a transição da seção 2 para a 3
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.tre', // Dispara quando chega na seção 3
        start: '0% 80%',
        end: '40% 50%',
        scrub: 0.8,
        markers: false,
    }
});
// .from() faz o elemento vir DE algum lugar (aparecer)
tl2.from('.limao', {
    top: '10%', /* Começa mais para baixo (atrás da garrafa) */
    opacity: 0, /* Começa invisível */
    rotate: '-90deg', /* Começa girado */
}, 'limão')
tl2.from('.limao2', {
    top: '10%', /* Começa mais para baixo (atrás da garrafa) */
    opacity: 0, /* Começa invisível */
    rotate: '-90deg', /* Começa girado */
}, 'limão')
tl2.from('#pepsi', {
    top: '10%', /* Começa mais para baixo (atrás da garrafa) */
    opacity: 0, /* Começa invisível */
    rotate: '-90deg', /* Começa girado */
}, 'limão');
tl2.from('#cocacola', {
    top: '10%', /* Começa mais para baixo (atrás da garrafa) */
    opacity: 0, /* Começa invisível */
    rotate: '-90deg', /* Começa girado */
}, 'limão')
// .to() move a lata de Fanta que já existe para o centro do card
tl2.to('#lata-fanta', {
    width: '35vw', /* Ajustado para 29vw para igualar as outras latas (Coca/Pepsi) */
    x: '2.5vw',    /* Cálculo exato: 50vw(centro) - 30vw(origem) - 14.5vw(metade) */
    y: '199vh',    /* Ajustado para o centro exato da seção 3 (100+110+50) */
    zIndex: 24,     /* Garantindo que fique acima dos outros elementos */
}, 'limão')
tl2.to('#laranja-cortada', {
    width: '18%',
    x: '9vw',      /* Ajuste fino para centralizar a laranja com a lata */
    y: '199vh',    /* Acompanhando a lata no centro */
}, 'limão')