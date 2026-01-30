import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-white">
      <main>
        <AppleComparison allProducts={products} selectedIds={selectedProducts} onSelectionChange={setSelectedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
