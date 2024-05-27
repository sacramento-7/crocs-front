import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import ReviewInSingleProduct from "../reviewInSingleProduct/ReviewInSingleProduct";

const TabInSingleProduct = () => {
    return (
        <Tabs defaultValue="description">
            <TabsList className="border-b" style={{direction: 'rtl'}}>
                <TabsTrigger value="description">توضیحات</TabsTrigger>
                <TabsTrigger value="details">جزییات</TabsTrigger>
                <TabsTrigger value="reviews">نظرات</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
                <div className="grid gap-4 text-sm leading-loose">
                    <p>
                    صندل‌های برند کراکس با طراحی منحصربه‌فرد و استفاده از مواد اولیه‌ی با کیفیت، راحتی و دوام بی‌نظیری را ارائه می‌دهند. این صندل‌ها سبک، ضد آب و مناسب برای استفاده‌ی روزمره و تفریحات تابستانی هستند، و با بهره‌گیری از فناوری‌های پیشرفته، تجربه‌ای لذت‌بخش از راحتی و سلامت پاها را تضمین می‌کنند.
                    </p>
                </div>
            </TabsContent>
            <TabsContent value="details">
                <div className="grid gap-4 text-sm leading-loose">
                    <p>جنس: پلاستیک فشرده</p>
                    <p>روش نگهداری: با پارچه نمدار تمیز شود</p>
                    <p>استایل: روزمره</p>
                    <p>جنسیت: یونیسکس</p>
                </div>
            </TabsContent>
            <TabsContent value="reviews">
                <ReviewInSingleProduct />
            </TabsContent>
        </Tabs>
    )
}

export default TabInSingleProduct