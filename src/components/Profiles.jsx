'use client';
import Jenny from '../assets/Jenny_img.jpg'
import mexflag from '../assets/flag.png'
import spainflag from '../assets/spain.png'
import usflag from '../assets/estados-unidos.png'
// import brflag from '../assets/brasil.png'
// import Bauzan from '../assets/bauzan_img.jpg'
// import Bauzan2 from '../assets/bauzan_img_2.jpg'
// import Bauzan3 from '../assets/bauzan_img_3.jpg'
import Bauzan4 from '../assets/bauzan_img_4.jpg'
import Santi from '../assets/fotosanti.png'
import Melanie from '../assets/Melanie.jpg'
import React from 'react'
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { TiArrowForward } from "react-icons/ti";

const Profiles = () => {

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 xl:my-12">
    <div>
      
    <div className="flex flex-col items-center py-8">
      
        <div className='m-4'>
        <img src={Bauzan4} className='w-32 h-32 mb-3 rounded-full shadow-lg' />
        </div>

        <h5 className="mb-1 text-xl font-medium text-gray-900">Osvaldo Bauzan</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Fundador y Director Ejecutivo</span>
        <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
          <a
            href="https://www.linkedin.com/in/osvaldobauzan/"
            target="_blank"
            className="inline-flex items-center text-center"
          >
            <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
            <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
          </svg>
          </a>
          <a
            //href="#"
            className="inline-flex items-center text-center h-9"
          >
          <img src={mexflag} alt="" className='h-6 mt-2' />
          </a>
          
          <button onClick={() => setOpenModal(true)} className='bg-transparent text-black hover:bg-none'><TiArrowForward /></button>
          <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Body>
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Soy un Arquitecto Cloud graduado de Brigham Young University en Ciencias de la Computación. Con varios años de experiencia en el 
                mercado de soluciones tecnológicas, disfruto aprender idiomas (puedo comunicarme efectivamente en cinco), 
                me apasiona el ciclismo, los deportes, explorar el mundo y ayudar a los demás. Estoy listo para ayudarte a alcanzar tus objetivos digitales.
                </p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
    <div>
    <div className="flex flex-col items-center py-8">
                <div className='m-4'>
                  <img src={Santi} className="w-32 h-32 mb-3 rounded-full shadow-lg" />
                </div>

                <h5 className="mb-1 text-xl font-medium text-gray-900">Santiago Pulido</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Desarrollador Full Stack</span>
                <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
                  <a
                    href="https://www.linkedin.com/in/santiagopulidod02/"
                    target="_blank"
                    className="inline-flex items-center text-center"
                  >
                    <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                  </svg>
                  </a>
                  <a
                    //href="#"
                    className="inline-flex items-center text-center h-9"
                  >
                  <img src={spainflag} alt="" className='h-6 mt-2' />
                  </a>
                  <button onClick={() => setOpenModal2(true)} className='bg-transparent text-black hover:bg-none'><TiArrowForward /></button>
                    <Modal dismissible show={openModal2} onClose={() => setOpenModal2(false)}>
                    
                      <Modal.Body>
                        <div className="space-y-6">
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          Actualmente resido en Madrid, España, dedicando mi tiempo completo al desarrollo de Frontend y Backend. Busco entregar calidad en todo lo que desarrollo. 
                          Me apasiona(...) y estoy listo para materializar tus ideas en código.
                          </p>
                        </div>
                      </Modal.Body>
                    </Modal>
                </div>
              </div>
    </div>
    <div>
    <div className="flex flex-col items-center py-8 ">
                <div className='m-4'>
                <img src={Melanie} className='w-32 h-32 mb-3 rounded-full shadow-lg' />
                </div>

                <h5 className="mb-1 text-xl font-medium text-gray-900">Melanie Leon</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Directora de Operaciones</span>
                <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
                  <a
                    href="https://www.linkedin.com/in/melanie-leon-suaste-3047642b2/"
                    target="_blank"
                    className="inline-flex items-center text-center"
                  >
                    <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                  </svg>
                  </a>
                  <a
                    //href="#"
                    className="inline-flex items-center text-center h-9"
                  >
                  <img src={usflag} alt="" className='h-6 mt-2' />
                  </a>
                  <button onClick={() => setOpenModal4(true)} className='bg-transparent text-black hover:bg-none'><TiArrowForward /></button>
                    <Modal dismissible show={openModal4} onClose={() => setOpenModal4(false)}>
                      <Modal.Body>
                        <div className="space-y-6">
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          ¡Hola! Soy Melanie. Estudié Psicología en la Universidad IBERO Puebla y me encargo de asegurar el correcto funcionamiento de todo por aquí. 
                           Disfruto de mi tiempo libre leyendo y haciendo ejercicio, especialmente yoga, barre y danza latina.
                           Estaré encantada de explorar cómo podemos hacer crecer tu negocio.
                          </p>
                        </div>
                      </Modal.Body>
                    </Modal>
                </div>
              </div>
    </div>
    <div>
    <div className="flex flex-col items-center py-8 ">
                <div className='m-4'>
                <img src={Jenny} className='w-32 h-32 mb-3 rounded-full shadow-lg' />
                </div>

                <h5 className="mb-1 text-xl font-medium text-gray-900">Jennifer Bauzan</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Desarrolladora Back End Jr</span>
                <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
                  <a
                    href="https://www.linkedin.com/in/ada-jennifer-bauzan-alvaradejo-682417283/"
                    target="_blank"
                    className="inline-flex items-center text-center"
                  >
                    <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                  </svg>
                  </a>
                  <a
                    //href="#"
                    className="inline-flex items-center text-center h-9"
                  >
                  <img src={mexflag} alt="" className='h-6 mt-2' />
                  </a>
                  <button onClick={() => setOpenModal3(true)} className='bg-transparent text-black hover:bg-none'><TiArrowForward /></button>
                    <Modal dismissible show={openModal3} onClose={() => setOpenModal3(false)}>
                      <Modal.Body>
                        <div className="space-y-6">
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          Soy Jenny, estudiante de Ingeniería en Computación Inteligente en la Universidad Autónoma de Aguascalientes. Aunque equilibrar el trabajo con los estudios es un desafío, disfruto hacer que tus soluciones tecnológicas funcionen detrás del escenario. Me gusta la música y pasar tiempo con mi familia. Estoy lista para implementar los servidores virtuales que harán realidad tus sueños.
                          </p>
                        </div>
                      </Modal.Body>
                    </Modal>
                </div>
              </div>
    </div>
    
    
</div>


)
}

