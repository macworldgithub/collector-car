import Image from "next/image";
type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
};

export default function Banner({ image, title, subtitle }: BannerProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={image}
        alt="Banner Background"
        fill
        className="object-cover brightness-50"
        priority
      />

      {/* Overlay Text */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="text-sm md:text-lg mt-2">{subtitle}</p>
      </div>
    </div>
  );
}
