import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Client } from '../../../interfaces/global/clients/client.interface';
import TableEmpty from '../tableEmpty/tableEmpty';



export default function TableSimple({ clients }: { clients: Client[] }) {

    if (clients.length === 0)
        return <TableEmpty componentSVG={''} title='Sin Clientes' subtitle='Aún no se han registrado clientes en el sistema. Actualmente, la base de datos no contiene información de clientes.' />;


    const columns = Object.keys(clients[0]);

    console.log(columns);
    

    return <div className="dark:shadow-sha_dark group flex min-h-32 w-full flex-col rounded-lg bg-primary_ p-4 shadow-xl3 transition-transform duration-300 dark:bg-secondary_dark">
        <DataTable value={clients} tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="code" header="Code"></Column>
        </DataTable>
    </div>
}