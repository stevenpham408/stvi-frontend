import React from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'   

interface urlJson {
    hash: string,
    longUrl: string,
    userId: number
};

function replacer(key:any,value:any)
{
    if (key==="pageable" || key==="sort" || key==="last" || key==="totalPages" || key==="totalElements" 
    || key==="number" || key==="size" || key==="numberOfElements" || key==="first" || key==="empty"){
        return undefined;
    }
    return value;
}

const initialUrlData = Object.freeze({
    longUrl: ""
});

const config = Object.freeze({
    withCredentials: true,  
    headers: {
      crossDomain: true, 
      'Access-Control-Allow-Origin' : 'http://localhost:4040',
      'Content-Type': 'application/json'
    },
});

const UserMainPage : React.FC = () => {
    const [urlData, setUrlData] = React.useState(initialUrlData);
    const [arrayUrl, setArrayUrl] = React.useState<urlJson[] | null>([])

    React.useEffect( () => {
        const fetchData = async () => {
            let content = await urlJsonPromise();
            let parsed = JSON.parse(JSON.stringify(content, replacer))["content"]
            setArrayUrl(parsed)
        }
        fetchData();
    }, [setArrayUrl]);

    const handleChange = (e: any) => {
        setUrlData({
            ...urlData,
            longUrl : e.target.value
        })    
        alert(e.target);
    }

    const urlJsonPromise = async () => {
        const promise = axios.get("http://localhost:4040/user/url", {withCredentials: true});
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    };
 
    const handleSubmit = (e : any) => {
        e.preventDefault();
        axios.post("http://localhost:4040/url", urlData, config)
        .then(async response => {
            let content = await urlJsonPromise();
            let parsed = JSON.parse(JSON.stringify(content, replacer))["content"]
            setArrayUrl(parsed)
        })  
        .catch(error => {
            console.log("There was a problem processing your request." + urlData);
        })  
    }
    return(
            <div className='shortener-container'>
                <h1> URL Shortener </h1>
                <Form className='my-4'>
                    <div className='urlshorten-form-group'>
                        <input required
                           type="text" 
                           value={urlData["longUrl"]}
                           className="urlform-control" 
                           placeholder="Input URL here" 
                           onChange={handleChange}
                        />
                        <Button type="submit" className="btn-flat" onClick={handleSubmit} >Shorten</Button>
                    </div> 
                </Form>
                
                <div className="url-container">
                    <Table className="table">
                        <thead>
                            <tr>
                                <td> Short URL </td>
                                <td> Original URL </td>
                                <td> User ID</td>
                            </tr>
                        </thead>
                        {arrayUrl!.map((data, key) => {
                            return (
                                <tbody key={key}>
                                    {
                                        <tr>
                                        <td> <a href={"http://localhost:3000/" + data.hash}>localhost:3000/{data.hash}</a> </td>
                                        <td> {data.longUrl} </td>
                                        <td> {data.userId} </td> 
                                        </tr>
                                    } 
                                </tbody>
                            );
                        })}
                    </Table>
                </div>
            </div>
    )
}   

export default UserMainPage