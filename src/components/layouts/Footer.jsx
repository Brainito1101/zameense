import logo from "../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (

<footer className="bg-gray-300 text-gray-800 pt-12 pb-6">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">

{/* Brand */}

<div>
<img src={logo} alt="Zameense" className="h-5 mb-4" />

<p className="text-sm mt-2 text-gray-800">
India's trusted platform for discovering and listing verified land.
</p>

<div className="flex gap-4 mt-4 text-lg">
<FaFacebook className="hover:text-[#FF9933] cursor-pointer transition"/>
<FaInstagram className="hover:text-[#FF9933] cursor-pointer transition"/>
<FaWhatsapp className="hover:text-[#FF9933] cursor-pointer transition"/>
</div>
</div>


{/* Company */}

<div>
<h3 className="font-medium mb-3">Company</h3>

<ul className="space-y-1 text-sm text-gray-800">

<li className="hover:text-[#FF9933] cursor-pointer">About</li>
<li className="hover:text-[#FF9933] cursor-pointer">How It Works</li>
<li className="hover:text-[#FF9933] cursor-pointer">Services</li>
<li className="hover:text-[#FF9933] cursor-pointer">Blog</li>

</ul>
</div>


{/* Support */}

<div>
<h3 className="font-medium mb-3">Support</h3>

<ul className="space-y-1 text-sm text-gray-800">

<li className="hover:text-[#FF9933] cursor-pointer">Contact</li>
<li className="hover:text-[#FF9933] cursor-pointer">Fees</li>
<li className="hover:text-[#FF9933] cursor-pointer">FAQs</li>

</ul>
</div>


{/* Legal */}

<div>
<h3 className="font-medium mb-3">Legal</h3>

<ul className="space-y-1 text-sm text-gray-800">

<li className="hover:text-[#FF9933] cursor-pointer">Terms</li>
<li className="hover:text-[#FF9933] cursor-pointer">Privacy</li>

</ul>
</div>


{/* Types of Lands */}

<div>
<h3 className="font-medium mb-3">Types of Land</h3>

<ul className="space-y-1 text-sm text-gray-800">

<li className="hover:text-[#FF9933] cursor-pointer">
Agricultural Land
</li>

<li className="hover:text-[#FF9933] cursor-pointer">
Residential Land
</li>

<li className="hover:text-[#FF9933] cursor-pointer">
Commercial Land
</li>

<li className="hover:text-[#FF9933] cursor-pointer">
Industrial Land
</li>

<li className="hover:text-[#FF9933] cursor-pointer">
Farm Land
</li>


</ul>

</div>

</div>


{/* Bottom */}

<div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-800">
© 2026 Zameense. All rights reserved.
</div>

</footer>
// </div>
  )
}