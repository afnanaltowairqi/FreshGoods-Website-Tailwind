function Header() {
    return(
        <div className="flex justify-center items-center h-screen bg-center bg-cover custom-img max-sm:h-[100vh]">
            <div className="flex flex-col items-start w-[60vw] gap-8 max-sm:flex-col max-sm:w-[80vw] max-sm:h-[80vh]">
                <h1 className="text-white text-4xl font-serif ">FreshGoods</h1>
                <p className="text-white text-6xl max-sm:text-5xl">Concisely describe your product or service</p>
                <p className="text-white text-lg">No need to get clever. Tell people exactly what you're pffering, then use this space to communicate your key value proposition.</p>
                <button className="bg-[#ffcb3c] text-black text-base border-none w-[14vw] h-[6vh] btn btn-xs max-sm:btn-sm max-sm:w-[40vw] rounded">ORDER NOW</button>
            </div>
        </div>
    );
}
export default Header