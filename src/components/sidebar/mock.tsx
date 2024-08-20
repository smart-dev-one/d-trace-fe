import { Items } from './components/list';

export const mockMenu: Items[] = [
  {
    label: 'Módulos',
    path: '/modulos',
    icon: <img
      style={{ width: '28px', height: '28px' }}
      src="/usuarios.png"
    />,
    children: [
      {
        label: 'Dados em tempo real',
        path: '/dashboard',
      },
      {
        label: 'Cadastrar módulo SSN',
        path: '/modules/register/1',
      },
    ],
  },
  {
    label: 'Produtos',
    path: '/produtos',
    icon: <img
      style={{ width: '28px', height: '28px' }}
      src="/maquinas.png"
    />,
    children: [
      {
        label: 'Produzir um produto',
        path: '/product',
      },
      {
        label: 'Criar um produto',
        path: '/create-product',
      },
    ],
  },
  {
    label: 'Apontamentos',
    path: '/apontamentos',
    icon: <img
      style={{ width: '28px', height: '28px' }}
      src="/tarefas.png"
    />,
    children: [
      {
        label: 'Classificar paradas',
        path: '/',
      },
      {
        label: 'Relatórios',
        path: '/',
      },
    ],
  },
];
