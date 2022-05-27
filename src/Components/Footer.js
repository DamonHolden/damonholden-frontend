import gitHubMark from '../images/GitHub-Mark-Light-64px.png';

export const Footer = () => {
  const author = 'Built (for better or for worse) by Damon Holden';
  const email = 'D.holden@uos.ac.uk';

  return (
    <footer>
      <p className='author'>{author}</p>
      <div className='links'>
        <a className='footer-link' href='mailto:d.holden@uos.ac.uk'>
          {email}
        </a>
        <a
          href='https://github.com/DamonHolden/uos-dts-calculator'
          target={'_blank'}
          rel='noreferrer'
        >
          <img className='github-link' alt='GitHub Repo' src={gitHubMark} />
        </a>
        <a href='https://www.netlify.com'>
          <img
            className='netlify-link'
            alt='Netlify link'
            src='https://www.netlify.com/img/global/badges/netlify-light.svg'
          />
        </a>
      </div>
    </footer>
  );
};
