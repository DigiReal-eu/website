import React, { useEffect, useState } from 'react';
import './partners.scss';
import { t } from 'i18next';
import Footer from '../../components/layout/footer/footer';
import Header from '../../components/layout/header/header';
import client from '../../config/sanityConfig';
import { partnerInterface } from '../../Shared/interfaces/partnerInterface';
import Partner from '../../components/partner/partner';
import SectionTitle from '../../components/shared/section-title/section-title';

function Partners() {
    const [partners, setPartners] = useState<partnerInterface[] | undefined>();
    const query = '*[_type == "partner"] {_id, partnerName, partnerUrl, partnerImage}';

    useEffect(() => {
        client.fetch(query, {}).then((partner: partnerInterface[]) => {
            setPartners(partner);
        });
    }, []);

    return (
        <div className="partners">
            <Header />
            <div className="container">
                {/* <SectionTitle title={t('partners.our_partners')} /> */}

                <SectionTitle>{t('partners.our_partners')}</SectionTitle>

                <div className="partnerGrid">
                    {partners ? (
                        partners.map((partner: partnerInterface) => (
                            <Partner
                                key={partner._id}
                                _id={partner._id}
                                partnerName={partner.partnerName}
                                partnerImage={partner.partnerImage}
                                partnerUrl={partner.partnerUrl}
                            />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Partners;
