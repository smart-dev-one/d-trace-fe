import {
  Box,
  Card as CardMUI,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Modal } from '../modal';
import { Lock } from 'lucide-react';

export const Card = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const data = [
    { hour: '9h', state: 'ON' },
    { hour: '9:30', state: 'ON' },
    { hour: '9:45h', state: 'ON' },
    { hour: '10h', state: 'OFF' },
    { hour: '10:30', state: 'ON' },
    { hour: '10:45h', state: 'ON' },
    { hour: '11h', state: 'ON' },
    { hour: '11:30', state: 'OFF' },
    { hour: '11:45h', state: 'ON' },
    { hour: '12h', state: 'OFF' },
    { hour: '12:30', state: 'ON' },
  ];

  const stateToValue = (state: string) => (state === 'ON' ? 1 : 0);

  const chartData = data.map(entry => ({
    hour: entry.hour,
    value: stateToValue(entry.state),
  }));

  const expect = 1000;
  const reached = 200;

  const goal = expect - reached;

  const rad_a_data = [
    { name: 'Andamento', value: goal },
    { name: 'Expectativa', value: reached },
  ];

  const rad_b_data = [
    { name: 'Group B', value: 300 },
    { name: 'Group A', value: 700 },
  ];

  const dataMachineList = [
    {
      id: 0,
      title: 'Produzindo',
      time: '00:00:00:00',
    },
    {
      id: 1,
      title: 'Setup',
      time: '00:00:00:00',
    },
    {
      id: 2,
      title: 'Parada',
      time: '00:00:00:00',
    },
    {
      id: 3,
      title: 'Total',
      time: '00:00:00:00',
    },
  ];

  const infoIndicatorList = [
    {
      id: 0,
      title: 'OEE',
      value: 10,
    },
    {
      id: 1,
      title: 'DIS',
      value: 40,
    },
    {
      id: 2,
      title: 'DES',
      value: 55,
    },
    {
      id: 3,
      title: 'QUA',
      value: 98,
    },
  ];

  const ListIndicator = (data: { title: string; value: number }) => {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={data.value} size={60} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            border: data.value ? 0 : 10,
            borderRadius: data.value ? 0 : 30,
            p: data.value ? 0 : 3,
            borderColor: '#eee',
          }}
        >
          <Typography
            variant="caption"
            component="h3"
            fontWeight={500}
            color="#404040"
          >
            {`${data.value}%`}
          </Typography>
          <Typography
            fontWeight={500}
            variant="caption"
            component="h3"
            color="#444"
          >
            {data.title}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <CardMUI
      sx={{
        background: '#F5F5F5',
        p: '0px 10px 10px',
        borderRadius: '15px',
        width: '300px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography fontWeight="bold">Máquina_1</Typography>
        <IconButton onClick={handleOpen}>IC</IconButton>
      </Box>
      <Box sx={{ background: '#FFF', p: 2, borderRadius: '12px' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography fontWeight="bold">Peça tipo E</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', pt: 2, gap: '20px' }}>
          <Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontWeight={'bold'}>
                15000
              </Typography>
              <Typography variant="subtitle2">Cadernos produzidos</Typography>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontWeight={'bold'}>
                01:10:30
              </Typography>
              <Typography variant="subtitle2" sx={{ maxWidth: '20ch' }}>
                Tempo de máquina produzido
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress size="5rem" variant="determinate" value={95} />
          </Box>
        </Box>
      </Box>
      <Modal title="TESTE1" onClose={handleClose} open={openModal}>
        <Box width="100%" display="flex" flexDirection="column">
          <Box
            sx={{ flex: 0.5 }}
            display="flex"
            component="div"
            alignItems="center"
            flexDirection="row"
          >
            <Box
              component="div"
              height={42}
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="row"
              sx={{
                columnGap: 2,
                borderRadius: 2,
                mt: 2,
                p: 2,
                height: 62,
              }}
              boxShadow={1}
            >
              <Box
                component="div"
                display="flex"
                alignItems="center"
                flexDirection="row"
                sx={{
                  columnGap: 2,
                  flex: 0.5,
                }}
              >
                <Box
                  sx={{
                    background: 'red',
                    borderRadius: 30,
                  }}
                  width={10}
                  height={10}
                  component="div"
                />

                <Typography variant="subtitle2">Máquina Parada</Typography>
              </Box>

              <Box
                display="flex"
                component="div"
                sx={{ flex: 1 }}
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h6" fontWeight="bold">
                  SEM PRODUTO CARREGADO
                </Typography>
                <Typography variant="subtitle2">Produto</Typography>
              </Box>

              <Box display="flex" component="div" sx={{ flex: 0.5 }} />
            </Box>
          </Box>

          <Stack
            display="flex"
            sx={{ columnGap: 2, mt: 2 }}
            direction={{ sm: 'column', md: 'row' }}
          >
            <Stack
              direction={{ sm: 'row', md: 'column' }}
              display="flex"
              alignItems="center"
              sx={{
                borderRadius: 2,
                flex: 0.75,
                py: 1,
                rowGap: 2,
              }}
              boxShadow={2}
            >
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                sx={{ rowGap: 1 }}
              >
                <Typography variant="subtitle2" fontSize={12}>
                  Iniciar Setup
                </Typography>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 30,
                    background: 'yellow',
                    cursor: 'pointer',
                  }}
                />
              </Box>

              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                sx={{ rowGap: 1 }}
              >
                <Typography variant="subtitle2" fontSize={12}>
                  Iniciar Produção
                </Typography>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 30,
                    background: 'green',
                    cursor: 'pointer',
                  }}
                />
              </Box>

              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                sx={{ rowGap: 1 }}
              >
                <Typography variant="subtitle2" fontSize={12}>
                  Finalizar Produção
                </Typography>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 30,
                    cursor: 'pointer',
                    background: 'red',
                  }}
                >
                  <Lock color="white" size={20} />
                </Box>
              </Box>
            </Stack>

            <Stack
              direction={{ sm: 'column', md: 'row' }}
              display="flex"
              columnGap={4}
              sx={{
                flex: 3,
                borderRadius: 2,
                p: 2,
              }}
              boxShadow={2}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                gap={2}
              >
                {infoIndicatorList.map(item => (
                  <ListIndicator
                    title={item.title}
                    value={item.value}
                    key={item.id}
                  />
                ))}
              </Box>

              <Box
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                sx={{ flex: 1 }}
              >
                <Typography variant="subtitle1" fontWeight={600} fontSize={18}>
                  Velocidade Atual
                </Typography>

                <ResponsiveContainer
                  height={200}
                  maxHeight={200}
                  style={{ flex: 1 }}
                >
                  <PieChart>
                    <Pie
                      height={150}
                      width={150}
                      data={rad_a_data}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#eee"
                      dataKey="value"
                    >
                      <Cell fill="#0088FE" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <Box width="100%" position="absolute">
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    fontWeight={600}
                    color="#404040"
                    fontSize={18}
                  >
                    NaN - /h
                  </Typography>
                  <Box
                    position="absolute"
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      fontWeight={600}
                      color="#404040"
                      fontSize={14}
                    >
                      Produzidos (Total)
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ minWidth: 35, width: '100%' }}
                    >
                      <Typography
                        textAlign="right"
                        variant="body2"
                        color="#404040"
                      >
                        0%
                      </Typography>
                      <Typography
                        textAlign="right"
                        variant="body2"
                        color="#404040"
                      >
                        100%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        flex: 1,
                        borderLeft: 3,
                        borderRight: 3,
                        borderColor: '#ccc',
                        minHeight: 20,
                        alignItems: 'center',
                        alignContent: 'center',
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        color="inherit"
                        value={0}
                        sx={{ height: 2 }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      fontWeight={600}
                      color="#404040"
                      fontSize={20}
                    >
                      0
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                sx={{ flex: 1 }}
              >
                <Typography variant="subtitle1" fontWeight={600} fontSize={18}>
                  Velocidade Média (-/h)
                </Typography>

                <ResponsiveContainer
                  height={200}
                  maxHeight={200}
                  style={{ flex: 1 }}
                >
                  <PieChart>
                    <Pie
                      height={150}
                      width={150}
                      data={rad_b_data}
                      startAngle={180}
                      endAngle={0}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#eee"
                      dataKey="value"
                    >
                      <Cell fill="#00C49F" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <Box width="100%" position="absolute">
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    fontWeight={600}
                    color="#404040"
                    fontSize={18}
                  >
                    NaN - /h
                  </Typography>
                  <Box
                    position="absolute"
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      fontWeight={600}
                      color="#404040"
                      fontSize={14}
                    >
                      Rejeitado
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      sx={{ minWidth: 35, width: '100%' }}
                    >
                      <Typography
                        textAlign="right"
                        variant="body2"
                        color="#404040"
                      >
                        0%
                      </Typography>
                      <Typography
                        textAlign="right"
                        variant="body2"
                        color="#404040"
                      >
                        100%
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        flex: 1,
                        borderLeft: 3,
                        borderRight: 3,
                        borderColor: '#ccc',
                        minHeight: 20,
                        alignItems: 'center',
                        alignContent: 'center',
                      }}
                    >
                      <LinearProgress
                        variant="determinate"
                        color="inherit"
                        value={0}
                        sx={{ height: 2 }}
                      />
                    </Box>
                    <Typography
                      variant="subtitle1"
                      textAlign="center"
                      fontWeight={600}
                      color="#404040"
                      fontSize={20}
                    >
                      0 (0.00%)
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>

          <Box
            sx={{ flex: 0.5 }}
            display="flex"
            component="div"
            alignItems="center"
            flexDirection="row"
          >
            <Box
              component="div"
              height={42}
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="row"
              sx={{
                columnGap: 2,
                borderRadius: 2,
                mt: 2,
                p: 2,
                height: 200,
              }}
              boxShadow={2}
            >
              <Box
                display="flex"
                flexDirection="column"
                rowGap={4}
                sx={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'start',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h1"
                  textAlign="center"
                  fontSize={14}
                  fontWeight="medium"
                >
                  Tempo de Máquina
                </Typography>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {dataMachineList.map((item, index) => (
                    <>
                      <Grid item xs={6} key={`${item.title + index}`}>
                        <Typography
                          variant="subtitle1"
                          textAlign="right"
                          fontSize={12}
                        >
                          {item.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} key={`${item.title + index}`}>
                        <Typography
                          variant="subtitle1"
                          textAlign="left"
                          fontSize={12}
                        >
                          {item.time}
                        </Typography>
                      </Grid>
                    </>
                  ))}
                </Grid>
              </Box>

              <Box
                sx={{
                  width: 2,
                  height: '60%',
                  background: '#eee',
                }}
              />

              <Box
                display="flex"
                flexDirection="column"
                rowGap={4}
                sx={{
                  flex: 2,
                  height: '100%',
                }}
              >
                <Typography
                  variant="subtitle2"
                  display="block"
                  maxHeight={2}
                  fontSize={12}
                >
                  Tempo de Produção
                </Typography>
                <Box
                  sx={{
                    maxHeight: 150,
                    flex: 1,
                    justifyCenter: 'center',
                    alignItems: 'center',
                    my: 'auto',
                  }}
                >
                  <ResponsiveContainer style={{ flex: 1 }}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis
                        domain={[0, 1]}
                        tickFormatter={tick => (tick === 1 ? 'ON' : 'OFF')}
                        tickCount={2}
                      />
                      <Tooltip
                        formatter={value => (value === 1 ? 'ON' : 'OFF')}
                      />
                      <Line
                        type="stepAfter"
                        dataKey="value"
                        strokeWidth={3}
                        stroke="#8884d8"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </CardMUI>
  );
};
