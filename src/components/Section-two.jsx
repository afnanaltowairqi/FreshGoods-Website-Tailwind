import Pic from '../assets/pic.png'
import Stars from '../assets/stars.png'
import Comma from '../assets/comma.png'


function SectionTwo() {
    return(
        <div className="flex justify-center items-center h-screen  bg-center bg-cover custom-imges max-sm:h-[90vh]">
            <div className="flex flex-col items-center w-[60vw] gap-8 max-sm:flex-col max-sm:w-[100vw] max-sm:gap-6 ">
                <h1 className="text-white text-4xl font-sans max-sm:text-center max-sm:text-xl">What our customers say</h1>
                <img className="w-[3vw] h-[4vh] max-sm:w-[6vh]" src={Comma}></img>
                <p className="text-white text-4xl italic text-center">Share a real testimonial that hits some of your benefits but isn't too sales-y.</p>
                <div className="flex flex-col items-center">
                <img className="w-[8vw] max-sm:w-[24vw] " src={Pic}></img>
                <p className="text-white font-semibold">REAL NAME Location</p>
                <img className="w-[8vw] max-sm:w-[20vw]" src={Stars}></img>
                </div>
            </div>
        </div>
    );
}
export default SectionTwo