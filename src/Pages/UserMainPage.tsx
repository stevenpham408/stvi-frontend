import React, { MouseEvent } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import {useHistory} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Trashcan from '../Images/Trashcan.svg'
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
    const history = useHistory();
    const [urlData, setUrlData] = React.useState(initialUrlData);
    const [arrayUrl, setArrayUrl] = React.useState<urlJson[]>([])
    axios.defaults.withCredentials = true;

    React.useEffect( () => {
        const fetchData = async () => {
            let content = await getUserUrlCollection();
            let parsed = JSON.parse(JSON.stringify(content, replacer))["content"]
            setArrayUrl(parsed)
        }
        fetchData();
    }, [setArrayUrl]);

    const handleRowDelete = (key: number, hash: string) => {
        const urlReq = "http://localhost:4040/delete/url?hash=" + hash;
        const newArray = [...arrayUrl];
        newArray.splice(key, 1);

        axios.delete(urlReq, config)
            .then(response => {
                setArrayUrl(newArray);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleFieldChange = (e: any) => {
        setUrlData({
            ...urlData,
            longUrl : e.target.value
        })    
    }

    const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
        axios.post("http://localhost:4040/logout", config)
            .then((response)=> {
                if(response.status === 200){
                    history.push("/");
                }
            })        
    }

    const getUserUrlCollection = async () => {
        const promise = axios.get("http://localhost:4040/user/url", {withCredentials: true});
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    };
 
    const handleLogin = (e : any) => {
        e.preventDefault();
        axios.post("http://localhost:4040/url", urlData, config)
        .then(async response => {
            let content = await getUserUrlCollection();
            let parsed = JSON.parse(JSON.stringify(content, replacer))["content"]
            setArrayUrl(parsed)
        })  
        .catch(error => {
            console.log("There was a problem processing your request." + urlData);
        })  
    }

    return(
        <div className='shortener-container'>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item className="navbar-button-item">
                    <Nav.Link >
                        <Button variant="outline-light" size="sm" onClick={handleLogout}>
                            <strong>LOG OUT</strong>
                        </Button>
                    </Nav.Link>
                </Nav.Item>
            </Nav> 
            <div className="user-main-page-decoration">
                <h1>Ready to cut the fluff?</h1>
                <h2>Let's get started.</h2>
                <Form className='my-4'>
                    <div className='urlshorten-form-group'>
                        <input required
                            type="text" 
                            value={urlData["longUrl"]}
                            className="urlform-control" 
                            placeholder="Input URL here" 
                            onChange={handleFieldChange}
                        />
                        <Button type="submit" className="btn-flat btn-shorten" onClick={handleLogin} >Shorten</Button>
                    </div> 
                    </Form>
            </div>
                <div className="url-container">
                    <Table className="table">
                        <thead>
                            <tr>
                                <td> Short URL </td>
                                <td> Original URL </td>
                            </tr>
                        </thead>
                        {arrayUrl!.map((data, key) => {
                            return (
                                <tbody key={key}>
                                    {
                                        <tr>
                                        <td> {key} </td>
                                        <td> <a href={"http://localhost:3000/" + data.hash}>localhost:3000/{data.hash}</a> </td>
                                        <td> {data.longUrl} </td>
                                        <td> 
                                            <img alt="trashcan-img" src={Trashcan} width="32px" height="32px" draggable="false" onClick={() => handleRowDelete(key, data.hash)}/>
                                        </td>
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