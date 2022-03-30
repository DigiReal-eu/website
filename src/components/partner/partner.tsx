import React from 'react';
import './partner.scss';
import imageUrlBuilder from '@sanity/image-url';
import { PartnerImage, partnerInterface } from '../../Shared/interfaces/partnerInterface';
import client from '../../config/sanityConfig';

function Partners({
    _id, partnerName, partnerImage, partnerUrl,
}: partnerInterface) {
    const builder = imageUrlBuilder(client);

    function urlFor(source: PartnerImage) {
        return builder.image(source);
    }
    const partnerWebsite = () => {
        window.open(partnerUrl);
    };

    return (
        <div key={_id} className="partner" onClick={partnerWebsite}>
            <img className="partnerImage" src={urlFor(partnerImage).height(80).url()} alt={partnerName} />
        </div>
    );
}

export default Partners;
