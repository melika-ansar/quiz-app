interface IOption {
  value: string | number;
  optionContent: string;
}

interface ISelect {
  options: IOption[];
  selectValue: string | number;
  onChange: (value: string | number) => void;
  labelContent?: string;
}

export default function Select({
  options,
  selectValue,
  onChange,
  labelContent,
}: ISelect) {
  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col w-[300px] items-center gap-3">
        <label className=" font-manga font-semibold text-lg mr-[11.5rem]">
          {labelContent}
        </label>
      <select
        value={selectValue}
        onChange={handelChange}
        className="w-[100%] p-2 border border-black border-2 outline-none text-base"
      >
        <option value="default" selected hidden>
          Select
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.optionContent}
          </option>
        ))}
      </select>
    </div>
  );
}
