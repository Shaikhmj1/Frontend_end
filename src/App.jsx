import { useState } from "react"

const initUser = { email: "", pass: "" }

const App = () => {
  const [formUser, setFormUser] = useState(initUser)

  const handleChange = (e) => {
    setFormUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(formUser.email)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="Enter email"
          name="email"
          value={formUser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          required
          placeholder="Enter password"
          name="pass"
          value={formUser.pass}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default App
