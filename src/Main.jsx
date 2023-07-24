
import React, { useState, useEffect } from 'react';
import { setDefaultHighWaterMark } from 'stream';
const url = "https://dummyjson.com/products";


function Main() {
    const [data, setdata] = useState([]);
    const [firstpage, setfirstpage] = useState(1);
    const [perpage, setperpage] = useState(5);
    const [search, setSearch] = useState('');
    const keys = ["title", "description", "brand", "category"];

    //for fetching data
    const myfetchdata = async (url) => {
        const fetchdata = await fetch(url).then((x) => x.json()).then((i) => {

            if (i.products.length > 0) {
                setdata(i.products);
            }
        }
        );

    }

    useEffect(() => {
        myfetchdata(url);
    }, []);



    const x = [];
    for (let i = 1; i < Math.ceil(data.length / perpage); i++) {
        x.push(i);
    }

    //for searching

    const mysearch = (fdata) => {

        return fdata.filter(item => {
            return (
                keys.some(i => item[i].toLowerCase().includes(search.toLowerCase()))
            )
        })

    }
    //for pagination

    const indexoflastpage = firstpage * perpage;
    const indexoffirstpage = indexoflastpage - perpage;
    const lastdata = mysearch(data).slice(indexoffirstpage, indexoflastpage);



    return (
        <>
            <div className="d-flex justify-content-center" style={{ marginTop: 20, marginBottom: 10 }}>
                <input className='rounded-pill form-cortrol' type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search....' />
            </div>

            <div>
                <table className="table table-bordered table-sm table-hover table-striped">
                    <thead >
                        <tr>
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
                                <tr>
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
            <div className="d-flex justify-content-center">
                <div className="pagination" >


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



                </div>

            </div>


        </>
    )
}

export default Main