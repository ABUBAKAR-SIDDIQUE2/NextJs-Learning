import Link from "next/link"

export default function Home(){
  return (
    <div className="flex w-full h-16 justify-center items-center bg-blue-400 ">
      <ol className="flex w-full justify-evenly">
        <Link href={"tailwind-1"} prefetch={false} className="text-2xl">Tailwind-1</Link>
        <Link href={"tailwind-2"} prefetch={false} className="text-2xl">Tailwind-2</Link>
        <Link href={"tailwind-3"} prefetch={false} className="text-2xl">Tailwind-3</Link>
        <Link href={"tailwind-4"} prefetch={false} className="text-2xl">Tailwind-4</Link>
      </ol>
    </div>
  )
}