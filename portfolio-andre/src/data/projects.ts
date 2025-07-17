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
    description: 'Desenvolvido como projeto final do curso de Desenvolvedor Fullstack Python pela EBAC - Escola Britânica de Artes Criativas e Tecnologia. Uma rede social minimalista e responsiva que permite aos usuários criarem perfis, publicarem mensagens curtas (papos), seguir outras pessoas, curtir postagens, fazer rePapos e acompanhar tendências. Funcionalidades principais: Autenticação em token com login e cadastro de usuários, Perfis de usuário com foto de avatar, Sistema completo de mensagens (papos), Curtir e descurtir papos, RePapear (compartilhar papo com ou sem comentário), Seguir e deixar de seguir usuários, Listagem de tendências com base nas hashtags mais utilizadas, Interface web responsiva e mobile-first, Backend em Django REST Framework, Frontend em React + TypeScript e Deploy completo: API no PythonAnywhere, frontend na Vercel',
    techs: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'JWT', 'GitHub', 'Vercel', 'PythonAnywhere'],
    github: 'https://github.com/AndreDG88/troca-uma-ideia',
    vercel: 'https://troca-uma-ideia.vercel.app/login'
  },
    {
    id: 'eplay',
    title: 'EPLAY – Loja de Jogos',
    image: '/media/projects/e-play-_image-1.png',
    gallery: [
      '/media/projects/e-play-_image-1.png'
    ],
    category: 'dev',
    description: 'E-commerce de jogos feito com React, Redux e TypeScript.',
    techs: ['React', 'TypeScript', 'Redux', 'formik', 'eslint', 'prettier', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/m35_projeto-6_eplay',
    vercel: 'https://m35-projeto-6-eplay.vercel.app/'
  },
  {
    id: 'efood',
    title: 'EFOOD – Experiências Gastronômicas',
    image: '/media/projects/e-food_image-1.png',
    gallery: [
      '/media/projects/e-food_image-1.png'
    ],
    category: 'dev',
    description: 'E-commerce de pedidos de comida online feito com React, Redux e TypeScript.',
    techs: ['React', 'TypeScript', 'Redux', 'formik', 'eslint', 'prettier', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/m35-efood',
    vercel: 'https://m35-efood-theta.vercel.app/'
  },
  {
    id: 'sua-agenda',
    title: 'Sua Agenda de Contatos',
    image: '/media/projects/sua-agenda-de-contatos_image-1.png',
    gallery: [
      '/media/projects/sua-agenda-de-contatos_image-1.png'
    ],
    category: 'dev',
    description: 'Agenda de contatos online feita com React e TypeScript.',
    techs: ['React', 'TypeScript', 'Redux', 'eslint', 'prettier', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/m32_proj5_lista-de-contatos',
    vercel: 'https://m32-proj5-lista-de-contatos.vercel.app/'
  },
  {
    id: 'imc',
    title: 'Calculadora de IMC',
    image: '/media/projects/imc_image-1.png',
    gallery: [
      '/media/projects/imc_image-1.png'
    ],
    category: 'dev',
    description: 'Aplicativo responsivo de IMC feito com React e Vite.',
    techs: ['React', 'JavaScript', 'Vite', 'eslint', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/tarefa_m28_react',
    vercel: 'https://tarefa-m28-react.vercel.app/'
  },
  {
    id: 'github-finder',
    title: 'GitHub Finder',
    image: '/media/projects/github-finder_image-1.png',
    gallery: [
      '/media/projects/github-finder_image-1.png'
    ],
    category: 'dev',
    description: 'Aplicativo responsivo de localizador de usuários no GitHub. React, Vite e JavaScript',
    techs: ['React', 'JavaScript', 'Vite', 'eslint', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/github-finder_m28_react',
    vercel: 'https://github-finder-m28-react.vercel.app/'
  },
  {
    id: 'fullmetal',
    title: 'Landing Page – Fullmetal Alchemist',
    image: '/media/projects/fullmetal_image-1.png',
    gallery: [
      '/media/projects/fullmetal_image-1.png'
    ],
    category: 'dev',
    description: 'Landing page promocional de anime, feita com HTML5, GulpJS, SCSS e JavaScript.',
    techs: ['Gulp', 'SASS', 'JavaScript', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exercicio_m21_fullmetal_alchemist',
    vercel: 'https://exercicio-m21-fullmetal-alchemist.vercel.app/'
  },
  {
    id: 'disneyplus',
    title: 'Landing Page clone – Disney Plus',
    image: '/media/projects/disney-plus_image-1.png',
    gallery: [
      '/media/projects/disney-plus_image-1.png'
    ],
    category: 'dev',
    description: 'Clone da landing page do Disney Plus, feita com HTML5, GulpJS, SCSS e JavaScript.',
    techs: ['Gulp', 'SASS', 'JavaScript', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/projeto4-m21-clone-disneyplus',
    vercel: 'https://projeto4-m21-clone-disneyplus-hsl5.vercel.app/'
  },
  {
    id: 'nerd-news',
    title: 'Nerd Newas – Mail Marketing',
    image: '/media/projects/nerd-news_image-1.png',
    gallery: [
      '/media/projects/nerd-news_image-1.png'
    ],
    category: 'dev',
    description: 'Modelo de mail marketing com atualização de notícias, feita em HTML5.',
    techs: ['HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exercicio_m20_mail-blog',
    vercel: 'https://exercicio-m20-mail-blog.vercel.app/'
  },
  {
    id: 'pedra-papel-tesoura',
    title: 'Pedra, papel, tesoura, lagarto, Spock!',
    image: '/media/projects/pedra-papel-tesoura_image-1.png',
    gallery: [
      '/media/projects/pedra-papel-tesoura_image-1.png'
    ],
    category: 'dev',
    description: 'Tente ganhar da máquina nesta nova versão do jogo clássico. Feita em Grunt, JavaScript, LESS E HTML',
    techs: ['Grunt', 'LESS', 'Uglify', 'JavaScript', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exercicio_grunt',
    vercel: 'https://exercicio-grunt-andredg88.vercel.app/'
  },
  {
    id: 'pokemon-club',
    title: 'Pokémon Club',
    image: '/media/projects/pokemon-club_image-1.png',
    gallery: [
      '/media/projects/pokemon-club_image-1.png'
    ],
    category: 'dev',
    description: 'Pagina para informação e divulgação de um clube de TCG. Feita em BootStrap, CSS e HTML ',
    techs: ['BootStrap', 'CSS', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/projeto-3-bootstrap',
    vercel: 'https://projeto-3-bootstrap-seven.vercel.app/'
  },
  {
    id: 'baldurs-gate-3',
    title: 'Baldur`s Gate III',
    image: '/media/projects/baldurs-gate-3_image-1.png',
    gallery: [
      '/media/projects/baldurs-gate-3_image-1.png'
    ],
    category: 'dev',
    description: 'Landing page divulgativa para o jogo. Feita em BootStrap, CSS e HTML ',
    techs: ['JavaScript', 'BootStrap', 'CSS', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/tarefa_modulo_13_baldurs-gate-3',
    vercel: 'https://tarefa-modulo-13-baldurs-gate-3.vercel.app/'
  },
  {
    id: 'to-do-list',
    title: 'Sua To Do List',
    image: '/media/projects/to-do-list_image-1.png',
    gallery: [
      '/media/projects/to-do-list_image-1.png'
    ],
    category: 'dev',
    description: 'Lista de tarefas online. Feita com jquery, JavaScript, CSS e HTML ',
    techs: ['JavaScript', 'CSS', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/exerc-cio_jquery_list_ebac',
    vercel: 'https://exerc-cio-jquery-list-ebac.vercel.app/'
  },
  {
    id: 'calculadora-media',
    title: 'Calculadora de Médias',
    image: '/media/projects/calculadora-media_image-1.png',
    gallery: [
      '/media/projects/calculadora-media_image-1.png'
    ],
    category: 'dev',
    description: 'Pagina com calculadora de média escolar. Feita com JavaScript, CSS e HTML ',
    techs: ['JavaScript', 'CSS', 'HTML', 'GitHub', 'Vercel'],
    github: 'https://github.com/AndreDG88/ebac_projeto_calculadora_medias',
    vercel: 'https://ebac-projeto-calculadora-medias-phi.vercel.app/'
  },
  {
    id: 'one-piece',
    title: 'One Piece Luffy',
    image: '/media/projects/one-piece_image-1.png',
    gallery: [
    '/media/projects/one-piece_image-1.png',
    ],
    category: 'design',
    description: 'Personagem Luffy do anime One piece. Ilustração digital feita em Autodesk Sketchbook.',
    techs: ['Autodesk Sketchbook', 'XP-Pen', 'Caneta digital']
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    image: '/media/projects/demon-slayer_image-1.png',
    category: 'design',
    description: 'Protagonistas do anime Demon Slayer. Ilustração feita em Autodesk Sketchbook.',
  },
  {
    id: 'boku-no-hero',
    title: 'Boku no hero',
    image: '/media/projects/boku-no-hero_image-1.png',
    category: 'design',
    description: 'Personagem Deku do anime Boku no Hero Academia. Ilustração feita em Autodesk Sketchbook.',
  },
  {
    id: 'wotakoi',
    title: 'Wotakoi',
    image: '/media/projects/wotakoi_image-1.png',
    category: 'design',
    description: 'Protagonistas do anime Wotakoi. Ilustração feita em Autodesk Sketchbook.',
  },
]
