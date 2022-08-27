import React , {useState} from 'react'

export default function FormInputs({getContact}) {
    const [inputs, setInputs] = useState({
        id : Date.now(),
        FirstName : 'Akpe',
        LastName : 'Jay',
        Phone : '93723'
    })

    const HandleChange = (e)=>{
        const {name, value} = e.target
        let id = Date.now()
        setInputs(prev => ({...prev, 'id':id , [name] : value}))
    }

    
    const HandleSubmit = (e)=>{
        e.preventDefault() 
        getContact(inputs)
        setInputs({
            FirstName : '',
            LastName : '',
            Phone : ''
        })
    }
  return (
    <div>
        <form onSubmit={HandleSubmit} style={{"padding":"100px", "backgroundColor":"white"}}>
            <input style={{"marginBottom":"10px", "padding":"10px", "width": "250px"}} type="text" name="FirstName" value={inputs.FirstName} onChange={HandleChange} />
            <br />
            <input style={{"marginBottom":"10px", "padding":"10px","width": "250px"}} type="text" name="LastName"  value={inputs.LastName} onChange={HandleChange} />
            <br />
            <input style={{"marginBottom":"10px", "padding":"10px","width": "250px"}} type="text" name="Phone"  value={inputs.Phone}
            onChange={HandleChange} />
            <br />
            <button style={{"padding":"10px","width": "200px", "cursor":"pointer"}}>Submit</button>
        </form>
    </div>
  )
}
