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

const SizesTable = () => {
    const token = Cookies.get('Token');
    const [sizes, setSizes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetch(`http://localhost:3000/api/sizes`)
            .then(response => response.json())
            .then(data => {
                setSizes(data.sizes)
            })
            .catch(error => console.error('An error occurred:', error));
    }, []);

    const deleteSize = async (sizeId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/sizes/${sizeId}`, {
                method: 'DELETE',
            })

            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <Table>
                <TableCaption>لیست سایزها</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-right">نام</TableHead>
                        <TableHead className="text-right">عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sizes && sizes.map(size => (
                        <TableRow key={size.id}>
                            <TableCell className="font-medium">{size.name}</TableCell>
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
                                            <AlertDialogTitle>آیا از حذف این سایز مطمئن هستید؟</AlertDialogTitle>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter className=''>
                                            <AlertDialogCancel className='ml-2'>خیر</AlertDialogCancel>
                                            <AlertDialogAction type='submit' onClick={() => deleteSize(size.id)}>بله</AlertDialogAction>
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

export default SizesTable