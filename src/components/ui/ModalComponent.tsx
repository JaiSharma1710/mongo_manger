import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { ReactNode } from 'react';

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenChange?: () => void;
  modalTitle?: string | ReactNode;
  children?: ReactNode;
  showFooter?: boolean;
  hideCloseButton?: boolean;
};

const ModalComponent = ({
  isOpen,
  onOpenChange,
  modalTitle,
  children,
  showFooter = false,
  hideCloseButton,
}: ModalProps) => {
  return (
    <Modal
      hideCloseButton={hideCloseButton}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            {modalTitle && (
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
            )}
            <ModalBody>{children}</ModalBody>
            {showFooter && (
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
