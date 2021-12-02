// import Image from 'next/image'
import Particles from './Particles';

const cssBackgroundImage = {
    background: "linear-gradient( 109.6deg,  rgba(5,84,94,1) 16%, #bbb 91.1% )"  
};
export default function Background() {
    return (
        <>
            <div className="-z-1 inset-0 fixed h-screen w-screen opacity-50" 
                 style={cssBackgroundImage}
            >
                {/* <Image
                className="h-screen w-screen overflow-hidden"
                src="/background.jpeg"
                alt="Mountains"
                layout="fill"
                objectFit="cover"
                quality={30}
                priority
                />
                <div className="inset-0 fixed h-screen w-screen overflow-hidden bg-black	opacity-50"></div> */}
            </div>
            <Particles />
        </>
    );

}