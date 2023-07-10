import React, { useState } from "react";
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';



export default function LoginDemo() {
    const [value, setValue] = useState('');


    return (



        <div className="card flex justify-content-center contex">



            <div className="flex flex-column md:flex-row md:w-50rem">



                <div className="w-full md:w-4 flex align-items-center justify-content-center py-4">




                    <table class="default">
                        <tr>
                            <td>  <Image src="./banc.jpg" alt="Image" width="650" /></td>
                        </tr>
                        <tr>
                            <p>Cultivando tus sueños, construyendo tu futuro</p>
                        </tr>
                    </table>


                </div>



                <div className="w-full md:w-3">

                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b></b>
                    </Divider>
                </div>





                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="./banc.jpg" alt="hyper" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Registro</div>
                        <span className="text-600 font-medium line-height-3">Tienes una cuenta?</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Ingreso</a>
                    </div>

                    <div>

                    <label htmlFor="email" className="block text-900 font-medium mb-2">Correo</label>
                        <InputText id="email" type="text" placeholder="Ingresa tu Correo" className="w-full mb-3" />

<table class="default">
    
    <tr>
        <td>
        <label htmlFor="email" className="text-900 font-medium mb-2">Cedula</label>
                        <InputText id="email" type="text" placeholder="Ingresa tu Cedula" className="w-full mb-3" />  
        </td>
     
   <td>
        <label htmlFor="email" className=" text-900 font-medium mb-1">Usuario</label>
                         <InputText id="email" type="text" placeholder="Ingresa un Usuario" className="w-full mb-3" />  
     </td>
    </tr>
    <tr>
    <td>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Contraseña</label>
                        <InputText id="email" type="text" placeholder="Contraseña" className="w-full mb-3" />  
        </td>
     
   <td>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Validacion Contraseña</label>
                         <InputText id="email" type="text" placeholder="Ingrese nuevamente" className="w-full mb-3" />  
     </td>
    
 
      
     </tr>

    </table>


                 


                                             <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">

                                <label htmlFor="rememberme"></label>
                            </div>
                        
                        </div>

                        <Button label="Registro" icon="pi pi-user-plus" className="w-full" />
                    </div>
                </div>



            </div>
        </div>
    )
}
