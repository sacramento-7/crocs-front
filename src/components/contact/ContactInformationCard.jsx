import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactInformationCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>اطلاعات تماس</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                        <div className="font-medium">فروشگاه کراکس کیش</div>
                        <p className="text-gray-500 dark:text-gray-400">ایران / کیش / خیابان توحید</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <FaPhoneAlt className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                        <div className="font-medium">تلفن</div>
                        <p className="text-gray-500 dark:text-gray-400" style={{direction: "ltr"}}>+98 936 123-4455</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MdMail className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                        <div className="font-medium">ایمیل</div>
                        <p className="text-gray-500 dark:text-gray-400">support@crocs-kish.com</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactInformationCard