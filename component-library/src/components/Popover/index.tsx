import React, { Fragment, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";

type PpopoverProps = {
  title: string;
  children?: React.ReactNode | string;
  onClick?: () => void;
  onHover?: () => void;
};

export default function PPopover({ title = "", children }: PpopoverProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [popperElement, setPopperElement] = useState<any>();
  const { styles, attributes } = usePopper(buttonRef.current, popperElement);

  const timeoutDuration = 200;
  let timeout: NodeJS.Timeout;
  function closePopover() {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      })
    );
  }
  function onMouseEnter(open: boolean) {
    clearTimeout(timeout);
    if (open) {
      return;
    }
    return buttonRef.current?.click();
  }
  function onMouseLeave(open: boolean) {
    if (!open) {
      return;
    }
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  }

  return (
    <Popover>
      {({ open }) => (
        <div onMouseLeave={() => onMouseLeave(open)}>
          <Popover.Button
            onMouseEnter={() => onMouseEnter(open)}
            onMouseLeave={() => onMouseLeave(open)}
            className={`font-bold py-2 px-4 rounded-full border-2`}
            ref={buttonRef}
          >
            {title}
          </Popover.Button>

          <Popover.Panel
            onMouseEnter={() => onMouseEnter(open)}
            onMouseLeave={() => onMouseLeave(open)}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            {children}
          </Popover.Panel>
        </div>
      )}
    </Popover>
  );
}
