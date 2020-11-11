import React, { useState } from 'react';
import { Chart } from 'react-charts';
import Table from 'react-bootstrap/Table'
import { BarChart } from 'react-easy-chart';



function Admin(props) {


    var { data = [] } = props.data;
    var  data2 = [];
    console.log(data)
    const getdata = data.map(item => (
        data2.push({ 'x': item.id, 'y': item.clicks })
    )
    );
    const renderData = data.map(item => (
        <tr>
            <td>{item.id}</td>
            <td>{item.url}</td>
            <td>{item.clicks}</td>
        </tr>
    ));
    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>url</th>
                        <th>clicks</th>
                    </tr>
                </thead>
                <tbody>{renderData}</tbody>

            </Table>
                <>{getdata}</>

            <BarChart
                axisLabels={{ x: 'url', y: 'clicks' }}
                axes
                data={data2}

            />
        </>
    )
}

export default Admin;