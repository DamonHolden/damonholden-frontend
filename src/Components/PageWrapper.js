import { animated, useSpring } from 'react-spring';

export const PageWrapper = (props) => {
  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div className='page' style={springProps}>
      {props.children}
    </animated.div>
  );
};
