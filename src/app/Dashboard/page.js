import ShowUserInfo from "@/components/ShowUserInfo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-36">
      <Link className="m-24" href={'/'}>Back to Home</Link>
      <div className="max-w-5xl w-full items-center justify-around font-mono text-sm lg:flex">
        <ShowUserInfo />
      </div>
    </main>
  );
}