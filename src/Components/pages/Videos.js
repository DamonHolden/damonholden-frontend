import { Video } from '../Video';
import { Card } from '../Card';
import { animated, useSpring } from 'react-spring';

export const Videos = () => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className='page' style={springProps}>
      <h1>behold, the perfect duck</h1>
      <Card>
        <div className='videos'>
          <Video videoId='BepD5Kkl8Tg' />
        </div>
      </Card>
    </animated.div>
  );
};
