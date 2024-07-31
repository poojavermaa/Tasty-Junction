
const Footer =  () => {
    return (
        <div className="flex flex-wrap lg:justify-around items-start w-full bg-black text-white px-5 py-8 text-xs pb-20 lg:pb-8 lg:text-xl">
            <div>
                <h4 className="text-xl font-semibold px-[0.60rem]">ABOUT</h4>
                <ul className="m-2 text-lg">
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Stories</li>
                    <li>Press</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-semibold px-[0.60rem]">HELP</h4>
                <ul className="m-2 text-lg">
                   <li>Payments</li>
                    <li>Order</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQs</li>
                    <li>Report Infringement</li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-semibold px-[0.60rem]">POLICY</h4>
                <ul className="m-2 text-lg">
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-semibold px-[0.60rem]">SOCIAL</h4>
                <ul className="m-2 text-lg">
                   <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;