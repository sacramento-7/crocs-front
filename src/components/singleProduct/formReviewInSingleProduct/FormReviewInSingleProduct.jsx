import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FormReviewInSingleProduct = () => {
    return (
        <div className="grid gap-4">
            <h2 className="font-bold text-lg">درج نظر</h2>
            <form className="grid gap-4" style={{direction: "rtl"}}>
                <div className="grid gap-2">
                    <Label htmlFor="name">نام</Label>
                    <Input id="name" placeholder="لطفا نام خود را بنویسید" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" placeholder="لطفا ایمیل خود را بنویسید" type="email" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="review">نظر</Label>
                    <Textarea id="review" placeholder="لطفا نظر خود را بنویسید ..." />
                </div>
                <Button size="lg" type="submit">
                    ثبت نظر
                </Button>
            </form>
        </div>
    )
}

export default FormReviewInSingleProduct