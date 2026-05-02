import Image from "next/image";
import Link from "next/link";

export default function StockCard() {
    const stockData = {
        title: "Current Stock",
        subtitle:
            "We List Only The Finest, Hand-Selected Sports, Classic And Luxury Cars.",
        buttonText: "View our current stock",
        image: "/stock-card.jpg",
    };

    return (
        <main className=" flex items-center justify-center bg-gray-200">
            <div className="w-full flex justify-center py-10 px-4">
                <div className="relative w-full max-w-lg shadow-lg">
                    {/* Background Image */}
                    <Image
                        src={stockData.image}
                        alt={stockData.title}
                        width={800}
                        height={600}
                        unoptimized
                        className="w-full h-120 object-cover rounded-lg"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 py-6">
                        {/* Button bilkul neeche */}
                        <Link
                        href="/"
                        className="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-200 transition"
                        >
                        {stockData.buttonText}
                        </Link>
                    </div>

                </div>
            </div>
        </main>
    );
}
