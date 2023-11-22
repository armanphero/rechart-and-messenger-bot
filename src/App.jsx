import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceCard from './components/PriceCard/PriceCard'
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('price.json')
      .then(res => res.json())
      .then(data => setPrices(data))
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <div className='container mx-auto my-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
        }
      </div>
      <h1 className='text-purple-500 text-4xl font-bold'>hello , tailwind</h1>
      <MessengerCustomerChat
        pageId="61551575173649"
        appId="341427618476980"
        htmlRef="<REF_STRING>"
      />
    </>
  )
}

export default App
