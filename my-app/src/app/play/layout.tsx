// 状態管理
import { PlayProvider } from './PlayProvider'
import { PlayFormProvider } from './PlayFormProvider'
// UIコンポーネント
import ControllButtons from './_components/controll-buttons'
import ProgressBar from './_components/progress-bar'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlayProvider>
      <PlayFormProvider>
        {/* 上部：プログレスバー */}
        <ProgressBar />

        {/* 中央：問題 */}
        <div className="flex-1">
          {children}
        </div>

        {/* 下部：操作ボタン */}
        <ControllButtons />
      </PlayFormProvider>
    </PlayProvider>
  )
}
