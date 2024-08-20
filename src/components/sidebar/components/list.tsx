import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import arrow from '/arrow.svg';

export type Items = {
  path?: string;
  label: string;
  icon?: ReactNode;
  action?: () => void;
  children?: Items[];
};

export interface IListProps {
  data: Items[];
}

export const ListMenu = ({ data }: IListProps) => {
  const [open, setOpen] = useState<string>('');
  const [openCollapse, setOpenCollapse] = useState<boolean>(false);

  const navigate = useNavigate();

  const location = useLocation();

  const handleClickCollapse = (path: string) => {
    setOpen(prev => (prev === path ? '' : path));
  };

  const handleSelectMenu = (path?: string) => {
    if (path) {
      setOpenCollapse(true);
      handleClickCollapse(path);
    } else {
      navigate(path ?? '');
    }
  };

  return (
    <List
      sx={{
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
      component="nav"
    >
      {data.map(item => {
        return (
          <>
            <ListItemButton
              className={location.pathname === item?.path ? 'active' : ''}
              sx={{
                px: '10px',
                py: 0.5,
                gap: '10px',
                color: '#FFFFFF',
                ':hover': {
                  background: '#146AAF',
                },
              }}
              onClick={() => {
                handleSelectMenu(item.path);
              }}
            >
              {item.icon && (
                <ListItemIcon
                  sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      location.pathname === item?.path
                        ? '#146AAF'
                        : 'transparent',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
              )}

              <ListItemText
                sx={{
                  whiteSpace: 'nowrap',
                }}
                primary={item.label}
              />

              <ListItemIcon
                sx={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background:
                    location.pathname === item?.path
                      ? '#146AAF'
                      : 'transparent',
                }}
              >
                <img src={arrow} style={{ width: '15px' }} />
              </ListItemIcon>
            </ListItemButton>

            {item?.children &&
              item.children.map(subitem => (
                <Collapse
                  key={`${subitem.label}`}
                  in={open === item.path && openCollapse}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <Link to={subitem.path ?? ''}>
                      <ListItemButton
                        sx={{
                          px: 10,
                          color: '#FFFFFF',
                          fontWeight: 'bolder',
                          ':hover': {
                            background: '#146AAF',
                          },
                        }}
                        onClick={() => setOpenCollapse(false)}
                      >
                        <ListItemText
                          primary={subitem.label}
                          sx={{
                            whiteSpace: 'nowrap',
                          }}
                        />
                      </ListItemButton>
                    </Link>
                  </List>
                </Collapse>
              ))}
          </>
        );
      })}
    </List>
  );
};
