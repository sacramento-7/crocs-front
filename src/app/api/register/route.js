import axios from 'axios';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const body = await request.json();
  console.log('body in rout js:', body);
  let resp = null;

  try {
    const response = await axios.post('http://188.213.197.242/accounts/register/', body,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      console.log('res back in api: ', res.data);
      resp = res.data;
    });

    return NextResponse.json({status: 'ok', resp});
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error connecting to Python API:', error);
    return NextResponse.json({error: error});
  }
}