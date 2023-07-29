import React from 'react'

function TableShow({ lastdata }) {
    return (
        <div>

            <table className="table table-sm table-hover table-bordered " >
                <thead className="bg-blue ">
                    <tr className="text-center text-white bg-info">
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th>brand</th>
                        <th>category</th>
                        <th>thumbnail</th>
                        <th>images</th>
                    </tr>
                </thead>
                <tbody>
                    {lastdata.map((item, i) => {
                        return (
                            <tr className="text-center text-info">
                                <td key={i}>{item.id}</td>
                                <td key={i}>{item.title}</td>
                                <td key={i}>{item.description}</td>
                                <td key={i}>{item.price}</td>
                                <td key={i}>{item.brand}</td>
                                <td key={i}>{item.category}</td>
                                <td ><img src={item.thumbnail} alt="not found" width="80px" height="80" />  </td>
                                <td ><img src={Object.values(item.images)[0]} alt="not found" width="80px" height="80" />  </td>

                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TableShow