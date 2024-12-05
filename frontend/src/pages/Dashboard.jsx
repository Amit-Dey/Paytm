import Nav from "../components/Nav"
import User from "../components/User"

import { useEffect, useState } from "react"
import axios from "axios"

const Dashboard = () => {
  const [users, setUsers] = useState("")
  const token = localStorage.getItem('token')

  const [filter, setFilter] = useState("")

  const [balance, setBalance] = useState(0)

  let timer = null

  // debunce handel change function to reduce the number of api calls
  const handelChange = (e) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      setFilter(e.target.value)
    }, 1000)
  }

  useEffect(() => {

    let config = {
      method: 'get',
      url: 'http://localhost:3000/api/v1/account/balance',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.request(config)
      .then((response) => {
        setBalance(response.data.balance)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])  


  useEffect(() => {
    let data = {}
    let usersData = {}
    async function fetchUsers() {
      data = await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      usersData = data.data.users
      setUsers(usersData)
    }
    fetchUsers()

  }, [filter, token])

  return (
    <div className="bg-background h-full min-h-[100vh] w-full pb-10 text-text">
      {!users.length && !filter.length ? (
        <div className="flex justify-center items-center h-[100vh]">
          <div className="text-4xl font-bold">Loading...</div>
        </div>

      ) : (
        <>
          <Nav username="User Name" />
          <div className="flex gap-5 px-16 py-6 flex-col">
            <h1 className="text-3xl font-bold">Your Balace ${balance}</h1>
            <h1 className="text-2xl font-bold">Users</h1>
            <input type="text"  name="filter"  onChange={handelChange} placeholder="Search Users" className="p-2 border border-gray-300 rounded-md text-secondary" />
            <div className="flex flex-col gap-5 mt-5">
              {users.map((user) => (
                <User key={user._id} user={user} />
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Dashboard