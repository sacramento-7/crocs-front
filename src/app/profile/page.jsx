import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const page = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="bg-gray-100 px-6 py-4 dark:bg-gray-800">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                            <AvatarFallback>AA</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl font-bold">Ali Akbari</h1>
                            <p className="text-gray-500 dark:text-gray-400">@aliakbari</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="outline">Edit Profile</Button>
                        <Button>Settings</Button>
                    </div>
                </div>
            </header>
            <main className="flex-1 bg-gray-50 dark:bg-gray-900 px-6 py-8">
                <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-[1fr_400px]">
                    <div>
                        <h2 className="text-2xl font-bold">Personal Information</h2>
                        <p className="text-gray-500 dark:text-gray-400">Update your personal details here.</p>
                        <form className="mt-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input defaultValue="Ali" id="firstName" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input defaultValue="Akbari" id="lastName" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input defaultValue="ali@gmail.com" id="email" type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="phone">Phone</Label>
                                <Input defaultValue="+98 936 1234567" id="phone" type="tel" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="address">Address</Label>
                                <Input defaultValue="zerehi 14 st." id="address" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="city">City</Label>
                                    <Input defaultValue="Tehran" id="city" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="postalCode">Postal Code</Label>
                                    <Input defaultValue="78455881147" id="postalCode" />
                                </div>
                            </div>
                            <Button className="w-full" type='submit'>Save Changes</Button>
                        </form>
                    </div>
                    <div className="bg-white p-6 shadow-sm dark:bg-gray-800">
                        <h2 className="text-2xl font-bold">Account Details</h2>
                        <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <span>Username</span>
                                <span className="font-medium">@aliakbari</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Joined</span>
                                <span className="font-medium">Ordibehesht 15</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Email</span>
                                <span className="font-medium">ali@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Phone Number</span>
                                <span className="font-medium">+989361236565</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span>Plan</span>
                                <span className="font-medium">Pro</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page