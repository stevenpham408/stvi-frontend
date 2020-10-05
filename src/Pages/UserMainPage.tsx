import React from 'react'
import axios from 'axios'
import isUrl from 'validator/lib/isUrl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './styles.css'
const UserMainPage : React.FC = () => {

    const handleSubmit = () => {


    }
    return(
        <body>
            <div className='shortener-container'>
                <h1> URL Shortener </h1>
                <Form className='my-4'>
                    <div className='urlshorten-form-group'>
                        <input required
                           type="text" 
                           name="url" 
                           className="urlform-control" 
                           placeholder="Input URL here" 
                        />
                        <Button type="submit" className="btn-flat" >Shorten</Button>
                    </div>
                </Form>

                <Table className="table table-striped">
                    <thead>
                        <tr>
                            <th> Original URL </th>
                            <th> Short URL </th>
                            <th> # of clicks </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <a href="www.google.com"> www.google.com </a> </td>
                            <td> <a href="short1"> short1 </a> </td>
                            <td> 0 </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </body>

    )
}

export default UserMainPage