const Footer = () => (
  <footer className="w-full bottom-0">
    <section className="bg-gray-200">
      <a className="inline-block py-3 px-4 text-gray-600 text-sm">Brasil</a>
    </section>
    <section className="bg-gray-200 flex flex-row justify-between">
      <nav>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">Sobre</a>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">
          Publicidade
        </a>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">Negócios</a>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">
          Como funciona a Pesquisa
        </a>
      </nav>
      <nav>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">
          Privacidade
        </a>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">Termos</a>
        <a className="inline-block py-3 px-4 text-gray-600 text-sm">
          Configurações
        </a>
      </nav>
    </section>
  </footer>
);

export default Footer;
