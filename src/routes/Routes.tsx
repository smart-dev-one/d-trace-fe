import { Routes } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';
import RegisterRoutes from './RegisterRoutes';
import UnprotectedRoutes from './UnprotectedRoutes';

export default function AppRoutes() {
  return (
    <Routes>
      {DashboardRoutes()}
      {RegisterRoutes()}
      {UnprotectedRoutes()}
    </Routes>
  );
}
