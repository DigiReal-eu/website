import React from 'react';
import './section-title.scss';

function SectionTitle({ children }: { children: React.ReactChildren }) {
    return (
        <div className="section">
            <div className="circle left"> </div>
            <div className="title_container">
                <h1 className="title">{children}</h1>
            </div>
            <div className="circle right"> </div>
        </div>
    );
}
export default SectionTitle;
