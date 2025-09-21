import React from "react";

import './ProductsPage.css';

export default class ProductsPage extends React.Component {
    render() {
        return <div className="page-container">
            <nav id="navbar" title="Toggle menu width">
                <div className="menu-item" tabIndex="0" data-content="products">
                <span className="menu-icon">📦</span>
                <span className="menu-text">Products</span>
                </div>
                <div className="menu-item" tabIndex="0" data-content="prices">
                <span className="menu-icon">💰</span>
                <span className="menu-text">Prices</span>
                </div>
                <div className="menu-item" tabIndex="0" data-content="about">
                <span className="menu-icon">ℹ️</span>
                <span className="menu-text">About</span>
                </div>
            </nav>

            <main id="content-area">
                <h1>My mueslis</h1>
                <table>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>classNameic Muesli</td><td>$4.65</td></tr>
                    <tr><td>2</td><td>Berry Lovers</td><td>$3.02</td></tr>
                    <tr><td>3</td><td>Nuts & Honey</td><td>$4.12</td></tr>
                    <tr><td>4</td><td>Tropical Mix</td><td>$4.93</td></tr>
                    <tr><td>5</td><td>Choco Delight</td><td>$2.73</td></tr>
                    <tr><td>6</td><td>Organic Oats</td><td>$3.55</td></tr>
                    <tr><td>7</td><td>Apple Cinnamon</td><td>$5.42</td></tr>
                    <tr><td>8</td><td>Fruit & Nut</td><td>$5.60</td></tr>
                </tbody>
                </table>
            </main>

        </div>
    }
}