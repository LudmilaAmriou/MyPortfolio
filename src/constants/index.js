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
  arduino,
  soai,
  esi,
  nbo,
  coursera,
  IBM,
  PA,
  IE,
  trav,
  project,
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
    name: 'Graph: Articulation Point',
    description: 'A graph Articulation point identifier from a text file or randomly',
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
    image: PA,
    repo: 'https://github.com/LudmilaAmriou/Articulation_Point',
    demo: 'https://ludmilaamriou.github.io/Articulation_Point/PA/',
  },
  {
    id: 'project-2',
    name: 'Touristic website',
    description:
      'A static website for touristic guides!',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Java Script',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: IE,
    repo: 'https://github.com/LudmilaAmriou/InterfaceEmploye/',
    demo: 'https://onecsproject.onrender.com/',
  },
  {
    id: 'project-3',
    name: 'TrAv⟨€⟩l',
    description: 'This is a two simple pages containing a LogIn and a SignUp logic and some beautiful cards showing beautiful views',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'html',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: trav,
    repo: 'https://github.com/LudmilaAmriou/TravelWebsite',
    demo: 'https://ludmilaamriou.github.io/TravelWebsite/LogIn/logIn',
  },
  {
    id: 'project-4',
    name: 'Other projects',
    description: `In the following section, you will find more projects and their GitHub link that were developped but not deployed yet`,
    tags: [
      {
        name: 'Data Science',
        color: 'blue-text-gradient',
      },
      {
        name: 'Kotlin',
        color: 'green-text-gradient',
      },
      {
        name: 'Flutter',
        color: 'pink-text-gradient',
      },
    ],
    image: project,
    repo: 'https://github.com/LudmilaAmriou?tab=repositories',
    demo: 'https://drive.google.com/file/d/1qbeKp63TH9HkTGZqJ9vWNao2yV6ynUUC/view?usp=sharing',
  },
];

export { services, technologies, experiences, projects };
