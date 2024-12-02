import Nav from "../components/Nav"
import User from "../components/User"

const Dashboard = () => {
  return (
    <div className="bg-background h-[100vh] w-full text-text">
      <Nav />
      <div className="flex gap-5 px-16 py-6 flex-col">
        <h1 className="text-3xl font-bold">Your Balace $5000</h1>
        <h1 className="text-2xl font-bold">Users</h1>
        <input type="text" placeholder="Search Users" className="p-2 border border-gray-300 rounded-md text-secondary" />
        <div className="flex flex-col gap-5 mt-5">
          <User name="User 1" />
          <User name="User 2" />
          <User name="User 3" />
          <User name="User 4" />
        </div>
      </div>

    </div>
  )
}

export default Dashboard