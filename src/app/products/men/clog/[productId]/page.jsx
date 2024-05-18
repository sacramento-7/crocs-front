import ImagesGallery from '@/components/singleProduct/imagesGallery/ImagesGallery';
import { FaMinus, FaPlus, FaRegHeart, FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TabInSingleProduct from '@/components/singleProduct/tabInSingleProduct/TabInSingleProduct';

const page = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 mt-6">
      <ImagesGallery />
      <div className="grid gap-6">
        <div className="grid gap-2">
          <div className='flex justify-between'>
            <h1 className="font-bold text-3xl">Clog men Product1</h1>
            <Button size="icon" variant="outline">
              <FaRegHeart className="w-5 h-5" />
            </Button>
            {/* <Button size="icon" variant="outline">
              <FaHeart className="w-5 h-5" />
            </Button> */}
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">$99</div>
          </div>
          <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
        </div>
        <div className='grid gap-2'>
          <form>
            <div class="space-x-2 flex text-sm">
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xs" checked />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XS
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="s" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  S
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="m" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  M
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="l" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  L
                </div>
              </label>
              <label>
                <input class="sr-only peer" name="size" type="radio" value="xl" />
                <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                  XL
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline">
              <FaMinus className="w-5 h-5" />
            </Button>
            <Input className="w-20 text-center" defaultValue={1} type="number" />
            <Button size="icon" variant="outline">
              <FaPlus className="w-5 h-5" />
            </Button>
          </div>
          <Button size="lg">Add To Cart</Button>
        </div>
        <TabInSingleProduct />
      </div>
    </div>
  )
}

export default page