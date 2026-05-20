import Card from "./_components/cards";

export default function CardPage() {
  return (
    <div className="flex gap-2 justify-center items-center text-gray-800 h-screen">
      <Card
        title="Web Design"
        description="web design friendly"
        type="Explore"
      />
      <Card
        title="UI/UX Design"
        description="user-friendly interfaces"
        type="Explore"
      />
      <Card
        title="Digital Marketing"
        description="strategies for online growth"
        type="Learn"
      />
    </div>
  );
}