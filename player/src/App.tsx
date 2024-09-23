// for testing purposes only
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import {MediaItem} from '@sharedTypes/DBTypes';

const testItem: MediaItem = {
  _id: "1",
  title: "Test video",
  description: "This is a test video",
  type: "video" as const,
  url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  tags: ["test", "video"],
  metadata: {
    duration: 100,
    resolution: "1080p",
    framerate: 60,
  },
  uploadedAt: new Date(),
  comments: [],
  upvotes: [],
  downvotes: [],
  owner: {
    user_id: 1,
    username: "testuser",
  },
  screenshots: [],
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoPlayer mediaItem={testItem} />} />
      </Routes>
    </Router>
  );
}

export default App;
