import Link from "next/link";

export default function Home() {
  return (
    <main className="py-4 px-48">
      <Link
        className="bg-teal-700 text-black font-medium py-2 px-4 mx-2 rounded-md"
        href={"/menu"}
      >
        menu
      </Link>

      <Link
        className="bg-teal-700 text-black font-medium py-2 px-4 mx-2 rounded-md"
        href={"/contacts"}
      >
        contacts
      </Link>

      <Link
        className="bg-teal-700 text-black font-medium py-2 px-4 mx-2 rounded-md"
        href={"/home"}
      >
        home
      </Link>
    </main>
  );
}
