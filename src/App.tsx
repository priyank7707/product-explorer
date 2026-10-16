import { useMemo, useState } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = [
    "All Categories",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesCategory =
        category === "All Categories" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "low-to-high") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    return result;
  }, [search, category, sortOrder]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setSortOrder("default");
  };

  return (
    <div className="app">
      <header className="topbar">
        <a href="#" className="brand" aria-label="Productly home">
          <span className="brand-icon">P</span>
          Productly
        </a>

        <span className="topbar-label">PRODUCT CATALOG</span>
      </header>

      <main className="main-content">
        <section className="hero">
          <span className="eyebrow">DISCOVER YOUR NEXT FAVORITE</span>

          <h1>
            Find products
            <br />
            <span>you'll love.</span>
          </h1>

          <p>
            Explore our curated collection of everyday essentials,
            technology, and accessories.
          </p>
        </section>

        <section className="catalog" aria-label="Product catalog">
          <div className="catalog-heading">
            <div>
              <h2>Explore products</h2>
              <p>Find the right product for you.</p>
            </div>

            <span className="result-count">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          <div className="toolbar">
            <SearchBar
              search={search}
              onSearchChange={setSearch}
            />

            <Filters
              categories={categories}
              category={category}
              onCategoryChange={setCategory}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon" aria-hidden="true">
                ⌕
              </div>

              <h3>No products found</h3>

              <p>
                We couldn't find any products matching your search or
                selected category. Try another search.
              </p>

              <button
                type="button"
                className="reset-button"
                onClick={resetFilters}
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Productly</span>
        <span>Simple shopping. Better discovery.</span>
      </footer>
    </div>
  );
}

export default App;