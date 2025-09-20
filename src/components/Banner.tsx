import Image from "next/image";

type BannerProps = {
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
  onBannerClick?: () => void;
};

export default function Banner({ image, video, title, subtitle, onBannerClick }: BannerProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
      ) : (
        image && (
          <button
            type="button"
            onClick={() => {
              console.log("Banner button clicked");
              onBannerClick?.();
            }}
            className="absolute inset-0 w-full h-full cursor-pointer p-0 border-0 bg-transparent z-10"
            aria-label="Scroll to gallery"
          >
            <Image
              src={image}
              alt="Banner Background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </button>
        )
      )}

      <div className="relative text-center text-white px-4 z-20 pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-sm md:text-lg mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
}