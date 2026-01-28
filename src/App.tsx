import { useState } from 'react';
import Header from './components/Header';
import ProductSelector from './components/ProductSelector';
import ComparisonTable from './components/ComparisonTable';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([
    'iphone-17',
    'iphone-17-air',
    'iphone-17-pro',
  ]);

  const handleProductToggle = (productId: string) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, productId];
    });
  };

  const selectedProductData = products.filter((p) => selectedProducts.includes(p.id));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductSelector
          products={products}
          selectedIds={selectedProducts}
          onToggle={handleProductToggle}
        />
        <ComparisonTable products={selectedProductData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
