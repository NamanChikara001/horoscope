import { useEffect, useState } from "react"
import { gethoroscope } from "../services/api"
 import { Card } from "primereact/card"
 import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const Horoscope = ({timeframe, zsign, userName}) =>{
    const [horoscopeData, setHoroscopeData] = useState([])
    useEffect(()=>{
        gethoroscope({timeframe, zsign}).then(setHoroscopeData)
    },[])
    const handleReset = () =>{
        window.location.reload(true)
    }
    return(
        <>
<div className="App container-fluid">
      <h1 className='mt-2'>Horoscope Data</h1>
      <div className='row mt-2'>
        <div className='col-lg-10 col-md-10 col-sm-12 col-12 d-block m-auto'>
          <Card className='card-class'>
          <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12 col-12 d-block m-auto">
                    <div className="row">
                        <div className="col-3 d-block m-auto">
                            <label className="font-style">user name</label>
                        </div>
                        <div className="col-9 d-block m-auto">
                            <h6>{userName}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3 d-block m-auto">
                            <label className="font-style">Horoscope Date</label>
                        </div>
                        <div className="col-9 d-block m-auto">
                            <h6>{timeframe}</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3 d-block m-auto">
                            <label className="font-style">Description</label>
                        </div>
                        <div className="col-9 d-block m-auto">
                            <p style={{fontSize:12,padding:2}}>{horoscopeData.horoscope}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3 d-block m-auto">
                            <label className="font-style">Horoscope Sign</label>
                        </div>
                        <div className="col-9 d-block m-auto">
                            <h6>{zsign}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn-class mb-2 mt-3" onClick={handleReset} style={{backgroundColor:'#0070c9',color:"#fff"}}>Reset</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </>
    )

}