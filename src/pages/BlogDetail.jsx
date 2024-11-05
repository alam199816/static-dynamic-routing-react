import React from 'react';
import Header from '../common/Header';
import { blogsData } from '../Data/blogsData';
import { useLocation } from 'react-router-dom';

export default function BlogDetail() {
    const location = useLocation();
    const currentId = parseInt(location.pathname.split('/')[2], 10);
    const currentData = blogsData.find((v) => v.id === currentId);

    if (!currentData) {
        return <div>Blog post not found</div>;
    }

    // Define inline style objects
    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
    };

    const headerStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        borderRadius: '8px',
        marginBottom: '20px',
    };

    const titleStyle = {
        fontSize: '2em',
        color: '#333',
        textAlign: 'center',
        marginBottom: '10px',
    };

    const subTextStyle = {
        fontSize: '1em',
        color: '#888',
        textAlign: 'center',
    };

    const bodyStyle = {
       
        marginTop: '20px',
        color: '#555',
        backgroundColor: '#fff',
       
    };

    return (
        <div style={containerStyle}>
            <Header style={headerStyle} />
            <h1 style={titleStyle}>{currentData.title}</h1>
            <h2 style={subTextStyle}>Post ID: {currentData.id} | User ID: {currentData.userId}</h2>
            <span style={bodyStyle}>{currentData.body}</span>
        </div>
    );
}
