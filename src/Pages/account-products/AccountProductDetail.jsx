import React, {useState, useEffect} from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {DataView} from 'primereact/dataview';
import {Divider} from 'primereact/divider';
import AccountDetail from "./AccountDetail";
import {Button} from 'primereact/button';
import {useLocation, useNavigate} from "react-router-dom";
export default function AccountProductsDetail() {
    const location = useLocation();
    const data = location.state;
    const items = [
        {label: 'Mis Productos'},
        {label: 'Cuentas'},
        {label: data.id, url: '/accounts'},
        {label: 'Últimos Movimientos'}];
    const home = {icon: 'pi pi-home'}
      const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([data]);
    }, []);


    const gridItem = (product) => {
        return (
            <div className="col-12 sm:col-12 lg:col-12 xl:col-4 p-4">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{product.id}</span>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <span className="font-semibold">{product.code}</span>
                        </div>
                    </div>
                    <Divider/>
                    <div className="flex align-items-center justify-content-between">
                        <div className="flex align-items-center">Saldo disponible</div>
                        <div className="text-2xl font-bold">${product.availableBalance}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <div className="flex align-items-center">Saldo contable</div>
                        <div className="text-2xl font-bold">${product.totalBalance}</div>
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'grid')
            return gridItem(product);
    };

    return (
        <div>
            <BreadCrumb model={items} home={home}/>
            <div className="card">
                <DataView value={products} itemTemplate={itemTemplate} layout="grid"/>
            </div>
            <Divider/>
            <AccountDetail/>

            <div class="card">
                <div class="flex flex-wrap align-items-center justify-content-center card-container green-container">
                    <div class="w-12rem m-3 border-round">
                    </div>
                </div>
            </div>
        </div>
    )

}