import { ProductPlan, DataCenterLocation, FaqItem, BlogPost, SiteSettings } from '../types';

export const initialSiteSettings: SiteSettings = {
  siteName: 'RMDHost',
  siteUrl: 'https://rmdhost.com',
  supportEmail: 'support@rmdhost.com',
  salesEmail: 'sales@rmdhost.com',
  bannerEnabled: true,
  bannerText: 'Deploy Next-Gen NVMe Cloud Instances with 10Gbps Uplinks & 99.99% Network SLA',
  bannerCtaText: 'View Cloud VPS Plans',
  bannerCtaLink: 'vps',
  metaTitle: 'RMDHost – High-Performance VPS, Windows VPS & Dedicated Servers',
  metaDescription: 'Deploy lightning-fast Cloud VPS, NVMe Windows VPS, and Bare Metal Dedicated Servers across global Tier-4 datacenters with 99.99% SLA.',
  defaultCurrency: 'USD',
  globalDiscountAnnualPercent: 20,
  digitalBergBaseUrl: 'https://my.digitalberg.com/cart.php?a=add'
};

export const initialProducts: ProductPlan[] = [
  // 4 VPS Plans (DigitalBerg Cloud VPS Source)
  {
    id: 'vps-nano',
    type: 'vps',
    name: 'Cloud VPS 1',
    tagline: 'Ideal for staging, micro-services and lightweight web apps',
    cpu: '1 vCPU Core',
    cores: 1,
    ram: '2 GB DDR4 ECC',
    storage: '30 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '2 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '1 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 4.99,
    priceAnnually: 3.99,
    popular: false,
    featuredFeature: 'Instant KVM Console',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'sin-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=101',
    specs: [
      { label: 'Virtualization', value: 'KVM Enterprise' },
      { label: 'Hardware SLA', value: '99.99% Guaranteed' },
      { label: 'DDoS Defense', value: 'Up to 3.2 Tbps' },
      { label: 'Root Privileges', value: 'Full Access' },
      { label: 'Automated Backups', value: 'Optional Snapshot' }
    ],
    osSupported: ['Ubuntu 24.04/22.04', 'Debian 12/11', 'AlmaLinux 9', 'Rocky Linux 9', 'CentOS Stream']
  },
  {
    id: 'vps-standard',
    type: 'vps',
    name: 'Cloud VPS 2',
    tagline: 'The sweet spot for production APIs, CMS portals and Docker workloads',
    cpu: '2 vCPU Cores',
    cores: 2,
    ram: '4 GB DDR4 ECC',
    storage: '60 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '4 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '1 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 9.99,
    priceAnnually: 7.99,
    popular: true,
    featuredFeature: 'Most Popular for Devs',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'lax-1', 'sin-1', 'tyo-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=102',
    specs: [
      { label: 'Virtualization', value: 'KVM Enterprise' },
      { label: 'Hardware SLA', value: '99.99% Guaranteed' },
      { label: 'DDoS Defense', value: 'Up to 3.2 Tbps' },
      { label: 'Root Privileges', value: 'Full Access' },
      { label: 'Automated Backups', value: 'Daily Snapshot Available' }
    ],
    osSupported: ['Ubuntu 24.04/22.04', 'Debian 12/11', 'AlmaLinux 9', 'Rocky Linux 9', 'CentOS Stream']
  },
  {
    id: 'vps-pro',
    type: 'vps',
    name: 'Cloud VPS 3',
    tagline: 'High compute performance for databases, clustered nodes and SaaS',
    cpu: '4 vCPU Cores',
    cores: 4,
    ram: '8 GB DDR4 ECC',
    storage: '120 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '6 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '1 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 19.99,
    priceAnnually: 15.99,
    popular: false,
    featuredFeature: 'Ultra-low I/O Latency',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'lax-1', 'sin-1', 'tyo-1', 'syd-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=103',
    specs: [
      { label: 'Virtualization', value: 'KVM Enterprise' },
      { label: 'Hardware SLA', value: '99.99% Guaranteed' },
      { label: 'DDoS Defense', value: 'Up to 3.2 Tbps' },
      { label: 'Root Privileges', value: 'Full Access' },
      { label: 'Automated Backups', value: 'Automated Daily Snapshots' }
    ],
    osSupported: ['Ubuntu 24.04/22.04', 'Debian 12/11', 'AlmaLinux 9', 'Rocky Linux 9', 'CentOS Stream']
  },
  {
    id: 'vps-ultra',
    type: 'vps',
    name: 'Cloud VPS 4',
    tagline: 'Enterprise-grade RAM and multithreaded capacity for heavy traffic',
    cpu: '8 vCPU Cores',
    cores: 8,
    ram: '16 GB DDR4 ECC',
    storage: '240 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '10 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '2 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 38.99,
    priceAnnually: 31.99,
    popular: false,
    featuredFeature: 'Includes 2 IPv4 Addresses',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'lax-1', 'sin-1', 'tyo-1', 'syd-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=104',
    specs: [
      { label: 'Virtualization', value: 'KVM Enterprise' },
      { label: 'Hardware SLA', value: '99.99% Guaranteed' },
      { label: 'DDoS Defense', value: 'Up to 3.2 Tbps' },
      { label: 'Root Privileges', value: 'Full Access' },
      { label: 'Automated Backups', value: 'Priority Recovery SLA' }
    ],
    osSupported: ['Ubuntu 24.04/22.04', 'Debian 12/11', 'AlmaLinux 9', 'Rocky Linux 9', 'CentOS Stream']
  },

  // 4 Windows VPS Plans (DigitalBerg Windows VPS Source)
  {
    id: 'win-vps-1',
    type: 'windows-vps',
    name: 'Windows VPS 1',
    tagline: 'Affordable licensed Windows remote desktop for 24/7 automation & trading',
    cpu: '2 vCPU Cores',
    cores: 2,
    ram: '4 GB DDR4 ECC',
    storage: '80 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '3 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '1 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 14.99,
    priceAnnually: 11.99,
    popular: false,
    featuredFeature: 'Official Windows License',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=201',
    specs: [
      { label: 'License Included', value: 'Windows Server 2022 / 2019' },
      { label: 'Remote Access', value: 'High-Speed RDP (Remote Desktop)' },
      { label: 'Forex & MT4/MT5', value: '100% Ready' },
      { label: 'Administrator', value: 'Full Administrator Privileges' },
      { label: 'Uptime SLA', value: '99.99% Guaranteed' }
    ],
    osSupported: ['Windows Server 2022 Standard', 'Windows Server 2019 Standard', 'Windows 10/11 Pro (Custom)']
  },
  {
    id: 'win-vps-2',
    type: 'windows-vps',
    name: 'Windows VPS 2',
    tagline: 'Balanced multithreaded capacity for ASP.NET apps, IIS web server and MSSQL',
    cpu: '4 vCPU Cores',
    cores: 4,
    ram: '8 GB DDR4 ECC',
    storage: '150 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '5 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '1 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 26.99,
    priceAnnually: 21.99,
    popular: true,
    featuredFeature: 'Best for Forex EA & Business Tools',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'lax-1', 'sin-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=202',
    specs: [
      { label: 'License Included', value: 'Windows Server 2022 / 2019' },
      { label: 'Remote Access', value: 'High-Speed RDP (Remote Desktop)' },
      { label: 'Forex & MT4/MT5', value: 'Optimized Multi-Terminal' },
      { label: 'Administrator', value: 'Full Administrator Privileges' },
      { label: 'Uptime SLA', value: '99.99% Guaranteed' }
    ],
    osSupported: ['Windows Server 2022 Standard', 'Windows Server 2019 Standard']
  },
  {
    id: 'win-vps-3',
    type: 'windows-vps',
    name: 'Windows VPS 3',
    tagline: 'High memory allocation for corporate ERP, QuickBooks, Active Directory & Teams',
    cpu: '6 vCPU Cores',
    cores: 6,
    ram: '16 GB DDR4 ECC',
    storage: '250 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '8 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '2 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 49.99,
    priceAnnually: 39.99,
    popular: false,
    featuredFeature: 'Dual IPv4 + 16GB Memory',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'lax-1', 'sin-1', 'tyo-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=203',
    specs: [
      { label: 'License Included', value: 'Windows Server 2022 / 2019' },
      { label: 'Remote Access', value: 'High-Speed RDP Multi-User' },
      { label: 'Database', value: 'SQL Server Express / Web Ready' },
      { label: 'Administrator', value: 'Full Administrator Privileges' },
      { label: 'Uptime SLA', value: '99.99% Guaranteed' }
    ],
    osSupported: ['Windows Server 2022 Standard', 'Windows Server 2019 Standard']
  },
  {
    id: 'win-vps-4',
    type: 'windows-vps',
    name: 'Windows VPS 4',
    tagline: 'Powerhouse workstation performance with 32 GB RAM and 450 GB NVMe',
    cpu: '8 vCPU Cores',
    cores: 8,
    ram: '32 GB DDR4 ECC',
    storage: '450 GB NVMe Gen4',
    storageType: 'NVMe Gen4',
    bandwidth: '12 TB Bandwidth',
    portSpeed: '1 Gbps Port',
    ipv4: '2 Dedicated IPv4',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 89.99,
    priceAnnually: 71.99,
    popular: false,
    featuredFeature: 'Heavy Multi-User Terminal Server',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'lax-1', 'sin-1', 'tyo-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=204',
    specs: [
      { label: 'License Included', value: 'Windows Server 2022 / 2019' },
      { label: 'Remote Access', value: 'High-Speed RDP Terminal' },
      { label: 'Hardware Acceleration', value: 'Dedicated CPU Execution' },
      { label: 'Administrator', value: 'Full Administrator Privileges' },
      { label: 'Uptime SLA', value: '99.99% Guaranteed' }
    ],
    osSupported: ['Windows Server 2022 Standard', 'Windows Server 2019 Standard']
  },

  // 4 Dedicated Server Plans (DigitalBerg Dedicated Server Source)
  {
    id: 'dedi-entry',
    type: 'dedicated',
    name: 'Bare Metal E-2276G',
    tagline: 'High-frequency single-thread speed for game servers, high-speed web apps & trade routing',
    cpu: 'Intel Xeon E-2276G (6c / 12t @ 3.8GHz - 4.9GHz Boost)',
    cores: 6,
    ram: '32 GB DDR4 ECC 2666MHz',
    storage: '2x 512 GB NVMe SSD (RAID 1)',
    storageType: 'Enterprise NVMe',
    bandwidth: '30 TB Bandwidth',
    portSpeed: '1 Gbps Dedicated Port',
    ipv4: '5 Usable IPv4 (/29)',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 99.00,
    priceAnnually: 89.00,
    popular: false,
    featuredFeature: 'Up to 4.9 GHz Turbo Frequency',
    availableLocations: ['fra-1', 'ams-1', 'nyc-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=301',
    specs: [
      { label: 'Hardware IPMI / iDRAC', value: 'Included (Virtual Media)' },
      { label: 'DDoS Mitigation', value: '3.2 Tbps Always-On Inline' },
      { label: 'Network SLA', value: '100% Core Network SLA' },
      { label: 'Hardware Replacement', value: '2-Hour Guarantee' },
      { label: 'OS Choices', value: 'Linux, Windows, Proxmox, ESXi' }
    ],
    osSupported: ['Proxmox VE', 'VMware ESXi', 'Ubuntu 24.04 Server', 'Debian 12', 'AlmaLinux 9', 'Windows Server 2022']
  },
  {
    id: 'dedi-epyc',
    type: 'dedicated',
    name: 'Bare Metal EPYC 7302P',
    tagline: '16 Cores / 32 Threads Zen 2 powerhouse with dual 1TB Enterprise NVMe',
    cpu: 'AMD EPYC 7302P (16c / 32t @ 3.0GHz - 3.3GHz)',
    cores: 16,
    ram: '64 GB DDR4 ECC Registered',
    storage: '2x 1 TB Enterprise NVMe (RAID 1)',
    storageType: 'Enterprise NVMe',
    bandwidth: '50 TB Bandwidth',
    portSpeed: '1 Gbps Dedicated Port',
    ipv4: '5 Usable IPv4 (/29)',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 159.00,
    priceAnnually: 139.00,
    popular: true,
    featuredFeature: 'Best Value Virtualization Node',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=302',
    specs: [
      { label: 'Hardware IPMI / BMC', value: 'HTML5 KVM over IP Included' },
      { label: 'DDoS Mitigation', value: '3.2 Tbps Always-On Inline' },
      { label: 'Network SLA', value: '100% Core Network SLA' },
      { label: 'Hardware Replacement', value: '2-Hour Guarantee' },
      { label: 'Hypervisor Ready', value: 'Native Proxmox VE / KVM' }
    ],
    osSupported: ['Proxmox VE', 'VMware ESXi', 'Ubuntu 24.04 Server', 'Debian 12', 'AlmaLinux 9', 'Windows Server 2022']
  },
  {
    id: 'dedi-dual-xeon',
    type: 'dedicated',
    name: 'Bare Metal Dual Xeon 4210',
    tagline: 'Dual-socket Intel Xeon system with 128 GB ECC memory and massive I/O bandwidth',
    cpu: '2x Intel Xeon Silver 4210 (20c / 40t total @ 2.2GHz - 3.2GHz)',
    cores: 20,
    ram: '128 GB DDR4 ECC Registered',
    storage: '2x 1.92 TB Datacenter NVMe U.2',
    storageType: 'Enterprise NVMe',
    bandwidth: 'Unmetered 1 Gbps (or 100TB on 10G)',
    portSpeed: '1 Gbps Unmetered',
    ipv4: '5 Usable IPv4 (/29)',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 229.00,
    priceAnnually: 199.00,
    popular: false,
    featuredFeature: 'Unmetered Bandwidth + 128GB RAM',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1', 'dfw-1', 'sin-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=303',
    specs: [
      { label: 'Hardware IPMI / BMC', value: 'Supermicro IPMI v2.0' },
      { label: 'DDoS Mitigation', value: 'Enterprise Corero 3.2 Tbps' },
      { label: 'Network SLA', value: '100% Core Network SLA' },
      { label: 'Hardware Replacement', value: '2-Hour Guarantee' },
      { label: 'Private VLAN', value: 'Free Inter-Rack 10G Network' }
    ],
    osSupported: ['Proxmox VE', 'VMware ESXi', 'Ubuntu 24.04 Server', 'Debian 12', 'AlmaLinux 9', 'Windows Server 2022']
  },
  {
    id: 'dedi-epyc-monster',
    type: 'dedicated',
    name: 'Bare Metal EPYC 7702',
    tagline: 'Massive compute beast with 64 Cores / 128 Threads and 256 GB RAM for enterprise clouds',
    cpu: 'AMD EPYC 7702 (64c / 128t @ 2.0GHz - 3.35GHz)',
    cores: 64,
    ram: '256 GB DDR4 ECC 3200MHz',
    storage: '4x 1.92 TB NVMe Hardware RAID 10',
    storageType: 'Hardware RAID',
    bandwidth: 'Unmetered 1 Gbps (Burst to 10G)',
    portSpeed: '10 Gbps Uplink (1G Comm)',
    ipv4: '13 Usable IPv4 (/28 Subnet)',
    ipv6: '/64 IPv6 Subnet',
    priceMonthly: 349.00,
    priceAnnually: 299.00,
    popular: false,
    featuredFeature: '64 Cores / 128 Threads / 256GB RAM',
    availableLocations: ['fra-1', 'ams-1', 'lon-1', 'nyc-1'],
    digitalBergCartUrl: 'https://my.digitalberg.com/cart.php?a=add&pid=304',
    specs: [
      { label: 'Hardware IPMI / BMC', value: 'Dedicated KVM over IP with Virtual Media' },
      { label: 'DDoS Mitigation', value: '3.2 Tbps Always-On Inline' },
      { label: 'Network SLA', value: '100% Core Network SLA' },
      { label: 'Hardware Replacement', value: '1-Hour Priority SLA' },
      { label: 'Custom Subnets', value: 'BGP Anycast / BYOIP Allowed' }
    ],
    osSupported: ['Proxmox VE', 'VMware ESXi', 'Ubuntu 24.04 Server', 'Debian 12', 'AlmaLinux 9', 'Windows Server 2022', 'Custom ISO']
  }
];

export const initialDataCenters: DataCenterLocation[] = [
  {
    id: 'fra-1',
    code: 'FRA-1',
    city: 'Frankfurt',
    country: 'Germany',
    region: 'Europe',
    facility: 'Equinix FR5 (Kleyerstrasse)',
    tier: 'Tier 3+ Certified',
    testIp: '185.193.124.5',
    pingMs: 14,
    coordinates: { x: 50.5, y: 32 },
    productsAvailable: ['vps', 'windows-vps', 'dedicated'],
    ddosCapacity: '3.2 Tbps Corero SmartWall',
    transitProviders: ['DE-CIX', 'Telia / Arelion', 'Deutsche Telekom', 'NTT'],
    powerRedundancy: '2N + 1 UPS & Diesel Generators'
  },
  {
    id: 'ams-1',
    code: 'AMS-1',
    city: 'Amsterdam',
    country: 'Netherlands',
    region: 'Europe',
    facility: 'Iron Mountain AMS-1 (Haarlem)',
    tier: 'Tier 3+ Certified',
    testIp: '194.36.191.10',
    pingMs: 16,
    coordinates: { x: 49.5, y: 30 },
    productsAvailable: ['vps', 'windows-vps', 'dedicated'],
    ddosCapacity: '3.2 Tbps Corero SmartWall',
    transitProviders: ['AMS-IX', 'NL-IX', 'Lumen / CenturyLink', 'GTT'],
    powerRedundancy: '2N Redundant UPS'
  },
  {
    id: 'lon-1',
    code: 'LON-1',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    facility: 'Telehouse North Two (Docklands)',
    tier: 'Tier 4 Standard',
    testIp: '185.228.136.2',
    pingMs: 19,
    coordinates: { x: 47, y: 31 },
    productsAvailable: ['vps', 'windows-vps', 'dedicated'],
    ddosCapacity: '3.2 Tbps Always-On',
    transitProviders: ['LINX', 'LONAP', 'Arelion', 'Colt Technology'],
    powerRedundancy: 'N+N Diverse Power Feeds'
  },
  {
    id: 'nyc-1',
    code: 'NYC-1',
    city: 'New York',
    country: 'United States',
    region: 'North America',
    facility: 'CoreSite NY2 (Secaucus)',
    tier: 'Tier 3+ Certified',
    testIp: '198.244.178.5',
    pingMs: 76,
    coordinates: { x: 28, y: 36 },
    productsAvailable: ['vps', 'windows-vps', 'dedicated'],
    ddosCapacity: '2.8 Tbps Inline Scrubbing',
    transitProviders: ['NYIIX', 'Telia Carrier', 'Cogent', 'Zayo'],
    powerRedundancy: 'N+1 Backup Systems'
  },
  {
    id: 'dfw-1',
    code: 'DFW-1',
    city: 'Dallas',
    country: 'United States',
    region: 'North America',
    facility: 'Equinix DA11 (Infomart Dallas)',
    tier: 'Tier 3+ Certified',
    testIp: '142.44.215.12',
    pingMs: 98,
    coordinates: { x: 22, y: 44 },
    productsAvailable: ['vps', 'windows-vps', 'dedicated'],
    ddosCapacity: '2.5 Tbps Inline Scrubbing',
    transitProviders: ['MegaPort', 'Arelion', 'Hurricane Electric', 'Level 3'],
    powerRedundancy: '2N Redundant Transformer'
  },
  {
    id: 'lax-1',
    code: 'LAX-1',
    city: 'Los Angeles',
    country: 'United States',
    region: 'North America',
    facility: 'CoreSite LA1 (One Wilshire)',
    tier: 'Tier 4 Standard',
    testIp: '199.195.250.3',
    pingMs: 132,
    coordinates: { x: 15, y: 41 },
    productsAvailable: ['vps', 'windows-vps'],
    ddosCapacity: '3.0 Tbps Low-Latency Filtering',
    transitProviders: ['Any2 West', 'NTT Communications', 'Telstra', 'GTT'],
    powerRedundancy: 'N+2 Generation Plants'
  },
  {
    id: 'sin-1',
    code: 'SIN-1',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    facility: 'Equinix SG3 (Ayer Rajah Crescent)',
    tier: 'Tier 3+ Certified',
    testIp: '139.99.120.4',
    pingMs: 168,
    coordinates: { x: 78, y: 56 },
    productsAvailable: ['vps', 'windows-vps', 'dedicated'],
    ddosCapacity: '2.4 Tbps Regional Scrubbing',
    transitProviders: ['SGIX', 'Singtel', 'Tata Communications', 'PCCW Global'],
    powerRedundancy: '2N UPS & Emergency Turbines'
  },
  {
    id: 'tyo-1',
    code: 'TYO-1',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia-Pacific',
    facility: 'Equinix TY8 (Heiwajima)',
    tier: 'Tier 3+ Certified',
    testIp: '103.102.160.8',
    pingMs: 184,
    coordinates: { x: 86, y: 40 },
    productsAvailable: ['vps', 'windows-vps'],
    ddosCapacity: '2.0 Tbps Regional Scrubbing',
    transitProviders: ['JPIX', 'BBIX', 'KDDI', 'NTT'],
    powerRedundancy: 'Dual Substation Feeds'
  },
  {
    id: 'syd-1',
    code: 'SYD-1',
    city: 'Sydney',
    country: 'Australia',
    region: 'Asia-Pacific',
    facility: 'NEXTDC S1 (Macquarie Park)',
    tier: 'Tier 4 Certified',
    testIp: '139.99.130.12',
    pingMs: 215,
    coordinates: { x: 89, y: 78 },
    productsAvailable: ['vps', 'windows-vps'],
    ddosCapacity: '2.0 Tbps Regional Scrubbing',
    transitProviders: ['MegaPort', 'Telstra', 'Optus', 'Aussie Broadband'],
    powerRedundancy: '100% Guaranteed Uptime Infrastructure'
  }
];

export const initialFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How fast will my server be provisioned after payment?',
    answer: 'Cloud VPS and Windows VPS instances are provisioned automatically within 60 to 120 seconds after transaction clearance. Bare Metal Dedicated servers that are in stock deploy within 1 to 4 hours. You receive complete credentials, root/administrator access and KVM console links in your customer email immediately.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'What is your network uptime guarantee?',
    answer: 'RMDHost provides an enterprise 99.99% Network and Power Service Level Agreement (SLA). If we ever fall below this threshold in any calendar month, you are entitled to service credits as outlined in our SLA policy.'
  },
  {
    id: 'faq-3',
    category: 'General',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, Bank Wire Transfer (SEPA & SWIFT), and cryptocurrency (Bitcoin, Ethereum, USDT) via our secure checkout gateway.'
  },
  {
    id: 'faq-4',
    category: 'VPS',
    question: 'Can I upgrade or resize my Cloud VPS later without losing data?',
    answer: 'Yes. You can scale your vCPU, RAM, and NVMe disk up directly from your management dashboard with a 60-second reboot. All your files, IP allocations, and system configurations remain intact.'
  },
  {
    id: 'faq-5',
    category: 'VPS',
    question: 'Do you offer root access and KVM out-of-band console?',
    answer: 'Every Cloud VPS comes with 100% full root privileges, dedicated IPv4, native /64 IPv6, and an HTML5 out-of-band VNC/KVM console so you never lose connection even during firewall or kernel modifications.'
  },
  {
    id: 'faq-6',
    category: 'Windows',
    question: 'Is the Windows Server license included in the price?',
    answer: 'Yes! All RMDHost Windows VPS plans include a genuine, fully activated Microsoft Windows Server license (choose between Windows Server 2022 Standard or 2019 Standard at deployment). There are zero hidden licensing fees.'
  },
  {
    id: 'faq-7',
    category: 'Windows',
    question: 'Can I use Windows VPS for 24/7 Forex trading, MT4/MT5, and automated bots?',
    answer: 'Yes, our Windows VPS environments are specifically tuned for low-latency financial trading and automated tasks. The server stays online 24/7/365 with uninterrupted power, high-frequency execution, and fast RDP connectivity from PC, Mac, iOS, or Android.'
  },
  {
    id: 'faq-8',
    category: 'Dedicated',
    question: 'What IPMI / out-of-band hardware management comes with Dedicated Servers?',
    answer: 'All RMDHost Bare Metal Dedicated Servers include dedicated remote management hardware (Supermicro IPMI, Dell iDRAC, or HP iLO) with HTML5 virtual console, virtual media mounting (boot custom ISOs), temperature telemetry, and power cycling.'
  },
  {
    id: 'faq-9',
    category: 'Dedicated',
    question: 'Can I order additional usable IPv4 subnets or bring my own IP (BYOIP)?',
    answer: 'Yes, you can order additional IPv4 blocks (/29, /28, /27, /26) with valid RIPE/ARIN justification. We also support BGP Anycast announcements and BYOIP (Bring Your Own IP) on dedicated server VLANs upon request.'
  },
  {
    id: 'faq-10',
    category: 'Billing & Network',
    question: 'What is your refund and cancellation policy?',
    answer: 'We provide an unconditional 30-day money-back guarantee for all new Cloud VPS and Windows VPS subscriptions. Dedicated servers, IP allocation fees, and custom hardware configurations are non-refundable once racked and provisioned.'
  },
  {
    id: 'faq-11',
    category: 'Billing & Network',
    question: 'How does your DDoS mitigation protect my services?',
    answer: 'All RMDHost traffic passes through multi-tier inline Corero SmartWall & Arbor scrubbing centers capable of filtering volumetric attacks exceeding 3.2 Tbps. Layer 3, 4, and Layer 7 malicious traffic is scrubbed in sub-second time without injecting latency into genuine visitors.'
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'optimizing-mysql-on-nvme-vps',
    title: 'Benchmarking & Tuning MySQL 8 on High-Performance NVMe Cloud VPS',
    category: 'Infrastructure & Linux',
    readTime: '6 min read',
    date: 'Sep 28, 2026',
    author: 'DevOps Engineering Team',
    excerpt: 'How to configure InnoDB buffer pool, I/O threads, and Linux kernel sysctl parameters to achieve over 45,000 QPS on NVMe Gen4 storage.',
    content: `Running database workloads on virtualized cloud instances requires thoughtful kernel parameters and disk scheduler calibration. With NVMe Gen4 storage delivering random read/write speeds over 5,000 MB/s, default Linux I/O configurations often become the bottleneck rather than the hardware itself.\n\n### 1. Tune the Linux I/O Scheduler\nFor modern NVMe block devices, verify that the 'none' or 'mq-deadline' scheduler is active:\n\`\`\`bash\ncat /sys/block/nvme0n1/queue/scheduler\n# Recommended: [none] mq-deadline\n\`\`\`\n\n### 2. Calibrate innodb_buffer_pool_size\nAllocate approximately 70-80% of your VPS available RAM to MySQL's InnoDB buffer pool. For an 8GB VPS, set:\n\`\`\`ini\n[mysqld]\ninnodb_buffer_pool_size = 6G\ninnodb_buffer_pool_instances = 6\ninnodb_flush_log_at_trx_commit = 2\ninnodb_flush_method = O_DIRECT\ninnodb_io_capacity = 20000\ninnodb_io_capacity_max = 40000\n\`\`\`\n\nWith these settings applied on RMDHost Cloud VPS 3, IOPS throughput improved by 312% with sub-millisecond query response.`
  },
  {
    id: 'blog-2',
    slug: 'securing-windows-server-2022-rdp',
    title: 'Securing Windows Server 2022 Remote Desktop (RDP) Against Brute Force',
    category: 'Windows & Security',
    readTime: '5 min read',
    date: 'Sep 15, 2026',
    author: 'Security Operations Center',
    excerpt: 'Step-by-step hardening guide for Windows Server RDP: Changing port 3389, configuring Network Level Authentication (NLA), and auto-lockout policies.',
    content: `Windows VPS servers are exceptionally powerful for 24/7 trading, remote offices, and automation. However, exposing the default RDP port (3389) directly to the public internet will attract automated credential stuffers within minutes.\n\n### 1. Enforce Network Level Authentication (NLA)\nNLA forces users to authenticate against Windows before a full graphical session is spawned, mitigating denial of service attacks.\n\n### 2. Configure Windows Defender Account Lockout\nNavigate to Local Security Policy -> Account Policies -> Account Lockout Policy:\n- Account lockout threshold: 5 invalid attempts\n- Account lockout duration: 30 minutes\n- Reset account lockout counter after: 30 minutes\n\n### 3. Implement IP Whitelisting in Windows Firewall\nIf you have a static office or home IP, restrict inbound port 3389 connections exclusively to your IP address.`
  },
  {
    id: 'blog-3',
    slug: 'why-bare-metal-beats-public-cloud-compute-costs',
    title: 'Why Bare Metal Dedicated Hardware Beats Public Cloud for Predictable Workloads',
    category: 'Enterprise Hardware',
    readTime: '7 min read',
    date: 'Aug 29, 2026',
    author: 'Systems Architecture Group',
    excerpt: 'Analyzing the total cost of ownership (TCO) between hyperscalers (AWS/Azure) egress fees versus flat-rate dedicated bare metal nodes.',
    content: `Hyperscalers excel at unpredictable bursts, but when running continuous compute, container clusters, or high-bandwidth video/storage services, egress charges and noisy neighbors quickly drive monthly bills into thousands of dollars.\n\nOn RMDHost's Bare Metal EPYC 7302P ($159/mo), you receive 16 physical cores, 64 GB ECC RAM, and 50 TB of bandwidth included. Comparable bandwidth on major public clouds costs upwards of $4,000 alone. Bare metal eliminates hypervisor overhead and provides deterministic performance.`
  }
];

