import { Box, Button, Input, Text } from '@smart-dev-one/smart-ui';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_white from '@/assets/logo-smart-white.png';
import { useGlobalStore } from '@/store';
import { Loader } from '@/components';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { theme } from '@/utils';

// Validação de esquema com Yup
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'As senhas devem coincidir')
    .required('Confirmação de senha é obrigatória'),
});

export const NewPassword = () => {
  const navigation = useNavigate();
  const { isLoading, setLoading } = useGlobalStore();
  const [message, setMessage] = useState('');
  const [passwordSended, setPasswordSended] = useState<boolean>(false);

  const goTo = () => {
    setMessage('Entrando...');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation('/dashboard');
    }, 3000);
  };

  const handleSubmit = () => {
    setMessage('Só um momento...');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPasswordSended(true);
      toast.success('Senha alterada com sucesso!');
    }, 5000);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignContent: 'stretch',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            backgroundColor: theme.palette.success['main'],
            fontWeight: 600,
            fontSize: 16,
          },
        }}
      />
      <Loader loading={isLoading} message={message} />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          px: '40px',
        }}
      >
        {passwordSended ? (
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            rowGap="60px"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="30px" fontWeight={600}>
              Senha alterada com sucesso!
            </Text>

            <Button
              sx={{
                textTransform: 'initial',
              }}
              onClick={goTo}
              variantStyle="secondary"
              startIcon={<Check color="#5f5f5f" size={20} />}
            >
              Ir para dashboard!
            </Button>
          </Box>
        ) : (
          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Box
                  component="div"
                  display="flex"
                  flexDirection="column"
                  rowGap="12px"
                  marginBottom="60px"
                >
                  <Text fontSize="30px" fontWeight={600}>
                    Recuperar senha
                  </Text>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  width="100%"
                  alignItems="flex-end"
                  rowGap="42px"
                >
                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Senha</Text>
                    <Field name="password">
                      {({ field }: FieldProps) => (
                        <Input
                          {...field}
                          fullWidth
                          sx={{
                            '& input::placeholder': {
                              fontSize: 16,
                            },
                          }}
                          placeholder="Digite sua nova senha"
                          type="password"
                        />
                      )}
                    </Field>
                    {errors.password && touched.password ? (
                      <Text color="red">{errors.password}</Text>
                    ) : null}
                  </Box>

                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Confirme sua nova senha</Text>
                    <Field name="confirmPassword">
                      {({ field }: FieldProps) => (
                        <Input
                          {...field}
                          fullWidth
                          sx={{
                            '& input::placeholder': {
                              fontSize: 16,
                            },
                          }}
                          placeholder="Confirme sua nova senha"
                          type="password"
                        />
                      )}
                    </Field>
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <Text color="red">{errors.confirmPassword}</Text>
                    ) : null}
                  </Box>

                  <Button
                    type="submit"
                    variantStyle="secondary"
                    startIcon={<Check size={20} color="#5F5F5F" />}
                  >
                    Confirmar
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        )}
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
        <img
          width={384}
          height={143}
          style={{ margin: '0   auto' }}
          src={logo_white}
          alt="Logo smart White"
        />
      </Box>
    </Box>
  );
};
