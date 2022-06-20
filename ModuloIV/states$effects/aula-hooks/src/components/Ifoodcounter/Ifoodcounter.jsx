import React, {useState, useEffect} from 'react';
import '../Ifoodcounter/Ifoodcounter.css'


function Ifoodcounter() {

  const [value, setValue] = useState(1);
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

  useEffect(() =>{
      document.getElementById("moeda").innerHTML = 2.00 * value
      console.log(`o estilo do botao atual é: ${buttonStyle}`)
  }, [value])

  function down() {

    if (value <= 1){
      setButtonStyle("counter-button-minus-desactive")
    }

    if( value > 0){ // para o valor não ficar negativo
      setValue(value-1)
    }
  }

  function up() {
    setValue(value+1)
    setButtonStyle("counter-button-minus-active")
  }

  return (
      <div className='countex-wrapper'>
        <button className={buttonStyle}
                onClick={down}>
            -
        </button>
        <p>{value}</p>
        <button className='counter-button-plus-active'
                onClick={up}>
            +
        </button>
        <button id='moeda'>12,00</button>
      </div>
  )    
}

export default Ifoodcounter;