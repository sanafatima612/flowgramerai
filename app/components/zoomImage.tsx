"use client";
import Image from "next/image";
import { useScrollZoom } from "./useZoomImage";

const ZoomImage = ({ source }: { source: string }) => {
  const { ref, style } = useScrollZoom(1, 1.4);

  return (
    <div ref={ref} className="w-full mx-auto">
      <Image
        src={source}
        alt="image"
        width={1200}
        height={800}
        style={style}
        className="w-full h-auto"
      />
    </div>
  );
};

export default ZoomImage;
