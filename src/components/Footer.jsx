const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            DV
            <span className="text-cyan-500">Tools</span>
          </h2>
          <p className="text-gray-300 mt-3 text-sm">
Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Analytics Tool</li>
            <li className="hover:text-white cursor-pointer">SEO Checker</li>
            <li className="hover:text-white cursor-pointer">AI Writer</li>
            <li className="hover:text-white cursor-pointer">Design Kit</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Tutorials</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter (X)</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-900 py-4 text-center text-gray-400 text-sm">
        © 2026 DVTools. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;