import { LuPlus } from "react-icons/lu";
import { IoRemoveOutline } from "react-icons/io5";

import { cardMenu } from "../../../interfaces/cards/CardMenu";
import React from "react";
import clsx from "clsx";

function CardMenu(props: cardMenu) {
  return (
    <div className="dark:shadow-sha_dark group flex min-h-32 w-full flex-col rounded-lg bg-primary_ p-4 shadow-xl3 transition-transform duration-300 hover:-translate-y-3 dark:bg-secondary_dark">
      <h3 className="mb-2 font-semibold text-gray dark:text-white">
        {props.title}
      </h3>
      <div className="flex items-center justify-between">
        <div className="mb-2 flex items-center gap-1">
          <div className="text-2xl font-bold text-secundary transition duration-300 group-hover:text-primary dark:text-white">
            {props.total}
          </div>
          <span
            className={clsx('text-normal ml-2 flex items-center font-semibold',
              { 'text-success': props.Profitable > 0 },
              { 'text-danger': props.Profitable <= 0 }
            )}
          >
            {props.Profitable > 0 ? (
              <LuPlus className="text-success" size={10} />
            ) : (
              <IoRemoveOutline className="text-danger" size={10} />
            )}
            {props.Profitable > 0 ? props.Profitable : props.Profitable * -1}%
          </span>
        </div>
        <div className={clsx('mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-opacity-15 text-xl', props.className)}>
          {props.icon}
        </div>
      </div>
      <div className="text-gray-400 flex text-xs dark:text-white/80">
        {props.sbtitle}
      </div>
    </div>
  );
}

export default CardMenu;
