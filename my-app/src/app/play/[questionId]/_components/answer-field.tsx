'use client'

import { useFormContext } from 'react-hook-form'
import { AnswerFormInput } from '@/app/play/schemas/play-form'

export function AnswerField({ unit }: { unit: string } ) {
  const { register, formState: { errors } } = useFormContext<AnswerFormInput>()

  return (
    <div className="basis-1/3 py-2">
      <div className="flex items-center space-x-2">
        <input
          {...register('answer',
            {
              required: "入力してください",
              valueAsNumber: true,
            })
          }
          type="number"
          min="0"
          className="w-1/2 border rounded p-2"
          placeholder="整数"
        />
        <div>{unit}</div>
      </div>

      {errors.answer && (
        <p className="text-red-500 text-sm">
          {errors.answer.message}
        </p>
      )}
    </div>
  )
}
