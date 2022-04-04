import React from 'react';
import './section-title.scss';

function SectionTitle({ children }: { children: React.ReactChildren }) {
    return (
        <div className="section">
            <div className="circle left"> </div>
            <h1 className="title">
                <span>{children}</span>
            </h1>
            <div className="circle right"> </div>
        </div>
    );
}
export default SectionTitle;
