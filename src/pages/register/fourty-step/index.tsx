import { Stack } from '@mui/material';
import {
  Accordion,
  Box,
  Button,
  IconButton,
  Stepper,
  Text,
} from '@smart-dev-one/smart-ui';
import { ArrowLeft, ArrowRight, InfoIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const FinishStepRegisterModule = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
        <Stepper title="Finalizar Cadastro" max={4} step={4} />
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

        <Accordion
          title="Informações Básicas"
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <Stack
            display="flex"
            flex={1}
            width="100%"
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Box flex={1} flexWrap="wrap" display="flex" rowGap="25px">
              <Box
                flexDirection="column"
                rowGap="6px"
                width="100%"
                display="flex"
                alignItems="start"
                justifyContent="center"
              >
                <Text fontSize="20px" fontWeight={600}>
                  Nome do cliente
                </Text>
                <Text fontSize="18px" fontWeight={400}>
                  Google
                </Text>
              </Box>

              <Box
                flexDirection="column"
                rowGap="6px"
                width="100%"
                display="flex"
                alignItems="start"
                justifyContent="center"
              >
                <Text fontSize="20px" fontWeight={600}>
                  Cidade
                </Text>
                <Text fontSize="18px" fontWeight={400}>
                  California
                </Text>
              </Box>
            </Box>

            <Box flex={1} flexWrap="wrap" display="flex" rowGap="25px">
              <Box
                flexDirection="column"
                rowGap="6px"
                width="100%"
                display="flex"
                alignItems="start"
                justifyContent="center"
              >
                <Text fontSize="20px" fontWeight={600}>
                  País
                </Text>
                <Text fontSize="18px" fontWeight={400}>
                  Estados Unidos da América
                </Text>
              </Box>

              <Box
                flexDirection="column"
                rowGap="6px"
                width="100%"
                display="flex"
                alignItems="start"
                justifyContent="center"
              >
                <Text fontSize="20px" fontWeight={600}>
                  Planta
                </Text>
                <Text fontSize="18px" fontWeight={400}>
                  Mountain
                </Text>
              </Box>
            </Box>

            <Box flex={1} flexWrap="wrap" display="flex" rowGap="25px">
              <Box
                flexDirection="column"
                rowGap="6px"
                width="100%"
                display="flex"
                alignItems="start"
                justifyContent="center"
              >
                <Text fontSize="20px" fontWeight={600}>
                  Setor
                </Text>
                <Text fontSize="18px" fontWeight={400}>
                  Vendas / Marketing
                </Text>
              </Box>
            </Box>
          </Stack>
        </Accordion>

        <Accordion
          title="Cadastrar máquina"
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <Box sx={{ height: '200px', flex: 1, width: '100%' }}></Box>
        </Accordion>

        <Accordion
          title="Adicionar módulo"
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <Box sx={{ height: '200px', flex: 1, width: '100%' }}></Box>
        </Accordion>
      </Box>

      <Box display="flex" justifyContent="space-between">
        <Link to="/modules/register/3">
          <Button startIcon={<ArrowLeft size={24} color="#5F5F5F" />}>
            Anterior
          </Button>
        </Link>

        <Link to="/modules/list">
          <Button
            variantStyle="secondary"
            startIcon={<ArrowRight size={24} color="#5F5F5F" />}
          >
            Próximo
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
