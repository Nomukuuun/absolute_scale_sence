import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Ruler, Weight, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="relative w-screen ml-[50%] -translate-x-[50%] min-h-screen bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15">
      <div className="absolute inset-0 pointer-events-none bg-[url('/top-bg.png')] bg-scroll opacity-10 bg-cover bg-center" />
      {/* Hero Section */}
      <section>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-8">

            {/* Icons */}
            <div className="flex gap-10 items-center">
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-primary/40 rounded-full animate-pulse" />
                <div className="relative bg-card animate-bounce rounded-3xl p-6 shadow-2xl border-4 border-primary/40">
                  <Ruler className="w-16 h-16 md:w-20 md:h-20 text-primary" strokeWidth={2.5} />
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-accent/40 rounded-full animate-pulse" />
                <div className="relative bg-card animate-bounce rounded-3xl p-6 shadow-2xl border-4 border-secondary/40">
                  <Weight className="w-16 h-16 md:w-20 md:h-20 text-secondary" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-balance">
                <span className="text-foreground">絶対スケール感覚</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                あなたのスケール感覚を試してみよう！
                <br />
                直感を信じてレッツトライ！
              </p>
            </div>

            {/* CTA Button */}
            <Link href="/play" className="max-w-md">
              <Button
                size="lg"
                className="text-xl md:text-2xl px-8 md:px-10 py-6 md:py-8 hover:animate-spin rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
              >
                <Sparkles className="size-6 mr-2 md:mr-4" />
                プレイ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <Card className="max-w-3xl mx-auto border-2 border-primary/30 shadow-xl">
          <CardContent className="py-4 px-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-to-play" className="border-none">
                <AccordionTrigger className="flex items-center justify-center text-3xl font-bold text-center hover:no-underline">
                  <span className="text-foreground w-full">遊び方</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-6 pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">表示される問題と画像を見る</h3>
                        <p className="text-muted-foreground">
                          身の回りの一度は見たことがあるモノにまつわる問題と画像が表示されます！
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">スケールを予測する</h3>
                        <p className="text-muted-foreground">
                          画像のモノの重さやサイズを想像しましょう！
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">答えを入力する</h3>
                        <p className="text-muted-foreground">
                          単位に注意しながら、直感で予想を回答欄に入力しましょう！  
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 text-center">
                      <Link href="/play" className="max-w-xs">
                        <Button className="transition-all animate-bounce duration-300 hover:scale-105 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-6 rounded-xl">
                          さっそく始める
                        </Button>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
