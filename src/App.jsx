import { useState } from 'react'
import {InputBox} from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTO] = useState('inr');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTO(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className='grid min-h-screen max-w-full justify-center content-center'>
      
      <div className='grid min-w-80 bg-[#ffffff57] px-5 py-4 content-center rounded-md border-2 '>
        
        <form 
            onSubmit={(e) => {e.preventDefault(); convert()}}>
          
          <div className='w-full mb-2.5'>
            <InputBox 
                label={'From'} 
                amount={amount} 
                selectCurrency = {from}
                currencyOption={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amt) => setAmount(amt)}
            ></InputBox>
          </div>
            
          <div className='relative w-full h-1'>
            <button 
                type='button' 
                onClick={swap} 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#114084] text-white hover:bg-blue-800 rounded-md px-2.5 py-1'
            > Swap </button>
          </div>
          
          <div className='w-full'>
            <InputBox 
                label={'To'} 
                amount={convertedAmount} 
                selectCurrency = {to} 
                currencyOption={options}
                onCurrencyChange={(currency) => setTO(currency)}
                onAmountChange={(amt) => setConvertedAmount(amt)}
            ></InputBox>
          </div>
          
          <button 
              type='submit'
              onClick={convert}  
              className='min-w-full bg-[#114084] text-white py-1.5 hover:bg-blue-800 hover:border-white rounded-md mt-4 '
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        
        </form>
      
      </div>
    
    </div>
  )
}

export default App;
