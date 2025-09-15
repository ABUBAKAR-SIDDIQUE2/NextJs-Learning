'use client'
import { useRouter } from "next/navigation"

export default function dashboard(){

    const router = useRouter()

    return <button onClick={() => router.push('/dashboard/admin')}>go to admin</button>
}