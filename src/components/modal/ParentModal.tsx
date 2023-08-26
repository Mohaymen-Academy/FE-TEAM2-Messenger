import React, { useCallback, useEffect, useState } from "react";
import Button from "@/components/ui/Button";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  // onSubmit,
  body,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return null;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 400);
  }, [onClose, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return null;

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={() => handleClose()}
        className={`
					select-none
          justify-center
        	items-center
          flex
          overflow-hidden 
				  fixed
				  inset-0
          z-50
          outline-none
          focus:outline-none
        bg-neutral-800/70
          h-[100vh]
          transition
          ${
            showModal
              ? "backdrop-blur-sm opacity-100"
              : "backdrop-blur-none opacity-0"
          }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            relative
						w-full
						md:w-1/4
						lg:w-3/6
						xl:w-2/5
						my-6
						h-full
						md:h-auto"
        >
          {/* CONTENT */}
          <div
            className={`
								translate
								duration-300
								h-full
								${showModal ? "translate-y-0 opacity-100 " : "translate-y-10 opacity-0 "}`}
          >
            <div
              className="
							translate
							h-full
							lg-h-auto
							md:h-auto
							border-0
							rounded-lg
							relative
							flex flex-col
							outline-none
							focus:outline-none"
            >
              {/* BODY */}
              <div className="relative w-screen h-[1000px] max-h-[90vh] bg p-6 flex-auto self-center flex items-center justify-center">
                {body}
              </div>
              {/* FOOTER */}
              <div className="flex flex-col gap-2 p-6">
                <div
                  className="
										flex flex-row
										items-center
										gap-4
										w-full"
                >
                  {secondaryAction && secondaryActionLabel && (
                    <Button onClick={handleSecondaryAction} />
                  )}

                  {/* <Button onClick={handleSubmit}>{actionLabel}</Button> */}
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
