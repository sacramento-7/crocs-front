import axios from 'axios';
import { NextResponse } from 'next/server';
import cookie from 'cookie';

export const POST = async (req, res) => {
    //const { name, hex_code } = req.body;
    const { name, hex_code } = await req.json();
    //console.log("body in color api is: ", body);
    console.log(`Color Name: ${name}, Hex Code: ${hex_code}`);
    const cookieHeader = req.headers.get('cookie');
    const cookies = cookie.parse(cookieHeader || '');
    const tokenFromCookie = cookies['Token'];

    try {
        const response = await axios.post('http://188.213.197.242/dashboard/colors/', { name: name, hex_code: hex_code },
            {
                headers: {
                    "Authorization": `Token ${tokenFromCookie}`
                },
                withCredentials: true
            }
        )
            .then((res) => {
                console.log("res data post color is: ", res.data);
            });

            return NextResponse.json({status: 'ok'});
    } catch (error) {
        console.error('Error connecting to Python API:', error);
        return NextResponse.json({ error: error });
    }
}