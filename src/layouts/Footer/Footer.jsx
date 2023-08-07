import './Footer.css'
import instagram from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'
import pinterest from '../../assets/icons/pinterest.png'

function Footer() {
    return (
        <div className='footer'>
            <div className="left-footer">
                <h2>
                    About US
                </h2>
                <p> Terms & Conditions<br/>
                    Privacy Policy<br/>
                    Shipping Policy<br/>
                    Special Purchase Option Policy.<br/><br/>

                    © 2023 Pet Inn<br/>
                    Powered by NoOne (It is a Demo Application)
                </p>
            </div>
            <div className="right-footer">
                <h2>Follow Us</h2>
                <div className="socials">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer