import Girl from '../assets/girl.png'

function SectionFour() {
    return(
        <div className="bg-white flex flex-row justify-center items-center h-[80vh] gap-10 max-sm:flex-col max-sm:h-[120vh]">
            <img className="w-[29vw] h-[60vh] max-sm:w-[100vw]" src={Girl}></img>
            <div className="flex flex-col w-[30vw] h-[40vh] gap-8 max-sm:w-[100vw] max-sm:h-[200vh] max-sm:text-center">
                <h2 className="text-black text-4xl">Some more information about your business</h2>
                <p className="text-black font-serif">Share a littel about yourself as a business owner, or maybe describe what makes your product or service unique.Give visitors one more reason to care about your offer and want to buy from you.</p>
            </div>
        </div>
    );
}
export default SectionFour