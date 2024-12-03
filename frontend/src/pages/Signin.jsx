
import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'
import TextLevelBtn from '../components/TextLevelBtn'

const Signin = () => {
    


  return (
    <div className=" bg-background text-text w-full h-[100vh] flex justify-center items-center">
      <div className=" bg-secondary w-3/12 h-fit p-6 rounded-sm drop-shadow-sm">
        <Heading label="Sign In" />
        <SubHeading label="Enter your information to create an account" />
        <InputBox name='username' label="Email" placeholder="Enter your email" />
        <InputBox name='password' label="Password" placeholder="Enter your password" />
        <Button label="Sign In" />
        <TextLevelBtn text="Don't have an account? " label="Sign Up" to="/signup" />
      </div>
    </div>
  )
}

export default Signin