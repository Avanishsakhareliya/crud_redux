import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { DeleteData } from "../Action/index"
import { useNavigate } from "react-router-dom"
import { Link } from '@material-ui/core';
import { Update } from './Update';


function Table(props) {
    
    console.log("props", props);

    const navigator = useNavigate()

    const { list } = props;
    React.useEffect(() => { }, [list])


    function deletedata(id) {
        console.log("inde", id);
        console.log("list", list[id]);
        list.splice(id, 1);
        console.log("deleted", list)

        props.DeleteData(list)
    }

    function updatedata(id) {

        const data = list[id]
        console.log("dtaa", data);
        navigator(`/update/${id}`)
        // navigator("/update")
        // console.log("prop",props);


    }

    function back() {
        navigator("/")
    }
    return (

        <>
            <center>
                <table class="table" style={{ width: "900px" }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Gender</th>


                        </tr>
                    </thead>

                    <tbody>

                        {list && list.map((val, id) => {

                            console.log("val", val)
                            return <tr>
                                <th scope="row">{id}</th>
                                <td>{val.fname}</td>
                                <td>{val.lname}</td>
                                <td>{val.email}</td>
                                <td>{val.city}</td>
                                <td>{val.gender}</td>
                                <td>
                                    <Link type="button" class="btn btn-success" to="/update" onClick={() => updatedata(id)}>update</Link>
                                    <span>  </span>
                                    <button type="button" class="btn btn-danger" onClick={() => deletedata(id)}>delete</button><span> </span>
                                    {/* <Link type="button" class="btn btn-warning">view</Link> */}
                                </td>
                            </tr>

                        })

                        }


                    </tbody>


                </table>
            </center>

            <Link type="button" class="btn btn-dark" to="/" onClick={back}>Back to home</Link>



        </>
    )
}
const mapStateToProps = (state) => {
    return {
        list: state.Reducer
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        DeleteData: (data) => dispatch(DeleteData(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Table);

