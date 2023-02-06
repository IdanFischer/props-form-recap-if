import { useState } from "react"

export default function UserForm() {

  const[firstName, setFirstName] = useState()
  const[lastName, setLastName] = useState()
  const[email, setEmail] = useState()
  const[favColor, setFavColor] = useState()
  const[date, setDate] = useState()

  const handleFirstName = e => {setFirstName(e.target.value)}
  const handleLastName = e => {setLastName(e.target.value)}
  const handleEmail = e => {setEmail(e.target.value)}
  const handleFavColor = e => {setFavColor(e.target.value)}
  const handleDate = e => {setDate(e.target.value)}

  const handleForm = e => {
    e.preventDefault()
    alert(`hello ${firstName} ${lastName}, your email is ${email}, your favorite color is ${favColor}, and today's date is ${date}`)
  }

  // onSubmit={handleFirstName}
  return (
    <>
      <form onSubmit={handleForm}> 
        <div>
          <label htmlFor="firstName" >First Name</label>
          <input
            type="text"
            name="firstName" 
            value= {firstName}
            onChange={handleFirstName}/>
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName} 
            onChange={handleLastName}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}/>
        </div>

        <div>
          <label htmlFor="color">Fav Color</label>
          <input 
            type="color" 
            name="color"
            value={favColor}
            onChange={handleFavColor}/>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            name="date"
            value={date}
            onChange={handleDate}/>
        </div>
        <input type="submit" value="Submit (:" />
      </form>
    </>
  )
}
