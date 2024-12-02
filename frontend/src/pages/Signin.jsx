
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import TextLevelBtn from '../components/TextLevelBtn'

const Signin = () => {
  return (
    <div className=" bg-background text-text w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-secondary w-3/12 h-fit p-6 rounded-sm drop-shadow-sm">
        <Heading level="Sign In" />
        <SubHeading level="Enter your information to create an account" />
        <InputBox level="Email" placeholder="Enter your email" />
        <InputBox level="Password" placeholder="Enter your password" />
        <Button level="Sign In" />
        <TextLevelBtn text="Don't have an account? " level="Sign Up" path="/signup" />
      </div>
    </div>
  )
}

export default Signin