import YTLogo from '../images/youtubelogo.png';
import Bell from '../images/bell.png';
import Video from  '../images/videocamera.png'
import '../styles/navbar.css'
function Navbar() {
    return (
        <div className="navbar">
           
           <div className="logo">
                <img width={100} src={YTLogo} alt="" />
           </div>
           <div className="searchBar">
                <input type="search" placeholder="search" />    

           </div>
           <div className="userOptions">
                <img width={20} height={20} src={Video} alt="" />
                <img width={15.5} height={20} src={Bell} alt="" />
                <p>N</p>
           </div>

        </div>
    )
}

export default Navbar;