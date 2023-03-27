import React, { useState } from "react";
import { appFirebase } from '../firebaseConfig';
import { Modal, Button, Form } from "react-bootstrap";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";


const Login = ({ show, handleClose }) => {
    const [activeTab, setActiveTab] = useState("login");
    const [data, setData] = useState({});
    const provider = new GoogleAuthProvider();
    let auth = getAuth(appFirebase);
    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput })
    }

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleGoogle = () => 
    {signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user)
         
        }).catch((error) => {
           alert(error)
        });}

    const handleSubmit = () => {
        if (activeTab === "signup")
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((response) => {
                    console.log(response.user)
                })
                .catch((error) => {
                    alert(error.message)
                })
        else {
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((response) => {
                    console.log(response.user)
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    }

    return (
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
                <Modal.Title>{activeTab === "login" ? "Login" : "Signup"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    {/* {activeTab === "signup" && (
                        <div>
                            <Form.Group controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="firstName" type="text" placeholder="Enter first name" onChange={(e) => handleInput(e)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control name="lastName" type="text" placeholder="Enter last name" onChange={(e) => handleInput(e)} />
                            </Form.Group>
                        </div>
                    )} */}

              
                        <Button  variant="outline-info" className="my-3 " onClick={()=>{handleGoogle()}}>Signin with Google</Button>
               

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => handleInput(e)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={(e) => handleInput(e)} />
                    </Form.Group>

                    {activeTab === "login" && (
                        <p>
                            <a href="/">Forgot your password?</a>
                        </p>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="info" type="submit" onClick={() => handleSubmit()}>
                    {activeTab === "login" ? "Login" : "Signup"}
                </Button>
            </Modal.Footer>
            {activeTab === "login" && (
                <div className="text-center mb-3">
                    Don't have an account yet?{" "}
                    <Button variant="link" onClick={() => handleTabChange("signup")}>
                        Sign up here
                    </Button>
                </div>
            )}
            {activeTab === "signup" && (
                <div className="text-center mb-3">
                    Already have an account?{" "}
                    <Button variant="link" onClick={() => handleTabChange("login")}>
                        Login here
                    </Button>
                </div>
            )}
        </Modal>
    );
};

export default Login;
