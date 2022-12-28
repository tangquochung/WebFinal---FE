
import './Footer.scss'
import Logo from "./logo512.svg";
function Footer() {
    return ( <div className="footer" >
        <div className='footer__logo'>
            <img src={Logo} alt="logo" className='footer__logo-img' />
            {/* <p className='footer__logo-text'>Món quà đặc biệt từ mẹ thiên nhiên.</p> */}
        </div>
        <div className='footer__lienhe'>
            <h3 className='footer__lienhe-title'>Contact</h3>
            <p className='footer__lienhe-text'>Phone number: 0908725570</p>
            <p className='footer__lienhe-text'>Email: motorbikestore@gmail.com</p>
        </div>
        <div className='footer__diachi'>
        <h3 className='footer__diachi-title'>Address</h3>
        <p className='footer__diachi-text'>The 82<sup>nd</sup> floor Landmark 81,  720 A Dien Bien Phu, Ward 22, Binh Thanh District, Ho Chi Minh City
</p>

        </div>
        <div className='footer__ketnoi'>
        <h3 className='footer__ketnoi-title'>Follow us</h3>
        <div className='footer__ketnoi--icons'>
        <a id='no-line' href="https://www.facebook.com/Fine.Ph22/">
                <i class="fa fa-facebook"></i></a>
        <a id='no-line' href="https://www.instagram.com/taylorswift/">       
                <i class="fa fa-instagram"></i></a>
        <a id='no-line' href="https://www.facebook.com/Fine.Ph22/">          
                <i class="fa fa-google"></i></a>
        <a id='no-line' href="https://twitter.com/taylorswift13/">         
                <i class="fa fa-twitter"></i></a>
        </div>
        </div>
    </div> );
 }
 
 export default Footer;