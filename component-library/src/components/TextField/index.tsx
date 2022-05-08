import React from "react";
import genColorBorderFromStatus from "../../lib/genColorBorder";
import genColorTextFromStatus from "../../lib/genColorText";
import { Status } from "../shared/types";


type TextFieldProps = {
  label?: string;
  status?: Status;
  disabled?: boolean;
  helperText?: string;
  placeholder?: string;
  value?: string;
};

export default function TextField({
  label,
  status = "default",
  disabled = false,
  helperText,
  placeholder,
  value,
}: TextFieldProps) {
  const borderColor = genColorBorderFromStatus(status);
  const labelColor = genColorTextFromStatus(status);

  const labelClassName = `${labelColor} block text-sm font-medium `;
  const inputClassName = `${borderColor} shadow-sm  block w-full sm:text-sm rounded-md`;
  return (
    <div className="text-left">
      {label && (
        <label htmlFor="text-field" className={labelClassName}>
          {label}
        </label>
      )}

      <input
        type="text"
        name="text-field"
        id="text-field"
        className={inputClassName}
        placeholder={placeholder}
        aria-describedby="helper-text"
        disabled={disabled}
        defaultValue={value}
      />
      {helperText && (
        <p className="mt-2 text-sm text-gray-500" id="helper-text">
          {helperText}
        </p>
      )}
    </div>
  );
}
