import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { Client } from '../../../interfaces/global/clients/client.interface';
import TableEmpty from '../tableEmpty/tableEmpty';

import InSyncSVG from '../../../assets/ilustrations/export/In_sync'
import { column_Prime_Type } from '../../../interfaces/tables/column.interface';
import { typeColumn} from '../../../constants/table/tableSimple';



export default function TableSimple({ clients }: { clients: Client[] }) {

    if (clients.length === 0)
        return <TableEmpty componentSVG={<InSyncSVG className='fill-primary-500' />} title='Sin Clientes' subtitle='Aún no se han registrado clientes en el sistema. Actualmente, la base de datos no contiene información de clientes.' />;


    const columns: string[] = Object.keys(clients[0]).filter(key => typeColumn.hasOwnProperty(key));

    const columns_Type: column_Prime_Type[] = columns.map(key => ({
        field: key,
        header: key,
        Type: typeColumn[key as keyof typeof typeColumn]
    }));


    const type_column_table = (column: column_Prime_Type, client: Client[]) => {

        if (column.header === 'user') {
            return columnuser(column, client)
        }
    }

    const representativeBodyTemplate = (rowData: Client) => {
        const user = rowData.user;

        return (
            <div className="flex items-center gap-2">
                <img className='rounded-full'
                    alt={user.name}
                    src={user.avatar}
                    width="32"
                />
                <span>{user.name}</span>
            </div>
        );
    };

    const columnuser = (column: column_Prime_Type, client: Client[]) => {
        return <Column
            key={column.header}
            header={column.header}
            body={representativeBodyTemplate}
        ></Column>
    }


    return <div className="dark:shadow-sha_dark group flex min-h-32 w-full flex-col rounded-lg bg-primary_ p-4 shadow-xl3 transition-transform duration-300 dark:bg-secondary_dark">
        <DataTable dataKey="id" value={clients} emptyMessage="No customers found." tableStyle={{ minWidth: '50rem' }}>
            {columns_Type.map((column: column_Prime_Type) => (type_column_table(column, clients)))}
        </DataTable>
    </div>
}