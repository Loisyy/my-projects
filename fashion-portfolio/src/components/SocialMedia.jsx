import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import pinterestIcon from "../assets/icons/pinterest.png";
import facebookIcon from "../assets/icons/facebook (1).png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import youtubeIcon from "../assets/icons/youtube.png";
import tiktokIcon from "../assets/icons/tiktok.png";
import yahoomailIcon from "../assets/icons/yahoo.png";

export default function SocialMedia() {
  const socials = [
    { name: "Instagram", url: "http://Www.instagram.com/Loisnyks_design", icon: instagramIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/nkeirulois", icon: linkedinIcon },
    { name: "Pinterest", url: "https://pin.it/50nse2368", icon: pinterestIcon },
    { name: "Facebook", url: "https://www.facebook.com/lois.nkeiru", icon: facebookIcon },
    {name: "WhatsApp", url: "https://wa.me/2347084350700",icon: whatsappIcon, },
    { name: "Youtube", url: "https://youtu.be/oPHN08u0Mus", icon: youtubeIcon },
    { name: "TikTok", url: "http://tiktok.com/@loisnyksdesign", icon: tiktokIcon },
    {name: "Email", url: "mailto:loisnyksdesign@yahoo.com", icon: yahoomailIcon},
  ];

  return (
    <div className="bg-pink-50 border border-pink-200 rounded-lg p-8">
      <h3 className="font-semibold text-lg text-gray-900 mb-6">
        Connect With Me
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg hover:shadow-md hover:border-pink-400 border border-pink-200 transition-all"
          >
            {/* If icon is image, render img, otherwise render emoji */}
            {typeof social.icon === "string" && social.icon.startsWith("/") ? (
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
            ) : typeof social.icon === "string" && social.icon.length > 2 ? (
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
            ) : (
              <span className="text-2xl">{social.icon}</span>
            )}

            <span className="text-xs font-medium text-gray-700 text-center">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
