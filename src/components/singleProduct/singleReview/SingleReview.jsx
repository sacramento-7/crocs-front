import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import p from '@/assets/images/placeholder-user.jpg';

const SingleReview = () => {
    return (
        <div className="flex gap-4">
            <Avatar className="w-10 h-10 border">
                <AvatarImage alt="@shadcn" src={p} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                        <h3 className="font-semibold">Sarah Johnson</h3>
                        <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                    </div>
                </div>
                <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                    <p>
                        I've been wearing the Acme Circles T-Shirt for a few weeks now, and it's quickly become one of my
                        favorite casual tops. The fabric is soft and breathable, and the unique circular pattern adds a
                        fun, modern touch. I've received several compliments on it already.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleReview