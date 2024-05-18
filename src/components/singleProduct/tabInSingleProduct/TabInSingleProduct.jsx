import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import ReviewInSingleProduct from "../reviewInSingleProduct/ReviewInSingleProduct";

const TabInSingleProduct = () => {
    return (
        <Tabs defaultValue="description">
            <TabsList className="border-b">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
                <div className="grid gap-4 text-sm leading-loose">
                    <p>
                        The Acme Circles T-Shirt is a stylish and comfortable addition to your wardrobe. Crafted from a blend of
                        60% combed ringspun cotton and 40% polyester, this tee offers a soft and breathable feel.
                    </p>
                    <p>
                        The unique circular pattern adds a touch of modern flair, making this t-shirt a versatile piece that can
                        be dressed up or down. Whether you're running errands or enjoying a casual weekend, the Acme Circles
                        T-Shirt is the perfect choice.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="details">
                <div className="grid gap-4 text-sm leading-loose">
                    <p>Material: 60% combed ringspun cotton, 40% polyester</p>
                    <p>Care Instructions: Machine wash cold, tumble dry low</p>
                    <p>Fit: Regular</p>
                    <p>Neck: Crew</p>
                </div>
            </TabsContent>
            <TabsContent value="reviews">
                <ReviewInSingleProduct />
            </TabsContent>
        </Tabs>
    )
}

export default TabInSingleProduct