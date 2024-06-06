import VulcanLogin from "../components/VulcanLogin";
import RawDiscordLogin from "@/components/RawDiscordLogin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-36">
      <div className="max-w-5xl w-full items-center justify-around font-mono text-sm lg:flex">
        <RawDiscordLogin />
        <VulcanLogin />
      </div>
    </main>
  );
}
