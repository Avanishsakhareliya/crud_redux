import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux"
// import { AddData } from "../Action/index"
// import Table from '../componet/Table';
import { useParams } from "react-router-dom"
// import Form from "./Form"
import { useNavigate } from "react-router-dom"

export default function Update() {

    const params = useParams()
    console.log("params", params)

    const select = useSelector(state => (state.Reducer))
    console.log("selected update", select[params.id]);
    // const dispatch = useDispatch()
    const navigator = useNavigate()
    const [user, setUser] = useState({
        fname: select[params.id].fname,
        lname: select[params.id].lname,
        email: select[params.id].email,
        gender:select[params.id].gender,
        city: select[params.id].city,

    })

    // if (select[params.id].gender === "male") {

    //     document.getElementById("male").checked = true
    // } else {
    //     document.getElementById("female").checked = true
    // }

    function handlechange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    function postdata(e) {
        e.preventDefault()
        const obj = {
            key: select.length !== 0 ? select[select.length - 1].key + 1 : 0,
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            gender: user.gender,
            city: user.city,
        }
        select[params.id] = obj

        if (obj.fname !== "" && obj.lname !== "" && obj.email !== "") {
            // dispatch(AddData(obj))
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
        navigator("/")

        // console.log(obj);

    }
    return (
        <>
            <center>
                <form>
                    <div>

                        <TextField id="fname" label="fname" variant="standard" name="fname" onChange={handlechange} value={user.fname} /><span>  </span>
                        <TextField id="lname" label="lname" variant="standard" name="lname" onChange={handlechange} value={user.lname} /><span></span>
                        <br /><br />
                        <TextField id="email" type="emali" label="email" name="email" variant="standard" placeholder="email" onChange={handlechange} value={user.email} /><span>  </span>
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
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={user.gender=="male"?true:false}/>
                                <label className="form-check-label">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female" checked={user.gender=="female"?true:false}/>
                                <label class="form-check-label" >
                                    Female
                                </label>
                            </div>
                        </div>
                        <br /><br />

                        <Link type="button" class="btn btn-outline-primary" to="/" onClick={(e) => postdata(e)}>submit</Link>

                    </div>
                </form>

                {/* <Table /> */}

            </center>



        </>

    )
}



