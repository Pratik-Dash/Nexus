import React from 'react'

const Specs = ({product}) => {
    const{specifications:{minimum,recommended}} = product
   
  return (
    <div className='specification-container'>
      <div className='min-req'>
        <p>Minimum</p>
        {
            minimum.map(spec =>
              <div>
                <label>
                  {`${Object.keys(spec)[0]}`}
                  <div>{`${spec[Object.keys(spec)[0]]}`}</div>
                </label>
                </div>
             )
        }
      </div>
      <div className='recommended-req'>
      <p>Recommended</p>
        {

            recommended.map(spec =>
                <div>
                <label>
                  {`${Object.keys(spec)[0]}`}
                  <div>{`${spec[Object.keys(spec)[0]]}`}</div>
                </label>
                </div>
             )
        }
      </div>
      <div></div>
    </div>
  )
}

export default Specs
