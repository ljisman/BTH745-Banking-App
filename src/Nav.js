import React from 'react';
import './Nav.css'

class Nav extends React.Component {

    render() {
        return (
            <div>
                <div class="navbar">
                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home" class="active">Home</a>
                    </div>
                  
                    <div class="tab-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 60 60">
                        <g fill="none" fill-rule="evenodd" stroke="#E40046" transform="translate(8 1)">
                            <rect width="40" height="53" x="2.5" y="2.5" stroke-width="5" rx="7"/>
                            <path stroke-linecap="round" stroke-width="3" d="M14 18.5h19M14 26.5h19M14 34.5h19"/>
                        </g>
                        </svg>
                        <a href="#home">Settings</a>
                    </div>
                </div>

            </div>

        )

    }

}

export default Nav;