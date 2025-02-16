export default function Footer() {
  return (
    <footer className="py-8 bg-custom-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="flex items-center space-x-4">
            <img
              src="/app_logo.png"
              alt="Logo"
              className="w-8 h-8 rounded-lg"
            />

            <span className="text-xl text-gray-500 font-semibold">
              DepthStage
            </span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="/terms" className="text-gray-500 hover:text-green-300">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-500 hover:text-green-300">
              Privacy Policy
            </a>
            <a href="/contact" className="text-gray-500 hover:text-green-300">
              Contact
            </a>
          </nav>

          <div className="text-sm text-gray-400">© 2025 Shogo Isaji</div>
        </div>
      </div>
    </footer>
  );
}
