import Image from 'next/image'
import Particles from './Particles';

export default function Background() {
    return (
        <>
            <div className="-z-1 inset-0 fixed h-screen w-screen">
                <Image
                className="h-screen w-screen overflow-hidden"
                src="/background.jpeg"
                alt="Mountains"
                layout="fill"
                objectFit="cover"
                quality={30}
                />
                <div className="inset-0 fixed h-screen w-screen overflow-hidden bg-black	opacity-50"></div>
            </div>
            <Particles />
        </>
    );

}