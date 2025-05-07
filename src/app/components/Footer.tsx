export default function Footer() {
  return (
    <footer className="mt-20 px-6 py-10 border-t border-black bg-white flex flex-col sm:flex-row justify-between items-center text-sm text-black">
      <div className="mb-6 sm:mb-0 sm:text-left text-center">
        <h4 className="font-semibold mb-2">Join our community</h4>
        <form className="flex items-center gap-0 overflow-hidden rounded-md shadow-md">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-none text-sm focus:outline-none text-black bg-white border border-black border-r-0 font-serif tracking-wide"
          />
          <button type="submit" className="text-sm px-2 py-1.5 font-serif tracking-wide" >Subscribe</button>
        </form>
      </div>
      <p className="text-xs text-gray-600">&copy; 2025 Amghar. Tous droits réservés.</p>
    </footer>
  );
}
