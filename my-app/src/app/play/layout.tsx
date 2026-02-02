// 状態管理
import { PlayProvider } from './providers/PlayProvider'
import { PlayFormProvider } from './providers/PlayFormProvider'
// UIコンポーネント
import ControllButtons from './_components/controll-buttons'
import ProgressBar from './_components/progress-bar'
import { CurrentQuestionNumber } from './_components/current-question-number'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
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
  )
}
