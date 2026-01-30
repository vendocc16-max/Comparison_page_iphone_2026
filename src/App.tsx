import { useState } from 'react';
import Header from './components/Header';
import AppleComparison from './components/AppleComparison';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  // Default: all products selected
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    'iphone-17-pro',
    'iphone-17-air',
    'iphone-17',
  ]);

  const selectedProductData = products.filter((p) => selectedProducts.includes(p.id));

  // Sort to match Apple's order: Pro, Air, 17
  const sortOrder = ['iphone-17-pro', 'iphone-17-air', 'iphone-17'];
  const sortedProducts = [...selectedProductData].sort(
    (a, b) => sortOrder.indexOf(a.id) - sortOrder.indexOf(b.id)
  );

  return (
    <div className="min-h-screen bg-white">
      <Header products={products} selectedIds={selectedProducts} onSelectionChange={setSelectedProducts} />
      <main>
        <AppleComparison products={sortedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
