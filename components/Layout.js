
const Layout = ({ children }) => {
    return (
        <div className="antialiased bg-white text-gray-900 flex items-center justify-center min-h-screen">
            { children }
        </div>
    );
}
 
export default Layout;