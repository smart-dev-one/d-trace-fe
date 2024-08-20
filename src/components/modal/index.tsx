import {
  Backdrop,
  Box,
  Fade,
  Modal as ModalMui,
  ModalProps,
  Typography,
} from '@mui/material';
import close from '../../../public/close.svg';

interface Props extends ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: JSX.Element;
}

const style = {
  p: 2,
  top: '50%',
  left: '50%',
  width: '75%',
  height: '95%',
  boxShadow: 24,
  border: 'none',
  borderRadius: 6,
  bgcolor: 'background.paper',
  position: 'absolute' as const,
  transform: 'translate(-50%, -50%)',
};

export const Modal = ({ open, onClose, children, title }: Props) => {
  return (
    <ModalMui
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      sx={{
        sm: {
          width: '100%',
          height: '100%',
        },
        md: {
          width: '100%',
          height: '100%',
        },
        lg: {
          width: '100%',
          height: '100%',
        },
      }}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              id="transition-modal-title"
              fontWeight="bold"
              variant="h6"
              component="h3"
            >
              {title}
            </Typography>
            <img
              onClick={onClose}
              src={close}
              style={{ cursor: 'pointer' }}
              srcSet={close}
              loading="lazy"
              alt="close-icon"
            />
          </Box>
          {children}
        </Box>
      </Fade>
    </ModalMui>
  );
};
