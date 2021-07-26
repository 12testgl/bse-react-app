import React, { useEffect, useState } from 'react'

const Gainers = () => {

    const [dataa, setData] = useState([])
    const [show, setShow] = useState(false)
    const getdata = async () => {
        try {

            const res = await fetch('/gainers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await res.json();

            if (res.status === 201) {
                setData(data['data'])
                setShow(true)
            }
        } catch (error) {
            window.alert('something went wrong')
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>Top Gainers - BSE</h1>
            {show ?
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Company Name</th>
                            <th scope="col">High</th>
                            <th scope="col">Low</th>
                            <th scope="col">Gain(%)</th>
                            <th scope="col">Change</th>
                            <th scope="col">Close</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataa.map(p => {
                            return (
                                <tr key={p.company}>
                                    <th scope="row">{p.company}</th>
                                    <td>{p.high}</td>
                                    <td>{p.low}</td>
                                    {/* {p.gain_in_per >= 0 ?
                                        <td style={{ 'color': 'green' }}><b>{p.gain_in_per}</b></td>
                                        :
                                        <td style={{ 'color': 'red' }}><b>{p.gain_in_per}</b></td>

                                    } */}
                                    <td style={{ 'color': 'green' }}><b>{p.gain_in_per}</b></td>

                                    <td>{p.change}</td>
                                    <td>{p.close_in_per}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                :
                <div style={{ marginTop: '25px' }}>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Gainers
