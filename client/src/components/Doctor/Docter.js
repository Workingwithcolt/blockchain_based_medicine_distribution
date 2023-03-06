import React from 'react'
import './docter.css'
export const Docter = () => {
  return (
    <div className='container'>
        <div className='container_first'>
            {/* name */}
            <div className='Name_container'>
                Dr.Rokde
            </div>
            {/* addres */}
            <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
        </div>
        <div className="container_second">
            {/* medicines */}
            <div className='patient'>
                <div className='patient_name'>
                    Chetan
                </div>
                <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            </div>

            <div className='patient'>
                <div className='patient_name'>
                    Manisha
                </div>
                <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            </div>

            <div className='patient'>
                <div className='patient_name'>
                    Athrav
                </div>
                <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
            </div>
            
        </div>
        </div>
  )
}