export default Profiles

{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-3xl">
       
  <div className="flex justify-center shadow-lg w-full ">
              
            </div>             
            <div className="w-full shadow-lg">
              <div className="flex flex-col items-center py-8 max-w-5xl ">
                <div className='h-28 m-4'>
                <img src={Jenny} className='h-full rounded-full' />
                </div>

                <h5 className="mb-1 text-xl font-medium text-gray-900">Jennyfer Bauzan Jr</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
                  <a
                    href="#"
                    className="inline-flex items-center text-center"
                  >
                    <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                  </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center text-center h-9"
                  >
                  <img src={mexflag} alt="" className='h-6 my-2' />
                  </a>
                </div>
              </div>
            </div>             
            <div className="w-full shadow-lg">
              <div className="flex flex-col items-center py-8 max-w-5xl ">
                <div className='h-28 m-4'>
                <img src={Jenny} className='h-full rounded-full' />
                </div>

                <h5 className="mb-1 text-xl font-medium text-gray-900">Jennyfer Bauzan Jr</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
                  <a
                    href="#"
                    className="inline-flex items-center text-center"
                  >
                    <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                    <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                  </svg>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center text-center h-9"
                  >
                  <img src={mexflag} alt="" className='h-6 my-2' />
                  </a>
                </div>
              </div>
            </div>             
</div> */}



// import React from 'react'
// import { Carousel, Card } from 'flowbite-react';
// import Jenny from '../assets/Jenny_img.jpg'
// import mexflag from '../assets/flag.png'
// import Bauzan from '../assets/bauzan_img.jpg'


//  function Profiles() {

     
//       return (
//         <div className="h-64 sm:h-full xl:h-96 2xl:h-96 justify-center lg:flex xl:flex 2xl:flex sm:hidden">
//           <Carousel indicators={false} className='h-full sm:h-full lg:h-full my-12 max-w-4xl 'leftControl="←" rightControl="→" >
//           <Card className="max-w-sm sm:max-w-xs">
//               <div className="flex flex-col items-center py-8  ">
//                 <div className='h-28 m-4'>
//                 <img src={Jenny} className='h-full rounded-full' />
//                 </div>

//                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jennyfer Bauzan Jr</h5>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
//                 <div className="mt-4 flex space-x-3 lg:mt-6">
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center h-9"
//                   >
//                    <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
//                     <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
//                   </svg>  
    
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center h-9"
//                   >
//                     <img src={mexflag} alt="" className='h-6 my-2' />
//                   </a>
//                 </div>
//               </div>
//             </Card>
//             <Card className="max-w-sm">
//               <div className="flex flex-col items-center py-8  ">
//                 <div className='h-28 m-4'>
//                 <img src={Jenny} className='h-full rounded-full' />
//                 </div>

//                 <h5 className="mb-1 text-xl font-medium text-gray-900">Jennyfer Bauzan Jr</h5>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
//                 <div className="mt-4 flex space-x-3 lg:mt-6 h-10">
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center"
//                   >
//                     {/* <svg className="w-[30px] h-[30px] text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                     <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
//                     <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
//                   </svg> */}
//                   </a>
//                   <a
//                     href="#"
//                     className="inline-flex items-center text-center h-9"
//                   >
//                   <img src={mexflag} alt="" className='h-6 my-2' />
//                   </a>
//                 </div>
//               </div>
//             </Card>
//           </Carousel>
//         </div>

//   )
// }