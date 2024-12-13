import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl">Entrainement Next.js</h1>
      <Link href={"/blog"}>Accéder au blog</Link>
    </>
  );
}
