"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
export default function CardWithForm() {
    const [user,setUser]=useState({
        username:"",
        password:""
    });
    const router = useRouter()
    const handleLogin=()=>{
        console.log("User: ",user);
        if(user.username=="admin")
        {
            router.replace('/admin')
        }
        else
        {
            router.replace('/user')
        }
    }
  return (
    <div className="flex min-h-screen justify-center items-center">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 mt-8">
              <Label htmlFor="name">Username</Label>
              <input type="text" placeholder="Enter username"   onChange={(event) =>
                                    setUser({ ...user, username: event.target.value })
                                } />
            </div>
            <div className="flex flex-col space-y-1.5 mt-8">
              <Label htmlFor="framework">Password</Label>
              <input type="password" placeholder="Enter password"   onChange={(event) =>
                            setUser({ ...user, password: event.target.value })
                        }/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button onClick={handleLogin}>Login</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
