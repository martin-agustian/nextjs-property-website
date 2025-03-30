export default function LoadingScreen() {
  return (
    <div id="loading-screen" className="loading-screen bg-[#2b3f7d] text-[#72a5e8]">
      <div className="absolute top-[50%] translate-[-50%] left-[50%]">
        <div className="flex items-center flex-nowrap">
          {"Dwell".split('').map((char, i) => (
            <div id={`segment-${i + 1}`} key={i} className="text-[80px] font-inter font-bold">
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}