const Main = () => (
  <main className="min-h-screen w-full flex flex-col justify-center items-center">
    <img
      src="https://www.google.com/logos/doodles/2021/googles-23rd-birthday-6753651837109087-law.gif"
      className="mb-10"
    />
    <form
      action="https://google.com/search"
      method="get"
      class="mt-8 lg:w-2/6 sm:w-2/4"
      _lpchecked="1"
    >
      <div
        id="search-bar"
        class="flex items-center border rounded-full px-4 hover:shadow-md"
      >
        <input type="text" name="q" class="outline-none px-3 py-3 w-full" />
        <svg
          class="w-7 cursor-pointer"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            fill="#4285f4"
          ></path>
          <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
          <path
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            fill="#f4b400"
          ></path>
          <path
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            fill="#ea4335"
          ></path>
        </svg>
      </div>
      <section className="flex flex-row justify-evenly mt-10">
        <button className="bg-gray-200 py-2 px-4 mr-4 font-light text-sm border hover:shadow-md">
          Pesquisa Google
        </button>
        <button className="bg-gray-200 py-2 px-4 font-light text-sm border hover:shadow-md">
          Estou com sorte
        </button>
      </section>
    </form>
  </main>
);

export default Main;
