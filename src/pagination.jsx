import React from 'react'

function pagination({ x, setperpage, setfirstpage }) {
    return (
        <div>  <div className="pagination" >


            <select className="form-select" onChange={(e) => setperpage(e.target.value)}>
                <option value="" active>Set Per Page</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>

            </select>
            <button className="page-link rounded" onClick={() => setfirstpage(pre => pre = 1)} >
                &laquo;</button>
            <button className="page-link rounded" onClick={() => setfirstpage(pre => pre === 1 ? pre : pre - 1)}>&lsaquo;</button>

            {x.map((i) =>
                <button className="btn btn-info page-link" onClick={() => setfirstpage(i)} >
                    {i}
                </button>
            )}
            <button className="page-link rounded" onClick={() => setfirstpage(next => next === x.length ? next : next + 1)}>
                &rsaquo;</button>
            <button className="page-link rounded" onClick={() => setfirstpage(next => next = x.length)}>
                &raquo;</button>



        </div></div>
    )
}

export default pagination