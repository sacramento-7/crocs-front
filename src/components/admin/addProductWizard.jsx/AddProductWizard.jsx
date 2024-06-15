'use client';

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const AddProductWizard = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        categories: [],
        colors: [],
    });

    const handleNext = () => {
        setCurrentStep(currentStep + 1)
    }
    const handleBack = () => {
        setCurrentStep(currentStep - 1)
    }
    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }
    const handleCategoryChange = (category) => {
        if (formData.categories.includes(category)) {
            setFormData({
                ...formData,
                categories: formData.categories.filter((c) => c !== category),
            })
        } else {
            setFormData({
                ...formData,
                categories: [...formData.categories, category],
            })
        }
    }
    const handleColorChange = (color) => {
        if (formData.colors.includes(color)) {
            setFormData({
                ...formData,
                colors: formData.colors.filter((c) => c !== color),
            })
        } else {
            setFormData({
                ...formData,
                colors: [...formData.colors, color],
            })
        }
    }
    const categories = ["صندل", "کفش راحتی", "دمپایی", "تست", "تابستانی"]
    const colors = ["قرمز", "سبز", "آبی", "مشکی", "سفید"]

    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold">افزودن محصول جدید</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 dark:text-gray-400">مرحله {currentStep} از 3</span>
                        <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div
                                className={`h-full bg-primary rounded-full transition-all duration-300`}
                                style={{ width: `${(currentStep / 3) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
                <form>
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <div>
                                <Label htmlFor="name" className="block text-sm font-bold leading-6 text-gray-900">نام محصول</Label>
                                <Input
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                    placeholder="نام محصول مورد نظر را وارد کنید"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="description" className="block text-sm font-bold leading-6 text-gray-900">توضیحات محصول</Label>
                                <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={(e) => handleChange("description", e.target.value)}
                                    placeholder="توضیحات محصول مورد نظر را وارد کنید"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="price" className="block text-sm font-bold leading-6 text-gray-900">قیمت محصول</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => handleChange("price", e.target.value)}
                                    placeholder="قیمت محصول مورد نظر را وارد کنید"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-4">
                                <Button  onClick={handleNext} disabled={!formData.name || !formData.description || !formData.price}>
                                    بعدی
                                </Button>
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div>
                                <Label className="block text-sm font-bold leading-6 text-gray-900 mb-3">دسته بندیها</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {categories.map((category) => (
                                        <Label key={category} className="flex items-center gap-2 cursor-pointer">
                                            <Checkbox
                                                checked={formData.categories.includes(category)}
                                                onCheckedChange={() => handleCategoryChange(category)}
                                            />
                                            {category}
                                        </Label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <Button variant="outline" onClick={handleBack}>
                                    قبلی
                                </Button>
                                <Button onClick={handleNext} disabled={formData.categories.length === 0}>
                                    بعدی
                                </Button>
                            </div>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div>
                                <Label className="block text-sm font-bold leading-6 text-gray-900 mb-3">رنگ ها</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {colors.map((color) => (
                                        <Label key={color} className="flex items-center gap-2 cursor-pointer">
                                            <Checkbox
                                                checked={formData.colors.includes(color)}
                                                onCheckedChange={() => handleColorChange(color)}
                                            />
                                            {color}
                                        </Label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between gap-4">
                                <Button variant="outline" onClick={handleBack}>
                                    قبلی
                                </Button>
                                <Button disabled={formData.colors.length === 0}>افزودن محصول</Button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default AddProductWizard