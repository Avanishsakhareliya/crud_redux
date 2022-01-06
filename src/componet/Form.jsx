import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux"
import { AddData } from "../Action/index"
import Table from '../componet/Table';
import { Link } from '@material-ui/core';
import { useNavigate } from "react-router-dom"

function Form() {

    const navigator = useNavigate()

    const dispatch = useDispatch()
    const select = useSelector(state => (state.Reducer))
    const [err, seterr] = useState({
        e1: "",
        e2: "",
        e3: "",
        errval: false
    })
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        city: "",
        gender: "",
    })

    console.log("select", select);

    function validation() {
        user.fname === "" ? seterr((pre) => ({ ...pre, e1: "enter your fname", errval: true })) : seterr((pre) => ({ ...pre, e1: "", errval: false }))
        user.lname === "" ? seterr((pre) => ({ ...pre, e2: "enter your lname", errval: true })) : seterr((pre) => ({ ...pre, e2: "", errval: false }))
        user.email === "" ? seterr((pre) => ({ ...pre, e3: "enter your email", errval: true })) : seterr((pre) => ({ ...pre, e3: "", errval: false }))

    }
    useEffect(() => {


        // validation()

    }, [])
    function handlechange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
        validation()
    }

    function postdata(e) {
        e.preventDefault()
        validation()
        if (err.errval === false) {
            const obj = {
                key: select.length !== 0 ? select[select.length - 1].key + 1 : 0,
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                gender: user.gender,
                city: user.city,
            }

            if (obj.fname !== "" && obj.lname !== "" && obj.email !== "") {
                dispatch(AddData(obj))
                setUser({

                    fname: "",
                    lname: "",
                    email: "",
                    city: "",
                    gender: ""
                })

                document.getElementById("male").checked = false
                document.getElementById("female").checked = false
            }
            // console.log(obj);
        }
    }

function view() {
    navigator("/table")
}

    return (

        <>
            <center>
                <form>
                    <div>

                        <TextField id="fname" label="fname" variant="standard" name="fname" onChange={handlechange} value={user.fname} /><span id="fn">{err.e1}  </span>
                        <TextField id="lname" label="lname" variant="standard" name="lname" onChange={handlechange} value={user.lname} /><span id="ln">{err.e2}</span>
                        <br /><br />
                        <TextField id="email" type="emali" label="email" name="email" variant="standard" placeholder="email" onChange={handlechange} value={user.email} /><span id="em">{err.e3}  </span>
                        <br /><br /><br />
                        <div style={{ width: "180px" }}>
                            <select className="form-select" aria-label="Default select example" name="city" onChange={handlechange} value={user.city}>
                                <option >city selected</option>
                                <option value="surat">surat</option>
                                <option value="vadodara">vadodara</option>
                                <option value="rajkot">rajkot</option>
                            </select>
                        </div>
                        <br /><br />

                        <div style={{ width: "100px" }} onChange={handlechange}>
                            <div className="form-check" >
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female" />
                                <label class="form-check-label" >
                                    Female
                                </label>
                            </div>
                        </div>
                        <br /><br />
                   


                        <button type="button" class="btn btn-outline-primary" onClick={(e) => postdata(e)}>submit</button>




                    </div>
                </form>
                <br/>
                <br/>
                <Link type="button" class="btn btn-warning" to="/table" onClick={view}>view table</Link>
                {/* <Table /> */}

            </center>
        </>


    )










}



export default Form