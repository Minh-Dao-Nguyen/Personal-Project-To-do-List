import { Link } from 'react-router-dom';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { link } from 'fs';

type Props = {}

const SideNavBar = (props: Props) => {

    const flexBetween = "flex items-center justify-center flex-col";
    const textType = "text-white text-2xl text-center";
    const linKContainer = "w-full h-20 flex items-center justify-center"

  return (
    <div className={`${flexBetween} h-full  bg-primary-gray w-1/6 align-center border-gray-300 border-r-4`}>
        <div className={`${linKContainer} ${textType}`}>
            <Link to='/'>Planning</Link>
        </div>
        <div className={`${linKContainer} ${textType}`}>
            <Link to='/Project'>Projects</Link>
        </div>
        <div className={`${linKContainer} ${textType}`}>
            <Link to='/Tasks'>Tasks</Link>
        </div>
        <div className={`${linKContainer} ${textType}`}>
            <Link to='/Analytic'>Analytic</Link>
        </div>
    </div>
  )
}

export default SideNavBar;