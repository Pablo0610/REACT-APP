
import useCounter from '../hooks/useCounter'

export default function Counter() {

const {count, handleClickPlus, handleClickLess} = useCounter();

    return (
        <>
        <h3 className='text-2xl'>Contador <small  className='font-bold'> {count}</small> </h3>

        <div>
            <button onClick={()=> handleClickPlus()} className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-green-500'>+1</button>
            <button onClick={()=> handleClickLess()}className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>-1</button>
        </div>

        </>
  )
}
