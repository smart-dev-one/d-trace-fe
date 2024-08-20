import { Route } from 'react-router-dom';
import { LayoutDashboard } from '@/layout';
import { Home, ListModule } from '@/pages';

export default function DashboardRoutes() {
  return (
    <Route element={<LayoutDashboard />}>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/modules/list" element={<ListModule />} />
    </Route>
  );
}
