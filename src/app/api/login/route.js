
import axios from 'axios';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  return NextResponse({status: 'form submitted'});
}

export const POST = async (request) => {
  const body = await request.json();
  console.log('body in rout js:', body);
  let key = '';

  try {
    const response = await axios.post('http://188.213.197.242/dj-rest-auth/login/', body,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      console.log('res back in api: ', res.data.key);
      key = res.data.key;
    });

    return NextResponse.json({status: 'ok', key: key});
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error connecting to Python API:', error);
    return NextResponse.json({error: error});
  }
}

