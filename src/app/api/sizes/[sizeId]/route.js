import { NextResponse } from 'next/server';
import axios from 'axios';
import cookie from 'cookie';

export const DELETE = async (req, res) => {
    const {pathname} = new URL(req.url);
    const colorId = pathname.split('/')[3];

    const cookieHeader = req.headers.get('cookie');
    const cookies = cookie.parse(cookieHeader || '');
    const tokenFromCookie = cookies['Token'];

    try {
        const response = await axios.delete(`http://188.213.197.242/dashboard/sizes/${colorId}`, {
            headers: {
                "Authorization": `Token ${tokenFromCookie}`
            },
            withCredentials: true
        });
        const res1 = response.status;
        return NextResponse.json({ status: 'ok', resStatus: res1 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error });
    }
}