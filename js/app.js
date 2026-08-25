/* =========================================================
   AURELIA STORE — Shared Front-end Prototype
   HTML/CSS/Vanilla JS only. Data is intentionally local so
   Firebase/Supabase/API integration can be added later.
========================================================= */

const products = [
  {
    id: 1,
    name: "Essential Oversized Tee",
    category: "Clothing",
    price: 799,
    oldPrice: 999,
    image: "images/product-01.svg",
    badge: "Sale",
    description:
      "A relaxed everyday tee with a clean drape, soft hand feel, and understated silhouette.",
    rating: 4.8,
    colors: ["Black", "White", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    featured: true
  },
  {
    id: 2,
    name: "Structured Linen Shirt",
    category: "Clothing",
    price: 1299,
    image: "images/product-02.svg",
    badge: "New",
    description:
      "A breathable linen-blend shirt cut with a structured collar and an easy modern fit.",
    rating: 4.7,
    colors: ["White", "Olive", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    featured: true
  },
  {
    id: 3,
    name: "Everyday Straight Trousers",
    category: "Clothing",
    price: 1499,
    image: "images/product-03.svg",
    description:
      "Straight-cut trousers designed for quiet structure, all-day comfort, and effortless pairing.",
    rating: 4.6,
    colors: ["Charcoal", "Sand", "Black"],
    sizes: ["28", "30", "32", "34", "36"],
    isNew: false,
    featured: true
  },
  {
    id: 4,
    name: "Soft Knit Polo",
    category: "Clothing",
    price: 1199,
    image: "images/product-04.svg",
    description:
      "A refined knit polo with a soft collar, fine texture, and a relaxed but polished profile.",
    rating: 4.8,
    colors: ["Cream", "Slate", "Brown"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    featured: false
  },
  {
    id: 5,
    name: "Minimal Leather Tote",
    category: "Accessories",
    price: 1899,
    image: "images/product-05.svg",
    badge: "Best Seller",
    description:
      "A clean structured tote with room for daily essentials, finished with discreet hardware.",
    rating: 4.9,
    colors: ["Black", "Tan", "Espresso"],
    sizes: ["One Size"],
    isNew: false,
    featured: true
  },
  {
    id: 6,
    name: "Arc Crossbody Bag",
    category: "Accessories",
    price: 1299,
    image: "images/product-06.svg",
    description:
      "A compact curved crossbody bag with an adjustable strap and a simple magnetic closure.",
    rating: 4.5,
    colors: ["Black", "Taupe", "Olive"],
    sizes: ["One Size"],
    isNew: true,
    featured: false
  },
  {
    id: 7,
    name: "Classic Metal Watch",
    category: "Accessories",
    price: 1599,
    image: "images/product-07.svg",
    description:
      "A slim analog watch with a minimal face and brushed metal finish for everyday wear.",
    rating: 4.7,
    colors: ["Silver", "Black"],
    sizes: ["One Size"],
    isNew: false,
    featured: false
  },
  {
    id: 8,
    name: "Slim Frame Sunglasses",
    category: "Accessories",
    price: 899,
    oldPrice: 1099,
    image: "images/product-08.svg",
    badge: "Sale",
    description:
      "Lightweight sunglasses with a narrow profile, subtle tint, and a versatile modern frame.",
    rating: 4.4,
    colors: ["Black", "Tortoise"],
    sizes: ["One Size"],
    isNew: false,
    featured: false
  },
  {
    id: 9,
    name: "Court Low Sneakers",
    category: "Footwear",
    price: 2199,
    image: "images/product-09.svg",
    badge: "New",
    description:
      "Low-profile sneakers with a clean paneled upper, cushioned insole, and neutral rubber sole.",
    rating: 4.8,
    colors: ["White", "Off White", "Black"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    isNew: true,
    featured: true
  },
  {
    id: 10,
    name: "Everyday Suede Loafers",
    category: "Footwear",
    price: 2399,
    image: "images/product-10.svg",
    description:
      "Soft suede loafers with a comfortable low profile and restrained stitching details.",
    rating: 4.6,
    colors: ["Taupe", "Brown", "Black"],
    sizes: ["39", "40", "41", "42", "43"],
    isNew: false,
    featured: true
  },
  {
    id: 11,
    name: "Studio Slip-On Sandals",
    category: "Footwear",
    price: 1199,
    image: "images/product-11.svg",
    description:
      "Minimal slip-on sandals with a supportive footbed and clean wide-strap construction.",
    rating: 4.5,
    colors: ["Black", "Sand"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    isNew: true,
    featured: false
  },
  {
    id: 12,
    name: "Canvas Weekend Sneakers",
    category: "Footwear",
    price: 1599,
    image: "images/product-12.svg",
    description:
      "A lightweight canvas sneaker designed for casual weekends, travel, and relaxed daily wear.",
    rating: 4.3,
    colors: ["Natural", "Black", "Navy"],
    sizes: ["39", "40", "41", "42", "43"],
    isNew: false,
    featured: false
  },
  {
    id: 13,
    name: "Ceramic Daily Mug",
    category: "Lifestyle",
    price: 499,
    image: "images/product-13.svg",
    description:
      "A tactile ceramic mug with a calm matte finish and balanced shape for daily coffee rituals.",
    rating: 4.9,
    colors: ["Ivory", "Clay", "Sage"],
    sizes: ["350 ml"],
    isNew: true,
    featured: true
  },
  {
    id: 14,
    name: "Scented Soy Candle",
    category: "Lifestyle",
    price: 699,
    image: "images/product-14.svg",
    badge: "Best Seller",
    description:
      "A clean-burning soy candle with warm cedar, soft amber, and a restrained herbal note.",
    rating: 4.8,
    colors: ["Cedar", "Amber", "Sage"],
    sizes: ["180 g"],
    isNew: false,
    featured: false
  },
  {
    id: 15,
    name: "Desk Catchall Tray",
    category: "Lifestyle",
    price: 599,
    image: "images/product-15.svg",
    description:
      "A simple molded tray for keys, jewelry, tech accessories, and everyday desk essentials.",
    rating: 4.5,
    colors: ["Stone", "Charcoal", "Sand"],
    sizes: ["Medium"],
    isNew: false,
    featured: false
  },
  {
    id: 16,
    name: "Cotton Throw Blanket",
    category: "Lifestyle",
    price: 1399,
    image: "images/product-16.svg",
    badge: "New",
    description:
      "A soft woven cotton throw with a subtle texture designed for calm, layered living spaces.",
    rating: 4.7,
    colors: ["Oat", "Stone", "Charcoal"],
    sizes: ["130 × 170 cm"],
    isNew: true,
    featured: false
  }
];


/* =========================================================
   LOCAL STORAGE KEYS
========================================================= */

const STORE_KEYS = {
  cart: "aurelia_cart",
  wishlist: "aurelia_wishlist",
  demoUser: "aurelia_demo_user"
};


/* =========================================================
   CURRENCY FORMAT
========================================================= */

const money = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0
});


/* =========================================================
   ICONS
========================================================= */

function icon(name) {
  const icons = {
    search:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>',

    user:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5.5 20c.8-4 3-6 6.5-6s5.7 2 6.5 6"></path></svg>',

    bag:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8Z"></path><path d="M9 9V6a3 3 0 0 1 6 0v3"></path></svg>',

    menu:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>',

    close:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>',

    heart:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 5.9c-1.6-1.8-4.4-1.9-6.1-.2L12 8.4 9.3 5.7C7.6 4 4.8 4.1 3.2 5.9c-1.7 2-1.6 5 .3 6.9L12 21l8.5-8.2c1.9-1.9 2-4.9.3-6.9Z"></path></svg>'
  };

  return icons[name] || "";
}


/* =========================================================
   CURRENT PAGE
========================================================= */

function getPageName() {
  const file =
    window.location.pathname.split("/").pop() || "index.html";

  return file || "index.html";
}


/* =========================================================
   HEADER
========================================================= */

function renderHeader() {
  const target = document.querySelector("[data-site-header]");

  if (!target) return;

  const page = getPageName();

  const current = (href) =>
    page === href ? ' aria-current="page"' : "";

  target.outerHTML = `
    <header class="site-header">

      <div class="container navbar">

        <a
          class="brand"
          href="index.html"
          aria-label="Aurelia home"
        >
          AURELIA
        </a>

        <nav
          class="nav-links"
          aria-label="Primary navigation"
        >

          <a
            href="index.html"
            ${current("index.html")}
          >
            Home
          </a>

          <a
            href="shop.html"
            ${current("shop.html")}
          >
            Shop
          </a>

          <a href="shop.html?view=new">
            New Arrivals
          </a>

          <a href="index.html#categories">
            Categories
          </a>

          <a href="index.html#about">
            About
          </a>

        </nav>

        <div class="nav-actions">

          <button
            class="icon-btn"
            type="button"
            data-search-toggle
            aria-label="Open search"
          >
            ${icon("search")}
          </button>

          <a
            class="icon-btn account-link"
            href="account.html"
            aria-label="Account"
          >
            ${icon("user")}
          </a>

          <a
            class="icon-btn"
            href="cart.html"
            aria-label="Shopping cart"
          >
            ${icon("bag")}

            <span
              class="badge-count"
              data-cart-count
            >
              0
            </span>
          </a>

          <button
            class="icon-btn menu-toggle"
            type="button"
            data-menu-toggle
            aria-label="Open menu"
            aria-expanded="false"
          >
            ${icon("menu")}
          </button>

        </div>

      </div>

    </header>

    <aside
      class="mobile-panel"
      data-mobile-panel
      aria-label="Mobile navigation"
    >

      <nav>

        <a href="index.html">
          Home
        </a>

        <a href="shop.html">
          Shop
        </a>

        <a href="shop.html?view=new">
          New Arrivals
        </a>

        <a href="index.html#categories">
          Categories
        </a>

        <a href="index.html#about">
          About
        </a>

        <a href="account.html">
          My Account
        </a>

      </nav>

    </aside>

    <div
      class="search-overlay"
      data-search-overlay
    >

      <div
        class="search-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Product search"
      >

        <div class="container search-panel-row">

          <input
            type="search"
            data-global-search
            placeholder="Search products, categories, essentials…"
            aria-label="Search products"
          >

          <button
            class="icon-btn"
            type="button"
            data-search-close
            aria-label="Close search"
          >
            ${icon("close")}
          </button>

        </div>

      </div>

    </div>
  `;
}


/* =========================================================
   FOOTER
========================================================= */

function renderFooter() {
  const target = document.querySelector("[data-site-footer]");

  if (!target) return;

  target.outerHTML = `
    <footer class="site-footer">

      <div class="container">

        <div class="footer-grid">

          <div class="footer-brand">

            <a
              class="brand"
              href="index.html"
            >
              AURELIA
            </a>

            <p>
              Quiet essentials for everyday living,
              designed with function, form, and longevity
              in mind.
            </p>

          </div>

          <div class="footer-col">

            <h3>Shop</h3>

            <a href="shop.html?view=new">
              New Arrivals
            </a>

            <a href="shop.html?sort=featured">
              Best Sellers
            </a>

            <a href="shop.html">
              Collections
            </a>

          </div>

          <div class="footer-col">

            <h3>Customer Care</h3>

            <a href="#contact">
              Contact
            </a>

            <a href="#faq">
              FAQs
            </a>

            <a href="#shipping">
              Shipping
            </a>

            <a href="#returns">
              Returns
            </a>

          </div>

          <div class="footer-col">

            <h3>Company</h3>

            <a href="index.html#about">
              About Us
            </a>

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>

          <div class="footer-col newsletter">

            <h3>
              Newsletter
            </h3>

            <p>
              Join our newsletter for new releases
              and exclusive offers.
            </p>

            <form
              class="newsletter-form"
              data-newsletter-form
              novalidate
            >

              <input
                class="text-input"
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Newsletter email"
                required
              >

              <button
                class="btn btn-primary"
                type="submit"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>

        <div class="footer-bottom">

          <span>
            © 2026 Aurelia. All rights reserved.
          </span>

          <span>
            Front-end prototype · Philippines
          </span>

        </div>

      </div>

    </footer>
  `;
}


/* =========================================================
   CART STORAGE
========================================================= */

function getCart() {
  try {
    return (
      JSON.parse(
        localStorage.getItem(STORE_KEYS.cart)
      ) || []
    );
  } catch {
    return [];
  }
}


function setCart(cart) {
  localStorage.setItem(
    STORE_KEYS.cart,
    JSON.stringify(cart)
  );

  updateCartCount();

  document.dispatchEvent(
    new CustomEvent("cart:updated")
  );
}


/* =========================================================
   WISHLIST STORAGE
========================================================= */

function getWishlist() {
  try {
    return (
      JSON.parse(
        localStorage.getItem(STORE_KEYS.wishlist)
      ) || []
    );
  } catch {
    return [];
  }
}


function setWishlist(list) {
  localStorage.setItem(
    STORE_KEYS.wishlist,
    JSON.stringify(list)
  );

  syncWishlistButtons();

  document.dispatchEvent(
    new CustomEvent("wishlist:updated")
  );
}


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {
  const total = getCart().reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  document
    .querySelectorAll("[data-cart-count]")
    .forEach((el) => {
      el.textContent = total;
      el.hidden = total === 0;
    });
}


/* =========================================================
   TOAST MESSAGE
========================================================= */

function showToast(message) {
  let stack =
    document.querySelector(".toast-stack");

  if (!stack) {
    stack = document.createElement("div");

    stack.className = "toast-stack";

    stack.setAttribute(
      "aria-live",
      "polite"
    );

    document.body.appendChild(stack);
  }

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.textContent = message;

  stack.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2600);
}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(
  productId,
  quantity = 1,
  options = {}
) {
  const product = products.find(
    (item) =>
      item.id === Number(productId)
  );

  if (!product) return;

  const cart = getCart();

  const color =
    options.color ||
    product.colors[0];

  const size =
    options.size ||
    product.sizes[0];

  const key =
    `${product.id}-${color}-${size}`;

  const existing = cart.find(
    (item) => item.key === key
  );

  if (existing) {
    existing.quantity += Math.max(
      1,
      Number(quantity) || 1
    );
  } else {
    cart.push({
      key,
      productId: product.id,
      quantity: Math.max(
        1,
        Number(quantity) || 1
      ),
      color,
      size
    });
  }

  setCart(cart);

  showToast(
    `${product.name} added to cart.`
  );
}


/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeFromCart(key) {
  setCart(
    getCart().filter(
      (item) => item.key !== key
    )
  );
}


/* =========================================================
   UPDATE CART QUANTITY
========================================================= */

function updateCartQuantity(key, delta) {
  const cart = getCart();

  const item = cart.find(
    (entry) => entry.key === key
  );

  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    removeFromCart(key);
    return;
  }

  setCart(cart);
}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(productId) {
  const id = Number(productId);

  const list = getWishlist();

  const exists =
    list.includes(id);

  const next = exists
    ? list.filter(
        (item) => item !== id
      )
    : [...list, id];

  setWishlist(next);

  const product = products.find(
    (item) => item.id === id
  );

  showToast(
    exists
      ? `${product?.name || "Item"} removed from wishlist.`
      : `${product?.name || "Item"} saved to wishlist.`
  );
}


/* =========================================================
   SYNC WISHLIST BUTTONS
========================================================= */

function syncWishlistButtons() {
  const wishlist =
    getWishlist();

  document
    .querySelectorAll("[data-wishlist]")
    .forEach((button) => {
      const active =
        wishlist.includes(
          Number(
            button.dataset.wishlist
          )
        );

      button.classList.toggle(
        "is-active",
        active
      );

      button.setAttribute(
        "aria-pressed",
        String(active)
      );

      button.setAttribute(
        "aria-label",
        active
          ? "Remove from wishlist"
          : "Add to wishlist"
      );
    });
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product) {
  return `
    <article
      class="product-card"
      data-product-card
      data-product-id="${product.id}"
    >

      <div class="product-media">

        <a
          href="product.html?id=${product.id}"
          aria-label="View ${product.name}"
        >

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >

        </a>

        ${
          product.badge
            ? `
              <span class="product-badge">
                ${product.badge}
              </span>
            `
            : ""
        }

        <button
          class="wishlist-btn"
          type="button"
          data-wishlist="${product.id}"
          aria-pressed="false"
          aria-label="Add ${product.name} to wishlist"
        >
          ${icon("heart")}
        </button>

        <div class="quick-add">

          <button
            class="btn btn-primary btn-block"
            type="button"
            data-quick-add="${product.id}"
          >
            Quick Add
          </button>

        </div>

      </div>

      <div class="product-info">

        <div class="product-meta">

          <div>

            <h3 class="product-name">

              <a
                href="product.html?id=${product.id}"
              >
                ${product.name}
              </a>

            </h3>

            <p class="product-category">
              ${product.category}
            </p>

          </div>

          <div class="product-price">

            ${money.format(product.price)}

            ${
              product.oldPrice
                ? `
                  <span class="product-old-price">
                    ${money.format(product.oldPrice)}
                  </span>
                `
                : ""
            }

          </div>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   PRODUCT COLLECTION
========================================================= */

function renderProductCollection(
  target,
  list
) {
  if (!target) return;

  if (!list.length) {
    target.innerHTML = `
      <div class="empty-state">

        <div class="empty-state-inner">

          <h3>
            No products found
          </h3>

          <p>
            Try a different search term,
            category, or price range.
          </p>

          <a
            class="btn btn-secondary"
            href="shop.html"
          >
            Reset catalog
          </a>

        </div>

      </div>
    `;

    return;
  }

  target.innerHTML =
    list
      .map(productCard)
      .join("");

  syncWishlistButtons();
}


/* =========================================================
   GLOBAL EVENTS
========================================================= */

function bindGlobalEvents() {
  document.addEventListener(
    "click",
    (event) => {
      const quickAdd =
        event.target.closest(
          "[data-quick-add]"
        );

      if (quickAdd) {
        addToCart(
          quickAdd.dataset.quickAdd
        );
      }

      const wish =
        event.target.closest(
          "[data-wishlist]"
        );

      if (wish) {
        toggleWishlist(
          wish.dataset.wishlist
        );
      }
    }
  );


  /* MOBILE MENU */

  const menuToggle =
    document.querySelector(
      "[data-menu-toggle]"
    );

  const mobilePanel =
    document.querySelector(
      "[data-mobile-panel]"
    );

  if (
    menuToggle &&
    mobilePanel
  ) {
    menuToggle.addEventListener(
      "click",
      () => {
        const open =
          mobilePanel.classList.toggle(
            "is-open"
          );

        menuToggle.setAttribute(
          "aria-expanded",
          String(open)
        );

        menuToggle.innerHTML =
          icon(
            open
              ? "close"
              : "menu"
          );

        document.body.classList.toggle(
          "menu-open",
          open
        );
      }
    );

    mobilePanel
      .querySelectorAll("a")
      .forEach((link) =>
        link.addEventListener(
          "click",
          () => {
            mobilePanel.classList.remove(
              "is-open"
            );

            document.body.classList.remove(
              "menu-open"
            );
          }
        )
      );
  }


  /* SEARCH */

  const searchToggle =
    document.querySelector(
      "[data-search-toggle]"
    );

  const searchOverlay =
    document.querySelector(
      "[data-search-overlay]"
    );

  const searchClose =
    document.querySelector(
      "[data-search-close]"
    );

  const globalSearch =
    document.querySelector(
      "[data-global-search]"
    );

  const closeSearch = () => {
    searchOverlay?.classList.remove(
      "is-open"
    );

    document.body.classList.remove(
      "modal-open"
    );
  };

  searchToggle?.addEventListener(
    "click",
    () => {
      searchOverlay?.classList.add(
        "is-open"
      );

      document.body.classList.add(
        "modal-open"
      );

      setTimeout(
        () => globalSearch?.focus(),
        30
      );
    }
  );

  searchClose?.addEventListener(
    "click",
    closeSearch
  );

  searchOverlay?.addEventListener(
    "click",
    (event) => {
      if (
        event.target ===
        searchOverlay
      ) {
        closeSearch();
      }
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape"
      ) {
        closeSearch();
      }
    }
  );

  globalSearch?.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Enter"
      ) {
        event.preventDefault();

        const query =
          globalSearch.value.trim();

        window.location.href =
          `shop.html${
            query
              ? `?q=${encodeURIComponent(
                  query
                )}`
              : ""
          }`;
      }
    }
  );


  /* NEWSLETTER */

  document
    .querySelectorAll(
      "[data-newsletter-form]"
    )
    .forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();

          const input =
            form.querySelector(
              'input[type="email"]'
            );

          if (
            !input?.validity.valid
          ) {
            input?.focus();

            showToast(
              "Enter a valid email address."
            );

            return;
          }

          showToast(
            "Thanks for subscribing to Aurelia."
          );

          form.reset();
        }
      );
    });
}


/* =========================================================
   HOME PAGE
========================================================= */

function initHomePage() {
  const featured =
    document.querySelector(
      "[data-featured-products]"
    );

  const arrivals =
    document.querySelector(
      "[data-new-arrivals]"
    );

  if (featured) {
    renderProductCollection(
      featured,
      products
        .filter(
          (p) => p.featured
        )
        .slice(0, 4)
    );
  }

  if (arrivals) {
    renderProductCollection(
      arrivals,
      products
        .filter(
          (p) => p.isNew
        )
        .slice(0, 4)
    );
  }
}


/* =========================================================
   SHOP PAGE
========================================================= */

function initShopPage() {
  const grid =
    document.querySelector(
      "[data-shop-grid]"
    );

  if (!grid) return;

  const search =
    document.querySelector(
      "[data-shop-search]"
    );

  const sort =
    document.querySelector(
      "[data-shop-sort]"
    );

  const price =
    document.querySelector(
      "[data-price-range]"
    );

  const priceValue =
    document.querySelector(
      "[data-price-value]"
    );

  const count =
    document.querySelector(
      "[data-product-count]"
    );

  const categoryButtons = [
    ...document.querySelectorAll(
      "[data-category-filter]"
    )
  ];

  const params =
    new URLSearchParams(
      window.location.search
    );

  let category =
    params.get("category") ||
    "All";

  if (
    ![
      "All",
      "Clothing",
      "Footwear",
      "Accessories",
      "Lifestyle"
    ].includes(category)
  ) {
    category = "All";
  }

  let query =
    params.get("q") ||
    "";

  let maxPrice =
    Number(
      price?.value ||
      3000
    );

  let sortBy =
    params.get("sort") ||
    "featured";

  const view =
    params.get("view");

  if (search) {
    search.value = query;
  }

  if (
    sort &&
    [...sort.options].some(
      (opt) =>
        opt.value === sortBy
    )
  ) {
    sort.value = sortBy;
  }

  categoryButtons.forEach(
    (button) =>
      button.classList.toggle(
        "is-active",
        button.dataset.categoryFilter ===
          category
      )
  );

  if (view === "new") {
    sortBy = "newest";

    if (sort) {
      sort.value = "newest";
    }
  }


  /* APPLY FILTERS */

  function apply() {
    let list =
      products.filter(
        (product) => {
          const searchable =
            `${
              product.name
            } ${
              product.category
            } ${
              product.description
            }`.toLowerCase();

          const matchesQuery =
            searchable.includes(
              query
                .toLowerCase()
                .trim()
            );

          const matchesCategory =
            category === "All" ||
            product.category ===
              category;

          const matchesPrice =
            product.price <=
            maxPrice;

          const matchesView =
            view === "new"
              ? product.isNew
              : true;

          return (
            matchesQuery &&
            matchesCategory &&
            matchesPrice &&
            matchesView
          );
        }
      );


    /* SORT */

    list = [...list].sort(
      (a, b) => {
        if (
          sortBy === "newest"
        ) {
          return (
            Number(b.isNew) -
              Number(a.isNew) ||
            b.id - a.id
          );
        }

        if (
          sortBy === "low"
        ) {
          return (
            a.price -
            b.price
          );
        }

        if (
          sortBy === "high"
        ) {
          return (
            b.price -
            a.price
          );
        }

        if (
          sortBy === "az"
        ) {
          return a.name.localeCompare(
            b.name
          );
        }

        return (
          Number(b.featured) -
            Number(a.featured) ||
          a.id - b.id
        );
      }
    );

    renderProductCollection(
      grid,
      list
    );

    if (count) {
      count.textContent =
        `${list.length} product${
          list.length === 1
            ? ""
            : "s"
        }`;
    }

    if (priceValue) {
      priceValue.textContent =
        money.format(maxPrice);
    }
  }


  search?.addEventListener(
    "input",
    (event) => {
      query =
        event.target.value;

      apply();
    }
  );


  sort?.addEventListener(
    "change",
    (event) => {
      sortBy =
        event.target.value;

      apply();
    }
  );


  price?.addEventListener(
    "input",
    (event) => {
      maxPrice =
        Number(
          event.target.value
        );

      apply();
    }
  );


  categoryButtons.forEach(
    (button) => {
      button.addEventListener(
        "click",
        () => {
          category =
            button.dataset.categoryFilter;

          categoryButtons.forEach(
            (item) =>
              item.classList.toggle(
                "is-active",
                item === button
              )
          );

          apply();
        }
      );
    }
  );

  apply();
}


/* =========================================================
   COLOR HEX VALUES
========================================================= */

function colorToHex(color) {
  const map = {
    Black: "#242421",
    White: "#f7f7f4",
    Beige: "#d8cbb8",
    Olive: "#77785a",
    Stone: "#c9c5ba",
    Charcoal: "#4a4a47",
    Sand: "#d2bea0",
    Cream: "#ece4d4",
    Slate: "#69717a",
    Brown: "#765845",
    Tan: "#ad7c55",
    Espresso: "#49342d",
    Taupe: "#9b8d7e",
    Silver: "#c8c9c6",
    Tortoise: "#6c4e37",
    "Off White": "#edeae1",
    Natural: "#ddd0b5",
    Navy: "#2e3b4d",
    Ivory: "#ebe6d8",
    Clay: "#b5785d",
    Sage: "#97a28c",
    Cedar: "#8b654e",
    Amber: "#bd8d4d",
    Oat: "#d8ccb4"
  };

  return (
    map[color] ||
    "#c5c1b8"
  );
}


/* =========================================================
   PRODUCT DETAILS PAGE
========================================================= */

function initProductPage() {
  const mount =
    document.querySelector(
      "[data-product-detail]"
    );

  if (!mount) return;

  const params =
    new URLSearchParams(
      window.location.search
    );

  const id =
    Number(
      params.get("id")
    ) || 1;

  const product =
    products.find(
      (item) =>
        item.id === id
    ) || products[0];

  document.title =
    `${product.name} — Aurelia`;

  mount.innerHTML = `
    <div class="container product-detail-grid">

      <div class="product-gallery">

        <div class="gallery-thumbs">

          ${[1, 2, 3]
            .map(
              (n) => `
                <button
                  class="thumb-btn ${
                    n === 1
                      ? "is-active"
                      : ""
                  }"
                  type="button"
                  data-thumb="${n}"
                  aria-label="View image ${n}"
                >

                  <img
                    src="${product.image}"
                    alt="${product.name} view ${n}"
                  >

                </button>
              `
            )
            .join("")}

        </div>

        <div class="main-product-image">

          <img
            src="${product.image}"
            alt="${product.name}"
            data-main-product-image
          >

        </div>

      </div>


      <div class="product-summary">

        <p class="eyebrow">
          ${product.category}
        </p>

        <h1>
          ${product.name}
        </h1>


        <div class="rating-line">

          <span
            class="rating-stars"
            aria-label="${product.rating} out of 5 stars"
          >
            ★★★★★
          </span>

          <span>
            ${product.rating} · 128 reviews
          </span>

        </div>


        <div class="detail-price">

          ${money.format(
            product.price
          )}

          ${
            product.oldPrice
              ? `
                <span class="product-old-price">
                  ${money.format(
                    product.oldPrice
                  )}
                </span>
              `
              : ""
          }

        </div>


        <p class="detail-description">
          ${product.description}
        </p>


        <!-- COLOR -->

        <div class="option-group">

          <div class="option-label">

            <span>
              Color
            </span>

            <span data-selected-color>
              ${product.colors[0]}
            </span>

          </div>


          <div
            class="option-list"
            data-color-options
          >

            ${product.colors
              .map(
                (
                  color,
                  index
                ) => `
                  <button
                    class="option-button ${
                      index === 0
                        ? "is-active"
                        : ""
                    }"
                    type="button"
                    data-color="${color}"
                  >

                    <span
                      class="color-dot"
                      style="background:${colorToHex(
                        color
                      )}"
                    ></span>

                    ${color}

                  </button>
                `
              )
              .join("")}

          </div>

        </div>


        <!-- SIZE -->

        <div class="option-group">

          <div class="option-label">

            <span>
              Size
            </span>

            <span data-selected-size>
              ${product.sizes[0]}
            </span>

          </div>


          <div
            class="option-list"
            data-size-options
          >

            ${product.sizes
              .map(
                (
                  size,
                  index
                ) => `
                  <button
                    class="option-button ${
                      index === 0
                        ? "is-active"
                        : ""
                    }"
                    type="button"
                    data-size="${size}"
                  >
                    ${size}
                  </button>
                `
              )
              .join("")}

          </div>

        </div>


        <!-- QUANTITY -->

        <div class="option-group">

          <div class="option-label">
            <span>
              Quantity
            </span>
          </div>

          <div class="quantity-row">

            <button
              class="qty-btn"
              type="button"
              data-detail-qty="-1"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span
              class="qty-value"
              data-detail-qty-value
            >
              1
            </span>

            <button
              class="qty-btn"
              type="button"
              data-detail-qty="1"
              aria-label="Increase quantity"
            >
              +
            </button>

          </div>

        </div>


        <!-- CTA -->

        <div class="product-cta-grid">

          <button
            class="btn btn-primary"
            type="button"
            data-detail-add
          >
            Add to Cart
          </button>

          <button
            class="icon-btn"
            type="button"
            data-wishlist="${product.id}"
            aria-label="Add to wishlist"
          >
            ${icon("heart")}
          </button>

          <button
            class="btn btn-accent buy-now"
            type="button"
            data-buy-now
          >
            Buy Now
          </button>

        </div>


        <!-- ACCORDION -->

        <div class="detail-accordions">

          <div class="accordion-item is-open">

            <button
              class="accordion-button"
              type="button"
            >
              Product Details
              <span>−</span>
            </button>

            <div class="accordion-content">
              Designed for everyday use with durable
              materials, clean construction, and
              understated detailing. Prototype content
              can later be replaced with backend product
              specifications.
            </div>

          </div>


          <div class="accordion-item">

            <button
              class="accordion-button"
              type="button"
            >
              Description
              <span>+</span>
            </button>

            <div class="accordion-content">
              ${product.description}
            </div>

          </div>


          <div class="accordion-item">

            <button
              class="accordion-button"
              type="button"
            >
              Shipping Information
              <span>+</span>
            </button>

            <div class="accordion-content">
              Standard delivery: 3–5 business days.
              Express delivery: 1–2 business days.
              Delivery times are demonstration values
              for this front-end prototype.
            </div>

          </div>


          <div class="accordion-item">

            <button
              class="accordion-button"
              type="button"
            >
              Reviews
              <span>+</span>
            </button>

            <div class="accordion-content">
              Rated ${product.rating}/5 from sample review
              data. A real review system can be connected
              after backend integration.
            </div>

          </div>

        </div>

      </div>

    </div>
  `;


  /* SELECTED PRODUCT VALUES */

  let selectedColor =
    product.colors[0];

  let selectedSize =
    product.sizes[0];

  let quantity = 1;


  /* COLOR SELECTOR */

  mount
    .querySelectorAll(
      "[data-color]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          selectedColor =
            button.dataset.color;

          mount
            .querySelectorAll(
              "[data-color]"
            )
            .forEach((item) =>
              item.classList.toggle(
                "is-active",
                item === button
              )
            );

          mount.querySelector(
            "[data-selected-color]"
          ).textContent =
            selectedColor;
        }
      );
    });


  /* SIZE SELECTOR */

  mount
    .querySelectorAll(
      "[data-size]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          selectedSize =
            button.dataset.size;

          mount
            .querySelectorAll(
              "[data-size]"
            )
            .forEach((item) =>
              item.classList.toggle(
                "is-active",
                item === button
              )
            );

          mount.querySelector(
            "[data-selected-size]"
          ).textContent =
            selectedSize;
        }
      );
    });


  /* QUANTITY */

  mount
    .querySelectorAll(
      "[data-detail-qty]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          quantity = Math.max(
            1,
            Math.min(
              10,
              quantity +
                Number(
                  button.dataset
                    .detailQty
                )
            )
          );

          mount.querySelector(
            "[data-detail-qty-value]"
          ).textContent =
            quantity;
        }
      );
    });


  /* ADD CART */

  mount
    .querySelector(
      "[data-detail-add]"
    )
    ?.addEventListener(
      "click",
      () => {
        addToCart(
          product.id,
          quantity,
          {
            color:
              selectedColor,
            size:
              selectedSize
          }
        );
      }
    );


  /* BUY NOW */

  mount
    .querySelector(
      "[data-buy-now]"
    )
    ?.addEventListener(
      "click",
      () => {
        addToCart(
          product.id,
          quantity,
          {
            color:
              selectedColor,
            size:
              selectedSize
          }
        );

        window.location.href =
          "checkout.html";
      }
    );


  /* ACCORDION */

  mount
    .querySelectorAll(
      ".accordion-button"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          const item =
            button.closest(
              ".accordion-item"
            );

          const open =
            item.classList.toggle(
              "is-open"
            );

          button.querySelector(
            "span"
          ).textContent =
            open
              ? "−"
              : "+";
        }
      );
    });


  /* RELATED PRODUCTS */

  const related =
    products
      .filter(
        (item) =>
          item.category ===
            product.category &&
          item.id !==
            product.id
      )
      .slice(0, 4);

  renderProductCollection(
    document.querySelector(
      "[data-related-products]"
    ),
    related
  );

  syncWishlistButtons();
}


/* =========================================================
   CART TOTALS
========================================================= */

function cartTotals(
  cart = getCart()
) {
  const subtotal =
    cart.reduce(
      (sum, item) => {
        const product =
          products.find(
            (p) =>
              p.id ===
              item.productId
          );

        return (
          sum +
          (product?.price || 0) *
            item.quantity
        );
      },
      0
    );

  const shipping =
    subtotal === 0 ||
    subtotal >= 2500
      ? 0
      : 120;

  const discount =
    subtotal >= 5000
      ? Math.round(
          subtotal * 0.05
        )
      : 0;

  return {
    subtotal,
    shipping,
    discount,
    total:
      subtotal +
      shipping -
      discount
  };
}


/* =========================================================
   CART PAGE
========================================================= */

function renderCartPage() {
  const list =
    document.querySelector(
      "[data-cart-list]"
    );

  if (!list) return;

  const summary =
    document.querySelector(
      "[data-cart-summary]"
    );

  const actions =
    document.querySelector(
      "[data-cart-actions]"
    );

  const cart = getCart();


  /* EMPTY CART */

  if (!cart.length) {
    list.innerHTML = `
      <div class="empty-state">

        <div class="empty-state-inner">

          <h3>
            Your cart is empty
          </h3>

          <p>
            Browse the collection and add
            something you’ll use often.
          </p>

          <a
            class="btn btn-primary"
            href="shop.html"
          >
            Continue Shopping
          </a>

        </div>

      </div>
    `;

    if (summary) {
      summary.innerHTML = `
        <h2>
          Order Summary
        </h2>

        <div class="summary-row total">

          <span>
            Total
          </span>

          <strong>
            ${money.format(0)}
          </strong>

        </div>

        <a
          class="btn btn-primary btn-block is-disabled"
          href="#"
          aria-disabled="true"
        >
          Proceed to Checkout
        </a>
      `;
    }

    if (actions) {
      actions.hidden = true;
    }

    return;
  }


  /* CART PRODUCTS */

  list.innerHTML =
    cart
      .map((item) => {
        const product =
          products.find(
            (p) =>
              p.id ===
              item.productId
          );

        if (!product) {
          return "";
        }

        return `
          <article class="cart-item">

            <a
              class="cart-item-image"
              href="product.html?id=${product.id}"
            >

              <img
                src="${product.image}"
                alt="${product.name}"
              >

            </a>


            <div>

              <h3>

                <a
                  href="product.html?id=${product.id}"
                >
                  ${product.name}
                </a>

              </h3>


              <div class="cart-item-meta">

                ${item.color}
                ·
                ${item.size}
                ·
                ${money.format(
                  product.price
                )}

              </div>


              <div class="cart-item-actions">

                <div class="quantity-row">

                  <button
                    class="qty-btn"
                    type="button"
                    data-cart-qty="-1"
                    data-cart-key="${item.key}"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>


                  <span class="qty-value">
                    ${item.quantity}
                  </span>


                  <button
                    class="qty-btn"
                    type="button"
                    data-cart-qty="1"
                    data-cart-key="${item.key}"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                </div>


                <button
                  class="remove-link"
                  type="button"
                  data-cart-remove="${item.key}"
                >
                  Remove
                </button>

              </div>

            </div>


            <div class="item-total">

              ${money.format(
                product.price *
                  item.quantity
              )}

            </div>

          </article>
        `;
      })
      .join("");


  const totals =
    cartTotals(cart);


  /* ORDER SUMMARY */

  if (summary) {
    summary.innerHTML = `
      <h2>
        Order Summary
      </h2>


      <div class="summary-row">

        <span>
          Subtotal
        </span>

        <strong>
          ${money.format(
            totals.subtotal
          )}
        </strong>

      </div>


      <div class="summary-row">

        <span>
          Shipping
        </span>

        <strong>

          ${
            totals.shipping
              ? money.format(
                  totals.shipping
                )
              : "Free"
          }

        </strong>

      </div>


      <div class="summary-row">

        <span>
          Discount
        </span>

        <strong>

          ${
            totals.discount
              ? `−${money.format(
                  totals.discount
                )}`
              : money.format(0)
          }

        </strong>

      </div>


      <div class="summary-row total">

        <span>
          Total
        </span>

        <strong>
          ${money.format(
            totals.total
          )}
        </strong>

      </div>


      <a
        class="btn btn-primary btn-block"
        href="checkout.html"
      >
        Proceed to Checkout
      </a>


      <p class="summary-note">
        Free shipping on orders over ₱2,500.
        5% demo discount on orders over ₱5,000.
      </p>
    `;
  }

  if (actions) {
    actions.hidden = false;
  }
}


/* =========================================================
   CART PAGE EVENTS
========================================================= */

function initCartPage() {
  if (
    !document.querySelector(
      "[data-cart-list]"
    )
  ) {
    return;
  }

  renderCartPage();


  document.addEventListener(
    "click",
    (event) => {
      const qty =
        event.target.closest(
          "[data-cart-qty]"
        );

      if (qty) {
        updateCartQuantity(
          qty.dataset.cartKey,
          Number(
            qty.dataset.cartQty
          )
        );
      }


      const remove =
        event.target.closest(
          "[data-cart-remove]"
        );

      if (remove) {
        removeFromCart(
          remove.dataset.cartRemove
        );
      }


      const clear =
        event.target.closest(
          "[data-clear-cart]"
        );

      if (clear) {
        setCart([]);

        showToast(
          "Cart cleared."
        );
      }
    }
  );


  document.addEventListener(
    "cart:updated",
    renderCartPage
  );
}


/* =========================================================
   CHECKOUT ORDER SUMMARY
========================================================= */

function renderCheckoutSummary() {
  const target =
    document.querySelector(
      "[data-checkout-summary]"
    );

  if (!target) return;

  const cart =
    getCart();

  const totals =
    cartTotals(cart);

  target.innerHTML = `
    <h2>
      Order Summary
    </h2>


    <div class="checkout-items">

      ${
        cart.length
          ? cart
              .map((item) => {
                const p =
                  products.find(
                    (product) =>
                      product.id ===
                      item.productId
                  );

                if (!p) {
                  return "";
                }

                return `
                  <div class="checkout-item">

                    <div class="checkout-thumb">

                      <img
                        src="${p.image}"
                        alt="${p.name}"
                      >

                      <span class="checkout-qty">
                        ${item.quantity}
                      </span>

                    </div>


                    <div class="checkout-item-name">

                      ${p.name}

                      <br>

                      <span class="muted">
                        ${item.color}
                        ·
                        ${item.size}
                      </span>

                    </div>


                    <div class="checkout-item-price">

                      ${money.format(
                        p.price *
                          item.quantity
                      )}

                    </div>

                  </div>
                `;
              })
              .join("")
          : `
              <p class="muted">
                Your cart is empty.
              </p>
            `
      }

    </div>


    <div class="summary-row">

      <span>
        Subtotal
      </span>

      <strong>
        ${money.format(
          totals.subtotal
        )}
      </strong>

    </div>


    <div class="summary-row">

      <span>
        Shipping
      </span>

      <strong>

        ${
          totals.shipping
            ? money.format(
                totals.shipping
              )
            : "Free"
        }

      </strong>

    </div>


    <div class="summary-row">

      <span>
        Discount
      </span>

      <strong>

        ${
          totals.discount
            ? `−${money.format(
                totals.discount
              )}`
            : money.format(0)
        }

      </strong>

    </div>


    <div class="summary-row total">

      <span>
        Total
      </span>

      <strong>
        ${money.format(
          totals.total
        )}
      </strong>

    </div>
  `;
}


/* =========================================================
   FORM VALIDATION
========================================================= */

function validateRequiredForm(form) {
  let valid = true;

  form
    .querySelectorAll(
      "[required]"
    )
    .forEach((field) => {
      const wrapper =
        field.closest(
          ".form-field"
        );

      const fieldValid =
        field.checkValidity();

      wrapper?.classList.toggle(
        "has-error",
        !fieldValid
      );

      if (
        !fieldValid &&
        valid
      ) {
        field.focus();

        valid = false;
      }
    });

  return valid;
}


/* =========================================================
   CHECKOUT PAGE
========================================================= */

function initCheckoutPage() {
  const form =
    document.querySelector(
      "[data-checkout-form]"
    );

  if (!form) return;

  renderCheckoutSummary();

  const placeOrder =
    form.querySelector(
      "[data-place-order]"
    );

  if (
    !getCart().length &&
    placeOrder
  ) {
    placeOrder.disabled = true;
  }


  form.addEventListener(
    "input",
    (event) =>
      event.target
        .closest(
          ".form-field"
        )
        ?.classList.remove(
          "has-error"
        )
  );


  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();


      if (
        !getCart().length
      ) {
        showToast(
          "Your cart is empty."
        );

        return;
      }


      if (
        !validateRequiredForm(
          form
        )
      ) {
        return;
      }


      const orderNo =
        `AU-${String(
          Date.now()
        ).slice(-6)}`;


      setCart([]);


      form.innerHTML = `
        <div class="empty-state">

          <div class="empty-state-inner">

            <p class="eyebrow">
              Order received
            </p>

            <h3>
              Thank you for your order.
            </h3>

            <p>
              Your demo order
              <strong>
                ${orderNo}
              </strong>
              has been created.
              No real payment was processed.
            </p>

            <a
              class="btn btn-primary"
              href="shop.html"
            >
              Continue Shopping
            </a>

          </div>

        </div>
      `;


      renderCheckoutSummary();


      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );
}


/* =========================================================
   FORM MESSAGE
========================================================= */

function setMessage(
  element,
  text,
  type
) {
  if (!element) return;

  element.className =
    `form-message is-visible ${type}`;

  element.textContent =
    text;
}


/* =========================================================
   LOGIN
========================================================= */

function initLoginPage() {
  const form =
    document.querySelector(
      "[data-login-form]"
    );

  if (!form) return;

  const message =
    document.querySelector(
      "[data-form-message]"
    );


  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();


      const email =
        form.email.value.trim();

      const password =
        form.password.value;


      if (
        !email ||
        !/^\S+@\S+\.\S+$/.test(
          email
        )
      ) {
        setMessage(
          message,
          "Enter a valid email address.",
          "error"
        );

        return;
      }


      if (
        password.length < 6
      ) {
        setMessage(
          message,
          "Password must contain at least 6 characters for this demo.",
          "error"
        );

        return;
      }


      localStorage.setItem(
        STORE_KEYS.demoUser,
        JSON.stringify({
          email,
          firstName:
            email.split("@")[0]
        })
      );


      setMessage(
        message,
        "Demo login successful. Opening your account…",
        "success"
      );


      setTimeout(() => {
        window.location.href =
          "account.html";
      }, 500);
    }
  );
}


/* =========================================================
   REGISTER
========================================================= */

function initRegisterPage() {
  const form =
    document.querySelector(
      "[data-register-form]"
    );

  if (!form) return;

  const message =
    document.querySelector(
      "[data-form-message]"
    );


  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();


      const data =
        new FormData(form);


      const firstName =
        String(
          data.get(
            "firstName"
          ) || ""
        ).trim();


      const lastName =
        String(
          data.get(
            "lastName"
          ) || ""
        ).trim();


      const email =
        String(
          data.get(
            "email"
          ) || ""
        ).trim();


      const password =
        String(
          data.get(
            "password"
          ) || ""
        );


      const confirm =
        String(
          data.get(
            "confirmPassword"
          ) || ""
        );


      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !confirm
      ) {
        setMessage(
          message,
          "Complete all required fields.",
          "error"
        );

        return;
      }


      if (
        !/^\S+@\S+\.\S+$/.test(
          email
        )
      ) {
        setMessage(
          message,
          "Enter a valid email address.",
          "error"
        );

        return;
      }


      if (
        password.length < 8
      ) {
        setMessage(
          message,
          "Password must be at least 8 characters.",
          "error"
        );

        return;
      }


      if (
        password !== confirm
      ) {
        setMessage(
          message,
          "Passwords do not match.",
          "error"
        );

        return;
      }


      localStorage.setItem(
        STORE_KEYS.demoUser,
        JSON.stringify({
          firstName,
          lastName,
          email
        })
      );


      setMessage(
        message,
        "Demo account created. You can now open your account dashboard.",
        "success"
      );


      form.reset();
    }
  );
}


/* =========================================================
   GET DEMO USER
========================================================= */

function getDemoUser() {
  try {
    return (
      JSON.parse(
        localStorage.getItem(
          STORE_KEYS.demoUser
        )
      ) || null
    );
  } catch {
    return null;
  }
}


/* =========================================================
   ACCOUNT WISHLIST
========================================================= */

function renderAccountWishlist() {
  const target =
    document.querySelector(
      "[data-account-wishlist]"
    );

  if (!target) return;


  const list =
    products.filter(
      (p) =>
        getWishlist().includes(
          p.id
        )
    );


  if (!list.length) {
    target.innerHTML = `
      <div class="empty-state">

        <div class="empty-state-inner">

          <h3>
            Your wishlist is empty
          </h3>

          <p>
            Save products with the heart icon
            and they’ll appear here.
          </p>

          <a
            class="btn btn-primary"
            href="shop.html"
          >
            Browse Products
          </a>

        </div>

      </div>
    `;
  } else {
    target.innerHTML = `
      <div class="product-grid">

        ${list
          .map(productCard)
          .join("")}

      </div>
    `;

    syncWishlistButtons();
  }
}


/* =========================================================
   ACCOUNT PAGE
========================================================= */

function initAccountPage() {
  const nav =
    document.querySelector(
      "[data-account-nav]"
    );

  if (!nav) return;


  const user =
    getDemoUser();


  /* ACCOUNT NAME */

  document
    .querySelectorAll(
      "[data-account-name]"
    )
    .forEach((el) => {
      const value =
        user?.firstName ||
        "User";

      if (
        el.matches(
          "input, textarea"
        )
      ) {
        el.value =
          value;
      } else {
        el.textContent =
          value;
      }
    });


  /* ACCOUNT EMAIL */

  document
    .querySelectorAll(
      "[data-account-email]"
    )
    .forEach((el) => {
      const value =
        user?.email ||
        "user@example.com";

      if (
        el.matches(
          "input, textarea"
        )
      ) {
        el.value =
          value;
      } else {
        el.textContent =
          value;
      }
    });


  /* DASHBOARD TABS */

  const showPanel =
    (name) => {
      nav
        .querySelectorAll(
          "[data-account-tab]"
        )
        .forEach((btn) =>
          btn.classList.toggle(
            "is-active",
            btn.dataset
              .accountTab ===
              name
          )
        );


      document
        .querySelectorAll(
          "[data-account-panel]"
        )
        .forEach((panel) =>
          panel.classList.toggle(
            "is-active",
            panel.dataset
              .accountPanel ===
              name
          )
        );


      if (
        name === "wishlist"
      ) {
        renderAccountWishlist();
      }
    };


  nav
    .querySelectorAll(
      "[data-account-tab]"
    )
    .forEach((button) => {
      button.addEventListener(
        "click",
        () =>
          showPanel(
            button.dataset
              .accountTab
          )
      );
    });


  /* DEMO LOGOUT */

  document
    .querySelector(
      "[data-demo-logout]"
    )
    ?.addEventListener(
      "click",
      () => {
        localStorage.removeItem(
          STORE_KEYS.demoUser
        );

        showToast(
          "Demo session cleared."
        );


        setTimeout(() => {
          window.location.href =
            "login.html";
        }, 400);
      }
    );


  document.addEventListener(
    "wishlist:updated",
    renderAccountWishlist
  );
}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

function initPage() {
  renderHeader();

  renderFooter();

  updateCartCount();

  bindGlobalEvents();

  initHomePage();

  initShopPage();

  initProductPage();

  initCartPage();

  initCheckoutPage();

  initLoginPage();

  initRegisterPage();

  initAccountPage();

  syncWishlistButtons();
}


/* =========================================================
   START APP
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  initPage
);