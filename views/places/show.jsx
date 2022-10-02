const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name } </h1>
                <div><h2>Rating</h2>
                not rated
                </div>
                <div>
                <img src={data.place.pic} alt={data.place.name} height={200}/>
                </div>
                <div> 
                    <p> Located in {data.place.city},  {data.place.state} 
                     </p>
                <p> Serving {data.place.cuisines}</p>
   
                </div>
                
                <h2>Comments</h2>
                    no comments yet
                  <div>  
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                 Edit
            </a>  
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete
                </button>
            </form>     

</div>

            </main>
        </Def>
    )
}
module.exports = show