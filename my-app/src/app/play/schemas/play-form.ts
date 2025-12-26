import { z } from 'zod';

export const answerFormSchema = z.object({
  // 未入力、記号を含む入力をundefinedに変換し、refine条件を「満たさない」ならエラーメッセージを表示
  answer: z.preprocess(
    (v) => (Number.isNaN(v) ? undefined : v),
    z
      .number()
      .gte(0, { message: '0以上の数字を入力してください' })
      .optional()
      .refine((v) => v !== undefined, {
        message: '入力してください',
      })
  ),
});

// preprocessで型変換をしているため、inputとoutputの型を別で定義
export type AnswerFormInput  = z.input<typeof answerFormSchema>;
export type AnswerFormOutput = z.output<typeof answerFormSchema>;
