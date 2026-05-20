export default function Badge({ name }: { name: string }) {
  return (
    <div className="rounded-full bg-orange-300 p-1 text-xs">
      <p>{name}</p>
    </div>
  );
}