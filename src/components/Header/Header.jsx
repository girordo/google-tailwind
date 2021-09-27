const Header = () => (
  <header className="flex justify-end">
    <nav>
      <a className="inline-block py-3 px-4 font-light hover:underline" href="#">
        Gmail
      </a>
      <a className="inline-block py-3 px-4 font-light hover:underline" href="#">
        Imagens
      </a>
      <a href="#">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADea4I5fM47yd-ZLmGipUXnd5OdeyYwbEjwnCHmk_PvnuA=s32-c-mo"
          className="rounded-full inline-block py-3 px-4"
        />
      </a>
    </nav>
  </header>
);

export default Header;
