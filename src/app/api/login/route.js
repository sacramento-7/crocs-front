
import axios from 'axios';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  return NextResponse({status: 'form submitted'});
}

export const POST = async (request) => {
  const body = await request.json();
  let key = '';
  let isAdmin = false;

  try {
    const response = await axios.post('http://188.213.197.242/accounts/login/', body,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then((res) => {
      key = res.data.key;
      isAdmin = res.data.is_admin;
    });

    return NextResponse.json({status: 'ok', key: key, isAdmin: isAdmin});
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error connecting to Python API:', error);
    return NextResponse.json({error: error});
  }
}

