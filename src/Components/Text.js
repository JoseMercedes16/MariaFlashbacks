import React from 'react'

function text() {
    const textStyle = {
        textAlign: 'center',
        padding : '20px',
        marginTop: ' 50px',
        marginBottom: '50px',
        backgroundColor: '#23394d',
        color: '#fff',
        
    }


    return (

        <div style={textStyle}>
            <p>
                “La fotografía sólo puede representar el presente. Una vez fotografiados, el sujeto se convierte en parte del pasado.” Berenice Abbott»
            </p>
            <br />
            <p>
                “En el ojo de mi mente, visualizo un detalle. La vista y la sensación aparecerán en una impresión. Si me excita, hay una buena ocasión que hará una buena fotografía. Es un sentido intuitivo, una capacidad que viene de mucha práctica”. Ansel Adams
            </p>
        </div>

    )
}

export default text;
 