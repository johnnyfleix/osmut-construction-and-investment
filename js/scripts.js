/*!
* OSMUT Construction and Investment
* Client-Side Interactive Scripts (Vanilla JavaScript)
*/

// Sector Data Repository for interactive Modal
const SECTOR_DATA = {
  1: {
    id: "construction",
    number: "01",
    title: "Construction and Infrastructure Development",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Construction Services",
    fullDesc: "OSMUT Construction and Investment delivers dependable construction and engineering capabilities. We engage in residential housing developments, commercial facility construction, renovation and rehabilitation works, civil engineering projects, site coordination, and the procurement of durable construction supplies.",
    capabilities: [
      "Residential building construction",
      "Commercial property development",
      "Civil engineering & infrastructure works",
      "Building renovation, maintenance & retrofitting",
      "Construction materials sourcing & logistics",
      "Project management & general contracting"
    ]
  },
  2: {
    id: "import-export",
    number: "02",
    title: "Import and Export of General Goods",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Import and Export",
    fullDesc: "We bridge domestic and global supply channels through disciplined import and export operations. OSMUT connects reputable overseas manufacturers with Ghanaian markets, managing procurement logistics, distributor relationships, and cross-border commercial transactions.",
    capabilities: [
      "General merchandise trading",
      "International product sourcing & verification",
      "Wholesale distribution & warehousing channels",
      "Cross-border supplier and buyer matchmaking",
      "Customs liaison & commercial shipping coordination",
      "Domestic & regional market expansion"
    ]
  },
  3: {
    id: "agriculture",
    number: "03",
    title: "Agriculture and Agricultural Products",
    category: "agriculture",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Agricultural Products and Supplies",
    fullDesc: "Agriculture forms an essential pillar of Ghana's economy and our enterprise. OSMUT operates across the agricultural value chain by sourcing high-grade produce directly from local farming communities, facilitating commodity trade, and cultivating sustainable agribusiness ventures.",
    capabilities: [
      "Agricultural commodity procurement & trading",
      "Local farmer aggregate network partnerships",
      "Post-harvest storage & marketing distribution",
      "Regional crop trade and supply contracts",
      "Agribusiness value chain investment"
    ]
  },
  4: {
    id: "farm-inputs",
    number: "04",
    title: "Farm Materials, Inputs and Equipment",
    category: "agriculture",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Agricultural Products and Supplies",
    fullDesc: "Equipping farmers and commercial growers with durable supplies, mechanization tools, and quality inputs is key to agricultural productivity. We distribute field implements, irrigation accessories, protective equipment, and essential cultivation materials.",
    capabilities: [
      "Field tools and manual cultivation implements",
      "Irrigation pipes, pumps, and drip materials",
      "Protective agricultural gear and storage equipment",
      "Soil preparation and crop maintenance supplies",
      "Distribution to farm cooperatives and commercial growers"
    ]
  },
  5: {
    id: "cosmetics",
    number: "05",
    title: "Cosmetics and Personal Care Products",
    category: "consumer",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Cosmetics and Personal Care",
    fullDesc: "Meeting the vibrant and expanding personal care consumer market in West Africa, OSMUT engages in the sourcing, distribution, and commercial trade of skincare essentials, hair treatments, daily hygiene lines, and aesthetic accessories.",
    capabilities: [
      "Skincare products and dermatological essentials",
      "Haircare and scalp maintenance solutions",
      "Personal hygiene and daily bath commodities",
      "Beauty salon supplies and accessories",
      "Retailer and beauty chain wholesale supply"
    ]
  },
  6: {
    id: "food-products",
    number: "06",
    title: "Food Products and Commodities",
    category: "consumer",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Food Products and Commodities",
    fullDesc: "Food security and efficient distribution are vital to market stability. OSMUT trades in wholesale packaged foods, staple grains, edible commodities, and processed foodstuffs, catering to retailers, institutions, and bulk buyers with consistent standards.",
    capabilities: [
      "Wholesale staple grain and food commodities",
      "Packaged and processed food merchandise",
      "Institutional food supply arrangements",
      "Temperature-appropriate storage & logistics",
      "Bulk retail distribution networks"
    ]
  },
  7: {
    id: "commercial-investments",
    number: "07",
    title: "General Trading and Commercial Investments",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    inquiryCode: "Commercial Investments and Partnerships",
    fullDesc: "Beyond sector-specific lines, OSMUT actively pursues diversified commercial ventures. We partner with local and international investors, participate in joint ventures, manage turnkey procurement tenders, and identify emerging growth vectors across Ghana and the broader region.",
    capabilities: [
      "B2B commercial procurement tenders",
      "Strategic joint ventures & co-investment structures",
      "Market entry support for overseas manufacturers",
      "Private equity & commercial venture exploration",
      "Structured trade finance & merchant alliances"
    ]
  }
};

