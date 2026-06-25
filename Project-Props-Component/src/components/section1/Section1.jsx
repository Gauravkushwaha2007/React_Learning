import LeftSection from "./Section1Left"
import RightSection from "./Section1Right"
const Section1 = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex gap-10">
        <LeftSection />
        <RightSection />
      </div>
    </div>
    </>
  )
}

export default Section1