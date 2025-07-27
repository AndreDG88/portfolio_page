export type Project = {
  id: string
  title: string
  image: string
  gallery?: string[]
  category: 'dev' | 'design'
  description: string
  techs?: string[]
  github?: string
  vercel?: string
}

export const projects: Project[] = [
  {
    id: 'troca-uma-ideia',
    title: 'Troca uma Ideia!',
    image: '/media/projects/troca-uma-ideia_image-1.png',
    gallery: [
      '/media/projects/troca-uma-ideia_image-1.png',
      '/media/projects/troca-uma-ideia_image-2.png',
      '/media/projects/troca-uma-ideia_image-3.png',
      '/media/projects/troca-uma-ideia_image-4.png',
      '/media/projects/troca-uma-ideia_image-5.png',
      '/media/projects/troca-uma-ideia_image-6.png',
      '/media/projects/troca-uma-ideia_image-7.png'
    ],
    category: 'dev',
    description: 'Troca uma ideia! é uma rede social moderna e responsiva desenvolvida para facilitar a troca de mensagens curtas entre usuários, promovendo conversas leves e dinâmicas. A plataforma permite o cadastro e login com autenticação segura via token JWT, criação de perfis personalizados com avatar, publicação de papos (posts curtos), curtidas, rePapos (compartilhamento com ou sem comentário), além de seguir e deixar de seguir outros perfis. Um dos grandes diferenciais é a listagem de tendências, que destaca as hashtags mais utilizadas em tempo real. Com um frontend desenvolvido em React, Vite e TypeScript, a interface adota um design mobile-first fluido e acessível. O backend, construído com Django REST Framework e PostgreSQL, garante robustez e escalabilidade, utilizando Docker para o ambiente de desenvolvimento e SimpleJWT para a autenticação. O projeto conta com deploy completo: API hospedada no PythonAnywhere e frontend publicado na Vercel, oferecendo uma experiência de navegação real, estável e funcional.',
    techs: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'JWT', 'GitHub', 'Vercel', 'PythonAnywhere'],
    github: 'https://github.com/AndreDG88/troca-uma-ideia',
    vercel: 'https://troca-uma-ideia.vercel.app/login'
  },
  {
    id: 'eplay',
    title: 'EPLAY – Loja de Jogos',
    image: '/media/projects/e-play-_image-1.png',
    gallery: [
      '/media/projects/e-play-_image-1.png',
      '/media/projects/e-play-_image-2.png',
      '/media/projects/e-play-_image-3.png',
      '/media/projects/e-play-_image-4.png',
      '/media/projects/e-play-_image-5.png',
      '/media/projects/e-play-_image-6.png',
      '/media/projects/e-play-_image-7.png',
      '/media/projects/e-play-_image-8.png'
    ],
    category: 'dev',
    description: 'EPLAY é uma loja virtual de jogos digitais desenvolvida com foco em performance, usabilidade e organização de código. A plataforma simula a experiência de um e-commerce real, oferecendo uma vitrine de jogos dinâmicos, categorização de produtos, sistema de filtros, carrinho de compras e página de checkout. Cada jogo possui uma página de detalhes gerada automaticamente a partir de dados vindos de uma API mockada, exibindo informações como descrições, preços, galeria de imagens e títulos relacionados. Desenvolvido com React, TypeScript e Redux, o projeto utiliza práticas modernas de desenvolvimento frontend, como componentização, tipagem estática, gerenciamento de estado centralizado e formulários com validação via Formik. O design é responsivo e totalmente adaptado para dispositivos móveis, com deploy feito na Vercel para uma navegação fluida. O repositório está hospedado no GitHub e segue boas práticas de organização, com uso de Prettier, ESLint e padronização de código para facilitar a manutenção e escalar o projeto futuramente.',
    techs: ['React', 'TypeScript', 'Redux', 'formik', 'eslint', 'prettier', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/m35_projeto-6_eplay',
    vercel: 'https://m35-projeto-6-eplay.vercel.app/'
  },
  {
    id: 'efood',
    title: 'EFOOD – Experiências Gastronômicas',
    image: '/media/projects/e-food_image-1.png',
    gallery: [
      '/media/projects/e-food_image-1.png',
      '/media/projects/e-food_image-2.png',
      '/media/projects/e-food_image-3.png',
      '/media/projects/e-food_image-4.png',
      '/media/projects/e-food_image-5.png',
      '/media/projects/e-food_image-6.png',
      '/media/projects/e-food_image-7.png',
    ],
    category: 'dev',
    description: 'EFOOD é uma plataforma de delivery online desenvolvida com React, TypeScript e Redux, simulando uma experiência completa de pedidos em restaurantes, inspirada em aplicativos como iFood e Rappi. O projeto oferece uma interface limpa, responsiva e pensada para o uso em dispositivos móveis, onde os usuários podem navegar entre diferentes restaurantes, visualizar cardápios completos, adicionar itens ao carrinho e finalizar pedidos de forma intuitiva. Cada restaurante possui sua própria página dinâmica, gerada automaticamente com base nos dados fornecidos pela API mockada, contendo informações como descrição do local, pratos disponíveis e imagens. O processo de checkout inclui um formulário com validação de dados e máscara de campos, garantindo mais realismo à jornada do usuário. Todo o gerenciamento de estado é feito via Redux, assegurando consistência entre carrinho, itens e etapas do fluxo de compra. O projeto foi construído com atenção à organização do código, uso de Styled Components para estilização, validações com Formik e Yup, além de ferramentas de padronização como Prettier e ESLint. O deploy foi feito na Vercel, tornando a aplicação acessível e fluida em diferentes dispositivos.',
    techs: ['React', 'TypeScript', 'Redux', 'formik', 'Yup', 'Styled Components', 'eslint', 'prettier', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/m35-efood',
    vercel: 'https://m35-efood-theta.vercel.app/'
  },
  {
    id: 'sua-agenda',
    title: 'Sua Agenda de Contatos',
    image: '/media/projects/sua-agenda-de-contatos_image-1.png',
    gallery: [
      '/media/projects/sua-agenda-de-contatos_image-1.png',
      '/media/projects/sua-agenda-de-contatos_image-2.png',
      '/media/projects/sua-agenda-de-contatos_image-3.png',
      '/media/projects/sua-agenda-de-contatos_image-4.png',
      '/media/projects/sua-agenda-de-contatos_image-5.png'
    ],
    category: 'dev',
    description: 'Agenda de Contatos é uma aplicação web desenvolvida com React e TypeScript que simula uma agenda digital moderna, permitindo o gerenciamento completo de contatos pessoais e profissionais. A interface oferece funcionalidades essenciais como cadastro de novos contatos com nome, telefone e e-mail, além da possibilidade de categorizar cada contato com etiquetas como "Família", "Amigos" ou "Trabalho". Também é possível marcar contatos como "Favoritos" para acessos rápidos. A listagem pode ser filtrada por tipo ou pesquisada diretamente por nome, tornando a navegação ágil e intuitiva. A aplicação é mobile-first e utiliza Redux Toolkit para gerenciamento de estado, React Router DOM para navegação entre páginas e Styled-components para uma estilização moderna e encapsulada. Os ícones da interface foram integrados com React Icons para maior clareza visual. O projeto foi desenvolvido com foco em organização de código e boas práticas de desenvolvimento, e está hospedado na Vercel.',
    techs: ['React', 'TypeScript', 'Redux Toolkit', 'React Router DOM', 'Styled-components', 'eslint', 'prettier', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/m32_proj5_lista-de-contatos',
    vercel: 'https://m32-proj5-lista-de-contatos.vercel.app/'
  },
  {
    id: 'imc',
    title: 'Calculadora de IMC',
    image: '/media/projects/imc_image-1.png',
    gallery: [
      '/media/projects/imc_image-1.png',
      '/media/projects/imc_image-2.png',
      '/media/projects/imc_image-3.png'
    ],
    category: 'dev',
    description: 'Calculadora de IMC é uma aplicação web desenvolvida com React e Vite que oferece uma forma simples, rápida e responsiva de calcular o Índice de Massa Corporal (IMC). A interface permite que o usuário insira seus dados de altura e peso para obter imediatamente o resultado do seu IMC, acompanhado de uma análise de categoria: abaixo do peso, peso normal, sobrepeso ou obesidade (graus 1, 2 ou 3). Além do cálculo personalizado, a aplicação apresenta uma tabela completa com os intervalos e classificações do IMC, oferecendo maior clareza sobre os resultados. Desenvolvida com foco em usabilidade e performance, a aplicação utiliza boas práticas de estruturação com React e está otimizada para dispositivos móveis e desktop. O projeto foi construído com atenção à clareza visual, simplicidade no código e rapidez na entrega da informação, sendo ideal para usuários finais e também como uma demonstração de domínio das tecnologias modernas de frontend.',
    techs: ['React', 'TypeScript', 'JavaScript', 'Vite', 'eslint', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/tarefa_m28_react',
    vercel: 'https://tarefa-m28-react.vercel.app/'
  },
  {
    id: 'github-finder',
    title: 'GitHub Finder',
    image: '/media/projects/github-finder_image-1.png',
    gallery: [
      '/media/projects/github-finder_image-1.png',
      '/media/projects/github-finder_image-2.png',
      '/media/projects/github-finder_image-3.png'
    ],
    category: 'dev',
    description: 'GitHub Finder é uma aplicação desenvolvida com React e Vite que permite buscar por qualquer perfil público do GitHub e visualizar suas principais informações de forma clara e objetiva. Através de uma interface amigável e responsiva, o usuário pode digitar o nome de um perfil na barra de pesquisa para obter dados como avatar, nome de usuário, linguagens mais utilizadas, número de commits, estrelas, pull requests, entre outras métricas relevantes. A aplicação também exibe uma lista de repositórios em formato de cards, onde cada card mostra o nome do projeto, a linguagem predominante e um botão que direciona diretamente para o repositório no GitHub. O projeto utiliza a API oficial do GitHub e foi construído com foco em performance, boas práticas e componentização. Além de ser uma ferramenta funcional para consulta, serve como uma sólida demonstração de consumo de APIs REST, manipulação de dados e desenvolvimento com React moderno.',
    techs: ['React', 'Vite', 'TypeScript', 'REST API', 'Github API', 'JavaScript', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/github-finder_m28_react',
    vercel: 'https://github-finder-m28-react.vercel.app/'
  },
  {
    id: 'fullmetal',
    title: 'Landing Page – Fullmetal Alchemist',
    image: '/media/projects/fullmetal_image-1.png',
    gallery: [
      '/media/projects/fullmetal_image-1.png',
      '/media/projects/fullmetal_image-2.png',
      '/media/projects/fullmetal_image-3.png',
      '/media/projects/fullmetal_image-4.png',
      '/media/projects/fullmetal_image-5.png',
      '/media/projects/fullmetal_image-6.png'
    ],
    category: 'dev',
    description: 'Esta landing page foi desenvolvida para homenagear e divulgar o anime Fullmetal Alchemist: Brotherhood. Criada com HTML, Sass e Gulp, a aplicação apresenta uma experiência visual envolvente e responsiva, estruturada em seções bem definidas. O projeto se inicia com um hero chamativo contendo chamadas para ação que direcionam o usuário para adquirir o mangá ou assistir ao anime nas plataformas oficiais. Em seguida, há uma galeria de fichas organizadas por tipo de personagem — protagonistas, vilões e coadjuvantes — com identidade visual consistente. A página também conta com trechos de críticas reais sobre a obra, com links para leitura completa, além de um bloco informativo com o histórico da criação do anime e um resumo da sua narrativa. Finalizando, há uma seção de perguntas frequentes (FAQ), tornando a navegação ainda mais informativa e fluida. O projeto demonstra domínio na estruturação semântica de páginas, otimização de imagens, estilização com pré-processadores e automação de tarefas com Gulp.',
    techs: ['HTML', 'Sass', 'JavaScript', 'Gulp', 'Responsive Design', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exercicio_m21_fullmetal_alchemist',
    vercel: 'https://exercicio-m21-fullmetal-alchemist.vercel.app/'
  },
  {
    id: 'disneyplus',
    title: 'Landing Page clone – Disney +',
    image: '/media/projects/disney-plus_image-1.png',
    gallery: [
      '/media/projects/disney-plus_image-1.png',
      '/media/projects/disney-plus_image-2.png',
      '/media/projects/disney-plus_image-3.png',
      '/media/projects/disney-plus_image-4.png',
      '/media/projects/disney-plus_image-5.png',
      '/media/projects/disney-plus_image-6.png',
      '/media/projects/disney-plus_image-7.png',
      '/media/projects/disney-plus_image-8.png'
    ],
    category: 'dev',
    description: 'Landing page responsiva desenvolvida como exercício de recriação visual da página de assinatura do Disney+. O projeto foi construído com HTML, Sass e Gulp, e tem como objetivo simular uma experiência completa de apresentação do serviço de streaming. A estrutura começa com um hero interativo, com chamadas para dois planos distintos de assinatura, seguido por uma vitrine de cards divididos em seções como "Em breve", "Em destaque" e "Mais no Star+", cada uma exibindo conteúdos com design atrativo. Há também uma seção dedicada aos planos disponíveis, organizada de forma clara e acessível, além de dois blocos informativos: um sobre os dispositivos compatíveis e outro explicando a funcionalidade de downloads para visualização offline. Ao final, a página oferece uma área de perguntas frequentes (FAQ), reforçando a clareza para o usuário. O projeto destaca habilidades em construção de landing pages profissionais, organização de conteúdo por categoria e automação de tarefas com Gulp para otimização de performance.',
    techs: ['Gulp', 'Sass', 'JavaScript', 'HTML', 'Design Responsivo', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/projeto4-m21-clone-disneyplus',
    vercel: 'https://projeto4-m21-clone-disneyplus-hsl5.vercel.app/'
  },
  {
    id: 'nerd-news',
    title: 'Email Marketing – Nerd News',
    image: '/media/projects/nerd-news_image-1.png',
    gallery: [
      '/media/projects/nerd-news_image-1.png',
      '/media/projects/nerd-news_image-2.png',
      '/media/projects/nerd-news_image-3.png',
      '/media/projects/nerd-news_image-4.png'
    ],
    category: 'dev',
    description: 'Email marketing responsivo criado em HTML puro, com foco em boas práticas para renderização em diversos clientes de e-mail. O layout simula uma newsletter semanal enviada pelo blog fictício Nerd News, especializada em cultura pop. A estrutura é composta por uma seção de cabeçalho com logo e link para o site, seguida de blocos de destaque com notícias recentes. Cada bloco possui imagem, título, descrição resumida e botão de chamada para ação. Ao final, há uma área de rodapé com ícones de redes sociais e link de descadastro. O projeto reforça o domínio de técnicas específicas para email marketing, como o uso de tabelas para estruturação, inline CSS, compatibilidade com clientes populares e atenção à responsividade mesmo com recursos limitados. Ideal para campanhas de divulgação informativa com visual limpo e organizado.',
    techs: ['HTML', 'CSS Inline', 'Email Design', 'Layout Responsivo', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exercicio_m20_mail-blog',
    vercel: 'https://exercicio-m20-mail-blog.vercel.app/'
  },
  {
    id: 'pedra-papel-tesoura',
    title: 'Pedra, Papel, Tesoura, Lagarto e Spock!',
    image: '/media/projects/pedra-papel-tesoura_image-1.png',
    gallery: [
      '/media/projects/pedra-papel-tesoura_image-1.png',
      '/media/projects/pedra-papel-tesoura_image-2.png',
      '/media/projects/pedra-papel-tesoura_image-3.png',
      '/media/projects/pedra-papel-tesoura_image-4.png',
      '/media/projects/pedra-papel-tesoura_image-5.png'
    ],
    category: 'dev',
    description: 'Mini-jogo interativo desenvolvido com foco em automação de build usando Grunt, como parte de um exercício prático sobre ferramentas de task runner. A proposta é uma versão do clássico "Pedra, Papel e Tesoura", expandida com as variações "Lagarto" e "Spock", inspirada na série The Big Bang Theory. O layout inicia com um título estilizado que substitui os nomes por ícones temáticos, seguido de um vídeo explicativo da série para contextualizar as regras. O usuário então escolhe uma entre as cinco opções, enquanto a máquina seleciona automaticamente a dela, exibindo o resultado da partida. O projeto também inclui um sistema de build completo com Grunt, responsável por compilar arquivos LESS, minificar HTML e JavaScript, aplicar substituições dinâmicas e limpar diretórios temporários. Essa estrutura garante organização entre os ambientes de desenvolvimento e produção, além de demonstrar domínio de fluxos automatizados no front-end.',
    techs: ['Grunt', 'LESS', 'JavaScript', 'HTML', 'Task Automation', 'Design Responsivo', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exercicio_grunt',
    vercel: 'https://exercicio-grunt-andredg88.vercel.app/'
  },
  {
    id: 'pokemon-club',
    title: 'Pokémon TCG Club',
    image: '/media/projects/pokemon-club_image-1.png',
    gallery: [
      '/media/projects/pokemon-club_image-1.png',
      '/media/projects/pokemon-club_image-2.png',
      '/media/projects/pokemon-club_image-3.png',
      '/media/projects/pokemon-club_image-4.png'
    ],
    category: 'dev',
    description: 'Página institucional responsiva criada com HTML, CSS e Bootstrap como exercício de estruturação para um clube de jogadores de Pokémon TCG. O layout começa com um menu de navegação fixo no topo, seguido de um carrossel em destaque com imagens promocionais das coleções mais recentes do card game. Na sequência, a página apresenta uma seção explicativa sobre o clube e uma imagem ilustrativa do espaço físico. Logo abaixo, uma área exibe os principais eventos realizados pelo clube, com títulos, datas e descrições breves. Outra seção é dedicada a recomendações de decks e cartas, com links externos direcionando o usuário para lojas especializadas na compra dos itens sugeridos. A página finaliza com um formulário simples de contato, permitindo o envio de mensagens diretamente pelo site. O projeto demonstra domínio na utilização do framework Bootstrap para criação de páginas bem organizadas, com seções distintas e responsividade nativa.',
    techs: ['HTML', 'CSS', 'Bootstrap', 'Design Responsivo', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/projeto-3-bootstrap',
    vercel: 'https://projeto-3-bootstrap-seven.vercel.app/'
  },
  {
    id: 'baldurs-gate-3',
    title: 'Landing Page Baldur’s Gate III',
    image: '/media/projects/baldurs-gate-3_image-1.png',
    gallery: [
      '/media/projects/baldurs-gate-3_image-1.png',
      '/media/projects/baldurs-gate-3_image-2.png',
      '/media/projects/baldurs-gate-3_image-3.png',
      '/media/projects/baldurs-gate-3_image-4.png',
      '/media/projects/baldurs-gate-3_image-5.png',
      '/media/projects/baldurs-gate-3_image-6.png'
    ],
    category: 'dev',
    description: 'Landing page informativa e responsiva desenvolvida como exercício prático de HTML, CSS e Bootstrap, com foco em estruturação semântica e visual temático. O projeto divulga o jogo Baldur’s Gate III, iniciando com um menu fixo contendo logo, navegação e botão de compra. Em seguida, apresenta o trailer oficial com controles de reprodução, uma introdução ao universo do jogo, além de imagens de destaque com elementos do mundo de Baldur’s Gate. A seção seguinte exibe cards de personagens jogáveis com nome, imagem e resumo biográfico. A página finaliza com uma área de perguntas frequentes (FAQ) e uma galeria de imagens promocionais. O uso do framework Bootstrap contribuiu para a criação rápida de componentes reutilizáveis e responsivos, além de facilitar a organização geral do layout.',
    techs: ['JavaScript', 'BootStrap', 'CSS', 'HTML', 'Design Responsivo', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/tarefa_modulo_13_baldurs-gate-3',
    vercel: 'https://tarefa-modulo-13-baldurs-gate-3.vercel.app/'
  },
  {
    id: 'to-do-list',
    title: 'Sua To Do List',
    image: '/media/projects/to-do-list_image-1.png',
    gallery: [
      '/media/projects/to-do-list_image-1.png',
      '/media/projects/to-do-list_image-2.png',
      '/media/projects/to-do-list_image-3.png'
    ],
    category: 'dev',
    description: 'Aplicação de lista de tarefas desenvolvida com HTML, CSS e jQuery como exercício prático de manipulação do DOM. O layout exibe no topo a logo e título do projeto, seguido por um formulário com campos para nome, data de início, data de término e uma descrição da tarefa. O formulário oferece botões para salvar ou limpar os dados. Abaixo, a interface exibe o total de tarefas e uma lista dinâmica com cada tarefa registrada. Cada item possui botões para marcar como concluída, excluir ou exibir/ocultar detalhes. A lógica foi desenvolvida em jQuery, utilizando métodos como `.appendTo()`, `.find()`, `.attr()` e animações com `.slideDown()`/`.slideUp()`. O projeto também integra a biblioteca SweetAlert2 para exibição de alertas e confirmações estilizadas, oferecendo uma experiência interativa e responsiva.',
    techs: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'SweetAlert2', 'DOM Manipulation', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exerc-cio_jquery_list_ebac',
    vercel: 'https://exerc-cio-jquery-list-ebac.vercel.app/'
  },
  {
    id: 'calculadora-media',
    title: 'Calculadora de Médias',
    image: '/media/projects/calculadora-media_image-1.png',
    gallery: [
      '/media/projects/calculadora-media_image-1.png',
      '/media/projects/calculadora-media_image-2.png',
      '/media/projects/calculadora-media_image-3.png',
      '/media/projects/calculadora-media_image-4.png'
    ],
    category: 'dev',
    description: 'Projeto interativo desenvolvido com HTML, CSS e JavaScript para calcular médias escolares. Ao acessar a página, o usuário é recebido com uma caixa de diálogo que solicita a nota mínima para aprovação. A partir disso, é possível registrar atividades escolares informando o nome e a nota correspondente. A cada nova entrada, a tabela de dados é atualizada automaticamente, exibindo a atividade, a nota obtida e um indicativo visual (emoji) de aprovação ou reprovação com base na nota mínima. O sistema também calcula em tempo real a média geral das notas inseridas e exibe no rodapé da tabela se o aluno está aprovado ou reprovado. O projeto reforça conceitos como manipulação de DOM, controle de eventos, arrays dinâmicos e validação de entradas, sendo uma introdução prática e funcional à lógica de programação no front-end.',
    techs: ['JavaScript', 'CSS', 'HTML', 'DOM Manipulation', 'User Interaction', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/ebac_projeto_calculadora_medias',
    vercel: 'https://ebac-projeto-calculadora-medias-phi.vercel.app/'
  },
  // A PARTIR DESTA PARTE SÃO SÓ PROJETOS DE DESIGN E ILUSTRAÇÃO ###################################################################################################################################################################################################################
  {
    id: 'one-piece',
    title: 'Monkey D. Luffy – Ilustração em Visual Alternativo',
    image: '/media/projects/one-piece_image-1.png',
    gallery: [
      '/media/projects/one-piece_image-1.png',
      '/media/projects/one-piece_image-2.png',
      '/media/projects/one-piece_image-3.png',
      '/media/projects/one-piece_image-4.png'
    ],
    category: 'design',
    description: 'Esta obra apresenta uma interpretação alternativa do personagem Monkey D. Luffy, protagonista do anime e mangá One Piece. A ilustração foi desenvolvida em estilo mangá, mantendo a essência expressiva e vibrante do original, mas com um visual diferenciado, trazendo Luffy em uma versão mais estilizada e com vestimentas inspiradas em trajes de capitão pirata clássico. A arte foi criada de forma 100% digital, utilizando mesa digitalizadora e o software Autodesk Sketchbook. O processo envolveu o desenho manual dos contornos, coloração digital com destaque para luz e sombra, além da composição do cenário ao fundo, que remete ao convés de um navio pirata ao entardecer. O objetivo foi unir fidelidade ao personagem com liberdade criativa, explorando elementos de design e ambientação para dar um novo olhar ao icônico "Chapéu de Palha".',
    techs: ['Autodesk Sketchbook', 'Mesa digitalizadora', 'Estilo mangá', 'Pintura digital', 'Etapas em lanes']
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer – Quatro Protagonistas',
    image: '/media/projects/demon-slayer_image-1.png',
    gallery: [
      '/media/projects/demon-slayer_image-1.png',
      '/media/projects/demon-slayer_image-2.png',
      '/media/projects/demon-slayer_image-3.png',
      '/media/projects/demon-slayer_image-4.png',
      '/media/projects/demon-slayer_image-5.png'
    ],
    category: 'design',
    description: 'Ilustração digital feita usando o universo do anime e mangá Demon Slayer (Kimetsu no Yaiba), apresentando os quatro protagonistas, Tanjiro Kamado, Nezuko Kamado, Zenitsu Agatsuma e Inosuke Hashibira em poses dinâmicas, utilizando suas habilidades características. A composição foi estruturada como um mosaico dinâmico, em que cada personagem ocupa uma seção distinta da arte, com efeitos visuais únicos que representam seus estilos de combate: água, eletricidade, chamas rosadas e ataques bestiais. Além disso, o fundo incorpora um padrão sutil de linhas geométricas que se entrelaçam, funcionando como elemento de ligação visual entre os personagens e reforçando a unidade da cena. A arte foi realizada em estilo mangá, utilizando mesa digitalizadora e o software Autodesk Sketchbook.',
    techs: ['Autodesk Sketchbook', 'Mesa digitalizadora', 'Estilo mangá', 'Pintura digital', 'Etapas em lanes', 'Composição em mosaico']
  },
  {
    id: 'boku-no-hero',
    title: 'Boku no Hero – Izuku e os Fragmentos que o moldam',
    image: '/media/projects/boku-no-hero_image-1.png',
    gallery: [
      '/media/projects/boku-no-hero_image-1.png',
      '/media/projects/boku-no-hero_image-2.png',
      '/media/projects/boku-no-hero_image-3.png',
      '/media/projects/boku-no-hero_image-4.png',
      '/media/projects/boku-no-hero_image-5.png',
      '/media/projects/boku-no-hero_image-6.png'
    ],
    category: 'design',
    description: 'Ilustração digital feita usando o universo de Boku no Hero Academia (My Hero Academia), com foco no protagonista Izuku Midoriya. A cena retrata Midoriya em posição contemplativa e vigilante sobre uma gárgula, com sua silhueta envolta por raios. O fundo foi concebido como um mosaico fragmentado, em que cada seção é separada pelos próprios raios emanados de seu corpo. Dentro de cada fragmento, aparecem outros personagens importantes da história, desenhados em lineart com sombreamento sutil, aplicados sobre paletas de cores únicas que variam conforme a emoção ou simbolismo de cada personagem. A composição equilibra ação e introspecção, criando uma atmosfera narrativa e visualmente impactante. A arte foi desenvolvida em estilo mangá com técnicas digitais utilizando mesa digitalizadora e Autodesk Sketchbook.',
    techs: ['Autodesk Sketchbook', 'Mesa digitalizadora', 'Estilo mangá', 'Pintura digital', 'Etapas em lanes', 'Composição em mosaico', 'Composição narrativa']
  },
  {
    id: 'wotakoi',
    title: 'Wotakoi – Abertura Icônica',
    image: '/media/projects/wotakoi_image-1.png',
    gallery: [
      '/media/projects/wotakoi_image-1.png',
      '/media/projects/wotakoi_image-2.png',
      '/media/projects/wotakoi_image-3.png',
      '/media/projects/wotakoi_image-4.png',
      '/media/projects/wotakoi_image-5.png'
    ],
    category: 'design',
    description: 'Ilustração digital inspirada na abertura icônica do anime Wotakoi: Wotaku ni Koi wa Muzukashii. A arte retrata os dois casais protagonistas (Narumi & Hirotaka, Hanako & Tarou) em poses fiéis à coreografia da dança apresentada na sequência de abertura, que viralizou nas redes sociais durante o lançamento da série. A composição divide visualmente os casais em dois ambientes distintos, separados por um fluxo de cores vibrantes que percorre a cena e dá movimento à imagem. Sobre esse fluxo, a logo do anime é centralizada como elemento de destaque. A ilustração também conta com diversos easter eggs ao fundo, incluindo referências à cultura pop, jogos, e a presença discreta do terceiro casal da série, que aparece em um monitor no canto inferior esquerdo. Todo o trabalho foi realizado em estilo mangá, utilizando ferramentas digitais para manter a estética limpa e fiel ao material original.',
    techs: ['Autodesk Sketchbook', 'Mesa digitalizadora', 'Estilo mangá', 'Pintura digital', 'Etapas em lanes', 'Composição narrativa']
  },
  {
  id: 'akatsuki-neon',
  title: 'Akatsuki – Neon Sangrento',
  image: '/media/projects/Akatsuki_image-1.png',
  gallery: [
    '/media/projects/Akatsuki_image-1.png',
    '/media/projects/Akatsuki_image-2.png',
    '/media/projects/Akatsuki_image-3.png',
    '/media/projects/Akatsuki_image-4.png',
    '/media/projects/Akatsuki_image-5.png',
    '/media/projects/Akatsuki_image-6.png',
    '/media/projects/Akatsuki_image-7.png'
  ],
  category: 'design',
  description: 'Ilustração digital dos membros da organização Akatsuki, do universo Naruto. Explorando uma composição dramática em preto e vermelho, as cores emblemáticas do grupo. O símbolo da Akatsuki, estilizado como um letreiro de neon vermelho, ocupa o centro da imagem e serve como única fonte de luz da cena, iluminando com intensidade os contornos dos personagens ao fundo. Os integrantes, apenas em lineart com volumes sugeridos pela iluminação do neon, surgem a partir da escuridão. Criando uma atmosfera sombria e ameaçadora. Reforça o mistério e o poder que cercam a Akatsuki, equilibrando fidelidade ao material original com um toque próprio, estilizado. Todo o trabalho foi feito com mesa digitalizadora e o software Autodesk SketchBook, utilizando camadas organizadas por função e foco na narrativa visual da composição.',
  techs: [
    'Autodesk Sketchbook',
    'Mesa digitalizadora',
    'Pintura digital',
    'Estilo mangá',
    'Luz e sombra',
    'Etapas em lanes'
  ]
},
{
  id: 'bear-and-bird',
  title: 'Urso e Pássaro – Companheiros Musicais',
  image: '/media/projects/bear-and-bird_image-1.png',
  gallery: [
    '/media/projects/bear-and-bird_image-1.png',
    '/media/projects/bear-and-bird_image-2.png',
    '/media/projects/bear-and-bird_image-3.png',
    '/media/projects/bear-and-bird_image-4.png'
  ],
  category: 'design',
  description: 'Ilustração digital desenvolvida para compor a decoração de um quarto infantil. A proposta era representar um urso em pé, com fones de ouvido coloridos e um pequeno pássaro pousado sobre sua cabeça. Uma cena lúdica que transmitisse leveza e simpatia. O estilo da arte equilibra o realismo nos detalhes com uma abordagem voltada ao universo infantil. A atenção especial foi dada à representação das texturas: os pelos do urso e as penas do pássaro foram desenhados com cuidado para reforçar a sensação tátil e acolhedora da imagem. A composição busca encantar tanto crianças quanto adultos, funcionando como peça decorativa e narrativa. Toda a ilustração foi feita com mesa digitalizadora no Adobe Photoshop, utilizando pincéis personalizados e camadas organizadas por função.',
  techs: [
    'Adobe Photoshop',
    'Mesa digitalizadora',
    'Estilo infantil realista',
    'Trabalho com texturas',
    'Composição lúdica',
    'Arte para decoração infantil'
  ]
},
{
  id: 'casal-retrato-digital',
  title: 'Retrato Digital – Casal',
  image: '/media/projects/casal-1.png',
  gallery: [
    '/media/projects/casal-1.png',
    '/media/projects/casal-2.png',
    '/media/projects/casal-3.png'
  ],
  category: 'design',
  description: 'Ilustração digital desenvolvida a partir de uma fotografia pessoal, capturando um momento especial em um passeio com minha esposa. A proposta foi transformar a imagem original em uma arte estilizada que mantivesse a essência do momento, destacando a expressão, os traços marcantes e os detalhes, como a tatuagem floral oriental e a tipografia da camiseta. A ilustração apresenta um acabamento limpo e expressivo, com contornos bem definidos, uso controlado de luz e sombra, e um fundo colorido suavemente desfocado para valorizar o casal em primeiro plano. O trabalho foi inteiramente feito com mesa digitalizadora no Adobe Photoshop, utilizando camadas separadas para facilitar o controle sobre cada elemento visual.',
  techs: [
    'Adobe Photoshop',
    'Mesa digitalizadora',
    'Retrato estilizado',
    'Arte baseada em foto',
    'Etapas em lanes',
    'Colorização digital'
  ]
},
{
  id: 'tinker-bell',
  title: 'Ilustração Digital – Tinker Bell',
  image: '/media/projects/tinker-bell-1.png',
  gallery: [
    '/media/projects/tinker-bell-1.png',
    '/media/projects/tinker-bell-2.png',
    '/media/projects/tinker-bell-3.png',
  ],
  category: 'design',
  description: 'Ilustração da personagem Tinker Bell (Sininho), inspirada na versão clássica da Disney para o conto infantil Peter Pan. O desenho foi inicialmente feito à mão livre sobre papel, com foco em capturar a delicadeza da personagem e sua interação com o ambiente floral. Após a finalização do traço tradicional, a arte foi digitalizada e passou por um processo de finalização no Adobe Photoshop, utilizando mesa digitalizadora para colorização e ajustes de luz, sombra e textura. O fundo branco com brilhos sutis destaca ainda mais a personagem e confere à peça um ar mágico. Mantendo fidelidade ao estilo visual da animação original.',
  techs: [
    'Desenho à mão livre',
    'Adobe Photoshop',
    'Mesa digitalizadora',
    'Desenho Artístico',
    'Colorização Digital'
  ]
},
{
  id: 'saint-seiya',
  title: 'Seiya de Pégaso',
  image: '/media/projects/saint-seiya-1.png',
  gallery: [
    '/media/projects/saint-seiya-1.png',
    '/media/projects/saint-seiya-2.png',
    '/media/projects/saint-seiya-3.png'
  ],
  category: 'design',
  description: 'Ilustração do personagem Seiya, protagonista do anime e mangá Saint Seiya (Os Cavaleiros do Zodíaco), retratado com sua armadura inicial da versão clássica do anime. A arte foi originalmente desenhada à mão no papel, em 2007, e posteriormente digitalizada para finalização e colorização digital. O trabalho foi desenvolvido com uso de mesa digitalizadora e Adobe Photoshop, onde foram aplicados efeitos de iluminação. Ao fundo, a constelação de Pégaso, símbolo do cavaleiro, é representada de forma etérea e brilhante sobre um céu noturno estrelado, reforçando o vínculo entre o personagem e sua constelação guardia. Uma homenagem nostálgica a um ícone dos animes clássicos.',
  techs: [
    'Desenho à mão livre',
    'Adobe Photoshop',
    'Mesa digitalizadora',
    'Desenho Artístico',
    'Colorização Digital',
    'Fanart',
  ]
},
{
  id: 'retrato-minimalista',
  title: 'Retrato Minimalista em Linhas',
  image: '/media/projects/line-portraid-1.png',
  gallery: [
    '/media/projects/line-portraid-1.png',
    '/media/projects/line-portraid-2.png',
    '/media/projects/line-portraid-3.png'
  ],
  category: 'design',
  description: 'Retrato minimalista feito a partir da observação de uma amiga, com o desafio de capturar sua essência e estilo utilizando o mínimo de traços possível. O foco foi construir uma imagem expressiva e reconhecível com uma abordagem leve, explorando contornos simples e marcantes. A composição dá destaque ao chapéu com padrão xadrez e aos acessórios delicados, reforçando aspectos da personalidade da retratada. Desenvolvido com mesa digitalizadora e Adobe Photoshop. Este trabalho representa uma experimentação estilística voltada ao minimalismo.',
  techs: [
    'Mesa digitalizadora',
    'Adobe Photoshop',
    'Desenho de observação',
    'Arte em linha',
    'Estilo minimalista',
    'Retrato digital'
  ]
}
]
