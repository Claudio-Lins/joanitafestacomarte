
const Layout = ({ children }) => {
    return (
        <div className="antialiased mt-16 bg-white text-gray-900 flex justify-center min-h-screen">
            { children }
        </div>
    );
}
 
export default Layout;