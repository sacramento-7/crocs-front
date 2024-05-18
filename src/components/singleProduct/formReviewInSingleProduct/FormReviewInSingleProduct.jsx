import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const FormReviewInSingleProduct = () => {
    return (
        <div className="grid gap-4">
            <h2 className="font-bold text-lg">Leave a Review</h2>
            <form className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your email" type="email" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="review">Review</Label>
                    <Textarea id="review" placeholder="Write your review..." />
                </div>
                <Button size="lg" type="submit">
                    Submit Review
                </Button>
            </form>
        </div>
    )
}

export default FormReviewInSingleProduct