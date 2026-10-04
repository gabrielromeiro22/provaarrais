// Banco de questões — Simulados ARA-1 ao ARA-6 (Tenente Flávio / STARJETMCZ)
// Gabaritos extraídos dos PDFs originais

const TODAS_QUESTOES = [

// ===================== ARA-1 =====================
{sim:"ARA-1",num:1,tema:"Nomenclatura",
q:"Uma pessoa posicionada na popa de uma embarcação, de frente para a proa, terá à sua direita o bordo de:",
opts:["Boreste","Sotavento","Bombordo","Vante","Barlavento"],ans:0,
exp:"Quem está na popa olhando para a proa tem à direita o Boreste (BE) e à esquerda o Bombordo (BB). Macete: 'Bombordo = lado do coração = esquerdo = vermelho'."},

{sim:"ARA-1",num:2,tema:"Espias / Atracação",
q:"Os cabos (espias) passados do barco ao cais, partindo da proa e dirigindo-se para vante (frente) e partindo da popa e dirigindo-se para ré são chamados de:",
opts:["Lançantes","Amarras","Espringues","Traveses","Amarretas"],ans:0,
exp:"Lançantes são as espias que saem da proa em direção ao vante e da popa em direção ao ré, paralelamente ao costado do navio. Não confundir com espringues (que cruzam) ou través (perpendicular ao cais)."},

{sim:"ARA-1",num:3,tema:"Espias / Atracação",
q:"Para evitar as possíveis pancadas no costado contra o cais, podemos passar (pendurar) pela borda do barco que está atracado algumas peças macias de borracha, ou outro material, chamadas de:",
opts:["Aduchas","Boia de arinque","Boias de atracação","Defensas","Espias"],ans:3,
exp:"Defensas são peças de material macio (borracha, plástico, tecido) penduradas pelo costado da embarcação para protegê-la de atritos e impactos com o cais durante a atracação."},

{sim:"ARA-1",num:4,tema:"Espias / Atracação",
q:"O que significa 'aduchar' os cabos na linguagem marinheira?",
opts:["É prender os cabos em pontos fixos de bordo","É enrolar os cabos em voltas grandes","É esticar os cabos no convés","É dar seguidos nós nos cabos","É passar óleo de aducha nos cabos"],ans:1,
exp:"Aduchar significa enrolar os cabos em voltas grandes e circulares no convés ou no convés de coberta, organizando-os de modo a ficarem prontos para uso e sem embaraçar."},

{sim:"ARA-1",num:5,tema:"RIPEAM",
q:"Na situação de rumos cruzados, quem tem preferência de passagem?",
opts:["A que tem maior tonelagem, ou seja, maior porte","A que avistar a outra pelo seu boreste, vendo a luz encarnada da outra","A que está empregando maior velocidade","A que avistar a outra pelo seu bombordo, vendo a luz verde da outra","Nenhuma delas — as duas guinam para bordos opostos"],ans:3,
exp:"Rumos cruzados: a embarcação que avista a outra por Bombordo (esquerdo), ou seja, vê a luz VERDE da outra, tem preferência e mantém rumo. Quem vê a luz VERMELHA (vê a outra por Boreste) deve manobrar."},

{sim:"ARA-1",num:6,tema:"Luzes de Navegação",
q:"Embarcação menor que 50 metros de comprimento exibindo uma luz branca onde melhor possa ser vista está:",
opts:["Fundeada","Com manobra restrita","Sem governo","Navegando","Com carga perigosa"],ans:0,
exp:"Uma embarcação fundeada (ancorada) deve exibir, onde melhor possa ser vista, uma luz branca circular de 360°. Embarcações menores que 50m podem exibir apenas uma luz branca no mastro."},

{sim:"ARA-1",num:7,tema:"Sinais Sonoros",
q:"Um apito longo de dois em dois minutos significa:",
opts:["Embarcação sendo rebocada","Embarcação com propulsão mecânica com seguimento em visibilidade restrita","Embarcação rebocando outra","Embarcação parada em visibilidade restrita","Embarcação fundeada em visibilidade restrita"],ans:1,
exp:"RIPEAM, Regra 35: embarcação a motor COM seguimento em visibilidade restrita soa 1 apito LONGO a cada 2 minutos. Embarcação a motor PARADA soa 2 apitos longos a cada 2 minutos."},

{sim:"ARA-1",num:8,tema:"Sinais Sonoros",
q:"Um apito curto significa:",
opts:["Estou parando máquinas","Estou dando máquinas atrás","Estou guinando para bombordo","Estou guinando para boreste","Tenciono ultrapassar por bombordo"],ans:3,
exp:"1 apito curto = estou guinando para Boreste (direita). 2 curtos = Bombordo. 3 curtos = máquinas atrás. 5 ou mais = perigo/não entendi."},

{sim:"ARA-1",num:9,tema:"Luzes de Navegação",
q:"As luzes de bordos, de mastro e de alcançado são:",
opts:["Circulares verdes e encarnadas","Dependem do tipo e porte da embarcação","Circulares","Setorizadas para melhor identificar o movimento da embarcação à noite","Circulares brancas"],ans:3,
exp:"As luzes de bordo (verde e encarnada) e de alcançado (branca) são luzes SETORIZADAS, com ângulo de visibilidade definido (112,5° para bordos e 135° para alcançado). Somente a luz de mastro e a de fundeio são circulares (225° e 360° respectivamente)."},

{sim:"ARA-1",num:10,tema:"RIPEAM",
q:"Estando fora de um canal estreito e em segurança, qual é o bordo que uma embarcação pode utilizar para se fazer uma ultrapassagem?",
opts:["Somente bombordo","Somente boreste","Não deverá ultrapassar sem permissão","Qualquer bordo","Não poderá ultrapassar de qualquer maneira"],ans:3,
exp:"Fora de canal estreito, a ultrapassagem pode ser realizada por qualquer bordo (boreste ou bombordo), desde que em segurança e com espaço suficiente. Em canal estreito, exige sinal sonoro e concordância de ambos."},

{sim:"ARA-1",num:11,tema:"Balizamento",
q:"O que se entende por balizamento?",
opts:["Conjunto de boias e faróis para guiar navios perdidos","Conjunto de boias, faróis e dispositivos para orientar embarcações a vela e a remo","Conjunto de boias que servem para limitar a navegação","Conjunto de boias e pilares que indicam um caminho em terra desde a praia até o interior","Conjunto de boias, pilares e balizas que servem para indicar um caminho, perigos ou limites em uma área no mar"],ans:4,
exp:"Balizamento é o conjunto de boias, pilares, marcas e balizas que servem para indicar caminhos navegáveis, perigos e limites em uma área marítima ou fluvial, orientando o navegante."},

{sim:"ARA-1",num:12,tema:"Balizamento",
q:"Como podemos reconhecer o balizamento à noite?",
opts:["Pela cor e ritmo das luzes","Pela marca e ritmo das luzes","Pela forma e marca do tope","Pela marca de tope e cor","Pelo ritmo das luzes e a marca do tope"],ans:0,
exp:"À noite, o balizamento é reconhecido principalmente pela COR e pelo RITMO (característica) das luzes emitidas pelos sinais. De dia, a identificação é feita pela forma, cor e marca de tope."},

{sim:"ARA-1",num:13,tema:"Balizamento",
q:"O balizamento que indica perigo isolado possui as cores:",
opts:["Branca e encarnada em listas verticais","Preta e encarnada em listas verticais","Preta e encarnada em listas horizontais","Encarnada e amarela em duas metades","Branca e preta em listas horizontais"],ans:2,
exp:"Sinal de Perigo Isolado: cor preta com uma ou mais faixas horizontais encarnadas (vermelhas). Marca de tope: duas esferas pretas. Indica um obstáculo isolado com água navegável ao redor."},

{sim:"ARA-1",num:14,tema:"Balizamento",
q:"Uma boia com cores brancas e encarnadas em faixas verticais indica:",
opts:["Águas seguras","Canal preferencial","Limite lateral de canal","Perigo isolado","Águas perigosas"],ans:0,
exp:"Boia com listras verticais brancas e encarnadas = ÁGUAS SEGURAS (ou Canal Preferencial). Indica que há água segura em torno de todo o sinal. Marca de tope: uma esfera encarnada."},

{sim:"ARA-1",num:15,tema:"Balizamento",
q:"O sinal de perigo isolado, obrigatoriamente, será dotado de:",
opts:["Marca de tope: duas esferas pretas uma sobre a outra","Marca de tope: uma esfera preta","Uma esfera encarnada","Marca de tope em forma de X","Uma esfera na cor branca"],ans:0,
exp:"O sinal de Perigo Isolado tem como marca de tope DUAS ESFERAS PRETAS, uma sobre a outra em linha vertical. Sua cor é preta com faixas horizontais encarnadas."},

{sim:"ARA-1",num:16,tema:"Balizamento",
q:"Durante o dia, observou-se um pilar com dois cones pretos em cima. Estamos diante de:",
opts:["Um balizamento luminoso","Uma boia de bifurcação de canal","Um canal preferencial","Um quadrante de águas seguras","Um quadrante de águas perigosas"],ans:3,
exp:"Dois cones pretos com os vértices para CIMA = Sinal Cardinal NORTE. Indica que o quadrante seguro é o Norte — navegue pelo lado norte deste sinal. Lembre: Norte = pontas para cima."},

{sim:"ARA-1",num:17,tema:"Balizamento",
q:"O sinal lateral de canal que fica à boreste de quem entra no porto tem a cor:",
opts:["Verde","Preto e encarnada","Encarnada","Amarela","Branca"],ans:2,
exp:"No sistema IALA-B (Brasil): ao entrar no porto, o sinal lateral de BORESTE (direita) é ENCARNADO (vermelho). O de BOMBORDO (esquerda) é VERDE. Macete: 'Encarnado à direita ao entrar'."},

{sim:"ARA-1",num:18,tema:"Balizamento Fluvial",
q:"No balizamento de uma hidrovia observou-se um sinal 'Y' numa placa no rio. Que significa:",
opts:["Seguir meio do canal","Seguir margem","Trocar de margem","Bifurcação de canal","Sair do meio do canal"],ans:3,
exp:"Sinais fluviais em placas: I = seguir meio do canal; Y = bifurcação de canal; X = trocar de margem; H = seguir a margem; T = canal junto à margem."},

{sim:"ARA-1",num:19,tema:"Incêndio a Bordo",
q:"Só haverá fogo quando:",
opts:["Ocorrer a presença de três elementos: oxigênio, comburente e temperatura de ignição","Ocorrer a presença de três elementos: ar, combustível e comburente","Ocorrer a presença de três elementos: comburente, combustível e temperatura de ignição","Houver o combustível, o comburente e o agente extintor","Ocorrer a presença de três elementos: oxigênio, combustível e comburente"],ans:2,
exp:"O Triângulo do Fogo tem três lados: COMBURENTE (oxigênio), COMBUSTÍVEL e TEMPERATURA DE IGNIÇÃO. Os três precisam estar presentes simultaneamente para que haja fogo."},

{sim:"ARA-1",num:20,tema:"Incêndio a Bordo",
q:"O comburente é um elemento da natureza que reage com as substâncias para gerar a combustão e pode ser:",
opts:["Líquido na atmosfera","Oxigênio","Um agente extintor","Sólido","Dióxido de carbono"],ans:1,
exp:"O comburente mais comum é o OXIGÊNIO. É o elemento que reage com o combustível na presença de calor, gerando a combustão. O CO₂ (dióxido de carbono) é, ao contrário, usado como agente extintor."},

{sim:"ARA-1",num:21,tema:"Incêndio a Bordo",
q:"O extintor de água deve ser utilizado no combate a incêndio em:",
opts:["Líquidos inflamáveis","Materiais sólidos inflamáveis","Metais combustíveis","Gases","Materiais elétricos"],ans:1,
exp:"Extintor de ÁGUA: apenas incêndio Classe A (materiais sólidos como madeira, papel, tecido). NUNCA use água em: Classe B (combustíveis líquidos), Classe C (elétrico) ou Classe D (metais)."},

{sim:"ARA-1",num:22,tema:"Incêndio a Bordo",
q:"Que tipo de extintor é o mais indicado para o combate em um incêndio em equipamentos energizados?",
opts:["Espuma mecânica","Espuma química","Água","Pó químico","Gás carbônico"],ans:4,
exp:"Para incêndio Classe C (equipamentos elétricos energizados), o indicado é o extintor de GÁS CARBÔNICO (CO₂), pois não conduz eletricidade e não danifica os equipamentos. O pó químico também funciona, mas causa danos."},

{sim:"ARA-1",num:23,tema:"Estabilidade",
q:"Nunca devemos:",
opts:["Afundar a marca do limite mínimo de flutuação","Colocar mais peso na parte de baixo que na parte de cima da embarcação","Colocar pesos pequenos no convés principal","Dividir os pesos entre as laterais da embarcação","Retirar pesos altos da embarcação"],ans:0,
exp:"A marca do limite mínimo de flutuação (linha de carga ou linha d'água mínima) indica a profundidade máxima de imersão. Afundá-la significa sobrecarregar a embarcação além de seu limite seguro, comprometendo a estabilidade e a flutuabilidade."},

{sim:"ARA-1",num:24,tema:"Estabilidade",
q:"Um barco com muito peso a meia nau e pouco peso na proa e popa pode vir a quebrar ao meio em caso de tempestade. Nesta situação diz-se que ele está com:",
opts:["Desgoverno","Banda","Contra-alquebramento","Trim","Alquebramento"],ans:2,
exp:"CONTRA-ALQUEBRAMENTO: excessivo peso a meia nau, com pouco peso nas extremidades. O barco tende a quebrar ao meio pois a parte central fica mais imersa. ALQUEBRAMENTO é o oposto: muito peso nas extremidades."},

{sim:"ARA-1",num:25,tema:"Segurança / Coletes",
q:"A melhor maneira de se certificar sobre a quantidade de coletes salva-vidas que deve existir a bordo de um veleiro é:",
opts:["Consultando a Capitania dos Portos de sua área","Consultando a DPC","Contando quantos assentos há disponíveis","Consultando a lotação no documento da embarcação","Consultando o fabricante do barco"],ans:3,
exp:"O número de coletes exigido corresponde à LOTAÇÃO da embarcação, que consta no documento de bordo (TIE). A lotação é a quantidade máxima de pessoas autorizadas a embarcar, incluindo a tripulação."},

{sim:"ARA-1",num:26,tema:"Segurança / Coletes",
q:"Os coletes salva-vidas infláveis devem ser enchidos:",
opts:["Ao iniciar a viagem","Antes de iniciar a viagem","Somente depois que entrar na balsa","Antes de abandonar a embarcação","Quando já dentro da água"],ans:4,
exp:"Coletes infláveis devem ser enchidos QUANDO JÁ DENTRO DA ÁGUA, para evitar que o volume dificulte os movimentos durante a evacuação e a entrada na balsa. Coletes de espuma já estão prontos ao serem vestidos."},

{sim:"ARA-1",num:27,tema:"Segurança / Coletes",
q:"A melhor maneira de saltar na água, utilizando o colete salva-vidas, é com:",
opts:["As pernas esticadas e os pés juntos","Mergulhando de cabeça, protegendo o rosto","As pernas abertas, a mão direita no nariz e a mão esquerda no ombro","A mão direita no nariz e os pés separados","Os pés juntos e a perna dobrada"],ans:0,
exp:"A posição correta para saltar na água com colete é: pernas ESTICADAS e pés JUNTOS, com os braços ao lado do corpo (ou segurando o colete). Essa posição evita lesões e garante que o colete funcione corretamente."},

{sim:"ARA-1",num:28,tema:"Documentação",
q:"Qual o nome do documento em que o proprietário da embarcação de esporte e recreio assume a responsabilidade pela condição de operação de sua embarcação?",
opts:["Lista de verificação de equipamentos","Plano de navegação","Título de propriedade","Termo de responsabilidade","Título de cessão"],ans:3,
exp:"O TERMO DE RESPONSABILIDADE é o documento em que o proprietário da embarcação declara e assume responsabilidade pelas condições de operação e segurança de sua embarcação junto à Autoridade Marítima."},

{sim:"ARA-1",num:29,tema:"Documentação",
q:"Uma embarcação de esporte e recreio considerada de Grande Porte (iate) deverá fazer seu registro no:",
opts:["DNIT","ANTAQ","Tribunal Marítimo","Qualquer órgão da Marinha do Brasil na sua área de domicílio","Ministério dos Transportes"],ans:2,
exp:"Embarcações de Grande Porte (iates com comprimento acima de certo limite) devem ser registradas no TRIBUNAL MARÍTIMO. Embarcações menores são inscritas nas Capitanias dos Portos ou órgãos subordinados."},

{sim:"ARA-1",num:30,tema:"Leis e Normas",
q:"A embarcação estrangeira que apresentar irregularidades representando ameaça ao meio ambiente, à tripulação ou à segurança do tráfego aquaviário, pode ser ordenada a:",
opts:["Entrar em quarentena","Pagar multa estipulada pela autoridade marítima","Repatriar a tripulação","Sair das águas jurisdicionais","Assinar um termo de responsabilidade"],ans:3,
exp:"A Autoridade Marítima pode ordenar que a embarcação estrangeira irregular SAIA DAS ÁGUAS JURISDICIONAIS brasileiras, especialmente quando represente risco à segurança ou ao meio ambiente."},

{sim:"ARA-1",num:31,tema:"Sobrevivência",
q:"Em um naufrágio, a fadiga e o esgotamento conduzem a distúrbios mentais como nervosismo, atividade excessiva e violenta ou estafa. O melhor meio de evitá-los é:",
opts:["Procurar dormir e descansar o máximo possível","Alimentar-se e beber água em abundância","Ficar no sol sem roupas, pois os raios solares ajudam","Retirar o colete salva-vidas","Agitar-se, não durmir, para não perder o resgate"],ans:0,
exp:"Em situação de naufrágio, a conservação de energia é fundamental. DORMIR e DESCANSAR o máximo possível evita o esgotamento físico e mental, preservando as condições para sobrevivência até o resgate."},

{sim:"ARA-1",num:32,tema:"Sobrevivência",
q:"Em um naufrágio, é necessário economizar energia, não fazer esforços e não falar desnecessariamente. Porém, é conveniente movimentar-se com regularidade, a fim de:",
opts:["Manter a forma física","Evitar hipotermia","Manter o bom humor","Evitar o tédio","Manter a circulação sanguínea"],ans:4,
exp:"Movimentos regulares e suaves são recomendados para manter a CIRCULAÇÃO SANGUÍNEA, evitar tromboses e manter o calor corporal. Porém, nunca a ponto de gastar energia desnecessariamente."},

{sim:"ARA-1",num:33,tema:"Primeiros Socorros",
q:"Logo após retirar a vítima de choque elétrico da fonte de energia elétrica, devemos:",
opts:["Tratar de imediato as queimaduras","Tratar primeiro os possíveis ferimentos","Aplicar analgésicos nos locais afetados","Estancar rapidamente as possíveis hemorragias","Tratar primeiro o trauma que pode levar à morte mais rápido"],ans:4,
exp:"Após o choque elétrico, a prioridade é identificar e tratar o TRAUMA DE MAIOR RISCO DE VIDA: parada cardiorrespiratória (iniciar RCP se necessário), depois as hemorragias, depois as queimaduras. A sequência segue o protocolo de prioridades do ABCDE do trauma."},

{sim:"ARA-1",num:34,tema:"Primeiros Socorros",
q:"No caso de fratura de antebraço, podemos imobilizá-lo com:",
opts:["Tábua, papelão ou jornal grosso","Tiras de pano amarradas no pescoço","Material de borracha sintética","Material flexível","Bandagens de algodão esterilizado"],ans:0,
exp:"Para imobilizar fraturas do antebraço, usa-se materiais rígidos como TÁBUA, PAPELÃO ou JORNAL GROSSO como talas improvisadas, fixadas com ataduras ou tiras de pano. O membro deve ser imobilizado dobrado (em ângulo)."},

{sim:"ARA-1",num:35,tema:"Primeiros Socorros",
q:"No caso de fratura, o que o socorrista deverá fazer?",
opts:["Aplicar analgésicos no local","Tratar como hemorragia interna","Tratar como trauma e aguardar o médico","Proteger e imobilizar o membro atingido","Isolar o local e aplicar bandagens"],ans:3,
exp:"Em caso de fratura, a conduta correta é PROTEGER e IMOBILIZAR o membro atingido na posição em que se encontra (sem tentar recolocar o osso no lugar), minimizando a dor e evitando lesões adicionais. Imobilizar antes de transportar."},

{sim:"ARA-1",num:36,tema:"Meteorologia",
q:"Deveremos ter muita cautela ou não nos fazer ao mar se tomarmos conhecimento da chegada de uma frente:",
opts:["Estacionária","Mista","Fria","Quente","Oclusa"],ans:2,
exp:"A FRENTE FRIA é a que apresenta maior risco para a navegação, pois traz mudanças bruscas de tempo: ventos fortes, rajadas, chuvas intensas e mar agitado. A transição é rápida e pode pegar o navegante desprevenido."},

{sim:"ARA-1",num:37,tema:"Sobrevivência",
q:"A cobertura da balsa salva-vidas é de:",
opts:["Lona amarela para afastar tubarões","Cor azul para combinar com o mar","Cor alaranjada para facilitar o avistamento","Fibra de vidro para resistir às intempéries","Cor verde e vermelha"],ans:2,
exp:"A cobertura da balsa salva-vidas é de COR ALARANJADA (laranja), cor altamente visível, para facilitar o avistamento por equipes de busca e resgate aérea e marítima em situações de emergência."},

{sim:"ARA-1",num:38,tema:"Bandeiras e Sinais",
q:"Uma embarcação quando em operação de mergulho, deve exibir:",
opts:["A bandeira BRAVO","A bandeira FOXTROT","A bandeira OSCAR","A bandeira ALFA","A bandeira ECHO"],ans:3,
exp:"BANDEIRA ALFA (A): branca e azul, significa 'Tenho mergulhador na água — mantenha-se afastado e navegue em baixa velocidade.' É obrigatória durante operações de mergulho."},

{sim:"ARA-1",num:39,tema:"Meteorologia",
q:"Quando citamos a expressão 'vento nordeste', significa que o vento:",
opts:["Vem da direção nordeste","Vem do Norte para o nordeste","Está vindo por barlavento","Vem da direção norte","Está saindo por nordeste"],ans:0,
exp:"Em meteorologia e náutica, o nome do vento indica de onde ele VEM. 'Vento nordeste' significa que ele sopra da direção nordeste em direção ao sudoeste. É diferente de correntes marítimas, cujo nome indica para onde vão."},

{sim:"ARA-1",num:40,tema:"Meteorologia",
q:"Quando uma frente fria se aproxima, podemos prever que o tempo:",
opts:["Mudará para melhor","Ficará mais adequado à navegação","Ficará com pouca visibilidade","Tanto faz","Mudará para pior"],ans:4,
exp:"A chegada de uma frente fria invariavelmente piora as condições de tempo: ventos aumentam, chuvas surgem, o mar agita e a visibilidade pode cair. O navegante deve buscar abrigo antes que a frente se estabeleça."},

// ===================== ARA-2 =====================
{sim:"ARA-2",num:1,tema:"Nomenclatura",
q:"Qual das correlações abaixo está totalmente correta?",
opts:["Boreste é o lado direito da embarcação, bombordo é o lado esquerdo, avante fica na frente, a ré fica atrás","Boreste é o lado esquerdo da embarcação, bombordo é o lado direito, avante fica na frente, a ré fica atrás","Través é um dos bordos da embarcação, boreste é o lado direito, bombordo é o lado esquerdo","Través é o lado direito da embarcação, avante é a frente, a ré é a parte de trás","Bochecha é a parte do costado entre o través e a popa"],ans:0,
exp:"Correlação correta: BORESTE = lado direito; BOMBORDO = lado esquerdo; AVANTE = parte da frente (proa); RÉ = parte de trás (popa). Través não é um bordo — é a perpendicular ao comprimento da embarcação."},

{sim:"ARA-2",num:2,tema:"Espias / Atracação",
q:"Espias que saem da embarcação perpendicularmente ao cais:",
opts:["Retinida","Lançante de proa","Lançante de popa","Través","Espringue de popa"],ans:3,
exp:"O TRAVÉS é a espia que sai perpendicularmente ao cais, impedindo que a embarcação se afaste lateralmente. Os lançantes e espringues saem em ângulo, impedindo movimentos longitudinais."},

{sim:"ARA-2",num:3,tema:"Espias / Atracação",
q:"O que pode ser improvisado e usado como defensa numa atracação?",
opts:["Resto de metais ou madeira","Espias e pneus desgastados","Qualquer material de concreto ou ferro","Sacos com arames ou ferros","Sacos de areia"],ans:1,
exp:"Defensas improvisadas podem ser feitas com ESPIAS VELHAS e PNEUS DESGASTADOS, materiais que possuem resistência e elasticidade para amortecer o impacto do casco contra o cais. Materiais rígidos como metal ou concreto podem danificar o casco."},

{sim:"ARA-2",num:4,tema:"Espias / Atracação",
q:"São peças fixadas aos cais que servem para prender as espias das embarcações quando atracadas:",
opts:["Cabeços","Lançantes","Cabos","Fixadores","Buzina"],ans:0,
exp:"CABEÇOS são as peças (postes, cornadises) fixadas ao cais onde se amarram as espias da embarcação. Podem ser de ferro, aço ou madeira. Também chamados de bitas ou bolardos."},

{sim:"ARA-2",num:5,tema:"RIPEAM",
q:"Duas embarcações a motor navegam em 'rumos cruzados' — qual deve manobrar?",
opts:["A que tiver empregando menor velocidade","A que avistar a outra primeiro","A que tiver empregando maior velocidade","A que avistar a outra por boreste","A que avistar a outra por bombordo"],ans:3,
exp:"Em rumos cruzados, a embarcação que avista a outra por BORESTE (vê a luz encarnada/vermelha da outra) deve MANOBRAR. A que avista pelo bombordo (vê a luz verde) tem preferência e mantém rumo."},

{sim:"ARA-2",num:6,tema:"Luzes de Navegação",
q:"Uma embarcação, à noite, exibindo duas luzes circulares encarnadas em linha vertical, será:",
opts:["Uma embarcação engajada na pesca que não seja de arrasto","Uma embarcação engajada na pesca de arrasto","Uma embarcação sem governo","Uma embarcação rebocando","Uma embarcação de praticagem"],ans:2,
exp:"DUAS luzes circulares ENCARNADAS em linha vertical = EMBARCAÇÃO SEM GOVERNO. Esse sinal indica que a embarcação está impossibilitada de manobrar devido a alguma circunstância excepcional, devendo as demais se afastar."},

{sim:"ARA-2",num:7,tema:"Sinais Sonoros",
q:"Dois apitos curtos significam:",
opts:["Estou parando máquinas","Estou guinando para boreste","Estou dando máquinas atrás","Estou guinando para bombordo","Tenciono ultrapassar por bombordo"],ans:3,
exp:"2 apitos curtos = estou guinando para BOMBORDO (esquerda). 1 curto = Boreste. 3 curtos = máquinas atrás. 5+ curtos = perigo/dúvida. Macete: dois B = dois curtos, Bombordo."},

{sim:"ARA-2",num:8,tema:"Sinais Sonoros",
q:"Dois apitos longos seguidos de um curto significam:",
opts:["Tenciono ultrapassá-lo por qualquer bordo","Estou dando máquinas atrás","Tenciono ultrapassá-lo pelo seu bombordo","Estou parando máquinas","Tenciono ultrapassá-lo pelo seu boreste"],ans:4,
exp:"2 longos + 1 curto = tenciono ultrapassá-lo pelo seu BORESTE. 2 longos + 2 curtos = tenciono ultrapassar pelo seu BOMBORDO. Concordância: 1 longo + 1 curto + 1 longo + 1 curto."},

{sim:"ARA-2",num:9,tema:"Luzes de Navegação",
q:"Uma luz amarela, com as mesmas características da luz de alcançado exceto a cor e por cima desta, chama-se:",
opts:["Luz de bordo","Luz de popa","Luz de ré","Luz de reboque","Luz de mastro"],ans:3,
exp:"A LUZ DE REBOQUE é amarela, com as mesmas características da luz de alcançado (branca, 135°), porém posicionada ACIMA desta. Indica que a embarcação está realizando um reboque."},

{sim:"ARA-2",num:10,tema:"RIPEAM",
q:"Uma embarcação que está alcançando outra tem preferência de passagem, ou não?",
opts:["Sim, a alcançadora deverá manobrar para passar pela outra à frente","Sim, a que está à frente, deverá manter seu rumo para dar passagem a que está alcançando","Sim, a que está à frente deverá manobrar para dar passagem a que está alcançando","Não, a que está à frente deverá manobrar para dar passagem à alcançadora","Não, a alcançadora deverá manobrar para passar pela outra, a sua frente"],ans:3,
exp:"A embarcação ALCANÇADORA não tem preferência. A embarcação ALCANÇADA (à frente) mantém rumo e velocidade. A alcançadora DEVE MANOBRAR para passar com segurança, emitindo os sinais de ultrapassagem."},

{sim:"ARA-2",num:11,tema:"Balizamento",
q:"A boia cega:",
opts:["Emite luzes brancas","Emite luzes brandas","Não emite luzes","Emite luzes circulares encarnadas","Emite luzes amarelas"],ans:2,
exp:"BOIA CEGA é aquela que NÃO EMITE LUZES. É utilizada apenas durante o dia, identificada apenas por sua forma, cor e marca de tope. Boia LUMINOSA é a que possui luz própria ou refletora."},

{sim:"ARA-2",num:12,tema:"Balizamento",
q:"A identificação dos sinais durante o dia é feita por:",
opts:["Somente forma e cor","Marca de tope, cor e tamanho","Marca de tope, forma e cor","Somente marca de tope e cor","Pela cor e ritmo das luzes"],ans:2,
exp:"De dia, os sinais de balizamento são identificados pela MARCA DE TOPE, FORMA e COR. À noite, pelo ritmo e cor das luzes. A marca de tope é essencial pois muitas boias têm formas e cores semelhantes."},

{sim:"ARA-2",num:13,tema:"Balizamento",
q:"Uma boia com cores brancas e encarnadas em faixas verticais indica:",
opts:["Águas seguras","Canal preferencial","Limite lateral de canal","Perigo isolado","Águas perigosas"],ans:0,
exp:"Listras verticais brancas e encarnadas = ÁGUAS SEGURAS. Indica que há água navegável ao redor de todo o sinal. Também pode ser usada como sinal de canal preferencial."},

{sim:"ARA-2",num:14,tema:"Balizamento",
q:"A marca de tope do sinal de perigo isolado será:",
opts:["Uma esfera preta","Duas esferas encarnadas","Duas esferas pretas","Uma esfera encarnada","Três esferas pretas"],ans:2,
exp:"Sinal de PERIGO ISOLADO: marca de tope = DUAS ESFERAS PRETAS em linha vertical. Cores: preto com faixas horizontais encarnadas."},

{sim:"ARA-2",num:15,tema:"Balizamento",
q:"A marca de tope do sinal que significa águas seguras é:",
opts:["Um cone encarnado","Cilindro verde","Duas esferas pretas","Uma esfera encarnada","Um xis (X) amarelo"],ans:3,
exp:"Sinal de ÁGUAS SEGURAS: marca de tope = UMA ESFERA ENCARNADA. Cores: listras verticais brancas e encarnadas."},

{sim:"ARA-2",num:16,tema:"Balizamento",
q:"O balizamento em que os sinais estão indicados por boias posicionadas em relação aos 4 quadrantes, chama-se:",
opts:["Cardinal","Águas seguras","Perigo isolado","Lateral","Sinal especial"],ans:0,
exp:"BALIZAMENTO CARDINAL: os sinais (boias) são posicionados em relação aos 4 pontos cardeais (Norte, Sul, Leste, Oeste) em relação ao perigo, indicando o quadrante seguro para passar."},

{sim:"ARA-2",num:17,tema:"Balizamento",
q:"A boia de boreste emite luz, à noite, de cor:",
opts:["Encarnada","Verde","Branca","Amarela","Laranja"],ans:0,
exp:"Boia de BORESTE (direita ao entrar no porto) = cor ENCARNADA (vermelha). Emite luz encarnada. Boia de bombordo = verde. Macete IALA-B: 'Encarnado à direita ao entrar'."},

{sim:"ARA-2",num:18,tema:"Balizamento Fluvial",
q:"No balizamento de uma hidrovia um sinal 'X' significa:",
opts:["Bifurcação de canal","Sair da margem","Seguir a margem","Seguir meio do canal","Trocar de margem"],ans:4,
exp:"Sinal X em hidrovia = TROCAR DE MARGEM. Sinal Y = bifurcação. Sinal I = seguir meio do canal. Sinal H = seguir margem. Sinal T = canal junto à margem."},

{sim:"ARA-2",num:19,tema:"Incêndio a Bordo",
q:"Os extintores de espuma são utilizados em:",
opts:["Incêndios da Classe A","Incêndios em líquidos inflamáveis","Incêndios em materiais elétricos","Incêndios em materiais sólidos inflamáveis","Incêndios em metais combustíveis"],ans:1,
exp:"Extintores de ESPUMA são eficientes para Classe B (líquidos inflamáveis como gasolina, álcool, óleo). Também agem na Classe A. NÃO usar em Classe C (elétrico) pois a espuma conduz eletricidade."},

{sim:"ARA-2",num:20,tema:"Incêndio a Bordo",
q:"Só existe fogo quando há combustão. Para isso é preciso haver:",
opts:["Oxigênio, combustível e temperatura","Oxigênio, combustível e temperatura ambiente","Comburente, combustível e temperatura de ignição","Oxigênio, comburente e temperatura de ignição","Todas as afirmativas são falsas"],ans:2,
exp:"O triângulo do fogo: COMBURENTE (oxigênio) + COMBUSTÍVEL + TEMPERATURA DE IGNIÇÃO. Os três precisam estar presentes. Remover qualquer um extingue o fogo (abafamento, resfriamento ou isolamento do combustível)."},

{sim:"ARA-2",num:21,tema:"Incêndio a Bordo",
q:"Devo ter a bordo sempre extintores portáteis:",
opts:["Em bom estado de conservação visual","Com as revisões anuais dentro da validade","Em número determinado de acordo com a lotação da embarcação","Próximos ao convés principal","Vencidos"],ans:1,
exp:"Os extintores devem ter as REVISÕES ANUAIS dentro da validade, comprovadas pelo selo de inspeção. Um extintor vencido pode não funcionar no momento da emergência. O número requerido é determinado pelo tamanho/tipo da embarcação, não pela lotação."},

{sim:"ARA-2",num:22,tema:"Incêndio a Bordo",
q:"São cuidados que devemos ter com extintores de CO2:",
opts:["Agitá-lo antes, para que a reação química se faça","Evitar utilizá-lo em equipamentos energizados e ter cuidado ao inverter sua posição","Evitar o contato direto do jato com a pele e os olhos","Evitar dirigir o jato diretamente nas chamas para não agitá-las","Verificar o nível do agente extintor, abrindo sua tampa"],ans:2,
exp:"O jato de CO₂ sai a temperaturas muito baixas (-78°C). O contato direto com PELE e OLHOS pode causar queimaduras por congelamento. Além disso, nunca segurar o difusor (bocal) sem proteção."},

{sim:"ARA-2",num:23,tema:"Estabilidade",
q:"Nunca devemos:",
opts:["Deixar que as pessoas se concentrem na proa ou na popa da embarcação","Exceder o limite permitido de pessoas a bordo","Colocar pesos no fundo da embarcação","Permitir que pessoas sem colete embarquem a bordo","Dividir bem os pesos na embarcação"],ans:1,
exp:"NUNCA exceder o limite de pessoas a bordo (LOTAÇÃO). A sobrecarga compromete a estabilidade, a flutuabilidade e a segurança da embarcação, podendo causar afundamento ou emborcamento."},

{sim:"ARA-2",num:24,tema:"Estabilidade",
q:"À medida que retiramos peso de bordo:",
opts:["A borda livre e o calado permanecem inalterados","Somente a borda livre aumenta","A borda livre diminui e o calado aumenta","Somente o calado aumenta","A borda livre aumenta e o calado diminui"],ans:4,
exp:"Ao retirar peso, a embarcação fica mais leve e sobe: a BORDA LIVRE AUMENTA (mais do casco acima da água) e o CALADO DIMINUI (menos do casco submerso). O PONTAL (borda livre + calado) permanece inalterado."},

{sim:"ARA-2",num:25,tema:"Segurança / Coletes",
q:"O colete salva-vidas deve ser vestido:",
opts:["Com a parte flutuante para trás, por baixo das roupas","Com a parte flutuante para frente, por cima das roupas","Com a parte flutuante para a frente, após retirar as roupas","Com a parte flutuante para a frente, por baixo das roupas","Com a parte flutuante para trás, por cima das roupas"],ans:1,
exp:"O colete deve ser vestido com a parte flutuante PARA A FRENTE e POR CIMA DAS ROUPAS. A parte flutuante frontal mantém a face do náufrago fora da água. Vesti-lo por baixo das roupas impede seu funcionamento."},

{sim:"ARA-2",num:26,tema:"Segurança / Coletes",
q:"Dos itens abaixo, qual é de dotação obrigatória em todas as embarcações e em qualquer situação?",
opts:["Âncora","Rádio VHF","Boia salva-vidas","Agulha magnética","Coletes salva-vidas"],ans:4,
exp:"Os COLETES SALVA-VIDAS são o único item obrigatório em TODAS as embarcações e em QUALQUER situação de navegação. A quantidade deve corresponder à lotação. Outros itens dependem do tipo e tamanho da embarcação."},

{sim:"ARA-2",num:27,tema:"Segurança / Coletes",
q:"Das alternativas abaixo, qual deverá obrigatoriamente estar usando o colete salva-vidas na moto aquática?",
opts:["Somente o passageiro da moto aquática","Comandante das embarcações","Todos os passageiros de embarcações de médio porte","Condutor e passageiro de moto aquática","Somente o condutor da moto aquática"],ans:3,
exp:"Na moto aquática, TANTO O CONDUTOR QUANTO O PASSAGEIRO devem estar com o colete classe V vestido obrigatoriamente durante toda a navegação, conforme determina a NORMAM-03/DPC."},

{sim:"ARA-2",num:28,tema:"Documentação",
q:"Toda embarcação deve ser inscrita no (na):",
opts:["Diretoria de Portos e Costas (DPC)","Capitanias dos Portos ou órgãos subordinados","Prefeitura local","Tribunal Marítimo (TM)","Receita Federal"],ans:1,
exp:"Toda embarcação deve ser inscrita nas CAPITANIAS DOS PORTOS ou seus órgãos subordinados (Delegacias e Agências), que são a representação da Autoridade Marítima nos estados. A DPC é o órgão central que normativa o processo."},

{sim:"ARA-2",num:29,tema:"Leis e Normas",
q:"A NORMAM-211 define lotação como:",
opts:["Quantidade de pessoas efetivamente embarcada","Quantidade máxima de pessoas autorizadas a embarcar, incluindo a tripulação","Quantidade máxima de pessoas autorizadas a embarcar, excluindo a tripulação","Quantidade máxima de pessoas autorizadas a embarcar, incluindo o comandante","Quantidade de pessoas efetivamente embarcadas, excluindo a tripulação"],ans:1,
exp:"LOTAÇÃO (NORMAM-211): quantidade MÁXIMA de pessoas AUTORIZADAS a embarcar, INCLUINDO a tripulação. É o limite que não pode ser ultrapassado sob nenhuma circunstância, por questões de segurança e estabilidade."},

{sim:"ARA-2",num:30,tema:"Leis e Normas",
q:"Constatada uma infração, a defesa do infrator deverá ser feita no prazo de:",
opts:["45 dias","30 dias","15 dias","8 dias","60 dias"],ans:2,
exp:"Conforme a LESTA, o prazo para apresentar defesa após lavratura do auto de infração é de 15 DIAS. Após esse prazo, a multa é aplicada automaticamente."},

{sim:"ARA-2",num:31,tema:"Sobrevivência",
q:"A falta de funcionamento dos intestinos constitui fenômeno comum em náufragos dado a:",
opts:["Abundância de água","Exposição aos raios do sol","Exiguidade da alimentação","Adrenalina no sangue","Falta de água no organismo"],ans:2,
exp:"A ESCASSEZ DE ALIMENTOS (exiguidade da alimentação) é a principal causa de constipação intestinal em náufragos. O intestino funciona com base nos alimentos processados, e a falta de alimentação adequada paralisa o trânsito intestinal."},

{sim:"ARA-2",num:32,tema:"Sobrevivência",
q:"Após um naufrágio, em relação ao consumo de líquidos, deve ser evitado a todo custo a:",
opts:["Ingestão de água na quantidade estipulada","Ingestão de água doce","Ingestão de água potável","Ingestão de água salgada (água do mar)","Ingestão de água"],ans:3,
exp:"NUNCA beber ÁGUA DO MAR. Sua alta concentração de sal faz com que o organismo precise usar mais água para eliminar o sódio pelos rins, acelerando a desidratação e podendo levar à morte mais rapidamente."},

{sim:"ARA-2",num:33,tema:"Primeiros Socorros",
q:"Nas grandes queimaduras, nunca se deve:",
opts:["Dar líquidos (água, chá, sucos)","Aplicar analgésicos","Tirar a roupa da vítima","Cobrir a vítima com panos ou cobertor","Remover a vítima do local"],ans:2,
exp:"NUNCA TIRAR A ROUPA nas grandes queimaduras, principalmente se estiver aderida à pele. Retirar à força pode arrancar a pele lesionada, aumentar o risco de infecção e agravar o trauma. Deixar o médico fazer isso em condições adequadas."},

{sim:"ARA-2",num:34,tema:"Primeiros Socorros",
q:"Excetuando os casos de amputação, o aperto do torniquete deve ser aliviado aproximadamente:",
opts:["De 15 em 15 minutos","De 2 em 2 horas","De hora em hora","De 45 em 45 minutos","De 30 em 30 minutos"],ans:0,
exp:"O torniquete deve ser aliviado por 1 minuto a cada 15 MINUTOS de uso (exceto em amputações). Isso previne a isquemia (falta de sangue) prolongada no membro, que pode causar necrose. Anotar o horário da aplicação."},

{sim:"ARA-2",num:35,tema:"Primeiros Socorros",
q:"Podem ser ministrados água ou líquidos não alcoólicos para o queimado, exceto se ele:",
opts:["Estiver inconsciente","Estiver com 20% do corpo queimado","Estiver sentindo calafrios","Estiver com 40% do corpo queimado","Estiver sentindo dores"],ans:0,
exp:"Não ministrar líquidos a um queimado que esteja INCONSCIENTE, pois há risco de aspiração (engasgamento). Queimados conscientes podem e devem receber hidratação oral se não houver contraindicação médica."},

{sim:"ARA-2",num:36,tema:"Sobrevivência",
q:"No caso de abandono por incêndio incontrolável, devemos pular, quando houver óleo na superfície d'água:",
opts:["Sempre de costas","A favor da correnteza","Contra a correnteza","Sobre o óleo, pois este vai amaciar a queda","Sempre de cabeça e com os pés juntos"],ans:2,
exp:"Ao pular com óleo na superfície, deve-se pular CONTRA A CORRENTEZA para que o óleo se afaste do local onde você cair. Antes de pular, espalhe o óleo com os braços para abrir um espaço. Pule com os pés juntos para minimizar o contato com o óleo."},

{sim:"ARA-2",num:37,tema:"Segurança / Equipamentos",
q:"O que deve ser amarrado na boia circular para facilitar o resgate de alguém que caiu na água?",
opts:["Um cabo de aço","Um facho home","Uma retinida flutuante","Uma caixa de primeiros socorros","Um foguete pirotécnico"],ans:2,
exp:"À boia circular salva-vidas deve ser amarrada uma RETINIDA FLUTUANTE (cabo leve e flutuante) para que a pessoa na água possa se agarrar e ser puxada para a embarcação ou cais."},

{sim:"ARA-2",num:38,tema:"Sobrevivência",
q:"As âncoras flutuantes das balsas devem ser mantidas na água, visando reduzir:",
opts:["O risco de correntezas","O risco de ventos fortes","A altura das ondas","A possibilidade de emborcamento","A velocidade da deriva"],ans:4,
exp:"A âncora flutuante (ou parachoques de mar) é um dispositivo cônico que, quando lançado na água, cria resistência e reduz a VELOCIDADE DA DERIVA da balsa, mantendo-a mais estável e mais próxima do ponto do naufrágio para facilitar o resgate."},

{sim:"ARA-2",num:39,tema:"Fundeio",
q:"A âncora mais comum a bordo das embarcações de esporte e recreio é a:",
opts:["Fateixa","Almirantado","Busca-vida","Danforth","Bruce"],ans:3,
exp:"A âncora DANFORTH é a mais comum em embarcações de esporte e recreio por seu grande poder de unhar (fixar no fundo), facilidade de armazenamento e eficiência em fundos de areia e lama. A Bruce também é muito usada atualmente."},

{sim:"ARA-2",num:40,tema:"Fundeio",
q:"Deve-se fundear com a âncora Danforth, evitando os fundeadouros de tença de:",
opts:["Lama","Areia mole","Areia dura","Cascalho fino","Lodo mole"],ans:2,
exp:"A âncora Danforth tem dificuldade de unhar em AREIA DURA, pois suas pás não conseguem penetrar no fundo duro. Os melhores fundos para ela são areia mole, lama e cascalho. Evitar também fundo de pedra e coral."},

// ===================== ARA-3 =====================
{sim:"ARA-3",num:1,tema:"Nomenclatura",
q:"Um objeto que esteja por nossa alheta de bombordo está na marcação relativa de:",
opts:["275° graus","225° graus","180° graus","45° graus","90° graus"],ans:1,
exp:"ALHETA DE BOMBORDO = aproximadamente 225° na marcação relativa (ou seja, 45° à ré do través de bombordo). O través de bombordo = 270°. Proa = 000°, Popa = 180°, Través de Boreste = 090°, Través de Bombordo = 270°."},

{sim:"ARA-3",num:2,tema:"Espias / Atracação",
q:"O que são espias e para que servem?",
opts:["São cabos de amarração usados na faina de atracar uma embarcação","São cabos de fibra vegetal ou sintética que servem para prender a embarcação a uma boia ou outra embarcação","São retinidas que servem para conduzir os cabos de amarração","São cabos de aço ou ferro que servem para prender as amarras às âncoras","São cabos de retinida que servem para prender a embarcação no fundo"],ans:0,
exp:"ESPIAS são os cabos de amarração usados durante a faina de ATRACAR a embarcação, prendendo-a ao cais ou a outra embarcação. São classificadas por sua posição e função: lançantes, espringues e través."},

{sim:"ARA-3",num:3,tema:"Espias / Atracação",
q:"Para provermos a defesa da embarcação contra choques no cais, devemos colocar presas ao costado ou cais:",
opts:["Verdugos","Croques","Cabeços","Defensas","Para-choques"],ans:3,
exp:"DEFENSAS são os dispositivos de proteção colocados entre o casco da embarcação e o cais para absorver impactos. Podem ser de borracha, plástico, tecido ou materiais improvisados como pneus."},

{sim:"ARA-3",num:4,tema:"Combustível",
q:"Qual a quantidade ideal de combustível a bordo para um passeio?",
opts:["20% para a ida, 20% para a volta e 60% de reserva","1/3 para a ida, 1/2 para a volta e 1/4 de reserva","1/3 para a ida, 1/3 para a volta e 1/3 de reserva","1/2 para a ida, 1/3 para a volta e 1/4 de reserva","Metade para a ida e metade para a volta"],ans:2,
exp:"REGRA DO UM TERÇO: 1/3 para a IDA, 1/3 para a VOLTA e 1/3 de RESERVA. Essa regra de segurança garante combustível suficiente para imprevistos como ventos contrários, desvios ou emergências."},

{sim:"ARA-3",num:5,tema:"RIPEAM",
q:"Em rumos cruzados com risco de abalroamento, qual é a ação correta da embarcação que avista a outra por boreste?",
opts:["Deverá se manter fora do caminho dessa, e caso as circunstâncias permitam, evitará cruzar sua proa","Deverá se manter fora do caminho dessa, evitando cruzar sua popa","A que avista a outra por bombordo deverá se manter fora do caminho, evitando cruzar sua popa","A que avista a outra por bombordo deverá se manter fora do caminho, evitando cruzar sua proa","Deverá se manter no rumo e aguardar a manobra da outra"],ans:0,
exp:"A embarcação que avista a outra por BORESTE deve manobrar para FICAR FORA DO CAMINHO da outra, e quando possível, evitar cruzar a PROA da outra (pois é mais perigoso que cruzar a popa)."},

{sim:"ARA-3",num:6,tema:"Luzes de Navegação",
q:"Durante o dia, ao avistar uma embarcação com um balão preto no mastro, deduzo que ela estará:",
opts:["Em movimento","Fundeada","Pairando sob máquinas","Engajada na pesca","Sem governo"],ans:1,
exp:"Uma ESFERA PRETA (balão preto) no mastro = marca diurna de embarcação FUNDEADA (ancorada). À noite, a mesma embarcação exibe uma luz branca circular de 360°."},

{sim:"ARA-3",num:7,tema:"Sinais Sonoros",
q:"Dois apitos longos seguidos de dois curtos significam:",
opts:["Tenciono ultrapassá-lo por qualquer bordo","Estou dando máquinas atrás","Tenciono ultrapassá-lo pelo seu bombordo","Estou parando máquinas","Tenciono ultrapassá-lo pelo seu boreste"],ans:2,
exp:"2 longos + 2 curtos = tenciono ultrapassar pelo BOMBORDO. 2 longos + 1 curto = tenciono ultrapassar pelo BORESTE. Concordância da alcançada: 1 longo + 1 curto + 1 longo + 1 curto."},

{sim:"ARA-3",num:8,tema:"Sinais Sonoros",
q:"O apito curto tem a duração de:",
opts:["3 segundos","1 segundo","4 a 6 segundos","2 segundos","1 minuto"],ans:1,
exp:"Apito CURTO = aproximadamente 1 SEGUNDO de duração. Apito LONGO = 4 a 6 segundos. Essa distinção é fundamental para interpretar corretamente os sinais sonoros do RIPEAM."},

{sim:"ARA-3",num:9,tema:"Luzes de Navegação",
q:"Uma luz branca contínua situada tão próximo quanto possível da popa, visível apenas de quem vem de ré, num setor horizontal de 135°, chama-se:",
opts:["Luz de alcançado","Luz de bordo","Luz de mastro","Luz de reboque","Luz de popa"],ans:0,
exp:"LUZ DE ALCANÇADO: luz branca, setor de 135°, posicionada na popa. Visível apenas de quem está atrás da embarcação. O nome vem de 'alcançado': quem vem de trás (alcançando) pode vê-la. Luz de REBOQUE é amarela, no mesmo setor, acima da de alcançado."},

{sim:"ARA-3",num:10,tema:"RIPEAM",
q:"Qual opção NÃO corresponde a um fator considerado ao determinar a velocidade de segurança (Regra 6 do RIPEAM)?",
opts:["A capacidade de manobra da embarcação e sua distância de parada","A presença, à noite, de luzes da costa ou reflexos da própria embarcação","Densidade do tráfego, inclusive pesqueiros e outras embarcações","Grau de visibilidade","A potência máxima do motor da embarcação"],ans:4,
exp:"A potência máxima do motor NÃO é fator para determinar velocidade de segurança. Os fatores do RIPEAM são: visibilidade, densidade do tráfego, calado/manobrabilidade, condições do mar e vento, entre outros. A velocidade de segurança é aquela que permite parar em tempo hábil."},

{sim:"ARA-3",num:11,tema:"Balizamento",
q:"As boias do balizamento podem ser:",
opts:["Cegas ou luminosas","Azuis ou brancas","Esféricas","Sem marca de tope","Brilhantes e opacas"],ans:0,
exp:"As boias de balizamento podem ser CEGAS (sem luz, identificadas apenas durante o dia) ou LUMINOSAS (com luz própria ou refletora, identificadas também à noite). A distinção entre cegas e luminosas é fundamental para a navegação noturna."},

{sim:"ARA-3",num:12,tema:"Balizamento",
q:"Como podemos reconhecer o balizamento à noite?",
opts:["Pela cor e ritmo das luzes","Pela marca e ritmo das luzes","Pela forma e marca do tope","Pela marca de tope e cor","Pelo ritmo das luzes e a marca do tope"],ans:0,
exp:"À noite, o balizamento é reconhecido pela COR e pelo RITMO das luzes. O ritmo (característica) é o padrão de acendimento: luz contínua, luz em grupo, luz em ocultação, etc."},

{sim:"ARA-3",num:13,tema:"Balizamento",
q:"Uma boia com cores pretas e uma ou mais faixas horizontais encarnadas indica:",
opts:["Águas seguras","Canal preferencial","Limite lateral do canal","Perigo isolado","Cabo submarino"],ans:3,
exp:"Preto com faixas horizontais ENCARNADAS = PERIGO ISOLADO. A boia de perigo isolado marca um obstáculo pontual (pedra, naufrágio, banco) com água navegável ao redor."},

{sim:"ARA-3",num:14,tema:"Balizamento",
q:"A marca de tope do sinal de perigo isolado será:",
opts:["Uma esfera preta","Duas esferas encarnadas","Duas esferas pretas","Uma esfera encarnada","Três esferas pretas"],ans:2,
exp:"Perigo isolado: marca de tope = DUAS ESFERAS PRETAS em linha vertical. Cores: preto com faixas horizontais encarnadas. Luz: branca, em grupo de 2 relâmpagos."},

{sim:"ARA-3",num:15,tema:"Balizamento",
q:"A marca de tope do sinal que significa águas seguras é:",
opts:["Um cone encarnado","Cilindro verde","Duas esferas pretas","Uma esfera encarnada","Um xis (X) amarelo"],ans:3,
exp:"Águas seguras: marca de tope = UMA ESFERA ENCARNADA. Cores: listras verticais brancas e encarnadas. Luz: branca, isofásica ou de ocultação (fase mais longa que a ocultação) ou 1 relâmpago por período."},

{sim:"ARA-3",num:16,tema:"Balizamento",
q:"O balizamento que indica qual quadrante tem águas seguras tem as cores:",
opts:["Branca e encarnada","Preta e encarnada","Amarela e preta","Encarnada e amarela","Verde e encarnada"],ans:2,
exp:"Sinal CARDINAL: cores AMARELA e PRETA. As duas cores aparecem em disposições diferentes conforme o ponto cardeal (Norte, Sul, Leste, Oeste), e a marca de tope (cones pretos) varia igualmente."},

{sim:"ARA-3",num:17,tema:"Balizamento",
q:"Quais os formatos das boias laterais de canal?",
opts:["Cilíndrico, quadrangular, charuto e cônico","Quadrangular e esférico","Cilíndrico, pilar, charuto ou cônico","Retangular, pilar ou cúbico","Cilíndrico, quadrangular, esférico e cônico"],ans:2,
exp:"As boias LATERAIS de canal podem ter os formatos: CILÍNDRICO (verde/bombordo no IALA-B), PILAR, CHARUTO ou CÔNICO (encarnada/boreste no IALA-B). Esses formatos ajudam na identificação mesmo sem ver a cor claramente."},

{sim:"ARA-3",num:18,tema:"Balizamento Fluvial",
q:"No balizamento de uma hidrovia, um sinal 'H' significa:",
opts:["Sair do canal","Trocar de margem","Seguir a margem","Seguir meio do canal","Canal junto à margem"],ans:2,
exp:"Sinal H em hidrovia = SEGUIR A MARGEM. O piloto deve aproximar-se da margem do rio. Sinal I = meio do canal. Sinal X = trocar de margem. Sinal Y = bifurcação."},

{sim:"ARA-3",num:19,tema:"Incêndio a Bordo",
q:"Com o incêndio a bordo, qual o seu posicionamento para dar combate às chamas?",
opts:["Mantenho-me a sota-vento das chamas e fumaças","Mantenho-me na proa ou na popa","Mantenho-me a bombordo a favor da fumaça","Mantenho-me a meia embarcação","Mantenho-me a barlavento das chamas e fumaça"],ans:4,
exp:"O combatente deve se posicionar a BARLAVENTO (lado de onde vem o vento) das chamas. Assim, o vento leva o fogo e a fumaça para longe do socorrista, permitindo combate com mais segurança. Nunca fique a sotavento (para onde vai o vento/fogo)."},

{sim:"ARA-3",num:20,tema:"Incêndio a Bordo",
q:"O mais eficiente método de combater incêndios é:",
opts:["Utilizar água em abundância","Utilizar gás halon","Utilizar dióxido de carbono","Utilizar pó químico","Eliminar um dos elementos do triângulo do fogo"],ans:4,
exp:"O método mais EFICIENTE é ELIMINAR UM DOS LADOS DO TRIÂNGULO DO FOGO: resfriamento (retirar o calor), abafamento (retirar o comburente/oxigênio) ou isolamento (retirar o combustível). Os extintores atuam por esses princípios."},

{sim:"ARA-3",num:21,tema:"Incêndio a Bordo",
q:"Os incêndios que ocorrem em líquidos inflamáveis, como gasolina, óleo diesel, querosene, são denominados:",
opts:["Classe C","Classe A","Classe D","Classe E","Classe B"],ans:4,
exp:"Classe A = sólidos (madeira, papel, tecido). Classe B = LÍQUIDOS inflamáveis (gasolina, diesel, álcool, óleo). Classe C = elétrico/equipamentos energizados. Classe D = metais (magnésio, titânio, lítio)."},

{sim:"ARA-3",num:22,tema:"Incêndio a Bordo",
q:"O combate a incêndio é muito facilitado quando:",
opts:["Fazemos somente a contenção das chamas","Jogamos material sólido sobre as chamas espalhadas","Removemos o material inflamável e resfriamos os locais próximos","Agitamos as chamas e cercamos com barreiras","Abrimos portas, escotilhas e vigias e deixamos ventilar o ambiente"],ans:2,
exp:"O combate é facilitado REMOVENDO o material combustível das proximidades (isolamento do combustível) e RESFRIANDO os materiais vizinhos para evitar propagação. Nunca abrir aberturas desnecessariamente — o oxigênio alimenta o fogo."},

{sim:"ARA-3",num:23,tema:"Estabilidade",
q:"O excesso de peso em partes altas ou má distribuição lateral prejudica a:",
opts:["Estabilidade da embarcação","Estanqueidade da embarcação","Flutuabilidade direcional","Economia de combustível","Convivência do pessoal a bordo"],ans:0,
exp:"Peso excessivo em partes ALTAS eleva o centro de gravidade (G), comprometendo a ESTABILIDADE. A embarcação fica propensa a embarcar banda e pode emborcar. Peso nas laterais de forma assimétrica cria banda permanente."},

{sim:"ARA-3",num:24,tema:"Estabilidade",
q:"Um barco com muito peso a meia nau e pouco peso na proa e popa pode vir a quebrar ao meio. Nesta situação diz-se que ele está com:",
opts:["Desgoverno","Banda","Contra-alquebramento","Trim","Alquebramento"],ans:2,
exp:"CONTRA-ALQUEBRAMENTO: excesso de peso a meia nau, extremidades mais altas. O barco fica como uma 'corcunda' e pode quebrar ao meio em mar agitado. ALQUEBRAMENTO é o oposto: peso nas extremidades, centro mais alto."},

{sim:"ARA-3",num:25,tema:"Segurança / Coletes",
q:"Não se deve utilizar o colete salva-vidas nas situações abaixo, EXCETO:",
opts:["Como encosto","Para fazer demonstração","Como travesseiro","Como brinquedo","Como assento"],ans:1,
exp:"A ÚNICA situação em que se pode usar o colete fora de emergência é para DEMONSTRAÇÃO (treinamento de evacuação e uso). Nunca deve ser usado como assento, travesseiro, brinquedo ou encosto, pois isso danifica o material flutuante."},

{sim:"ARA-3",num:26,tema:"Segurança / Coletes",
q:"Se durante o passeio você constasse que há duas pessoas a mais do que o número de coletes, a providência mais correta é:",
opts:["Continuar e dividir um colete maior para duas pessoas","Continuar e improvisar dois coletes","Após avaliar que a embarcação é segura, não tomar nenhuma atitude","Regressar para o local de partida e desembarcar dois passageiros","Continuar, desde que haja boia circular a bordo"],ans:3,
exp:"A atitude CORRETA e LEGAL é REGRESSAR e DESEMBARCAR os passageiros excedentes. Não há alternativa segura ou legal para continuar sem coletes para todos — improvisar ou dividir coletes é perigoso e ilegal."},

{sim:"ARA-3",num:27,tema:"Segurança / Coletes",
q:"Os coletes salva-vidas infláveis devem ser enchidos:",
opts:["Ao iniciar a viagem","Antes de iniciar a viagem","Somente depois que entrar na balsa","Antes de abandonar a embarcação","Quando já dentro da água"],ans:4,
exp:"Coletes infláveis: encher QUANDO JÁ DENTRO DA ÁGUA (ou ao abandonar a embarcação em casos específicos). O volume do colete inflado dificulta o movimento durante a evacuação e a entrada na balsa salva-vidas."},

{sim:"ARA-3",num:28,tema:"Documentação",
q:"São duas situações que geram o cancelamento da inscrição da embarcação:",
opts:["O nome igual a de outra já inscrita e a sua apreensão","O naufrágio e o abandono","Sua apreensão e a morte de seu proprietário","A morte de seu proprietário e sua colisão com morte acidental","A apreensão e a multa"],ans:1,
exp:"O cancelamento da inscrição da embarcação ocorre nos casos de NAUFRÁGIO e ABANDONO. Nesses casos, a embarcação deixa de existir como tal ou é considerada irrecuperável, tornando o registro inválido."},

{sim:"ARA-3",num:29,tema:"Leis e Normas",
q:"Deixar de inscrever a embarcação acarretará na seguinte penalidade:",
opts:["A embarcação será retida","Suspensão da carteira de habilitação por 30 dias","A embarcação será apreendida","Suspensão da carteira de habilitação por 60 dias","Será aplicada uma multa"],ans:4,
exp:"Conforme a LESTA, deixar de inscrever a embarcação sujeita o proprietário ao pagamento de MULTA. A embarcação sem inscrição pode também ser apreendida como medida cautelar até regularização."},

{sim:"ARA-3",num:30,tema:"Leis e Normas",
q:"Navegar com embarcação motorizada a menos de 200 metros das praias em áreas de banhistas — o condutor:",
opts:["Será multado e detido","Terá seu barco apreendido","Será multado e terá seu barco apreendido","Terá seu barco apreendido e leiloado","Será multado"],ans:4,
exp:"Navegar a menos de 200m de áreas de banhistas sujeita o condutor a MULTA (Grupo D da LESTA: R$40 a R$1.600) ou suspensão da habilitação por até 60 dias. A apreensão da embarcação não é a penalidade primária neste caso."},

{sim:"ARA-3",num:31,tema:"Sobrevivência",
q:"As rações modernas têm principalmente em sua composição:",
opts:["Açúcar e sal","Açúcar","Fibras","Proteína","Sal"],ans:1,
exp:"As rações de sobrevivência modernas têm principalmente AÇÚCAR (carboidratos de rápida assimilação) em sua composição, por fornecerem energia imediata com menor necessidade de água para digestão, sendo ideais para situações de escassez de água."},

{sim:"ARA-3",num:32,tema:"Primeiros Socorros",
q:"Se a pessoa está mareada (enjoada), convém:",
opts:["Dar comida em pequenas quantidades","Fazê-la se ocupar com atividades nos motores","Deixá-la no convés, na sombra, tomando ar fresco","Ministrar bebidas geladas e deitá-la em local parcialmente fechado","Ministrar bebidas quentes e deitá-la em local fechado"],ans:2,
exp:"Em caso de enjoo de mar: DEIXAR NO CONVÉS (ar fresco), na SOMBRA, de preferência olhando para o horizonte. Evitar odores fortes, locais fechados e alimentos pesados. O ar fresco e o horizonte estabilizam a percepção vestibular."},

{sim:"ARA-3",num:33,tema:"Primeiros Socorros",
q:"Logo após retirar a vítima de choque elétrico, devemos:",
opts:["Tratar de imediato as queimaduras","Tratar primeiro os possíveis ferimentos","Aplicar analgésicos nos locais afetados","Estancar as possíveis hemorragias","Tratar primeiro o trauma que pode levar à morte mais rápido"],ans:4,
exp:"Sequência de prioridades: 1) Parada cardiorrespiratória (RCP se necessário) 2) Hemorragias graves 3) Queimaduras 4) Ferimentos. Sempre tratar o TRAUMA DE MAIOR RISCO DE VIDA em primeiro lugar."},

{sim:"ARA-3",num:34,tema:"Primeiros Socorros",
q:"Na intoxicação por gases, a pele assume uma cor:",
opts:["Amarelada","Avermelhada","Azulada","Esbranquiçada","Acinzentada"],ans:2,
exp:"A intoxicação por gases (especialmente monóxido de carbono, CO) causa CIANOSE — coloração AZULADA da pele e mucosas — devido à falta de oxigenação adequada dos tecidos. É um sinal de emergência que exige socorro imediato."},

{sim:"ARA-3",num:35,tema:"Primeiros Socorros",
q:"Para imobilizar o braço, eu devo deixá-lo:",
opts:["Esticado","Na posição que quebrou","Dobrado","Afastado do corpo","Em qualquer posição"],ans:2,
exp:"O braço (antebraço, úmero) deve ser imobilizado DOBRADO (em ângulo de ~90°), preso ao tórax com tipoia. A perna, ao contrário, deve ser imobilizada ESTICADA. Esse é um dado muito cobrado na prova."},

{sim:"ARA-3",num:36,tema:"Comunicações",
q:"Em caso de emergência em águas interiores, o canal indicado para pedir socorro pelo rádio VHF é:",
opts:["Canal 12","Canal 8","Canal 6","Canal 16","Canal 72"],ans:3,
exp:"CANAL 16 VHF é o canal internacional de socorro, segurança e chamada. Todo radiotelefonista e marinheiro deve monitorá-lo permanentemente. Em emergências, a primeira chamada deve ser feita no Canal 16."},

{sim:"ARA-3",num:37,tema:"Segurança / Equipamentos",
q:"A boia circular deve ser presa:",
opts:["No convés principal","Num armário da cabine de comando","Em local de fácil retirada","Na proa e na popa da embarcação","No convés abaixo da linha d'água"],ans:2,
exp:"A boia circular salva-vidas deve estar em LOCAL DE FÁCIL RETIRADA, preferencialmente na popa, onde pode ser rapidamente arremessada em caso de homem ao mar. Deve estar solta (não amarrada) para ser jogada imediatamente."},

{sim:"ARA-3",num:38,tema:"Sobrevivência",
q:"Num abandono da embarcação, NÃO devemos:",
opts:["Saltar em cima da balsa salva-vidas","Subir na balsa com coletes salva-vidas","Descer pela borda em escadas de quebra-peito","Saltar na água","Utilizar coletes salva-vidas"],ans:0,
exp:"NUNCA saltar EM CIMA da balsa — pode danificá-la, furá-la ou ferir os ocupantes. A forma correta é entrar na balsa DESCENDO pela borda ou nadando até ela. Só pular na água se não houver alternativa."},

{sim:"ARA-3",num:39,tema:"Fundeio",
q:"Tipo de âncora que, devido ao grande poder de unhar, vem tendo ótima aceitação no mercado de embarcações amadoras:",
opts:["Garateia","Almirantado","Danforth","Patente","Bruce"],ans:4,
exp:"A âncora BRUCE (também chamada de âncora de garra) tem ótimo poder de fixação em quase todos os tipos de fundo (areia, lama, cascalho, rocha), auto-ancoragem e facilidade de estivagem. É atualmente a preferida no lazer."},

{sim:"ARA-3",num:40,tema:"Fundeio",
q:"Qual das condições abaixo NÃO é característica de um bom fundeadouro?",
opts:["Ter apoio de uma marina","Ter profundidade adequada ao fundeio","Ter fundo de boa tença","Ter um fundo de má tença","Ser abrigado de ventos, correntes e ondas"],ans:3,
exp:"Um bom fundeadouro deve ter: profundidade adequada, fundo de BOA TENÇA (areia, lama, cascalho), abrigo de ventos e correntes, e espaço para girar. Fundo de MÁ TENÇA (pedra, coral, areia dura) impede a âncora de unhar corretamente."},

// ===================== ARA-4 =====================
{sim:"ARA-4",num:1,tema:"Espias / Atracação",
q:"O que pode ser improvisado e usado como defensa numa atracação?",
opts:["Resto de metais ou madeira","Espias e pneus desgastados","Qualquer material de concreto ou ferro","Sacos com arames ou ferros","Sacos de areia"],ans:1,
exp:"ESPIAS VELHAS e PNEUS DESGASTADOS são materiais adequados para defensas improvisadas por sua elasticidade e resistência. Materiais rígidos (metal, concreto, madeira dura) podem danificar o casco da embarcação."},

{sim:"ARA-4",num:2,tema:"Fundeio",
q:"Tipo de âncora que, devido ao grande poder de unhar, vem tendo ótima aceitação no mercado:",
opts:["Garateia","Almirantado","Danforth","Patente","Bruce"],ans:4,
exp:"A âncora BRUCE é a que tem maior aceitação atual no lazer náutico pelo seu grande poder de unhar em variados tipos de fundo e facilidade de uso e armazenamento."},

{sim:"ARA-4",num:3,tema:"Fundeio",
q:"A ligação da âncora ao barco, quando constituída de elos de correntes, chama-se:",
opts:["Espias","Lançantes","Amarra","Través","Escotilhas"],ans:2,
exp:"AMARRA é o cabo ou corrente que liga a âncora à embarcação. Quando feita de elos de corrente, chama-se amarra de corrente. Quando feita de cabo de aço ou fibra sintética, chama-se amarra mista ou cabo de fundeio."},

{sim:"ARA-4",num:4,tema:"Fundeio",
q:"Qual das condições abaixo NÃO é característica de um bom fundeadouro?",
opts:["Ter apoio de uma marina","Ter profundidade adequada","Ter fundo de boa tença","Ter um fundo de má tença","Ser abrigado de ventos, correntes e ondas"],ans:3,
exp:"Fundo de MÁ TENÇA não permite que a âncora una (fixe) corretamente no fundo. Um bom fundeadouro deve ter: profundidade adequada, boa tença (areia, lama), abrigo e espaço para girar."},

{sim:"ARA-4",num:5,tema:"Fundeio",
q:"Para pegarmos uma boia e amararmos uma embarcação a ela, devemos proceder:",
opts:["Dando atrás ao passarmos pela boia","Paralelos a ela com muito seguimento","Aproados a ela com muito seguimento","Aproar a ela com pouco seguimento","Aproados a ela com seguimento regular"],ans:3,
exp:"Para pegar uma boia de amarração, devemos nos aproar (proa em direção à boia) e nos aproximar com POUCO SEGUIMENTO (baixa velocidade), para que a proa passe levemente sobre a boia e ela possa ser agarrada facilmente."},

{sim:"ARA-4",num:6,tema:"Nomenclatura",
q:"O leme é:",
opts:["Estrutura metálica ou de madeira que tem por finalidade dar direção à embarcação e mantê-la no rumo","Estrutura de ferro com alhetas que dão impulso sempre para o norte","Estrutura que possui cana do leme e serve para impulsionar a embarcação","O principal propulsor de uma embarcação","Estrutura localizada na proa que serve para guiná-la com a ação dos motores"],ans:0,
exp:"O LEME é a superfície hidrodinâmica (metálica ou de madeira) localizada na popa da embarcação, controlada pela cana do leme ou pelo volante, com a finalidade de dar DIREÇÃO à embarcação e mantê-la no RUMO determinado."},

{sim:"ARA-4",num:7,tema:"RIPEAM",
q:"Na situação de rumos cruzados, quem tem preferência de passagem?",
opts:["A que tem maior tonelagem","A que avistar a outra pelo seu boreste, vendo a luz encarnada da outra","A que está empregando maior velocidade","A que avistar a outra pelo seu bombordo, vendo a luz verde da outra","Nenhuma delas — as duas guinam para bordos opostos"],ans:3,
exp:"Em rumos cruzados: preferência de quem avista pelo BOMBORDO (vê a luz verde da outra). Quem avista pelo boreste (vê a luz encarnada/vermelha da outra) deve MANOBRAR."},

{sim:"ARA-4",num:8,tema:"RIPEAM",
q:"As regras do RIPEAM se aplicam a:",
opts:["Apenas embarcações miúdas","Apenas embarcações de esporte e recreio","Apenas embarcações de alto mar","Todas as embarcações em mar aberto e em todas as águas a este ligadas navegáveis por navios de alto mar, e para embarcações em águas interiores","Todas as embarcações em mar aberto, apenas navegáveis por esporte e recreio"],ans:3,
exp:"O RIPEAM se aplica a TODAS as embarcações: em alto mar, em águas costeiras, em rios, lagos e lagoas navegáveis. Não há exceção por tamanho, tipo ou uso da embarcação."},

{sim:"ARA-4",num:9,tema:"Luzes de Navegação",
q:"As luzes de bordos, de mastro e de alcançado são:",
opts:["Circulares verdes e encarnadas","Dependem do tipo e porte da embarcação","Circulares","Setorizadas para melhor identificar o movimento da embarcação à noite","Circulares brancas"],ans:3,
exp:"Luzes de bordo (verde e encarnada), de mastro (branca) e de alcançado (branca) são SETORIZADAS, ou seja, visíveis apenas em determinados setores angulares, para que o observador identifique o aspecto e movimento da embarcação."},

{sim:"ARA-4",num:10,tema:"RIPEAM",
q:"Duas motos aquáticas navegam em rumo de colisão (roda a roda). A manobra correta será:",
opts:["A menor guina para bombordo","Ambas guinam para bombordo","Ambas guinam para boreste","Ambas param","A maior guina para boreste"],ans:2,
exp:"Em situação RODA A RODA (proa com proa), AMBAS as embarcações devem guinar para BORESTE (direita), passando pelo lado BOMBORDO (esquerda) uma da outra — como o trânsito em estrada de duas mãos."},

{sim:"ARA-4",num:11,tema:"RIPEAM",
q:"O navegante, em caso de dúvida sobre o risco de abalroamento, deverá:",
opts:["Não manobrar a embarcação","Aguardar a outra embarcação para manobrar","Presumir que tal risco existe","Desconsiderar o risco","Presumir que tal risco não existe"],ans:2,
exp:"RIPEAM Regra 7: em caso de DÚVIDA sobre o risco de abalroamento, deve-se PRESUMIR QUE TAL RISCO EXISTE e agir conforme as regras de manobra. É sempre melhor manobrar desnecessariamente do que arriscar uma colisão."},

{sim:"ARA-4",num:12,tema:"RIPEAM",
q:"O termo 'em movimento' se aplica a todas as embarcações que:",
opts:["Estão amarradas","Estão encalhadas","Estão fundeadas","Não se encontram fundeadas, amarradas a terra ou encalhadas","Estão atracadas"],ans:3,
exp:"RIPEAM: 'Em movimento' (underway) é a condição de toda embarcação que NÃO está fundeada, amarrada a terra (atracada) ou encalhada. Uma embarcação pode estar 'em movimento' mesmo sem andar (ex: sem seguimento, com máquinas paradas)."},

{sim:"ARA-4",num:13,tema:"Luzes de Navegação",
q:"Uma embarcação, à noite, exibindo duas luzes circulares encarnadas em linha vertical, será:",
opts:["Uma embarcação engajada na pesca que não seja de arrasto","Uma embarcação engajada na pesca de arrasto","Uma embarcação sem governo","Uma embarcação rebocando","Uma embarcação de praticagem"],ans:2,
exp:"DUAS luzes circulares ENCARNADAS em linha vertical = SEM GOVERNO. Indica impossibilidade de manobrar. Uma embarcação de pesca NÃO de arrasto exibe verde acima de branca. Reboque exibe amarela."},

{sim:"ARA-4",num:14,tema:"Luzes de Navegação",
q:"De acordo com o RIPEAM, o holofote pode ser utilizado:",
opts:["Em rios estreitos para iluminar curvas à noite","Para navegar no porto com visibilidade restrita","Para sinalizar perigo a outra embarcação quando dirigido a ela","Em canais de tráfego intenso para evitar colisão à noite","Em rios e lagos exceto no mar"],ans:2,
exp:"O holofote pode ser usado para SINALIZAR PERIGO a outra embarcação quando dirigido diretamente a ela, em situações de risco de colisão iminente. Seu uso é restrito — não deve ser usado de modo a cegar outros navegantes."},

{sim:"ARA-4",num:15,tema:"Balizamento",
q:"O balizamento que indica perigo isolado possui as cores:",
opts:["Branca e encarnada em listas verticais","Preta e encarnada em listas verticais","Preta e encarnada em listas horizontais","Encarnada e amarela em duas metades","Branca e preta em listas horizontais"],ans:2,
exp:"PERIGO ISOLADO: preto com faixas horizontais ENCARNADAS. Marca de tope: duas esferas pretas. A orientação HORIZONTAL das faixas diferencia do sinal de águas seguras (listras verticais)."},

{sim:"ARA-4",num:16,tema:"Balizamento",
q:"Uma boia com cores brancas e encarnadas em faixas verticais indica:",
opts:["Águas seguras","Canal preferencial","Limite lateral de canal","Perigo isolado","Águas perigosas"],ans:0,
exp:"Listras VERTICAIS brancas e encarnadas = ÁGUAS SEGURAS. Indica que há água navegável em todos os lados da boia."},

{sim:"ARA-4",num:17,tema:"Leis e Normas",
q:"Em relação ao Arrais-Amador, o habilitado deverá ter conhecimentos sobre:",
opts:["O sistema de balizamento IALA B","Noções de funcionamento de EPIRB","GPS e DGPS","Navegação astronômica","Noções de estabilidade de embarcações"],ans:0,
exp:"O programa do exame de Arrais-Amador inclui obrigatoriamente o sistema de BALIZAMENTO IALA-B, que é utilizado no Brasil. É um dos temas mais cobrados na prova."},

{sim:"ARA-4",num:18,tema:"Balizamento",
q:"Durante o dia, observou-se um pilar com dois cones pretos em cima. Estamos diante de:",
opts:["Um balizamento luminoso","Uma boia de bifurcação de canal","Um canal preferencial","Um quadrante de águas seguras","Um quadrante de águas perigosas"],ans:3,
exp:"Dois cones com vértices para CIMA = Cardinal NORTE. Indica: navegue pelo quadrante NORTE deste sinal — há águas seguras ao norte. Dois cones com vértices para baixo = Cardinal Sul."},

{sim:"ARA-4",num:19,tema:"Balizamento",
q:"São situações normalmente indicadas por balizamento, EXCETO:",
opts:["Área de regatas e pontos de espera de eclusas","Áreas onde estão sendo realizados serviços especiais","Novos perigos","Perigos naturais e limites laterais dos canais","Zonas de acidentes marítimos importantes"],ans:0,
exp:"Áreas de regatas e pontos de espera de eclusas NÃO são normalmente indicados por balizamento permanente — são situações temporárias ou específicas. O balizamento permanente marca perigos, limites de canais, serviços especiais, novos perigos e zonas de acidentes."},

{sim:"ARA-4",num:20,tema:"Balizamento Fluvial",
q:"No balizamento de uma hidrovia observou-se um sinal com dois '+' um sobre o outro numa placa no rio. Que significa:",
opts:["Seguir meio do canal","Trocar de margem","Perigo isolado","Bifurcação de canal","Sair do meio do canal"],ans:2,
exp:"Sinal de dois '+' em hidrovia = PERIGO ISOLADO no rio (obstáculo no canal). O navegante deve se afastar do local ou navegar com extrema cautela."},

{sim:"ARA-4",num:21,tema:"Balizamento",
q:"No Brasil, a direção convencional do balizamento — ou seja, a numeração cresce sempre:",
opts:["Vindo do mar e na navegação fluvial descendo o rio","Indo para o mar e na navegação fluvial descendo o rio","De montante para jusante","Vindo do mar e na navegação fluvial subindo o rio","Indo do mar e na navegação fluvial subindo o rio"],ans:3,
exp:"Direção convencional no Brasil (IALA-B): VINDO DO MAR (entrando no porto) e nos rios subindo de JUSANTE (foz) para MONTANTE (nascente). A numeração cresce nessa direção, e os sinais encarnados ficam a boreste ao entrar."},

{sim:"ARA-4",num:22,tema:"Incêndio a Bordo",
q:"Só haverá fogo quando:",
opts:["Ocorrer a presença de: oxigênio, comburente e temperatura de ignição","Ocorrer a presença de: ar, combustível e comburente","Ocorrer a presença de: comburente, combustível e temperatura de ignição","Houver o combustível, o comburente e o agente extintor","Ocorrer a presença de: oxigênio, combustível e comburente"],ans:2,
exp:"Triângulo do fogo: COMBURENTE + COMBUSTÍVEL + TEMPERATURA DE IGNIÇÃO. O comburente mais comum é o oxigênio (componente do ar). Todos os três precisam estar simultaneamente presentes."},

{sim:"ARA-4",num:23,tema:"Incêndio a Bordo",
q:"Extintores utilizados em incêndios classe 'C' são identificados por meio de:",
opts:["Um quadrado vermelho","Um triângulo verde","Um círculo azul","Um círculo verde","Uma estrela vermelha"],ans:2,
exp:"Identificação dos extintores: Classe A = triângulo verde. Classe B = quadrado vermelho. Classe C = CÍRCULO AZUL. Classe D = estrela amarela. A cor e forma indicam para qual classe de incêndio o extintor é adequado."},

{sim:"ARA-4",num:24,tema:"Incêndio a Bordo",
q:"Estou na popa e vejo sair fumaça no console de navegação. Qual extintor devo pegar?",
opts:["Água","Tanto faz","Espuma","CO2","Pó seco"],ans:3,
exp:"Fumaça no console de navegação indica incêndio em equipamentos ELÉTRICOS (Classe C). O extintor correto é o de CO2 (gás carbônico), pois não conduz eletricidade e não danifica os equipamentos eletrônicos."},

{sim:"ARA-4",num:25,tema:"Incêndio a Bordo",
q:"O melhor agente extintor para incêndios Classe 'A' e 'B', apesar de existir em quantidade limitada a bordo, é:",
opts:["A água","Pó químico seco","O halon","A espuma","CO2"],ans:3,
exp:"A ESPUMA MECÂNICA é o melhor agente extintor para incêndios Classe A e B por combinar resfriamento (água que contém) com abafamento (camada de espuma). O halon era o melhor, mas foi proibido por destruir a camada de ozônio."},

{sim:"ARA-4",num:26,tema:"Estabilidade",
q:"Nunca devemos:",
opts:["Afundar a marca do limite mínimo de flutuação","Colocar mais peso na parte de baixo que na parte de cima da embarcação","Colocar pesos pequenos no convés principal","Dividir os pesos entre as laterais da embarcação","Retirar pesos altos da embarcação"],ans:0,
exp:"AFUNDAR A LINHA DE FLUTUAÇÃO abaixo da marca mínima significa sobrecarregar a embarcação além de seu limite de segurança. Isso reduz a borda livre, aumenta o risco de embarque d'água e pode comprometer a estabilidade."},

{sim:"ARA-4",num:27,tema:"Estabilidade",
q:"Um barco com muito peso na proa e popa e pouco peso a meia nau está correndo perigo de quebrar ao meio. Diz-se que ele está com:",
opts:["Contra-alquebramento","Aprumado","Desgovernado","Trimado","Alquebramento"],ans:4,
exp:"ALQUEBRAMENTO: excesso de peso nas EXTREMIDADES (proa e popa) com pouco peso a meia nau. As extremidades ficam imersas e o centro fica elevado — o barco pode quebrar ao meio. CONTRA-ALQUEBRAMENTO é o oposto."},

{sim:"ARA-4",num:28,tema:"Segurança / Coletes",
q:"A melhor maneira de certificar-se sobre a quantidade de coletes a bordo de um veleiro é:",
opts:["Consultando a Capitania dos Portos","Consultando a DPC","Contando quantos assentos há","Consultando a lotação no documento da embarcação","Consultando o fabricante"],ans:3,
exp:"O número de coletes exigido é igual à LOTAÇÃO da embarcação, que consta no TIE (Título de Inscrição da Embarcação). Esse é o documento legal que define quantas pessoas a embarcação pode transportar com segurança."},

{sim:"ARA-4",num:29,tema:"Leis e Normas",
q:"A autoridade marítima sustará o andamento de qualquer documento de quem estiver em débito decorrente de infração até:",
opts:["Sua venda","A regularização da embarcação","Sua quitação","60 dias","12 meses"],ans:2,
exp:"A Autoridade Marítima pode SUSTAR (suspender o andamento de) documentos e atos administrativos de quem estiver em débito por infração até a QUITAÇÃO da dívida — ou seja, até o pagamento da multa ou regularização da pendência."},

{sim:"ARA-4",num:30,tema:"Leis e Normas",
q:"São aplicáveis ao Comandante, em caso de descumprimento das suas competências, a suspensão do certificado de habilitação até:",
opts:["6 meses","12 meses","4 meses","18 meses","24 meses"],ans:1,
exp:"Conforme a LESTA, o Comandante pode ter o certificado de habilitação suspenso por até 12 MESES em caso de descumprimento das competências estabelecidas. Em casos gravíssimos (como embriaguez com reincidência), pode haver cassação."},

{sim:"ARA-4",num:31,tema:"Segurança / Coletes",
q:"A melhor maneira de saltar na água, utilizando o colete salva-vidas, é com:",
opts:["As pernas esticadas e os pés juntos","Mergulhando de cabeça, protegendo o rosto","As pernas abertas, a mão direita no nariz e a mão esquerda no ombro","A mão direita no nariz e os pés separados","Os pés juntos e a perna dobrada"],ans:0,
exp:"Posição correta para saltar com colete: PERNAS ESTICADAS e PÉS JUNTOS, braços ao lado do corpo. Isso minimiza o impacto, evita que o colete golpeie o rosto e garante que o colete funcione corretamente ao entrar na água."},

{sim:"ARA-4",num:32,tema:"Sobrevivência",
q:"Em naufrágio, fadiga e esgotamento conduzem a distúrbios mentais. O melhor meio de evitá-los é:",
opts:["Procurar dormir e descansar o máximo possível","Alimentar-se e beber água em abundância","Ficar no sol sem roupas","Retirar o colete salva-vidas","Agitar-se e não dormir"],ans:0,
exp:"DORMIR e DESCANSAR são as principais medidas para evitar distúrbios mentais e exaustão no naufrágio. A conservação de energia é fundamental para a sobrevivência. Movimentos desnecessários gastam energia preciosa."},

{sim:"ARA-4",num:33,tema:"Primeiros Socorros",
q:"No caso de fratura de antebraço, podemos imobilizá-lo com:",
opts:["Tábua, papelão ou jornal grosso","Tiras de pano amarradas no pescoço","Material de borracha sintética","Material flexível","Bandagens de algodão esterilizado"],ans:0,
exp:"Para imobilizar fratura de antebraço, usar TÁBUA, PAPELÃO ou JORNAL GROSSO dobrado como tala rígida improvisada, fixada com ataduras. O braço deve ser imobilizado dobrado (em ângulo de 90°) preso ao tórax."},

{sim:"ARA-4",num:34,tema:"Meteorologia",
q:"Deveremos ter cautela ou não nos fazer ao mar se tomarmos conhecimento da chegada de uma frente:",
opts:["Estacionária","Mista","Fria","Quente","Oclusa"],ans:2,
exp:"A FRENTE FRIA é a que mais preocupa na navegação por trazer mudanças bruscas e rápidas de tempo: ventos fortes, rajadas, chuvas e mar agitado. Uma frente fria pode surpreender o navegante em minutos."},

{sim:"ARA-4",num:35,tema:"Fundeio",
q:"Qual o mais aconselhável e mais rápido procedimento para se descobrir a profundidade de um local de fundeio?",
opts:["Consultando a carta náutica daquele local","Consultando o aviso aos navegantes","Consultando a carta 12.000","Consultando o GPS","Consultando o odômetro"],ans:0,
exp:"A CARTA NÁUTICA é o instrumento mais rápido e confiável para verificar a profundidade de um local de fundeio. As cartas náuticas têm as sondagens (profundidades) atualizadas para cada região."},

{sim:"ARA-4",num:36,tema:"Meteorologia",
q:"O grande criador e influenciador dos fenômenos meteorológicos sobre a superfície da terra é:",
opts:["A temperatura do planeta","O solo","O sol","As estrelas","O ar atmosférico"],ans:2,
exp:"O SOL é o principal motor dos fenômenos meteorológicos: aquece a atmosfera de forma desigual, cria diferenças de pressão, gera ventos, evapora água dos oceanos, cria chuvas. Sem o sol, não haveria meteorologia como a conhecemos."},

{sim:"ARA-4",num:37,tema:"Meteorologia",
q:"Quando uma frente fria se aproxima, podemos prever que o tempo:",
opts:["Mudará para melhor","Ficará mais adequado à navegação","Ficará com pouca visibilidade","Tanto faz","Mudará para pior"],ans:4,
exp:"Frente fria = tempo PIORA. A chegada da frente fria traz ventos fortes, chuvas, mar agitado e queda de temperatura. O navegante deve buscar abrigo antes que a frente se estabeleça na área."},

{sim:"ARA-4",num:38,tema:"Bandeiras e Sinais",
q:"Na faina de 'Homem ao Mar', içamos a seguinte bandeira:",
opts:["Oscar","Victor","Lima","Alfa","Nenhuma das bandeiras acima"],ans:0,
exp:"BANDEIRA OSCAR (O): metade superior amarela e metade inferior vermelha, dividida em diagonal. Significa 'HOMEM AO MAR'. Deve ser hasteada imediatamente ao detectar uma pessoa caída ao mar, para alertar outras embarcações."},

{sim:"ARA-4",num:39,tema:"Sobrevivência",
q:"Se você é náufrago mas conseguiu comunicar sua posição para alguém em terra, você deverá agora:",
opts:["Localizar a terra mais próxima","Improvisar uma vela e tentar navegar","Evitar sair do local onde se encontra","Tentar remar para chegar à terra","Ir na direção da posição do barco de resgate"],ans:2,
exp:"Após comunicar a posição, a regra de ouro é PERMANECER NO LOCAL. As equipes de resgate irão até você. Nadar ou remar para longe aumenta a área de busca e pode leva-lo a um local mais perigoso ou fazer você se perder."},

{sim:"ARA-4",num:40,tema:"Sobrevivência",
q:"O cabo que prende a balsa rígida à embarcação só deve ser cortado quando:",
opts:["Já estiverem todos embarcados na balsa","A embarcação estiver afundando","A balsa estiver pronta para navegar","A balsa estiver furada","A balsa se afastar"],ans:0,
exp:"O cabo da balsa só deve ser cortado quando TODOS já estiverem embarcados na balsa e ela estiver pronta para se afastar. Nunca cortar antes, pois a embarcação pode afundar ou derivar enquanto ainda há pessoas a bordo."},

// ===================== ARA-5 (seleção de questões únicas) =====================
{sim:"ARA-5",num:2,tema:"Balizamento",
q:"Qual é o único caso em que se utiliza um balizamento dobrado (dois sinais iguais)?",
opts:["Em áreas de dragagem recente","Quando uma grande pedra obstrui o canal","Quando da existência de um perigo isolado ainda não registrado em carta náutica","Quando da existência de um novo perigo já registrado em carta náutica","Quando existe um casco soçobrado há pelo menos 10 anos"],ans:2,
exp:"O balizamento dobrado (dois sinais iguais lado a lado) é usado EXCLUSIVAMENTE para NOVOS PERIGOS ainda não registrados em carta náutica, alertando o navegante de forma reforçada para o risco desconhecido."},

{sim:"ARA-5",num:3,tema:"Balizamento",
q:"O balizamento de canal preferencial tem as cores:",
opts:["Verde e amarelo","Preta e amarela","Verde e encarnada","Branca e encarnada","Branca e preta"],ans:3,
exp:"Canal preferencial: cores BRANCA e ENCARNADA. Usa as mesmas cores de águas seguras, mas com a faixa horizontal encarnada indicando o canal secundário. A marca de tope é uma esfera encarnada com uma faixa horizontal branca."},

{sim:"ARA-5",num:6,tema:"Balizamento",
q:"A marca de tope do sinal de águas seguras é:",
opts:["Um triângulo encarnado","Uma esfera branca","Um triângulo verde","Uma esfera encarnada","Um triângulo preto"],ans:3,
exp:"Águas Seguras: marca de tope = UMA ESFERA ENCARNADA. Cores: listras verticais brancas e encarnadas. Luz: branca isofásica ou de ocultação, ou 1 relâmpago por período."},

{sim:"ARA-5",num:7,tema:"Fundeio",
q:"Para que serve a boia de arinque?",
opts:["Para ser usada em fundo de pedra","Para indicar o local onde a âncora está no fundo","Para determinar o local onde podemos fundear com segurança","Para evitar que a embarcação garre","Para amarrar a embarcação próxima à marina"],ans:1,
exp:"A BOIA DE ARINQUE é um objeto flutuante preso por um cabo (arinque) diretamente à âncora. Serve para INDICAR O LOCAL EXATO onde a âncora está no fundo, facilitando sua recuperação e alertando outros navegantes."},

{sim:"ARA-5",num:10,tema:"Manobra",
q:"Uma embarcação com um hélice, rotação direita, leme a meio, com seguimento e hélice em marcha avante — a proa guinará para:",
opts:["Boreste lentamente","Bombordo rapidamente","Boreste rapidamente","Bombordo lentamente","Mantém o rumo"],ans:0,
exp:"Hélice de rotação DIREITA (sentido horário, visto de ré) em marcha avante tende a empurrar a popa para bombordo, fazendo a proa girar para BORESTE (direita) lentamente — efeito do passo transversal da hélice."},

{sim:"ARA-5",num:12,tema:"Fundeio",
q:"Quando uma embarcação é levada pelo vento, maré ou corrente, arrastando sua âncora pelo fundo, diz-se que ela está:",
opts:["Fundeando","Garrando","Escorregando","Unhando","Agarrando"],ans:1,
exp:"GARRANDO: quando a âncora não consegue manter o fundo e é arrastada pelo vento, maré ou corrente. É uma situação de perigo que exige ação imediata: largar mais amarra, mudar de posição ou suspender e refundear."},

{sim:"ARA-5",num:14,tema:"Fundeio",
q:"Para fundear devemos:",
opts:["Largar a âncora e dar máquina adiante","Quando a embarcação estiver sem seguimento, largar a âncora e dar máquina devagar adiante","Parar a máquina e largar a âncora","Largar a âncora com seguimento avante","Inverter a máquina e quando a embarcação estiver caindo a ré, largar a âncora"],ans:4,
exp:"Procedimento correto: inverter as máquinas (dar ré), e quando a embarcação estiver CAINDO A RÉ, largar a âncora. Assim, a amarra estende à frente da âncora e ela une corretamente no fundo, sem enrolar a amarra."},

{sim:"ARA-5",num:15,tema:"Incêndio a Bordo",
q:"O incêndio classe A ocorre em:",
opts:["Gases","Líquidos inflamáveis","Materiais elétricos","Materiais sólidos inflamáveis","Metais inflamáveis"],ans:3,
exp:"Classe A = MATERIAIS SÓLIDOS inflamáveis com brasas: madeira, papel, tecido, borracha, plásticos comuns. Classe B = líquidos inflamáveis. Classe C = elétrico. Classe D = metais."},

{sim:"ARA-5",num:16,tema:"Incêndio a Bordo",
q:"O extintor de PQS (pó químico seco) tem como desvantagem:",
opts:["É impróprio para incêndios Classe B","Não pode ser utilizado em espaço aberto","Pouca capacidade de extinção","Os resíduos podem avariar equipamentos eletrônicos","Atacam a camada de ozônio"],ans:3,
exp:"O PQS (pó químico seco) é muito eficiente mas deixa RESÍDUOS que podem danificar equipamentos eletrônicos e de navegação. Por isso, o CO₂ é preferido em incêndios em painéis e consoles. O halon era o melhor mas foi banido por destruir o ozônio."},

{sim:"ARA-5",num:19,tema:"Primeiros Socorros",
q:"A condição na qual o corpo humano perde calor mais rapidamente do que pode ser produzido, chama-se:",
opts:["Choque","Sufocação","Hipotermia","Hemorragia","Insolação"],ans:2,
exp:"HIPOTERMIA: condição em que o corpo perde calor mais rapidamente do que consegue produzi-lo, resultando em queda da temperatura central abaixo de 35°C. Causa progressiva lentidão dos processos corporais e pode ser fatal."},

{sim:"ARA-5",num:20,tema:"Leis e Normas",
q:"Qual o prazo estabelecido pela LESTA para sanar irregularidade determinante de apreensão da embarcação, para não ficar sujeita a leilão?",
opts:["30 dias","60 dias","90 dias","180 dias","120 dias"],ans:1,
exp:"A LESTA estabelece prazo de 60 DIAS para que o proprietário regularize a situação da embarcação apreendida. Após esse prazo sem regularização, a embarcação pode ser incorporada à União ou leiloada."},

{sim:"ARA-5",num:22,tema:"Meteorologia",
q:"Ao longo do ano, cada região do planeta desenvolve características climáticas distintas devido principalmente ao:",
opts:["Acúmulo de calor na atmosfera","Ocorrência do periélio","Ângulo de incidência do sol","Nebulosidade","Regime dos ventos"],ans:2,
exp:"O ÂNGULO DE INCIDÊNCIA DO SOL é o principal fator que determina as características climáticas regionais e as estações do ano. Quanto mais perpendicular ao solo, mais energia solar por unidade de área — regiões tropicais recebem mais calor."},

{sim:"ARA-5",num:23,tema:"Leis e Normas",
q:"Somente poderão navegar à noite as embarcações que possuem luzes de navegação de acordo com o disposto no:",
opts:["Convenção SOLAS","IALA-B","RIPEAM","Convenção STCW","Código Internacional de Sinais"],ans:2,
exp:"As luzes de navegação são reguladas pelo RIPEAM (Regulamento Internacional para Evitar Abalroamentos no Mar). O RIPEAM define quais luzes cada tipo de embarcação deve exibir, suas características e ângulos de visibilidade."},

{sim:"ARA-5",num:26,tema:"Fundeio",
q:"Que tipo de fundo deve ser escolhido para o fundeio para que a âncora permaneça bem firme?",
opts:["Conchas","Areia ou lama","Areia ou cascalho","Cascalho ou pedra","Pedra ou lama"],ans:1,
exp:"Os melhores fundos para fundeio são AREIA e LAMA, pois permitem que a âncora une (penetre e fixe) corretamente. Pedra, coral e areia dura são os piores fundos pois a âncora não consegue se fixar."},

{sim:"ARA-5",num:29,tema:"Comunicações",
q:"Em caso de emergência em águas interiores, o canal indicado para pedir socorro pelo rádio VHF é:",
opts:["Canal 12","Canal 8","Canal 6","Canal 16","Canal 72"],ans:3,
exp:"Canal 16 VHF = canal internacional de SOCORRO, SEGURANÇA E CHAMADA. É obrigatório monitorar o canal 16 durante toda navegação. Em emergência, a comunicação de socorro deve ser feita no canal 16."},

{sim:"ARA-5",num:30,tema:"Balizamento",
q:"Ao sair do porto em direção ao mar aberto, você deverá deixar por boreste as boias laterais de cor:",
opts:["Verde e encarnada","Encarnada (vermelha)","Verde","Amarela","Brancas"],ans:2,
exp:"Ao SAIR do porto (saindo para o mar), as referências se invertem: as boias VERDES (que ao entrar ficavam a bombordo) agora ficam a BORESTE (direita). As encarnadas ficam a bombordo. Macete: 'Verde à direita ao sair'."},

{sim:"ARA-5",num:31,tema:"Balizamento",
q:"O Brasil adota o sistema de balizamento conhecido como:",
opts:["IALA B","IALA C","IALA E","IALA D","IALA A"],ans:0,
exp:"O Brasil adota o sistema IALA-B (International Association of Marine Aids to Navigation and Lighthouse Authorities — Região B). O sistema IALA-A é adotado na Europa, África, Austrália e maioria da Ásia."},

{sim:"ARA-5",num:33,tema:"Leis e Normas",
q:"Para efeitos legais, uma embarcação com comprimento inferior a 24 metros que não se enquadra no conceito de embarcação miúda é chamada de:",
opts:["Embarcação de grande porte","Embarcação de médio porte","Embarcação de uso restrito","Embarcação de esporte e recreio","Iate"],ans:3,
exp:"Embarcação com menos de 24 metros que não é miúda (menos de 5m ou 6m dependendo da norma vigente) é classificada como EMBARCAÇÃO DE ESPORTE E RECREIO. Iate é a denominação coloquial para embarcações de recreio de maior porte."},

{sim:"ARA-5",num:35,tema:"Leis e Normas",
q:"Segundo o Decreto 2.596/98 (RLESTA), uma navegação em águas marítimas consideradas desabrigadas é chamada de navegação de:",
opts:["Costeira","Interior","Mar aberto","Oceânica","Restrita"],ans:0,
exp:"Navegação COSTEIRA: realizada em águas marítimas desabrigadas (expostas). Navegação INTERIOR: em rios, lagos, lagoas e canais. Navegação OCEÂNICA: em alto mar, além das 12 milhas náuticas."},

{sim:"ARA-5",num:36,tema:"Manobra",
q:"Um nó utilizado preferencialmente para unir dois cabos de bitolas iguais é chamado de:",
opts:["Nó direito","Nó cego","Volta do fiador","Lais de guia","Nó torto"],ans:0,
exp:"O NÓ DIREITO (também chamado nó chato ou nó plano) é o mais adequado para unir dois cabos de mesma bitola (espessura). Para cabos de bitolas diferentes, usa-se o nó de escota simples ou dobrada."},

{sim:"ARA-5",num:37,tema:"Sinais Sonoros",
q:"Em canal estreito, para ultrapassar outra embarcação por bombordo dela, a sequência correta de apitos é:",
opts:["Um curto, um curto, um longo, um longo","Um longo, um longo, um curto, um curto","Um longo, um curto, um longo, um curto","Um longo, um longo, um curto","Um longo, um curto"],ans:1,
exp:"2 longos + 2 curtos = tenciono ultrapassar por BOMBORDO. Em canal estreito, além do sinal, é necessário aguardar a concordância da embarcação alcançada (1 longo + 1 curto + 1 longo + 1 curto) antes de efetuar a ultrapassagem."},

{sim:"ARA-5",num:38,tema:"Luzes de Navegação",
q:"Uma embarcação sem governo 'de dia' e sem seguimento deve exibir:",
opts:["Réplica da bandeira A do Código Internacional de Sinais a 1 metro de altura","Duas esferas ou marcas semelhantes dispostas em linha vertical, onde melhor possa ser vista","Três esferas dispostas em linha vertical","Três marcas em linha vertical, sendo a superior e inferior esferas e a do meio dois cones com base unida","Uma esfera onde melhor possa ser vista"],ans:1,
exp:"EMBARCAÇÃO SEM GOVERNO de dia: DUAS ESFERAS (ou formas semelhantes) EM LINHA VERTICAL. À noite: duas luzes circulares encarnadas em linha vertical. Indica impossibilidade de manobrar."},

{sim:"ARA-5",num:40,tema:"Luzes de Navegação",
q:"Uma embarcação fundeada deve exibir durante o dia, onde melhor possa ser vista:",
opts:["Três esferas","Duas esferas e um cone","Dois cones","Um cilindro","Uma esfera"],ans:4,
exp:"EMBARCAÇÃO FUNDEADA de dia: UMA ESFERA PRETA (balão preto) onde melhor possa ser vista. À noite: luz branca circular de 360° onde melhor possa ser vista. Embarcações maiores que 50m exibem uma luz de proa e uma de popa."},

// ===================== ARA-6 (questões únicas selecionadas) =====================
{sim:"ARA-6",num:1,tema:"RIPEAM",
q:"Na situação de 'roda a roda' — proa com proa — as embarcações deverão manobrar da seguinte forma:",
opts:["Proa com proa, as duas guinam para boreste","Rumos cruzados, as duas guinam para boreste","Rumos cruzados, as duas guinam para bordos opostos","Proa com proa, as duas guinam para bordos opostos","Proa com popa, as duas guinam para boreste"],ans:0,
exp:"RODA A RODA (proa a proa): ambas guinam para BORESTE (direita), passando pelo lado bombordo uma da outra — como o trânsito em via dupla. NÃO para bordos opostos (isso causaria colisão)."},

{sim:"ARA-6",num:2,tema:"Luzes de Navegação",
q:"Embarcação com reboque superior a 200 metros de comprimento deverá exibir:",
opts:["Duas luzes brancas no mastro","Três luzes brancas no mastro","Uma luz branca no mastro","Quatro luzes brancas no mastro","Duas luzes encarnadas no mastro"],ans:1,
exp:"Embarcação rebocando com comprimento total do reboque superior a 200 metros exibe TRÊS luzes brancas no mastro (em linha vertical). Até 200m = duas luzes. Isso indica ao tráfego que o comboio é muito longo."},

{sim:"ARA-6",num:7,tema:"Manobra",
q:"Quando uma embarcação de dois hélices tem um deles dando a ré e o outro adiante, com mesma rotação, essa embarcação:",
opts:["Tende a seguir em linha reta","Tende a girar a proa para o mesmo bordo do hélice que dá atrás","Tende a girar a proa para o bordo contrário ao hélice que dá atrás","Tende a girar a proa para o mesmo bordo do hélice que dá adiante","Tende a seguir em marca ré"],ans:1,
exp:"Com dois hélices — um em marcha avante e outro a ré com mesma rotação — a embarcação gira a proa para o MESMO BORDO do hélice que dá atrás. Isso porque o hélice a ré empurra a popa para seu bordo, fazendo a proa girar para o lado oposto... não, para o mesmo bordo pela combinação das forças de ambos."},

{sim:"ARA-6",num:8,tema:"Manobra",
q:"Para retornar ao rumo oposto exatamente em cima da esteira (marca do hélice), na manobra de guinada usa-se a:",
opts:["Curva Race Track","Curva de Giro","Curva de Boutakow","Manobra do Y","Curva de Willams"],ans:2,
exp:"A CURVA DE BOUTAKOW (ou Boutakov) é a manobra utilizada para retornar ao rumo oposto exatamente sobre a própria esteira, ideal para busca de objetos ou pessoas perdidas no mar no mesmo trajeto."},

{sim:"ARA-6",num:10,tema:"Incêndio a Bordo",
q:"Extintores portáteis são:",
opts:["Equipamentos de extinção somente das classes B e C","Equipamentos de extinção somente da classe C","Equipamentos de apoio ao controle de avarias","Equipamentos de combate a incêndio que utilizam os agentes extintores para apagar o fogo","Equipamentos que utilizam o comburente para apagar o fogo"],ans:3,
exp:"EXTINTORES PORTÁTEIS são equipamentos de COMBATE A INCÊNDIO que utilizam AGENTES EXTINTORES (água, CO₂, pó químico, espuma, halon) para apagar o fogo. Podem combater incêndios de várias classes conforme o agente extintor."},

{sim:"ARA-6",num:11,tema:"Segurança / Equipamentos",
q:"Os locais adequados para armazenar material combustível a bordo são os compartimentos:",
opts:["De fácil acesso","Localizados abaixo da linha d'água","Localizados no convés principal","Localizados no convés superior","Localizados ao lado dos motores"],ans:1,
exp:"Material combustível deve ser armazenado em compartimentos ABAIXO DA LINHA D'ÁGUA e bem ventilados, afastados de fontes de calor e ignição. Isso minimiza o risco de incêndio e, em caso de vazamento, o combustível não se acumula em espaços fechados próximos a fontes de ignição."},

{sim:"ARA-6",num:12,tema:"Segurança / Coletes",
q:"Para que serve o colete salva-vidas guardado a bordo na quantidade exigida pela legislação náutica?",
opts:["Para ser vestido no caso de ter que abandonar a embarcação, para que o náufrago flutue com ele","Para ser vestido em caso de incêndio como roupa de proteção","Para ser utilizado como material de controle de avarias","Para ser vestido em práticas esportivas náuticas","Para ser utilizado como meio de flutuação quando o passageiro quiser pular na água"],ans:0,
exp:"O colete salva-vidas tem uma única e fundamental finalidade: ser VESTIDO ao ABANDONAR a embarcação em emergência, para manter o náufrago FLUTUANDO com a cabeça fora da água até o resgate."},

{sim:"ARA-6",num:13,tema:"Sobrevivência",
q:"O dispositivo utilizado pelo náufrago para chamar atenção, de uso diurno, chama-se:",
opts:["Fumígeno","Foguete pirotécnico","Foguete de luz vermelha","Apito","Luz estroboscópica"],ans:0,
exp:"FUMÍGENO (ou sinal fumígeno) é o dispositivo de sinalização de socorro de uso DIURNO, que produz fumaça de cor alaranjada visível a grande distância. Foguetes e luzes de bengala são predominantemente noturnos."},

{sim:"ARA-6",num:15,tema:"Leis e Normas",
q:"Todo aquele com habilitação certificada pela autoridade marítima para operar embarcações de esporte/recreio, em caráter não profissional, é:",
opts:["Amador","Patrão","Tripulante","Aquaviário","Armador"],ans:0,
exp:"AMADOR (Navegador Amador) é a denominação oficial dada pela Autoridade Marítima brasileira à pessoa habilitada para conduzir embarcações de esporte e recreio em caráter NÃO PROFISSIONAL. Inclui as categorias: Arrais, Mestre e Capitão-Amador."},

{sim:"ARA-6",num:16,tema:"Leis e Normas",
q:"A reincidência na mesma infração, em caso de multa ou suspensão do Certificado de Habilitação, implicará na:",
opts:["Abertura de processo civil indenizatório","Multiplicação da penalidade por dois, três e assim sucessivamente","Cancelamento da inscrição da embarcação","Prisão do infrator","Cassação do certificado de habilitação"],ans:1,
exp:"Conforme a LESTA, a reincidência na mesma infração implica na MULTIPLICAÇÃO DA PENALIDADE por dois, três e assim sucessivamente (dobro na primeira reincidência, triplo na segunda, etc.). Exceção: embriaguez reincidente = cassação."},

{sim:"ARA-6",num:18,tema:"Primeiros Socorros",
q:"Em uma queimadura de 3º grau:",
opts:["A superfície é macia e molhada","A pele fica avermelhada e levemente sensível","Não há dor","A pele foi completamente destruída","A característica é a presença de bolhas"],ans:3,
exp:"1º grau: vermelhidão, sem bolhas. 2º grau: bolhas, dor intensa. 3º GRAU: destruição completa da pele (epiderme, derme e tecidos mais profundos), SEM DOR (nervos destruídos), aspecto carbonizado ou esbranquiçado."},

{sim:"ARA-6",num:19,tema:"Incêndio a Bordo",
q:"A reação química com presença do combustível, do comburente, da temperatura de ignição, com desprendimento de luz e calor, chama-se:",
opts:["Ebulição","Ignição","Combustão","Evaporação","Oxidação"],ans:2,
exp:"COMBUSTÃO é a reação química exotérmica (com liberação de calor e luz) que ocorre quando um combustível reage com o comburente (oxigênio) na presença de temperatura de ignição suficiente."},

{sim:"ARA-6",num:20,tema:"Incêndio a Bordo",
q:"Os incêndios que se desenvolvem em metais (magnésio, titânio e lítio) são:",
opts:["Classe A","Classe B","Classe C","Incêndio Classe D","Incêndio Classe E"],ans:3,
exp:"Classe D: incêndios em METAIS COMBUSTÍVEIS como magnésio, titânio, lítio, potássio e sódio. São muito difíceis de extinguir e requerem agentes específicos (pó seco especial). Água e CO₂ podem agravar o incêndio."},

{sim:"ARA-6",num:21,tema:"Incêndio a Bordo",
q:"Os incêndios em combustíveis que tenham comburente em sua estrutura íntima somente podem ser extintos por:",
opts:["Abafamento","Resfriamento","Congelamento","Isolamento","Convecção"],ans:1,
exp:"Incêndios com comburente na estrutura íntima (pólvora, TNT, nitrato de amônio) NÃO podem ser extintos por abafamento (o oxigênio está internamente). Somente o RESFRIAMENTO intenso pode extingui-los, retirando o calor do processo."},

{sim:"ARA-6",num:22,tema:"Incêndio a Bordo",
q:"A bordo de barco a motor, qual o combustível mais perigoso e inflamável?",
opts:["Painéis elétricos","Combustíveis líquidos","Madeira","Papéis","Fibra de vidro"],ans:1,
exp:"COMBUSTÍVEIS LÍQUIDOS (gasolina, diesel, álcool) são os mais perigosos a bordo por sua alta inflamabilidade, facilidade de derramamento, formação de vapores explosivos e tendência de se acumular nos porões. A gasolina é especialmente perigosa."},

{sim:"ARA-6",num:23,tema:"Incêndio a Bordo",
q:"Em caso de incêndio, a embarcação deverá ser rapidamente manobrada para que:",
opts:["As pessoas fiquem a barlavento do foco de incêndio","O incêndio se apague sozinho","Haja maior fluxo de ar no foco de incêndio","Haja menor fluxo de ar no foco de incêndio","As pessoas fiquem a sotavento do foco de incêndio"],ans:0,
exp:"A embarcação deve ser manobrada para que as pessoas fiquem a BARLAVENTO do fogo — do lado de onde vem o vento. Assim, o vento leva o fogo e a fumaça para longe das pessoas. NUNCA colocar pessoas a sotavento."},

{sim:"ARA-6",num:24,tema:"Nomenclatura",
q:"A maior largura de um barco, medida de borda a borda, é chamada de:",
opts:["Boca","Pontal","Calado","Través","Contorno"],ans:0,
exp:"BOCA: a maior largura da embarcação, medida de borda a borda (de boreste a bombordo) no ponto mais largo. PONTAL = altura vertical do casco. CALADO = profundidade da parte submersa."},

{sim:"ARA-6",num:25,tema:"Luzes de Navegação",
q:"Fibra de vidro pode entrar em combustão a altas temperaturas. Um incêndio em fibra de vidro é da:",
opts:["Classe A — combustível gasoso","Classe D — combustível metálico","Classe B — combustível líquido","Classe B — combustível sólido","Classe A — combustível sólido"],ans:4,
exp:"Fibra de vidro é um material SÓLIDO que pode entrar em combustão — portanto, incêndio em fibra de vidro é Classe A (materiais sólidos). Classe A inclui todos os sólidos combustíveis: madeira, papel, tecidos, plásticos, fibras."},

{sim:"ARA-6",num:26,tema:"Primeiros Socorros",
q:"Ao nos depararmos com uma pessoa queimada com roupas grudadas nas queimaduras, devemos:",
opts:["Cobrir as roupas com cobertores aquecidos","Colocar água morna sobre as queimaduras","Aplicar pomadas por cima das roupas","Retirar as roupas queimadas","Manter as roupas sobre as queimaduras"],ans:4,
exp:"NUNCA retirar roupas grudadas em queimaduras — pode arrancar a pele e agravar as lesões. O correto é MANTER AS ROUPAS, lavar com água fria por cima (água do mar é excelente) e transportar para atendimento médico urgente."},

{sim:"ARA-6",num:27,tema:"RIPEAM",
q:"Em uma ultrapassagem realizada em segurança e com espaço suficiente, a embarcação a ser ultrapassada deverá:",
opts:["Soar quatro apitos curtos","Diminuir a velocidade para ajudar na ultrapassagem","Guinar para o bordo oposto ao que vai ser ultrapassada","Manter seu rumo e velocidade","Parar as máquinas e seguir só com o seguimento"],ans:3,
exp:"A embarcação ALCANÇADA (a ser ultrapassada) deve MANTER SEU RUMO E VELOCIDADE, facilitando a manobra da alcançadora. Qualquer manobra inesperada da alcançada pode causar colisão."},

{sim:"ARA-6",num:28,tema:"Luzes de Navegação",
q:"Fundeado à noite com uma lancha de 9 metros, além da luz branca circular, posso também:",
opts:["Acender a luz encarnada a bombordo e verde a boreste","Acender somente as luzes para a pesca amadora","Iluminar todo o convés principal","Acender todas as luzes do mastro","Acender qualquer luz de navegação pois meu barco estará parado"],ans:2,
exp:"Embarcação FUNDEADA (ancorada), além da luz branca de 360°, pode ILUMINAR O CONVÉS para torná-la mais visível. Não deve acender as luzes de bordo (verde e encarnada) pois só são usadas em movimento."},

{sim:"ARA-6",num:29,tema:"Leis e Normas",
q:"Em qual situação é dispensado o uso da Bandeira Nacional nas embarcações navegando?",
opts:["Durante mau tempo, de dia e de noite","Em porto estrangeiro, de noite","Das 08:00h até o pôr do sol","Cruzando com navio militar brasileiro, de dia","Nas embarcações miúdas, em qualquer horário"],ans:4,
exp:"As EMBARCAÇÕES MIÚDAS são dispensadas do uso obrigatório da Bandeira Nacional. Embarcações maiores devem arvorá-la das 08h ao pôr do sol, em portos nacionais e estrangeiros, e ao cruzar com navios de guerra."},

{sim:"ARA-6",num:30,tema:"Fundeio",
q:"Havendo 8 embarcações fundeadas numa mesma enseada, convém ter cuidado de manter:",
opts:["Vigilância dia e noite","Espaço suficiente entre elas para que possam girar em redor das âncoras","As rabetas das lanchas levantadas para não tocas nas espias","Distância adequada de terra","As âncoras unhadas bem próximas umas das outras"],ans:1,
exp:"Com várias embarcações fundeadas na mesma área, é fundamental manter ESPAÇO SUFICIENTE entre elas para que possam GIRAR em torno de suas âncoras livremente quando o vento ou a corrente mudarem de direção, sem abalroar."},

{sim:"ARA-6",num:32,tema:"Fundeio",
q:"Qual dos pontos abaixo NÃO é essencial para a escolha de um bom ancoradouro?",
opts:["Não ter um declive muito grande","Permitir o eventual giro da embarcação sem tocar outras embarcações","Ser abrigado de correnteza, ventos e vagas","Ser de boa tença (fundo)","Ser próximo ao local de fundeio de outras embarcações semelhantes"],ans:4,
exp:"Ser próximo a outras embarcações NÃO é requisito de um bom ancoradouro — na verdade, é preferível ter espaço suficiente ao redor. Os requisitos essenciais são: tença boa, abrigo, profundidade adequada, declive suave e espaço para girar."},

{sim:"ARA-6",num:33,tema:"Manobra",
q:"Qual o fator que NÃO altera a ação de manobra de uma embarcação?",
opts:["A amarra","O vento","O leme","O hélice","A salinidade da água"],ans:4,
exp:"A SALINIDADE DA ÁGUA não afeta significativamente a ação de manobra de embarcações de esporte e recreio. Afetam a manobra: o leme, o hélice (propulsão e efeito giroscópico), o vento, a corrente e a amarra (quando fundeando)."},

{sim:"ARA-6",num:35,tema:"Estabilidade",
q:"Se os tanques estão com volumes pela metade e há água no porão, a embarcação estará com sua estabilidade sofrendo o efeito de:",
opts:["Borda livre","Acréscimo da estabilidade","Superfície livre","Peso livre","Borda reduzida"],ans:2,
exp:"EFEITO DE SUPERFÍCIE LIVRE: quando líquidos em tanques parcialmente cheios se deslocam conforme a embarcação balança, agindo como um peso que vai sempre para o lado que inclina. Isso REDUZ a estabilidade efetiva da embarcação."},

{sim:"ARA-6",num:36,tema:"Leis e Normas",
q:"Segundo a LESTA e o RLESTA, a Autoridade Marítima Brasileira é:",
opts:["Agência Nacional das Águas","Ministério dos Transportes","Diretoria de Portos e Costas","Marinha do Brasil","Capitania dos Portos"],ans:3,
exp:"A AUTORIDADE MARÍTIMA BRASILEIRA é o COMANDANTE DA MARINHA, representado pela DIRETORIA DE PORTOS E COSTAS (DPC). As Capitanias dos Portos são as representações regionais da Autoridade Marítima nos estados."},

{sim:"ARA-6",num:37,tema:"Incêndio a Bordo",
q:"Todo elemento capaz de se incendiar na presença de alta temperatura e do oxigênio é chamado de:",
opts:["Combustão","Combustível","Oxidante","Comburente","Explosivos"],ans:1,
exp:"COMBUSTÍVEL é todo elemento capaz de entrar em combustão na presença de calor e comburente (oxigênio). Pode ser sólido (madeira), líquido (gasolina) ou gasoso (GLP). É um dos três vértices do triângulo do fogo."},

{sim:"ARA-6",num:38,tema:"Leis e Normas",
q:"Um navegante amador habilitado para conduzir embarcações entre portos nacionais e estrangeiros SEM restrições de área geográfica é chamado de:",
opts:["Arrais-Amador","Capitão-Amador","Mestre-Amador","Mestre-Arrais","Motonauta"],ans:1,
exp:"CAPITÃO-AMADOR: habilitado para navegar entre portos nacionais e estrangeiros SEM RESTRIÇÕES de área geográfica (ilimitado). MESTRE-AMADOR: até 20 milhas da costa. ARRAIS-AMADOR: apenas em águas interiores."},

{sim:"ARA-6",num:39,tema:"Espias / Atracação",
q:"O que significa aduchar os cabos na linguagem marinheira?",
opts:["É prender os cabos em pontos fixos de bordo","É enrolar os cabos em voltas grandes","É esticar os cabos no convés","É dar seguidos nós nos cabos","É passar óleo de aducha nos cabos"],ans:1,
exp:"ADUCHAR = enrolar os cabos em VOLTAS GRANDES e circulares no convés, organizando-os de forma ordenada para uso futuro sem embaraços. Cabo aduchado é cabo pronto para ser usado rapidamente."},

{sim:"ARA-6",num:40,tema:"Segurança / Coletes",
q:"A melhor maneira de saltar na água utilizando o colete salva-vidas é com:",
opts:["As pernas esticadas e os pés juntos","Mergulhando de cabeça, protegendo o rosto","As pernas abertas, a mão direita no nariz e a mão esquerda no ombro","A mão direita no nariz e os pés separados","Os pés juntos e a perna dobrada"],ans:0,
exp:"Posição correta com colete: PERNAS ESTICADAS, PÉS JUNTOS, braços ao lado do corpo. Isso reduz o impacto na entrada na água, evita que o colete bata no rosto e garante a flutuação correta."}

];

// Build unique topic list
const TEMAS = [...new Set(TODAS_QUESTOES.map(q => q.tema))].sort();
