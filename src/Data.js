import axios from 'axios';
import DOMPurify from 'dompurify'
import './Data.css';
import React, { useEffect, useState } from 'react';

function Data(){
    const [ data,setData ] = useState(null);
    const [loading,setloading] = useState(false);
    const [limit,setlimit] = useState(8);
    const [search,setsearch] = useState("India");
    var url = `https://techcrunch.com/wp-json/wp/v2/search?per_page=${limit}&search=${search}`
    useEffect(()=>{
        if(data!=null) setData(null)
        calldata();
        console.log(search)
        window.addEventListener('scroll',handlescroll)
    },[search])
    function handlescroll(){
        if(window.innerHeight + document.documentElement.scrollTop == window.document.documentElement.offsetHeight && !loading ){
        console.log("End Of page")
        setloading(true);
        }
 
    }
    async function calldata(){
        setloading(true);
        await axios.get(url).then((res)=>{
            setData(res.data)
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
        setloading(false)
    }
    function searched(){
        setsearch(changes)
        console.log("Searched")
    }
    var changes = ""
    function changed(sel){
        changes = sel.target.value
        console.log(changes)
    }
    function home(){
        window.location.reload(true);
    }
    async function callapimore(){
        setlimit(limit+3);
       await axios.get(url).then((res)=>{
            setData(res.data);
            console.log(res.data)
        }).catch((error)=>{
            console.log(error)
        })
        setloading(false)
    }

    useEffect(()=>{
        if(!loading) return;
        console.log(loading)
        callapimore();
    },[loading])


    if(data){
        if(data.length!=0){
        return (
            <>            
            <div className='input-box'><span className='search'>Search :- </span> <div className='container'>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">India</label>
                <input type="text" class="form-control" id="inputPassword2 vall" onChange={changed} placeholder={search}/>
            </div>
            <div class="col-auto">
                <button type="submit" class="button btn btn-primary mb-3" onClick={searched}>Search News</button>
            </div>
                </div></div>
            <div className='card2'>
                <div>
        {data.map((key,val)=>{
            return <div className='mancard' key={val} >

                       <div className='img-content'>
                       <span className="content card-head" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(key['title'])}}></span>
                       </div>
                       
                        <div className='post-link'><a target="_blank" href={key['url']}><button type='submit'>Link to Post</button></a></div>
                </div>
                
        })}        
        </div>
       

        </div>
        { loading && <div className='card2'>
                <div>
                    <div className='mancard'>Loading...</div>
                </div>
        </div>}
        </>
        )
        }
    else{
        return(
        <div className='card2'>
                <div>
                    <div className='mancard'>Invalid Search...</div>
                    <button type='submit' onClick={home}>Home</button>
                </div>
        </div>
            )
        }
    }
    else{
        return(
            <div className='card2'>
                    <div>
                        <div className='mancard'>Loading..</div>
                    </div>
            </div> 
        )
    }
}
export default Data;