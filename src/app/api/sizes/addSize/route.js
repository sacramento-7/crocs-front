import axios from 'axios';
import { NextResponse } from 'next/server';
import cookie from 'cookie';

export const POST = async (req, res) => {
    //const { name, hex_code } = req.body;
    const { name } = await req.json();
    //console.log("body in color api is: ", body);
    console.log(`Size Name: ${name}`);
    const cookieHeader = req.headers.get('cookie');
    const cookies = cookie.parse(cookieHeader || '');
    const tokenFromCookie = cookies['Token'];

    try {
        const response = await axios.post('http://188.213.197.242/dashboard/sizes/', { name: name },
            {
                headers: {
                    "Authorization": `Token ${tokenFromCookie}`
                },
                withCredentials: true
            }
        )
            .then((res) => {
                console.log("res data post size is: ", res.data);
            });

            return NextResponse.json({status: 'ok'});
    } catch (error) {
        console.error('Error connecting to Python API:', error);
        return NextResponse.json({ error: error });
    }
}