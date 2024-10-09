import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {


  const [amount, setAmount] = useState(0);
  const [from, setFrom]= useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert= () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
     <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
       <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}>
                <h1 className='w-full flex justify-center'>Currency Conversion</h1>
                <InputBox amount={amount} onChangeAmount={(amount:number) => setAmount(amount)} currencyOptions={options} onCurrencyChange={(currency:string) => setFrom(currency) } amountDisable={false} currencyDisable={false} 
                    selectCurrency={from}
                />
                <div className='p-1 flex justify-center cursor-pointer' onClick={swap}>
                    <div className='w-10'>
                    <img src="/src/assets/swap-icon.svg"></img>
                    </div>
                  </div>
                  <InputBox amount={convertedAmount} onChangeAmount={(amount:number) => setAmount(amount)} currencyOptions={options} onCurrencyChange={(currency:string) => setTo(currency)} amountDisable={true} currencyDisable={false} 
                    selectCurrency={to}
                  />
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
