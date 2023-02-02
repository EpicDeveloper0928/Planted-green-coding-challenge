import React from "react";

type TextInputProps = {
  value: string;
  onChangeValue: (value: string) => void;
  className?: string;
  heading?: React.ReactNode;
};

export default function TextInput(props: TextInputProps) {
  return (
    <label
      className={`rounded-md border border-gray-400 px-2 py-1 space-x-2 flex items-center ${props.className}`}
    >
      {props.heading}
      <input
        type={"text"}
        value={props.value}
        onChange={(event) => props.onChangeValue(event.currentTarget.value)}
        className="outline-none w-full"
      />
    </label>
  );
}
