const App = () => {
  return (
    <section>
      <header className="flex justify-end">
        <nav>
          <a className="inline-block py-3 px-4">Gmail</a>
          <a className="inline-block py-3 px-4">Imagens</a>
          <a className="inline-block py-3 px-4">Google Apps</a>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I5fM47yd-ZLmGipUXnd5OdeyYwbEjwnCHmk_PvnuA=s32-c-mo"
            className="rounded-full inline-block py-3 px-4"
          />
        </nav>
      </header>
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          className="mb-10"
        />

        <input className="w-1/2 h-10 mb-10 rounded-3xl border-2 hover:shadow-md md:w-1/4 lg:w-1/4 xl:1/4 2xl:1/4" />
        <section className="flex flex-row justify-evenly mb-10">
          <button className="bg-gray-200 py-2 px-4 font-light text-sm border hover:shadow-md ">
            Pesquisa Google
          </button>
          <button className="bg-gray-200 py-2 px-4 font-light text-sm border hover:shadow-md ">
            Estou com sorte
          </button>
        </section>
      </main>
      <footer>
        <section className="bg-gray-200">
          <a className="inline-block py-3 px-4 text-gray-600 text-sm">Brasil</a>
        </section>
        <section className="bg-gray-200 flex flex-row justify-between">
          <nav>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Sobre
            </a>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Publicidade
            </a>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Negócios
            </a>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Como funciona a Pesquisa
            </a>
          </nav>
          <nav>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Privacidade
            </a>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Termos
            </a>
            <a className="inline-block py-3 px-4 text-gray-600 text-sm">
              Configurações
            </a>
          </nav>
        </section>
      </footer>
    </section>
  );
};

export default App;
