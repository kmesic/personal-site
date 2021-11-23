import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Banner({ children }) {
    const [count, setCount] =  useState(0);

    return (
        <>
            {/* <div>
                Count: {count}
                <FontAwesomeIcon icon={faCoffee} />
                <button onClick={() => setCount(prevCount => prevCount + 1 )}>Increase</button>
            </div> */}

            <div className="z-1 w-full md:w-10/12 bg-cover bg-center h-auto bg-transparent text-white py-16 px-16 object-fill">
                {children}
            </div>
        </>
    );

}