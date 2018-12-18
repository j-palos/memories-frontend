import React from 'react';
import {Button, Table} from 'reactstrap';
import {Link} from "react-router-dom";


export default function (props) {
    let dates = props.dates;
    const handleDelete = props.handleDeleteClick;
    debugger;
    return (
        <Table hover bordered>
            <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
                <th>Edit/Delete</th>
            </tr>
            </thead>
            <tbody>
            {dates.map((date) => {
                return (
                    <tr key={date.date_id}>
                        <td>{date.title}</td>
                        <td>{date.description}</td>
                        <Button value={date.date_id} color='primary' tag={Link}
                                to={`/edit/${date.date_id}`}> Edit </Button>
                        <Button value={date.date_id} color={'danger'} onClick={(e) => handleDelete(e)}>Delete</Button>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}



// "completed": false,
//     "date": null,
//     "date_id": 1,
//     "description": "ex. des",
//     "images": [
//     {
//         "date_id": 1,
//         "description": null,
//         "image_id": 2,
//         "link": "example"
//     },
//     {
//         "date_id": 1,
//         "description": null,
//         "image_id": 5,
//         "link": "example1"
//     }
// ],
//     "title": "example"