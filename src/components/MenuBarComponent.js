import React, {Component} from 'react';
import {Menu} from "semantic-ui-react";
import './MenuBarComponent.css'

class MenuBarComponent extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' >
                    <Menu.Menu>
                        <div className='ui right aligned category search item'>
                            <div className='ui transparent icon input'>
                                <input className='prompt' type='text' placeholder='Search animals...'/>
                                <i className='search link icon'/>
                            </div>
                            <div className='results'/>
                        </div>
                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default MenuBarComponent