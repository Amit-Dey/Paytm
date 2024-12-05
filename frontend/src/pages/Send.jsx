
import { useSearchParams } from "react-router-dom"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Send = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const username = searchParams.get("username")
  const id = searchParams.get("id")

  const [balance, setBalance] = useState(0)
  const token = localStorage.getItem('token')

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

  }, [token])

  const [error, setError] = useState("")
  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handelChange = (e) => {
    setAmount(parseInt(e.target.value))
  }


  const handleTransfer = () => {

    // validate the amount
    if (amount === "") {
      setError("Amount is required")
      return
    }
    if (parseInt(amount) > balance) {
      setError("Insufficient balance")
      return
    }
    if (parseInt(amount) <= 0) {
      setError("Amount should be greater than 0")
      return
    }

    // check if the amount is a number
    if (isNaN(amount)) {
      setError("Amount should be a number")
      return
    }

    // compare the amount with the balance
    if (parseInt(amount) > balance) {
      setError("Insufficient balance")
      return
    }


    setLoading(true)
    let data = {
      "to": id,
      "amount": amount
    }
    let config = {
      method: 'post',
      url: 'http://localhost:3000/api/v1/account/transfer',

      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        alert(response.data.message)
        setLoading(false)
        navigate("/dashboard")
      })
      .catch((error) => {
        alert(error.response.data.error)
        setLoading(false)
      });

  }






  return (
    <div className=" bg-background text-text w-full h-full min-h-[100vh] flex justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className=" bg-secondary w-3/12 h-fit p-6 rounded-sm drop-shadow-sm py-10">
          <Heading label="Send Money" />
          <div className="flex gap-3 items-center mt-20 px-10">
            <div className="rounded-full bg-primary w-12 h-12 flex justify-center items-center text-3xl text-secondary">{username.charAt(0).toUpperCase()}</div>
            <div className="text-text text-2xl font-semibold tracking-wider">{username}</div>
          </div>
          <div className="items-center mt-2 px-10 mb-4">
            <InputBox name="amount" value={amount} onChange={handelChange} error={error} label="Amount (in BDT) " placeholder="Enter Amount" />
            <Button onClick={handleTransfer} label="Initiate Transfer" />
          </div>
        </div>
      )
      }


    </div>
  )
}

export default Send