import React from 'react';
import {Table} from 'reactstrap';


export default function (props) {
    let dates = props.dates;
    let tableName = props.name;
    let colNames = props.colNames;

    return (
        <Table hover bordered>
            <thead>
            <tr>
            <th>Title</th>
            <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {dates.map((date) => {
                // debugger;
                return (
                    <tr key={date.date_id}>
                        <td>{date.title}</td>
                        <td>{date.description}</td>
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