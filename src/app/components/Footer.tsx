// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="mt-20 px-6 py-10 border-t border-black bg-white flex flex-col sm:flex-row justify-between items-center text-sm text-black">
        <div className="mb-6 sm:mb-0 sm:text-left text-center">
          <h4 className="font-semibold mb-2">Join our community</h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-1 border border-black rounded-full text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-1 border border-black rounded-full hover:bg-black hover:text-white transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
  
        <p className="text-xs text-gray-600">&copy; 2025 Amghar. Tous droits réservés.</p>
      </footer>
    )
  }
  