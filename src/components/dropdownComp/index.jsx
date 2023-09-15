import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// react bootstarp component
import Dropdown from 'react-bootstrap/Dropdown';

// style
import './style.css';

// react icons
import { RxAvatar } from 'react-icons/rx';
import { LuLogOut } from 'react-icons/lu';

function DropdownComp({ handlerFunction }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOnExited = () => {
        setIsDropdownOpen(false);
    };

    return (
        <Dropdown show={isDropdownOpen} onToggle={toggleDropdown} onHide={handleOnExited}>
            <Dropdown.Toggle
                style={{
                    background: 'linear-gradient(316deg, #232323 0%, #232323 48.44%, #303030 66.88%, #747474 97.73%, rgba(204, 204, 204, 0.00) 100%)',
                    border: 'none'
                }}
                id="dropdown-basic">
                <RxAvatar />
            </Dropdown.Toggle>

            <Dropdown.Menu style={{
                background: 'linear-gradient(316deg, #232323 0%, #232323 48.44%, #303030 66.88%, #747474 97.73%, rgba(204, 204, 204, 0.00) 100%)',
            }}>
                <div>
                    <Link to='/dashboard' style={{ textDecoration: 'none' }} >
                        <Dropdown.Item className='dropdown-link' >
                            Dashboard
                        </Dropdown.Item>
                    </Link>
                    <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                        <Dropdown.Item className='dropdown-link'>
                            Account Setting
                        </Dropdown.Item>
                    </Link>
                    <div>
                        <hr color='white' />
                    </div>
                    <Link onClick={handlerFunction} style={{ textDecoration: 'none' }} >
                        <Dropdown.Item className='dropdown-link'>
                            <LuLogOut className='p-auto' /> Log Out
                        </Dropdown.Item>
                    </Link>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropdownComp;