export const legalDocuments = {
  terms: {
    title: 'Terms of Service',
    effectiveDate: 'October 1, 2026',
    content: `
### 1. Agreement & Acceptance
Welcome to RMDHost.com ("RMDHost", "we", "our", or "us"). By registering an account, purchasing any product, or utilizing our Cloud VPS, Windows VPS, Bare Metal Dedicated Server, or network connectivity services (collectively, the "Services"), you agree to be legally bound by these Terms of Service. If you do not agree, you must immediately terminate use of the Services.

### 2. Account Security & Verification
You must provide accurate, current, and verifiable information during registration. You are solely responsible for safeguarding all administrative credentials, SSH keys, passwords, and API tokens associated with your account. RMDHost reserves the right to request identity verification to prevent fraud and financial abuse prior to provisioning server hardware.

### 3. Service Level Agreement & Hardware Replacement
RMDHost commits to a 99.99% network and power availability SLA across all Tier-3 and Tier-4 partner data centers. In the event of hardware degradation or component failure on Bare Metal Dedicated Servers, RMDHost guarantees replacement of certified enterprise components within two (2) hours of diagnosis.

### 4. Billing, Auto-Renewal & Payment Gateway
Services are billed on a recurring basis according to your chosen billing cycle (Monthly or Annually). Invoices are generated seven (7) calendar days prior to the expiration date. Outstanding balances past forty-eight (48) hours of the due date are subject to automated instance suspension.

### 5. Limitation of Liability
In no event shall RMDHost, its directors, employees, or upstream telecom providers be liable for indirect, incidental, punitive, or consequential damages resulting from downtime, data loss, unauthorized intrusion, or network outages beyond reasonable commercial control.
`
  },
  privacy: {
    title: 'Privacy Policy & GDPR Compliance',
    effectiveDate: 'October 1, 2026',
    content: `
### 1. Data Controller Commitment
RMDHost is committed to respecting your privacy and adhering strictly to the European Union General Data Protection Regulation (GDPR), the UK Data Protection Act, and applicable international privacy frameworks.

### 2. Information We Collect
We collect personal information necessary to deliver, bill, and protect our infrastructure services:
- Contact information: Legal name, company name, email address, physical address, and telephone number.
- Payment identifiers: Transaction IDs, cardholder verification tokens (processed via PCI-DSS Level 1 compliant processors; we never store raw credit card numbers).
- Technical logs: Access IP addresses, browser user-agent, API timestamps, and firewall authentication logs strictly for threat mitigation and fraud prevention.

### 3. Data Sovereignty & Storage
Customer server data (files, databases, containers) stored on your VPS or Dedicated Server instances resides exclusively within the specific geographic datacenter region you selected at checkout (e.g., Frankfurt, Amsterdam, London, New York). RMDHost employees do not inspect, index, or decrypt customer payload data unless explicitly requested by the customer for technical support.

### 4. Your Rights Under GDPR
As a data subject, you possess the right to:
- Access and obtain a copy of your personal data held by RMDHost.
- Request rectification of inaccurate information.
- Request erasure ("Right to be Forgotten") upon cancellation of active services and settlement of invoices.
- Restrict or object to processing of personal data for marketing purposes.
`
  },
  aup: {
    title: 'Acceptable Use Policy (AUP)',
    effectiveDate: 'October 1, 2026',
    content: `
### 1. Purpose & Scope
This Acceptable Use Policy specifies prohibited activities on RMDHost infrastructure to preserve network reputation, safeguard fellow customers, and ensure compliance with international law.

### 2. Strictly Prohibited Activities
The following activities will result in immediate service suspension or termination without refund:
- **DDoS Attacks & Amplification**: Launching, participating in, or harboring stressers, booter scripts, or DNS/NTP amplification vectors.
- **Unsolicited Bulk Email (SPAM)**: Transmitting spam, operating open mail relays, or hosting sites advertised in unsolicited email. Port 25 outbound may be rate-limited on new accounts until verification.
- **Malware & Phishing**: Distributing trojans, ransomware, keyloggers, botnet command-and-control nodes, or fraudulent credential-harvesting pages.
- **Unauthorized Network Scanning**: Port scanning, vulnerability probing, or credential cracking against third-party networks without explicit prior written authorization.
- **Child Exploitation & Illegal Content**: Any material depicting or promoting child sexual abuse material (CSAM) is reported immediately to law enforcement authorities.
- **Copyright Infringement**: Willful hosting of unlicensed media in violation of the DMCA or EU Copyright Directives.

### 3. Automated DDoS Mitigation & Null-Routing
If an inbound attack against a customer IP exceeds contracted scrubbing thresholds or impacts upstream peering stability, RMDHost reserves the right to apply temporary null-routing (Blackholing) for the duration of the attack.
`
  },
  sla: {
    title: 'Service Level Agreement (SLA) & Refund Policy',
    effectiveDate: 'October 1, 2026',
    content: `
### 1. 99.99% Network & Power Availability Guarantee
RMDHost guarantees 99.99% network connectivity and primary power availability for all Cloud VPS, Windows VPS, and Bare Metal Dedicated Servers. Downtime is measured from the moment a customer submits a valid high-priority support ticket or our automated monitoring detects packet loss exceeding 90% across redundant transit paths.

### 2. Credit Schedule for Network Downtime
If monthly availability falls below guaranteed thresholds, customers are eligible for the following account credits upon written request within 14 days of the incident:
- 99.0% - 99.98% availability: 10% credit of monthly recurring fee
- 98.0% - 98.99% availability: 25% credit of monthly recurring fee
- 95.0% - 97.99% availability: 50% credit of monthly recurring fee
- Below 95.0% availability: 100% credit of monthly recurring fee

### 3. 30-Day Money-Back Guarantee (VPS & Windows VPS)
We stand behind our performance. If you are not completely satisfied with your Cloud VPS or Windows VPS service, you may request a 100% full refund within thirty (30) calendar days of initial deployment. No questions asked.

### 4. Non-Refundable Items
The following items are excluded from the 30-day refund policy:
- Bare Metal Dedicated Servers (due to hardware racking, burn-in testing, and uplink reservation costs).
- Additional IPv4 allocation fees and BGP setup fees.
- Software licenses already issued (e.g., cPanel, Plesk, LiteSpeed, CloudLinux).
- Accounts suspended or terminated due to violations of our Acceptable Use Policy.
`
  }
};
