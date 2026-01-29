export default function Header() {
  return (
    <header className="bg-[#fbfbfd] border-b border-apple-gray-200">
      {/* Top Nav Bar */}
      <div className="bg-[#1d1d1f]">
        <div className="max-w-[980px] mx-auto px-6 h-11 flex items-center justify-between">
          <a href="/" className="text-[#f5f5f7] hover:text-white transition-colors">
            <svg
              className="w-[14px] h-[44px]"
              viewBox="0 0 14 44"
              fill="currentColor"
              aria-label="Apple"
            >
              <path d="M13.0729 17.6825C13.0135 17.7286 11.7688 18.4359 11.7688 19.9777C11.7688 21.7587 13.3561 22.3947 13.4041 22.4121C13.3966 22.4465 13.1479 23.2873 12.5398 24.1453C11.9959 24.9062 11.4277 25.6671 10.5667 25.6671C9.70576 25.6671 9.4698 25.1494 8.44883 25.1494C7.45167 25.1494 7.10174 25.6902 6.29636 25.6902C5.49098 25.6902 4.94088 24.9812 4.32893 24.1048C3.60827 23.0842 3.00003 21.5251 3.00003 20.0459C3.00003 17.5934 4.61388 16.2856 6.20393 16.2856C7.05272 16.2856 7.7617 16.8533 8.28514 16.8533C8.78478 16.8533 9.57871 16.262 10.5493 16.262C10.8874 16.262 12.1321 16.2856 13.0729 17.6825ZM10.6149 14.1617C10.9995 13.7049 11.2752 13.0793 11.2752 12.4537C11.2752 12.3667 11.2674 12.2779 11.2518 12.2026C10.6227 12.2258 9.87838 12.6129 9.42421 13.1367C9.07428 13.5371 8.74036 14.1617 8.74036 14.7969C8.74036 14.8927 8.75629 14.9885 8.76427 15.0229C8.80394 15.0307 8.86762 15.0385 8.93129 15.0385C9.49338 15.0385 10.198 14.6744 10.6149 14.1617Z" />
            </svg>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs text-[#f5f5f7]">
            <a href="#" className="hover:text-white transition-colors">Butik</a>
            <a href="#" className="hover:text-white transition-colors">Mac</a>
            <a href="#" className="hover:text-white transition-colors">iPad</a>
            <a href="#" className="hover:text-white transition-colors font-medium">iPhone</a>
            <a href="#" className="hover:text-white transition-colors">Watch</a>
            <a href="#" className="hover:text-white transition-colors">AirPods</a>
            <a href="#" className="hover:text-white transition-colors">Tv & Hem</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-[#f5f5f7] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-[#f5f5f7] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-12 overflow-x-auto">
          <a href="#" className="text-body font-semibold text-apple-gray-800 whitespace-nowrap">
            iPhone
          </a>
          <nav className="hidden md:flex items-center gap-5 text-xs text-apple-gray-500">
            <a href="#" className="hover:text-apple-gray-800 transition-colors">Utforska iPhone</a>
            <a href="#" className="hover:text-apple-gray-800 transition-colors font-medium text-apple-gray-800">Jämför modeller</a>
            <a href="#" className="hover:text-apple-gray-800 transition-colors">Byt telefon</a>
            <a href="#" className="hover:text-apple-gray-800 transition-colors">Mobilabonnemang</a>
            <a href="#" className="hover:text-apple-gray-800 transition-colors">iPhone och miljön</a>
            <a href="#" className="hover:text-apple-gray-800 transition-colors">Tillbehör</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
