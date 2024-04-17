
import { tableEmpty } from "../../../interfaces/tables/tableEmpty.interface";


export default function TableEmpty(data: tableEmpty) {
    
    return <div className="dark:shadow-sha_dark group grid justify-center min-h-32 w-full flex-col rounded-lg bg-primary_ p-4 shadow-xl3 transition-transform duration-300 dark:bg-secondary_dark">
        <div className="grid justify-center items-center m-10 w-[26rem] max-sm:w-48 max-sm:m-0">
            <div>{data.componentSVG()}</div>
            <h1 className="text-center text-secundary font-bold text-xl mt-8 dark:text-white">{data.title}</h1>
            <span className="mt-4 text-center text-gray text-base dark:text-white/80">{data.subtitle}</span>
        </div>
    </div>
}