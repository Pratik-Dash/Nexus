import React from 'react'

const Specs = ({product}) => {
    const{specifications:{minimum,recommended}} = product
   
  return (
  
    <div className='specification-container'>
    <div className='requirements'>
      <div className='min-req'>
        <div className='specs-headers'>Minimum</div>
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
      <div className='specs-headers'>Recommended</div>
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
     
      </div>
     
    </div>
 
     

  )
}

export default Specs
