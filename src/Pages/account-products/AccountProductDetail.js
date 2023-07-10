import React, {useState, useEffect} from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';
import {DataView} from 'primereact/dataview';
import {Divider} from 'primereact/divider';
import {Calendar} from 'primereact/calendar';
import AccountDetail from "../../components/AccountDetail";
import {AccountProductService} from "../../service/AccountProductService";

export default function AccountProductsDetail() {
    const items = [{label: 'Mis Productos'}, {label: 'Cuentas'}, {label: 'AHO1000'}, {label: 'Últimos Movimientos'}];
    const home = {icon: 'pi pi-home'}
    const [products, setProducts] = useState([]);
    const [date, setDate] = useState(null);

    useEffect(() => {
        AccountProductService.getProducts().then((data) => setProducts(data));
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
            <div className="card flex justify-content-center">
                <div className="filterDate p-inputgroup p-float-label">
                    <span className="p-float-label p-inputtext-sm">
                        <Calendar inputId="filter_date" value={date} onChange={(e) => setDate(e.value)}/>
                        <label htmlFor="filter_date">Buscar por fecha</label>
                        <i className="pi pi-calendar p-inputgroup-addon"/>
                    </span>
                </div>
            </div>
            <AccountDetail/>
        </div>
    )
}