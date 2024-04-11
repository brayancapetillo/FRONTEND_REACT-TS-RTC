import CardMenu from "../../components/cards/cardmenu/CardMenu";
import BarChart from "../../components/charts/barchart/BarChart";
import PieChart from "../../components/charts/piechart/PieChart";
import { LuCalendarClock } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { LuLineChart } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import TableSimple from "../../components/tables/tableSimple/tableSimple";
import { useEffect, useState } from "react";
import { Client } from "../../interfaces/global/clients/client.interface";
import { ClientService } from "../../services/data/clients.example";




function Home() {

  const [clients, setclients] = useState<Client[]>([]);

  useEffect(() => {
    ClientService.getBestClients(10).then(response => setclients(response))
  }, []);

  return (
    <div className="pb-10">
      <h1 className="text-2xl font-bold capitalize text-gray dark:text-white">
        Dashboard
      </h1>

      <div className="mt-4">
        <div className="place-contant-between grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          <CardMenu
            title="Rentas Septiembre"
            sbtitle="Las rentas este mes fueron las esperadas"
            total={13}
            Profitable={42.5}
            icon={LuBadgeCheck}
            color="#10b981"
          />
          <CardMenu
            title="Proximas rentas"
            sbtitle="El numero de rentas en los siguientes meses"
            total={8}
            Profitable={-10.2}
            icon={LuCalendarClock}
            color="#f43f5e"
          />
          <CardMenu
            title="Clientes"
            sbtitle="El numero de clientes crecio"
            total={57}
            Profitable={20.4}
            icon={LuUsers2}
            color="#6366f1"
          />
          <CardMenu
            title="Rentas totales"
            sbtitle="Este es el total de rentas de este anio"
            total={140}
            Profitable={8.8}
            icon={LuLineChart}
            color="#f59e0b"
          />
        </div>

        <div className="place-contant-between mt-8 grid w-full grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8">
          <div className="col-span-2 flex flex-col justify-start md:col-span-4 lg:col-span-3 xl:col-span-3">
            <PieChart
              title="Rentas totales Enero - Septiembre"
              subtitle="rentas"
              data={[
                { value: 11, name: "Enero" },
                { value: 8, name: "Febrero" },
                { value: 10, name: "Marzo" },
                { value: 4, name: "Abril" },
                { value: 12, name: "Mayo" },
                { value: 18, name: "Junio" },
                { value: 30, name: "Julio" },
                { value: 15, name: "Agosto" },
                { value: 30, name: "Septiembre" },
              ]}
            />
          </div>
          <div className="col-span-2 flex md:col-span-4 lg:col-span-5 xl:col-span-5 ">
            <BarChart
              title="Rentas totales Enero - Septiembre"
              data={[
                { value: 11, name: "Enero" },
                { value: 8, name: "Febrero" },
                { value: 10, name: "Marzo" },
                { value: 4, name: "Abril" },
                { value: 12, name: "Mayo" },
                { value: 18, name: "Junio" },
                { value: 30, name: "Julio" },
                { value: 15, name: "Agosto" },
                { value: 30, name: "Septiembre" },
              ]}
            />
          </div>
        </div>
      </div>

      <h1 className="mt-12 text-2xl font-bold capitalize text-gray dark:text-white">
        Mejores clientes
      </h1>
      <div className="mt-4">
        <TableSimple clients={clients} />
      </div>
    </div>
  );
}

export default Home;
