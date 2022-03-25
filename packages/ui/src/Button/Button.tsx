type ButtonProps = {
  title?: string
}

export default function Button({ title = '' }: ButtonProps) {
  return (
    <button
      type="button"
      className="font-bold p-3 h-24 rounded-md border-rose-500 border-2"
    >
      Boooo23223323op, {title}
    </button>
  )
}
