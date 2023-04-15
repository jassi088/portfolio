const header = {
  homepage: '',
  title: 'JS.',
}

const about = {
  name: 'Jaspreet Singh',
  role: 'Full Stack Developer',
  description:
    'The world of full-stack development is large, and many new and evolving technologies continually push the limits of what a full-stack developer can create. Staying on top of cutting-edge technology and techniques in the full-stack development field is one of the many exciting aspects of working in this role.',
  social: {
    linkedin: 'https://linkedin.com/in/jaspreet-singh-700cs',
    github: 'https://github.com/jassi088',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ECOM',
    description:
      'An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.',
    stack: ['React.js', 'Node.js', 'Express.js', 'Mongodb'],
    sourceCode: 'https://github.com/jassi088/ecom_frontend',
    livePreview: 'https://ecom-shopp.netlify.app',
  },
  {
    name: 'DUMMY',
    description:
      'Work in progress...',
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'DUMMY',
    description:
      'Work in progress...',
    stack: [],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  'Figma',
  'Canva',
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Redux',
  'TailwindCSS',
  'Material UI',
  'Node.js',
  'Express.js',
  'Mongodb',
  'Mongoose',
  'Git',
  'GitHub',
  "Rest API",
  'Postman'
]

const contact = {
  email: 'sandhujassi088@gmail.com',
}

export { header, about, projects, skills, contact };
