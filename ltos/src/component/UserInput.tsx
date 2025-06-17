import "tailwindcss";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required: boolean;
}

const UserInput = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      required={true}
    />
  );
};

export default UserInput;
