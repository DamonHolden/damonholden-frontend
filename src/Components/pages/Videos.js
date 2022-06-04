import { Video } from '../Video';
import { Card } from '../Card';
import { PageWrapper } from '../PageWrapper';

export const Videos = () => {
  return (
    <PageWrapper>
      <h1>behold, the perfect duck</h1>
      <Card>
        <div className='videos'>
          <Video videoId='BepD5Kkl8Tg' />
        </div>
      </Card>
    </PageWrapper>
  );
};
