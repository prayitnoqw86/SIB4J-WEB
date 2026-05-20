import Badge from "./badge";
import Button from "./button";

export default function Card({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  type: string;
  color?: string;
}) {
  return (
    <div className="p-2 bg-gray-50 rounded-2xl">
      <div className="bg-green-200 flex flex-col gap-3 w-90 h-auto p-4 rounded-2xl">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <div className="flex gap-2 flex-col justify-center">
          <div>
            <Badge name="Playground" /><Button />
          </div>
          <Badge name="Playground" /><Button />
          <Badge name="Models" /><Button />
          <Badge name="Documentation" /><Button />
          <Badge name="Setting" /><Button />
        </div>
      </div>
      <div className="flex justify-between p-4 items-center">
        
      </div>
    </div>
  );
}