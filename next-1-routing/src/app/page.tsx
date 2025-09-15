import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <Image src="/vercel.svg" alt="vercel" width={100} height={100} />
      <Image src="/globe.svg" alt="globe" width={100} height={100}/>
    </div>
  );
}
