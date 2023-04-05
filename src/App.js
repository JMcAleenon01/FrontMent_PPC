import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl m-auto sm:w-5/12 sm:h-2/3 w-10/12 h-10/12 sm:flex text-left'>
        <div className='sm:w-1/2 w-full'>
          <img className="w-full h-full rounded-l-2xl rounded-bl-2xl desk-view" src=".\images\image-product-desktop.jpg" alt="" />
          <img className="w-full h-full rounded-tr-2xl rounded-tl-2xl sm:hidden" src=".\images\image-product-mobile.jpg" alt="" />
        </div>
        <div className='sm:w-1/2 w-full flex flex-col justify-center'>
          <div className='m-6'>
            <h1 className='text-sm font-montserrat opacity-50 tracking-widester'>PERFUME</h1>
            <h2 className='text-3xl sm:text-3xl md:text-5xl  my-3 sm:my-7 font-semibold font-fraunces '>Gabrielle Essence Eau De Parfum</h2>
            <p className='mb-5 text-base md:text-base sm:text-xl font-montserrat opacity-50'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className='flex items-center my-2'>
              <h4 className='text-dark-cyan text-4xl font-bold mr-8 md:mr-3 sm:mr-8 font-fraunces'>$149.99</h4>
              <h5 className='line-through opacity-50 font-montserrat'>$169.99</h5>
            </div>
            <button className='w-full font-montserrat flex items-center justify-center font-semibold 
              py-4 mt-8 rounded-lg my-0 mx-auto 
              bg-dark-cyan text-white hover:bg-green-950'><img className='mr-2' src=".\images\icon-cart.svg" alt="" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;