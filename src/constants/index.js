/* eslint-disable no-sparse-arrays */
import {
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
  trans,
  mongodb,
  css,
  gcp,
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
  EFSET,
  nbo,
  me1,
  me2,
  me3,
  me4,
  sherbrooke,
  dataImpact,
  KLMV,
  saclay,
  coursera,
  PA,
  IE,
  trav,
  Innov_3D,
  project,
  co2,
  game,
  typescript,
  postgres,
  jira,
  c, unity,
  rasp,
  selenium, langchain,
  jenkins,
  bitbucket,
  githubactions,
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
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'edu',
    title: 'Education',
  },
  {
    id: 'cert',
    title: 'Certifications',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Industrial Digitalization',
    icon: trans,
  },
  {
    title: 'Data Engineering',
    icon: backend,
  },
  {
    title: 'Data Science and Machine learning Enthusiasm',
    icon: ds,
  },
  {
    title: 'Software Engineering',
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
  {    name: 'Electron JS',
    icon: electron,
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
    name: 'TypeScript',
    icon: typescript,
  },
  {
  name : 'PostgreSQL',
  icon : postgres,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'Unity',
    icon: unity,
  },
  {
    name: 'Raspberry Pi',
    icon: rasp,
  },
  {    name: 'Selenium',
    icon: selenium,
  },
  {    name: 'LangChain',
    icon: langchain,
  },
  {
    name: 'Jenkins',
    icon: jenkins,
  },
  {
    name: 'Bitbucket',
    icon: bitbucket,
  },
  {
    name: 'GitHub Actions',
    icon: githubactions,
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
    name: 'oracle db',
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
  {
    name:'Google Cloud Platform',
    icon: gcp,
  },
  {    name: 'Jira Atlassian',
    icon: jira,
  }
];

const experiences = [
   {
    title: 'Data Engineer',
    company_name: 'Data Impact By NIQ',
    icon: dataImpact,
    iconBg: '#333333',
    date: 'Jan 2025 - Aug 2025',
    link: 'https://nielseniq.com/global/fr/solutions/analytics-and-activation/data-impact-by-nielseniq/'
  
  },
  {
    title: 'Recruiting Assistant',
    company_name: 'KLMV Group',
    icon: KLMV,
    iconBg: '#333333',
    date: 'Oct 2024 - June 2025',
    link: 'https://www.linkedin.com/company/klmv-group/'
  },
  {
    title: 'Research Intern',
    company_name: 'Sherbrooke University',
    icon: sherbrooke,
    iconBg: '#333333',
    date: 'Sep 2023 - Sep 2024',
    link: 'https://www.usherbrooke.ca/'
  },
  {
    title: 'Active member',
    company_name: 'School of AI',
    icon: soai,
    iconBg: '#333333',
    date: 'Sep 2021 - Sep 2024',
    link: 'https://www.linkedin.com/company/school-of-ai-algiers/posts/?feedView=all'
  },
  {
    title: 'Data science Intern',
    company_name: 'NetBeOpen',
    icon: nbo,
    iconBg: '#333333',
    date: 'Sep 2022 - Oct 2022',
    link: 'https://netbeopen.com/'
  }

];
const education = [
  {
    title: "Master's in Digital Transformation for Industry",
    company_name: 'Paris Saclay University',
    icon: saclay,
    iconBg: '#333333',
    date: 'Sep 2024 - Jun 2026',
    link: 'https://www.universite-paris-saclay.fr/formation/master/ingenierie-des-systemes-complexes/m2-transformation-numerique-pour-lindustrie',
  },
  {
    title: "Master's in Computer Science",
    company_name: 'Higher National School of Computer Science Of Algiers',
    icon: esi,
    iconBg: '#333333',
    date: 'Sep 2019 - Jun 2024',
    link: 'https://www.esi.dz/',
  },
  {
    title: "Engineering Degree in Computer Science",
    company_name: 'Higher National School of Computer Science Of Algiers',
    icon: esi,
    iconBg: '#333333',
    date: 'Sep 2019 - Jun 2024',
    link: 'https://www.esi.dz/',
  }
];

const certification = [
    {
    title: 'C2 Proficient EF SET English Certificate ',
    company_name: 'EF SET',
    icon: EFSET,
    iconBg: '#333333',
    date: 'March 2025',
    link: 'https://cert.efset.org/en/E1EJcd'
  },
    {
    title: 'Deep Learning Certificates',
    company_name: 'Coursera',
    icon: coursera,
    iconBg: '#333333',
    date: 'Aug 2022 - Aug 2023',
    link: 'https://www.coursera.org/user/88df3c90459829aca58d19641ea23f03'
  }
]
const projects = [
   {
  id: 'project-1',
  name: 'Innov3D — Distributed Web Application',
  description: 'A full-stack web application (3-Tier Architecture) for managing 3D printing innovation projects. Features secure authentication, data ingestion from external APIs and partner platforms, real-time dashboards, and tools to upload, view, analyze, and manage project data.',
  tags: [
    {
      name: 'PostgreSQL',
      color: 'red-text-gradient',
    },
    {
      name: 'Flask',
      color: 'blue-text-gradient',
    },
    {
      name: 'React',
      color: 'pink-text-gradient',
    },
    {
      name: '3-Tier Architecture',
      color: 'green-text-gradient',
    },
  ],
  image: Innov_3D,
  repo: 'https://github.com/LudmilaAmriou/projet_APP_REP',
  demo: 'https://projet-app-577g89u6g-ludmilaamrious-projects.vercel.app/',
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
  id: 'project-7',
  name: 'Sustainable Python – Eco-Friendly Exercises',
  description: 'Educational Python project focused on writing clean, optimized, and energy-efficient code. Includes beginner, intermediate, and advanced exercises with performance tracking and carbon footprint measurement using CodeCarbon.',
  tags: [
    {
      name: 'Python',
      color: 'blue-text-gradient',
    },
    {
      name: 'Eco-Coding',
      color: 'green-text-gradient',
    },
    {
      name: 'Algorithms',
      color: 'pink-text-gradient',
    },
    {
      name: 'CodeCarbon',
      color: 'yellow-text-gradient',
    },
  ],
  image: co2, // replace with your actual image
  repo: 'https://github.com/LudmilaAmriou/Developpement-Durable',
  demo: 'https://github.com/LudmilaAmriou/Developpement-Durable/blob/master/README.md',
},
{
  id: 'project-8',
  name: 'Interactive Mini Game',
  description: 'A simple and fun web-based game built with HTML, CSS, and JavaScript, providing an engaging interactive experience for users.',
  tags: [
    {
      name: 'HTML',
      color: 'blue-text-gradient',
    },
    {
      name: 'JavaScript',
      color: 'green-text-gradient',
    },
    {
      name: 'CSS',
      color: 'pink-text-gradient',
    },
  ],
  image: game, // replace with your actual image
  repo: 'https://github.com/LudmilaAmriou/simple_games',
  demo: 'https://ludmilaamriou.github.io/simple_games/',
}
,
  {
    id: 'project-9',
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
const me = [
  {
    id: 'image1',
    name: 'The Achiever',
    description: 'The moment I became a software engineering graduate. For me, it\'s not just about the degree, but the journey of persistence, passion, and endless learning.',
    tags: ['Growth', 'Learning', 'Accomplishment'],
    image: me1
  },
  {
    id: 'image2',
    name: 'The Adventurer',
    description: 'I find peace and inspiration in nature. Whether it\'s hiking or simply soaking in the scenery, it’s where I reflect, recharge, and dream of new possibilities.',
    tags: ['Adventure', 'Nature', 'Exploration'],
    image: me2
  },
  {
    id: 'image3',
    name: 'The Problem Solver',
    description: 'I love solving puzzles—whether in code or life. Every problem is a challenge waiting for the right solution, and I thrive on figuring out the pieces.',
    tags: ['Logic', 'Creativity', 'Problem-Solving'],
    image: me3
  },
  {
    id: 'image4',
    name: 'The Dreamer',
    description: 'I’m always looking toward the horizon, envisioning new possibilities. My dreams push me forward, whether it’s in tech, personal growth, or exploration.',
    tags: ['Dreams', 'Ambition', 'Vision'],
    image: me4
  }
];


export { services, technologies, experiences, education, certification, projects, me };
