import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Game from '../pages/Game';
import Resource from '../pages/Resource';
import TimeMarketing from '../pages/TimeMarketing';
import Maintenance from '../pages/Maintenance';
import Questions from '../pages/Questions';
import GameOver from '../pages/GameOver';
import GameOverBad from '../pages/GameOverBad';
import PageNotFound from '../pages/Page404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/game" element={<Game />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/marketing" element={<TimeMarketing />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/game-over" element={<GameOver />} />
      <Route path="/game-over-bad" element={<GameOverBad />} />

      {/* This route should be last, catching all unmatched routes */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;