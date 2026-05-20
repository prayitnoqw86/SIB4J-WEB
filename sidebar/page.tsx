import Card from "./_components/card";

export default function CardPage() {
  return (
    <div className="flex gap-2 justify-center items-center text-gray-800 h-screen">
      <Card
        title="Acme Inc"
        description="Enterprise"
        type="Explore"
      />
    </div>
  );
}