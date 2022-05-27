export const Video = (props) => {
  const src = 'https://www.youtube-nocookie.com/embed/' + props.videoId;
  return (
    <div className='video-container'>
      <div className='video'>
        <iframe
          width='560'
          height='315'
          src={src}
          title={props.videoId}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
