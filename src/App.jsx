

import { useState } from 'react'
import './App.css'
import { Button, Stack, TextField } from '@mui/material'









function App() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [year, setYear] = useState("");
  const [IsInvalidPrinciple, setIsInvalidPrinciple] = useState(false)
  const [IsInvalidRate, setIsInvalidRate] = useState(false)
  const [IsInvalidPeriod, setIsInvalidPeriod] = useState(false)
  const [simpleInterest,setSimpleInterest]=useState("")
  console.log(amount);
  console.log(rate);
  console.log(year);
  
  
  
  console.log(simpleInterest);
  

  const validateInput = (tag) => {
    const { name, value } = tag
    console.log(name, value);


    //  console.log(!!value.match('^[0-9]*\\.?[0-9]+$'));
    if (!!value.match('^[0-9]*\\.?[0-9]+$')) {
      if (name == 'principle') {
        setAmount(value)
        setIsInvalidPrinciple(false)

      }
      else if (name == 'interest') {
        setRate(value)
        setIsInvalidRate(false)
      }
      else {
        setYear(value)
        setIsInvalidPeriod(false)
      }
    }
    else {
      if (name == 'principle') {
        setIsInvalidPrinciple(true)
      }
      if (name == 'interest') {
        setIsInvalidRate(true)
      }
      else {
        setIsInvalidPeriod(true)
      }

    }
  }
  const handleReset=()=>{
    setAmount("")
      setRate("")
      setYear("")
      setSimpleInterest("")
      setIsInvalidPrinciple(false); 
  setIsInvalidRate(false);
  setIsInvalidPeriod(false);
    

  }






const handlecalculate = (e) => {
  e.preventDefault()
  // console.log("butten clicked");
  if(amount&&rate&&year){
    setSimpleInterest(amount*rate*year/100)
    
  }
  else{
    alert('enter the data to the field')
  }



}

return (
  <>
    <div className="bg-info">
      <div className="container calculator-box">
        <div className="form-container text-center">
          <div className="p-3 bg-warning">
            <h1 className="mb-3">Simple Interest Calculator</h1>
            <h2>total si:₹{simpleInterest}</h2>
            <p className="mb-4 text-muted">Calculate your simple interest easily</p>
          </div>
          <form className="p-4">
            {/* amount input */}
            <div className="mb-3">

              <TextField className='w-100 mb-3'value={amount} name='principle' onChange={(e) => validateInput(e.target)} id="Principal-amount" label="Amount" variant="outlined" />
              {IsInvalidPrinciple &&
                <div > <h1>invalid principle</h1> </div>
              }

            </div>
            {/* interest rate */}
            <div className="mb-3">
              <TextField className='w-100 mb-3'value={rate} name='interest' onChange={(e) => validateInput(e.target)} id="interest-rate" label="interest rate" variant="outlined" />
              {IsInvalidRate &&
                <div > <h1>invalid rate</h1> </div>
              }

            </div>
            {/* year  */}

            <div class="mb-3">
              <TextField className='w-100 mb-3' value={year} name='year' onChange={(e) => validateInput(e.target)} id="year-no" label="Number of year" variant="outlined" />
              {IsInvalidPeriod &&
                <div > <h1>invalid year</h1> </div>
              }

            </div>
            <Stack direction="row" spacing={2}>
              <Button disabled={IsInvalidPeriod || IsInvalidPrinciple || IsInvalidRate} onClick={(e) => handlecalculate(e)} type='submit' className='w-100 bg-dark p-3' variant="contained">calculate</Button>
              <Button onClick={handleReset} type='button' className='w-100 p-3' variant="outlined">reset</Button>
            </Stack>


          </form>
        </div>
      </div>



    </div>


  </>

)
}

export default App
