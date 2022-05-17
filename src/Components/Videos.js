import Video from './Video';

const Videos = () => {
  return (
    <>
      <h1>Some videos I like, IDK</h1>
      <div className='card'>
        <div className='videos'>
          <Video videoId='N0YHhxaElvo' />
          <Video videoId='a_0PSZ2S_yw' />
          <Video videoId='BepD5Kkl8Tg' />
          <Video
            videoId='IaKcaMjU_TM'
            timeStart='&start=201'
            timeEnd='&end=234'
          />
          <Video videoId='oNr6T8eOfg0' />
          <Video videoId='hTnedziWTvc' timeStart='&start=19' />
          <Video videoId='qKCKWNTSDhg' />
          <Video videoId='X21mJh6j9i4' />
        </div>
      </div>
    </>
  );
};

export default Videos;
