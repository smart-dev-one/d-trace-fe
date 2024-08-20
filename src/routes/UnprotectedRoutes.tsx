import { Route } from 'react-router-dom';
import { SignIn, SignUp, ForgotPassword, NewPassword } from '@/pages';

export default function UnprotectedRoutes() {
  return (
    <>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/new-password" element={<NewPassword />} />
    </>
  );
}
