import { createClient } from 'urql';

const url = process.env.REACT_APP_API_URI as string;

export const client = createClient({ url });
