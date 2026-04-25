import { createBrowserRouter } from 'react-router';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0F0F13]">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/projects',
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: '/projects/:id',
    element: (
      <Layout>
        <ProjectDetail />
      </Layout>
    ),
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mb-4 text-[#F5F5F5] font-medium">404 - Page Not Found</h1>
            <p className="text-[#999] mb-6">The page you're looking for doesn't exist.</p>
            <a href="/" className="text-[#6C3FC8] hover:text-[#C4A9F0] transition-colors text-sm">
              Go back home
            </a>
          </div>
        </div>
      </Layout>
    ),
  },
]);