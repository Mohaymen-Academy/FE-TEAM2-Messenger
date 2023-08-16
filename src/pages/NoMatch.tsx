import { Button, Paragraph } from '@/components/ui'
import React from 'react'

const NoMatch = () => {
  return (
    <div className="h-full w-full bg-primary grid place-items-center min-h-screen">
      <div className="rounded-lg flex items-center gap-2 p-2">
        <div className="h-60 w-60 bg-secondary rounded-full border-4 border-white flex items-center justify-center text-7xl text-blue shadow-cyan-800 shadow-2xl">
          404
        </div>
        <div className='flex flex-col gap-8 items-center'>
          <Paragraph className="!text-4xl">صفحه مرد نظر پیدا نشد</Paragraph>
          <Paragraph className="!text-4xl">Page Not Found</Paragraph>
          <Button className='p-2'>بازگشت به خانه</Button>
        </div>
      </div>
    </div>
  );
}

export default NoMatch