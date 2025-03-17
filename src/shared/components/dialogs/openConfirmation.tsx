import React, {FC} from 'react';
import {create, InstanceProps} from 'react-modal-promise';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

interface Props extends InstanceProps<void, void> {
  title: string;
  text: string;
  okButtonText?: string;
  cancelButtonText?: string;
}

const ConfirmationDialog: FC<Props> = ({
  isOpen,
  onResolve,
  onReject,
  title,
  text,
  okButtonText = 'OK',
  cancelButtonText = 'Отмена',
}) => {
  const handleCancel = () => {
    onReject();
  };

  const handleOk = () => {
    onResolve();
  };

  return (
    <Dialog onClose={handleCancel} open={isOpen}>
      <DialogTitle>
        <Typography variant="h1">{title}</Typography>
      </DialogTitle>

      <DialogContent>
        <Typography variant="h3">{text}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleOk} variant="contained">
          {okButtonText}
        </Button>

        <Button onClick={handleCancel} variant="outlined" autoFocus>
          {cancelButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const openConfirmation = create(ConfirmationDialog);
