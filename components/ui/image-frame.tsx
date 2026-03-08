import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  overlay?: boolean;
  className?: string;
};

export function ImageFrame({
  src,
  alt,
  aspectRatio = "16/9",
  overlay = false,
  className,
}: ImageFrameProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
