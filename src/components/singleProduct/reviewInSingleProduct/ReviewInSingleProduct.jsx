import { Separator } from "@/components/ui/separator";
import FormReviewInSingleProduct from '../formReviewInSingleProduct/FormReviewInSingleProduct';
import SingleReview from '../singleReview/SingleReview';

const ReviewInSingleProduct = () => {
    return (
        <div className="grid gap-6">
            <SingleReview />
            <Separator />
            <SingleReview />
            <FormReviewInSingleProduct />
        </div>
    )
}

export default ReviewInSingleProduct