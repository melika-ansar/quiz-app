interface iButton {
  text: string;
  onClick?: any;
}

export default function Button({text, onClick }: iButton) {
  return (
    <button
      className="bg-black px-5 py-4 text-white font-medium rounded-lg active:scale-95 "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
