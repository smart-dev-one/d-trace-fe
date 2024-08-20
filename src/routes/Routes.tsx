import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import RegisterRoutes from './RegisterRoutes';
import UnprotectedRoutes from './UnprotectedRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" replace />} />
      {DashboardRoutes()}
      {RegisterRoutes()}
      {UnprotectedRoutes()}
    </Routes>
  );
}
