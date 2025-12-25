import { PlayProvider } from './PlayProvider'
import ControllButtons from './_components/controll-buttons'
import ProgressBar from './_components/progress-bar'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlayProvider>
      <div className="flex flex-col space-y-10 min-h-screen p-10">
        {/* 上部：プログレスバー */}
        <ProgressBar />

        {/* 中央：問題 */}
        <div className="flex-1">
          {children}
        </div>

        {/* 下部：操作ボタン */}
        <ControllButtons />
      </div>
    </PlayProvider>
  )
}
