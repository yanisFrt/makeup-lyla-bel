import { ChangeEvent } from "react";
import Icon from "./Icons";

interface FormInputProps {
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  className?: string;
}

export default function FormInput({
  name,
  value,
  placeholder,
  type = "text",
  required = false,
  onChange,
  textarea = false,
  className = "",
}: FormInputProps) {
  if (textarea) {
    return (
      <div
        className={`flex items-start gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3 ${className}`}
      >
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none resize-none"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 bg-white/60 border border-[#eec6cf] rounded-xl px-4 py-3 ${className}`}
    >
      <Icon name={name} />
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        className="w-full bg-transparent text-[#4b0030] placeholder-[#4b0030]/60 focus:outline-none"
      />
    </div>
  );
}
