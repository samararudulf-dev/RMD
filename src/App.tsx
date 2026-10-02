/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteProvider, useSite } from './context/SiteContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { OrderModal } from './components/ui/OrderModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { BackgroundScrollEffects } from './components/ui/BackgroundScrollEffects';

// Pages
import { HomePage } from './pages/HomePage';
import { VpsPage } from './pages/VpsPage';
import { WindowsVpsPage } from './pages/WindowsVpsPage';
import { DedicatedPage } from './pages/DedicatedPage';
import { DataCentresPage } from './pages/DataCentresPage';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { FaqPage } from './pages/FaqPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

const AppContent: React.FC = () => {
  const { currentPage } = useSite();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'vps':
        return <VpsPage />;
      case 'windows-vps':
        return <WindowsVpsPage />;
      case 'dedicated':
        return <DedicatedPage />;
      case 'datacentres':
        return <DataCentresPage />;
      case 'about':
        return <AboutPage />;
      case 'support':
        return <SupportPage />;
      case 'faq':
        return <FaqPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
      case 'privacy':
      case 'aup':
      case 'sla':
        return <LegalPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F5] relative selection:bg-[#FF5500] selection:text-black">
      <BackgroundScrollEffects />
      <Navbar />
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full"
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <OrderModal />
      <AdminDashboard />
    </div>
  );
};

export default function App() {
  return (
    <SiteProvider>
      <AppContent />
    </SiteProvider>
  );
}
