import { Route } from 'react-router-dom';
import { LayoutRegister } from '@/layout';
import {
  FirstStepRegisterInfo,
  SecondStepRegisterMachine,
  ThirdyStepRegisterModule,
  FinishStepRegisterModule,
} from '@/pages';

export default function RegisterRoutes() {
  return (
    <Route element={<LayoutRegister />}>
      <Route path="/modules/register/1" element={<FirstStepRegisterInfo />} />
      <Route
        path="/modules/register/2"
        element={<SecondStepRegisterMachine />}
      />
      <Route
        path="/modules/register/3"
        element={<ThirdyStepRegisterModule />}
      />
      <Route
        path="/modules/register/4"
        element={<FinishStepRegisterModule />}
      />
    </Route>
  );
}
