interface Asset {
    _ref: string;
    _type: string;
}

export interface PartnerImage {
    _type: string;
    asset: Asset;
}

export interface partnerInterface {
    _id: string,
    partnerName: string;
    partnerImage: PartnerImage;
    partnerUrl: string;
}
