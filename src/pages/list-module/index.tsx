import { Box, Button, IconButton, Text } from '@smart-dev-one/smart-ui';
import { Cpu, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ListModule = () => {
  const navigation = useNavigate();
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        rowGap: 8,
        flexDirection: 'column',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontSize={30}
            fontWeight={600}
          >
            Módulo SSN
          </Text>
          <Text
            fontSize={18}
            fontWeight={400}
          >
            Gerenciado de módulos
          </Text>
        </Box>
        <Button
          onClick={() => alert('criar novo modulo')}
          variantStyle="secondary"
        >
          Cadastrar módulo
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          border: '2px solid #D9D9D9',
          display: 'flex',
          borderRadius: 8,
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            height: 70,
            width: '100%',
            display: 'flex',
            alignItems: 'center ',
            borderBottom: '2px solid #d9d9d9',
            justifyContent: 'end',
            paddingRight: 4,
          }}
        >
          <IconButton
            icon={<Filter />}
            tooltip="Filtro"
            onClick={() => alert('filtro')}
            color="primary"
            size="medium"
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              gap: 1,
              minHeight: 115,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Cpu
              strokeWidth={1}
              size={52}
            />

            <Text
              variant="h4"
              fontSize={25}
              fontWeight={700}
            >
              Nenhum módulo encontrado
            </Text>
            <Text
              fontSize={16}
              variant="subtitle2"
              fontWeight={500}
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                alignItems: 'center',
              }}
            >
              Cadastre um novo
              <Text
                onClick={() => navigation('/modules/register/1')}
                fontWeight={700}
                fontSize={16}
                sx={{
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: '#3B93DA',
                }}
              >
                módulo
              </Text>
              a sua lista
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
