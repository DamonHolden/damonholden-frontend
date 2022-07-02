import deploymentDiagram from '../../images/deployment_diagram.png';
import { Card } from '../Card';
import { PageWrapper } from '../PageWrapper';

export const Home = () => {
  const eddieHearnLink =
    ' some positive words, from boxing promoter, Eddie Hearn.';

  return (
    <PageWrapper>
      <h1>Hi, I'm Damon, and on occasion, I like to build things.</h1>
      <Card contentDirection={`column`}>
        <h2>So what is this site for?</h2>

        <p>
          This website showcases various bits'n'bobs that I develop in my spare
          time.
        </p>
        <p>
          Links to different pages within this site can be found at the top of
          this page and my contact, github and whatnot can be found at the
          bottom of the page.
        </p>
        <p>
          This sites architecture is based on the{' '}
          <a
            className='text-link'
            href='https://www.mongodb.com/mern-stack'
            target={'_blank'}
            rel='noreferrer'
          >
            MERN
          </a>{' '}
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
          A representation of this deployment setup is laid-out at a high-level
          in the deployment diagram, below:
        </p>
        <img width={700} alt='deployment diagram' src={deploymentDiagram} />
        <p>
          You should always try and get something positive out of any
          experience, so if nothing else here are
          <a
            className='text-link'
            href='https://m.youtube.com/watch?t=1505&v=HXpj7mpm6hA&feature=youtu.be'
            target={'_blank'}
            rel='noreferrer'
          >
            {eddieHearnLink}
          </a>
        </p>
      </Card>
    </PageWrapper>
  );
};
