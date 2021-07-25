import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = ({children}) => {
    return (  
        <div>
            <NavBar/>
            {children}
            <Footer/>
            {/* <style jsx>{`
                div {
                    position: relative;
                    min-height: 100vh;
                }
                footer {
                    position: absolute;
                    bottom: 0px;
                    height: 2rem;
                    width: 100%;}
            `}
            </style> */}
        </div>
    );
}
 
export default Layout;