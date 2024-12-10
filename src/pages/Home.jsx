import Hero from '../components/Hero';
import ExperienceSection from '../components/ExperienceSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pt-20">
        <Hero />
        <ExperienceSection />
      </div>
    </div>
  );
}
