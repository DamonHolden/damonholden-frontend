import { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';
import deploymentDiagram from '../images/deployment_diagram.png';

const Home = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  const cardStyles = {
    backgroundColor: darkTheme ? 'rgb(48, 48, 48)' : '',
    color: darkTheme ? 'white' : '',
  };
  const eddieHearnLink =
    ' some positive words from boxing promoter Eddie Hearn.';

  return (
    <>
      <h1>hello, one and all</h1>
      <div className='card' style={cardStyles}>
        <h2>So what is this site for?</h2>
        <p>
          This website showcases various bits and bobs that I (Damon Holden)
          develop in my spare time.
        </p>
        <p>
          Links to all the various pages on this site can be found at the top of
          this page and my contact email and GitHub repository links can be
          found at the bottom of the page.
        </p>
        <p>
          This sites architecture is based on the{' '}
          <a
            className='eddie-hearn-link'
            href='https://www.mongodb.com/mern-stack'
            target={'_blank'}
            rel='noreferrer'
          >
            MERN
          </a>
          stack, however the project is only really a React application with a
          very basic Express Node.js application setup as a template backend
          which will eventually link to a cloud-based mongoDB database. The
          React frontend is hosted by Netlify, and the Express Node.js backend
          server is hosted by Heroku. Currently, mongoDB is deployed through
          their Atlas service on an AWS cloud cluster, the functionality of
          which is just the link between the database and the backend with no
          actual practical functionality just yet.
        </p>
        <p>
          a representation of this deployment setup is laid-out at a high-level
          in the deployment diagram, below:
        </p>
        <img alt='deployment diagram' src={deploymentDiagram} />
        <p>
          If you found nothing useful from any of the projects on this site,
          here are
          <a
            className='eddie-hearn-link'
            href='https://m.youtube.com/watch?t=1505&v=HXpj7mpm6hA&feature=youtu.be'
            target={'_blank'}
            rel='noreferrer'
          >
            {eddieHearnLink}
          </a>
        </p>
      </div>
    </>
  );
};

export default Home;
