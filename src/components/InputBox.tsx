import {useId} from "react";

export default function InputBox({amount, onChangeAmount, onCurrencyChange, currencyOptions, selectCurrency="usd", amountDisable=false, currencyDisable=false}: {amount: number, onChangeAmount: (amount: number) => void, onCurrencyChange: (currency: string) => void, currencyOptions: string[], selectCurrency:string, amountDisable:boolean,currencyDisable:boolean }) {
    const amountInputId = useId();
    
  return (
    <>
        <div className='flex w-full justify-center'>
            <div className="flex max-w-sm space-y-3 w-full">
                <label htmlFor={amountInputId}></label>
                <input type="number" id={amountInputId} value={amount} disabled={amountDisable} onChange={(e) => onChangeAmount && onChangeAmount(Number(e.target.value))} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="This is placeholder" />
                <div className='max-w-sm mx-auto'>
                    <select id="countries" disabled={currencyDisable} value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            currencyOptions.map((currency:string) => (
                                <option key={currency} value={currency}>
                                {currency}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div> 
        </div>
    </>
  )
}
