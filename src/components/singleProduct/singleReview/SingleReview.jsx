import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import p from '@/assets/images/placeholder-user.jpg';

const SingleReview = () => {
    return (
        <div className="flex gap-4 my-3" style={{direction: 'rtl'}}>
            <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src={p} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                        <h3 className="font-semibold">علی اکبری</h3>
                        <time className="text-sm text-gray-500 dark:text-gray-400">2 روز پیش</time>
                    </div>
                </div>
                <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                    <p>
                        راضی از ارسال سریع و جنس با کیفیت این یک متن تست جهت وبسایت است.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleReview