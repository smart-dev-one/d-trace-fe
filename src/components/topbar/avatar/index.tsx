import { Loader } from '@/components/loader';
import {
  Avatar as AvatarMUI,
  Badge,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Avatar = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e => (e === null ? event.currentTarget : null));
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation('/sign-in');
    }, 3000);
  };

  return (
    <div>
      <Loader loading={loading} message="Saindo..." />
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Badge
          // badgeContent={4}
          color="error"
        >
          <AvatarMUI>
            <User size={20} />
          </AvatarMUI>
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClick}
        onClick={handleClick}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogOut size={20} />
          </ListItemIcon>
          <Typography>Sair</Typography>
        </MenuItem>

        {/* <MenuItem onClick={handleClick}>
          <ListItemIcon>
            <img
              style={{ width: 15, height: 15 }}
              src={alert}
              alt="alert"
            />
          </ListItemIcon>
          <Typography>Notification</Typography>
        </MenuItem>

        <MenuItem onClick={handleClick}>
          <ListItemIcon>
            <img
              style={{ width: 15, height: 15 }}
              src={atencao}
              alt="atencao"
            />
          </ListItemIcon>
          <Typography>Alerts</Typography>
        </MenuItem> */}
      </Menu>
    </div>
  );
};
