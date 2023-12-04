export const Header = () => {
  return (
    <header className="fixed bg-dark w-full">
      <nav className="2xl:container relative mx-auto flex items-center justify-between px-5 py-10 md:px-20">
        <div className="flex items-center gap-5 z-50">
          {/* Logo */}
          <a
            href="./index.html"
            className="text-xl text-white tracking-widest uppercase mr-5"
          >
            Iqbal<span className="text-primary font-bold">zayn.</span>
          </a>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center justify-end gap-5 xl:gap-20">
          <li>
            <a
              href="#about"
              data-i18n="links.aboutme"
              className="text-xl text-white"
            >
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="text-xl text-white">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              data-i18n="links.contacts"
              className="text-xl text-white"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile: Menu */}
        <button type="button" className="md:hidden z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="fill-white"
          >
            <path d="M4 18C3.71667 18 3.47917 17.9042 3.2875 17.7125C3.09583 17.5208 3 17.2833 3 17C3 16.7167 3.09583 16.4792 3.2875 16.2875C3.47917 16.0958 3.71667 16 4 16H20C20.2833 16 20.5208 16.0958 20.7125 16.2875C20.9042 16.4792 21 16.7167 21 17C21 17.2833 20.9042 17.5208 20.7125 17.7125C20.5208 17.9042 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47917 12.9042 3.2875 12.7125C3.09583 12.5208 3 12.2833 3 12C3 11.7167 3.09583 11.4792 3.2875 11.2875C3.47917 11.0958 3.71667 11 4 11H20C20.2833 11 20.5208 11.0958 20.7125 11.2875C20.9042 11.4792 21 11.7167 21 12C21 12.2833 20.9042 12.5208 20.7125 12.7125C20.5208 12.9042 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};