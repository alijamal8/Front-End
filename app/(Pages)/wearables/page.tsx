import WearablesPage from '@/components/wearablesPage/WearablesPage'
import { ProductsService } from '@/services/api/product';
import React from 'react';


async function page() {
    const data = await ProductsService.getCategoryProduct("Watches");
   console.log(data)
  return (
    <div>
      <WearablesPage initialProducts={data}/>
    </div>
  )
}

export default page