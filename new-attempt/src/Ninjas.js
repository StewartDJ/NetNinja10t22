import React from 'react';
import './Ninjas.css'
import './AddNinja'



const Ninjas = ({ ninjas, deleteNinja } ) => {
 
   return (
       <div className="ninja-list" > {
           ninjas.map(ninja => {
               return (
                   <div className="ninja" key={ninja.id}>
                       <div> Name: {ninja.name}</div>
                       <div> Age: {ninja.age}</div>
                       <div> belt: {ninja.belt}</div>
 <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
            </div>
    )
})
}
</div>
);
}
      
     // const ninjaList = ninjas.map(ninja => { 
        //  if (ninja.age > 20) {

          
         // return (

         //   <div className="ninja" key={ninja.id}>
        //    <div>Name: {ninja.name}</div>
       //  <div>Age: {ninja.age}</div>
       //  <div>Belt: {ninja.belt}</div>
       //    </div>
      //    )
      //  } else {
     //       return null
     //   }

   //   })

  

export default Ninjas
