export const getSigns = () =>{
    return fetch("http://sandipbgt.com/theastrologer/api/sunsigns/")
    .then(response => response.json())
}
export const gethoroscope = ({timeframe, zsign}) =>{
    return fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${zsign}/${timeframe}/`)
    .then(response => response.json())
}