window.addEventListener('DOMContentLoaded', () => {

  // 1. Dynamic Current Year in Footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) return;
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink');
    } else {
      navbarCollapsible.classList.add('navbar-shrink');
    }
  };

  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  // 3. Collapse responsive navbar when toggler link is clicked
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.forEach(responsiveNavItem => {
    responsiveNavItem.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        const collapseEl = document.getElementById('navbarResponsive');
        if (collapseEl && window.bootstrap && window.bootstrap.Collapse) {
          const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl) || new window.bootstrap.Collapse(collapseEl, { toggle: false });
          bsCollapse.hide();
        }
      }
    });
  });

  // 4. Sector Category Filter
  const filterButtons = document.querySelectorAll('.sector-filter-btn');
  const sectorCards = document.querySelectorAll('.sector-grid-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      sectorCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Sector Details Modal Interaction
  let activeInquiryCode = 'General Enquiry';
  const sectorModalElement = document.getElementById('sectorModal');
  const sectorModalInstance = sectorModalElement && window.bootstrap ? new window.bootstrap.Modal(sectorModalElement) : null;

  window.openSectorModal = function(sectorNum) {
    const data = SECTOR_DATA[sectorNum];
    if (!data) return;

    activeInquiryCode = data.inquiryCode;

    const modalTitle = document.getElementById('modalSectorTitle');
    const modalNumber = document.getElementById('modalSectorNumber');
    const modalImage = document.getElementById('modalSectorImage');
    const modalDesc = document.getElementById('modalSectorDesc');
    const modalCaps = document.getElementById('modalSectorCaps');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalNumber) modalNumber.textContent = 'Sector ' + data.number;
    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
    }
    if (modalDesc) modalDesc.textContent = data.fullDesc;

    if (modalCaps) {
      modalCaps.innerHTML = '';
      data.capabilities.forEach(cap => {
        const li = document.createElement('li');
        li.className = 'd-flex align-items-start gap-2 mb-2 text-white-50 small bg-dark p-2 rounded';
        li.innerHTML = '<i class="fas fa-check text-primary mt-1"></i><span>' + cap + '</span>';
        modalCaps.appendChild(li);
      });
    }

    if (sectorModalInstance) {
      sectorModalInstance.show();
    }
  };

  // Direct "Inquire About This Sector" from inside modal
  const btnInquireFromModal = document.getElementById('btnInquireFromModal');
  if (btnInquireFromModal) {
    btnInquireFromModal.addEventListener('click', () => {
      if (sectorModalInstance) {
        sectorModalInstance.hide();
      }
      setEnquiryDropdownAndScroll(activeInquiryCode);
    });
  }

  // Helper: sets the contact form dropdown and smoothly scrolls to #contact
  window.setEnquiryDropdownAndScroll = function(inquiryType) {
    const select = document.getElementById('enquiryType');
    if (select) {
      select.value = inquiryType;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6. Business Enquiry Form Validation & Transparent Dispatch Handling
  const contactForm = document.getElementById('businessContactForm');
  const formStatusModalEl = document.getElementById('formStatusModal');
  const formStatusModal = formStatusModalEl && window.bootstrap ? new window.bootstrap.Modal(formStatusModalEl) : null;

  let currentEnquirySummary = '';

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName');
      const company = document.getElementById('company');
      const email = document.getElementById('emailAddress');
      const phone = document.getElementById('phoneNumber');
      const enquiryType = document.getElementById('enquiryType');
      const message = document.getElementById('messageText');

      let isValid = true;

      // Validate Full Name
      if (!fullName.value.trim() || fullName.value.trim().length < 2) {
        fullName.classList.add('is-invalid');
        isValid = false;
      } else {
        fullName.classList.remove('is-invalid');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
      }

      // Validate Enquiry Type
      if (!enquiryType.value) {
        enquiryType.classList.add('is-invalid');
        isValid = false;
      } else {
        enquiryType.classList.remove('is-invalid');
      }

      // Validate Message
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add('is-invalid');
        isValid = false;
      } else {
        message.classList.remove('is-invalid');
      }

      if (isValid) {
        // Structured formatted summary
        currentEnquirySummary = `OSMUT Business Enquiry:
Full Name: ${fullName.value.trim()}
Organization: ${company.value.trim() || 'Not specified'}
Email Address: ${email.value.trim()}
Phone Number: ${phone.value.trim() || 'Not specified'}
Enquiry Category: ${enquiryType.value}

Message Requirement:
${message.value.trim()}`;

        // Populate summary box in modal
        const summaryBox = document.getElementById('enquirySummaryPreview');
        if (summaryBox) {
          summaryBox.textContent = currentEnquirySummary;
        }

        // Show transparent status modal
        if (formStatusModal) {
          formStatusModal.show();
        }
      }
    });

    // Real-time input error clearing
    ['fullName', 'emailAddress', 'enquiryType', 'messageText'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          if (el.classList.contains('is-invalid')) {
            el.classList.remove('is-invalid');
          }
        });
      }
    });
  }

  // 7. Modal Actions: Copy & Mailto
  const btnCopyEnquiry = document.getElementById('btnCopyEnquiry');
  if (btnCopyEnquiry) {
    btnCopyEnquiry.addEventListener('click', () => {
      if (!currentEnquirySummary) return;
      navigator.clipboard.writeText(currentEnquirySummary).then(() => {
        const originalText = btnCopyEnquiry.innerHTML;
        btnCopyEnquiry.innerHTML = '<i class="fas fa-check me-1"></i> Copied!';
        setTimeout(() => {
          btnCopyEnquiry.innerHTML = originalText;
        }, 2500);
      });
    });
  }

  const btnDraftEmail = document.getElementById('btnDraftEmail');
  if (btnDraftEmail) {
    btnDraftEmail.addEventListener('click', () => {
      const enquiryType = document.getElementById('enquiryType') ? document.getElementById('enquiryType').value : 'Business Enquiry';
      const fullName = document.getElementById('fullName') ? document.getElementById('fullName').value : '';
      const subject = encodeURIComponent(`OSMUT Business Enquiry: ${enquiryType} - ${fullName}`);
      const body = encodeURIComponent(currentEnquirySummary);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });
  }
});
