import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMessageConfirmDialog } from "../../slices/dialogSlice";

function MessageConfirmDialog() {
  const { dialogs } = useSelector((state) => state.dialogState);

  const {
    isOpen,
    messageHeader,
    messageBody,
    action,
    actionColor,
    handleConfirm,
  } = dialogs.messageConfirmDialog;
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeMessageConfirmDialog());
  };
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {messageHeader}
            </AlertDialogHeader>

            <AlertDialogBody>{messageBody}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme={actionColor} onClick={handleConfirm} ml={3}>
                {action}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default MessageConfirmDialog;
