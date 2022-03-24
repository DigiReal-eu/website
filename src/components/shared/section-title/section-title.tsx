import React from 'react';
import './section-title.scss';
import { TitleInterface } from '../../../Shared/interfaces/titleInterface';

function SectionTitle({ title }: TitleInterface) {
    return (
        <div className="section">
            <div className="circle left"> </div>
            <h1 className="title">
                <span>
                    { title }
                </span>
            </h1>
            <div className="circle right"> </div>
        </div>
    );
}
export default SectionTitle;
