import React from 'react'
import Pdata from '../Movieslist'


const Sidebar = (props) => {
  // const[CheckedBox,setCheckedBox]=useState(false)

  const {data,setData,searchData}=props
  console.log('dataVal - ',data)
  
  
  const UpdateGenderfn=(e)=>{
    
    console.log('gender - ',e.target.value)
    const result= Pdata.filter((item)=>{
        return item.filter=== e.target.value
    })
    setData(result)
    console.log("filter - ", result)
  }
  const CheckboxFn1=(e)=>{
    
    console.log('checkbox1 - ',e.target.value)
    const result= Pdata.filter((item)=>{
      return item.category=== e.target.value
  })

  setData(result)
  console.log("filter - ", result)
  }
  
  const CheckboxFn2=(e)=>{
    
    console.log('checkbox2 - ',e.target.value)
    const result= Pdata.filter((item)=>{
      return item.category=== e.target.value
  })
  setData(result)
  console.log("filter - ", result)
    
  }
  
  if(searchData.length>0){
    console.log('searchdata.......')
    setData(searchData)
  }
  
  else if(data.length===0){
    console.log('orignal.......')

    setData(Pdata)
  }
  return (
    <div>
        
        
<h4>Gender</h4> 
{/* checked='checked' */}
<div className='gender' >
<input type="radio"  name = "gender"  onChange={UpdateGenderfn} value  = "men"/> 
<label for = "gender"> Male  </label> <br/>  
<input type="radio"  name = "gender" onChange={UpdateGenderfn} value  = "women"/> 
<label for = "gender"> Female  </label> <br/>  
<input type="radio"  name = "gender"  onChange={UpdateGenderfn} value  = "boys"/> 
<label for = "gender"> Boys  </label> <br/>  
<input type="radio"  name = "gender" onChange={UpdateGenderfn} value  = "girls"/> 
<label for = "gender"> Girls  </label> <br/>  
</div>
<h4>Categories</h4>
<div className='categories'>

<input type="checkbox" onChange={CheckboxFn1}  id="shirt" name="shirt" value="shirt"/>
<label for="shirt"> Shirt</label><br/>
<input type="checkbox" onChange={CheckboxFn2}  id="sleepShirt" name="sleepShirt" value="sleepShirt"/>
<label for="sleepShirt"> Folded Sleeves</label><br/>
{/* <input type="checkbox" onChange={CheckboxFn}  id="dogShirt" name="dogShirt" value="dogShirt"/>
<label for="dogShirt">Latest</label><br/> */}
</div>
 
       

    </div>
  )
}

export default Sidebar