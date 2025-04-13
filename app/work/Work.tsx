'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function WorkPage() {
    return (
        <div className="bg-[#FFFDF9] text-black px-0 py-10">
            <section className="px-4 md:px-10 xl:px-24">

                {/* Project 1 */}
                <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-12 md:col-span-6 space-y-4">
                        <div className="-mx-4 md:-mx-10 xl:-mx-24">
                            <BrandingTitle />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <p className="font-alt font-semibold leading-5 text-[20px] mb-2">Project 1: Tho Dung Coffee</p>
                            <p className="font-alt text-[16px] leading-6">
                                Minh Dũng Coffee Trading Co., Ltd. is a long-standing exporter now focusing on specialty coffee through the Thơ Dũng line. Made from 100% ripe Robusta and Arabica beans and traditionally firewood-roasted, the products offer rich, authentic flavors true to their origins.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        className="col-span-12 md:col-span-6 flex justify-end items-start"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <Image src="/branding1/logo.png" alt="Tho Dung Logo" width={280} height={240} className="object-contain" />
                    </motion.div>
                </div>

                {/* Branding Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                    {Array.from({ length: 9 }, (_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ amount: 0.2 }}
                        >
                            <BrandingImage src={`/branding1/${i + 1}.png`} alt={`Branding ${i + 1}`} />
                        </motion.div>
                    ))}
                </div>

                {/* Project 2 */}
                <div className="mt-16 xl:mt-[330px] grid grid-cols-12 gap-4 items-center">
                    <motion.div
                        className="col-span-12 md:col-span-6 space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <p className="font-alt font-semibold leading-8 text-[20px] mb-2">Project 2: POROKE</p>
                        <p className="font-alt text-[16px] leading-6">Poroke is a playful, customizable food brand where customers can build their own perfect bowl. Inspired by the idea that great taste is a superpower, Poroke turns every meal into a fun, flavorful adventure.</p>
                    </motion.div>
                    <motion.div
                        className="col-span-12 md:col-span-6 flex justify-end items-start"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <Image src="/branding2/porokelogo.png" alt="Poroke Logo" width={580} height={400} className="object-contain -mt-10" />
                    </motion.div>
                </div>

                {/* Poroke Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    <motion.div
                        className="md:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ amount: 0.3 }}
                    >
                        <BrandingImage src="/branding2/stickerr.gif" alt="Poroke Visual 1" />
                    </motion.div>
                    <div className="flex flex-col gap-4">
                        {["bottle.png", "card.png"].map((file, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ amount: 0.2 }}
                            >
                                <BrandingImage src={`/branding2/${file}`} alt={`Poroke Visual ${i + 2}`} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* GIF Stories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    {["1", "2", "3"].map(num => (
                        <motion.div
                            key={num}
                            className="w-full aspect-[9/16] rounded-lg overflow-hidden shadow-md"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <img
                                src={`/branding2/story${num}.gif`}
                                alt={`Poroke Story ${num}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover rounded-md"
                            />

                        </motion.div>
                    ))}
                </div>

                {/* UI/UX Section */}
                <div className="mt-16 xl:mt-[330px] -mx-4 md:-mx-10 xl:-mx-24">
                    <UIUXTitle />
                </div>

                <section className="px-4 md:px-10 xl:px-24 mt-12">
                    <div className="grid grid-cols-12 gap-8 items-start">
                        <motion.div
                            className="col-span-12 md:col-span-7 space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <p className="font-alt font-semibold text-[20px] mb-2">Project: Tho Dung Coffee Website</p>
                            <p className="font-alt text-[16px] leading-6 max-w-[520px]">The Thơ Dũng website is designed to promote the brand and showcase its pure, clean coffee products to a wider audience. It supports online sales while also sharing knowledge about the traditional firewood roasting process and the health benefits of coffee, aiming to build a loyal and informed customer community.</p>
                        </motion.div>
                        <motion.div
                            className="col-span-12 md:col-span-5 flex justify-start md:justify-end items-start -mt-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <div className="flex flex-col items-center space-y-2">
                                <span className="font-alt text-[16px] font-semibold mb-1">Test prototype</span>
                                <div className="w-[200px] sm:w-[240px] h-[200px] sm:h-[240px] relative">
                                    <Image src="/ui-ux/prototypeqr.png" alt="QR code" fill className="object-contain" />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* UI Mockups */}
                    <div className="flex flex-col md:flex-row justify-center gap-[20px] mt-10">
                        {["uiux2.jpg", "uiux1.jpg"].map((file, i) => (
                            <motion.div
                                key={i}
                                className="relative w-full md:w-[615px] h-[260px] md:h-[410px] flex-none"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                viewport={{ amount: 0.3 }}
                            >
                                <Image src={`/ui-ux/${file}`} alt={`UI ${i === 0 ? 'Left' : 'Right'}`} fill className="object-contain" />
                            </motion.div>
                        ))}
                    </div>
                </section>

            </section>

            {/* Poster Section */}
            <div className="mt-16 xl:mt-[330px] -mx-4 md:-mx-10 xl:-mx-24">
                <PosterTitle />
            </div>

            <section className="px-4 md:px-10 xl:px-24 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <PosterImage src={`/poster/${i + 1}.png`} alt={`Poster ${i + 1}`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Motion Graphic */}
            <div className="mt-16 xl:mt-[330px] -mx-4 md:-mx-10 xl:-mx-24">
                <MotionGraphicTitle />
            </div>
            <section className="px-4 md:px-10 xl:px-24 mt-12 space-y-6">
                <div>
                    <p className="font-alt font-semibold text-[20px] mb-2">Animated MV Ly Keo Chai</p>
                    <p className="font-alt text-[16px] leading-6 max-w-[640px]">The song vividly depicts the life of fishermen, focusing on the tough and exhausting task of casting nets at sea. Despite the relentless hardships they face, these fishermen remain full of energy and optimism. With unshakable resolve, they sing of natural beauty, the strength of human bonds, and the quiet pride found in a life of honest, hard work.</p>
                </div>
                <div className="w-full flex justify-center mt-8">
                    <div className="aspect-video w-full max-w-[800px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/K_Q10mx_C2k?si=bvF0Ill4KFWtAWEG"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Typozine */}
            <div className="mt-20 xl:mt-[250px] -mx-4 md:-mx-10 xl:-mx-24">
                <TypozineTitle />
            </div>

            <section className="px-4 md:px-10 xl:px-24 mt-12 space-y-8">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ amount: 0.3 }}
                >
                    <h3 className="text-[20px] font-alt font-semibold">Project: SIMPLICITY</h3>
                    <p className="text-[16px] font-alt max-w-[800px] leading-relaxed">
                        This project delves into the creative process of crafting a typozine, a unique publication that merges typography with innovative design. Titled SIMPLICITY, this typozine embodies the essence of minimalism, drawing inspiration from the timeless principles of Bauhaus and Swiss design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {["clay-ipad-9.7-mockup-07.jpg", "clay-ipad-9.7-mockup-07_2.jpg"].map((file, i) => (
                        <motion.img
                            key={i}
                            src={`/typozine/${file}`}
                            alt={`Typozine ${i === 0 ? 'Left' : 'Right'}`}
                            className="w-full rounded-lg shadow-md"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ amount: 0.3 }}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

// --------------------- COMPONENTS ---------------------

function BrandingTitle() {
    return (
        <motion.h2
            className="w-[700px] h-[130px] bg-[#DE7D08] text-white text-[100px] leading-[1] font-extrabold font-sans lowercase flex items-center rounded-md shadow-lg mb-6 pl-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <span className="pl-20">branding<span className="text-white">.</span></span>
        </motion.h2>
    )
}

function UIUXTitle() {
    return (
        <motion.h2
            className="w-[600px] h-[130px] bg-[#DE7D08] text-white text-[100px] leading-[1] font-extrabold font-sans lowercase flex items-center rounded-md shadow-lg mb-6 pl-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <span className="pl-50">ui/<span className="text-white">ux.</span></span>
        </motion.h2>
    )
}
function BrandingImage({
    src,
    alt,
    className = '',
}: {
    src: string
    alt: string
    className?: string
}) {
    const isGif = src.endsWith('.gif')

    return (
        <div className="w-full aspect-[4/3] overflow-hidden rounded-md relative">
            <Image
                src={src}
                alt={alt}
                fill
                unoptimized={isGif}
                className={`object-cover ${className}`}
                sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
    )
}
function PosterTitle() {
    return (
        <motion.div
            className="w-fit space-y-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <h2 className="w-[600px] h-[150px] bg-[#DE7D08] text-white text-[100px] leading-[1] font-extrabold font-sans lowercase flex items-center rounded-md shadow-lg mb-2 pl-20">
                <span className="pl-30">poster<span className="text-white">.</span></span>
            </h2>
            <p className="font-alt text-[20px] font-semibold text-black pl-50 mt-8">
                Film Poster Collection
            </p>
        </motion.div>
    )
}


function PosterImage({
    src,
    alt,
    className = '',
}: {
    src: string
    alt: string
    className?: string
}) {
    return (
        <div className="w-[295px] h-[395px] relative overflow-hidden rounded-md shadow-md mx-auto">
            <Image
                src={src}
                alt={alt}
                fill
                className={`object-cover ${className}`}
                sizes="(max-width: 768px) 100vw, 295px"
            />
        </div>
    )
}
function MotionGraphicTitle() {
    return (
        <motion.h2
            className="w-[1000px] h-[130px] bg-[#DE7D08] text-white text-[100px] leading-[1] font-extrabold font-sans lowercase flex items-center rounded-md shadow-lg mb-6 pl-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <span className="whitespace-nowrap pl-20">motion graphic<span className="text-white">.</span></span>
        </motion.h2>
    )
}
function TypozineTitle() {
    return (
        <motion.h2
            className="w-[700px] h-[140px] bg-[#DE7D08] text-white text-[100px] leading-[1] font-extrabold font-sans lowercase flex items-center rounded-md shadow-lg mb-6 pl-20"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
        >
            <span className="pl-20">typozine<span className="text-white">.</span></span>
        </motion.h2>
    )
}







