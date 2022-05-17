const Video = (props) => {
  const src =
    'https://www.youtube.com/embed/' +
    props.videoId +
    '?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&fs=0' +
    props.timeStart +
    props.timeEnd;
  return (
    <div className='video-container'>
      <div className='video'>
        <iframe
          width='560'
          height='315'
          src={src}
          title={props.videoId}
          frameborder='0'
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
