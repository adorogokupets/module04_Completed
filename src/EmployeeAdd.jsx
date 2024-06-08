import React from 'react'

export default class EmployeeAdd extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const form = document.forms.employeeAdd
        const employee = {
            name: form.name.value,
            extension: form.ext.value,
            email: form.email.value,
            title: form.title.value,
        };
        this.props.createEmployee(employee);
        form.name.value = ''
        form.ext.value = ''
        form.email.value = ''
        form.title.value = ''
    }

    render() {
        return (
            <form name="employeeAdd" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter name" /><br/>

                <label htmlFor="ext">Extension:</label>
                <input type="text" name="ext" id="ext" maxLength={4} placeholder="Enter extension" /><br/>

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" placeholder="Enter email" /><br/>

                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter title" /><br/>
                <button>Add</button>
            </form>
        )
    }
}