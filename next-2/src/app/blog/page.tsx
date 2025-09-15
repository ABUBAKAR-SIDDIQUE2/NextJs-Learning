'use client'

import { useRouter } from "next/navigation"

export default function Blog(){

    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push("/blog/hi")}>1</button><br /><hr />
            <button onClick={() => router.push("/blog/hello")}>2</button><br /><hr />
            <button onClick={() => router.push("/blog/good")}>3</button><br /><hr />
            <button onClick={() => router.push("/blog/bad")}>4</button><br /><hr />
            <button onClick={() => router.push("/blog/amazing")}>5</button><br /><hr />
            <button onClick={() => router.push("/blog/yup")}>6</button><br /><hr />
            <button onClick={() => router.push("/blog/ayesha")}>7</button><br /><hr />
            <button onClick={() => router.push("/blog/me")}>8</button><br /><hr />
            <button onClick={() => router.push("/blog/you")}>9</button><br /><hr />
        </div>
    )
}