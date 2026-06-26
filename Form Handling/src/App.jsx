
const App = () => {

  const prevent = (e)=>{
    e.preventDefault()
    console.log(e);
  }

   return (
    <div className="p-10 h-screen w-full">

      <form onSubmit={(e)=>{
        prevent(e)
      }}  className="p-5">

        <input name="name" type="text" placeholder="Your name" />
        <input name="password" type="password" placeholder="Your password" />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default App  