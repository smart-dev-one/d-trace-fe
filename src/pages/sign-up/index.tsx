import { Box, Button, Input, Stepper, Text } from '@smart-dev-one/smart-ui';
import { ArrowLeft, ArrowRight, Check, RotateCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import dTrace from '@/assets/logo-d-trace.png';
import notebook from '@/assets/notebook.png';
import { useState } from 'react';

export const SignUp = () => {
  const navigation = useNavigate();

  const [showStep, setShowStep] = useState<number>(0);

  function goTo() {
    navigation('/');
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
        {showStep === 3 ? (
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            rowGap="60px"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="30px"
              fontWeight={600}
            >
              Cadastro realizado com sucesso!
            </Text>

            <Button
              sx={{
                textTransform: 'initial',
              }}
              onClick={goTo}
              variantStyle="secondary"
              startIcon={<Check
                color="#5f5f5f"
                size={20}
              />}
            >
              Ir para o dashboard
            </Button>
          </Box>
        ) : (
          <>
            <Text
              fontWeight={600}
              fontSize="30px"
            >
              Criar conta
            </Text>

            <Stepper
              max={3}
              step={showStep + 1}
              title={
                showStep === 0
                  ? 'Cadastrar empresa'
                  : showStep === 1
                    ? 'Cadastrar administrador'
                    : 'Validar email'
              }
            />

            {showStep === 0 ? (
              <>
                <Box
                  component="div"
                  display="flex"
                  width="100%"
                  flexDirection="row"
                  columnGap="40px"
                >
                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Nome da empresa</Text>
                    <Input
                      name="email"
                      fullWidth
                      sx={{
                        '& input::placeholder': {
                          fontSize: 16,
                        },
                      }}
                      placeholder="Digite o nome da empresa"
                    />
                  </Box>

                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>CPNJ</Text>
                    <Input
                      name="password"
                      fullWidth
                      sx={{
                        '& input::placeholder': {
                          fontSize: 16,
                        },
                      }}
                      placeholder="Digite o número do CNPJ"
                    />
                  </Box>
                </Box>

                <Box
                  component="div"
                  display="flex"
                  flexDirection="column"
                  rowGap="12px"
                  width="100%"
                >
                  <Text fontWeight={600}>Endereço</Text>
                  <Input
                    name="email"
                    fullWidth
                    sx={{
                      '& input::placeholder': {
                        fontSize: 16,
                      },
                    }}
                    placeholder="Digite o nome do endereço"
                  />
                </Box>
              </>
            ) : showStep === 1 ? (
              <>
                <Box
                  component="div"
                  display="flex"
                  width="100%"
                  flexDirection="row"
                  columnGap="40px"
                >
                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Nome</Text>
                    <Input
                      name="email"
                      fullWidth
                      sx={{
                        '& input::placeholder': {
                          fontSize: 16,
                        },
                      }}
                      placeholder="Digite o nome do adminstrador"
                    />
                  </Box>

                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Email</Text>
                    <Input
                      name="password"
                      fullWidth
                      sx={{
                        '& input::placeholder': {
                          fontSize: 16,
                        },
                      }}
                      placeholder="Digite o email do administrador"
                    />
                  </Box>
                </Box>

                <Box
                  component="div"
                  display="flex"
                  width="100%"
                  flexDirection="row"
                  columnGap="40px"
                >
                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Senha</Text>
                    <Input
                      name="password"
                      fullWidth
                      sx={{
                        '& input::placeholder': {
                          fontSize: 16,
                        },
                      }}
                      placeholder="Digite sua senha"
                    />
                  </Box>

                  <Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    rowGap="12px"
                    width="100%"
                  >
                    <Text fontWeight={600}>Senha</Text>
                    <Input
                      name="password"
                      fullWidth
                      sx={{
                        '& input::placeholder': {
                          fontSize: 16,
                        },
                      }}
                      placeholder="Digite sua senha"
                    />
                  </Box>
                </Box>
              </>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '12px',
                }}
              >
                <Box
                  component="div"
                  display="flex"
                  width="100%"
                  flexDirection="row"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    width="100%"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    columnGap="22px"
                  >
                    <Box
                      component="div"
                      display="flex"
                      flexDirection="column"
                      rowGap="12px"
                      width="100%"
                    >
                      <Text fontWeight={600}>Código</Text>
                      <Input
                        name="email"
                        fullWidth
                        sx={{
                          '& input::placeholder': {
                            fontSize: 16,
                          },
                        }}
                        placeholder="Digite o código"
                      />
                    </Box>

                    <Button
                      variantStyle="primary"
                      sx={{ height: '50px' }}
                      onClick={() => alert('Disparar e-mail')}
                    >
                      <RotateCw
                        color="#155E99"
                        size={20}
                      />
                    </Button>
                  </Box>
                </Box>

                <Box
                  component="div"
                  display="flex"
                  flexDirection="column"
                >
                  <Text
                    fontSize={14}
                    fontWeight={500}
                  >
                    Reenviar código em 50s
                  </Text>
                </Box>
              </Box>
            )}

            {showStep === 0 ? (
              <Box
                display="flex"
                justifyContent="flex-end"
              >
                <Button
                  variantStyle="secondary"
                  size="large"
                  onClick={() => setShowStep(prev => prev + 1)}
                  sx={{ width: '20%' }}
                  startIcon={<ArrowRight
                    color="#5f5f5f"
                    size={20}
                  />}
                >
                  Próximo
                </Button>
              </Box>
            ) : showStep === 1 ? (
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Button
                  size="large"
                  onClick={() => setShowStep(prev => prev - 1)}
                  sx={{ width: '20%' }}
                  startIcon={<ArrowLeft
                    color="#5f5f5f"
                    size={20}
                  />}
                >
                  Anterior
                </Button>
                <Button
                  variantStyle="secondary"
                  size="large"
                  onClick={() => setShowStep(prev => prev + 1)}
                  sx={{ width: '20%' }}
                  startIcon={<ArrowRight
                    color="#5f5f5f"
                    size={20}
                  />}
                >
                  Próximo
                </Button>
              </Box>
            ) : (
              <Box
                display="flex"
                justifyContent="space-between"
              >
                <Button
                  size="large"
                  onClick={() => setShowStep(prev => prev - 1)}
                  sx={{ width: '20%' }}
                  startIcon={<ArrowLeft
                    color="#5f5f5f"
                    size={20}
                  />}
                >
                  Anterior
                </Button>
                <Button
                  variantStyle="secondary"
                  size="large"
                  sx={{ width: '20%' }}
                  onClick={() => setShowStep(prev => prev + 1)}
                  startIcon={<Check
                    color="#5f5f5f"
                    size={20}
                  />}
                >
                  Cadastrar
                </Button>
              </Box>
            )}
          </>
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
        <Box
          sx={{ flex: 1, display: 'flex', flexDirection: 'column', px: '40px' }}
        >
          <img
            style={{ width: '80%', margin: '0   auto' }}
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
                mb: '20x',
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
              Release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
