import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"monster"}>Liste des Monstres</Link>
      <br />
      <Link href={"character"}>Liste des Personnages</Link>
      <br />
      <Link href={"map"}>Liste des Habitats</Link>
      <br />
      <Link href={"place"}>Liste des Lieux</Link>
    </>
  )
}