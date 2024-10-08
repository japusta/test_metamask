import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import {ParticipantPage} from '../pages/participante/ParticipantPage';

export const AppRoutes = () => (
  <Router basename="/test_metamask">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/participant/:id" element={<ParticipantPage />} />
    </Routes>
  </Router>
);