// 状態管理
import { PlayProvider } from './providers/PlayProvider'
import { PlayFormProvider } from './providers/PlayFormProvider'
// UIコンポーネント
import ControllButtons from './_components/controll-buttons'
import ProgressBar from './_components/progress-bar'
import { CurrentQuestionNumber } from './_components/current-question-number'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-screen ml-[50%] -translate-x-[50%] min-h-screen">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[url('/play-bg.png')] bg-repeat opacity-50" />
      <div className="w-full max-w-md md:max-w-xl mx-auto px-4 bg-white/70 rounded-lg">
        <PlayProvider>
          <PlayFormProvider>
            {/* 上部：プログレスバー */}
            <ProgressBar />

            {/* 中央：問題 */}
            <div className="flex-1">
              <div className="flex flex-col">
                <CurrentQuestionNumber />
                {children}
              </div>
            </div>

            {/* 下部：操作ボタン */}
            <ControllButtons />
          </PlayFormProvider>
        </PlayProvider>
      </div>
    </div>
  )
}
