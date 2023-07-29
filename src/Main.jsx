
import React, { useState, useEffect } from 'react';
import TableShow from "./TableShow";
import Pagination from "./pagination";

const url = "https://dummyjson.com/products";


function Main() {
    const [data, setdata] = useState([]);
    const [firstpage, setfirstpage] = useState(1);
    const [perpage, setperpage] = useState(5);
    const [search, setSearch] = useState('');
    const keys = ["title", "description", "brand", "category"];

    //for fetching data
    const myfetchdata = async (url) => {
        try {
            const fetchdata = await fetch(url).then((x) => x.json()).then((i) => {

                if (i.products.length > 0) {
                    setdata(i.products);
                }
            }
            );

        } catch (error) {
            console.log("Error form try catch", error);

        }


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
                <TableShow lastdata={lastdata} />
            </div>
            <div className="d-flex justify-content-center">

                <Pagination x={x} setperpage={setperpage} setfirstpage={setfirstpage} />
            </div>


        </>
    )
}

export default Main