import { Stack } from '@mui/material';
import {
  Box,
  Button,
  IconButton,
  Input,
  Stepper,
  Text,
  ToggleButton,
} from '@smart-dev-one/smart-ui';
import { ArrowLeft, ArrowRight, InfoIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { inputStyle } from '../utils/style';

export const ThirdyStepRegisterModule = () => {
  const [brokerType, setBrokerType] = useState<number>(0);

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
        <Stepper
          title="Adicionar Módulo"
          max={4}
          step={3}
        />
        <IconButton
          icon={<X size={24} />}
          onClick={() => {}}
        />
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
            icon={<InfoIcon
              size={28}
              color="#5F5F5F"
            />}
            tooltip="It is a long established fact that a reader will be distracted by the readable content."
          />
        </Box>

        <Stack
          display="flex"
          flex={1}
          alignItems="center"
          width="100%"
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box
            flex={1}
            flexDirection="column"
            height="110%"
            display="flex"
            alignItems="flex-start"
            rowGap="25px"
          >
            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text
                fontSize="20px"
                fontWeight={500}
              >
                Nome do módulo SSN *
              </Text>
              <Input
                fullWidth
                placeholder="Nome do módulo SSN"
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
              <Text
                fontSize="20px"
                fontWeight={500}
              >
                Dispositivo *
              </Text>
              <Input
                fullWidth
                placeholder="Insira o Dispositivo"
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
              <Text
                fontSize="20px"
                fontWeight={500}
              >
                Host do broker local *
              </Text>
              <Input
                fullWidth
                placeholder="Insira o  host do broker local"
                sx={inputStyle}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="14px"
            >
              <ToggleButton
                value={0}
                onChange={() => setBrokerType(0)}
                selected={brokerType === 0}
              >
                Ativar broker local
              </ToggleButton>

              <ToggleButton
                value={1}
                onChange={() => setBrokerType(1)}
                selected={brokerType === 1}
              >
                Ativar broker remoto
              </ToggleButton>
            </Box>
          </Box>

          <Box
            flex={1}
            flexDirection="column"
            display="flex"
            alignItems="center"
            rowGap="25px"
          >
            <Box
              flexDirection="column"
              rowGap="12px"
              width="100%"
              display="flex"
              alignItems="start"
              justifyContent="center"
            >
              <Text
                fontSize="20px"
                fontWeight={500}
              >
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
              <Text
                fontSize="20px"
                fontWeight={500}
              >
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

        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Link to="/modules/register/2">
            <Button
              startIcon={<ArrowLeft
                size={24}
                color="#5F5F5F"
              />}
            >
              Anterior
            </Button>
          </Link>

          <Link to="/modules/register/4">
            <Button
              variantStyle="secondary"
              startIcon={<ArrowRight
                size={24}
                color="#5F5F5F"
              />}
            >
              Próximo
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
