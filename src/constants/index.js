/* eslint-disable no-sparse-arrays */
import {
  frontend,
  backend,
  ds,
  linux,
med3pa,
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
  software,
  kotlin,
  nextjs,
  conda, 
  electron,
  go,
  medomics,
  pytorch,
  flask,
  flutter,
  docker,
  arduino,
  soai,
  esi,
  nbo,

  sherbrooke,
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
    title: 'Data Science and Machine learning Enthusiast',
    icon: ds,
  },
  {
    title: 'Software Engineer',
    icon: software,
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
    name: 'Conda',
    icon: conda,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Electron',
    icon: electron,
  },
  {
    name: 'Go',
    icon: go,
  },
  {
    name: 'Pytorch',
    icon: pytorch,
  },
  {
    name: 'Flask',
    icon: flask,
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
    title: 'Research Intern',
    company_name: 'Sherbrooke University',
    icon: sherbrooke,
    iconBg: '#333333',
    date: 'Sep 2023 - Sep 2024',
  },
  {
    title: 'Data science Intern',
    company_name: 'NetBeOpen',
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
    name: 'MED3pa: PyPI Package',
    description: 'A package for evaluating model stability and performance in the face of covariate shifts, uncertainty, and problematic data profiles.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'sickit-learn',
        color: 'green-text-gradient',
      }
    ],
    image: med3pa,
    repo: 'https://github.com/MEDomics-UdeS/MED3pa',
    demo: 'https://pypi.org/project/MED3pa/',
  },
  {
    id: 'project-5',
    name: 'MED3pa In MEDomicsLab',
    description: 'A submodule in MEDomicsLab Framework for evaluating model stability and performance in the face of covariate shifts, uncertainty, and problematic data profiles.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'go',
        color: 'green-text-gradient',
      },
      {
        name: 'reactjs',
        color: 'pink-text-gradient',
      },
    ],
    image: medomics,
    repo: 'https://github.com/MEDomics-UdeS/MEDomicsLab/tree/dev_med3pa',
    demo: 'https://github.com/MEDomics-UdeS/MEDomicsLab/releases',
  },
  {
    id: 'project-6',
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
