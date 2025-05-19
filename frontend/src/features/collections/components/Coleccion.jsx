import { Link } from 'react-router-dom';
import './Coleccion.css';

// Importar imágenes desde assets
import fondoMorado from '../../../assets/img/fondomorado.jpg';
import camisetaFront from '../../../assets/img/cf.png';
import camisetaHover from '../../../assets/img/c1.png';
import sudaderaFront from '../../../assets/img/sf.png';
import sudaderaHover from '../../../assets/img/s1.png';
import gorraFront from '../../../assets/img/gf.png';
import gorraHover from '../../../assets/img/g1.png';

const Collection = () => {
  return (
    <section className="min-h-screen py-12" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fondoMorado})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
      <div className="container mx-auto px-4">
        <div className="text-wrapper mb-12 overflow-hidden">
          <div className="sliding-titles">
            <h1 className="title-slide">Summer Collection</h1>
            <h1 className="title-slide">Unidades limitadas</h1>
            <h1 className="title-slide">Solo disponible hasta Agosto</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/tiendacamisetas">
            <div className="bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="relative aspect-square group overflow-hidden">
                <img alt="collection" className="object-cover w-full h-full transition-all duration-500 absolute inset-0 transform scale-100 group-hover:scale-110 group-hover:opacity-0" src={camisetaFront} />
                <img alt="collection hover" className="object-cover w-full h-full transition-all duration-500 absolute inset-0 opacity-0 transform scale-110 group-hover:scale-100 group-hover:opacity-100" src={camisetaHover} />
              </div>
              
              <div className="p-6 border-t border-gray-700 bg-black">
                <div className="mb-4">
                  <p className="text-yellow-400 text-xs tracking-wider uppercase">COLECCIÓN</p>
                  <h2 className="text-white text-2xl mt-1 tracking-wide">Camisetas</h2>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-3xl text-white tracking-wide">12 Piezas</p>
                  <span className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 text-lg tracking-wide">
                    Ver Colección
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/tiendasudaderas">
            {/* Similar structure for Sudaderas */}
            <div className="bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="relative aspect-square group overflow-hidden">
                <img alt="collection" className="object-cover w-full h-full transition-all duration-500 absolute inset-0 transform scale-100 group-hover:scale-110 group-hover:opacity-0" src={sudaderaFront} />
                <img alt="collection hover" className="object-cover w-full h-full transition-all duration-500 absolute inset-0 opacity-0 transform scale-110 group-hover:scale-100 group-hover:opacity-100" src={sudaderaHover} />
              </div>
              
              <div className="p-6 border-t border-gray-700 bg-black">
                <div className="mb-4">
                  <p className="text-yellow-400 text-xs tracking-wider uppercase">COLECCIÓN</p>
                  <h2 className="text-white text-2xl mt-1 tracking-wide">Sudaderas</h2>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-3xl text-white tracking-wide">12 Piezas</p>
                  <span className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 text-lg tracking-wide">
                    Ver Colección
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/tiendagorras">
            {/* Similar structure for Gorras */}
            <div className="bg-black rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="relative aspect-square group overflow-hidden">
                <img alt="collection" className="object-cover w-full h-full transition-all duration-500 absolute inset-0 transform scale-100 group-hover:scale-110 group-hover:opacity-0" src={gorraFront} />
                <img alt="collection hover" className="object-cover w-full h-full transition-all duration-500 absolute inset-0 opacity-0 transform scale-110 group-hover:scale-100 group-hover:opacity-100" src={gorraHover} />
              </div>
              
              <div className="p-6 border-t border-gray-700 bg-black">
                <div className="mb-4">
                  <p className="text-yellow-400 text-xs tracking-wider uppercase">COLECCIÓN</p>
                  <h2 className="text-white text-2xl mt-1 tracking-wide">Gorras</h2>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-3xl text-white tracking-wide">12 Piezas</p>
                  <span className="bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2 text-lg tracking-wide">
                    Ver Colección
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
