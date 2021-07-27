import React from 'react'
import PropTypes from 'prop-types'

function CreateCar({carName,carNumber,onChange,onCreate}) {
    return (
        <div style = {{margin: "30px"}}>
            <input
                name="car"
                placeholder="자동차명"
                onChange={onChange}
                value={carName}
            />
            <input
                name="number"
                placeholder="자동차번호"
                onChange={onChange}
                value={carNumber}
                />
      <button onClick={onCreate}>등록</button> 
        </div>
    )
}

CreateCar.propTypes = {

}

export default CreateCar 

