export default function Banner({ children }) {
    return (
        <div className="z-1 w-full md:w-10/12 bg-cover bg-center h-auto bg-transparent text-white py-8 px-8 object-fill">
            {children}
        </div>
    );

}