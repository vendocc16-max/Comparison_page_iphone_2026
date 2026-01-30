export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-caption text-gray-500 mb-4">
            * Priserna kan variera. Kontrollera aktuella priser hos din återförsäljare.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-caption text-gray-400">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Integritetspolicy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Villkor
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Försäljning och återbetalningar
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Webbplatskarta
            </a>
          </div>
          <p className="text-small text-gray-400 mt-6">
            Copyright © 2026 Apple Inc. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
