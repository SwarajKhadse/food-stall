import React from 'react'
// import maggi from './images/maggi.jpg'
function MenuCard({menuData}) {
  return (
    <>
    <section className="main-card--cointainer">
        {menuData.map((currElem =>{
          // the below line is destructuring the array by using itwe can access element by key itself
          const {id,name,category,image,description} =currElem;
            return(
                <>
                <div className="card-container" key={id}>
        <div className="card">
            <div className="card-body">
                <span className='card-number card-circle subtle'>{id}</span>
                 <span className='card-author subtle'>{category}</span>
                <h2 className='card-title'>{name}</h2> 
                <span className='card-description subtle'>
                  {description}
                </span>
              <div className='card-read'>
                Read
              </div>

               <img src={image} alt="images" className='card-media'/>
              <span className='card-tag subtle'> Order now</span>
              </div>
        </div>
    </div>
    
                </>
            )
                    }))}
        </section>  
    </>
  )
}

export default MenuCard