import { Image as ImageType } from '@/types'
import React from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
interface GalleryTabProps{
    image:ImageType
}
const GalleryTab:React.FC<GalleryTabProps> = ({
    image
}) => {
  return (
    <Tab className="relative flex aspect-square items-center 
    cursor-pointer justify-center rounded-md bg-white
    ">   
        {({selected})=>(
            <div>
                <span className='w-full h-full aspect-square inset-0 overflow-hidden rounded-md'>
                    <Image
                        fill
                        src={image.url}
                        alt=''
                        className='object-cover object-center'
                    />

                </span>
                <span
                    className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2",
                    selected?"ring-black":"ring-transparent"
                    )}
                />
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab