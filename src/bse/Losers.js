import React, { useEffect, useState } from 'react'

const Losers = () => {

    const [dataa, setData] = useState([])
    const [show, setShow] = useState(false)
    const getdata = async () => {
        try {

            const res = await fetch('https://bse-flaskapi.herokuapp.com/losers', {
                method: 'GET',
                headers: {
                    "Content-type": "application/json"
                }
            })

            const data = await res.json();

            if (res.status === 201) {
                setData(data['data'])
                console.log(data['data']);
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
            <h1>Top Losers - BSE</h1>
            {show ?
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Company Name</th>
                            <th scope="col">High</th>
                            <th scope="col">Low</th>
                            <th scope="col">Loss(%)</th>
                            <th scope="col">Change</th>
                            <th scope="col">Close</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataa.map(p => {
                            return (
                                <tr key={p.company}>
                                    <th scope="row">{p.company}</th>
                                    <td>{p.High}</td>
                                    <td>{p.Low}</td>
                                    {/* {p.gain_in_per >= 0 ?
                                        <td style={{ 'color': 'green' }}><b>{p.gain_in_per}</b></td>
                                        :
                                        <td style={{ 'color': 'red' }}><b>{p.gain_in_per}</b></td>

                                    } */}
                                    <td style={{ 'color': 'red' }}><b>{p.Loss_in_per}</b></td>

                                    <td>{p.Change}</td>
                                    <td>{p.close_price}</td>
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

export default Losers
