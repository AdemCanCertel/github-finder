import { useState, useRef, useEffect } from 'react'

export default function Home() {
    let API = 'https://api.github.com/users/octocat'

    const userRef = useRef(null)
    const [userName, setUserName] = useState('')
    const [data, setData] = useState('')
    const [isLoading, setLoading] = useState(false)
  
    function handleClick() {
      setUserName(userRef.current.value);
    }
  
    function handleKeyPress(e){
      if(e.key ==='Enter'){
        setUserName(userRef.current.value);
      }
    }
    useEffect(() => {
      setLoading(true)
      if (userName) {
        API = `https://api.github.com/users/${userName}`
      }
  
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [userName]);
  
    if(!data) (
    <p>No profile data</p>
    )
  
    return (
      <section className="container">
        <div className="text-white text-7xl mt-10 font-bold">
            <h1>GitHub Finder</h1>
            <div className="text-base font-mono mt-2 space-y-6">
                <p>- It's not hard to find github users anymore.</p>
            </div>
        </div>
            <div>
                <form className="flex text-center mt-20 w-3/4">
                  <input                            
                    placeholder="ex: ademcancertel"
                    className="rounded-md mt-5 bg-zinc-600 pt-2 pr-2 pl-2 pb-2"
                  />
                </form>
            </div>
      </section>
    )
  }