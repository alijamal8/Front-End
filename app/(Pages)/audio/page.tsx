import AudioPage from '@/components/audioPage/AudioPage'
import { ProductsService } from '@/services/api/product';
import React from 'react';

async function page() {
  const data = await ProductsService.getCategoryProduct("Audio");

  return (
    <div>
      <AudioPage initialProducts={data}/>
    </div>
  )
}

export default page