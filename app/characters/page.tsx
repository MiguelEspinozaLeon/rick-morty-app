import React, { Suspense } from 'react'
import { getAllCharacters, getAllPages } from '../lib/data'
import Image from 'next/image'
import Pagination from '../components/Pagination'
import Table from '../components/Table'

export default async function Page({
    searchParams
}:{
    searchParams?: {query?: string, page?: string
}}){

    const currentPage = searchParams?.page ? Number(searchParams.page) : 1
    const totalPages = await getAllPages()
    

  return (
    
    <div className='w-full'>
        <div className='flex w-full items-center justify-center'>
            <h1 className='text-3xl'>Rick and Morty Character List</h1>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
            <Table query={currentPage}/>
        </Suspense>
        
        <div className='mt-5 flex w-full justify-center'>
            <Pagination totalPages={totalPages} />
        </div>
    </div>
  
  )
}
