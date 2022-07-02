import { Card } from '../Card';
import { PageWrapper } from '../PageWrapper';
import ehtmlScreenshot from '../../images/project-screenshots/ehtml-screenshot.png';

export const Projects = () => {
  return (
    <PageWrapper>
      <h1>some projects i've done</h1>
      <Card contentDirection={'column'}>
        <h2>Every HTML Element</h2>
        <div className='content-row'>
          <img
            width={400}
            className='project-screenshot'
            src={ehtmlScreenshot}
            alt='project screenshot'
          />
          <div>
            <p>
              This project is a static website that will eventually contain all
              valid HTML element's definitions and use-cases. This project
              exists for me to improve my knowledge and application of HTML
              markup. Current progress on the project has improved my
              understanding of semantic and accessible markup, as well as
              knowing how and when to use each individual element.
            </p>
            <p>
              <a
                className='text-link'
                href='https://damonh.uosweb.co.uk/every-html-element/'
                target='_blank'
                rel='noreferrer'
              >
                Follow this link to go to the Live deployment of Every HTML
                Element (opens in new tab)
              </a>
            </p>
          </div>
        </div>
      </Card>
    </PageWrapper>
  );
};
