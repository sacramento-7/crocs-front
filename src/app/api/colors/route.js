import axios from 'axios';
import { NextResponse } from 'next/server';
import cookie from 'cookie';

export const GET = async (req, res) => {
    const cookieHeader = req.headers.get('cookie');
    const cookies = cookie.parse(cookieHeader || '');
    const tokenFromCookie = cookies['Token'];

    let colors = [];

    try {
        const response = await axios.get("http://188.213.197.242/dashboard/colors/", {
            headers: {
                "Authorization": `Token ${tokenFromCookie}`
            },
            withCredentials: true
        })

        colors = response.data.results;
        return NextResponse.json({status: 'ok', colors: colors});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error});
    }
}
