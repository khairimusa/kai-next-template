import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-24 max-w-5xl m-auto">
      <Nav />
      <section className="py-24 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Kairi Next Starter</h1>
        <p className="text-xl">This is a starter next js 14+ project</p>
        <div className="flex gap-6 py-6">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>
    </main>
  );
}
