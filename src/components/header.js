

export default function Header(){
    return(
        <div className="shadow">
            <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
                <p className="text-2xl">Compass Sailing Tours</p>

                <div className="flex gap-10">
                    <a href="#" className="text-lg">RESERVATIONS</a>
                    <a href="#" className="text-lg">BEFORE YOU ARIVE</a>
                    <a href="#" className="text-lg">ABOUT US</a>
                </div>
            </div>
        </div>
    )
}