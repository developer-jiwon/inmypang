import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CurationBar } from "@/components/CurationBar";
import { CategorySection } from "@/components/CollectionList";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { WelcomePopup } from "@/components/WelcomePopup";
import { categories } from "@/data/collections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CurationBar />
      <main className="mx-auto max-w-5xl pb-8">
        {categories.map((cat, i) => (
          <CategorySection key={cat.slug} category={cat} index={i} />
        ))}
      </main>
      <Footer />
      <FloatingNav />
      <WelcomePopup />
    </div>
  );
}
