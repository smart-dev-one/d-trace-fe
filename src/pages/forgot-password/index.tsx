import logo_white from '@/assets/logo-smart-white.png';
import { Loader } from '@/components';
import CountdownTimer from '@/components/timer';
import { useGlobalStore } from '@/store';
import { Box, Button, Input, Text } from '@smart-dev-one/smart-ui';
import { Field, FieldProps, Form, Formik } from 'formik';
import { RotateCw } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const ForgotPassword = () => {
  const navigation = useNavigate();
  const [codeHasSend, setCodeHasSend] = useState(false);
  const { isLoading, setLoading } = useGlobalStore();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const initialValues = { email: '' };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  });

  const sendCode = () => {
    setCodeHasSend(true);
    setIsButtonDisabled(true);
  };

  const handleTimerComplete = () => {
    setIsButtonDisabled(false);
  };

  function goTo() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation('/new-password');
    }, 3000);
  }

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
      <Loader loading={isLoading} message="Enviando código..." />
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            sendCode();
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                justifyContent="space-between"
                alignItems="flex-start"
                columnGap="22px"
              >
                <Text fontWeight={600} mb={2}>
                  Email
                </Text>
                <Box
                  component="div"
                  display="flex"
                  flexDirection="row"
                  columnGap="12px"
                  width="100%"
                >
                  <Field name="email">
                    {({ field }: FieldProps) => (
                      <Input
                        {...field}
                        fullWidth
                        sx={{
                          '& input::placeholder': {
                            fontSize: 16,
                          },
                        }}
                        placeholder="ex: email@admin.com.br"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    )}
                  </Field>
                  {codeHasSend ? (
                    <Button
                      variantStyle="primary"
                      sx={{ height: '50px' }}
                      onClick={goTo}
                      disabled={isButtonDisabled}
                    >
                      <RotateCw color="#155E99" size={20} />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variantStyle="secondary"
                      sx={{ height: '50px' }}
                      disabled={!dirty || !isValid}
                    >
                      Enviar
                    </Button>
                  )}
                </Box>
              </Box>
            </Form>
          )}
        </Formik>

        <Box
          component="div"
          display="flex"
          marginTop="22px"
          flexDirection="column"
        >
          {!isButtonDisabled ? null : codeHasSend ? (
            <Text fontSize={14} fontWeight={500}>
              Reenviar código em{' '}
              <CountdownTimer
                durationInMinutes={0.1}
                onComplete={handleTimerComplete}
              />
            </Text>
          ) : (
            <Text fontSize={14} fontWeight={500}>
              O tempo para expiração do código é de 5 minutos
            </Text>
          )}
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
