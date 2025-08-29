export type Project = {
  id: string
  title: string
  image: string
  gallery?: string[]
  videos?: string[]
  category: 'dev' | 'design'
  description: string
  techs?: string[]
  github?: string
  vercel?: string
}

export const projects: Project[] = [
  {
  id: 'jogo-ciclo-agua',
  title: 'Desafio do Ciclo da Água',
  image: '/media/projects/jogo-ciclo-agua_image-1.png',
  gallery: [
    '/media/projects/jogo-ciclo-agua_image-1.png',
    '/media/projects/jogo-ciclo-agua_image-2.png',
    '/media/projects/jogo-ciclo-agua_image-3.png',
    '/media/projects/jogo-ciclo-agua_image-4.png',
    '/media/projects/jogo-ciclo-agua_image-5.png',
    '/media/projects/jogo-ciclo-agua_image-6.png',
    '/media/projects/jogo-ciclo-agua_image-7.png'
  ],
  category: 'dev',
  description: 'O "Desafio do Ciclo da Água" é um jogo educativo interativo desenvolvido em HTML, CSS e JavaScript. Ele desafia os jogadores a responderem perguntas sobre o ciclo da água, seus estados físicos, importância ambiental e impactos da poluição, dentro de um tempo limite de 90 segundos. O projeto conta com cronômetro, sistema de pontuação, feedback visual imediato para respostas corretas e incorretas, além de uma interface leve, colorida e responsiva. Criado com foco em conscientização e educação ambiental, pode ser utilizado em escolas e projetos de sustentabilidade.',
  techs: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Gamificação',
    'Design responsivo',
    'Feedback interativo',
    'Educação ambiental'
  ],
  github: 'https://github.com/AndreDG88/ciclo_da_agua-jogo_educativo',
  vercel: 'https://ciclo-da-agua-jogo-educativo.vercel.app/'
  },
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
  id: 'gralha-azul',
  title: 'Gralha Azul - Carrossel Instagram',
  image: '/media/projects/gralha-azul_image-1.png',
  gallery: [
    '/media/projects/gralha-azul_image-1.png',
    '/media/projects/gralha-azul_image-2.png',
    '/media/projects/gralha-azul_image-3.png',
    '/media/projects/gralha-azul_image-4.png',
    '/media/projects/gralha-azul_image-5.png',
    '/media/projects/gralha-azul_image-6.png',
    '/media/projects/gralha-azul_image-7.png'
  ],
  category: 'design',
  description: 'O projeto Gralha Azul, consiste em um carrossel de seis imagens desenvolvidas para divulgação da marca no Instagram. As peças foram criadas com foco em apresentar a tradição da empresa, sua estrutura física, a inovação em produtos, a possibilidade de personalização, os diferenciais de qualidade e a localização do showroom. O design segue uma identidade visual consistente e moderna, utilizando composição de imagens, cores institucionais e tipografia de impacto, reforçando a credibilidade e a proximidade da marca com seu público.',
  techs: [
    'CorelDRAW',
    'Adobe Photoshop',
    'Design gráfico',
    'Identidade visual',
    'Criação de conteúdo para redes sociais',
    'Tratamento e edição de imagens',
    'Composição tipográfica',
    'Marketing digital'
  ]
  },
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
},
{
  id: 'outdoor-cm-servicos',
  title: 'Outdoor – C.M. Serviços',
  image: '/media/projects/cm-servicos_outdoor_image-1.png',
  gallery: [
    '/media/projects/cm-servicos_outdoor_image-1.png',
    '/media/projects/cm-servicos_outdoor_image-2.png',
    '/media/projects/cm-servicos_outdoor_image-3.png',
    '/media/projects/cm-servicos_outdoor_image-4.png',
    '/media/projects/cm-servicos_outdoor_image-5.png',
  ],
  category: 'design',
  description: 'Projeto gráfico desenvolvido para a empresa C.M. Serviços, especializada em conservação predial, portaria, segurança, limpeza e jardinagem. A peça foi criada para divulgação em outdoor, com foco na clareza visual e impacto imediato. O layout destaca cada serviço prestado por meio de composições fotográficas dinâmicas, cores segmentadas e uma organização que guia o olhar do público de forma fluida e objetiva. Também desenvolvi uma logomarca simples e funcional para atender à demanda do cliente, que ainda não possuía identidade visual. Além do design criativo, também fui responsável pelo preparo técnico do arquivo para produção gráfica, garantindo fidelidade de cores, resolução e acabamento para impressão em grande formato. O trabalho exigiu atenção à hierarquia de informação e adaptação ao contexto urbano e de alto tráfego visual onde a peça seria exibida.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Criação de logomarca',
    'Tratamento de imagem',
    'Preparação para impressão',
    'Comunicação visual corporativa'
  ]
},
{
  id: 'dbup-producoes',
  title: 'Identidade Visual – DBUP Produções',
  image: '/media/projects/dbup_image-1.png',
  gallery: [
    '/media/projects/dbup_image-1.png',
    '/media/projects/dbup_image-2.png',
    '/media/projects/dbup_image-3.png',
    '/media/projects/dbup_image-4.png',
    '/media/projects/dbup_image-5.png',
  ],
  category: 'design',
  description: 'Projeto de identidade visual desenvolvido para a DBUP Produções, estúdio voltado à assessoria e produção musical. A proposta da marca combina elementos gráficos modernos com forte ligação ao universo da música. O símbolo foi construído a partir da representação de uma clave de sol pixelada integrada a uma forma que remete a um gráfico de frequência sonora, transmitindo a essência digital e criativa do estúdio. Além da criação da logo principal, o trabalho envolveu o desenvolvimento de toda a identidade visual, incluindo padronização de tipográfia e aplicações práticas. Também foram elaboradas artes personalizadas para redes sociais e cartão de visitas, mantendo coesão para diferentes mídias. O projeto equilibra simplicidade, impacto visual e conexão direta com o segmento musical.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Design de logotipo',
    'Identidade visual',
    'Design para redes sociais',
    'Cartão de visitas'
  ]
},
{
  id: 'proj-de-gente-revista',
  title: 'Anúncio Editorial – Projeto de Gente',
  image: '/media/projects/proj-de-gente-revista_image-1.png',
  gallery: [
    '/media/projects/proj-de-gente-revista_image-1.png',
    '/media/projects/proj-de-gente-revista_image-2.png',
    '/media/projects/proj-de-gente-revista_image-3.png',
  ],
  category: 'design',
  description: 'Arte desenvolvida para o Projeto de Gente, marca especializada em mobiliário e decoração infantil. O layout foi criado especialmente para veiculação em página dupla de revista, com foco em impactar visualmente pais e responsáveis por meio de uma linguagem lúdica e afetiva. A composição valoriza cores vibrantes, formas orgânicas e elementos que remetem ao universo da infância. O projeto envolveu a criação visual completa, incluindo tratamento fotográfico no Photoshop, vetorização e composição gráfica no Illustrator, e finalização técnica no InDesign, com preparação para impressão em alta qualidade. O resultado final traduz os valores da marca, reforçando sua proposta de ambientes personalizados, funcionais e encantadores.',
  techs: [
    'Adobe InDesign',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Design editorial',
    'Publicidade impressa',
    'Diagramação',
    'Tratamento de imagem'
  ]
},
{
  id: 'os-jeds',
  title: 'Os Jeds - Identidade Visual',
  image: '/media/projects/os-jeds_image-1.png',
  gallery: [
    '/media/projects/os-jeds_image-1.png',
    '/media/projects/os-jeds_image-2.png',
    '/media/projects/os-jeds_image-3.png',
  ],
  category: 'design',
  description: 'Identidade visual desenvolvida para a banda Os Jeds, com foco em transmitir uma imagem moderna, minimalista e marcante. O projeto incluiu a criação do logotipo principal, além de peças aplicadas para cartões de visita, redes sociais e materiais de divulgação. A composição gráfica aposta em tipografia personalizada com linhas estilizadas e um layout dinâmico em preto, branco, tons de cinza E pequenos elementos em verde. Reforçando a personalidade urbana e contemporânea da banda. Todo o processo foi desenvolvido com atenção à versatilidade da marca em diferentes aplicações físicas e digitais.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Identidade visual',
    'Design de logotipo',
    'Design para redes sociais'
  ]
},
{
  id: 'peludos-pet-sitter',
  title: 'Peludos Pet Sitter – Identidade Visual',
  image: '/media/projects/peludos_image-1.png',
  gallery: [
    '/media/projects/peludos_image-1.png',
    '/media/projects/peludos_image-2.png',
    '/media/projects/peludos_image-3.png',
    '/media/projects/peludos_image-4.png'
  ],
  category: 'design',
  description: 'Projeto completo de identidade visual desenvolvido para a "Peludos Pet Sitter", uma empresa especializada em cuidados personalizados para animais de estimação. O trabalho incluiu a criação da logo, identidade visual com paleta de cores e tipografia personalizada. Além do desenvolvimento de materiais promocionais como artes para redes sociais, flyer informativo e cartão de visitas. Toda a comunicação foi pensada para transmitir acolhimento, confiança e alegria, elementos essenciais no relacionamento entre o pet sitter, os animais e seus tutores. As ilustrações foram vetorizadas no Adobe Illustrator, e tratamento de imagens no Adobe Photoshop. Também preparei os arquivos finais para produção gráfica e uso digital, garantindo consistência e qualidade visual em todos os formatos de aplicação.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Criação de logotipo',
    'Identidade visual',
    'Design para redes sociais',
    'Design de materiais impressos'
  ]
},
{
  id: 'parede-pequeno-principe',
  title: 'Papel de parede do Pequeno Príncipe',
  image: '/media/projects/peq-principe-parede_image-1.png',
  gallery: [
    '/media/projects/peq-principe-parede_image-1.png',
    '/media/projects/peq-principe-parede_image-2.png',
    '/media/projects/peq-principe-parede_image-3.png',
    '/media/projects/peq-principe-parede_image-4.png'
  ],
  category: 'design',
  description: 'Projeto desenvolvido para um cliente da Projeto de Gente, que desejava personalizar uma parede com o tema do clássico literário "O Pequeno Príncipe". A proposta partiu de uma imagem de referência enviada pelo cliente, à qual se somaram pesquisas visuais adicionais feitas por mim, a fim de criar uma composição original e delicada. A arte final retrata o personagem em sua pequena estrela, ao lado da rosa, sob um céu estrelado com textura de lousa. Para compor a ilustração, utilizei o CorelDRAW na criação dos traços vetoriais, explorando um estilo minimalista e contínuo, e finalizei no Adobe Photoshop com tratamento de texturas, aplicação de cores sutis e inserção da famosa frase: "Tu te tornas eternamente responsável por aquilo que cativas". Após aprovação, também fui responsável pela preparação do arquivo para produção e impressão.',
  techs: [
    'CorelDRAW',
    'Adobe Photoshop',
    'Design de interiores',
    'Arte vetorial personalizada',
    'Preparação para impressão'
  ]
},
{
  id: 'parede-surf',
  title: 'Surf na Parede – Ilustração Vetorial',
  image: '/media/projects/ondas-vetor-parede_image-1.png',
  gallery: [
    '/media/projects/ondas-vetor-parede_image-1.png',
    '/media/projects/ondas-vetor-parede_image-2.png',
    '/media/projects/ondas-vetor-parede_image-3.png',
    '/media/projects/ondas-vetor-parede_image-4.png',
  ],
  category: 'design',
  description: 'Projeto desenvolvido para um cliente da Projeto de Gente que desejava personalizar uma parede com uma arte inspirada na paixão do filho pelo surf. O cliente forneceu uma imagem de referência que guiou a criação da composição final. A proposta consistia em transformar essa referência em uma ilustração vetorial personalizada, adaptada para impressão em grande formato. A arte buscou capturar a leveza e fluidez das ondas do mar com traços orgânicos e harmônicos. O projeto foi desenvolvido no CorelDRAW, com finalização de cores, iluminação e ajustes no Adobe Photoshop. Após aprovação, também fui responsável pela preparação do arquivo para produção e impressão.',
  techs: [
    'CorelDRAW',
    'Adobe Photoshop',
    'Ilustração vetorial',
    'Design para ambientes',
    'Adaptação para grande formato',
    'Tratamento de imagem para impressão'
  ]
},
{
  id: 'quarto-tematico-selva',
  title: 'Quarto Infantil Temático – Arte Selva',
  image: '/media/projects/selva-vetor-parede_image-1.png',
  gallery: [
    '/media/projects/selva-vetor-parede_image-1.png',
    '/media/projects/selva-vetor-parede_image-2.png',
    '/media/projects/selva-vetor-parede_image-3.png',
    '/media/projects/selva-vetor-parede_image-4.png'
  ],
  category: 'design',
  description: 'Ilustração personalizada desenvolvida para aplicação em um quarto infantil com tema "selva", sob encomenda da equipe da Projeto de Gente. O cliente enviou uma imagem de referência que serviu de base para o conceito visual, e a partir dela foram realizadas pesquisas complementares para propor uma nova arte. Todo o layout foi pensado para se adaptar perfeitamente à marcenaria sob medida do ambiente, respeitando os recortes e volumes da mobília, como cama elevada, redes de proteção, e climatização. A composição apresenta uma cena lúdica com animais da floresta em estilo vetorial, criando um cenário acolhedor, divertido e estimulante para a criança. A arte foi inteiramente desenvolvida no CorelDRAW e o arquivo final foi cuidadosamente preparado para impressão em grande formato, respeitando margens de segurança, sangria e encaixes técnicos necessários para a produção.',
  techs: [
    'CorelDRAW',
    'Ilustração vetorial',
    'Design de ambientes',
    'Criação de arte para impressão',
    'Adequação a projeto'
  ]
},
{
  id: 'rialto-anuncio',
  title: 'Rialto Ristorante – Anúncio Promocional para Revista',
  image: '/media/projects/rialto-anuncio_image-1.png',
  gallery: [
    '/media/projects/rialto-anuncio_image-1.png',
    '/media/projects/rialto-anuncio_image-2.png'
  ],
  category: 'design',
  description: 'Criação de arte promocional para o restaurante Rialto, desenvolvida especialmente para publicação em revista impressa. O objetivo era divulgar o buffet variado da casa e atrair novos clientes com uma oferta de 10% de desconto. A composição visual traz elementos que remetem ao universo da gastronomia sofisticada, com destaque para a tipografia elegante, texturas clássicas de fundo e o prato sendo servido por uma mão com luva. Reforçando a ideia de atendimento refinado. As imagens foram tratadas no Adobe Photoshop para garantir qualidade de impressão, enquanto a diagramação e os elementos gráficos foram desenvolvidos no CorelDRAW. Todo o layout foi pensado para destacar as informações principais de forma clara e atrativa, dentro do padrão editorial da revista.',
  techs: [
    'CorelDRAW',
    'Adobe Photoshop',
    'Tratamento de imagem',
    'Design para mídia impressa',
    'Anúncio publicitário',
    'Composição promocional'
  ]
},
{
  id: 'convite-casamento',
  title: 'Convite de Casamento – Raphael & Renata',
  image: '/media/projects/convite-casamento_image-1.png',
  gallery: [
    '/media/projects/convite-casamento_image-1.png',
    '/media/projects/convite-casamento_image-2.png',
    '/media/projects/convite-casamento_image-3.png'
  ],
  category: 'design',
  description: 'Desenvolvimento de convite personalizado para o casamento de Raphael & Renata, composto por arte impressa e envelope com design integrado. O conceito visual teve como inspiração o tema outono, representado pelas folhas alaranjadas e tons quentes que aparecem na composição, criando uma atmosfera romântica, natural e acolhedora. A identidade visual foi construída de forma a valorizar a união gráfica entre o envelope e o convite, formando uma peça coesa quando os dois elementos estão juntos. A diagramação e tipografia foram cuidadosamente escolhidas para equilibrar elegância e legibilidade, reforçando o estilo clássico do evento. A arte foi desenvolvida no Adobe InDesign, com tratamento de imagens e finalização no Adobe Photoshop. Todo o material foi preparado para impressão de alta qualidade, respeitando margens e formatos personalizados.',
  techs: [
    'Adobe InDesign',
    'Adobe Photoshop',
    'Design de logotipo',
    'Convite personalizado',
    'Identidade visual',
    'Preparação para impressão'
  ]
},
{
  id: 'matsuda',
  title: 'Associação Matsuda de Judô - Identidade Visual',
  image: '/media/projects/matsuda-shiro_image-1.png',
  gallery: [
    '/media/projects/matsuda-shiro_image-1.png',
    '/media/projects/matsuda-shiro_image-2.png',
    '/media/projects/matsuda-shiro_image-3.png'
  ],
  category: 'design',
  description: 'Projeto desenvolvido para o Mestre Matsuda Shiro e a Associação Matsuda de Judô, com foco na criação de uma nova identidade visual para a entidade. O trabalho incluiu o redesign do logotipo, que incorpora elementos da cultura japonesa com traços modernos, além da criação de um modelo de cartão de visitas frente e verso, integrando símbolos tradicionais e informações funcionais com clareza e elegância. Também foi desenvolvida a arte para o flyer do evento "Iminkan Matsuri", comemorativo aos 110 anos da imigração japonesa no Brasil, respeitando a mesma linha visual da nova marca. O material foi pensado para fortalecer a presença institucional da associação e criar unidade visual entre os diferentes suportes. As peças foram produzidas utilizando Corel Draw e Photoshop, com finalização voltada para impressão e divulgação digital.',
  techs: [
    'CorelDRAW',
    'Adobe Photoshop',
    'Criação de identidade visual',
    'Design de logotipo',
    'Design para eventos culturais',
    'Design de materiais impressos',
    'Preparação para impressão'
  ]
},
{
  id: 'conceito-catalogo',
  title: 'Conceito Sinalização – Catálogo Apresentativo',
  image: '/media/projects/conceito-catalogo_image-1.png',
  gallery: [
    '/media/projects/conceito-catalogo_image-1.png',
    '/media/projects/conceito-catalogo_image-2.png',
    '/media/projects/conceito-catalogo_image-3.png',
    '/media/projects/conceito-catalogo_image-4.png',
    '/media/projects/conceito-catalogo_image-5.png'
  ],
  category: 'design',
  description: 'Este projeto foi desenvolvido para a Conceito Sinalização, empresa especializada em comunicação visual. O objetivo era criar um catálogo institucional com visual moderno e informativo, reunindo os principais serviços, portfólio de trabalhos, diferenciais e formas de contato. O material foi pensado para uso impresso, como apoio a apresentações comerciais, e também para distribuição digital por e-mail marketing. A diagramação foi organizada em capítulos temáticos (sinalização, gráfica, brindes, design entre outros), com elementos gráficos personalizados, ícones e imagens reais de projetos executados pela empresa. Todo o conteúdo foi editado e revisado para transmitir profissionalismo e reforçar a identidade visual da marca.',
  techs: [
    'Design editorial',
    'Diagramação de catálogo',
    'CorelDRAW',
    'Adobe Photoshop',
    'Identidade visual',
    'Apresentação comercial',
    'Comunicação visual',
    'Marketing institucional'
  ]
},
{
  id: 'la-fornata',
  title: 'La Fornata – Identidade Visual e Fachada',
  image: '/media/projects/la-fornata-sinalizacao_image-1.png',
  gallery: [
    '/media/projects/la-fornata-sinalizacao_image-1.png',
    '/media/projects/la-fornata-sinalizacao_image-2.png',
    '/media/projects/la-fornata-sinalizacao_image-3.png'
  ],
  category: 'design',
  description: 'Projeto desenvolvido para a panificadora La Fornata, com foco na criação de uma nova identidade visual para a marca. O trabalho incluiu o redesign completo do logotipo, buscando transmitir um conceito artesanal e acolhedor, alinhado à proposta de pães e doces tradicionais. A partir dessa identidade, foram desenvolvidas duas artes exclusivas para aplicação na fachada da loja. As peças foram adaptadas para impressão em lona com alta resolução, explorando ilustrações temáticas, texturas que remetem ao papel kraft e imagens que valorizam o processo de fabricação artesanal. Todo o visual foi pensado para reforçar a presença da marca no ponto de venda e atrair o público pela estética convidativa.',
  techs: [
    'Identidade visual',
    'Design de fachada',
    'Desenvolvimento de logo',
    'CorelDRAW',
    'Adobe Photoshop',
    'Comunicação visual para PDV'
  ]
},
{
  id: 'dungeon-store',
  title: 'Dungeon Store – Identidade Visual Nerd/Geek',
  image: '/media/projects/dungeon-store_image-1.png',
  gallery: [
    '/media/projects/dungeon-store_image-1.png',
    '/media/projects/dungeon-store_image-2.png',
    '/media/projects/dungeon-store_image-3.png',
    '/media/projects/dungeon-store_image-4.png',
    '/media/projects/dungeon-store_image-5.png',
    '/media/projects/dungeon-store_image-6.png',
    '/media/projects/dungeon-store_image-7.png',
    '/media/projects/dungeon-store_image-8.png'
  ],
  category: 'design',
  description: 'Desenvolvimento completo da identidade visual para a Dungeon Store, uma loja voltada ao público nerd, geek e otaku. O projeto começou com a criação do logotipo, que traz elementos de fantasia e aventura, como um dragão estilizado, remetendo a universos de RPG e cultura pop. A identidade visual foi expandida para diversos materiais, incluindo fachada da loja, uniformes personalizados, cartões de visita e artes para redes sociais. Todo o conceito gráfico foi pensado para dialogar com o público-alvo, transmitindo uma estética épica e envolvente, ao mesmo tempo em que se manteve funcional para aplicações comerciais.',
  techs: [
    'Identidade visual',
    'Design geek/nerd',
    'Criação de logotipo',
    'Design de fachada comercial',
    'Design de Uniformes',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Design para redes sociais'
  ]
},
{
  id: 'logotipo-ledi-e-lu-doces',
  title: 'Ledi & Lú Doces – Identidade Visual',
  image: '/media/projects/ledi-e-lu_image-1.png',
  gallery: [
    '/media/projects/ledi-e-lu_image-1.png',
    '/media/projects/ledi-e-lu_image-2.png',
    '/media/projects/ledi-e-lu_image-3.png',
    '/media/projects/ledi-e-lu_image-4.png'
  ],
  category: 'design',
  description: 'Criação de logotipo para uma dupla de confeiteiras que atuam em feirinhas e eventos locais. O projeto teve como objetivo transmitir a essência artesanal e acolhedora da marca, com uma estética doce e convidativa. A arte foi desenvolvida no CorelDRAW, combinando elementos ilustrativos de confeitaria com uma tipografia amigável e fluida. O destaque vai para o uso de cores suaves e detalhes que remetem a coberturas e doces, reforçando o apelo visual do segmento de atuação. A entrega incluiu versões em alta resolução para impressão e uso digital.',
  techs: [
    'CorelDRAW',
    'Design de logotipo',
    'Identidade visual',
    'Ilustração vetorial',
    'Tipografia personalizada'
  ]
},
{
  id: 'clube-conceito-logo-identidade',
  title: 'Clube Conceito – Identidade Visual',
  image: '/media/projects/clube-conceito_image-1.png',
  gallery: [
    '/media/projects/clube-conceito_image-1.png',
    '/media/projects/clube-conceito_image-2.png',
    '/media/projects/clube-conceito_image-3.png'
  ],
  category: 'design',
  description: 'Projeto desenvolvido para a empresa Conceito Sinalização, com foco na criação de uma identidade visual exclusiva para o “Clube Conceito”, um programa de vantagens voltado aos clientes VIPs da marca. A proposta consistiu em desenvolver uma variante do logotipo principal da empresa, mantendo a conexão visual com a marca original, mas com um toque mais sofisticado e premium. O design aposta em elementos metálicos dourados, remetendo à exclusividade, confiança e valor agregado. A aplicação da marca foi pensada para materiais impressos e digitais, respeitando a identidade da Conceito Sinalização enquanto cria uma linguagem própria para o novo serviço.',
  techs: [
    'CorelDRAW',
    'Adobe Photoshop',
    'Design de logotipo',
    'Identidade visual corporativa',
    'Criação de submarca',
    'Branding'
  ]
},
{
  id: 'modelos-convites',
  title: 'Modelos de Convites Personalizados – Conceito Sinalização',
  image: '/media/projects/convites-conceito_image-1.png',
  gallery: [
    '/media/projects/convites-conceito_image-1.png',
    '/media/projects/convites-conceito_image-2.png',
    '/media/projects/convites-conceito_image-3.png',
    '/media/projects/convites-conceito_image-4.png',
    '/media/projects/convites-conceito_image-5.png',
    '/media/projects/convites-conceito_image-6.png'
  ],
  category: 'design',
  description: 'Projeto desenvolvido para a Conceito Sinalização com o objetivo de montar um banco de modelos pré-formatados de convites personalizados. A proposta era oferecer aos clientes uma variedade de opções prontas, facilitando a escolha quando não houvesse uma ideia clara para o design. Os modelos foram elaborados com layout flexível, permitindo a rápida substituição de textos, imagens e, quando necessário, adaptações de cores. A coleção abrange diferentes estilos e ocasiões, otimizando o processo de criação e entrega de materiais gráficos sob demanda.',
  techs: [
    'CorelDRAW',
    'Design gráfico',
    'Diagramação',
    'Design editorial',
    'Personalização de convites',
    'Material promocional',
    'Produção gráfica sob demanda'
  ]
},
{
  id: 'conceito-fachada-acm',
  title: 'Conceito Soluções – Projeto de fachasda',
  image: '/media/projects/conceito-fachada_image-1.png',
  gallery: [
    '/media/projects/conceito-fachada_image-1.png',
    '/media/projects/conceito-fachada_image-2.png',
    '/media/projects/conceito-fachada_image-3.png',
    '/media/projects/conceito-fachada_image-4.png',
    '/media/projects/conceito-fachada_image-5.png',
    '/media/projects/conceito-fachada_image-6.png'
  ],
  category: 'design',
  description: 'Projeto desenvolvido para a Conceito Sinalização, que havia adquirido um novo espaço e precisava de uma fachada moderna e impactante. A proposta foi baseada na identidade visual da marca, utilizando revestimento em ACM nas cores institucionais, aplicação de adesivo vinil em pontos estratégicos e letreiros luminosos (backlight) com o logotipo e slogan da empresa. O objetivo era transformar completamente o visual do imóvel, reforçando a presença da marca na região e transmitindo profissionalismo e inovação. Todo o projeto foi planejado considerando viabilidade de produção e instalação.',
  techs: [
    'CorelDRAW',
    'Projeto 3D',
    'Design de fachada comercial',
    'Identidade visual aplicada',
    'Projeto executivo para produção',
    'Comunicação visual'
  ]
},
{
  id: 'conceito-impulsione-vendas-social',
  title: 'Impulsione Suas Vendas – Arte para Mídia Social',
  image: '/media/projects/conceito-impulsione-vendas_image-1.png',
  gallery: [
    '/media/projects/conceito-impulsione-vendas_image-1.png',
    '/media/projects/conceito-impulsione-vendas_image-2.png'
  ],
  category: 'design',
  description: 'Arte desenvolvida para a Conceito Sinalização com o objetivo de promover uma campanha de cartões de visita nas redes sociais. A peça gráfica foi pensada para ser visualmente atrativa e direta, utilizando elementos ilustrativos e um layout dinâmico para destacar a oferta promocional. A composição inclui um personagem estilizado em um foguete, representando o impulso nos negócios que o cliente pode obter. O design foi desenvolvido no Adobe Illustrator, com finalização e ajustes visuais no Adobe Photoshop.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Design gráfico para redes sociais',
    'Promoção visual',
    'Comunicação publicitária',
    'Composição digital'
  ]
},
{
  id: 'conceito-promocao-panfletos',
  title: 'Promoção Panfletos – Arte para Mídia Social',
  image: '/media/projects/conceito-promocao-vendas_image-1.png',
  gallery: [
    '/media/projects/conceito-promocao-vendas_image-1.png',
    '/media/projects/conceito-promocao-vendas_image-2.png'
  ],
  category: 'design',
  description: 'Arte desenvolvida para a Conceito Sinalização com o objetivo de divulgar uma promoção de panfletos nas redes sociais. A peça foi criada para ter forte impacto visual, destacando os principais elementos da oferta de forma direta e atrativa. A composição simula uma mão segurando o panfleto em um cenário urbano desfocado, reforçando a ideia de alcance e proximidade com o público. O layout foi desenvolvido no Adobe Illustrator com finalização e tratamento visual no Adobe Photoshop.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Design gráfico para redes sociais',
    'Promoção visual',
    'Composição com mockup realista',
    'Comunicação publicitária'
  ]
},
{
  id: 'fusion-brindes-colecao',
  title: 'Fusion Brindes - Coleção de Artes Comemorativas',
  image: '/media/projects/fusion-email-marketing_image-1.png',
  gallery: [
    '/media/projects/fusion-email-marketing_image-1.png',
    '/media/projects/fusion-email-marketing_image-2.png',
    '/media/projects/fusion-email-marketing_image-3.png',
    '/media/projects/fusion-email-marketing_image-4.png',
    '/media/projects/fusion-email-marketing_image-5.png',
    '/media/projects/fusion-email-marketing_image-6.png',
    '/media/projects/fusion-email-marketing_image-7.png',
    '/media/projects/fusion-email-marketing_image-8.png',
    '/media/projects/fusion-email-marketing_image-9.png',
    '/media/projects/fusion-email-marketing_image-10.png',
    '/media/projects/fusion-email-marketing_image-11.png',
    '/media/projects/fusion-email-marketing_image-12.png',
    '/media/projects/fusion-email-marketing_image-13.png',
    '/media/projects/fusion-email-marketing_image-14.png',
    '/media/projects/fusion-email-marketing_image-15.png'
  ],
  category: 'design',
  description: 'Coleção de peças gráficas desenvolvidas para a Fusion Presentes Corporativos, voltadas para campanhas de datas comemorativas e eventos especiais. As artes foram utilizadas em campanhas de e-mail marketing e redes sociais, com foco na divulgação de brindes personalizados. Cada layout foi desenvolvido com identidade visual própria, adaptando-se ao tema de cada data como São João, Dia das Crianças, Olimpíadas, Dia do Cliente, entre outras. O trabalho envolveu criatividade, planejamento visual e adaptação para diferentes canais de comunicação.',
  techs: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Design para campanhas sazonais',
    'Marketing digital',
    'Criação para e-mail marketing',
    'Composição temática',
    'Design gráfico promocional',
    'Identidade visual'
  ]
},
{
  id: 'nosso-boteco-cardapio',
  title: 'Nosso Boteco - Cardápio',
  image: '/media/projects/nosso-boneco_image-1.png',
  gallery: [
    '/media/projects/nosso-boneco_image-1.png',
    '/media/projects/nosso-boneco_image-2.png',
    '/media/projects/nosso-boneco_image-3.png'
  ],
  category: 'design',
  description: 'Criação do novo cardápio frente e verso para o bar Nosso Boteco. A arte foi desenvolvida com foco em uma leitura clara e visualmente atrativa, organizada por categorias de produtos (petiscos, bebidas, porções, etc.). O material foi finalizado para impressão PS com laminação, garantindo maior durabilidade e aparência profissional. Um projeto gráfico funcional, pensado para melhorar a experiência dos clientes no local.',
  techs: [
    'Adobe Photoshop',
    'Diagramação',
    'Design gráfico',
    'Design editorial',
    'Material impresso',
    'Identidade visual'
  ]
},
{
  id: 'sonhos-acai-identidade',
  title: 'Sonhos & Açaí – Identidade Visual e Sinalização',
  image: '/media/projects/sonhos-acai_image-1.png',
  gallery: [
    '/media/projects/sonhos-acai_image-1.png',
    '/media/projects/sonhos-acai_image-2.png',
    '/media/projects/sonhos-acai_image-3.png'
  ],
  category: 'design',
  description: 'Projeto de identidade visual e ambientação para a lanchonete Sonhos & Açaí. O trabalho envolveu a criação do logotipo e toda a linguagem visual da marca, incluindo paleta de cores, tipografia e elementos gráficos personalizados. A identidade foi aplicada na fachada da loja com layouts adaptados para testeira frontlight, totem luminoso, janelas personalizadas e lonas impressas no deck, valorizando o apelo gastronômico com imagens e ícones temáticos. O desenvolvimento foi realizado no CorelDRAW, com finalização técnica voltada para produção em adesivo e impressão de grande formato. A proposta buscou unir uma estética vibrante com soluções funcionais de sinalização visual para ponto de venda.',
  techs: [
    'Identidade visual',
    'Criação de logotipo',
    'Design para fachada comercial',
    'Comunicação visual para PDV',
    'CorelDRAW',
    'Arte para impressão em grande formato',
    'Adesivação de ambientes'
  ]
},
{
  id: 'projeto-varanda-3d',
  title: 'Varanda – Maquete Eletrônica 3D',
  image: '/media/projects/projeto-varanda_image-1.png',
  gallery: [
    '/media/projects/projeto-varanda_image-1.png',
    '/media/projects/projeto-varanda_image-2.png',
    '/media/projects/projeto-varanda_image-3.png',
    '/media/projects/projeto-varanda_image-4.png',
    '/media/projects/projeto-varanda_image-5.png'
  ],
  category: 'design',
  description: 'Modelagem e renderização de ambiente interno residencial, com foco em composição, iluminação e realismo de materiais. A proposta deste projeto foi simular um espaço de varanda personalizada, com atmosfera aconchegante e iluminação natural abundante. O ambiente conta com mobiliário em madeira, assentos com almofadas coloridas, piano de cauda e detalhes decorativos que reforçam o clima intimista. Os renders foram produzidos em versões diurna e noturna para explorar diferentes comportamentos de luz e sombra. Todo o processo de modelagem, texturização, iluminação e render foi desenvolvido no 3ds Max Studio, com especial atenção ao equilíbrio e ao realismo na ambientação.',
  techs: [
    'Maquete eletrônica',
    'Modelagem 3D',
    'Renderização',
    'Texturização realista',
    'Simulação de iluminação',
    'Design de interiores',
    '3ds Max Studio',
    'Composição de cena',
    'Visualização arquitetônica'
  ]
},
{
  id: 'projeto-palco-3d',
  title: 'Cenografia – Palco para Programa de Auditório',
  image: '/media/projects/projeto-palco_image-1.png',
  gallery: [
    '/media/projects/projeto-palco_image-1.png',
    '/media/projects/projeto-palco_image-2.png',
    '/media/projects/projeto-palco_image-3.png',
    '/media/projects/projeto-palco_image-4.png',
    '/media/projects/projeto-palco_image-5.png'
  ],
  category: 'design',
  description: 'Projeto de cenografia digital para um programa de auditório com temática infantil e lúdica. O cenário foi desenvolvido a partir da planta fornecida por um arquiteto parceiro e modelado integralmente em 3D no 3ds Max Studio. A proposta visual explora formas orgânicas, cores vibrantes, elementos flutuantes e uma composição que remete a um universo de imaginação e aprendizado. Entre os destaques estão o globo com estrada em perspectiva, a parede interativa com formas geométricas e o teto com painéis suspensos. Para enriquecer o realismo e a profundidade das imagens, os renders receberam tratamento final com ambient occlusion aplicado no Photoshop.',
  techs: [
    'Maquete eletrônica',
    'Modelagem 3D',
    'Renderização',
    'Texturização realista',
    'Simulação de iluminação',
    'Ambient occlusion',
    '3ds Max Studio',
    'Render com pós-produção',
    'Composição cenográfica'
  ]
},
{
  id: 'jan-tattoo-painel',
  title: 'Studio Jan Tattoo - Painel Decorativo',
  image: '/media/projects/jan-tatto_image-1.png',
  gallery: [
    '/media/projects/jan-tatto_image-1.png',
    '/media/projects/jan-tatto_image-2.png'
  ],
  category: 'design',
  description: 'Criação de imagem conceitual para painel decorativo de um estúdio de tatuagem. A composição apresenta a logomarca da Jan Tattoo — uma caveira estilizada — modelada em 3D para simular uma peça em relevo de alumínio polido vermelho, aplicada sobre uma superfície branca fosca. A iluminação foi cuidadosamente trabalhada com um spot de luz direcional para acentuar sombras e brilhos, conferindo realismo ao material. Após o render final, a tipografia foi aplicada via Photoshop, respeitando o estilo urbano e expressivo do estúdio. O resultado é uma peça visual impactante e moderna, pensada para integrar o ambiente interno com identidade e personalidade.',
  techs: [
    'Modelagem 3D',
    'Simulação de iluminação',
    'Render com iluminação realista',
    'Simulação de materiais',
    'Composição visual',
    '3ds Max Studio',
    'Photoshop'
  ]
},
{
  id: 'conceito-recepcao-3d',
  title: 'Conceito Sinalização – Maquete 3D de Recepção',
  image: '/media/projects/conceito-recepcao_image-1.png',
  gallery: [
    '/media/projects/conceito-recepcao_image-1.png',
    '/media/projects/conceito-recepcao_image-2.png',
    '/media/projects/conceito-recepcao_image-3.png',
    '/media/projects/conceito-recepcao_image-4.png',
    '/media/projects/conceito-recepcao_image-5.png',
    '/media/projects/conceito-recepcao_image-6.png'
  ],
  category: 'design',
  description: 'Projeto de maquete eletrônica 3D desenvolvido para a Conceito Sinalização, com foco na remodelação da recepção de uma de suas lojas. A proposta foi criar duas opções de layout para o espaço, levando em consideração estética moderna e funcionalidade. Foram utilizados recursos avançados de iluminação e texturização no 3ds Max Studio para garantir um resultado visual realista, simulando fielmente a incidência de luz solar natural que atinge o ambiente durante o expediente, devido às amplas vitrines e portas de vidro.',
  techs: [
    'Modelagem 3D',
    'Design de interiores',
    'Render realista',
    '3ds Max Studio',
    'Simulação de iluminação',
    'Ambient occlusion',
    'Simulação de texturas'
  ]
},
{
  id: 'recurso-esgotado',
  title: 'Recurso Esgotado - Curta-metragem',
  image: '/media/projects/recurso-esgotado_image-1.png',
  gallery: [
    '/media/projects/recurso-esgotado_image-1.png',
    '/media/projects/recurso-esgotado_image-2.png',
    '/media/projects/recurso-esgotado_image-3.png',
    '/media/projects/recurso-esgotado_image-4.png',
    '/media/projects/recurso-esgotado_image-5.png',
    '/media/projects/recurso-esgotado_image-6.png',
    '/media/projects/recurso-esgotado_image-7.png',
    '/media/projects/recurso-esgotado_image-8.png',
    '/media/projects/recurso-esgotado_image-9.png',
    '/media/projects/recurso-esgotado_image-10.png',
    '/media/projects/recurso-esgotado_image-11.png',
    '/media/projects/recurso-esgotado_image-12.png'
  ],
  videos: [
    '/media/projects/recurso-esgotado_video-1.mp4'
  ],
  category: 'design',
  description: '“Recurso Esgotado” é um curta-metragem de animação 3D desenvolvido como projeto de conclusão de curso em parceria com um colega de graduação. O filme, que aborda de forma sensível e simbólica questões sociais e ambientais, percorreu todas as etapas clássicas da produção em animação: pesquisa, elaboração de roteiro, desenvolvimento de storyboard, concepção visual e pesquisa de arte, produção de concepts, modelagem e texturização de personagens e cenários, rigging, iluminação, animação, renderização e pós-produção. Todo o processo foi documentado em um art book e um manual de identidade visual, incluindo também peças gráficas como pôsteres e materiais impressos promocionais. No ano seguinte à sua conclusão, o projeto foi para exibição no festival de animação Anima Mundi, consolidando sua relevância e qualidade no cenário independente.',
  techs: [
    'Animação 3D',
    'Modelagem e texturização',
    'Roteiro e storyboard',
    'Concept art',
    'Rigging de personagens',
    'Iluminação e render',
    'Pós-produção audiovisual',
    'Produção',
    'Art book',
    'identidade visual',
    'Materiais impressos'
  ]
}
]
