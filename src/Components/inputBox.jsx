import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    currencyOption = [],
    selectCurrency = "usd",
    className = "",
}) {

  return (
    <div className={`flex gap-16 text-sm bg-white px-2.5 py-2 rounded-md ${className}`}>
        <div className="grid gap-3 my-1.5 mx-1">
            <label className=''>{label}</label>
            <input 
            type="number"
            className='outline-none border-b-2' 
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="grid justify-items-end gap-3 my-1.5 mx-1">
            <label >Currency Type</label>
            <select 
            className='min-w-16 bg-[#dad7d7] py-0.5 px-0.5 rounded-md'
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                
                {currencyOption.map(currency => (<option key={currency} value={currency}>{currency}</option>))};
            </select>
        </div>
    </div>
  )
}

export default InputBox;