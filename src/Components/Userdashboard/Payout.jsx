import React from 'react'

const Payout = () => {
  return (
    <>
    <div>
     
       <table className="table table-striped w-75 shadow-sm" style={{borderRadius:"15px"}}>
    <thead>
      <tr>
        <th className='text-center'>Date</th>
        <th className='text-center'>Payout Amount</th>
        <th className='text-center'>Status</th>
       
      </tr>
    </thead>
    <tbody>
    <tr>
      <td className='text-center'>1/1/2025</td>
      <td className='text-center'>20</td>
      <td className='text-center'>Pending</td>
    </tr>
    
      </tbody>
    </table>
   </div>
    </>
  )
}

export default Payout