import React from 'react'

export default function Lists({contactList}) {
  contactList.sort((a,b) => {
        let nameA = a.FirstName.toLowerCase()
        let nameB = b.FirstName.toLowerCase()

        if(nameA < nameB) return -1
        if(nameB > nameA) return 1
        return 0      
      })
  return (
    <div>
        <table  style={{"padding":"10px", "backgroundColor":"white", "marginTop" : "30px", "width":"500px" , "color":"black"}}>
          <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
          </thead>
          <tbody>
            {
              contactList.map(list => 
                    <tr key={list.id}>
                      <td>{list.FirstName}</td>
                      <td>{list.LastName}</td>
                      <td>{list.Phone}</td>
                    </tr>
              )
              

            }

          </tbody>
        </table>
    </div>
  )
}
