import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import MenuPreview from '@/components/MenuPreview/MenuPreview';
import Gallery from '@/components/Gallery/Gallery';
import Reviews from '@/components/Reviews/Reviews';
import LocationHours from '@/components/LocationHours/LocationHours';
import ReservationForm from '@/components/ReservationForm/ReservationForm';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Gallery />
        <Reviews />
        <LocationHours />
        <ReservationForm />
      </main>
      <Footer />
    </>
  );
}
