import Card from "./card";
import CardContent from "./cardcontent";

const schedules = [
  {
    day: "Rab",
    date: "20 Mei 2026",
    price: null,
    unavailable: true,
    active: true,
  },
  {
    day: "Kam",
    date: "21 Mei 2026",
    price: "IDR 3.732.537",
  },
  {
    day: "Jum",
    date: "22 Mei 2026",
    price: "IDR 3.510.124",
  },
  {
    day: "Sab",
    date: "23 Mei 2026",
    price: "IDR 3.945.431",
  },
  {
    day: "Min",
    date: "24 Mei 2026",
    price: "IDR 3.510.124",
  },
  {
    day: "Sen",
    date: "25 Mei 2026",
    price: "IDR 3.510.124",
  },
  {
    day: "Sel",
    date: "26 Mei 2026",
    price: "IDR 4.390.683",
  },
  {
    day: "Rab",
    date: "27 Mei 2026",
    price: "IDR 3.510.124",
  },
];

export default function CardScheduleDestination() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-max">
        {schedules.map((item, index) => (
          <Card
            key={index}
            className={`min-w-[210px] rounded-none border-r ${
              item.active ? "bg-gray-100" : "bg-white"
            }`}
          >
            <CardContent className="text-center">
              {/* Tanggal */}
              <p className="text-gray-600 text-sm font-medium">
                {item.day}, {item.date}
              </p>

              {/* Status / Harga */}
              {item.unavailable ? (
                <p className="text-gray-400 text-2xl font-bold mt-2">
                  Tak Tersedia
                </p>
              ) : (
                <p className="text-black text-2xl font-bold mt-2">
                  {item.price}
                </p>
              )}
            </CardContent>

            {/* Underline aktif */}
            {item.active && (
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-blue-500 rounded-full" />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}