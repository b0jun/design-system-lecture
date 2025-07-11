interface ILabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: ILabelProps) {
  return (
    <label className="text-sm text-secondary" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
