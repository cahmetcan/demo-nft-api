interface NFTModel {
    id: string;
    name: string;
    description: string;
    image: string;
    external_url: string;
    attributes: NFTAttribute[];
    owner: string;
    price: string;
    status: string;
}

// Path: types/nftattribute.ts
interface NFTAttribute {
    trait_type: string;
    value: string;
}

export default NFTModel;