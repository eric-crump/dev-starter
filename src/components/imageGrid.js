

export default function ImageGrid(){
    return(
        <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 auto-rows-fr">
                <a
                    href="#"
                    className="bg-cover bg-center aspect-square flex items-center justify-center"
                    style={{backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/03/31/46/54/1000_F_331465434_yZX8qbBwUMRzjTBqDjZcz0YI3FjaRrpG.jpg)`}}
                >
                    <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <p className="text-white text-4xl font-bold text-center">COUPLES CRUISE</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="bg-cover bg-center aspect-square flex items-center justify-center"
                    style={{backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/00/67/88/93/1000_F_67889376_9CpMy8iXBd5uqnrR9juYU4vIrq7dnz1n.jpg)`}}
                >
                    <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <p className="text-white text-4xl font-bold text-center">ADVENTURE WITH FRIENDS</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="bg-cover bg-center aspect-square flex items-center justify-center"
                    style={{backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/02/28/56/14/1000_F_228561450_nRtUihHwFgn7vUUF4VpoveO1vrirss6W.jpg)`}}
                >
                    <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <p className="text-white text-4xl font-bold text-center">SPORT</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="bg-cover bg-center aspect-square flex items-center justify-center"
                    style={{backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/03/43/52/95/1000_F_343529570_lnNOm4qnpgrdEzykRwxxFTnIaNI8iQ1J.jpg)`}}
                >
                    <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <p className="text-white text-4xl font-bold text-center">LEARN TO SAIL</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="bg-cover bg-center aspect-square flex items-center justify-center"
                    style={{backgroundImage: `url(https://t4.ftcdn.net/jpg/02/64/24/73/240_F_264247354_JTsazGXhnk9Vr3fOwZfQakCj3OO0Szmc.jpg)`}}
                >
                    <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <p className="text-white text-4xl font-bold text-center">RENTALS</p>
                    </div>
                </a>

                <a
                    href="#"
                    className="bg-cover bg-center aspect-square flex items-center justify-center"
                    style={{backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/02/15/43/06/1000_F_215430649_dksQCPfa9Tvxs4NY63xOLjvXm1wjYNF2.jpg)`}}
                >
                    <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                        <p className="text-white text-4xl font-bold text-center">FAMILY CRUISES</p>
                    </div>
                </a>
            </div>
        </div>
    )
}