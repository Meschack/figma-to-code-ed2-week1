import { Wrapper } from '@/components/ui/wrapper'
import robotHead from '@@/images/robot-head.png'
import sugarMonkey from '@@/images/sugar-monkey.png'
import linkedStars from '@@/icons/linked-stars.svg'
import arrowRight from '@@/icons/arrow-right.svg'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <Wrapper className='relative flex h-fit flex-col xl:flex-row'>
      <div className='w-fit shrink-0 space-y-4.5 xl:space-y-14'>
        <h1 className='text-base-title text-neutral-600 md:text-middle-title xl:text-big-title'>
          See the NFT <br />
          new world
        </h1>

        <div className='space-y-6.5'>
          <p className='w-2/3 text-base font-semibold text-neutral-400'>
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, di
          </p>

          <div className='flex items-center gap-4 text-neutral-600'>
            <button className='text-base font-semibold'>Discover Vow</button>

            <div className='w-fit rounded-full border border-neutral-600 p-3.5'>
              <Image src={arrowRight} alt='Arrow right' />
            </div>
          </div>
        </div>
      </div>

      <div className='relative mt-5 flex gap-4 *:basis-1/2'>
        <Image
          src={linkedStars}
          className='absolute right-1/2 top-4 translate-x-1/2 md:translate-x-0'
          alt='Linked stars'
        />

        <div className='relative flex'>
          <Image
            src={robotHead}
            alt='A robot head'
            className='mt-auto aspect-[287.58/442.29] w-[287.58px] rounded-184 object-cover'
          />
        </div>

        <div className='relative'>
          <Image
            src={sugarMonkey}
            alt='Sweet monkey'
            className='mb-[150px] aspect-[287.58/442.29] w-[287.58px] rounded-184 object-cover'
          />
        </div>
      </div>
    </Wrapper>
  )
}