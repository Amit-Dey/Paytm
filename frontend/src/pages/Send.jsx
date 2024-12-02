
import Heading from "../components/Heading"
const Send = () => {
  return (
    <div className=" bg-background text-text w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-secondary w-80 h-fit p-4 rounded-sm drop-shadow-sm">
        <Heading level="Send Money" />
        <div className="flex gap-3 items-center mt-12 p-2">
          <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center text-3xl text-secondary">U</div>
          <div className="text-text text-2xl font-semibold tracking-wider">Friend's Name</div>
        </div>
      </div>
    </div>
  )
}

export default Send