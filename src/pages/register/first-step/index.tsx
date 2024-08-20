import { Stack } from '@mui/material';
import {
  Box,
  Button,
  IconButton,
  Input,
  Stepper,
  Text,
} from '@smart-dev-one/smart-ui';
import { ArrowRight, InfoIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { inputStyle } from '../utils/style';

export const FirstStepRegisterInfo = () => {
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
          mb: '30px',
          pb: '18px',
          borderBottom: '2px solid #d9d9d9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Stepper title="Informações básicas" max={4} step={1} />
        <IconButton icon={<X size={24} />} onClick={() => {}} />
      </Box>

      <Box sx={{ flex: 1, flexDirection: 'column', display: 'flex' }}>
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
          display="flex"
          flex={1}
          width="100%"
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box flex={1} flexDirection="column" display="flex" rowGap="25px">
            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Nome do cliente
              </Text>
              <Input
                fullWidth
                placeholder="Digite o nome da empresa"
                sx={inputStyle}
              />
            </Box>

            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                País
              </Text>
              <Input
                fullWidth
                placeholder="Informe o país para o endereço MQTT"
                sx={inputStyle}
              />
            </Box>

            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Planta
              </Text>
              <Input
                fullWidth
                placeholder="Informe a planta para o endereço MQTT"
                sx={inputStyle}
              />
            </Box>
          </Box>

          <Box flex={1} flexDirection="column" display="flex" rowGap="25px">
            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Cidade
              </Text>
              <Input
                fullWidth
                placeholder="Informe a cidade para o endereço MQTT"
                sx={inputStyle}
              />
            </Box>

            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text fontSize="20px" fontWeight={500}>
                Setor
              </Text>
              <Input
                fullWidth
                placeholder="Informe o setor para o endereço MQTT"
                sx={inputStyle}
              />
            </Box>
          </Box>
        </Stack>

        <Box display="flex" justifyContent="flex-end">
          <Link to="/modules/register/2">
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
