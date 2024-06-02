"use client";

import Navbar from "@/components/navbar";
import { CldImage, CldUploadButton } from "next-cloudinary";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto h-[200vh]">
        <p>This is Jeff working on next and cloudinary</p>
        <CldUploadButton uploadPreset="hthvgkln" />
        <div className="relative h-[300px] w-[500px]">
          <CldImage
            fill
            src="zkd6psqwlhss13wcfvzg"
            alt="Description of my image"
            className="-z-10"
          />
          <p className="z-10 text-white w-full h-full flex items-center justify-center">
            This is an Image
          </p>
        </div>
      </main>
    </>
  );
}
