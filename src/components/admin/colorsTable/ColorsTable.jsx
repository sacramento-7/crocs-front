'use client';

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { FaPen, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ColorsTable = () => {
    const token = Cookies.get('Token');
    const [colors, setColors] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch(`http://localhost:3000/api/colors`)
            .then(response => response.json())
            .then(data => {
                setColors(data.colors)
            })
            .catch(error => console.error('An error occurred:', error));
    }, []);

    const deleteColor = async (colorId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/colors/${colorId}`, {
                method: 'DELETE',
            })

            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }


    //const colors = [];

    return (
        <div>
            <Table>
                <TableCaption>لیست رنگ ها</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-right">نام</TableHead>
                        <TableHead className="text-right">کد رنگ</TableHead>
                        <TableHead className="text-right">عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {colors && colors.map(color => (
                        <TableRow key={color.id}>
                            <TableCell className="font-medium">{color.name}</TableCell>
                            <TableCell>{color.hex_code}</TableCell>
                            <TableCell className="flex">
                                <Button className="" variant="ghost">
                                    <FaPen className="" />
                                </Button>
                                <AlertDialog className='flex'>
                                    <AlertDialogTrigger asChild>
                                        <Button className="" variant="ghost">
                                            <FaTrash className="" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent style={{ direction: 'rtl' }}>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>آیا از حذف این رنگ مطمئن هستید؟</AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter className=''>
                                            <AlertDialogCancel className='ml-2'>خیر</AlertDialogCancel>
                                            <AlertDialogAction type='submit' onClick={() => deleteColor(color.id)}>بله</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default ColorsTable


// const getColors = async () => {
//     const cookieStore = cookies();
//     const token = cookieStore.get('Token').value;
//     let colors = [];
//     //const token = Cookies.get("Token");
//     //console.log("get token in api color front: ", token);
//     try {
//         //console.log("token in getColor method: ", `Token ${token}`);
//         const colorsApi = await axios.get('http://localhost:3000/api/colors',
//             //{
//         //const colorsApi = await axios.get("http://188.213.197.242/dashboard/colors/", {
//         //     headers: {
//         //         "Authorization": `Token ${token}`
//         //     }
//         // }
//         )
//             .then((res) => {
//                 console.log("data color in front: ", res.data);
//                 colors = res.data.results;
//                 return res.data;
//             })

//         return colors;
//     } catch (error) {
//         console.log(error);
//     }
// }




// const deleteColor = async (data) => {
//     "use server";
//     const cookieStore = cookies();
//     const token = cookieStore.get('Token').value;
//     const colId = data.get('colorId');
//     console.log("color id is: ", colId);
//     try {
//         const response = await axios.delete(`http://188.213.197.242/dashboard/colors/${colId}`, {
//             headers: {
//                 "Authorization": `Token ${token}`
//             }
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }






