import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CurationBar } from "@/components/CurationBar";
import { CuratorSection } from "@/components/CuratorSection";
import { CuratorBar } from "@/components/CuratorBar";
import { CollectionList } from "@/components/CollectionList";
import { Footer } from "@/components/Footer";
import { categories } from "@/data/collections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CurationBar />
      <CuratorSection />
      <main className="mx-auto max-w-5xl px-5 pb-8">
        <CollectionList collections={categories.flatMap((c) => c.collections)} />
      </main>
      <Footer />
      <CuratorBar />
    </div>
  );
}
