type ScoreRank = {
  min: number
  label: string
  message: string
}

const SCORE_RANKS: ScoreRank[] = [
  { min: 50, label: "ガバガバ...",              message: "回答と実際のスケールが大きく乖離しています。\n何回かチャレンジして感覚を磨いていきましょう！" },
  { min: 35, label: "ちょいガバ",               message: "まずまずの感覚ですが、実際のスケールとは結構乖離があるようです。\n身の回りのモノをよく観察してみるといいかもしれません！" },
  { min: 20, label: "凡人",                     message: "人並みのスケール感覚をお持ちです。\nこれからも身の回りのモノのスケールを意識しながら生活していきましょう！" },
  { min: 10, label: "天才的",                   message: "素晴らしいスケール感覚を持っています。\n友人から大体のスケールを聞かれたら得意気に答えてあげましょう！\n（そのような機会があればですが...）" },
  { min:  5, label: "人間スケーラー",            message: "ほぼ狂いのないスケール感覚を持っています。\n先天的なスケーラー搭載型人間です！" },
  { min:  0, label: "人というより計測器そのもの", message: "回答が実際のスケールと完全一致していました。\n...まさか答え見てませんよね？\n完璧すぎるので不正を疑うレベルの感覚です！" },
]

export function getResult(score: number):ScoreRank {
  return SCORE_RANKS.find(rank => score >= rank.min)!
}
