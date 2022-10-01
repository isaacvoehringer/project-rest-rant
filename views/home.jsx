const React = require("react")
const Def = require("./default")

function home() {
  return (
    <Def>
      <main>
        <h1>Rest-rant</h1>
        <div>
          <img src="/images/poke-bowl.jpg" className="rounded mx-auto d-block img-fluid" alt="poke" />
          <div>
          Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
          </div>
        </div>
        <a href="/places">
  <button className="btn-info btn-large btn-block ">Places Page</button>
</a>
      </main>
    </Def>
  )
  
}


module.exports = home;
