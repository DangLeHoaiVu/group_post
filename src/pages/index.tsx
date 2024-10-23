
import HomePage from "../../components/home";

export default function Home() {
  return (
    <div className="grid grid-row-[20px 1fr 20px] justify-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HomePage />
      </main>
    </div>
  );
}
