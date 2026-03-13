import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CurationBar } from "@/components/CurationBar";
import { CollectionList } from "@/components/CollectionList";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { categories } from "@/data/collections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CurationBar />
      <main className="mx-auto max-w-5xl pb-8">
        <CollectionList collections={categories.flatMap((c) => c.collections)} />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}
