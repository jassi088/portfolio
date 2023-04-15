import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { about } from '../../portfolio';
import './About.css';

const About = () => {
  const { name, role, description, social } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub size={26} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin size={26} />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
