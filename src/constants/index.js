import {
  frontend,
  backend,
  ds,
  linux,
  prototyping,
  javascript,
  sql,
  html,
  java,
  tensorflow,
  r,
  mongodb,
  css,
  reactjs,
  oracle,
  nodejs,
  git,
  python,
  php,
  figma,
  cplus,
  kotlin,
  flutter,
  docker,
  komikult,
  leaderboard,
  math,
  movie,
  arduino,
  nyeusi,
  soai,
  esi,
  nbo,
  coursera,
  IBM,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Datascience Enthusiast',
    icon: ds,
  },
  {
    title: 'Software Arcihtectures',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Arduino',
    icon: arduino,
  },
  {
    name: 'Kotlin',
    icon: kotlin,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'JAVA',
    icon: java,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'PHP',
    icon: php,
  },
  {
    name: 'sqlserver',
    icon: sql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'oracle',
    icon: oracle,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
  {
    name: 'R',
    icon: r,
  },
  {
    name: 'C++',
    icon: cplus,
  },
  ,
  {
    name: 'mongodb',
    icon: mongodb,
  },
];

const experiences = [
  {
    title: 'Data science Intern',
    company_name: 'Net Be Open',
    icon: nbo,
    iconBg: '#333333',
    date: 'Sep 2022 - Oct 2022',
  },
  {
    title: 'Active member',
    company_name: 'School of AI',
    icon: soai,
    iconBg: '#333333',
    date: 'Sep 2021 - Present',
  },
  {
    title: 'Software Engineer',
    company_name: 'Higher National School of Computer Science',
    icon: esi,
    iconBg: '#333333',
    date: 'Sep 2019 - Jun 2024',
  },
  {
    title: 'Deep Learning certificant',
    company_name: 'Coursera',
    icon: coursera,
    iconBg: '#333333',
    date: '2022 - Present',
  },
  {
    title: 'Deep Learning with Pytorch certificant',
    company_name: 'IBM',
    icon: IBM,
    iconBg: '#333333',
    date: '2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
