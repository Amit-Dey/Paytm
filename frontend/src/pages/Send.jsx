
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
const Send = () => {
  return (
    <div className=" bg-background text-text w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-secondary w-3/12 h-fit p-6 rounded-sm drop-shadow-sm py-10">
        <Heading level="Send Money" />
        <div className="flex gap-3 items-center mt-20 px-10">
          <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center text-3xl text-secondary">U</div>
          <div className="text-text text-2xl font-semibold tracking-wider">Friend's Name</div>
        </div>
        <div className="items-center mt-2 px-10 mb-4">
          <InputBox level="Amount (in BDT) " placeholder="Enter Amount" />
          <Button level="Initiate Transfer" />
        </div>
      </div>
    </div>
  )
}

export default Send