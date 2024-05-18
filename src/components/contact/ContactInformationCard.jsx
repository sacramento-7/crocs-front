import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactInformationCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                        <div className="font-medium">Crocs Kish Inc</div>
                        <p className="text-gray-500 dark:text-gray-400">123 Main St, Kish Iran</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <FaPhoneAlt className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                        <div className="font-medium">Phone</div>
                        <p className="text-gray-500 dark:text-gray-400">+98 (936) 123-4455</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <MdMail className="mt-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="space-y-1">
                        <div className="font-medium">Email</div>
                        <p className="text-gray-500 dark:text-gray-400">support@crocs-kish.com</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactInformationCard