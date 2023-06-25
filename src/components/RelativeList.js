import React from "react";

const RelativeList = () => {

    const relatives = [
        {id : "relativeListItem1", name : "Arjun"},
        {id : "relativeListItem2", name : "Sumit"},
        {id : "relativeListItem3", name : "Abhishek"},
        {id : "relativeListItem4", name : "Shriom"},
        {id : "relativeListItem5", name : "Ashutosh"},
        {id : "relativeListItem6", name : "Sachin"}
    ];


    return(
        <div>
            {/* <h1>hi</h1> */}
            <ol key="relativeList">
                {
                    relatives.map((relative) => {
                        return <li key={relative.id}>{relative.name}</li>
                        // console.log(relative)
                    })
                }
            </ol>
        </div>
    )
}

export default RelativeList;