import React, {useRef} from 'react';
import {SlideMenu} from 'primereact/slidemenu';
import {Button} from 'primereact/button';
import {Avatar} from "primereact/avatar";

export default function AppUserSettings() {
    const menu = useRef(null);
    const items = [
        {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
        },
        {
            separator: true
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <SlideMenu ref={menu} model={items} popup viewportHeight={100}
                       menuWidth={175}/>
            <Button onClick={(event) => menu.current.toggle(event)} className="w-full p-link flex align-items-center">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                <div className="flex flex-column align">
                    <span className="font-bold">Amy Elsner</span>
                </div>
            </Button>

        </div>
    )
}