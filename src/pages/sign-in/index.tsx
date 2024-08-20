import { Box, Button, Input, Text } from '@smart-dev-one/smart-ui';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import dTrace from '@/assets/logo-d-trace.png';
import logo from '@/assets/logo-smart-dark.png';
import notebook from '@/assets/notebook.png';
import { Loader } from '@/components';
import { useAuthStore, useGlobalStore } from '@/store';

export const SignIn = () => {
  const { isLoading, setLoading } = useGlobalStore();
  const { setAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
        navigate('/dashboard');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    if (
      values.email === 'admin@groupwork.com.br' &&
      values.password === 'admin'
    ) {
      setLoading(true);

      const authData = {
        token: 'sample-token',
        userId: 'admin123',
        email: values.email,
        roles: ['admin'],
        expiresAt: Date.now() + 3600 * 1000,
      };

      localStorage.setItem('authToken', authData.token);
      localStorage.setItem('userId', authData.userId);
      localStorage.setItem('email', authData.email);
      localStorage.setItem('roles', JSON.stringify(authData.roles));
      localStorage.setItem('expiresAt', authData.expiresAt.toString());

      setAuth(authData);
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <>
      <Loader loading={isLoading} message="Verificando credênciais..." />

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'stretch',
                flexDirection: 'row',
                width: '100%',
                margin: '0 auto',
                maxWidth: '1480px',
                height: '100vh',
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  rowGap: '42px',
                  px: '40px',
                }}
              >
                <img
                  style={{ maxWidth: '80%', margin: '0 auto' }}
                  src={logo}
                  alt="Logo smart"
                />

                <Box
                  component="div"
                  sx={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}
                  display="flex"
                  flexDirection="column"
                  rowGap="12px"
                >
                  <Text fontWeight={600}>Email</Text>
                  <Field
                    name="email"
                    as={Input}
                    fullWidth
                    sx={{
                      '& input::placeholder': {
                        fontSize: 16,
                      },
                    }}
                    placeholder="Informe seu e-mail"
                  />
                  <ErrorMessage name="email" component="div" />
                </Box>

                <Box
                  sx={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}
                  component="div"
                  display="flex"
                  flexDirection="column"
                  rowGap="12px"
                >
                  <Text fontWeight={600}>Senha</Text>
                  <Field
                    name="password"
                    as={Input}
                    fullWidth
                    sx={{
                      '& input::placeholder': {
                        fontSize: 16,
                      },
                    }}
                    placeholder="Informe sua senha"
                    type="password"
                  />
                  <ErrorMessage name="password" component="div" />
                </Box>

                <Box
                  sx={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Link to="/forgot-password">
                    <Text
                      color="ActiveBorder"
                      sx={{ textDecoration: 'underline' }}
                      fontWeight={500}
                    >
                      Recuperar senha
                    </Text>
                  </Link>
                  <Button
                    variantStyle="secondary"
                    size="large"
                    type="submit"
                    sx={{ width: '20%' }}
                    disabled={isSubmitting}
                  >
                    Entrar
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  marginTop: '40px',
                  marginBottom: '40px',
                  marginRight: '40px',
                  borderRadius: '42px',
                  background:
                    'linear-gradient(180deg, #155E99 0%, rgba(0,37,68,1) 100%);',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    px: '40px',
                  }}
                >
                  <img
                    style={{ width: '80%', margin: '0 auto' }}
                    src={notebook}
                    alt="Logo smart"
                  />
                  <Box
                    sx={{
                      width: '80%',
                      margin: '0 auto',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      rowGap: '12px',
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        mt: '61px',
                        mb: '20px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <img
                        style={{ width: '25%' }}
                        src={dTrace}
                        alt="D-trace"
                      />
                    </Box>

                    <Text
                      maxWidth="100%"
                      variant="subtitle1"
                      fontWeight={500}
                      sx={{ color: 'white' }}
                    >
                      Release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
