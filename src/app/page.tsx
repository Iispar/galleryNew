"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const images = ["/palm.jpg", "/jungle2.jpg", "/plants.jpg", "/three.jpg", "/blue.jpg", "/red.jpeg", "/duck.jpg"];
  const [selected, setSelected] = useState<string | null>(null)

  const handleClick = (url: string) => {
    if (!selected) {
      setSelected(url)
      document.body.style.overflow = "hidden"
    }
    else {
      setSelected(null)
      document.body.style.overflow = "auto"
    }
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-screen">
        <div className="absolute bottom-40 height flex flex-col items-center justify-center w-full">
          <p> latest </p>
          <Image
              src={images[0]}
              alt="image"
              width={200}
              height={200}
            />
        </div>
        <div className="absolute bottom-4 w-full text-center">
          all my art
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 px-2">
        {images.map((url, index) => (
          <Image
            key={index}
            onClick={() => handleClick(url)}
            src={url}
            alt="image"
            width={200}
            height={200}
            className={`w-full h-full object-cover`}
          />
        ))}
      </div>
      <div>
        {selected ? 
        <div onClick={() => handleClick(selected!)} className={`fixed px-2 pt-2 w-full h-full left-0 top-0 bg-white/20 backdrop-blur-xs`}>
          <Image
            onClick={() => handleClick(selected!)}
            src={selected!}
            alt="image"
            width={400}
            height={400}
            className={`w-full h-auto`}

          />
          <div className="h-16 flex rounded-xs justify-between align-end p-1 bg-white/0">
            <h1 >
              PAINTING
            </h1>
            <div className="flex flex-col items-end">
              <p>
                200x200
              </p>
              <p>
                01/01/0101
              </p>
            </div>
          </div>
          </div> : <></>
        }
      </div>
    </div>
  );
}
