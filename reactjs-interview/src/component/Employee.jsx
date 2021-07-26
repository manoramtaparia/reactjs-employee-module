import React, { Component } from 'react'

class Employee extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete = () => {
        window.confirm("Are you sure you want to delete this record?");
    }
    render() {
        const dummy = [
            {
                "firstName": "Tom",
                "lastName": "Jake",
                "DOB": "14/12/1998",
                "designation": "Engineer",
                "profileImage": "",
                "experience": 2
            },
            {
                "firstName": "A",
                "lastName": "Tome",
                "DOB": "14/12/1997",
                "designation": "Engineer2",
                "profileImage": "",
                "experience": 4
            },
        ];
        return (
            <table>
                {dummy.map((data, index) => {
                    return (
                        <tr className="table-row-border">
                            <tr>First Name: {data.firstName}</tr>
                            <tr>Last Name: {data.lastName}</tr>
                            <tr>DOB: {data.DOB}</tr>
                            <tr>Designation: {data.designation}</tr>
                            <tr>Profile Image: {data.profileImage}</tr>
                            <tr>Experience: {data.experience} yrs</tr>
                            <button>Add</button>
                            <button>Edit</button>
                            <button onClick={this.handleDelete}>Delete</button>                    
                        </tr>
                    )
                }
                )}
            </table>
        )
    }
}

export default Employee;