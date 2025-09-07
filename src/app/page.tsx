import Image from "next/image";

export default function Home() {
  const images = ["/palm.jpg", "/jungle2.jpg", "/plants.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg"];

  return (
    <div className="">
      <div className="absolute bottom-20 flex flex-col items-center justify-center w-full">
        <p> latest </p>
        <Image
            src={images[0]}
            alt="image"
            width={200}
            height={200}
          />
      </div>
    </div>
  );
}
