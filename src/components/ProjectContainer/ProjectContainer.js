import uniqid from 'uniqid';
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineLaunch } from 'react-icons/md';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target='_blank'
        rel='noreferrer'
      >
        <AiFillGithub size={20} />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target='_blank'
        rel='noreferrer'
      >
        <MdOutlineLaunch size={20} />
      </a>
    )}
  </div>
)

export default ProjectContainer
