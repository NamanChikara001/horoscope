import { react, useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { getSigns } from './services/api';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext';
import {Horoscope} from './Components/Horoscope'
 

function App() {
  const [signs, setSigns] = useState([]);
  const [selectedSigns, setSelectedSigns] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedName, setSeletedName] = useState('')
  const [prevState, setPrevState] = useState('');
  const [prevDateState, setPrevDateState] =  useState('')
  const [showHoroscope, setShowHoroscope] = useState(Boolean)
  const [showMsg , setShowMsg] = useState('')
  const [showMsgOne, setShowMsgOne]=useState('')
  useEffect(() => {
    getSigns().then(setSigns);
  }, [])
  const handleSigns = (e) => {
    console.log(e.currentTarget.value)
    if(!selectedSigns){
      setSelectedSigns(e.currentTarget.value)
      e.currentTarget.style.backgroundColor = '#0070c9';
      e.currentTarget.style.color='white';
      setPrevState(e)
      setShowMsg('')
    }
    else{
      prevState.target.style.backgroundColor=""
      prevState.target.style.color=''
      setSelectedSigns(e.currentTarget.value)
      e.currentTarget.style.backgroundColor = '#0070c9';
      e.currentTarget.style.color='white';
      setPrevState(e)
    }
  }
  const handleDate = (e) =>{
    console.log(e.currentTarget.value)
    if(!selectedDate){
      setSelectedDate(e.currentTarget.value)
      e.currentTarget.style.backgroundColor = '#0070c9';
      e.currentTarget.style.color='white';
      setPrevDateState(e)
      setShowMsgOne('')
    }
    else{
      prevDateState.target.style.backgroundColor=''
      prevDateState.target.style.color=''
      setSelectedDate(e.currentTarget.value)
      e.currentTarget.style.backgroundColor = '#0070c9';
      e.currentTarget.style.color='white';
      setPrevDateState(e)
    }
  }
  const submitHandle =(e) =>{
    e.preventDefault();
    if(!selectedSigns){
      setShowMsg('Please select one')
    }
    else{
      setShowMsg('')
    }
    if(!selectedDate){
      setShowMsgOne('Please select one')
    }
    else{
      setShowMsgOne('')
    }
    if(selectedSigns && selectedDate){
      setShowHoroscope(true);
    }
    else{
      alert("not found")
    }
  }
  const handleName = (e) =>{
    setSeletedName(e.currentTarget.value)
  }
  return (
    <div className="App container-fluid">
      <h1 className='mt-2'>Horoscope Details..</h1>
      <div className='row mt-2'>
        <div className='col-lg-10 col-md-10 col-sm-12 col-12 d-block m-auto'>
          <Card className='card-class'>
            <form onSubmit={submitHandle}>
            <div className='row mt-2'>
              <div className='col-3 d-block m-auto'>
                <label className='font-style'>Horoscope Sign</label>
              </div>
              <div className='col-9 d-block m-auto'>
                {signs.map((sign) => (
                  <button type='button' style={{ margin: 1 }} value={sign} name="selectedSigns" onClick={handleSigns} className="btn-class" key={sign}>{sign}</button>
                ))}<br />
                {showMsg}
              </div>
            </div>
            <div className='row mt-1'>
              <div className='col-3 d-block m-auto'>
                <label className='font-style'>Name</label>
              </div>
              <div className='col-9 d-block m-auto'>
                <InputText className='form-style' name='selectedName' value={selectedName} required onChange={handleName}/>
              </div>
            </div>

            <div className='row mt-1'>
              <div className='col-3 d-block m-auto'>
                <label className='font-style'>Date</label>
              </div>
              <div className='col-9 d-block m-auto'>
                {['yesterday','today','tomorrow'].map((date) => (
                  <button type='button' style={{ margin: 1 }} value={date} onClick={handleDate} className="btn-class" key={date}>{date}</button>
                ))}<br />
                {showMsgOne}
              </div>
            </div>

            <div className='row mt-1 mb-2'>
              <div className='col-3 d-block m-auto'>
                <label className='font-style'>Email</label>
              </div>
              <div className='col-9 d-block m-auto'>
              <InputText type='email' className='form-style' required/>
              </div>
            </div>
            <div className='text-center'>
            <button className="btn-class mb-2" type='submit' style={{backgroundColor:'#0070c9',color:"#fff"}}>Submit</button>
            </div>
            </form>
          </Card>
        </div>
      </div>
      <div className='mt-3'>
        {showHoroscope && (
          <Horoscope timeframe={selectedDate} zsign={selectedSigns} userName={selectedName}/>
        )}
      </div>
    </div>
  );
}

export default App;
