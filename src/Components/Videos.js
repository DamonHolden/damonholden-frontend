import Video from './Video';
import { Card } from './Card';

const Videos = () => {
  return (
    <>
      <h1>behold, the perfect duck</h1>
      <Card>
        <div className='videos'>
          <Video videoId='BepD5Kkl8Tg' />
        </div>
      </Card>
    </>
  );
};

export default Videos;
