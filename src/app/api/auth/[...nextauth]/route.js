import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

// import user from "@/models/user";
import User from "../../../../../models/user";
import { connectToDB } from "../../../../../utils/db";


const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_SECRET,
        })
    ],
    callbacks:{
        async session({session}){
            return session
        },

        async signIn({account,profile,user,credentials}){
            try {
                await connectToDB()
                const checkEmail=await User.find({email:user.email})
                
                if (checkEmail.length==0){
                    await User.insertMany({name:user.name,email:user.email})
                }
                return true
                
            } catch (error) {
                console.log(e)
                return false
            }
        }

    }
})
// async function testUniDetailsModel() {
//     try {
//       // Insert a sample document
//       const result = await UniDetailsModel.create({
//         id: 1,
//         Name: 'Sample University',
//         href: 'https://example.com',
//         src: 'https://example.com/image.jpg',
//         Degree: 'Bachelor of Science',
//         Campus: 'Main Campus',
//         fees: {
//           Tuition: '10000',
//           Hostel: '5000',
//           Transport: '2000',
//           Food: '3000'
//         }
//       });
//       console.log('Sample document inserted:', result);
  
//       // Query for the inserted document
//       const documents = await UniDetailsModel.find({ id: 1 });
//       console.log('Documents found:', documents);
//     } catch (error) {
//       console.error('Error testing UniDetailsModel:', error);
//     }
//   }
  
// testUniDetailsModel();
export {handler as GET, handler as POST}