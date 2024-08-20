import { Stack } from '@mui/material';
import {
  Box,
  Button,
  IconButton,
  Input,
  Stepper,
  Text,
} from '@smart-dev-one/smart-ui';
import { ArrowLeft, ArrowRight, InfoIcon, X } from 'lucide-react';
import { inputStyle } from '../utils/style';
import { Link } from 'react-router-dom';

export const SecondStepRegisterMachine = () => {
  return (
    <Box
      flex={1}
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        sx={{
          mb: '10px',
          pb: '18px',
          borderBottom: '2px solid #d9d9d9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stepper title="Cadastro de Máquina" max={4} step={2} />
        <IconButton icon={<X size={24} />} />
      </Box>

      <Box flex={1} flexDirection="column" display="flex">
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
        >
          <IconButton
            size="medium"
            icon={<InfoIcon size={28} color="#5F5F5F" />}
            tooltip="It is a long established fact that a reader will be distracted by the readable content."
          />
        </Box>

        <Stack
          flex={1}
          width="100%"
          display="flex"
          direction={{ xs: 'column', sm: 'column', md: 'column' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box display="flex" flexWrap="wrap" gap="25px">
            <Box
              width={{ xs: '100%', md: 'calc(50% - 12.5px)' }}
              flexDirection="column"
              rowGap="12px"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Nome *
              </Text>
              <Input
                placeholder="Nome da maquina"
                sx={[{ ...inputStyle, width: '100%' }]}
              />
            </Box>

            <Box
              flexDirection="column"
              rowGap="12px"
              width={{ xs: '100%', md: 'calc(50% - 12.5px)' }}
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Setor operacional *
              </Text>
              <Input
                placeholder="Selecione um setor"
                sx={[{ ...inputStyle, width: '100%' }]}
              />
            </Box>

            <Box
              flexDirection="column"
              rowGap="12px"
              width={{ xs: '100%', md: 'calc(50% - 12.5px)' }}
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Fabricante *
              </Text>
              <Input
                placeholder="Nome do frabicante"
                sx={[{ ...inputStyle, width: '100%' }]}
              />
            </Box>

            <Box
              flexDirection="column"
              rowGap="12px"
              width={{ xs: '100%', md: 'calc(50% - 12.5px)' }}
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Modelo *
              </Text>
              <Input
                placeholder="Insira o modelo da máquina"
                sx={[{ ...inputStyle, width: '100%' }]}
              />
            </Box>
          </Box>

          <Box display="flex" flexWrap="wrap" gap="25px">
            <Box
              width={{
                xs: '100%',
                sm: 'calc(50% - 12.5px)',
                md: 'calc(33.33% - 16.66px)',
              }}
              display="flex"
              flexDirection="column"
              rowGap="12px"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Numero de Série *
              </Text>
              <Input
                placeholder="Insira o numero de série"
                sx={{ ...inputStyle, width: '100%' }}
              />
            </Box>

            <Box
              width={{
                xs: '100%',
                sm: 'calc(50% - 12.5px)',
                md: 'calc(33.33% - 16.66px)',
              }}
              display="flex"
              flexDirection="column"
              rowGap="12px"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Ano de fabricação *
              </Text>
              <Input
                placeholder="Insira o nao de fabircação"
                sx={{ ...inputStyle, width: '100%' }}
              />
            </Box>

            <Box
              width={{
                xs: '100%',
                sm: 'calc(50% - 12.5px)',
                md: 'calc(33.33% - 16.66px)',
              }}
              display="flex"
              flexDirection="column"
              rowGap="12px"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Ano de Instalação *
              </Text>
              <Input
                placeholder="Insira ano de Instalação"
                sx={{ ...inputStyle, width: '100%' }}
              />
            </Box>

            <Box
              width={{
                xs: '100%',
                sm: 'calc(50% - 12.5px)',
                md: 'calc(33.33% - 16.66px)',
              }}
              display="flex"
              flexDirection="column"
              rowGap="12px"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Performance Máxima *
              </Text>
              <Input
                placeholder="Insira o numero de série"
                sx={{ ...inputStyle, width: '100%' }}
              />
            </Box>

            <Box
              width={{
                xs: '100%',
                sm: 'calc(50% - 12.5px)',
                md: 'calc(33.33% - 16.66px)',
              }}
              display="flex"
              flexDirection="column"
              rowGap="12px"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Performance Produção *
              </Text>
              <Input
                placeholder="Insira a performance Produção:"
                sx={{ ...inputStyle, width: '100%' }}
              />
            </Box>

            <Box
              width={{
                xs: '100%',
                sm: 'calc(50% - 12.5px)',
                md: 'calc(33.33% - 16.66px)',
              }}
              display="flex"
              flexDirection="column"
              rowGap="12px"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Unidade de Velocidade *
              </Text>
              <Input
                placeholder="Insira unidade de Velocidade"
                sx={{ ...inputStyle, width: '100%' }}
              />
            </Box>
          </Box>

          <Box
            marginBottom={4}
            flexDirection="row"
            gap="24px"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text fontSize="20px" fontWeight={500}>
              Selecione a cor da maquina *
            </Text>
            <Input
              type="color"
              sx={[{ ...inputStyle, width: '100px' }]}
              placeholder="Insira o numero de série"
            />
          </Box>
        </Stack>

        <Box display="flex" justifyContent="space-between">
          <Link to="/modules/register/1">
            <Button startIcon={<ArrowLeft size={24} color="#5F5F5F" />}>
              Anterior
            </Button>
          </Link>

          <Link to="/modules/register/3">
            <Button
              variantStyle="secondary"
              startIcon={<ArrowRight size={24} color="#5F5F5F" />}
            >
              Próximo
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
