'use client'
import styles from './styles.css'
export default function Navbar(){
    return(
        <div className="navbar">
            <img src="Queen.png" alt="logo" className="nav-logo"/>
            <h1 className="nav-title">HORSE GURL 4EVERRRR</h1>
            <a  onClick={() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth"
                })
            }} className="nav-link">IF UR A HORSE GURL CLICK HERE!!!!!!</a>
        </div>
       
    )
}