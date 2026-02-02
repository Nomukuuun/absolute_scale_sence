import Image from "next/image"
import { notFound } from "next/navigation"
import { getPixabayImage } from "@/lib/play/get-pixabay-image"

export async function PixabayImage({ pixabayId }: { pixabayId: string }) {
  const hit = await getPixabayImage(pixabayId)
  if (!hit) return notFound()

  return (
    <div className="flex flex-col">
      <div className="relative rounded w-full aspect-[16/9]">
        <Image
          src={hit.largeImageURL}
          alt={hit.tags}
          sizes="(max-width: 768px) 100vw"
          fill
          className="object-contain"
        />
      </div>
      <div className="text-gray-400">
        画像は
        <a href={hit.pageURL} target="_blank" rel="noreferrer" className="underline"> Pixabay </a>
        より取得しています。
      </div>
    </div>
  )
}
