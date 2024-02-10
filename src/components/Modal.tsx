import React, {
  useEffect,
  useRef,
  ReactElement,
  MouseEventHandler,
  EventHandler,
  ReactNode,
} from 'react';
import ReactDOM from 'react-dom';
import { getFocusableElements, nextFocus, usePortal } from './ModalUtils';
import IconCircleXMarkModal from './IconCircleXMarkModal';
import Heading from './Heading';
import { twMerge } from 'tailwind-merge';

export interface ModalProps {
  children: ReactElement | ReactElement[];
  onClose: EventHandler<any>;
  closeBtnExtendClass?: string;
  open?: boolean;
  containerStyle?: string;
  modalStyle?: string;
  innerStyle?: string;
  heading?: ReactNode | string;
  headingSize?: 'h1' | 'h2' | 'h3' | 'h4';
  headingAreaClass?: string;
  description?: ReactNode | string;
  descriptionClass?: string;
  buttons?: ReactNode;
  buttonsClass?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
  backdropClass?: string;
  showCloseButton?: boolean;
  onClickOutside?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  closeBtnExtendClass,
  open = true,
  containerStyle,
  modalStyle = '',
  innerStyle,
  maxWidth = 'sm',
  heading,
  headingSize = 'h4',
  headingAreaClass,
  description,
  descriptionClass,
  buttons,
  buttonsClass,
  backdropClass,
  showCloseButton = true,
  onClickOutside,
  ...otherProps
}: ModalProps) => {
  const portal = usePortal();
  const previousFocus = useRef<HTMLElement | null>(null);

  const container = useRef<HTMLDivElement>(null);
  const handleClickOutside = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();

    if (onClickOutside) onClickOutside();
  };

  // close on esc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case 'Escape': {
          onClose(e);
          break;
        }
        case 'Tab': {
          e.preventDefault();
          nextFocus(getFocusableElements(container.current), !e.shiftKey);
          break;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    // aria-hidden
    document
      .getElementById('root')
      ?.setAttribute('aria-hidden', open.toString());
    portal.current?.setAttribute('aria-hidden', (!open).toString());

    if (open) {
      previousFocus.current = (document.activeElement as HTMLElement) ?? null;
      nextFocus(getFocusableElements(container.current));
    } else {
      previousFocus.current?.focus?.();
      previousFocus.current = null;
    }
  }, [open, portal]);

  return ReactDOM.createPortal(
    // transparent overlay
    <div
      className={twMerge(
        'pointer-events-none fixed inset-0 z-10 flex flex-col justify-center p-8 font-spezia opacity-0 transition-opacity',
        open && 'pointer-events-auto opacity-100',
        containerStyle,
      )}
    >
      <div
        className={twMerge(
          'fixed left-0 top-0 h-screen w-screen bg-[rgba(0,0,0,0.2)] mix-blend-normal',
          backdropClass,
        )}
        onClick={handleClickOutside}
      />
      <div
        className={twMerge(
          'relative mx-auto flex w-full flex-col justify-start overflow-hidden rounded-2xl border border-[#CEDCEB] bg-[#F8FCFF] shadow-com-modal',
          maxWidth === 'sm' && 'max-w-[var(--modal-max-width-sm)]',
          maxWidth === 'md' && 'max-w-[var(--modal-max-width-md)]',
          maxWidth === 'lg' && 'max-w-[var(--modal-max-width-lg)]',
          modalStyle,
        )}
        ref={container}
      >
        <div
          className={twMerge(
            'flex min-w-0 flex-1 flex-col overflow-y-auto px-[48px] pb-[64px] pt-[50px]',
            innerStyle,
          )}
        >
          {heading && (
            <div className={twMerge('mb-6', headingAreaClass)}>
              {typeof heading === 'string' ? (
                <Heading size={headingSize} heading={heading} />
              ) : (
                heading
              )}
            </div>
          )}
          {description && (
            <div
              className={twMerge(
                'mb-6 text-[1rem] leading-[1.25] tracking-[-.01rem] text-[#272B32] [&:last-child]:mb-0 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_p]:my-[.88em]',
                descriptionClass,
              )}
            >
              {typeof heading === 'string' ? <p>{description}</p> : description}
            </div>
          )}
          {children}
          {buttons && (
            <div
              className={twMerge(
                'flex justify-center gap-x-3 [&>*]:min-w-[8.75rem]',
                !children && 'mt-6',
                children && 'mt-12',
                buttonsClass,
              )}
            >
              {buttons}
            </div>
          )}
        </div>
        {showCloseButton && (
          <button
            onClick={onClose}
            className={twMerge(
              ' absolute right-[23px] top-[23px] cursor-pointer rounded-full ',
              closeBtnExtendClass,
            )}
          >
            <IconCircleXMarkModal className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>,
    portal.current,
  );
};

export default Modal;
