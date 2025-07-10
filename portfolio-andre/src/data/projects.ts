export type Project = {
  id: string
  title: string
  image: string
  category: 'dev' | 'design'
  description: string
}

export const projects: Project[] = [
  {
    id: 'troca-uma-ideia',
    title: 'Troca uma Ideia!',
    image: '/media/projects/troca-uma-ideia_image-1.png',
    category: 'dev',
    description: 'Rede social de visual minimalista e responsivo. Feito com Python, React e TypeScript',
  },
    {
    id: 'eplay',
    title: 'EPLAY – Loja de Jogos',
    image: '/media/projects/e-play-_image-1.png',
    category: 'dev',
    description: 'E-commerce de jogos feito com React, Redux e TypeScript.',
  },
  {
    id: 'efood',
    title: 'EFOOD – Experiências Gastronômicas',
    image: '/media/projects/e-food_image-1.png',
    category: 'dev',
    description: 'E-commerce de pedidos de comida online feito com React, Redux e TypeScript.',
  },
  {
    id: 'sua-agenda',
    title: 'Sua Agenda de Contatos',
    image: '/media/projects/sua-agenda-de-contatos_image-1.png',
    category: 'dev',
    description: 'Agenda de contatos online feita com React e TypeScript.',
  },
  {
    id: 'imc',
    title: 'Calculadora de IMC',
    image: '/media/projects/imc_image-1.png',
    category: 'dev',
    description: 'Aplicativo responsivo de IMC feito com React e VueJS.',
  },
  {
    id: 'github-finder',
    title: 'GitHub Finder',
    image: '/media/projects/github-finder_image-1.png',
    category: 'dev',
    description: 'Aplicativo responsivo de localizador de usuários no GitHub. React, Vite e JavaScript',
  },
  {
    id: 'fullmetal',
    title: 'Landing Page – Fullmetal Alchemist',
    image: '/media/projects/fullmetal_image-1.png',
    category: 'dev',
    description: 'Landing page promocional de anime, feita com HTML5, GulpJS, SCSS e JavaScript.',
  },
  {
    id: 'disneyplus',
    title: 'Landing Page clone – Disney Plus',
    image: '/media/projects/disney-plus_image-1.png',
    category: 'dev',
    description: 'Clone da landing page do Disney Plus, feita com HTML5, GulpJS, SCSS e JavaScript.',
  },
  {
    id: 'nerd-news',
    title: 'Nerd Newas – Mail Marketing',
    image: '/media/projects/nerd-news_image-1.png',
    category: 'dev',
    description: 'Modelo de mail marketing com atualização de notícias, feita em HTML5.',
  },
  {
    id: 'pedra-papel-tesoura',
    title: 'Pedra, papel, tesoura, lagarto, Spock!',
    image: '/media/projects/pedra-papel-tesoura_image-1.png',
    category: 'dev',
    description: 'Tente ganhar da máquina nesta nova versão do jogo clássico. Feita em Grunt, JavaScript, LESS E HTML',
  },
  {
    id: 'pokemon-club',
    title: 'Pokémon Club',
    image: '/media/projects/pokemon-club_image-1.png',
    category: 'dev',
    description: 'Pagina para informação e divulgação de um clube de TCG. Feita em BootStrap, CSS e HTML ',
  },
  {
    id: 'baldurs-gate-3',
    title: 'Baldur`s Gate III',
    image: '/media/projects/baldurs-gate-3_image-1.png',
    category: 'dev',
    description: 'Landing page divulgativa para o jogo. Feita em BootStrap, CSS e HTML ',
  },
  {
    id: 'to-do-list',
    title: 'Sua To Do List',
    image: '/media/projects/to-do-list_image-1.png',
    category: 'dev',
    description: 'Lista de tarefas online. Feita com jquery, JavaScript, CSS e HTML ',
  },
  {
    id: 'calculadora-media',
    title: 'Calculadora de Médias',
    image: '/media/projects/calculadora-media_image-1.png',
    category: 'dev',
    description: 'Pagina com calculadora de média escolar. Feita com JavaScript, CSS e HTML ',
  },
  {
    id: 'one-piece',
    title: 'One Piece Luffy',
    image: '/media/projects/one-piece_image-1.png',
    category: 'design',
    description: 'Personagem Luffy do anime One piece. Ilustração feita em Autodesk Sketchbook.',
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
