import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { ProductPlan, DataCenterLocation, FaqItem, BlogPost, SiteSettings, ProductType } from '../../types';
import {
  X,
  Plus,
  Save,
  Trash2,
  Edit2,
  RotateCcw,
  Download,
  Upload,
  Server,
  MapPin,
  HelpCircle,
  BookOpen,
  Settings,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    products,
    updateProduct,
    addProduct,
    deleteProduct,
    locations,
    faqs,
    updateFaq,
    addFaq,
    deleteFaq,
    blogs,
    settings,
    updateSettings,
    resetAllToDefault,
    exportConfigJson,
    importConfigJson
  } = useSite();

  const [activeTab, setActiveTab] = useState<'products' | 'locations' | 'faqs' | 'blogs' | 'settings' | 'backup'>('products');
  const [editingProduct, setEditingProduct] = useState<ProductPlan | null>(null);
  const [editingFaq, setEditingFaq] = useState<FaqItem | null>(null);
  const [tempSettings, setTempSettings] = useState<SiteSettings>(settings);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [importText, setImportText] = useState<string>('');

  if (!isAdminOpen) return null;

  const showToast = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 3000);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    updateProduct(editingProduct);
    setEditingProduct(null);
    showToast('Product specifications updated successfully');
  };

  const handleAddNewProduct = () => {
    const newPlan: ProductPlan = {
      id: `custom-plan-${Date.now()}`,
      type: 'vps',
      name: 'Custom Cloud VPS',
      tagline: 'High-speed custom provisioned compute instance',
      cpu: '2 vCPU Cores',
      cores: 2,
      ram: '4 GB DDR4 ECC',
      storage: '80 GB NVMe Gen4',
      storageType: 'NVMe Gen4',
      bandwidth: '4 TB Bandwidth',
      portSpeed: '1 Gbps Port',
      ipv4: '1 Dedicated IPv4',
      ipv6: '/64 IPv6 Subnet',
      priceMonthly: 12.99,
      priceAnnually: 10.99,
      popular: false,
      featuredFeature: 'Custom Plan',
      availableLocations: ['fra-1', 'ams-1', 'nyc-1'],
      digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=102',
      specs: [
        { label: 'Virtualization', value: 'KVM Enterprise' },
        { label: 'Hardware SLA', value: '99.99% Guaranteed' }
      ],
      osSupported: ['Ubuntu 24.04', 'Debian 12', 'AlmaLinux 9']
    };
    addProduct(newPlan);
    setEditingProduct(newPlan);
    showToast('New plan draft added. Now edit specs.');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(tempSettings);
    showToast('Site settings & SEO meta successfully updated');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative w-full max-w-5xl rounded-2xl border border-[#2E2E2E] bg-[#0E0E0E] shadow-2xl flex flex-col h-[90vh] overflow-hidden">
        {/* Admin Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#141414]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse shadow-sm shadow-[#FF5500]" />
            <div>
              <h2 className="text-lg font-extrabold text-white tracking-tight font-mono">RMDHost Admin & CMS Panel</h2>
              <p className="text-xs text-[#888888]">
                Manage products, pricing, DigitalBerg checkout links, datacenters, FAQs, and SEO
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {statusMessage && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#FF5500]/20 text-[#FF5500] text-xs font-mono font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{statusMessage}</span>
              </div>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[#1C1C1C] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 py-2.5 border-b border-[#222222] bg-[#0A0A0A] overflow-x-auto text-xs font-mono font-medium">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'products' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Products & Prices ({products.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('locations')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'locations' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Datacenters ({locations.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'faqs' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQs ({faqs.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'blogs' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge Base ({blogs.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'settings' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>SEO & Banner</span>
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors ${
              activeTab === 'backup' ? 'bg-[#FF5500] text-black font-bold' : 'text-[#888888] hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export / Backup</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 text-[#D4D4D4]">
          {/* TAB: PRODUCTS */}
          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-extrabold text-white text-base font-sans">Hosting Products & Pricing</h3>
                  <p className="text-xs text-[#888888]">
                    Edit CPU, RAM, disk, monthly/annual price, and DigitalBerg cart link for each plan
                  </p>
                </div>
                <button
                  onClick={handleAddNewProduct}
                  className="px-3 py-1.5 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-bold text-xs font-mono flex items-center gap-1.5 transition-colors shadow-md shadow-[#FF5500]/20"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add New Plan</span>
                </button>
              </div>

              {/* Product Edit Modal / Form Drawer */}
              {editingProduct && (
                <div className="mb-6 p-4 rounded-xl border border-[#FF5500]/40 bg-[#161616] space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[#262626] pb-2">
                    <h4 className="font-bold text-[#FF5500] text-sm">
                      Editing: {editingProduct.name}
                    </h4>
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="text-xs text-[#888888] hover:text-white"
                    >
                      Cancel
                    </button>
                  </div>

                  <form onSubmit={handleSaveProduct} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[#888888] mb-1">Plan Name</label>
                      <input
                        type="text"
                        value={editingProduct.name}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, name: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Product Category</label>
                      <select
                        value={editingProduct.type}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            type: e.target.value as ProductType
                          })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                      >
                        <option value="vps">Linux Cloud VPS</option>
                        <option value="windows-vps">Windows VPS</option>
                        <option value="dedicated">Dedicated Bare Metal</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Tagline</label>
                      <input
                        type="text"
                        value={editingProduct.tagline}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, tagline: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Compute / CPU</label>
                      <input
                        type="text"
                        value={editingProduct.cpu}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, cpu: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">RAM</label>
                      <input
                        type="text"
                        value={editingProduct.ram}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, ram: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Storage</label>
                      <input
                        type="text"
                        value={editingProduct.storage}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, storage: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Price (Monthly USD)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={editingProduct.priceMonthly}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            priceMonthly: parseFloat(e.target.value) || 0
                          })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Price (Annual/mo USD)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={editingProduct.priceAnnually}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            priceAnnually: parseFloat(e.target.value) || 0
                          })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[#888888] mb-1">Bandwidth / Port</label>
                      <input
                        type="text"
                        value={editingProduct.bandwidth}
                        onChange={(e) =>
                          setEditingProduct({ ...editingProduct, bandwidth: e.target.value })
                        }
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                      />
                    </div>

                    <div className="md:col-span-3">
                      <label className="block text-[#888888] mb-1">
                        DigitalBerg Cart / Order URL (Whmcs)
                      </label>
                      <input
                        type="url"
                        value={editingProduct.digitalBergCartUrl}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            digitalBergCartUrl: e.target.value
                          })
                        }
                        placeholder="https://my.digitalberg.com/cart.php?a=add&pid=..."
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white focus:border-[#FF5500]"
                        required
                      />
                    </div>

                    <div className="md:col-span-3 flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 cursor-pointer text-white">
                        <input
                          type="checkbox"
                          checked={editingProduct.popular}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              popular: e.target.checked
                            })
                          }
                          className="rounded text-[#FF5500] focus:ring-[#FF5500]"
                        />
                        <span>Highlight as &ldquo;Popular Choice&rdquo;</span>
                      </label>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingProduct(null)}
                          className="px-3 py-1.5 rounded bg-[#222222] text-[#D4D4D4] hover:bg-[#333333]"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 rounded bg-[#FF5500] hover:bg-[#FF6600] text-black font-bold flex items-center gap-1.5"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Plan</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {/* Plans Table */}
              <div className="rounded-xl border border-[#262626] bg-[#111111] overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#181818] text-[#888888] border-b border-[#262626]">
                    <tr>
                      <th className="py-2.5 px-3">Plan Name</th>
                      <th className="py-2.5 px-3">Category</th>
                      <th className="py-2.5 px-3">CPU / RAM / Disk</th>
                      <th className="py-2.5 px-3">Price (Mo / Ann)</th>
                      <th className="py-2.5 px-3">Order Link</th>
                      <th className="py-2.5 px-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F1F1F]">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-[#161616] transition-colors">
                        <td className="py-2.5 px-3">
                          <span className="font-bold text-white block">{p.name}</span>
                          {p.popular && (
                            <span className="px-1.5 py-0.5 rounded bg-[#FF5500]/20 text-[#FF5500] text-[10px]">
                              POPULAR
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 px-3">
                          <span className="capitalize text-[#A3A3A3]">{p.type}</span>
                        </td>
                        <td className="py-2.5 px-3 text-[#A3A3A3]">
                          <div>{p.cpu}</div>
                          <div>{p.ram} · {p.storage}</div>
                        </td>
                        <td className="py-2.5 px-3 font-semibold text-white">
                          ${p.priceMonthly} / ${p.priceAnnually}
                        </td>
                        <td className="py-2.5 px-3 max-w-[150px] truncate text-[#888888]">
                          <a
                            href={p.digitalBergCartUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#FF5500] hover:underline flex items-center gap-1"
                          >
                            <span>Cart Link</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </td>
                        <td className="py-2.5 px-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setEditingProduct(p)}
                              className="p-1 rounded hover:bg-[#262626] text-[#A3A3A3] hover:text-white"
                              title="Edit"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                if (confirm(`Delete plan ${p.name}?`)) {
                                  deleteProduct(p.id);
                                  showToast('Plan deleted');
                                }
                              }}
                              className="p-1 rounded hover:bg-red-500/20 text-[#A3A3A3] hover:text-red-400"
                              title="Delete"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB: LOCATIONS */}
          {activeTab === 'locations' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-extrabold text-white text-base font-sans">Global Data Center Nodes</h3>
                <p className="text-xs text-[#888888]">
                  Operational Tier-3/4 partner facilities and looking glass test IPs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                {locations.map((loc) => (
                  <div key={loc.id} className="p-4 rounded-xl border border-[#262626] bg-[#111111] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{loc.city}</span>
                      <span className="px-2 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] text-[10px] font-bold">
                        {loc.code}
                      </span>
                    </div>
                    <div className="text-[#888888]">{loc.country} · {loc.facility}</div>
                    <div className="text-[11px] text-[#A3A3A3]">Test IP: {loc.testIp}</div>
                    <div className="text-[11px] text-[#FF5500]">Latency: ~{loc.pingMs} ms</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-white text-base font-sans">Frequently Asked Questions</h3>
                  <p className="text-xs text-[#888888]">
                    Manage categories, customer questions, and detailed policy explanations
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newFaq: FaqItem = {
                      id: `faq-${Date.now()}`,
                      category: 'General',
                      question: 'New Question Title',
                      answer: 'Detailed explanation here.'
                    };
                    addFaq(newFaq);
                    setEditingFaq(newFaq);
                    showToast('New FAQ created');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-bold text-xs font-mono flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add FAQ</span>
                </button>
              </div>

              {editingFaq && (
                <div className="p-4 rounded-xl border border-[#FF5500]/40 bg-[#161616] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#FF5500]">Edit FAQ</span>
                    <button onClick={() => setEditingFaq(null)} className="text-[#888888] hover:text-white">
                      Close
                    </button>
                  </div>
                  <div>
                    <label className="block text-[#888888] mb-1">Category</label>
                    <select
                      value={editingFaq.category}
                      onChange={(e) => setEditingFaq({ ...editingFaq, category: e.target.value as FaqItem['category'] })}
                      className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                    >
                      <option value="General">General</option>
                      <option value="VPS">VPS</option>
                      <option value="Windows">Windows</option>
                      <option value="Dedicated">Dedicated</option>
                      <option value="Billing & Network">Billing & Network</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#888888] mb-1">Question</label>
                    <input
                      type="text"
                      value={editingFaq.question}
                      onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[#888888] mb-1">Answer</label>
                    <textarea
                      rows={3}
                      value={editingFaq.answer}
                      onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                    />
                  </div>
                  <button
                    onClick={() => {
                      updateFaq(editingFaq);
                      setEditingFaq(null);
                      showToast('FAQ updated');
                    }}
                    className="px-3 py-1.5 rounded bg-[#FF5500] hover:bg-[#FF6600] text-black font-bold"
                  >
                    Save FAQ
                  </button>
                </div>
              )}

              <div className="space-y-2">
                {faqs.map((faq) => (
                  <div key={faq.id} className="p-4 rounded-xl border border-[#262626] bg-[#111111] flex items-center justify-between gap-4 text-xs">
                    <div>
                      <span className="px-2 py-0.5 rounded bg-[#1C1C1C] text-[#FF5500] font-mono text-[10px] mr-2">
                        {faq.category}
                      </span>
                      <strong className="text-white font-sans">{faq.question}</strong>
                      <p className="text-[#888888] text-[11px] mt-1 line-clamp-1">{faq.answer}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => setEditingFaq(faq)}
                        className="p-1 rounded hover:bg-[#222222] text-[#888888] hover:text-white"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm('Delete this question?')) {
                            deleteFaq(faq.id);
                            showToast('FAQ removed');
                          }
                        }}
                        className="p-1 rounded hover:bg-red-500/20 text-[#888888] hover:text-red-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: BLOGS */}
          {activeTab === 'blogs' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-extrabold text-white text-base font-sans">Engineering Guides & Knowledge Base</h3>
                <p className="text-xs text-[#888888]">
                  Tutorials covering NVMe optimization, Windows RDP, and security hardening
                </p>
              </div>

              <div className="space-y-3">
                {blogs.map((b) => (
                  <div key={b.id} className="p-4 rounded-xl border border-[#262626] bg-[#111111] space-y-1 text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="text-[#FF5500] font-bold">{b.category}</span>
                      <span className="text-[#737373]">{b.date} · {b.readTime}</span>
                    </div>
                    <h4 className="font-bold text-white text-sm font-sans">{b.title}</h4>
                    <p className="text-[#888888] leading-relaxed">{b.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SETTINGS & SEO */}
          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-4 max-w-2xl font-mono text-xs">
              <div>
                <h3 className="font-extrabold text-white text-base font-sans">Site Branding & SEO Settings</h3>
                <p className="text-xs text-[#888888]">
                  Update company emails, announcement top banner, and metadata
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#888888] mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    value={tempSettings.siteName}
                    onChange={(e) => setTempSettings({ ...tempSettings, siteName: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#888888] mb-1">Production Domain</label>
                  <input
                    type="text"
                    value={tempSettings.siteUrl}
                    onChange={(e) => setTempSettings({ ...tempSettings, siteUrl: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#888888] mb-1">Support Email</label>
                  <input
                    type="email"
                    value={tempSettings.supportEmail}
                    onChange={(e) => setTempSettings({ ...tempSettings, supportEmail: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#888888] mb-1">Sales Email</label>
                  <input
                    type="email"
                    value={tempSettings.salesEmail}
                    onChange={(e) => setTempSettings({ ...tempSettings, salesEmail: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                  />
                </div>
              </div>

              {/* Announcement Top Banner */}
              <div className="p-4 rounded-xl border border-[#262626] bg-[#141414] space-y-3">
                <label className="flex items-center gap-2 cursor-pointer text-white font-bold">
                  <input
                    type="checkbox"
                    checked={tempSettings.bannerEnabled}
                    onChange={(e) => setTempSettings({ ...tempSettings, bannerEnabled: e.target.checked })}
                    className="rounded text-[#FF5500] focus:ring-[#FF5500]"
                  />
                  <span>Display Top Marquee Announcement Bar</span>
                </label>

                {tempSettings.bannerEnabled && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[#888888] mb-1">Banner Announcement Text</label>
                      <input
                        type="text"
                        value={tempSettings.bannerText}
                        onChange={(e) => setTempSettings({ ...tempSettings, bannerText: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[#888888] mb-1">CTA Link Label</label>
                      <input
                        type="text"
                        value={tempSettings.bannerCtaText}
                        onChange={(e) => setTempSettings({ ...tempSettings, bannerCtaText: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-bold flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Site Settings</span>
              </button>
            </form>
          )}

          {/* TAB: BACKUP & RESTORE */}
          {activeTab === 'backup' && (
            <div className="space-y-6 max-w-2xl font-mono text-xs">
              <div>
                <h3 className="font-extrabold text-white text-base font-sans">Configuration Backup & Reset</h3>
                <p className="text-xs text-[#888888]">
                  Export all edited products, locations, and settings to a JSON file or restore defaults
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[#262626] bg-[#111111] space-y-3">
                <h4 className="font-bold text-white font-sans text-sm">Download Backup JSON</h4>
                <p className="text-[#888888]">Save your current database configuration to disk:</p>
                <button
                  onClick={() => {
                    const json = exportConfigJson();
                    const blob = new Blob([json], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `rmdhost-backup-${Date.now()}.json`;
                    a.click();
                    showToast('Configuration exported');
                  }}
                  className="px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#242424] border border-[#2E2E2E] text-white flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Download Backup JSON</span>
                </button>
              </div>

              <div className="p-4 rounded-xl border border-[#262626] bg-[#111111] space-y-3">
                <h4 className="font-bold text-white font-sans text-sm">Restore from JSON</h4>
                <textarea
                  rows={4}
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  placeholder="Paste JSON configuration payload here..."
                  className="w-full px-2.5 py-1.5 rounded bg-black border border-[#2E2E2E] text-white"
                />
                <button
                  onClick={() => {
                    if (importConfigJson(importText)) {
                      showToast('Configuration imported successfully');
                      setImportText('');
                    } else {
                      alert('Invalid JSON configuration');
                    }
                  }}
                  className="px-4 py-2 rounded-lg bg-[#FF5500] hover:bg-[#FF6600] text-black font-bold flex items-center gap-2"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Apply Imported Configuration</span>
                </button>
              </div>

              <div className="p-4 rounded-xl border border-red-500/30 bg-red-950/20 space-y-3">
                <h4 className="font-bold text-red-400 font-sans text-sm">Reset to Initial DigitalBerg Defaults</h4>
                <p className="text-[#888888]">Wipe all local changes and reload pristine seed specifications:</p>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to reset all products, prices, and settings to factory defaults?')) {
                      resetAllToDefault();
                      showToast('Database reset to defaults');
                    }
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600/30 hover:bg-red-600 border border-red-500 text-white font-bold flex items-center gap-2 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
