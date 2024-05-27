import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const ContactForm = () => {
    return (
        <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name" className='font-bold'>نام و نام خانوادگی</Label>
                    <Input id="name" placeholder="نام خود را وارد کنید" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className='font-bold'>ایمیل</Label>
                    <Input id="email" placeholder="ایمیل خود را وارد کنید" type="email" />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" className='font-bold'>پیام</Label>
                <Textarea id="message" placeholder="پیام خود را بنویسید" />
            </div>
            <Button className="w-full sm:w-auto" type="submit">
                ارسال
            </Button>
        </form>
    )
}

export default ContactForm