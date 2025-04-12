import { FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import Image from "next/image";
import qr from "../assest/qr.png"

export default function ContactSection() {
  return (
    <section className="bg-[#14130F] text-white py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-[48px] sm:text-[72px] md:text-[100px] font-extrabold font-['Be_Vietnam'] lowercase mb-10 leading-none">
          let’s connect.
        </h2>

        {/* Divider */}
        <hr className="border-white/50 mb-10" />

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left: QR */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-[200px] sm:w-[240px] h-[200px] sm:h-[240px] bg-gray-300 rounded-md overflow-hidden">
              <Image
                src={qr} // replace with your actual QR image
                alt="QR Code"
                width={240}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-white/80 text-center md:text-left">
              Scan to view CV
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded">
                  <FiPhone size={20} color="#14130F" />
                </div>
                <span className="text-sm sm:text-base break-all">
                  (+84) 90 908 3226
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded">
                  <FiMail size={20} color="#14130F" />
                </div>
                <span className="text-sm sm:text-base break-all">
                  design.thaotruong@gmail.com
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded">
                  <FiInstagram size={20} color="#14130F" />
                </div>
                <span className="text-sm sm:text-base break-all">
                  instagram.com/_maccint_
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded">
                  <FaBehance size={20} color="#14130F" />
                </div>
                <span className="text-sm sm:text-base break-all">
                  behance.net/ngocthaotruong
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
