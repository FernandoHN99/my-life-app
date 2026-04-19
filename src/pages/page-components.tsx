function PageComponents() {
   return (
      <div className="min-h-screen bg-white">
         <header className="bg-secundary-dark text-white p-4">
            Minha aplicação
         </header>

         <main className="p-8">
            <h1 className="text-secundary-dark text-3xl font-bold">
               Bem-vindo
            </h1>

            <p className="text-black mt-2">Organize seus dados com clareza.</p>

            <div className="mt-6 flex gap-4">
               <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-xl">
                  Começar
               </button>

               <button className="bg-secundary-light text-secundary-dark px-4 py-2 rounded-xl">
                  Ver mais
               </button>
            </div>
         </main>
      </div>
   )
}

export default PageComponents
