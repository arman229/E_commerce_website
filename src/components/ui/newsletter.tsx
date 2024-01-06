import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

export function InputWithButton() {
    return (
        <div className={'flex justify-center my-[8rem] border/'}>
            <div>


                <h2 className="scroll-m-20  text-center   pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                    Subscribe Our Newsletter
                </h2>

                <p className="leading-7 [&:not(:first-child)]:mt-2 text-center">
                    Get the latest information and promo offers directly
                </p>
                <div className="flex  items-center space-x-2 mt-4   ">
                    <Input className={' w-4'} type="email" placeholder="Input email address" style={{padding: '18px'}}
                           showSearchIcon={false}/>
                    <Button type="submit">Get Started</Button>
                </div>
            </div>
        </div>

    )
}
