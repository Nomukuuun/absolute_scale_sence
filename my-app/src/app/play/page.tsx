import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function PlayPage() {

  return (
    <>
      <Link href="/" className="max-w-xs">
        <Button>
          トップページへ戻る（終了する）
        </Button>
      </Link>
    </>
  );
}
