import { useRef, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

function Modal({ open, children, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) {
      return;
    }

    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
}

export default Modal;