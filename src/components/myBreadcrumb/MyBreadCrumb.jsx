import { TbSlash } from "react-icons/tb";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const MyBreadCrumb = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">خانه</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <TbSlash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">فروشگاه</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <TbSlash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage>کراکس</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default MyBreadCrumb