
import { MediaContextType } from '@sharedTypes/DBTypes';
import Front from 'front_and_sidebar/Front';
import { useMediaContext } from 'mediastore/MediaContext';

const Home = () => {
  const { mediaItems } = useMediaContext() as MediaContextType;
  return (
    <div>
      {mediaItems && <Front mediaItem={mediaItems}/>}
    </div>
  );
};

export default Home;
