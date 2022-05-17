import { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeContext';

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
      <h1>Welcome to my site</h1>
      <div className='card' style={cardStyles}>
        <h2>Just a bit of info on what this all is:</h2>
        <p>
          This website showcases various bits and bobs that I develop in my
          spare time.
        </p>
        <p>
          Links to all the pages can be found at the top of this page and my
          contact email and GitHub repository links can be found in the footer.
        </p>
        <p>
          If you found gained nothing useful from any of these projects, here
          are
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
