import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Spinner from './components/Spinner/Spinner';

const About = lazy(() => import('./components/About/About'));
const Services = lazy(() => import('./components/Services/Services'));
const Products = lazy(() => import('./components/Products/Products'));
const Research = lazy(() => import('./components/Research/Research'));
const Stats = lazy(() => import('./components/Stats/Stats'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <About />
            <Services />
            <Products />
            <Research />
            <Stats />
            <Contact />
          </Suspense>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
