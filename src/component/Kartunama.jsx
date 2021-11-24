import React from 'react';
import './Kartunama.css';
import foto from './img/IMG-20180730-WA0005.jpg';
import ttd from './img/ttd1.png'

const Kartunama = (props) => {
    return (
        <div className="kartu">
            <h2>KARTU ANGGOTA PETUALANGAN</h2>
            <img src={foto} alt="fotoku" />
            <div>
                <table className = "tabel">
                    <tr>
                        <td>Nama</td>
                        <td>{props.nama}</td>
                    </tr>
                    <tr>
                        <td>TTL</td>
                        <td>{props.lahir}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{props.status}</td>
                    </tr>
                    <tr>
                        <td>Hobi</td>
                        <td>{props.hobi}</td>
                    </tr>
                </table>
            </div>
            <div className="ttd">
                <img src={ttd} alt="ttd" />
            </div>
        </div>
    )
}

export default Kartunama;