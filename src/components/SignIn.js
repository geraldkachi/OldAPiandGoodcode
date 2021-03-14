import axios from 'axios';
import React from 'react'
import { Form, FormGroup, Label, Input ,Button} from 'reactstrap';

const SignIn = () => {

    const [forminput,setForminput] = React.useState({
        email:'',
        password:'',
    })

    const { email, password} = forminput

    const handleSubmit = e => {
        e.preventDefault()
        console.log(forminput);
        setForminput({
            email:'',
            password:'',
        })

        axios.post(`http://localhost:8000/sigin`, forminput)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    const handleChange = e => {
        const {name, value} = e.target
        setForminput({...forminput, [name]:value })
    }

    return (
        <>
            <div className="container justify-content-center align-items-center d-flex h-50">
                <Form onSubmit={handleSubmit}  className="">      
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" value={email} placeholder="Email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" value={password} placeholder="password" onChange={handleChange} />
                    </FormGroup> 
                    <Button type="submit" className="btn-block btn-success">Press Me Jor</Button>
                </Form>
            </div>
        </>
    )
}

export default SignIn
