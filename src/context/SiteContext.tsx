import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ProductPlan,
  DataCenterLocation,
  FaqItem,
  BlogPost,
  SiteSettings,
  PageId,
  ProductType
} from '../types';
import {
  initialProducts,
  initialDataCenters,
  initialFaqs,
  initialBlogPosts,
  initialSiteSettings
} from '../data/initialData';

interface SiteContextType {
  currentPage: PageId;
  activeBlogSlug: string | null;
  activeLegalTab: 'terms' | 'privacy' | 'aup' | 'sla';
  navigateTo: (page: PageId, extraId?: string) => void;
  products: ProductPlan[];
  locations: DataCenterLocation[];
  faqs: FaqItem[];
  blogs: BlogPost[];
  settings: SiteSettings;
  currency: 'USD' | 'EUR' | 'GBP';
  setCurrency: (c: 'USD' | 'EUR' | 'GBP') => void;
  billingCycle: 'monthly' | 'annually';
  setBillingCycle: (b: 'monthly' | 'annually') => void;
  formatPrice: (usdMonthly: number, usdAnnually?: number) => { amount: string; symbol: string; period: string };
  orderModalPlan: ProductPlan | null;
  openOrderModal: (plan: ProductPlan) => void;
  closeOrderModal: () => void;
  // CMS / Admin methods
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  updateProduct: (plan: ProductPlan) => void;
  addProduct: (plan: ProductPlan) => void;
  deleteProduct: (id: string) => void;
  updateLocation: (loc: DataCenterLocation) => void;
  updateFaq: (faq: FaqItem) => void;
  addFaq: (faq: FaqItem) => void;
  deleteFaq: (id: string) => void;
  updateBlog: (post: BlogPost) => void;
  addBlog: (post: BlogPost) => void;
  deleteBlog: (id: string) => void;
  updateSettings: (newSettings: SiteSettings) => void;
  resetAllToDefault: () => void;
  exportConfigJson: () => string;
  importConfigJson: (jsonStr: string) => boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'rmdhost_products_v1',
  LOCATIONS: 'rmdhost_locations_v1',
  FAQS: 'rmdhost_faqs_v1',
  BLOGS: 'rmdhost_blogs_v1',
  SETTINGS: 'rmdhost_settings_v1',
  CURRENCY: 'rmdhost_currency_v1',
  BILLING_CYCLE: 'rmdhost_billing_cycle_v1'
};

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);
  const [activeLegalTab, setActiveLegalTab] = useState<'terms' | 'privacy' | 'aup' | 'sla'>('terms');

  const [products, setProducts] = useState<ProductPlan[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [locations, setLocations] = useState<DataCenterLocation[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LOCATIONS);
      return saved ? JSON.parse(saved) : initialDataCenters;
    } catch {
      return initialDataCenters;
    }
  });

  const [faqs, setFaqs] = useState<FaqItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAQS);
      return saved ? JSON.parse(saved) : initialFaqs;
    } catch {
      return initialFaqs;
    }
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BLOGS);
      return saved ? JSON.parse(saved) : initialBlogPosts;
    } catch {
      return initialBlogPosts;
    }
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return saved ? JSON.parse(saved) : initialSiteSettings;
    } catch {
      return initialSiteSettings;
    }
  });

  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  const [orderModalPlan, setOrderModalPlan] = useState<ProductPlan | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LOCATIONS, JSON.stringify(locations));
  }, [locations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
  }, [faqs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }, [settings]);

  const navigateTo = (page: PageId, extraId?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    if (page === 'blog' && extraId) {
      setActiveBlogSlug(extraId);
    } else if (page === 'blog' && !extraId) {
      setActiveBlogSlug(null);
    }

    if (page === 'terms' || page === 'privacy' || page === 'aup' || page === 'sla') {
      setActiveLegalTab(page);
    }
  };

  const openOrderModal = (plan: ProductPlan) => {
    setOrderModalPlan(plan);
  };

  const closeOrderModal = () => {
    setOrderModalPlan(null);
  };

  const formatPrice = (usdMonthly: number, usdAnnually?: number) => {
    const isAnn = billingCycle === 'annually';
    let baseUsd = isAnn && usdAnnually !== undefined ? usdAnnually : usdMonthly;

    // Currency conversions
    let symbol = '$';
    let multiplier = 1.0;
    if (currency === 'EUR') {
      symbol = '€';
      multiplier = 0.92;
    } else if (currency === 'GBP') {
      symbol = '£';
      multiplier = 0.78;
    }

    const converted = (baseUsd * multiplier).toFixed(2);
    return {
      amount: converted,
      symbol,
      period: '/mo'
    };
  };

  // CMS functions
  const updateProduct = (updated: ProductPlan) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addProduct = (plan: ProductPlan) => {
    setProducts((prev) => [...prev, plan]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateLocation = (updated: DataCenterLocation) => {
    setLocations((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
  };

  const updateFaq = (updated: FaqItem) => {
    setFaqs((prev) => prev.map((f) => (f.id === updated.id ? updated : f)));
  };

  const addFaq = (faq: FaqItem) => {
    setFaqs((prev) => [...prev, faq]);
  };

  const deleteFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  const updateBlog = (updated: BlogPost) => {
    setBlogs((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
  };

  const addBlog = (post: BlogPost) => {
    setBlogs((prev) => [post, ...prev]);
  };

  const deleteBlog = (id: string) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
  };

  const resetAllToDefault = () => {
    setProducts(initialProducts);
    setLocations(initialDataCenters);
    setFaqs(initialFaqs);
    setBlogs(initialBlogPosts);
    setSettings(initialSiteSettings);
    localStorage.removeItem(STORAGE_KEYS.PRODUCTS);
    localStorage.removeItem(STORAGE_KEYS.LOCATIONS);
    localStorage.removeItem(STORAGE_KEYS.FAQS);
    localStorage.removeItem(STORAGE_KEYS.BLOGS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  };

  const exportConfigJson = () => {
    return JSON.stringify(
      {
        products,
        locations,
        faqs,
        blogs,
        settings,
        exportDate: new Date().toISOString()
      },
      null,
      2
    );
  };

  const importConfigJson = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.products && Array.isArray(data.products)) setProducts(data.products);
      if (data.locations && Array.isArray(data.locations)) setLocations(data.locations);
      if (data.faqs && Array.isArray(data.faqs)) setFaqs(data.faqs);
      if (data.blogs && Array.isArray(data.blogs)) setBlogs(data.blogs);
      if (data.settings) setSettings(data.settings);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <SiteContext.Provider
      value={{
        currentPage,
        activeBlogSlug,
        activeLegalTab,
        navigateTo,
        products,
        locations,
        faqs,
        blogs,
        settings,
        currency,
        setCurrency,
        billingCycle,
        setBillingCycle,
        formatPrice,
        orderModalPlan,
        openOrderModal,
        closeOrderModal,
        isAdminOpen,
        setIsAdminOpen,
        updateProduct,
        addProduct,
        deleteProduct,
        updateLocation,
        updateFaq,
        addFaq,
        deleteFaq,
        updateBlog,
        addBlog,
        deleteBlog,
        updateSettings,
        resetAllToDefault,
        exportConfigJson,
        importConfigJson
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
