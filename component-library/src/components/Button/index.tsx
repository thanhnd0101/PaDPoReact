import React from "react";
import { Status } from "../shared/types";
import LinkButton, { AnchorTarget } from "./LinkButton";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

type ButtonProps = {
  status?: Status;
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode | string;
  intent?: "primary" | "secondary" | "link";
  linkProps?: {
    href?: string;
    target?: AnchorTarget;
  };
};

export default function Button({
  status = "default",
  disabled = false,
  isLoading = false,
  intent = "primary",
  linkProps,
  children,
}: ButtonProps) {
  return (
    <>
      {intent === "primary" && (
        <PrimaryButton
          status={status}
          disabled={disabled}
          isLoading={isLoading}
          children={children}
        />
      )}
      {intent === "secondary" && (
        <SecondaryButton
          status={status}
          disabled={disabled}
          isLoading={isLoading}
          children={children}
        />
      )}
      {intent === "link" && (
        <LinkButton
          target={linkProps?.target}
          href={linkProps?.href || ""}
          status={status}
          disabled={disabled}
          isLoading={isLoading}
          children={children}
        />
      )}
    </>
  );
}
