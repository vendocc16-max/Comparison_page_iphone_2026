export default function Header() {
  return (
    <header className="bg-apple-gray-100 border-b border-apple-gray-200">
      <div className="container-apple py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-apple-gray-800 hover:text-apple-gray-600 transition-colors">
            <svg
              className="w-5 h-5"
              viewBox="0 0 17 48"
              fill="currentColor"
              aria-label="Apple"
            >
              <path d="M15.5752 19.0792C15.4896 19.1464 13.7224 20.1536 13.7224 22.3448C13.7224 24.8752 15.9776 25.7768 16.0488 25.8016C16.0344 25.8544 15.6816 27.0544 14.8248 28.2832C14.0712 29.3624 13.2824 30.4384 12.0744 30.4384C10.8664 30.4384 10.5528 29.6936 9.1464 29.6936C7.776 29.6936 7.2984 30.4672 6.1848 30.4672C5.0712 30.4672 4.3112 29.4656 3.4344 28.2256C2.4192 26.7848 1.5856 24.5576 1.5856 22.4384C1.5856 18.9536 3.8768 17.1056 6.1336 17.1056C7.3056 17.1056 8.2792 17.9144 9.0168 17.9144C9.7184 17.9144 10.8088 17.0616 12.1528 17.0616C12.6448 17.0616 14.412 17.1056 15.5752 19.0792ZM11.236 14.1728C11.7856 13.5112 12.172 12.5952 12.172 11.6792C12.172 11.5496 12.1584 11.4168 12.1296 11.312C11.2496 11.3512 10.2144 11.9024 9.5792 12.6504C9.0872 13.2232 8.6152 14.1392 8.6152 15.0688C8.6152 15.2128 8.6432 15.3568 8.6576 15.408C8.7152 15.4192 8.8088 15.4336 8.9024 15.4336C9.6936 15.4336 10.6504 14.9024 11.236 14.1728Z" />
            </svg>
          </a>
          <h1 className="text-body font-medium text-apple-gray-800">
            Jämför iPhone-modeller
          </h1>
          <a href="#" className="link text-body">
            Köp iPhone
          </a>
        </nav>
      </div>
    </header>
  );
}
