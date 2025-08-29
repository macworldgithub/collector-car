import Image from "next/image";
export default function StockCard() {
    const stockData = {
        title: "Current Stock",
        subtitle:
            "We List Only The Finest, Hand-Selected Sports, Classic And Luxury Cars.",
        buttonText: "View our current stock",
        image: "/cars.jpg",
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
                        className="w-full h-120 object-cover rounded-lg"
                        priority
                    />
                    <div className="absolute inset-0 flex flex-col justify-between items-center text-center px-4 py-6">
                        <div>
                            <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg">
                                {stockData.title}
                            </h2>
                            <p className="text-white text-sm md:text-base font-medium mt-1 drop-shadow-lg">
                                {stockData.subtitle}
                            </p>
                        </div>

                        {/* Button bilkul neeche */}
                        <button className="bg-white text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-200 transition">
                            {stockData.buttonText}
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}
