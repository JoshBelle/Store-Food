import { cn } from '@/lib/utils'
import React from 'react'
import Container from './container'
import Image from 'next/image'
import { Button } from '../ui'
import { User, ShoppingCart, ArrowRight } from 'lucide-react'

interface Props {
  classname?: string
}

const Header: React.FC<Props> = ({ classname }) => {
  return (
    <header className={cn('border border-b', classname)}>
      <Container classname="flex items-center justify-between py-8">
        <div className="flex items-center gap-4">
          <Image src="/pizza.svg" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Pizza Store</h1>
            <p className="text-sm text-gray-400 leading-3">
              Вкуснее уже некуда
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Button variant={'outline'} className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 Р</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
