"use client"
import {CldUploadWidget} from "next-cloudinary"

interface ImageUploadProps{
    disabled?: boolean;
    onChange:(value:string) => void;
    onRemove: (value:string) => void;
    value:string[]
}

import React, { useEffect, useState } from 'react'
import { Button } from './button';
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';

export const ImageUpload:React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])
    if(!isMounted){
        return null;
    }
    const onUpload=(result:any)=>{
        onChange(result.info.secure_url);
    }
    
  return (
    <div>
        <div className='flex items-center mb-4 gap-4 '>
            {
                value.map((url)=>(
                    <div key={url} className='relative w-[200px] h-[200px] rounded-md overflow-hidden'>
                        <div className='z-10 absolute top-2 right-2'>
                            <Button type='button' variant="destructive" size="sm" 
                            onClick={()=>onRemove(url)}
                            >
                            <Trash className="h-4 w-4"/>
                            </Button>

                        </div>
                    <Image
                        alt='image'
                        src={url}
                        fill
                        className='object-cover'
                    />
                    </div>
                ))
            }
        </div>
        <CldUploadWidget onUpload={onUpload} uploadPreset="t4drjppf">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button 
              type="button" 
              disabled={disabled} 
              variant="secondary" 
              onClick={onClick}
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  )
}
