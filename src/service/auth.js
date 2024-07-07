import { getItemKey, getItemSign, setItemSign } from '../helpers/persistenceStorage';
import axios from './api'; // Ensure './api' points to your axios configuration
import CryptoJS from 'crypto-js';

let collectionVariables = {
    key: null,
    secret: null,
    sign: null
};

const AuthService = {
    async userRegister({ name, email, secret, nameKey }) {
        const requestBody = {
            name: name,
            email: email,
            key: nameKey,
            secret: secret
        };

        const { data } = await axios.post('/signup', requestBody);

        // Store key and secret
        collectionVariables.key = nameKey;
        collectionVariables.secret = secret;


        return data; 
    },


    generateSign(method, url, body) {
        const secret = collectionVariables.secret ?? getItemSign("sign");
        let signstr = null
        if (method === 'POST') {
            signstr = method + url + JSON.stringify(body) + secret;
        } else {
            signstr = method + url + JSON.stringify({ id: 144 }) + secret;
        }
        const sign = CryptoJS.MD5(signstr).toString();
        collectionVariables.sign = sign;
        return sign;
    },

    async makeRequest(method, url, body) {

        // Generate sign for requests other than /signup
        if (url !== '/signup') {
            this.generateSign(method, url, body);
        }

        const headers = {
            'Key': collectionVariables.key ?? getItemKey('key'),
            'Sign': collectionVariables.sign
        };
        console.log(headers, "headers");
        const config = {
            method: method,
            url: url,
            headers: headers,
            data: method === 'DELETE' ? undefined : body // Only include body if not DELETE

        };
        console.log(config, "config");
        try {
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};

export default AuthService;