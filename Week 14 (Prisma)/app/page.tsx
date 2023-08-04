import Image from 'next/image'
import { prisma } from '@/db';
import TodoItem from './TodoItem';
import { revalidateTag } from 'next/cache';

const createToDo = async (data: FormData) => {
  "use server"
  revalidateTag('');

  const formDataValues = {
    title: data.get('title')?.valueOf() as string,
    description: data.get('description')?.valueOf() as string,
    createdAt: data.get('createdAt')?.valueOf() as string
  }

  await prisma.todo.create({
    data: {
      title: formDataValues.title,
      description: formDataValues.description,
      createdAt: new Date(formDataValues.createdAt).toISOString()
    }
  })
  
}

const deleteToDo = async (id: string) => {
  "use server"
  revalidateTag('');

  await prisma.todo.delete({
    where: {
      id
    }
  })
}
 
export default async function Home() {
  const todolist = await prisma.todo.findMany();

  return (
    <main className="flex min-h-screen flex-col justify-center	items-center">
      <h1 className='text-2xl mb-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight'>Create Todo</h1>
      
      <form action={createToDo} className='flex flex-col justify-center	items-center gap-4'>
        <input className='rounded-md border border-2 py-1.5 pl-7 pr-20 text-gray-900' type="text" placeholder='Enter title' name='title' />
        <input className='rounded-md border border-2 py-1.5 pl-7 pr-20 text-gray-900' type="text" placeholder='Enter Description' name='description' />
        <input name='createdAt' type="date" className='rounded-md border border-2 py-1.5 pl-7 pr-20 text-gray-900' placeholder='Select date' />
        <button className='bg-slate-500 rounded-lg text-white border border-2 p-2 w-full'>Create</button>
      </form>
    
      {
        todolist.map((todo, index) => {
          return <TodoItem data={todo} key={index} deleteToDo={deleteToDo} />
        })
      }
    </main>
  )
}
