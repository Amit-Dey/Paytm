import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import TextLevelBtn from "../components/TextLevelBtn"

const Signup = () => {
  return (
    <div className=" bg-background text-text w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-secondary w-80 h-fit p-4 rounded-sm drop-shadow-sm">
          <Heading level="Sign Up" />
           <SubHeading level="Enter your information to create an account" />
           <InputBox level="First Name" placeholder="Enter your first name" />
            <InputBox level="Last Name" placeholder="Enter your last name" />
            <InputBox level="Email" placeholder="Enter your email" />
            <InputBox level="Password" placeholder="Enter your password" />
            <Button level="Sign Up" />
            <TextLevelBtn text="Already have an account? " level="Sign In" path="/signin" />
      </div>
    </div>
  )
}

export default Signup