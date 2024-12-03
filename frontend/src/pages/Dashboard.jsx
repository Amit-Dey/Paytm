import Nav from "../components/Nav"
import User from "../components/User"

const Dashboard = () => {
  const users = [
    {
      firstname: "User",
      lastname: "1",
      username: "User1",
      _id: 1,
    },
    {
      firstname: "User",
      lastname: "2",
      username: "User2",
      _id: 2,
    },
    {
      firstname: "User",
      lastname: "3",
      username: "User3",
      _id: 3,
    },
    {
      firstname: "User",
      lastname: "4",
      username: "User4",
      _id: 4,
    },
  ]

  return (
    <div className="bg-background h-[100vh] w-full text-text">
      <Nav username="User Name" />
      <div className="flex gap-5 px-16 py-6 flex-col">
        <h1 className="text-3xl font-bold">Your Balace $5000</h1>
        <h1 className="text-2xl font-bold">Users</h1>
        <input type="text" placeholder="Search Users" className="p-2 border border-gray-300 rounded-md text-secondary" />
        <div className="flex flex-col gap-5 mt-5">
          <User user={users[0]} />
          <User user={users[1]} />
          <User user={users[2]} />
          <User user={users[3]} />
        </div>
      </div>

    </div>
  )
}

export default Dashboard