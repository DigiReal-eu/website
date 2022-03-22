import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: process.env.REACT_APP_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    apiVersion: new Date().toISOString().slice(0, 10),
    token: '',
    useCdn: true,
});

export default client;
