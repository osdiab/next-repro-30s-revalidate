import Link from "next/link";

export default function Home({searchParams}) {
  const { value } = searchParams;
  const randomNumber = Math.random();

  return <div><h1>30s Revalidation Repro: Home</h1>
  <h2>Value: {value}</h2>
  <h2>Random number: {randomNumber}</h2>
  <ul>
    <li><Link href={{query: {value: 1}}}>Set Value to 1</Link></li>
    <li><Link href={{query: {value: 2}}}>Set Value to 2</Link></li>
  </ul>
  </div>
}
