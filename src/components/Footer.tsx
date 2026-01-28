export default function Footer() {
  return (
    <footer className="bg-apple-gray-100 border-t border-apple-gray-200">
      <div className="container-apple py-8">
        <div className="text-center">
          <p className="text-caption text-apple-gray-500 mb-4">
            * Priserna kan variera. Kontrollera aktuella priser hos din återförsäljare.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-caption text-apple-gray-400">
            <a href="#" className="hover:text-apple-gray-600 transition-colors">
              Integritetspolicy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-600 transition-colors">
              Villkor
            </a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-600 transition-colors">
              Försäljning och återbetalningar
            </a>
            <span>|</span>
            <a href="#" className="hover:text-apple-gray-600 transition-colors">
              Webbplatskarta
            </a>
          </div>
          <p className="text-small text-apple-gray-400 mt-6">
            Copyright © 2026 Apple Inc. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
