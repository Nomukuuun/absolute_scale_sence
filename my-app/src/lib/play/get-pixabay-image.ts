type PixabayHit = {
  id: number
  pageURL: string
  tags: string
  previewURL: string
  webformatURL: string
  largeImageURL: string
}

type PixabayResponse = {
  total: number
  totalHits: number
  hits: PixabayHit[]
}

export async function getPixabayImage(pixabayId: string) {
  const key = process.env.PIXABAY_API_KEY
  if (!key) {
    console.log('Pixabay API Keyが設定されていません')
    throw new Error('Pixabay API Keyが設定されていません')
  }

  const url = new URL(`https://pixabay.com/api/?key=${key}&id=${pixabayId}`)

  // Pixabay側のレート制限に合わせてキャッシュ
  const res = await fetch(url, {
    next: { revalidate: 60 * 60 * 24},
  })

  if (!res.ok) {
    throw new Error(await res.text()) // APIエラー内容をそのまま投げる
  }

  const data = (await res.json()) as PixabayResponse
  return data.hits[0] ?? null
}
