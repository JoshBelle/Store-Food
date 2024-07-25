import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface Props {
    classname?: string
}

const Container: React.FC<PropsWithChildren<Props>> = ({ classname, children }) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', classname)}>
      {children}
    </div>
  )
}

export default Container