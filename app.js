document.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  const navContainer = document.getElementById('categoryTabList');
  const mainContainer = document.getElementById('menuContainer');

  // Verify menuData is loaded
  if (typeof menuData === 'undefined') {
    mainContainer.innerHTML = '<p style="text-align:center;color:red;">Menü verisi yüklenemedi.</p>';
    return;
  }

  // Generate Categories
  menuData.categories.forEach((category, index) => {
    const sectionId = `category-${index}`;

    // 1. Create Nav Button
    const navBtn = document.createElement('button');
    navBtn.className = `nav-btn ${index === 0 ? 'active' : ''}`;
    navBtn.textContent = category.name;
    navBtn.onclick = () => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };
    navContainer.appendChild(navBtn);

    // 2. Create Section
    const section = document.createElement('section');
    section.id = sectionId;
    section.className = 'category-section';

    // 3. Create Header Group
    const headerGroup = document.createElement('div');
    headerGroup.className = 'category-header';

    const title = document.createElement('h2');
    title.className = 'category-title';
    title.textContent = category.name;
    headerGroup.appendChild(title);

    if (category.description) {
      const desc = document.createElement('p');
      desc.className = 'category-desc';
      desc.textContent = category.description;
      headerGroup.appendChild(desc);
    }
    
    section.appendChild(headerGroup);

    // 4. Create Items List
    const menuList = document.createElement('div');
    menuList.className = 'menu-list';

    category.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item';

      const itemInfo = document.createElement('div');
      itemInfo.className = 'item-info';
      const itemName = document.createElement('h3');
      itemName.className = 'item-name';
      itemName.textContent = item.name;
      itemInfo.appendChild(itemName);

      const itemPrices = document.createElement('div');
      itemPrices.className = 'item-prices';

      if (item.price) {
        // Single price item
        const pBox = document.createElement('div');
        pBox.className = 'price-box';
        const pVal = document.createElement('span');
        pVal.className = 'price-val';
        pVal.textContent = item.price;
        pBox.appendChild(pVal);
        itemPrices.appendChild(pBox);
      } else {
        // Multi price item
        if (item.small_price) {
          const pBox = document.createElement('div');
          pBox.className = 'price-box';
          const pLabel = document.createElement('span');
          pLabel.className = 'price-label';
          pLabel.textContent = 'Küçük';
          const pVal = document.createElement('span');
          pVal.className = 'price-val';
          pVal.textContent = item.small_price;
          pBox.appendChild(pLabel);
          pBox.appendChild(pVal);
          itemPrices.appendChild(pBox);
        }
        if (item.large_price) {
          const pBox = document.createElement('div');
          pBox.className = 'price-box';
          const pLabel = document.createElement('span');
          pLabel.className = 'price-label';
          pLabel.textContent = 'Orta';
          const pVal = document.createElement('span');
          pVal.className = 'price-val';
          pVal.textContent = item.large_price;
          pBox.appendChild(pLabel);
          pBox.appendChild(pVal);
          itemPrices.appendChild(pBox);
        }
      }

      itemEl.appendChild(itemInfo);
      itemEl.appendChild(itemPrices);
      
      menuList.appendChild(itemEl);
    });

    section.appendChild(menuList);
    mainContainer.appendChild(section);
  });

  // Intersection Observer for updating active nav button on scroll
  const sections = document.querySelectorAll('.category-section');
  const navBtns = document.querySelectorAll('.nav-btn');

  const observerOptions = {
    root: null,
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navBtns.forEach(btn => {
          btn.classList.remove('active');
        });
        
        // Find corresponding button
        const activeIndex = id.split('-')[1];
        const activeBtn = navBtns[activeIndex];
        if (activeBtn) {
          activeBtn.classList.add('active');
          activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
