

interface Iinputs {
  label: string;
  name : string;
  type: string;
  className: string;
  placeHolder: string;
  value?: string;
  onChange ?: any;
}

export default function Inputs({
  label,
  name,
  type,
  className,
  placeHolder,
  value,
  onChange,
}: Iinputs) {
    
  return (
    <div className='flex flex-col gap-1'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
