import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GamesSection from '@/components/GamesSection';
import FeedbackSection from '@/components/FeedbackSection';
import TechStackSection from '@/components/TechStackSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GamesSection />
      <FeedbackSection />
      <TechStackSection />
    </main>
  );
}
