import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{ backgroundColor: 'inherit' }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
                        aria-current={index === items.length - 1 ? 'page' : null}
                    >
                        {index === items.length - 1 ? (
                            <span style={{ color: 'rgba(225, 255, 0, 1)' }}>{item.text}</span>
                        ) : (
                            <>
                                <Link to={item.url} style={{ color: '#EFEFEF' }}>{item.text}</Link>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
