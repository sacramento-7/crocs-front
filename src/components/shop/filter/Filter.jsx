import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Filter = () => {
    return (
        <div className="flex flex-col gap-6">
            <Accordion collapsible type="single">
                <AccordionItem value="category">
                    <AccordionTrigger className="text-lg font-medium">دسته بندی</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-2 py-4">
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox id="men" />
                                مردانه{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox id="Women" />
                                زنانه{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                                <Checkbox id="kids" />
                                بچه گانه{"\n                            "}
                            </Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion collapsible type="single">
                <AccordionItem value="price">
                    <AccordionTrigger className="text-lg font-medium">محدوده قیمت</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium" htmlFor="price-min">
                                    قیمت از
                                </Label>
                                <Input id="price-min" placeholder="0" type="number" />
                            </div>
                            <div className="grid gap-2">
                                <Label className="text-sm font-medium" htmlFor="price-max">
                                    تا قیمت
                                </Label>
                                <Input id="price-max" placeholder="1000" type="number" />
                            </div>
                            <Button size="sm">ثبت</Button>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion collapsible type="single">
                <AccordionItem value="rating">
                    <AccordionTrigger className="text-lg font-medium">رنگ</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-2 py-4">
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-black"></span><Checkbox id="black" />
                                مشکی{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-white border"></span><Checkbox id="white" />
                                سفید{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-red-700"></span><Checkbox id="red" />
                                قرمز{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-blue-700"></span><Checkbox id="blue" />
                                آبی{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-yellow-300"></span><Checkbox id="yellow" />
                                زرد{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-pink-400"></span><Checkbox id="pink" />
                                صورتی{"\n                            "}
                            </Label>
                            <Label className="flex items-center gap-2 font-normal">
                            <span className="w-3 h-3 rounded-full bg-green-500"></span><Checkbox id="green" />
                                سبز{"\n                            "}
                            </Label>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Filter